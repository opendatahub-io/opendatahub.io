---
layout: docs
title: Customizing the Installation
permalink: /docs/administration/installation-customization/customization
---

This document explains the preferred way of customizing Open Data Hub and Kubeflow deployments.

## How to Customize the Installation

There are essentially three ways to customize the deployment. All of them will involve working with [kustomize](https://kustomize.io/), the [odh-manifests](https://github.com/opendatahub-io/odh-manifests) repository and a [GitOps](https://www.redhat.com/en/topics/devops/what-is-gitops) workflow

* Fork odh-manifests and maintain changes there
* Create your own manifests repository to overwrite the component resources
* Fork odh-manifests repository and extend it with overlays for components


Each of the above requires you to have a git repository with some Kustomize and OpenShift resources which you will reference from the KFDef resource, but each of them requires different level of effort to create and maintain.

We will only discuss the last one (overlays) here, since that is the one we promote and recommend for maintaining the customizations. If you would like to learn more about the other approaches, you can read [the blog post](https://developers.redhat.com/blog/2020/07/23/open-data-hub-and-kubeflow-installation-customization/) we published on this topic.

### Customizing a Deployment Using Overlays

Overlays provide a great way to offer an optional customization to a component. It allows you to modify or delete/exclude existing resources or add new ones. You can simply enable and disable overlays in KFDef custom resource by adding to or removing them from overlays list at the component level. 

The way overlays generally work in the context of Open Data Hub manifests is that they add another layer on top of the `base` resources for the component. This layer can leverage any of the Kustomize functionality to extend the `base`. We provide many overlays across the odh-manifests repository. Some of them add resources (e.g. [deploying custom database storage](https://github.com/opendatahub-io/odh-manifests/tree/master/data-science-pipelines/overlays/metadata-store-mariadb)) and others can modify resources to customize the deployment for a specific environment (e.g. [enabling oauth authentication in the dashboard](https://github.com/opendatahub-io/odh-manifests/tree/master/odh-dashboard/overlays/authentication)).

Overlays add a bit of complexity and it takes a bit of learning to become productive when using them, but it is well worth due to the flexibility and long term maintainablity you gain by leveraging them for your customizations.

If you need additional examples of kustomize overlays, please read the kubernetes documentation on kustomize manifests [Bases and Overlays](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/#bases-and-overlays)