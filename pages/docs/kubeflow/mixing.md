---
layout: docs
title: Combining Open Data Hub and Kubeflow Components
permalink: /docs/kubeflow/mixing
style_class: kubeflow
---

### Combining Open Data Hub and Kubeflow Components

With Open Data Hub Operator being built on top of Kubeflow operator, users are enabled to deploy both Open Data Hub and Kubeflow by the same operator. It is also our goal to provide the capability to mix components from both projects.

#### How to Deploy Components From Both Projects

We are maintaining an example KFDef manifest which includes components from both projects. You can find it in [opendatahub-io/manifests](https://github.com/opendatahub-io/odh-manifests/blob/master/kfdef/kfctl_openshift_mix.yaml) repository.

To use it, simply follow the [basic tutorial]({{site.baseurl}}/docs/getting-started/basic-tutorial), but instead of the default KFDef manifest, deploy the one linked above:

```
oc apply -f https://raw.githubusercontent.com/opendatahub-io/odh-manifests/master/kfdef/kfctl_openshift_mix.yaml
```

#### How Does it Work

KFDef manifest allows you to list multiple repository references. This is useful for mixing components from ODH and Kubeflow, but also for [the deployment customization]({{site.baseurl}}/docs/administration/installation-customization/customization).

As you can see, we are providing references to [odh-manifests](https://github.com/opendatahub-io/odh-manifests/) repository (as `manifests`) and to [manifests](https://github.com/opendatahub-io/manifests/) repository (as `kf-manifests`). With these two references in your KFDef, you can simply mix and match components from both of them

```
...
  - kustomizeConfig:
      repoRef:
        name: manifests
        path: odhargo/cluster
    name: odhargo-cluster
  - kustomizeConfig:
      repoRef:
        name: manifests
        path: odhargo/odhargo
    name: odhargo
  - kustomizeConfig:
      repoRef:
        name: kf-manifests
        path: tf-training/tf-job-crds
    name: tf-job-crds
  - kustomizeConfig:
      repoRef:
        name: kf-manifests
        path: tf-training/tf-job-operator
    name: tf-job-operator
  repos:
  - name: kf-manifests
    uri: https://github.com/opendatahub-io/manifests/tarball/v1.0-branch-openshift  
  - name: manifests
    uri: https://github.com/opendatahub-io/odh-manifests/tarball/master
...

```

As you can see above, there are 2 components mentioned - Argo and TF Job Operator. Argo uses `manifests` as a source repository and TF Job Operator uses `kf-manifests`.

### Verified Components

| Component | Version | Issues |
| ----------| --------|--------|
| [TF Job](https://github.com/opendatahub-io/manifests/blob/v1.0-branch-openshift/tf-training/)    |  v1     | |

{% include next-link.html label="AI Library" url="/docs/ai-library.html" %}
