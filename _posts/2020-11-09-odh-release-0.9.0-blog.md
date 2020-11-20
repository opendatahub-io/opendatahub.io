---
layout: blog
author: llasmith
title:  Open Data Hub 0.9.0 Release Guide
preview: Open Data Hub 0.9.0 was just released
date: 2020-11-09
categories: features, road map, release
---

What is new?
------
The Open Data Hub 0.9.0 release provides updates for successfully deploying v1.2 of upstream Kubeflow on OpenShift 4.3 (or later) and a new Open Data Hub [Dashboard](https://github.com/opendatahub-io/odh-dashboard) that lists ODH components that are currently installed and provides links to application dashboards and documentation.

You can find out more about the components available in the upstream deployment of Kubeflow v1.2 [here](https://blog.kubeflow.org/release/official/2020/11/18/kubeflow-1.2-blog-post.html)

Additionally, Prometheus will now scrape metrics for Kafka and Jupyterhub components and we added the ability to deploy a single [ceph-container] to provide all-n-one object storage for minimal deployments.

The following is a list of components that are available in v0.9.0 release of odh-manifests:

| Technology | Version | Category | Deployment Method |
|--|--|--|--|
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-manifests/tree/master/odh-dashboard) | v0.9 | Dashboard | Manifests |
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | Alpha | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | 7.1.1 | Monitoring Dashboards | OLM |
| [JupyterHub](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub) | 3.0.7  | Data science tools | Manifests |
| [Elyra](https://github.com/elyra-ai) | 0.0.5  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | 0.19.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | 2.7.0 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | 0.37.0 | Monitoring | OLM |
| [Radanalytics Spark Operator](https://github.com/opendatahub-io/odh-manifests/tree/master/radanalyticsio) | 1.1.0  | Operator for managing Spark cluster on OpenShift | Manifests |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | 0.34.0  | Data Exploration and Visualization Tool | Manifests |
| [Seldon](https://github.com/opendatahub-io/odh-manifests/tree/master/odhseldon) | 1.2.2 | Model Serving | OLM |
| [Ceph Nano](https://github.com/ceph/cn-core) | v0.7 | Object Storage | Manifests |
{:class="table table-bordered table-striped"}
