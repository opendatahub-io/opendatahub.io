---
layout: blog
author: vpavlin
title:  Open Data Hub 0.6.0 Release Guide
preview: Open Data Hub 0.6.0 was just released with a complete redesign based on Kubeflow and some component improvements and additions.
date: 2020-05-07
categories: features, road map, release
---

What is new?
------
Open Data Hub 0.6.0 adopted Kubeflow as upstream which lead to conversion from Ansible Operator to Kustomize for component deployment and management.

All key project repositories moved to Github [opendatahub-io organization](https://github.com/opendatahub-io/):

* https://github.com/opendatahub-io/opendatahub-operator/
* https://github.com/opendatahub-io/odh-manifests/

Most of the components were converted to Kustomize and moved to the above mentioned repositories.

Another important change is that ODH 0.6 and forward relies on Operator Lifecycle Manager to install and manage some of the components to avoid duplication of operator deployment manifests which are already available through OLM.

The following is a list of tools are available in ODH 0.6.0:

| Technology | Version | Category | Deployment Method | 
|--|--|--|--|
| [Airflow](https://github.com/opendatahub-io/odh-manifests/tree/master/airflow) | Alpha | Workflow Management | Manifests |
| [Grafana](https://github.com/opendatahub-io/odh-manifests/tree/master/grafana) | 2.0.0 | Monitoring Dashboards | OLM |
| [JupyterHub](https://github.com/opendatahub-io/odh-manifests/tree/master/jupyterhub) | 3.0.7  | Data science tools | Manifests |
| [Kafka Strimzi](https://github.com/opendatahub-io/odh-manifests/tree/master/kafka) | 0.17.0 | Distributed Streaming | OLM |
| [Argo](https://github.com/opendatahub-io/odh-manifests/tree/master/odhargo) | 2.7.0 | Workflow Engine | Manifests |
| [Prometheus](https://github.com/opendatahub-io/odh-manifests/tree/master/prometheus) | 0.32.0 | Monitoring | OLM |
| [Radanalytics Spark Operator](https://github.com/opendatahub-io/odh-manifests/tree/master/radanalyticsio) | 1.0.7  | Operator for managing Spark cluster on OpenShift | Manifests |
| [Apache Superset](https://github.com/opendatahub-io/odh-manifests/tree/master/superset) | 0.34.0  | Data Exploration and Visualization Tool | Manifests |
{:class="table table-bordered table-striped"}


Read More
------
You can read more in a blog post we have published on [developers.redhat.com](https://developers.redhat.com/blog/2020/05/07/open-data-hub-0-6-brings-component-updates-and-kubeflow-architecture/).
