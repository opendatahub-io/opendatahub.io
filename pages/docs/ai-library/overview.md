---
layout: docs
title: Overview
permalink: /docs/ai-library
style_class: ai-library
---

### What is AI Library?
The AI Library is an open source collection of AI components 
machine learning algorithms and solutions to common use cases to allow rapid prototyping.  To achieve this, it uses components of Open Data Hub, namely Seldon for serving, Argo workflows for automated training jobs, and Ceph for storage.  A more in depth look, you can read the [architecture document]({{'/assets/files/pages/docs/ai-lib-arch.pdf' | prepend: site.baseurl }}){:target="_blank"}.

![AI Library Physical View]({{'/assets/img/pages/docs/ai-library/ai-lib-physical-view.png' | prepend: site.baseurl }} "AI Library Physical View"){:class="img-auto"}

The number of services grows often.  For an in depth look at the services, refer to the API.  Currently, the available services include:
- Anomaly Detection
- Association Rule Learning
- Correlation Analysis
- Regression
- Flake Analysis
- Duplicate Bug Detection
- Fraud Detection
- Topic Modeling
- Matrix Factorization
- Sentiment Analysis

{% include next-link.html label="Installation" url="/docs/ai-library/installation.html" %}
