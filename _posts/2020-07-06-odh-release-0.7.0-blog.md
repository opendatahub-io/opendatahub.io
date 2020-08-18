---
layout: blog
author: llasmith
title:  Open Data Hub 0.7.0 Release Guide
preview: Open Data Hub 0.7.0 was just released with updates to deploy upstream Kubeflow on OpenShift.
date: 2020-07-06
categories: features, road map, release
---

What is new?
------
The Open Data Hub 0.7.0 release provides updates for successfully deploying v1.0 of upstream Kubeflow on OpenShift 4.2 (or later) in the [v1.0-branch-openshift](https://github.com/opendatahub-io/manifests/tree/v1.0-branch-openshift) branch of opendatahub-io/manifests.

Additionally, we have added functionality tests to the CI/CD workflow that will smoke test every pull requests submitted to [odh-manifests](https://github.com/opendatahub-io/odh-manifests)

You can find out more about the components available in the upstream deployment of Kubeflow v1.0 [here](https://www.kubeflow.org/docs/components/)

The following is a list of tools that are available in v0.7.0 release of odh-manifests:

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
| [Seldon](https://github.com/opendatahub-io/odh-manifests/tree/master/odhseldon) | 1.2.0 | Model Serving | OLM |
{:class="table table-bordered table-striped"}


Read More
------
You can read more in a blog post we have published on [developers.redhat.com](https://developers.redhat.com/blog/2020/08/13/open-data-hub-0-7-adds-support-for-kubeflow-1-0).
