---
type: release
author: lavlas
title:  Open Data Hub 1.7.0 Release Guide
preview: Open Data Hub 1.7.0 was just released
date: 2023-06-28
categories: features, roadmap, release
---

What is new?
------
Changes included in the Open Data Hub v1.7.0 release:
* ODH Dashboard [v2.10](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.10.0) & [v2.11](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.11.0) 
* [New Notebooks available for incubation in ODH](../../blog/2023-06-23-vscode-rstudio-incubation-blog/) - Code Server Notebook, R Studio Notebook (CPU & CUDA) 
* Data Science Pipelines Operator [v1.0.0](https://github.com/opendatahub-io/data-science-pipelines-operator/releases/tag/v1.0.0)
* [Model Mesh](https://github.com/opendatahub-io/modelmesh-serving)
* [TrustyAI Explainability](https://github.com/trustyai-explainability/trustyai-explainability)
* Distributed Workloads [v0.0.4](https://github.com/opendatahub-io/distributed-workloads/releases/tag/v0.0.4)

Notable Changes
------
* With this release, the ODH Operator will now bundle a local copy of the ODH Core manifests into the container image giving administrators the option to automatically update components to the latest ODH release from the OpenShift OperatorHub

The following is a list of components that are available in [v1.7.0](https://github.com/opendatahub-io/odh-manifests/releases/tag/v1.7.0) release of odh-manifests:

| Technology                                                                         | Version | Category           |
| ---------------------------------------------------------------------------------- | ------- | ------------------ |  |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.11 |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) |  |
| [Model Mesh Serving](https://github.com/opendatahub-io/modelmesh-serving) | v0.11.0 |
| [Data Science Pipelines Operator](https://github.com/opendatahub-io/data-science-pipelines-operator) | v1.0.0 |
| [TrustyAI Explainability](https://github.com/trustyai-explainability/trustyai-explainability) | v0.1.0 |
| [Distributed Workloads](https://github.com/opendatahub-io/distributed-workloads)<br /> * CodeFlare Operator v0.0.4 <br /> * Multi-Cluster App Dispatcher v1.31.0 <br /> * CodeFlare-SDK v0.4.4 <br /> * InstaScale v0.0.4 <br /> * KubeRay	v0.5.0 | v0.0.4 |
