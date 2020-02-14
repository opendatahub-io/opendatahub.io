---
layout: docs
title: Pre-requisites for Optional Components
permalink: /docs/administration/advanced-installation/optional
style_class: optional
---

Before installing Argo, Seldon, Kafka, or AI Library, there are pre-requisites that must be installed before the Open Data Hub operator.  You must install several [Custom Resource Definitions (CRDs)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions) either through command line, or through the console.


### CLI Installation

1.  From the command line, use the `oc` command line tool to log in as a user with `cluster-admin` privileges.  For a developer installation from [try.openshift.com](https://try.openshift.com/) including AWS and CRC, the `kubeadmin` user will work.
    ```bash
    $ oc login https://api.crc.testing:6443 -u kubeadmin -p ***********
    Login successful.
    
    You have access to 53 projects, the list has been suppressed. You can list all projects with 'oc projects'
    
    Using project "default".
    ```

1.  To prepare to install **Argo**, install the [workflow CRD](https://gitlab.com/opendatahub/opendatahub-operator/raw/v0.5.1/deploy/crds/argo-crd.yaml). 
    ```bash
    $ oc apply -f https://gitlab.com/opendatahub/opendatahub-operator/raw/v0.5.1/deploy/crds/argo-crd.yaml
    customresourcedefinition.apiextensions.k8s.io/workflows.argoproj.io created
    ```

1.  To prepare to install **Seldon** and [AI Library]({{ '/docs/ai-library/installation.html' | prepend: site.baseurl }}), install the [SeldonDeployment CRD](https://gitlab.com/opendatahub/opendatahub-operator/raw/v0.5.1/deploy/crds/seldon-deployment-crd.json)
    ```bash
    $ oc apply -f https://gitlab.com/opendatahub/opendatahub-operator/raw/v0.5.1/deploy/crds/seldon-deployment-crd.json
    customresourcedefinition.apiextensions.k8s.io/seldondeployments.machinelearning.seldon.io created
    ```

1.  In preparation to deploy a **Kafka** cluster, install [Strimzi](https://strimzi.io/).


### Web Console Installation

1.  From the OpenShift console, log in as a user with `cluster-admin` privileges.  For a developer installation from [try.openshift.com](https://try.openshift.com/) including AWS and CRC, the `kubeadmin` user will work.
![Log in to OpenShift]({{site.baseurl}}/assets/img/pages/docs/quick-installation/login.png "Log in to OpenShift")

1.  To install CRDs, find the list of CRDs under `Administration` -> `Custom Resource Definitions` and click `Create Custom Resource Definitions`
![Admin CRDs]({{site.baseurl}}/assets/img/pages/docs/adv-install/admin-crd.png "Admin CRDs")

1.  To prepare to install **Argo**, install the workflow CRD.  Click `Create Custom Resource Definitions` copy the [argo-crd.yaml](https://gitlab.com/opendatahub/opendatahub-operator/blob/v0.5.1/deploy/crds/argo-crd.yaml) into the editing window, and click `Create`.
![Argo CRD]({{site.baseurl}}/assets/img/pages/docs/adv-install/create-argo-crd.png "Argo CRD")

1.  To prepare to install **Seldon** and [AI Library]({{ '/docs/ai-library/installation.html' | prepend: site.baseurl }}), install the SeldonDeployment CRD.  Click `Create Custom Resource Definitions` copy the [seldon-deployment-crd.json](https://gitlab.com/opendatahub/opendatahub-operator/blob/v0.5.1/deploy/crds/seldon-deployment-crd.json) into the editing window, and click `Create`.
![Seldon CRD]({{site.baseurl}}/assets/img/pages/docs/adv-install/create-seldon-crd.png "Seldon CRD")

1.  In preparation to deploy a **Kafka** cluster, install [Strimzi](https://strimzi.io/).
![Strimzi Install]({{site.baseurl}}/assets/img/pages/docs/adv-install/install-strimzi.png "Strimzi Install")



