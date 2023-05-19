---
layout: blog
author: lavlas
title:  Open Data Hub 1.1.2 Release Guide
preview: Open Data Hub 1.1.2 was just released
date: 2022-02-09
categories: features, road map, release
---

What is new?
------
In Open Data Hub v1.1.2 includes updates to:
* Additional components to support the deprecation of kubernetes apis in OpenShift 4.9 (k8s v1.22).
  * ODH components on OCP 4.9+ [KFDef](https://raw.githubusercontent.com/opendatahub-io/odh-manifests/master/kfdef/kfctl_openshift4.9_odh.yaml)
* Support for the deployment of Kubeflow v1.4.0-rc2 on OpenShift [KFDef](https://raw.githubusercontent.com/opendatahub-io/manifests/v1.4.0-rc.2-openshift/openshift/kfdef/kfctl_openshift_v1.4.0_odh.yaml)
  * For detailed information on Kubeflow v1.4 components please visit the official Kubeflow 1.4 release [blog](https://blog.kubeflow.org/kubeflow-1.4-release/)

The following is a list of components that are available in v1.1.2 release of odh-manifests:

| Technology | Version | Category | Deployment Method |
|--|--|--|--|
| [Openshift Pipelines](https://www.openshift.com/learn/topics/ci-cd) | v1.3.1 | Pipelines  | OLM |
| [Trino](https://trino.io/) | v355 | SQL Query Engine  | Manifests |
| [Spark Thrift Server](https://github.com/opendatahub-io/odh-manifests/tree/master/thriftserver) |  | SQL Connect  | Manifests |
| [Hue](https://github.com/opendatahub-io/odh-manifests/tree/master/hue) | v4.8.0 | Data Exploration  | Manifests |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-manifests/tree/master/odh-dashboard) | v1.0 | Dashboard | Manifests |
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | v1.10.11 | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | v7.1.1 | Monitoring Dashboards | OLM |
| [JupyterHub](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub) | v0.3.5  | Data science tools | Manifests |
| [Elyra](https://github.com/elyra-ai) | v2.2.4  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | v2.8.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | v2.12.5 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | v2.16.0 | Monitoring | OLM |
| [Apache Spark](https://github.com/opendatahub-io/odh-manifests/tree/master/radanalyticsio) | v2.4.5  | Operator for managing Spark cluster on OpenShift | Manifests |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | v1.3.2  | Data Exploration and Visualization Tool | Manifests |
| [Seldon](https://github.com/opendatahub-io/odh-manifests/tree/master/odhseldon) | v1.2.2 | Model Serving | OLM |
| [Ceph Nano](https://github.com/ceph/cn-core) | v0.7 | Object Storage | Manifests |
{:class="table table-bordered table-striped"}
