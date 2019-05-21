---
layout: arch
title: Executive Summary
permalink: /arch/executive
---

This reference architecture describes the architecture, deployment and management of Artificial Intelligence (AI) services on Openshift Container Platform. The reference architecture is built mainly with open source tools providing services for each step of the AI end-to-end workflow. Target audience for this reference architecture includes but is not limited to Architects, Developers, Data Engineers, Data Scientists and DevOps individuals working in the AI realm.

[Open Data Hub (ODH)](https://opendatahub.io/) is an open source project originally initiated by Red Hat AI Center of Excellence team as an effort to provide open source AI tools for running large and distributed AI workloads on Openshift Container platform. Currently, Open Data Hub project provides open source tools for data storage, distributed AI and Machine Learning(ML) workflows and Notebook development environment. The Open Data Hub project roadmap also includes tools specifically for monitoring and managing AI services.

[AI Library](https://gitlab.com/opendatahub/ai-library) is also an open source project initiated by Red Hat AI Center of Excellence team as an effort to provide ML models as a service on Openshift Container Platform. The development of these models as services is a community driven open source project to make AI/ML models more accessible.

This reference architecture serves as a potential blueprint for deploying and managing open source AI services from the Open Data Hub and AI Library projects to provide an end-to-end platform for running large and distributed AI workloads as well as serving and monitoring ML models on Openshift Container Platform.

{% include next-link.html label="High Level Architecture" url="/arch/hla.html" %}
