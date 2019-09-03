---
layout: blog
author: nakfour
title:  Open Data Hub 0.3 Release Guide
preview: Open Data Hub 0.3 just released with exciting new tools for different AI/ML platform phases. We added monitoring, model serving and GPU processing tools.  
date: 2019-06-27
categories: features, road map, release
---


What is included?
------
Open Data Hub 0.3 includes many new tools that are essential to a comprehensive AI/ML end-to-end platform. Open Data Hub is a meta-operator that can be installed on OpenShift Container Platform 3.11 and 4. The following is a list of tools included in this release:

| Technology | Version | Category |
|--|--|--|
| Open Data Hub Operator | 0.3 | Meta Operator Application management |
| [Seldon](https://seldon.io) | 0.2.7 | Model Serving and Metrics Tool |
| [JupyterHub](https://jupyter.org/hub) with GPU Support | 3.0.7 | Data science tools |
| [Apache Spark](http://spark.apache.org/) | 2.2.3 | Query & ETL frameworks |
| TwoSigma [BeakerX](http://beakerx.com/) Integration | 1.4.0 |  Data science tools |
| [Prometheus](https://prometheus.io/) | 2.3 | System monitoring tools |
| [Grafana](https://grafana.com/) | 4.7 |  System monitoring tools |
{:class="table table-bordered table-striped"}

Seldon
------
Seldon is an open source framework that makes it easier to deploy AI/ML models on Kubernetes and OpenShift. The model can be created and trained using many tools such as Apache Spark, scikit-learn and TensorFlow. Seldon also provides metric for Prometheus scraping. Metrics can be custom model metrics or Seldon core system metrics. 
To learn more about how to use Seldon as part of Open Data Hub 0.3 please visit [link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-seldon.adoc)

JupyterHub with GPU
------
Open Data Hub release 0.3 will include a deployment of Jupyterhub with GPU support giving  users and Data Scientists  easier access to GPU processing.  Specific documentation will be provided shortly.

Apache Spark
------
Apache Spark was previously included in Open Data Hub release 0.2. In release 0.3 we include Prometheus and Grafana monitoring support for Spark metrics. For example notebooks using Apache Spark please refer to the included sample notebooks in the [tutorial section](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-seldon.adoc)

BeakerX
------
BeakerX is an extension to Jupyter Notebook that includes tools for plotting, creating tables and forms and many more.  
To learn more about how to use BeakerX as part of Open Data Hub 0.3 please visit [link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-seldon.adoc)

Prometheus and Grafana
------
Prometheus and Grafana are widely used open source tools for monitoring clusters and applications on Kubernetes and OpenShift. 
Prometheus provides monitoring and alerting tools, it scrapes metrics from all components that expose a REST interface supporting prometheus metrics. Grafana is a visualization tool that is the leader in time series analytics. Users can create Grafana dashboards that display metrics gathered by Prometheus into plots and graphs for analysis. Out of the box, Promotheus will scrap Apache Spark metrics withing Open Data Hub namespace.
To learn more about how to use Prometheus and Grafana as part of Open Data Hub 0.3 please visit
[link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-monitoring.adoc)


