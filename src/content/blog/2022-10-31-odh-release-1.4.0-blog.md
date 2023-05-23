---
type: release
author: lavlas
title:  Open Data Hub 1.4.0 Release Guide
preview: Open Data Hub 1.4.0 was just released
date: 2022-10-31
categories: features, road-map, release
featured: true
---

What is new?
------
Changes included in the Open Data Hub v1.4.0 release:
* Refocus on deployment of ODH Core components
  * ODH Dashboard v2.2.1
    * Lots of security fixes -- all end points are secured through the x-forwarded-access-token provided by the oauth container during setup
    * Users should not be able to request resources that are not theres (with the exception of admins)
    * Various QoL fixes to make the Dashboard smoother
    * Allow the admin to view the servers that are running from the Administration view
    * Migration to ODH Notebook Controller for lifecycle management of Jupyter notebook servers
  * Model Mesh Serving v0.9.0
  * Data Science Pipelines - Standalone distribution of Kubeflow Pipelines Tekton v1.3.1 customized for Open Data Hub
* Migration of [Tier 2 components](/docs/tiered-components) to [odh-contrib-manifests](https://github.com/opendatahub-io-contrib/odh-contrib-manifests) in the [opendatahub-io-contrib](https://github.com/opendatahub-io-contrib) organization
* Deprecation of JupyterHub component - As of ODH 1.4, ODH has replaced JupyterHub multi-user server with ODH Notebook Controller for lifecycle management of Jupyter Notebook servers. JupyterHub is still available for deployment but there will be no further updates and it will be officially deprecated with the release of ODH 1.5

The following is a list of components that are available in v1.4.0 release of odh-manifests:

| Technology | Version | Category |
| -- | -- | -- |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.0 | Dashboard |
| [Open Data Hub notebook-controller](https://github.com/opendatahub-io/kubeflow/tree/master/components/odh-notebook-controller) | N/A | Notebooks |
| [Model Mesh](https://github.com/opendatahub-io/modelmesh-serving) | v0.9.0 |
| [Data Science Pipelines](https://github.com/opendatahub-io/data-science-pipelines) | v1.3.1 | Data Science Tools |

