---
layout: blog
author: lavlas
title:  Open Data Hub 1.5.0 Release Guide
preview: Open Data Hub 1.5.0 was just released
date: 2023-04-11
categories: features, road map, release
---

What is new?
------
Changes included in the Open Data Hub v1.5.0 release:
* ODH Dashboard [v2.8.0](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.8.0) 
* Jupyter Notebooks 
  * New Python 3.8 & 3.9 versions of existing notebooks
  * New [update and support schedule](https://github.com/opendatahub-io/notebooks/blob/main/UPDATES.md) to outline when notebooks will be updated for security fixes(weekly) and major package updates(quarterly)
* Data Science Pipelines Operator [v0.1.0](https://github.com/opendatahub-io/data-science-pipelines-operator/releases/tag/v0.1.0)
* [Model Mesh](https://github.com/opendatahub-io/modelmesh-serving)
* [TrustyAI Explainability](https://github.com/trustyai-explainability/trustyai-explainability)
* The odh-jupterHub [manifest](https://github.com/opendatahub-io/odh-manifests/pull/751) and any associated repostories have been archived and transferred to the [opendatahub-io-contrib](https://github.com/opendatahub-io-contrib) github organization
* Update the opendatahub.io [installation docs]({{site.baseurl}}/docs/getting-started/quick-installation.html) to clarify in the installation of the ODH Operator

The following is a list of components that are available in [v1.5.0](https://github.com/opendatahub-io/odh-manifests/releases/tag/v1.5.0) release of odh-manifests:

| Technology | Version |
|--|--|--|
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.8.0 |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) | N/A |
| [Model Mesh Serving](https://github.com/opendatahub-io/modelmesh-serving) | v0.11.0 |
| [Data Science Pipelines Operator](https://github.com/opendatahub-io/data-science-pipelines-operator) | v0.1.0 |
| [TrustyAI Explainability](https://github.com/trustyai-explainability/trustyai-explainability) | v0.1.0 |
{:class="table table-bordered table-striped"}

Upcoming Changes in the next ODH Release: 
------
* The data-science-pipelines [manifest](https://github.com/opendatahub-io/odh-manifests/tree/v1.5/data-science-pipelines) is being deprecated as we move the management of the Data Science Pipelines deployments to the [Data Science Pipelines operator](https://github.com/opendatahub-io/data-science-pipelines-operator)
* The `stable` channel for the ODH Operator installation from OperatorHub is being deprecated as we move to only provide releases on the `rolling` channel going forward. You will need to [change the update channel for the ODH Operator](https://docs.openshift.com/container-platform/4.12/operators/admin/olm-upgrading-operators.html#olm-changing-update-channel_olm-upgrading-operators) to `rolling` to ensure that you will recieve the next ODH operator release in v1.6
