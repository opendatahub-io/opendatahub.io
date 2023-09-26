---
layout: docs
title: Upgrade Installation(v2.0,2.1->v2.2)
permalink: /docs/getting-started/upgrade-install-new-operator
style_class: quick-installation
---
## disclaimer

Version 2.2 represents an alpha release, exclusively accessible via the "fast" channel.
Subsequent releases will transition to the "fast" channel once the new operator attains greater stability.

For installation steps of the old (version 1.X, stable),
see [quick installation of the 1.X version](../quick-installation).

For installation steps of the old (version 2.0, 2.1, fast),
see [quick installation of the 2.X version](../quick-installation-new-operator).

### Pre-requisites

Below information is only appliable for Open Data Hub Operator v2.0.0 and forth release.

Installing Open Data Hub requires OpenShift Container Platform version 4.10+.
All screenshots and instructions are from OpenShift 4.12.
For the purposes of this quick start, we used [try.openshift.com](https://try.openshift.com/) on AWS.

Tutorials will require an OpenShift cluster with a minimum of 16 CPUS and 32GB of memory across all OpenShift worker nodes.

### Installing v2.2 Open Data Hub Operator

The Open Data Hub operator is available for deployment in the OpenShift OperatorHub as a Community Operators. You can install it from the OpenShift web console by following the steps below:

1. From the OpenShift web console, log in as a user with `cluster-admin` privileges.  For a developer installation from [try.openshift.com](https://try.openshift.com/), the `kubeadmin` user will work.
   ![Log in to OpenShift](../assets/img/pages/docs/quick-installation/login.png)

2. On the lefthand bar, from `Operators` -> `OperatorHub`,
   - filter for `Open Data Hub Operator`.
   - select `AI/Machine Learning` and look for the icon for `Open Data Hub Operator`.
   ![OperatorHub](../assets/img/pages/docs/quick-installation-new-operator/operator-hub.png "OperatorHub")

3. Click `Continue` in the "Show community Operator" dialog if it pops out. Click the `Install` button to install the Open Data Hub operator.
   ![Install](../assets/img/pages/docs/quick-installation-new-operator/installation1.png "Install")

4. The subscription creation view will offer a few options including `Update Channel`, make sure the `fast` channel is selected. Click `Install` to deploy the opendatahub operator into the `openshift-operators` namespace.
   ![Select Channel](../assets/img/pages/docs/quick-installation-new-operator/channels.png "Select Channel")

5. To view the status of the Open Data Hub operator installation, find the Open Data Hub Operator under `Operators` -> `Installed Operators`. It might take a couple of minutes to show, but once the `Status` field displays `Succeeded`, you can proceed to create a DataScienceCluster instance
   ![Installed Operators](../assets/img/pages/docs/quick-installation-new-operator/operator-installed.png "Installed Operators")

### Create a DataScienceCluster instance

1. Click on the `Open Data Hub Operator` from `Installed Operators` page to bring up the details for the version that is currently installed.
   ![Open Data Hub Operator2.2](../assets/img/pages/docs/quick-installation-new-operator/odh-operator2.png "Open Data Hub Operator2.2")

2. Two ways to create DataScienceCluster instance:
   - Click `Create DataScienceCluster` button from the top warning dialog `DataScienceCluster required(Create a DataScienceCluster instance to use this Operator.)`
   - Click tab `Data Science Cluster` then click `Create DataScienceCluster` button

   They both lead to a new view called "Create DataScienceCluster". By default, namespace/project `opendatahub` is used to host all applications.

3. In the view of "Create DataScienceCluster", user can create DataScienceCluster instance in two ways with `components` fields.
   - Configure via "Form view":
      1. fill in `Name` field
      2. in the `components` section, by clicking `>` it expands currently supported core components. Check the set of components enabled by default and tick/untick the box in each component section to tailor the selection.
      ![Create DSC2 v2.3](../assets/img/pages/docs/quick-installation-new-operator/create-dsc-component3.png "Create DSC2 v2.3")

   - Configure via "YAML view":
      1. write config in YAML format
      2. get detail schema by expanding righthand sidebar ![Create DSC1 v2.3](../assets/img/pages/docs/quick-installation-new-operator/create-dsc-component4.png "Create DSC1 v2.3")
      3. read [ODH Core components](../tiered-components) to get the full list of supported components

4. Click `Create` button to finalize creation process in seconds.

5. Verify the installation by viewing the project workload.
   Click `Home` then `Projects`, select "opendatahub" project, in the `Workloads` tab to view enabled compoenents. These should be running.
   ![Verify Status](../assets/img/pages/docs/quick-installation-new-operator/verify-install.png "Verify Status")

### Dependencies

- to use "kserve" component, users are required to install two operators via OperatorHub before enable it in DataScienceCluster CR
   1. Red Hat OpenShift Serverless Operator from "Red Hat" catalog.
   2. Red Hat OpenShift Service Mesh Operator from "Red Hat" catalog.

- to use "datasciencepipeline" component, users are required to install one operator via OperatorHub before enable it in DataScienceCluster CR
   1. Red Hat OpenShift Pipelines Operator from "Red Hat" catalog.

- to use "distributedworkloads" component, users are required to install one operator via OperatorHub before enable it in DataScienceCluster CR
   1. CodeFlare Operator from "Community" catalog.

- to use "modelmesh" component, users are required to install one operator via OperatorHub before enable it in DataScienceCluster CR
   1. Prometheus Operator from "Community" catalog.

### Limitation

We offer a feature that allows users to configure the namespace for their application. By default, the ODH operator utilizes the `opendatahub` namespace. However, users have the flexibility to opt for a different namespace of their choice. This can be accomplished by modifying the `DSCInitialization` instance with the `.spec.applicationsNamespace` field.

There are two scenarios in which this feature can be utilized:

- Assigning a New Namespace: Users can set a new namespace using `DSCInitialization` instance before creating the `DataScienceCluster` instance.
- Switching to a New Namespace: Users have the option to switch to a new namespace after resources have already been established in the application's current namespace. It's important to note that in this scenario, only specific resources (such as deployments, configmaps, networkpolicies, roles, rolebindings, secrets etc) will be removed from the old application namespace during cleanup. For namespace-scoped CRD instances, users will be responsible to cleanup themselves.

### Upgrade from v2.0/v2.1 to v2.2 and forth release

#### Cleanup resource in cluster

To upgrade, follow these steps:

- Disable the component(s) in your DataScienceCluster instance.
- Delete both the DataScienceCluster instance and DSCInitialization instance.
- Click "uninstall" Open Data Hub operator.
- Delete 2 CRD
  - Click `Administration` then `CustomResourceDefinitions`, search for `DSCInitialization`
  - Under `Latest version` column, if shows `v1alpha1`, click "Edit" button(3 dots) on the right, and `Delete CustomResourceDefinition`
  - Repeat the same procedure on `DataScienceCluster`

After completing these steps, please refer to the installation guide to proceed with a clean installation of the v2.2+ operator.

#### API change

- when create or update DataScienceCluster instance, API version has been upgraded from `v1alpha1` to `v1`
  - schema in `v1alpha1` API
      to enabled each component: `.spec.components.[component_name].enabled: true`
      to disable each component: `.spec.components.[component_name].enabled: false`

  - schema in `v1` API
      to enabled each component: `.spec.components.[component_name].managementState: Managed`
      to disable each component: `.spec.components.[component_name].managementState: Removed`

   Example for default DataScienceCluster instance in v2.2

   ```shell
   apiVersion: datasciencecluster.opendatahub.io/v1
   kind: DataScienceCluster
   metadata:
      name: default
   spec:
      components:
         codeflare:
            managementState: Removed
         dashboard:
            managementState: Managed
         datasciencepipelines:
            managementState: Managed
         kserve:
            managementState: Removed
         modelmeshserving:
            managementState: Managed
         ray:
            managementState: Removed
         workbenches:
            managementState: Managed
   ```
