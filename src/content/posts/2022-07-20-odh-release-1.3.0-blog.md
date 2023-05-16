---
layout: blog
author: lavlas
title:  Open Data Hub 1.3.0 Release Guide
preview: Open Data Hub 1.3.0 was just released
date: 2022-07-20
categories: features, road map, release
featured: true
---

What is new?
------
Changes included in the Open Data Hub v1.3.0 release:
* Updated components:
  * ODH Dashboard v2.0 - Major update to the code base that adds an [Admin Dashboard](https://github.com/opendatahub-io/odh-dashboard/blob/v2.0/docs/admin_dashboard.md) that supports the administration of:
    * Timeout for culling idle notebooks
    * Size of the persistent volume attached to user's Jupyter notebook pods
    * Bring Your Own Notebook([BYON](https://github.com/opendatahub-io/odh-dashboard/blob/v2.0/docs/byon.md))
      * Import custom notebook images and make them available to users in the notebook spawner UI
      * Notebook descriptions and the list of major software packages it provides
  * JupyterHub v0.3.7 - Add support to the JH Spawner UI to display the maximum number of available gpus per node
  * Elyra v3.9.1 - [Release Notes](https://elyra.readthedocs.io/en/latest/getting_started/changelog.html#release-3-9-1-06-10-2022)
* Support for the integration of Service Mesh with Kubeflow v1.5 on OpenShift ([kfdef](https://raw.githubusercontent.com/opendatahub-io/manifests/v1.5-branch-openshift/openshift/kfdef/kfctl_openshift_v1.5.0_odh.yaml))

The following is a list of components that are available in v1.3.0 release of odh-manifests:

| Technology | Version | Category | Deployment Method |
|--|--|--|--|
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-dashboard) | v2.0 | Dashboard | Manifests |
| [Openshift Pipelines](https://cloud.redhat.com/blog/introducing-openshift-pipelines) | * | Pipelines  | OLM |
| [Hue](https://github.com/opendatahub-io/odh-manifests/tree/master/hue) | v4.8.0 | Data Exploration  | Manifests |
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | v1.10.11 | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | * | Monitoring Dashboards | OLM |
| [Elyra](https://github.com/elyra-ai) | v3.9.1  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | v2.8.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | v2.12.5 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | * | Monitoring | OLM |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | v1.4.1  | Data Exploration and Visualization Tool | Manifests |
| [Ceph Nano](https://github.com/opendatahub-io/odh-manifests/tree/master/ceph) | v0.7 | Object Storage | Manifests |
{:class="table table-bordered table-striped"}
NOTE: Any components listed above that do not specify a version will use the default operator version available in OpenShift OperatorHub at the time of deployment
