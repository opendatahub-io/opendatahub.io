---
layout: blog
author: lavlas
title:  Open Data Hub 0.4.0 Release Guide
preview: Open Data Hub 0.4.0 just released with exciting new tools for different AI/ML platform phases. We added Argo, AI-Library and support for the Strimzi Kafka operator
date: 2019-09-16
categories: features, road map, release
---


What is included?
------
Open Data Hub 0.4.0 includes many new tools that are essential to a comprehensive AI/ML end-to-end platform. Open Data Hub is a meta-operator that can be installed on Openshift Container Platform 3.11 and 4.

The following is a list of tools added to the Open Data Hub in this release:

| Technology | Version | Category |
|--|--|--|
| Open Data Hub Operator | 0.4.0 | Meta Operator Application management |
| [Argo](https://argoproj.github.io/argo/) | 2.3.0 | Container native workflow engine |
| [Strimzi Kafka Operator](https://strimzi.io/) | 0.11.1 | Distributed streaming platform |
| Open Data Hub [AI-Library](https://opendatahub.io) | 1.0  | Machine learning as a service |
{:class="table table-bordered table-striped"}

You can review the release notes for components added in the v0.3.0 release [here](https://opendatahub.io/news/2019-06-27/odh-release-0.3-blog.html)

Argo
------
[Argo](https://argoproj.github.io/) is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes.  It is useful for defining workflows using containers, running computer intensive jobs, and running CI/CD pipelines natively on Kubernetes.

To learn more about deploying Argo in the Open Data Hub, please visit [link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-argo.adoc)

Strimzi Kafka Operator
------
[Strimzi](https://strimzi.io) provides a way to run an Apache Kafka cluster on Kubernetes in various deployment configurations. [Apache Kafka](https://kafka.apache.org/) is a distributed streaming platform for publishing and subscribing records as well as storing and processing streams of records.

Strimzi is based on Apache Kafka 2.0.1 and consists of three main components:

* Cluster Operator
  Responsible for deploying and managing Apache Kafka clusters within OpenShift or Kubernetes cluster.

* Topic Operator
  Responsible for managing Kafka topics within a Kafka cluster running within OpenShift or Kubernetes cluster.

* User Operator
  Responsible for managing Kafka users within a Kafka cluster running within OpenShift or Kubernetes cluster.

To learn more about using the Strimzi operator to deploy an Apache Kafka cluster in the Open Data Hub, please visit [link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-kafka.adoc)

Open Data Hub AI-Library
------
AI-Library is an open source collection of AI components that allows for rapid prototyping of ideas. AI-Library enables users to work with machine learning models without worrying about infrastructure issues, model complexity or any data science expertise.

To learn more about deploying AI-Library models in the Open Data Hub, please visit [link](https://gitlab.com/opendatahub/opendatahub-operator/blob/master/docs/deploying-ai-library.adoc)
