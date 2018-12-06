---
layout: blog
author: shgriffi
title:  Open Data Hub Overview
preview: Built on OpenShift, Open Data Hub uses the leading Kubernetes platform to deliver a meta-project that integrates Open Source components into a practical service-oriented AI and ML solution.  Organizations and IT departments can deploy Open Data Hub as a centralized self-service solution for analytic and data science workloads.
date: 2018-12-04
categories: architecture
---


What is the Open Data Hub?
------

![alt text](../../assets/img/posts/2018-12-04-open-data-hub-overview/Open_Data_Hub_Deployment.png "Open Data Hub")

Built on OpenShift, Open Data Hub uses the leading Kubernetes platform to deliver a meta-project that integrates Open Source components into a practical service-oriented AI and ML solution.  Organizations and IT departments can deploy Open Data Hub as a centralized self-service solution for analytic and data science workloads.

AI Library
------

Open Data Hub deploys with a set of pre-defined AI models available for use.  Try the services out and get some value out of your data immediately without having to accumulate massive amounts of training data.  Current models available include sentiment analysis, test flake analysis and more.

Data Science and ETL Tools
------

![alt text](../../assets/img/posts/2018-12-04-open-data-hub-overview/ds_tools.png "Open Data Hub - Data Science")

Data scientists can use familiar tools such as Jupyter notebooks for developing complex algorithms and models.  Frameworks such as numpy, scikit-learn, Tensorflow and more are available for use.

For data engineers who need to query or process their data, Spark from radanalytics.io is available for use.  If JDBC/ODBC access is required for data stored in S3, Spark Thrift Server comes pre-configured and ready to go.

Streaming and Enriching Data
------

![alt text](../../assets/img/posts/2018-12-04-open-data-hub-overview/streaming_tools.png "Open Data Hub - Streaming and Enrichment")

Open Data Hub offers numerous services for ingesting data, including Kafka, Logstash, Fluentd and rsyslog.  At the heart of it all is the strimzi.io Kafka streaming platform, which allows data to be ingested and processed at scale.  Kafka applications and logstash micro-services can be used to enrich your inbound data before it lands in storage.

Storing Data
------

![alt text](../../assets/img/posts/2018-12-04-open-data-hub-overview/storage_tools.png "Open Data Hub - Storage")

Data is the foundational piece of AI, and Red Hat Ceph Object Store is ideal for building your lake of unstructured data.  Ceph’s S3 API makes integration with popular big data tools simple and easy.

If log analysis is more what you need, Open Data Hub provides a deployment of Elasticsearch with Kibana for visualizations.

Managing Data
------

![alt text](../../assets/img/posts/2018-12-04-open-data-hub-overview/dm_tools.png "Open Data Hub - Manage Data")

Design your data pipelines the Kubernetes way using Argo.  Jobs can be created to train models or transform data.

Monitoring Infrastructure
------

![alt text](../../assets/img/posts/2018-12-04-open-data-hub-overview/monitor_tools.png "Open Data Hub - Monitor")

Open Data Hub comes standard with Prometheus and Grafana for monitoring the components.  DevOps teams have predefined dashboards to help manage the infrastructure.

Community
------

We are an open community that fosters collaboration between organizations, vendors, developers, and academics.  [Join us and contribute](https://gitlab.com/opendatahub)!

Tools
------

<b>Available in Open Data Hub</b>
* AI Library
* [Ceph Object Storage](https://ceph.com/ceph-storage/object-storage/)
* [Spark](https://spark.apache.org/)
* [JuypyterHub](http://jupyter.org/hub)
* [Jupyter Notebooks](https://jupyter.org/)
* [Tensorflow](https://www.tensorflow.org/)

<b>Coming Soon to Open Data Hub</b>
* Kafka ([AMQ Streams](https://www.redhat.com/en/about/videos/summit-2018-introducing-amq-streams-data-streaming-apache-kafka) and [Strimzi](http://strimzi.io/))
* [Kafka Connect](https://docs.confluent.io/current/connect/index.html)
* [Spark Thrift Server](https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html)
* [Elasticsearch](https://www.elastic.co/products/elasticsearch)
* [Logstash](https://www.elastic.co/products/logstash)
* [Fluentd](https://www.fluentd.org/)
* [Rsyslog](https://www.rsyslog.com/)
* [Kibana](https://www.elastic.co/products/kibana)
* [Prometheus](https://prometheus.io/)
* [Grafana](https://grafana.com/)
* [Argo](https://argoproj.github.io/)