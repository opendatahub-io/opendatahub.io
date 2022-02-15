---
layout: docs
title: Quick Installation
permalink: /docs/getting-started/quick-installation
style_class: quick-installation
---
### Pre-requisites

Installing Open Data Hub requires OpenShift Container Platform version 4.2+. Documentation for OpenShift is located ([here](https://docs.openshift.com/container-platform/4.5/welcome/index.html)). All screenshots and instructions are from OpenShift 4.5.  For the purposes of this quick start, we used [try.openshift.com](https://try.openshift.com/) on AWS.  Tutorials have also been tested on [Code Ready Containers](https://code-ready.github.io/crc/) (CRC) with cluster resources [configured](https://code-ready.github.io/crc/#configuring-the-virtual-machine_gsg) for 6 CPUS and 16GB of RAM.

We will not be installing optional components such as Argo, Seldon, AI Library, or Kafka to avoid using too many resources in case your cluster is small.

### Installing the Open Data Hub Operator

The Open Data Hub operator is available for deployment in the OpenShift OperatorHub as a Community Operators. You can install it from the OpenShift web console by following the steps below:

1. From the OpenShift web console, log in as a user with `cluster-admin` privileges.  For a developer installation from [try.openshift.com](https://try.openshift.com/) including AWS and CRC, the `kubeadmin` user will work.
![Log in to OpenShift]({{site.baseurl}}/assets/img/pages/docs/quick-installation/login.png "Log in to OpenShift")
1. Create a new namespace named 'odh' for your installation of Open Data Hub.
![Create Namespace 'odh']({{site.baseurl}}/assets/img/pages/docs/quick-installation/create-namespace.png "Create Namespace 'odh'")
1. Find `Open Data Hub` in the `OperatorHub` catalog.
   1. Select the new namespace if not already selected.
   1. Under `Operators`, select `OperatorHub` for a list of operators available for deployment.
   1. Filter for `Open Data Hub` or look under `Big Data` for the icon for `Open Data Hub`.
![OperatorHub]({{site.baseurl}}/assets/img/pages/docs/quick-installation/operator-hub.png "OperatorHub")
1. Click the `Install` button and follow the installation instructions to install the Open Data Hub operator.
![Install]({{site.baseurl}}/assets/img/pages/docs/quick-installation/install.png "Install")
1. The subscription creation view will offer a few options including *Update Channel*, keep the `rolling` channel selected.
![Select Channel]({{site.baseurl}}/assets/img/pages/docs/quick-installation/channels.png "Install")
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
        # The name of your deployment
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
          # Deploy Radanalytics Spark Operator
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: radanalyticsio/spark/cluster
            name: radanalyticsio-spark-cluster
          # Deploy Open Data Hub JupyterHub
          - kustomizeConfig:
              parameters:
                - name: s3_endpoint_url
                  value: s3.odh.com
              repoRef:
                name: manifests
                path: jupyterhub/jupyterhub
            name: jupyterhub
          # Deploy addtional Open Data Hub Jupyter notebooks
          - kustomizeConfig:
              overlays:
                - additional
              repoRef:
                name: manifests
                path: jupyterhub/notebook-images
            name: notebook-images
        # Reference to all of the git repo archives that contain component kustomize manifests
        repos:
          # Official Open Data Hub v0.9.0 component manifests repo
          # This shows that we will be deploying components from an archive of the odh-manifests repo tagged for v0.9.0
          - name: manifests
            uri: 'https://github.com/opendatahub-io/odh-manifests/tarball/v0.9.0'
        version: v0.9-branch-openshift
      ```

1. Update the `spec` of the resource to match the above and click `Create`.  If you accepted the default name, this will trigger the creation of an Open Data Hub deployment named `opendatahub` with JupyterHub and Spark.

1. Verify the installation by viewing the Open Data Hub tab within the operator details.  You Should see `opendatahub` listed.
![ODH List]({{site.baseurl}}/assets/img/pages/docs/quick-installation/odh-list.png "ODH List")

1. Verify the installation by viewing the project workload.  JupyterHub and Spark Operator should be running.
![Verify Status]({{site.baseurl}}/assets/img/pages/docs/quick-installation/verify-install.png "Verify Status")

{% include next-link.html label="Basic Tutorial" url="/docs/getting-started/basic-tutorial.html" %}
