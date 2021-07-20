---
layout: blog
author: nakfour
title:  Open Data Hub 1.1.0 Release Guide
preview: Open Data Hub 1.1.0 was just released
date: 2021-07-13
categories: features, road map, release
---

What is new?
------
In Open Data Hub version 1.1.0 the community focused on hardening the JupyterHub deployment, providing new and improved JupyterHub spawner UI, integrating Open Data Hub dashboard with Openshift oauth, adding [Kubeflow 1.3 Openshift distribution stack](https://github.com/kubeflow/manifests/tree/v1.3.0/distributions/stacks/openshift) along with adding new components such as Trino and Openshift Pipelines.  ODH version 1.1.0 also comes with an Operator Level 4 verification indicating "Deep Insight" status after enabling more monitoring and logging. 
 
An important note to users, ODH 1.1.0 includes two example KFDefs for installation on OpenShift 4.3 (or later) :
1. ODH components [KFDef](https://raw.githubusercontent.com/opendatahub-io/odh-manifests/v1.1.0/kfdef/kfctl_openshift.yaml)
2. Kubeflow 1.3 [KFDef](https://raw.githubusercontent.com/kubeflow/manifests/v1.3-branch/distributions/kfdef/kfctl_openshift_v1.3.0.yaml)

For detailed information on Kubeflow v1.3 components please visit the official Kubeflow 1.3 release [blog](https://blog.kubeflow.org/kubeflow-1.3-release/)

The following is a list of components that are available in v1.1.0 release of odh-manifests:

| Technology | Version | Category | Deployment Method |
|--|--|--|--|
| [Openshift Pipelines](https://www.openshift.com/learn/topics/ci-cd) | v1.3.1 | Pipelines  | OLM |
| [Trino](https://trino.io/) | v355 | SQL Query Engine  | Manifests |
| [Spark Thrift Server](https://github.com/opendatahub-io/odh-manifests/tree/master/thriftserver) |  | SQL Connect  | Manifests |
| [Hue](https://github.com/opendatahub-io/odh-manifests/tree/master/hue) | v4.8.0 | Data Exploration  | Manifests |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-manifests/tree/master/odh-dashboard) | v0.9 | Dashboard | Manifests |
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | v1.10.11 | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | v7.1.1 | Monitoring Dashboards | OLM |
| [JupyterHub](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub) | v0.1.5  | Data science tools | Manifests |
| [Elyra](https://github.com/elyra-ai) | v0.0.5  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | v2.4.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | v2.12.5 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | v2.16.0 | Monitoring | OLM |
| [Apache Spark](https://github.com/opendatahub-io/odh-manifests/tree/master/radanalyticsio) | v2.4.5  | Operator for managing Spark cluster on OpenShift | Manifests |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | v0.34.0  | Data Exploration and Visualization Tool | Manifests |
| [Seldon](https://github.com/opendatahub-io/odh-manifests/tree/master/odhseldon) | v1.2.2 | Model Serving | OLM |
| [Ceph Nano](https://github.com/ceph/cn-core) | v0.7 | Object Storage | Manifests |
{:class="table table-bordered table-striped"}
