---
layout: docs
title: GPU Enablement
permalink: /docs/administration/advanced-installation/gpu
---
Open Data Hub has support for accessing NVIDIA GPUs from Jupyter notebooks. Currently,
the Open Data Hub team has verified that JupyterHub can successfully access the GPU in OpenShift 4.2+ clusters.


### Prerequisites
*   OpenShift cluster with GPU(s) enabled

    *   Enabling GPUs in OpenShift 4.2+ can be achieved by deploying Node Feature Discovery (NFD) Operator and NVIDIA GPU Operator. Please follow NVIDIA GPU OpenShift installation instructions [here](https://docs.nvidia.com/datacenter/kubernetes/openshift-on-gpu-install-guide/) and refer to the section on Red Hat entitlements if you encounter errors related to `dnf` package installation errors. If you encounter any issue related to this operator, please check your issue against the list open bugs in [bugzilla](https://bugzilla.redhat.com/buglist.cgi?bug_status=__open__&classification=Red%20Hat&component=Special%20Resource%20Operator&list_id=11632255&product=OpenShift%20Container%20Platform&query_format=advanced) for the NVIDIA GPU operator running on OpenShift.

        The [Node Feature Discovery](https://github.com/openshift/cluster-nfd-operator) operator is responsible for discovering and labeling hardware (GPU(s) in this case) features available on each node.
        The [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) will setup and install the necessary drivers to enable the use of GPU(s) as compute resource.


### Configuring the JupyterHub component

To properly configure the `jupytherhub` component to use GPUs, please enable `cuda` images by uncommenting the `cuda` overlay in the `KFDef` file as seen below.
```
- kustomizeConfig:
    overlays:
    - cuda
    - additional
    repoRef:
      name: manifests
      path: jupyterhub/notebook-images
  name: notebook-images
```

These settings will deploy a set of `BuildConfigs` which prepare **CUDA enabled Python s2i images** which are then used for building `s2i-tensorflow-notebook-gpu` image available in JupyterHub Spawner UI. This image has Tensorflow GPU pre-installed and enables users to leverage GPUs available in a cluster with the Tensorflow library.

NOTE: Building the cuda container and GPU notebook images may take 2-3hrs based on available cluster resources

### Verifying GPU Availability
To spawn a Jupyter Notebook with GPU support, set the `GPU` field to a number greater than 0.  From inside the notebook, run the following command to verify it's availability.
```python
import tensorflow as tf
tf.test.is_gpu_available()
```


{% include next-link.html label="Architecture" url="/docs/architecture.html" %}
