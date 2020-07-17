---
layout: docs
title: GPU Enablement
permalink: /docs/administration/advanced-installation/gpu
---
Open Data Hub has support for accessing NVIDIA GPUs from Jupyter notebooks. Currently,
the Open Data Hub team has verified that JupyterHub can successfully access the GPU in OpenShift 3.11 clusters.
OpenShift 4.x GPU enablement is still in development. These instructions will be updated as soon as it is available.

### Prerequisites
*   OpenShift cluster with GPU(s) enabled
    *   Enabling GPUs in OpenShift 3.11 is outside of the scope of Open Data Hub. The document [How to use GPUs with DevicePlugin in OpenShift 3.11](https://github.com/zvonkok/origin-ci-gpu/blob/release-3.11/doc/How%20to%20use%20GPUs%20with%20DevicePlugin%20in%20OpenShift%203.11%20.pdf) can provide guidance, but is not official.
    *   Enabling GPUs in OpenShift 4.x can be achieved by deploying Node Feature Discovery (NFD) Operator and NVIDIA GPU Operator.

        The [Node Feature Discovery](https://github.com/openshift/cluster-nfd-operator) operator is responsible for discovering and labeling hardware (GPU(s) in this case) features available on each node.
        The [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) will setup and install the necessary drivers to enable the use of GPU(s) as compute resource.

        1.  Deploy the Node Feature Discovery operator using the OpenShift OperatorHub WebUI.
            The blog on [Creating a GPU-enabled node with OpenShift 4.2 in Amazon EC2](https://blog.openshift.com/creating-a-gpu-enabled-node-with-openshift-4-2-in-amazon-ec2) has a "Deploy the Node Feature Discovery Operator" section that demonstrates how to deploy the NFD operator and create a `NodeFeatureDiscovery` custom resource

        1. Before deploying the NVIDIA GPU Operator confirm that all of the nodes with GPUs have the appropriate hardware labels.
           ```
           $ oc describe node <GPU NODE NAME> -o json 

            Name:    ip-10-0-137-200.ec2.internal
            Roles:   worker
            Labels:  beta.kubernetes.io/arch=amd64
                      beta.kubernetes.io/instance-type=p2.xlarge
                      beta.kubernetes.io/os=linux
                      failure-domain.beta.kubernetes.io/region=us-east-1
                      failure-domain.beta.kubernetes.io/zone=us-east-1a
                      feature.node.kubernetes.io/cpu-cpuid.ADX=true
                      feature.node.kubernetes.io/cpu-cpuid.AESNI=true
                      feature.node.kubernetes.io/cpu-cpuid.AVX=true
                      feature.node.kubernetes.io/cpu-cpuid.AVX2=true
                      feature.node.kubernetes.io/cpu-cpuid.FMA3=true
                      feature.node.kubernetes.io/cpu-cpuid.HLE=true
                      feature.node.kubernetes.io/cpu-cpuid.RTM=true
                      feature.node.kubernetes.io/cpu-hardware_multithreading=true
                      feature.node.kubernetes.io/cpu-pstate.turbo=true
                      feature.node.kubernetes.io/kernel-selinux.enabled=true
                      feature.node.kubernetes.io/kernel-version.full=4.18.0-147.3.1.el8_1.x86_64
                      feature.node.kubernetes.io/kernel-version.major=4
                      feature.node.kubernetes.io/kernel-version.minor=18
                      feature.node.kubernetes.io/kernel-version.revision=0
                      feature.node.kubernetes.io/pci-1013.present=true
                      feature.node.kubernetes.io/pci-10de.present=true
                      feature.node.kubernetes.io/pci-1d0f.present=true
                      feature.node.kubernetes.io/storage-nonrotationaldisk=true
                      feature.node.kubernetes.io/system-os_release.ID=rhcos
                      feature.node.kubernetes.io/system-os_release.VERSION_ID=4.3
                      feature.node.kubernetes.io/system-os_release.VERSION_ID.major=4
                      feature.node.kubernetes.io/system-os_release.VERSION_ID.minor=3
                      ...
           ```
        1. Deploy the NVIDIA GPU operator using the OpenShift OperatorHub WebUI.
	The guide [OpenShift on GPU install](https://docs.nvidia.com/datacenter/kubernetes/openshift-on-gpu-install-guide/index.html) has a [GPU support](https://docs.nvidia.com/datacenter/kubernetes/openshift-on-gpu-install-guide/index.html#openshift-gpu-support) section covering all the steps to deploy the NVIDIA GPU operator.

        1. Once the Special Resource Operator finishes the installation of the appropriate drivers, you should see the number of gpus available as a resource on the GPU enabled nodes.

           ```
           $ oc get node <GPU NODE NAME> -o json | jq .status.allocatable
            {
              "cpu": "3500m",
              "hugepages-1Gi": "0",
              "hugepages-2Mi": "0",
              "memory": "15804984Ki",
              "pods": "250",
              "nvidia.com/gpus": "1"
            }

           ```

### Configuring the JupyterHub component

To properly configure the `aicoe-jupytherhub` component to use GPUs, 2 things must be done
1.  Deploy GPU Compatible Jupyter Notebook Images by setting `notebook_images.deploy_cuda_notebooks: True`.
2.  Configure JupyterHub Server to spawn user pods with GPU access by setting `gpu_mode` to empty/`null`, `selinux`, or `privileged`

These settings will deploy a set of `BuildConfigs` which prepare **CUDA enabled Python s2i images** which are then used for building `s2i-tensorflow-notebook-gpu` image available in JupyterHub Spawner UI. This image has Tensorflow GPU pre-installed and enables users to leverage GPUs available in a cluster with the Tensorflow library.

The build chain template can be found upstream at [https://github.com/thoth-station/tensorflow-build-s2i/tree/master/cuda](https://github.com/thoth-station/tensorflow-build-s2i/tree/master/cuda)

#### OpenShift 4.x
Leave the `gpu_mode` empty or set it to `null`.
```yaml
aicoe-jupyterhub:
    gpu_mode: ""
    notebook_images:
        deploy_cuda_notebooks: True
```

#### OpenShift 3.11 (Standard)
If the configuration of the cluster is based on the documentation [How to use GPUs with DevicePlugin in OpenShift 3.11](https://github.com/zvonkok/origin-ci-gpu/blob/release-3.11/doc/How%20to%20use%20GPUs%20with%20DevicePlugin%20in%20OpenShift%203.11%20.pdf), set gpu_mode to value `selinux`
```yaml
aicoe-jupyterhub:
    gpu_mode: "selinux"
    notebook_images:
        deploy_cuda_notebooks: True
```

#### OpenShift 3.11 (Other)
In the case GPU enablement in the cluster is configured differently, containers may be required to run in privileged mode to gain access to GPUs. In this case set `gpu_mode` to value `privileged`
```yaml
aicoe-jupyterhub:
    gpu_mode: "privileged"
    notebook_images:
        deploy_cuda_notebooks: True
```


### Verifying GPU Availability
To spawn a Jupyter Notebook with GPU support, set the `GPU` field to a number greater than 0.  From inside the notebook, run the following command to verify it's availability.
```python
import tensorflow as tf
tf.test.is_gpu_available()
```


#### Additional resources
* [How to use GPUs with DevicePlugin in OpenShift 3.10](https://blog.openshift.com/how-to-use-gpus-with-deviceplugin-in-openshift-3-10)
* [OpenShift 3.11 - Using Device Plug-ins](https://docs.openshift.com/container-platform/3.11/dev_guide/device_plugins.html)
* [Kubernetes GPU Documentation](https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus)
* [OpenShift 3.11 Cluster Administration / Managing Security Context Constraints](https://docs.openshift.com/container-platform/3.11/admin_guide/manage_scc.html)
* [JupyterHub deployment using OpenShift OAuth authenticator](https://github.com/AICoE/jupyterhub-ocp-oauth)

{% include next-link.html label="Architecture" url="/docs/architecture.html" %}
