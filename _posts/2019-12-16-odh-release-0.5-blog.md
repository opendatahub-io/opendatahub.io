---
layout: blog
author: lavlas
title:  Open Data Hub 0.5.0 Release Guide
preview: Open Data Hub 0.5.0 was just released with exciting new tools for different AI/ML platform phases. We added JupyterHub support for CUDA GPU images & notebooks, Apache Superset for data exploration & visualization and a data catalog role for deploying 
date: 2019-12-17
categories: features, road map, release
---

What is included?
------
Open Data Hub 0.5.0 includes many new tools that are essential to a comprehensive AI/ML end-to-end platform. Open Data Hub is a meta-operator that can be installed on Openshift Container Platform 3.11 and 4.x.

The following is a list of tools added to Open Data Hub in this release:

| Technology | Version | Category |
|--|--|--|
| JupyterHub CUDA GPU Images and Notebooks | 3.0.7  | Support for building CUDA GPU Images and GPU Notebook |
| Apache [Superset](https://github.com/apache/incubator-superset) | 0.34.0  | Data Exploration and Visualization Tool |
| Data Catalog ([Hue](https://gethue.com/), [Spark Thrift Server](https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html), Hive Metastore) | Hue 4.4.1 & Spark Thrift Server 2.4 & Hive Metastore 1.2.1 | Deployment of Hue, Spark Thrift Server and Hive Metastore to simplify querying data lakes using Spark SQL language|
| [Argo](https://argoproj.github.io/argo/) | 2.4.2 | Container native workflow engine |
{:class="table table-bordered table-striped"}

You can review the release notes for components added in the previous v0.4.0 release [here](https://opendatahub.io/news/2019-09-16/odh-release-0.4-blog.html)

AICoE-JupyterHub CUDA GPU Images and Notebooks
------
AICoE-JupyterHub now has support for accessing NVIDIA GPUs from Jupyter notebooks. In this release, we added 
* Documentation on how to [enable GPUs nodes](https://gitlab.com/opendatahub/opendatahub-operator/blob/v0.5.0/docs/enabling-gpu-aicoe-jupyterhub.adoc) in your OpenShift cluster
* Support for building CUDA GPU images and notebooks as part of the component deployment process

You can test these new features by following the Data Engineering and Machine Learning [workshop](https://gitlab.com/opendatahub/data-engineering-and-machine-learning-workshop). The [tf-training-serving](https://gitlab.com/opendatahub/data-engineering-and-machine-learning-workshop/blob/master/source/notebooks/tf-training-serving.ipynb) contains a demonstration of how you can create Openshift Jobs to access a cluster GPU.

Apache Superset
------
Apache [Superset](https://github.com/apache/incubator-superset) is a data exploration and visualization tool. Instructions for deploying and creating an example database & chart are available in [Deploy Superset Setup](https://gitlab.com/opendatahub/opendatahub-operator/blob/v0.5.0/docs/deploying-superset.adoc).

Data Catalog (Tech Preview)
------
The Data Catalog is a set of components with which you can run Data Exploration on your Data Lake. These components are:
* *Hive Metastore* to store metadada information about the Hive tables
* *Spark SQL Thrift server* to expose a ODBC/JDBC endpoint to interact with the Hive Tables
* *Hue* to view S3 object store, connect to Spark SQL Thrift server and run queries, as well as create dashboards.

For more information on the Data Catalog, please review the Data Catalog [announcement](https://opendatahub.io/news/2019-12-15/data-catalog-in-odh.html) and [tutorial](https://opendatahub.io/docs/advanced-tutorials/data-exploration.html). The Data Catalog is currently designated as "Tech Preview" as we enable support for additional features available in Hue.

Argo
------
[Argo](https://argoproj.github.io/) has been updated to version 2.4.2. [Argo](https://argoproj.github.io/) is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes.  It is useful for defining workflows using containers, running computer intensive jobs, and orchestrating DAG container pipelines natively on Kubernetes.

To learn more about deploying Argo in Open Data Hub, please visit [link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-argo.adoc)
