---
layout: blog
author: pmackinn
title:  GPU-enabled notebooks in Open Data Hub
preview: GPU support was added recently to Open Data Hub. This article will go into a bit more detail about using this capability, including a known issue in OpenShift 3.11.
date: 2020-02-20
categories: jupyterhub, notebooks, gpu
---

GPU-enabled notebooks in Open Data Hub
------
Open Data Hub 0.5.0 [introduced support for utilizing NVIDIA GPUs](https://gitlab.com/opendatahub/opendatahub-operator/-/blob/v0.5.0/docs/enabling-gpu-aicoe-jupyterhub.adoc) from Jupyter notebooks. GPU are hardware accelerators that dramatically increase the performance of model training and inference for deep learning applications such as image classification, medical healthcare diagnosis, and autonomous vehicles, to name a few. These hardware accelerators can efficiently perform complex matrix multiplication operations at a rate that far exceeds standard CPU-based operations. The Open Data Hub operator and its GPU notebook support is designed to work seamlessly across OpenShift 3 and OpenShift 4 deployments.

Enablement by the Operator
------
There has been an evolution to GPU enablement in OpenShift that has progressed from privileged pods to special SELinux security policies to finally a model that shields the pod from any particular security context considerations. The Open Data Hub operator has [configuration settings](https://gitlab.com/opendatahub/opendatahub-operator/-/blob/v0.5.1/deploy/crds/opendatahub_v1alpha1_opendatahub_cr.yaml#L27) that instruct the JupyterHub notebook spawner as to which pod specification should be applied.

* none (current default for OpenShift 4 deployments)
* selinux (3.11 mode)
* privileged (legacy mode for 3.10 deployments)

The `selinux` mode is the most detailed and is dependent on specific installation of SELinux policies as described [here](https://github.com/zvonkok/origin-ci-gpu/blob/release-3.11/doc/How%20to%20use%20GPUs%20with%20DevicePlugin%20in%20OpenShift%203.11%20.pdf). The [3.10 GPU enablement](https://blog.openshift.com/how-to-use-gpus-with-deviceplugin-in-openshift-3-10/) is similar but relies on the GPU pods running privileged containers.

3.11 issue
------
Data scientists sometimes include various Python packages in their notebook images and pods, some of which include process and task distribution libraries. Those types of libraries typically are designed to run in non-Kubernetes platforms and may rely on access to IPC constructs that are typically not used outside container communication within a pod. However, if a notebook pod has been scheduled to a node that has multiple GPU devices available, there is certainly nothing precluding using such a distribution mechanism locally.

The community recently discovered an issue with the `selinux` mode of GPU notebook enablement in OpenShift 3.11. In the spawned Jupyter notebook pod, there are two containers, nbviewer and the notebook container. When a Open Data Hub user tried to initialize the dask.distributed library in their GPU notebook, they would encounter the following error:

```
  File "/opt/app-root/src/miniconda/envs/pytorch/lib/python3.7/multiprocessing/synchronize.py", line 59, in __init__
    unlink_now)
FileNotFoundError: [Errno 2] No such file or directory
```

It's not apparent from the stacktrace but the underlying issue is that two key directories for IPC, `/dev/shm` and `/dev/mqueue`, receive SELinux labels from Docker that are inconsistent with the rest of the container file system. Thus, they are not writable by the dask.distributed IPC library at initialization.

Workarounds:
* Use [CRI-O instead of Docker](https://docs.openshift.com/container-platform/3.11/crio/crio_runtime.html) for the container runtime. Ad-hoc testing indicated that the problem didn't occur with CRI-O.
* Use privileged GPU pods instead. Note that this provides elevated capabilities for a pod and should only be done after serious consideration of your own security requirements.

Finally, there is a workaround that could be applied in the [JupyterHub custom ConfigMap](https://gitlab.com/opendatahub/opendatahub-operator/-/tree/v0.5.1/roles/aicoe-jupyterhub#modifying-jupyterhub-server-behavior). The goal is to modify the security context for the GPU pod spec such that we ensure that a common MCS category is applied to all the containers in the pod.

```
apiVersion: v1
data:
  jupyterhub_config.py: |
    from kubernetes.client import V1Capabilities, V1SELinuxOptions
    spawner = c.OpenShiftSpawner
    def mcs_selinux_profile(spawner, pod):
      # Apply profile from singleuser-profiles
      apply_pod_profile(spawner, pod)
      if spawner.gpu_mode and spawner.gpu_mode == "selinux" and \
           spawner.extra_resource_limits and "nvidia.com/gpu" in spawner.extra_resource_limits:
        # Currently a bug in RHEL Docker 1.13 whereby /dev IPC dirs get inconsistent MCS
        pod.spec.security_context.se_linux_options = V1SELinuxOptions(type='nvidia_container_t',level='s0')
      return pod
    spawner.modify_pod_hook = mcs_selinux_profile
kind: ConfigMap
metadata:
  name: jupyterhub-mcs
```

