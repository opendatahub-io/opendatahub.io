---
layout: docs
title: What Is Open Data Hub
permalink: /docs
---

[Open Data Hub (ODH)]({{ '/' | prepend: site.baseurl }}) is an open source project that provides open source AI tools for running large and distributed AI workloads on OpenShift Container Platform. Currently, the Open Data Hub project provides open source tools for data storage, distributed AI and Machine Learning (ML) workflows and a Notebook development environment. The Open Data Hub project [roadmap]({{ '/docs/roadmap/future.html' | prepend: site.baseurl }}) also includes tools specifically for monitoring and managing AI services.

[AI Library](docs/ai-library/installation.html) is also an open source project initiated by Red Hat AI Center of Excellence team as an effort to provide ML models as a service on OpenShift Container Platform. The development of these models as services is a community driven open source project to make AI/ML models more accessible.

Open Data Hub includes several open source components that can be enabled or disabled.  They include:
- Apache Spark
- JupyterHub
- Prometheus
- Grafana
- Argo
- Seldon

For further information refer to the [architecture]({{ '/docs/architecture.html' | prepend: site.baseurl }}) and [release notes]({{ '/docs/roadmap/release-notes.html' | prepend: site.baseurl }}).


{% include next-link.html label="Getting Started" url="/docs/getting-started/quick-installation.html" %}