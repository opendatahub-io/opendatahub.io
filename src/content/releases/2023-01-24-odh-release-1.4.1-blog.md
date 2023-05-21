---
layout: blog
author: lavlas
title:  Open Data Hub 1.4.1 Release Guide
preview: Open Data Hub 1.4.1 was just released
date: 2023-01-24
categories: features, road map, release
featured: true
---

What is new?
------
Changes included in the Open Data Hub v1.4.1 release:
* ODH Core Notebook Images - As part of our [ODH Core](http://opendatahub.io/docs/tiered-components.html) deployment, we are now providing Jupyter Notebook images with CUDA support by default.  These images will be updated continuously for security and package version updates on a regular cadence
  * Jupyter Python Notebook
  * Jupyter Data Science Notebook - CPU & CUDA
  * Jupyter PyTorch Notebook - CUDA
  * Jupyter Tensorflow Notebook - CUDA

* ODH Dashboard v2.5.2  -- [Release Notes](https://github.com/opendatahub-io/odh-dashboard/releases/tag/v2.5.2) & [ChangeLog](https://github.com/opendatahub-io/odh-dashboard/compare/v2.2.1...v2.5.2) since previous ODH release
  * [Demo](https://bluejeans.com/s/OSrgirIbbyl) from November ODH Community Meeting
  * New OdhApplication CustomResources to dynamically add component tiles
  * Jupyter/KFNBC now supports opening in a new tab
  * Data Science Groupings ([DSG](https://github.com/opendatahub-io/odh-dashboard/issues/433))
    * Optional feature -- enabled through the disableProjects (set to false) feature flag found in OdhDashboardConfig
    * When enabled it will grant access to users of the Dashboard the ability to create their own projects in OpenShift Console through the Dashboard interface
    * Within' projects, you'll be able to create the same Juypter Notebooks (now called Workbenches within' the DSG as to grow beyond Notebooks in time)
  * Model Serving [UI](https://github.com/opendatahub-io/odh-dashboard/issues/626)

The following is a list of components that are available in [v1.4.1](https://github.com/opendatahub-io/odh-manifests/releases/tag/v1.4.1) release of odh-manifests:

| Technology | Version | Category |
|--|--|--|--|
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.5.2 | Dashboard |
| [Open Data Hub Notebook Images](https://github.com/opendatahub-io/notebooks) | v1.3.1 | Jupyter |
| [Model Mesh Serving](https://github.com/opendatahub-io/modelmesh-serving) | v0.9.0 | AI/ML |
| [Data Science Pipelines](https://github.com/opendatahub-io/data-science-pipelines) | v1.2.1 | Data Science Tools |

