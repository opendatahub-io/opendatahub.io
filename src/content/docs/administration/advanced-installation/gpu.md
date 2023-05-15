---
layout: docs
title: GPU Enablement
permalink: /docs/administration/advanced-installation/gpu
---
Open Data Hub has support for accessing NVIDIA GPUs from Jupyter notebooks. Currently,
the Open Data Hub team has verified that ODH Core Jupyter notebooks can successfully access the GPU in OpenShift 4.8+ clusters.


### Prerequisites
*   OpenShift cluster with GPU(s) enabled

    *   Enabling GPUs in OpenShift 4.8+ can be achieved by deploying the NVIDIA GPU Operator from the OpenShift OperatorHub. Please follow NVIDIA GPU OpenShift installation instructions [here](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/openshift/contents.html). If you encounter any issue related to this operator, please check your issue against the list open issues in NVIDIA [gpu-operator](https://github.com/NVIDIA/gpu-operator/issues) repository.

        The [Node Feature Discovery](https://github.com/openshift/cluster-nfd-operator) operator is responsible for discovering and labeling hardware (GPU(s) in this case) features available on each node.
        The [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) will setup and install the necessary drivers to enable the use of GPU(s) as compute resource.


### Verifying GPU Availability
To spawn a Jupyter Notebook with GPU support, set the `GPU` field to a number greater than 0.  From inside the notebook, run the following command to verify it's availability.
```python
import tensorflow as tf
tf.test.is_gpu_available()
```