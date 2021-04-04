---
layout: docs
title: Installation
permalink: /docs/kubeflow/installation
style_class: kubeflow
---

### Pre-requisites
To install Kubeflow on OpenShift 4.2+ the following are the prerequisites:
1. **Code Ready Container (CRC)**:  A CRC-generated OpenShift cluster with the following specifications:

   Recommended:
   ```
   * 16GB memory
   * 6 cpu
   * 45G disk space
   ```

   Minimum:
   ```
   * 10GB memory
   * 6 cpu
   * 35G disk space (default for CRC)
   ```

   **NOTE**: At the minimum specs, the CRC OpenShift cluster may be unresponsive for ~20mins while Kubeflow components are being deployed.

   --OR--

   **OpenShift 4.2 or later**: An available OpenShift 4.2+ cluster or you can try a cluster on [try.openshift.com](https://try.openshift.com)

1. **kfctl**: The installation tool `kfctl` is needed to install/uninstall Kubeflow only if following the manual method. Download the tool from [github](https://github.com/kubeflow/kubeflow/releases/), make sure the `kfctl` release number matches the Kubeflow release you are trying to install. 

1. An OpenShift user account with [cluster-admin](https://docs.openshift.com/container-platform/4.4/authentication/using-rbac.html#creating-cluster-admin_using-rbac) privileges

### Install Kubeflow using Open Data Hub Operator
The easiest method to install Kubeflow is to use the Open Data Hub operator from the OpenShift OperatorHub as described in the [Quick Installation](../getting-started/beta/quick-installation.md) instructions. 

#### Install Kubeflow with Istio Enabled

To install Kubeflow on OpenShift 4.2(or later) please follow the steps below:
1. Install the Open Data Hub operator by following the steps on `Installing the Open Data Hub Operator` in the Open Data Hub [Quick Installation](../getting-started/quick-installation.html#installing-the-open-data-hub-operator) guide.

1. After the Open Data Hub operator is installed, follow the steps to `Create a New Open Data Hub Deployment` in the Open Data Hub [Quick Installation](../getting-started/quick-installation.html#create-a-new-open-data-hub-deployment) guide.

   **NOTE**: During these steps, you will need to use the [kfctl_openshift_*.yaml](https://github.com/kubeflow/manifests/tree/master/distributions/kfdef) KfDef in the kubeflow/manifests repo that we have curated specifically for installing Kubeflow. Additionally, you will need to create the Open Data Hub instance in the namespace `kubeflow`.

1. Verify installation
    ```bash
    oc get pods
    ```

1. Launch the Kubeflow portal
    ```bash
    oc get routes -n istio-system istio-ingressgateway -o jsonpath='http://{.spec.host}/'
     http://<istio ingress route>/
    ```
    Once the pods are all running you can access the Kubeflow dashboard as shown below by going to the `istio-system` namespace and clicking on the `istio-ingressgateway` route.
    ![Dashboard]({{site.baseurl}}/assets/img/pages/docs/kubeflow/kfdashboard.png "Dashboard")
    
### Manual Installation of Kubeflow
To install Kubeflow manually, please follow the following instructions on the [Kubeflow Openshift documentation](https://www.kubeflow.org/docs/openshift/install-kubeflow/)

### Delete A Kubeflow installation
You can remove a Kubeflow installation by deleting the KfDef custom resources that you created previously.

If you notice that the Kubeflow namespace is stuck in a `Terminating` state, you can run the commands below to resolve this issue

```bash
oc delete mutatingwebhookconfigurations admission-webhook-mutating-webhook-configuration
oc delete mutatingwebhookconfigurations inferenceservice.serving.kubeflow.org
oc delete mutatingwebhookconfigurations katib-mutating-webhook-config
oc delete mutatingwebhookconfigurations mutating-webhook-configurations
oc delete mutatingwebhookconfiguration seldon-mutating-webhook-configuration-kubeflow

oc delete validatingwebhookconfiguration seldon-validating-webhook-configuration-kubeflow
oc delete validatingwebhookconfiguration katib-validating-webhook-config
```
If you installed Kubeflow manually follow the uninstall instruction found on the [Kubeflow Openshift documentation](https://www.kubeflow.org/docs/openshift/)

{% include next-link.html label="Combining Components" url="/docs/kubeflow/mixing.html" %}
