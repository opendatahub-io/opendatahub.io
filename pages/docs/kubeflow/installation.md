---
layout: docs
title: Installation
permalink: /docs/kubeflow/installation
style_class: kubeflow
---

### Pre-requisites
To install Kubeflow 0.7 on OpenShift 4.2 the following are the prerequisites:  
1.**Code Ready Container (CRC)**:  A CRC-generated OpenShift cluster that with the following specifications:        Recommended:  
    `16GB memory`    
    `6 cpu`   
    `45G disk space`    
Minimum:  
    `10GB memory`    
    `6 cpu`    
    `30G disk space (default for CRC)`  
       
   **NOTE**: At the minimum specs, the CRC OpenShift cluster may be unresponsive for ~20mins while Kubeflow components are being deployed.  
   When installing Kubeflow on a CRC cluster, there is an extra overlay (named `crc`) to enable the `metadata` component in `kfctl_openshift.yaml`.  It is commented out by default.  Uncomment to enable it.   

  OR  
   **OpenShift 4.2**: An available OpenShift 4.2 cluster or you can try a cluster on [try.openshift.com](https://try.openshift.com)  
     
2.**kfctl**: The installation tool `kfctl` is needed to install/uninstall Kubeflow. Download the tool from [github](https://github.com/kubeflow/kubeflow/releases/), the version `0.7.0` is required for the installation.


### Install Kubeflow with Istio Enabled

To install Kubeflow 0.7 on OpenShift 4.2 please follow the steps below:  
1. Clone the opendatahub-manifests fork repo which defaults to the branch `v0.7.0-branch-openshift`  
    `git clone https://github.com/opendatahub-io/manifests.git`   
    `cd manifests`
2. Install using the Openshift configuration file and local downloaded manifests since at the time of writing this document we ran into this kubeflow [bug](https://github.com/kubeflow/kubeflow/issues/4678) that would not allow downloading the manifests during a build process.  
    `sed -i 's#uri: .*#uri: '$PWD'#' ./kfdef/kfctl_openshift.yaml`  
     `kfctl build --file=kfdef/kfctl_openshift.yaml`  
     `kfctl apply --file=./kfdef/kfctl_openshift.yaml`  
3. Verify installation   
    `oc get pods`
4. Launch the Kubeflow portal  
    `oc get routes -n istio-system istio-ingressgateway -o jsonpath='http://{.spec.host}/'`  
    `http://<istio ingress route>/`  

### Delete A Kubeflow installation
To delete a Kubeflow installation please follow these steps:  
`kfctl delete --file=./kfdef/<kfctl file name>.yaml`  
`rm -rf kfdef/kustomize/`  
`oc delete mutatingwebhookconfigurations admission-webhook-mutating-webhook-configuration`  
`oc delete mutatingwebhookconfigurations inferenceservice.serving.kubeflow.org`  
`oc delete mutatingwebhookconfigurations katib-mutating-webhook-config`  
`oc delete mutatingwebhookconfigurations mutating-webhook-configurations`  

{% include next-link.html label="Combining Components" url="/docs/kubeflow/mixing.html" %}
