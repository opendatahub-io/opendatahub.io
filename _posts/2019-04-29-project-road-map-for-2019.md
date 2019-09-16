---
layout: blog
author: shgriffi
title:  Project Road Map for 2019
preview: The Open Data Hub community has some exciting new features planned for 2019.  Driven by the release of OpenShift 4, we have officially moved to operators.  This will make deployment and management of the services easier for administrators.
date: 2019-04-29
categories: features, road map
---


What's Next?
------

![alt text](../../assets/img/posts/2019-04-29-project-road-map-for-2019/roadmap_2019.png "Open Data Hub Road Map - 2019")

The Open Data Hub community has some exciting new features planned for 2019.  Driven by the release of OpenShift 4, we have officially moved to operators.  This will make deployment and management of the services easier for administrators.  Other key highlights on the road map for this year include added support for monitoring services with Prometheus and Grafana, as well as improved machine learning model lifecycle management with tools such as MLflow and Seldon-core.

February 2019
------
### Version 0.1 - Initial ODH Release

| Technology | Version | Container Platform Version | Category |
|--|--|--|--|
| [JupyterHub](https://jupyter.org/hub) | 0.9.4 | OpenShift 3.1x, Minishift 1.3x | Data science tools |
| [Apache Spark](http://spark.apache.org/) | 2.2.3 | OpenShift 3.1x, Minishift 1.3x | Query & ETL frameworks |
| [Ceph-nano](https://github.com/ceph/cn) | Latest master | OpenShift 3.1x, Minishift 1.3x | Storage |
{:class="table table-bordered table-striped"}

The [initial launch of ODH](https://gitlab.com/opendatahub/jupyterhub-ansible) includes an object store, an analytics engine for big data and a platform for spinning up data science notebooks.  This provides everything you need to get started with machine learning on OpenShift.

May 2019
------
### OCP 4 and Operator Support with Monitoring

| Technology | Version | Container Platform Version | Category |
|--|--|--|--|
| Open Data Hub Operator | 0.2 | OpenShift 3.1x and 4.x | Application management |
| [Seldon-core](https://www.seldon.io/open-source/) | 0.2.6+ | OpenShift 3.1x and 4.x | Model Serving |
| [JupyterHub](https://jupyter.org/hub) with GPU Support | 0.9.4 | OpenShift 3.1x | Data science tools |
| [Apache Spark](http://spark.apache.org/) | 2.2.3 | OpenShift 3.1x and 4.x | Query & ETL frameworks |
| TwoSigma [BeakerX](http://beakerx.com/) Integration | 1.3.0 | OpenShift 3.1x and 4.x | Data science tools |
| [Prometheus](https://prometheus.io/) | 2.3 | OpenShift 3.1x and 4.x | System monitoring tools |
| [Grafana](https://grafana.com/) | 4.7 | OpenShift 3.1x and 4.x | System monitoring tools |
{:class="table table-bordered table-striped"}

The May release of ODH brings a re-design of the deployment to take advantage of [Kubernetes operators](https://blog.openshift.com/introducing-the-operator-framework/)!   Seldon-core will provide model-serving and model-monitoring capabilities. In order to better understand system usage and workloads, Prometheus and Grafana are also being targeted with pre-configured metrics and dashboards to monitor ODH.

Also, JupyterHub will be improved to allow GPUs installed in OpenShift 3.1x to be usable within Jupyter notebooks.  When a user selects a notebook and specifies GPU workloads, the tasks will automatically run on a node that is GPU-enabled and available.

August 2019
------
### Data Engineering + Model Lifecycle

| Technology | Version | Container Platform Version | Category |
|--|--|--|--|
| Open Data Hub Operator | 0.3 | OpenShift 3.1x and 4.x | Application management |
| [Argo](https://argoproj.github.io/argo/) | 2.2.1+ | OpenShift 3.1x and 4.x | Orchestration platforms |
| [MLflow](https://mlflow.org/) | 0.9.1+ | OpenShift 3.1x and 4.x | Model experimentation |
| [Kafka (Strimzi / AMQ Streams)](https://strimzi.io/) | 0.11.2+ | OpenShift 3.1x and 4.x | Streaming and enrichment |
| [Spark SQL Thrift Server](https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html#running-the-thrift-jdbcodbc-server) | 2.2.3+ | OpenShift 3.1x and 4.x | Query & ETL frameworks |
| Hive Metastore | 1.2.1+ | OpenShift 3.1x and 4.x | Metadata cataloging |
| [Cloudera Hue](http://gethue.com/) | 4.4+ | OpenShift 3.1x and 4.x | Data exploration |
| [Ceph Rook](https://rook.io/docs/rook/v0.8/ceph-quickstart.html) Operator Integration | 0.9.3 | OpenShift 3.1x and 4.x | Storage |
| Open Data Hub AI Library | 0.1 | OpenShift 3.1x and 4.x | Data science tools |
{:class="table table-bordered table-striped"}

Version 0.3 of ODH includes added support for data engineers with Cloudera Hue, Argo, Kafka, and Spark SQL Thrift Server.  Argo is great for managing pipelines and workflows.  Ceph-nano is being replaced by Ceph Rook, the best way to deploy and manage Ceph Storage on OpenShift. For metadata and cataloging of data stored in the Ceph data lake, Hive Metastore will be added.  Spark SQL Thrift Server can be configured to enable SQL access to data stored in the Ceph data lake by leveraging Spark as the processing engine.  Hue will provide an interface for data analysts to query the data lake using metadata in Hive Metastore and the SQL capabilities of Spark SQL Thrift Server.

For machine learning model lifecycles, MLflow is being added to allow model experimentation.

November 2019
------

We haven't thought that far out yet, but stay tuned!
