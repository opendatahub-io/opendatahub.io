---
layout: blog
author: nakfour
title:  Open Data Hub 1.0.0 Release Guide
preview: Open Data Hub 1.0.0 was just released
date: 2021-02-02
categories: features, road map, release
---

What is new?
------
Open Data Hub 1.0.0 brings in many new features and components. Components from Data Catalog such as Hue and Spark ThirftServer are now migrated and included in ODH beta. We added two new Kubeflow components: KF Serving and KF Pipeline on Tekton. JupyterHub now has a new Spawner User Interface that includes more customization options. ODH Argo has also been upgraded to the latest release, v2.12.5. 
Legacy option for installing ODH has been removed as the team focuses on ODH Beta where all the new features and bug fixes will be included moving forward. 
An important note to users, ODH 1.0 includes three example KFDefs for installation on OpenShift 4.3 (or later) :
1. ODH components [KFDef](https://raw.githubusercontent.com/opendatahub-io/odh-manifests/master/kfdef/kfctl_openshift.yaml)
2. Kubeflow 1.2 [KFDef](https://raw.githubusercontent.com/kubeflow/manifests/master/kfdef/kfctl_openshift.v1.2.0.yaml)
3. Kubeflow from master that included KF Serving and KF Pipeline on Tekton [KFDef](https://raw.githubusercontent.com/kubeflow/manifests/master/kfdef/kfctl_openshift.master.kfptekton.yaml)

For detailed information on Kubeflow v1.2 components please visit the official Kubeflow 1.2 release [blog](https://blog.kubeflow.org/release/official/2020/11/18/kubeflow-1.2-blog-post.html)

The following is a list of components that are available in v1.0.0 release of odh-manifests:

| Technology | Version | Category | Deployment Method |
|--|--|--|--|
| [Spark Thrift Server](https://github.com/opendatahub-io/odh-manifests/tree/master/thriftserver) |  | SQL Connect  | Manifests |
| [Hue](https://github.com/opendatahub-io/odh-manifests/tree/master/hue) | v4.8.0 | Data Exploration  | Manifests |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-manifests/tree/master/odh-dashboard) | v0.9 | Dashboard | Manifests |
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | v1.10.11 | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | v7.1.1 | Monitoring Dashboards | OLM |
| [JupyterHub](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub) | v0.1.5  | Data science tools | Manifests |
| [Elyra](https://github.com/elyra-ai/elyra) | v1.3.3  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | v2.4.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | v2.12.5 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | v2.16.0 | Monitoring | OLM |
| [Apache Spark](https://github.com/opendatahub-io/odh-manifests/tree/master/radanalyticsio) | v2.4.5  | Operator for managing Spark cluster on OpenShift | Manifests |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | v0.34.0  | Data Exploration and Visualization Tool | Manifests |
| [Seldon](https://github.com/opendatahub-io/odh-manifests/tree/master/odhseldon) | v1.2.2 | Model Serving | OLM |
| [Ceph Nano](https://github.com/ceph/cn-core) | v0.7 | Object Storage | Manifests |
{:class="table table-bordered table-striped"}
