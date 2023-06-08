---
type: release
author: lavlas
title:  Open Data Hub 1.6.0 Release Guide
preview: Open Data Hub 1.6.0 was just released
date: 2023-05-15
categories: features, road map, release
---

What is new?
------
Changes included in the Open Data Hub v1.6.0 release:
* ODH Dashboard [v2.9](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.9.0) 
* Jupyter Notebooks [v1.4.0](https://github.com/opendatahub-io/notebooks/releases/tag/v1.4.0)
* Data Science Pipelines Operator [v0.2.0](https://github.com/opendatahub-io/data-science-pipelines-operator/releases/tag/v0.2.0)
* [Model Mesh](https://github.com/opendatahub-io/modelmesh-serving)
* [TrustyAI Explainability](https://github.com/trustyai-explainability/trustyai-explainability)
* Incubation of [Distributed Workloads](../2023-05-19-docs-distributedworkloads) stack
  * `CodeFlare SDK` to define and control remote distributed compute jobs and infrastructure with any Python based environment
  * `Multi-Cluster Application Dispatcher (MCAD)` for management of batch jobs
  * `Instascale` for on-demand scaling of a Kubernetes cluster
  * `KubeRay` for management of remote Ray clusters on Kubernetes for running distributed compute workloads


Notable Changes
------
* The `stable` channel for the ODH Operator installation from OperatorHub has been officially removed as a supported OLM channel and upgrades will only continue on the the `rolling` channel. If you currently have the operator installed on the the `stable` channel, you will need to [change the update channel for the ODH Operator](https://docs.openshift.com/container-platform/4.12/operators/admin/olm-upgrading-operators.html#olm-changing-update-channel_olm-upgrading-operators) to `rolling` to ensure that you can upgrade automatically to all releases after ODH v1.6.0
* The data-science-pipelines manifest has been [removed](https://github.com/opendatahub-io/odh-manifests/pull/737) as we move the management of the Data Science Pipelines deployments to the [Data Science Pipelines operator](https://github.com/opendatahub-io/data-science-pipelines-operator)


The following is a list of components that are available in [v1.6.0](https://github.com/opendatahub-io/odh-manifests/releases/tag/v1.6.0) release of odh-manifests:

| Technology                                                                         | Version | Category           |
| ---------------------------------------------------------------------------------- | ------- | ------------------ |  |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.9 |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) | v1.4.0 |
| [Model Mesh Serving](https://github.com/opendatahub-io/modelmesh-serving) | v0.11.0 |
| [Data Science Pipelines Operator](https://github.com/opendatahub-io/data-science-pipelines-operator) | v0.2.0 |
| [TrustyAI Explainability](https://github.com/trustyai-explainability/trustyai-explainability) | v0.1.0 |
