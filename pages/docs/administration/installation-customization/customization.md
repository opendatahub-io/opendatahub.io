---
layout: docs
title: Customizing the Installation
permalink: /docs/administration/installation-customization/customization
---

This document explains the preferred way of customizing Open Data Hub and Kubeflow deployments.

## How to Customize the Installation

There are essentially three ways to customize the deployment. All of them will involve working with git and [odh-manifests](https://github.com/opendatahub-io/odh-manifests) repository.

* Fork odh-manifests and maintain changes there
* Create your own manifests repository to overwrite the component resources
* Fork odh-manifests repository and extend it with overlays for components


Each of the above requires you to have a git repository with some Kustomize and OpenShift resources which you will reference from the KFDef resource, but each of them requires different level of effort to create and maintain.

We will only discuss the last one (overlays) here, since that is the one we promote and recommend for maintaining the customizations. If you would like to learn more about the other approaches, you can read [the blog post](https://developers.redhat.com/blog/2020/07/23/open-data-hub-and-kubeflow-installation-customization/) we published on this topic.

### Customizing a Deployment Using Overlays

Overlays provide a great way to offer an optional customization to a component. It allows you to modify or delete/exclude existing resources or add new ones. You can simply enable and disable overlays in KFDef custom resource by adding to or removing them from overlays list at the component level. 

The way overlays generally work in the context of Open Data Hub manifests is that they add another layer on top of the `base` resources for the component. This layer can leverage any of the Kustomize functionality to extend the `base`. We provide many overlays across the odh-manifests repository. Some of them add resources (e.g. [build configurations](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub/jupyterhub/overlays/build)), some of them modify resources to customize the deployment for a specific environment (e.g. [parameterizing a storage class](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub/jupyterhub/overlays/storage-class)).

Overlays add a bit of complexity and it takes a bit of learning to become productive when using them, but it is well worth due to the flexibility and long term maintainablity you gain by leveraging them for your customizations.

#### Example

The example for the overlays approach can be found in [odh-manifests-overlays](https://github.com/vpavlin/odh-manifests-overlays) repository. At a first sight it looks like a copy of odh-manifests repository - it also shares its Git history.

It has one commit in addition which adds an [overlay to JupyterHub component](https://github.com/vpavlin/odh-manifests-overlays/commit/HEAD). This overlay modefies a JupyterHub ConfigMap and adds an additional JupyterHub Singleuser Profiles ConfigMap.

To test this out, you will need [Open Data Hub operator deployed]({{site.baseurl}}/docs/getting-started/quick-installation.html). Then you can simply upload the [customized KFDef resource]() to the cluster.

```
oc apply -f https://raw.githubusercontent.com/vpavlin/odh-manifests-overlays/master/kfdef/kfctl_openshift_custom.yaml
```

You should see the customized ConfigMap appearing in the cluster in a bit.

```
oc describe cm jupyterhub-cfg
```

You can also view the added ConfigMap by running the following command.

```
oc describe cm jupyterhub-additional-singleuser-profiles
```

{% include next-link.html label="Advanced Installation" url="/docs/administration/advanced-installation/optional.html" %}