---
type: release
author: zdtsw
title:  Open Data Hub 2.4.0 Release Guide
preview: Open Data Hub 2.4.0 was just released
date: 2023-11-03
categories: features, roadmap, release
---

What is new?
------
Changes included in the Open Data Hub v2.4.0 release:

* ODH Operator

  * **fast channel**(alpha): [v2.4.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v2.4.0)
* ODH Dashboard [v2.17.0-incubation](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.17.0-incubation)
* Data Science Pipelines Operator [v1.6.0](https://github.com/opendatahub-io/data-science-pipelines/releases/tag/v1.6.0)
* ODH Notebook Controller [v1.7.0-5](https://github.com/opendatahub-io/kubeflow/releases/tag/v1.7.0-5)
* KServe[v0.11.1.0](https://github.com/opendatahub-io/kserve/releases/tag/v0.11.1.0)
* Model Mesh Serving [v0.11.1.0](https://github.com/opendatahub-io/modelmesh-serving/releases/tag/v0.11.1.0)
* Codeflare Operator [1349bad0](https://github.com/opendatahub-io/codeflare-operator)
* KubeRay [1ed78ffb2](https://github.com/opendatahub-io/kuberay)
* TrustyAI Operator [v1.11.1](https://github.com/trustyai-explainability/trustyai-service-operator/releases/tag/v1.11.1)

**NOTE:** Please review the [odh-operator v2.0 blog](../2023-07-24-odh-operator-v2.0-blog) to learn more about the new `DataScienceCluster` CustomResourceDefinition that is replacing the `KfDef` deployment method.

**NOTE2:** Rolling channel will keep v1.11.0 as the last release for a while.
Notable Changes
------

* With the release of ODH Operator version 2.4.0 on both fast and rolling channels, the API version is set to v1. We strongly recommend that you carefully review the [upgrade instructions](https://opendatahub.io/docs/upgrade-install-new-operator/) before proceeding with an upgrade from v2.0.0 or v2.1.0 to any later release.

The following is a list of components that are available in [v2.4.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v2.4.0) release of from operator:

| Technology                                                                         | Version | Category           |
| ---------------------------------------------------------------------------------- | ------- | ------------------ |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.17.0-incubation |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) | v1.7.0-5 |
| [Data Science Pipelines Operator](https://github.com/opendatahub-io/data-science-pipelines-operator) | v1.6.0 |
| [Codeflare Operator](https://github.com/opendatahub-io/codeflare-operator) | main branch on commit 1349bad0 |
| [KubeRay](https://github.com/opendatahub-io/kuberay) | master branch on commit 1ed78ffb2|
| [TrustyAI Operator](https://github.com/trustyai-explainability/trustyai-service-operator) | v1.11.1 |
| [Model Mesh Serving](https://github.com/opendatahub-io/modelmesh-serving) | v0.11.1.0 |
| [Kserve](https://github.com/opendatahub-io/kserve) | v0.11.1.0 |

**NOTE:** This is the first ODH release only supports v2 operator. If you are still running with v1 operator, we recommend you upgrade to v2 operator as soon as possible in order to get new features and fixes.