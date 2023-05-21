---
layout: blog
author: lavlas
title:  Open Data Hub 1.2.0 Release Guide
preview: Open Data Hub 1.2.0 was just released
date: 2022-04-29
categories: features, road-map, release
---

What is new?
------
Changes included in the Open Data Hub v1.2.0 release:
* New components:
  * [Pachyderm](https://github.com/opendatahub-io/odh-manifests/tree/master/odhpachyderm)
  * [Model Mesh Serving](https://github.com/opendatahub-io/odh-manifests/tree/master/model-mesh)
* Updated components:
  * Elyra v3.6.0 - [Release Notes](https://elyra.readthedocs.io/en/latest/getting_started/changelog.html#release-3-6-0-02-08-2022)
  * Superset v1.4.1 - [CHANGELOG](https://github.com/apache/superset/blob/1.4.1/CHANGELOG.md)
* Components now include the Kubernetes `app.kubernetes.io/part-of` label to group applications in the Topology UI view of the OpenShift Developer Console
* Support for the integration of Service Mesh with Kubeflow v1.4 on OpenShift ([kfdef](https://raw.githubusercontent.com/opendatahub-io/manifests/v1.4.0-rc.2-openshift/openshift/kfdef/kfctl_openshift_v1.4.0_servicemesh.yaml))

The following is a list of components that are available in v1.2.0 release of odh-manifests:

| Technology | Version | Category | Deployment Method |
|--|--|--|--|
| [Openshift Pipelines](https://cloud.redhat.com/blog/introducing-openshift-pipelines) | * | Pipelines  | OLM |
| [Hue](https://github.com/opendatahub-io/odh-manifests/tree/master/hue) | v4.8.0 | Data Exploration  | Manifests |
| [Open Data Hub Dashboard](https://github.com/opendatahub-io/odh-manifests/tree/master/odh-dashboard) | v1.0 | Dashboard | Manifests |
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | v1.10.11 | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | * | Monitoring Dashboards | OLM |
| [JupyterHub](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub) | v0.3.6  | Data science tools | Manifests |
| [Elyra](https://github.com/elyra-ai) | v3.6.0  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | v2.8.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | v2.12.5 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | * | Monitoring | OLM |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | v1.4.1  | Data Exploration and Visualization Tool | Manifests |
| [Ceph Nano](https://github.com/opendatahub-io/odh-manifests/tree/master/ceph) | v0.7 | Object Storage | Manifests |

NOTE: Any components listed above that do not specify a version will use the default operator version available in OpenShift OperatorHub at the time of deployment
