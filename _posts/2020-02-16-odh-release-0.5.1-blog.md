---
layout: blog
author: lavlas
title:  Open Data Hub 0.5.1 Release Guide
preview: Open Data Hub 0.5.1 was just released with exciting new tools for different AI/ML platform phases. We added JupyterHub support for CUDA GPU images & notebooks, Apache Superset for data exploration & visualization and a data catalog role for deploying 
date: 2020-02-16
categories: features, road map, release
---

What is included?
------
Open Data Hub 0.5.1 includes many new tools that are essential to a comprehensive AI/ML end-to-end platform. Open Data Hub is a meta-operator that can be installed on Openshift Container Platform 3.11 and 4.x.

The following is a list of tools added to Open Data Hub in this release:

| Technology | Version | Category |
|--|--|--|
| JupyterHub | 3.0.7  | Data science tools |
| Radanalytics [Spark Operator](https://github.com/radanalyticsio/spark-operator) | 1.0.5  | Operator for managing Spark cluster on OpenShift |
| Apache [Superset](https://github.com/apache/incubator-superset) | 0.34.0  | Data Exploration and Visualization Tool |
{:class="table table-bordered table-striped"}

You can review the release notes for components added in the previous v0.5.0 release [here](https://opendatahub.io/news/2019-12-17/odh-release-0.5-blog.html)

AICoE-JupyterHub
------
AICoE-JupyterHub now has support for greater customization of the JupyterHub deployment and Spark cluster resources. In this release, we added 
* Support for modifying the [JupyterHub server behavior](https://gitlab.com/opendatahub/opendatahub-operator/-/tree/master/roles/aicoe-jupyterhub) via a custom JupyterHub config
* Update the kubespawner library to version 0.11.1
* Support for specifying the resource requests and limits of the cpu/memory allocated to the Jupyter notebook user spark cluster nodes using the default JupyterHub [Singleuser profile](https://gitlab.com/opendatahub/opendatahub-operator/-/tree/master/roles/aicoe-jupyterhub#additional-information)

Radanalytics Spark Operator
------
* Support for specifying the resource requests and limits of the cpu/memory allocated to the Spark cluster master and worker nodes

Apache Superset
------
* Resolve issues related to connecting to the Data Catalog Thrift Server
