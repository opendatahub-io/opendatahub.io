---
layout: docs
title: Release Notes
permalink: /docs/roadmap/release-notes
style_class: release-notes
---

### Open Data Hub version v0.5.1 - February 2020

| Technology | Version | Category |
|--|--|--|
| JupyterHub | 3.0.7  | Update kubespawner to version 0.11.1 and enable user customization of the jupyterhub config |
| Radanalytics [Spark Operator](https://github.com/radanalyticsio/spark-operator) | 1.0.5  | Adds support for customizing the Spark cluster resource requests and limits for cpu/memory |
| Apache [Superset](https://github.com/apache/incubator-superset) | 0.34.0  | Resolve issues related to connecting to the Data Catalog Thrift Server |
{:class="table table-bordered"}

### Open Data Hub version v0.5.0 - December 2019

| Technology | Version | Category |
|--|--|--|
| JupyterHub CUDA GPU Images and Notebooks | 3.0.7  | Support for building CUDA GPU Images and GPU Notebook |
| Apache [Superset](https://github.com/apache/incubator-superset) | 0.34.0  | Data Exploration and Visualization Tool |
| Data Catalog ([Hue](https://gethue.com/), [Spark Thrift Server](https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html), Hive Metastore) | Hue 4.4.1 & Spark 2.4.3 & Spark Thrift Server 2.4 & Hive Metastore 1.2.1 | Deployment of Hue, Spark Thrift Server and Hive Metastore to simplify querying data lakes using Spark SQL language|
| [Argo](https://argoproj.github.io/argo/) | 2.4.2 | Container native workflow engine |
{:class="table table-bordered"}

### Open Data Hub version v0.4.0 - September 2019

| Technology | Version | Category |
|--|--|--|
| [Argo](https://argoproj.github.io/argo/) | 2.3.0 | Container native workflow engine |
| [Strimzi Kafka Operator](https://strimzi.io/) | 0.11.1 | Distributed streaming platform |
| Open Data Hub AI-Library | 1.0  | Machine learning as a service |
{:class="table table-bordered"}


### Open Data Hub version v0.3.0 - June 2019

|Technology|Version|Category|
|---|---|---|
|Seldon|0.2.7|Model Serving and Metrics Tool|
|JupyterHub with GPU Support|3.0.7|Data science tools|
|Apache Spark|2.2.3|Query & ETL frameworks|
|TwoSigma BeakerX Integration|1.4.0|Data science tools|
|Prometheus|2.3|System monitoring tools|
|Grafana|4.7|System monitoring tools|
{:class="table table-bordered"}


### Open Data Hub version v0.2.0 - May 2019

|Technology|Version|Category|
|---|---|---|
|JupyterHub with GPU Support|3.0.7|Data science tools|
|Apache Spark|2.2.3|Query & ETL frameworks|
|TwoSigma BeakerX Integration|1.4.0|Data science tools|
{:class="table table-bordered"}

{% include next-link.html label="Additional Resources" url="/docs/additional.html" %}
