---
layout: docs
title: Quick Installation
permalink: /docs/getting-started/quick-installation
style_class: quick-installation
---
### Pre-requisites

Installing Open Data Hub requires OpenShift Container Platform version 4.10+. All screenshots and instructions are from OpenShift 4.10.  For the purposes of this quick start, we used [try.openshift.com](https://try.openshift.com/) on AWS.  Tutorials will require an OpenShift cluster with a minimum of 16 CPUS and 32GB of memory across all OpenShift worker nodes.

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
1. The subscription creation view will offer a few options including *Update Channel*, keep the `rolling` channel selected. Click `Install` to deploy the opendatahub operator into the `openshift-operators` namespace.
![Select Channel]({{site.baseurl}}/assets/img/pages/docs/quick-installation/channels.png "Install")
1. Click `View Operator` to navigate to the OpenShift OperatorHub page for the newly install ODH operator.
![View Operator]({{site.baseurl}}/assets/img/pages/docs/quick-installation/installed-operator-ready-for-use.png "View Installed ODH Operator")
1. It is important to switch to the namespace you created earlier. Installing in the "OpenShift Operators" namespace will result in a fatal error similar to "csv created in namespace with multiple operatorgroups, can't pick one automatically".
![Change Namespace to 'odh']({{site.baseurl}}/assets/img/pages/docs/quick-installation/installed-operators-change-namespace.png "Change Namespace to 'odh'")
1. To view the status of the Open Data Hub operator installation, find the Open Data Hub Operator under `Operators` -> `Installed Operators` (inside the namespace you created earlier). Once the STATUS field displays `InstallSucceeded`, you can proceed to create a new Open Data Hub deployment.
![Installed Operators]({{site.baseurl}}/assets/img/pages/docs/quick-installation/installed-operators.png "Installed Operators")

### Create a New Open Data Hub Deployment

The Open Data Hub operator will create new Open Data Hub deployments and manage its components.  Let's create a new Open Data Hub deployment.

1. Find the Open Data Hub Operator under `Installed Operators` (inside the namespace you created earlier)
![Installed Operators]({{site.baseurl}}/assets/img/pages/docs/quick-installation/installed-operators.png "Installed Operators")

1. Click on the Open Data Hub Operator to bring up the details for the version that is currently installed.
![Open Data Hub Operator]({{site.baseurl}}/assets/img/pages/docs/quick-installation/odh-operator.png "Open Data Hub Operator")

1. Click `Create Instance` to create a new deployment.  The default `kfdef` provided will deploy the latest release of the [ODH Core components]({{site.baseurl}}/docs/tiered-components.html). If you accepted the default name, this will trigger the creation of an Open Data Hub kfdef object named `opendatahub` and start the rollout of the [ODH Core components]({{site.baseurl}}/docs/tiered-components.html).
![Create New ODH]({{site.baseurl}}/assets/img/pages/docs/quick-installation/new-deployment.png "Create New ODH")

1. Verify the installation by viewing the Open Data Hub tab within the operator details.  You Should see `opendatahub` listed.
![ODH List]({{site.baseurl}}/assets/img/pages/docs/quick-installation/odh-list.png "ODH List")

1. Verify the installation by viewing the project workload.  The [ODH Core components]({{site.baseurl}}/docs/tiered-components.html) should be running.
![Verify Status]({{site.baseurl}}/assets/img/pages/docs/quick-installation/verify-install.png "Verify Status")

{% include next-link.html label="Working On Data Science Projects" url="/docs/working-on-data-science-projects.html" %}
