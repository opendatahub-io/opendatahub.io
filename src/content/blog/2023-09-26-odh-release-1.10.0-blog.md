---
type: release
author: zdtsw
title:  Open Data Hub 1.10.0 Release Guide
preview: Open Data Hub 1.10.0 was just released
date: 2023-09-26
categories: features, roadmap, release
---

What is new?
------
Changes included in the Open Data Hub v1.10.0 release:

* ODH Operator

  * **rolling channel** (default): [v1.10.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v1.10.0)
  * **fast channel**(alpha): [v2.2.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v2.2.0)
* ODH Dashboard [v2.15-incubation](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.15.0-incubation)
* Data Science Pipelines Operator [v1.4.0](https://github.com/opendatahub-io/data-science-pipelines/releases/tag/v1.4.0)
* ODH Notebook Controller [v1.7.0-3](https://github.com/opendatahub-io/kubeflow/releases/tag/v1.7.0-3)
* Integration of KServe manifests with new operator. [v0.11.0](https://github.com/opendatahub-io/odh-manifests/tree/master/kserve)
* Distributed Workloads [v1.0.0-rc.1](https://github.com/opendatahub-io/distributed-workloads/releases/tag/v1.0.0-rc.1)
* TrustyAI Operator[v1.9.0](https://github.com/opendatahub-io/odh-manifests/tree/master/trustyai-service-operator)

**NOTE:** Please review the [odh-operator v2.0 blog](../2023-07-24-odh-operator-v2.0-blog) to learn more about the new `DataScienceCluster` CustomResourceDefinition that will be replacing the `KfDef` deployment method in a future release

Notable Changes
------

* With the release of ODH Operator version 2.2.0 on the fast channel, the API version has been updated from v1alpha1 to v1. We strongly recommend that you carefully review the [upgrade instructions](../docs/upgrade-install-new-operator.md) before proceeding with an upgrade from v2.0.0 or v2.1.0 to v2.2.0

The following is a list of components that are available in [v1.10.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v1.10.0) release of from operator:

| Technology                                                                         | Version | Category           |
| ---------------------------------------------------------------------------------- | ------- | ------------------ |  |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.15-incubation |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) | v1.7.0-3 |
| [Data Science Pipelines Operator](https://github.com/opendatahub-io/data-science-pipelines-operator) | v1.4.0 |
| [Distributed Workloads](https://github.com/opendatahub-io/distributed-workloads) | v1.0.0-rc.1 |
| [TrustyAI Operator](https://github.com/trustyai-explainability/trustyai-service-operator) | v1.9.0 |

**NOTE:** KServe is currently in the incubation stage, and it is not compatible to enable both KServe and Model Mesh Serving simultaneously.
