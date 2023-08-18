---
type: blog
author: ruivieira
title: "Deploying TrustyAI Services with the TrustyAI Operator"
preview: Deploying TrustyAI Services with the TrustyAI Operator
date: 2023-08-18
categories: features, release, documentation
featured: true
---

## The TrustyAIService Custom Resource

Starting with OpenDataHub (ODH) 1.9.0, there is a new way to deploy TrustyAI: the TrustyAI Operator.

The operator is responsible for deploying and managing TrustyAI services, as well as managing all other resources required by TrustyAI.
These include configuring storage, creating service monitors, configuring the serving runtimes and routes.
The TrustyAI operator provides a new Custom Resource Definition (CRD) called `TrustyAIService`.

The schema of the TrustyAI service CR is simple and consists of:

```yaml
apiVersion: trustyai.opendatahub.io.trustyai.opendatahub.io/v1alpha1
kind: TrustyAIService
metadata:
  name: trustyai-service
spec:
  storage:
    format: "PVC"
    folder: "/inputs"
    size: "1Gi"
  data:
    filename: "data.csv"
    format: "CSV"
  metrics:
    schedule: "5s"
    batchSize: 5000 # Optional, default is 5000
```

The following fields are required:

- `metadata.name`: The name of the TrustyAI service instance.
- `spec.storage.format`: The storage format for the data (currently, only `PVC` is supported).
- `spec.storage.folder`: The location (within the PVC) where the data will be stored.
- `spec.storage.size`: The size of the PVC to be requested.
- `spec.data.filename`: The suffix for the stored data files.
- `spec.data.format`: The format of the data. Currently, only `CSV` is supported.
- `spec.metrics.schedule`: The interval at which the metrics are calculated (optional, defaults to 5 seconds). The duration is specified using the ISO-8601 format, *e.g.* `5s` for 5 seconds, `5m` for 5 minutes, `5h` for 5 hours, *etc*.
- `spec.metrics.batchSize`: The observation's historical window size to be used for metrics calculation. This is optional and the default is 5000 (*i.e.* metrics will be calculated using the latest 5000 inferences)

## Workflow

The TrustyAI Operator will be installed alongside your other ODH components in your ODH namespace.
After creating a data science project, deploy the TrustyAI CR into that project to create a TrustyAI service, and the operator will link all current/future models in that namespace to that TrustyAI service instance.
The recommended workflow is to have a single TrustyAI service per project, with the operator managing all TrustyAI services across any number of projects.

## Getting Involved and Additional Resources

- Try it out : Try out the new operator installation by enabling it on ODH `KfDef` and deploying the TrustyAI service.
- Contribution Guide: If you're interested in contributing to the development of the operator (or TrustyAI in general), please review the [Contribution Guide](https://github.com/trustyai-explainability/trustyai-explainability/blob/main/CONTRIBUTING.md). The [operator's repository](https://github.com/trustyai-explainability/trustyai-service-operator) provides instructions on how to set up your development environment and install the operator.
- Design Document: For an in-depth understanding of the design and architecture of TrustyAI operator, please consult our [Architectural Decision Record](https://github.com/trustyai-explainability/community/pull/5).
- Source code: To open issues and review code, visit the [trustyai-service-operator repository](https://github.com/trustyai-explainability/trustyai-service-operator).
