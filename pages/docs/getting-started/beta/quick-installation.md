---
layout: docs
title: Quick Installation
permalink: /docs/getting-started/quick-installation
style_class: quick-installation
---
### Pre-requisites

Installing Open Data Hub requires OpenShift Container Platform version 4.8+. All screenshots and instructions are from OpenShift 4.10.  For the purposes of this quick start, we used [try.openshift.com](https://try.openshift.com/) on AWS.  Tutorials will require an OpenShift cluster with a minimum of 16 CPUS and 32GB of memory across all OpenShift worker nodes.

### Installing the Open Data Hub Operator

The Open Data Hub operator is available for deployment in the OpenShift OperatorHub as a Community Operators. You can install it from the OpenShift web console by following the steps below:

1. From the OpenShift web console, log in as a user with `cluster-admin` privileges.  For a developer installation from [try.openshift.com](https://try.openshift.com/), the `kubeadmin` user will work.
![Log in to OpenShift]({{site.baseurl}}/assets/img/pages/docs/quick-installation/login.png "Log in to OpenShift")
1. Create a new namespace named 'odh' for your installation of Open Data Hub.
![Create Namespace 'odh']({{site.baseurl}}/assets/img/pages/docs/quick-installation/create-namespace.png "Create Namespace 'odh'")
1. Find `Open Data Hub` in the `OperatorHub` catalog.
   1. Select the new namespace if not already selected.
   1. Under `Operators`, select `OperatorHub` for a list of operators available for deployment.
   1. Filter for `Open Data Hub` or look under `AI/Machine Learning` for the icon for `Open Data Hub`.
![OperatorHub]({{site.baseurl}}/assets/img/pages/docs/quick-installation/operator-hub.png "OperatorHub")
1. Click the `Install` button and follow the installation instructions to install the Open Data Hub operator.
![Install]({{site.baseurl}}/assets/img/pages/docs/quick-installation/install.png "Install")
1. The subscription creation view will offer a few options including *Update Channel*, keep the `rolling` channel selected.
![Select Channel]({{site.baseurl}}/assets/img/pages/docs/quick-installation/channels.png "Install")
1. It is important to switch to the namespace you created earlier. Installing in the "OpenShift Operators" namespace will result in a fatal error similar to "csv created in namespace with multiple operatorgroups, can't pick one automatically".
![Change Namespace to 'odh']({{site.baseurl}}/assets/img/pages/docs/quick-installation/odh-namespace.png "Change Namespace to 'odh'")
1. To view the status of the Open Data Hub operator installation, find the Open Data Hub Operator under `Operators` -> `Installed Operators` (inside the namespace you created earlier). Once the STATUS field displays `InstallSucceeded`, you can proceed to create a new Open Data Hub deployment.
![Installed Operators]({{site.baseurl}}/assets/img/pages/docs/quick-installation/installed-operators.png "Installed Operators")

### Create a New Open Data Hub Deployment

The Open Data Hub operator will create new Open Data Hub deployments and manage its components.  Let's create a new Open Data Hub deployment.

1. Find the Open Data Hub Operator under `Installed Operators` (inside the namespace you created earlier)
![Installed Operators]({{site.baseurl}}/assets/img/pages/docs/quick-installation/installed-operators.png "Installed Operators")

1. Click on the Open Data Hub Operator to bring up the details for the version that is currently installed.
![Open Data Hub Operator]({{site.baseurl}}/assets/img/pages/docs/quick-installation/odh-operator.png "Open Data Hub Operator")

1. Click `Create Instance` to create a new deployment.
![Create New ODH]({{site.baseurl}}/assets/img/pages/docs/quick-installation/new-deployment.png "Create New ODH")

1. Select the `YAML View` radio button to be presented with a YAML file to customize your deployment.  Most of the components available in ODH have been removed, and for this tutorial we'll leave them that way to make sure the components for JupyterHub and Spark fit within our cluster resource constraints.


   Take note of some parameters:
      ```yaml
      # ODH uses the KfDef manifest format to specify what components will be included in the deployment
      apiVersion: kfdef.apps.kubeflow.org/v1
      kind: KfDef
      metadata:
        # The name of your kfdef object in OpenShift
        name: opendatahub
      # only the components listed in the `KFDef` resource will be deployed:
      spec:
        applications:
          # REQUIRED: This contains all of the common options used by all ODH components
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: odh-common
            name: odh-common
          # Deploy ODH Dashboard w/ authentication enabled
          - kustomizeConfig:
              overlays:
              - authentication
              repoRef:
                name: manifests
                path: odh-dashboard
            name: odh-dashboard
          # Deploy ODH Notebook Controller
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: odh-notebook-controller
            name: odh-notebook-controller
          # Deploy addtional Open Data Hub Jupyter notebooks
          - kustomizeConfig:
              overlays:
                - additional
              repoRef:
                name: manifests
                path: jupyterhub/notebook-images
            name: notebook-images
          # Deploy Model Mesh
          - kustomizeConfig:
              overlays:
                - odh-model-controller
              repoRef:
                name: manifests
                path: model-mesh
            name: model-mesh
          # Deploy Data Science Pipeline w/ standalone UI
          - kustomizeConfig:
              overlays:
                - metadata-store-mariadb
                - ds-pipeline-ui
                - object-store-minio
                - default-configs
              repoRef:
                name: manifests
                path: data-science-pipelines
            name: data-science-pipelines
        # Reference to all of the git repo archives that contain component kustomize manifests
        repos:
          # Official Open Data Hub v1.4 component manifests repo
          # This shows that we will be deploying components from an archive of the odh-manifests repo tagged for v1.4.0
          - name: manifests
            uri: 'https://github.com/opendatahub-io/odh-manifests/tarball/v1.4'
      ```

1. Update the `spec` of the resource to match the above and click `Create`.  If you accepted the default name, this will trigger the creation of an Open Data Hub kfdef object named `opendatahub` and start the rollout of the [ODH Core components]({{site.baseurl}}/docs/tiered-components.html).

1. Verify the installation by viewing the Open Data Hub tab within the operator details.  You Should see `opendatahub` listed.
![ODH List]({{site.baseurl}}/assets/img/pages/docs/quick-installation/odh-list.png "ODH List")

1. Verify the installation by viewing the project workload.  The [ODH Core components]({{site.baseurl}}/docs/tiered-components.html) should be running.
![Verify Status]({{site.baseurl}}/assets/img/pages/docs/quick-installation/verify-install.png "Verify Status")

{% include next-link.html label="Administration" url="/docs/administration/installation-customization/customization.html" %}
