---
type: release
author: zdtsw
title:  Open Data Hub 1.11.0 Release Guide
preview: Open Data Hub 1.11.0 was just released
date: 2023-10-31
categories: features, roadmap, release
---

What is new?
------
Changes included in the Open Data Hub v1.11.0 release:

* ODH Operator

  * **rolling channel** (default): [v1.11.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v1.11.0)
  * **fast channel**(alpha): [v2.3.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v2.3.0)
* ODH Dashboard [v2.17.0-incubation](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.17.0-incubation)
* Data Science Pipelines Operator [v1.6.0](https://github.com/opendatahub-io/data-science-pipelines/releases/tag/v1.6.0)
* ODH Notebook Controller [v1.7.0-5](https://github.com/opendatahub-io/kubeflow/releases/tag/v1.7.0-5)
* Integration of KServe manifests with new operator [v0.11.1.0](https://github.com/opendatahub-io/odh-manifests/tree/master/kserve)
* Codeflare Operator [10db2442140](https://github.com/opendatahub-io/codeflare-operator)
* KubeRay [1ed78ffb2](https://github.com/opendatahub-io/kuberay)
* TrustyAI Operator [v.11.1](https://github.com/trustyai-explainability/trustyai-service-operator/releases/tag/v1.11.1)

**NOTE:** Please review the [odh-operator v2.0 blog](../2023-07-24-odh-operator-v2.0-blog) to learn more about the new `DataScienceCluster` CustomResourceDefinition that will be replacing the `KfDef` deployment method in a future release

Notable Changes
------

* With the release of ODH Operator version 2.3.0 on the fast channel, the API version has been updated from v1alpha1 to v1. We strongly recommend that you carefully review the [upgrade instructions](https://opendatahub.io/docs/upgrade-install-new-operator/) before proceeding with an upgrade from v2.0.0 or v2.1.0 to v2.3.0

The following is a list of components that are available in [v1.11.0](https://github.com/opendatahub-io/opendatahub-operator/releases/tag/v1.11.0) release of from operator:

| Technology                                                                         | Version | Category           |
| ---------------------------------------------------------------------------------- | ------- | ------------------ |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.17.0-incubation |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) | v1.7.0-5 |
| [Data Science Pipelines Operator](https://github.com/opendatahub-io/data-science-pipelines-operator) | v1.6.0 |
| [Codeflare Operator](https://github.com/opendatahub-io/codeflare-operator) | main branch on commit 10db2442140 |
| [KubeRay](https://github.com/opendatahub-io/kuberay) | master branch on commit 1ed78ffb2|
| [TrustyAI Operator](https://github.com/trustyai-explainability/trustyai-service-operator) | v1.11.1 |

**NOTE:** This is the last ODH release for v1 operator. From next v2.4.0, we will only have new features and fixes included in the v2 operator.