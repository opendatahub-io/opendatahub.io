---
layout: arch
title: Open Data Hub Platform
permalink: /arch/platform/components/included
---
## Components and Considerations

### Current Included Components

The ODH platform is installed on Openshift as a native operator and is available on the OperatorHub.io. The operator framework ([https://operatorhub.io/getting-started](https://operatorhub.io/getting-started)) is an open source toolkit that provides effective, scalable and automated native application management. Operators manage custom resources that provide specific cluster wide functionalities. The ODH operator manages the ODH platform AI/ML services cluster-wide. Some of the components within the ODH platform are also operators such as Apache Spark™. Currently ,when installing the ODH operator it includes the following components: Ceph, Apache Spark, Jupyterhub, Prometheus and Grafana.

  

**Ceph** is an open source object store that is massively scalable. It can run natively in OpenShift or as a standalone cluster for optimized performance. Ceph provides a scalable Ceph Storage Cluster native to Openshift, allowing the distributed storage of massive data sets as typical of AI/ML workflows. Ceph is ideal for storing unstructured data from multiple sources which is also ideal for large AI/ML dataset ingestions. Ceph provides S3 RESTful API that is widely supported and is simple to use, making AI/ML data that is stored and transformed easily accessible. Ceph is deployed on OpenShift via Rook ([https://rook.io](https://rook.io/)), a storage operator that provides a user friendly way for deployment and integration of Ceph into the OpenShift ecosystem.

  

**Apache Spark™** operator is an open source operator implementation of Apache Spark™. It is developed as part of the Radanalytics community ([https://radanalytics.io/](https://radanalytics.io/)) to provide distributed Spark cluster workloads on Openshift. This implementation creates a Spark cluster with master and worker/executor processes. Applications send tasks to executors using the SparkContext and these executors run the tasks on the cluster nodes they are assigned to. Distributed parallel execution as provided by Spark clusters are typical and essential for the success of AI/ML workloads.

  

**JupyterHub** ([https://jupyter.org/hub](https://jupyter.org/hub)) is an open source multi-user notebook platform that ODH provides with multiple notebook image streams that incorporate embedded features such as Spark libraries and connectors. JupyterHub provides many features such as multi-user experience for data scientists allowing them to run notebooks in their own workspaces. Authentication can also be customized as a pluggable component to support authentication protocols such as OAuth. Data scientists can use familiar tools such as Jupyter notebooks for developing complex algorithms and models. Frameworks such as numpy, scikit-learn, Tensorflow and more are available for use.

  

**Prometheus** ([https://prometheus.io/](https://prometheus.io/)) is an open source monitoring and alerting tool that is widely adopted across many enterprises. Prometheus can be configured to monitor targets by scraping or pulling metrics from the target’s HTTP endpoint and storing the metric name and a set of key-value pairs in a time series database. For graphing or querying this data, Prometheus provides a web portal with rudimentary options to list and graph the data. It also provides an endpoint for more powerful visualization tools such as Grafana to query the data and create graphs. An Alert Manager is also available to create alert rules to produce alerts on specific metric conditions.

  

**Grafana** ([https://grafana.com/](https://grafana.com/)) is an open source tool for data visualization and monitoring. Data sources such as Prometheus can be added to Grafana for metrics collection. Users create Dashboards that include comprehensive  graphs or plots of specific metrics. It includes powerful visualization capabilities for graphs, tables, and heatmaps. Ready-made dashboards for different data types and sources are also available giving Grafana users a head start. It also has support for a wide variety of plugins so that users can incorporate community-powered visualisation tools for things such as scatter plots or pie charts.

{% include next-link.html label="Roadmap" url="/arch/platform/roadmap.html" %}