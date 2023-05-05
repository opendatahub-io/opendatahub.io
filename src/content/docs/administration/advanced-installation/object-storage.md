---
layout: docs
title: Installing Object Storage
permalink: /docs/administration/advanced-installation/object-storage
---

#### Deploying Ceph Nano Object Storage with Open Data Hub
The ceph-nano component of Open Data Hub can provide minimal object storage for use in your development environment.

<b>NOTE:</b> If you need to deploy persistent, large scale object storage for use in a production environment, we recommend <a href="https://rook.io/">Rook Ceph</a> or <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift-container-storage">OpenShift Container Storage</a> for scaleable, high availability storage running inside of your OpenShift cluster.

1. When deploying Open Data Hub, you will need to include the `ceph-nano` component in your kfdef file.

   Here is an example kfdef used in the basic tutorial that we have modified to deploy the `ceph nano` component
      ```yaml
      # ODH uses the KfDef manifest format to specify what components will be included in the deployment
      apiVersion: kfdef.apps.kubeflow.org/v1
      kind: KfDef
      metadata:
        # The name of your deployment
        name: opendatahub
      # only the components listed in the `KFDef` resource will be deployed:
      spec:
        applications:
          # REQUIRED: This contains all of the common options used by all ODH components
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: odh-common
            name: odh-common
          # Create the SecurityContextConstraint to grant the ceph-nano service account anyuid permissions
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: ceph/object-storage/scc
            name: ceph-nano-scc
          # Deploy ceph-nano for minimal object storage running in a pod
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: ceph/object-storage/nano
            name: ceph-nano
          # Deploy Radanalytics Spark Operator
          - kustomizeConfig:
              repoRef:
                name: manifests
                path: radanalyticsio/spark/cluster
            name: radanalyticsio-spark-cluster
          # Deploy Open Data Hub JupyterHub
          - kustomizeConfig:
              parameters:
                - name: s3_endpoint_url
                  value: "http://ceph-nano-0"
              repoRef:
                name: manifests
                path: jupyterhub/jupyterhub
            name: jupyterhub
          # Deploy addtional Open Data Hub Jupyter notebooks
          - kustomizeConfig:
              overlays:
                - additional
              repoRef:
                name: manifests
                path: jupyterhub/notebook-images
            name: notebook-images
        # Reference to all of the git repo archives that contain component kustomize manifests
        repos:
          # Official Open Data Hub v1.0.0 component manifests repo
          # This shows that we will be deploying components from an archive of the odh-manifests repo tagged for v1.0.0
          - name: manifests
            uri: 'https://github.com/opendatahub-io/odh-manifests/tarball/v1.0.0'
      ```

1. Once the `ceph-nano-0 pod` is running, you can access the object storage from any pod inside the namespace use the endpoint `http://ceph-nano-0`.
   S3 credentials to access object storage will be saved in the secret name `ceph-nano-credentials`.

   <b>NOTE:</b> This object storage is for DEVELOPMENT PURPOSES ONLY. The access credentials and stored objects DO NOT persist across pod restarts and will be changed/deleted when a new pod is spawned.

{% include next-link.html label="GPU Enablement" url="/docs/administration/advanced-installation/gpu.html" %}
