---
type: blog
author: anishasthana
title: Incubation of Distributed Workloads stack in ODH
preview: ODH is now incubating a Distributed Workloads stack
date: 2023-05-19
categories: features, release, documentation
featured: true
---

* Starting with ODH 1.6, we have started incubation of the [Distributed Workloads](https://github.com/opendatahub-io/distributed-workloads) stack. It brings the following features:
  * Ease of use with `Codeflare SDK`: The Codefare SDK is integrated into the out-of-the-box ODH notebook images and provides an interactive client for data scientists to define resource requirements (GPU, CPU, and memory) and to submit and manage training jobs.
  * Batch Management with `Multi-Cluster Application Dispatcher (MCAD)`: MCAD manages a queue of training jobs that data scientists submit. MCAD ensures that jobs are not started until all required compute resources are available on the cluster. MCAD ensures that a given team has not requested more aggregate resources than their quota allows, and ensures that highest priority jobs are executed first. Finally, MCAD ensures that all processes necessary to execute a distributed run are scheduled concurrently, meaning that compute cycles aren’t wasted waiting for processes to be scheduled.
  * Dynamic scaling with `InstaScale`: InstaScale works alongside MCAD to ensure that the OpenShift cluster contains sufficient compute resources to execute a job. InstaScale optimizes compute costs by launching the right-sizes compute instance for a given job, and releasing these instances when they are no longer needed.
  * `KubeRay` for management of remote Ray clusters on Kubernetes for running distributed compute workloads
* There is a quickstart for the stack available at [https://github.com/opendatahub-io/distributed-workloads/blob/main/Quick-Start.md](https://github.com/opendatahub-io/distributed-workloads/blob/main/Quick-Start.md)
* Refer to [https://cloud.redhat.com/blog/ai/ml-models-batch-training-at-scale-with-open-data-hub](https://cloud.redhat.com/blog/ai/ml-models-batch-training-at-scale-with-open-data-hub) for more information!
