---
layout: docs
title: Installing Object Storage
permalink: /docs/administration/advanced-installation/object-storage
---

#### Ceph installation with the Rook operator

To install Ceph with the Rook operator, please follow these instructions (this does require cluster-admin permissions):

1.  Download the files for Rook Ceph v0.9.3
    * If you want to modify the source Rook Ceph files directly, clone the Rook operator and checkout the v0.9.3 branch.
      ```bash
      git clone https://github.com/rook/rook.git
      cd rook
      git checkout -b rook-0.9.3 v0.9.3
      cd cluster/examples/kubernetes/ceph/
      ```
    * Here are links to modified versions of the files that will install a basic Rook Ceph cluster with object storage enabled
      * <a href="{{ '/assets/files/pages/arch/rook/v0.9.3/scc.yaml' | prepend: site.baseurl }}" download>scc.yaml</a>
      * <a href="{{ '/assets/files/pages/arch/rook/v0.9.3/operator.yaml' | prepend: site.baseurl }}" download>operator.yaml</a>
      * <a href="{{ '/assets/files/pages/arch/rook/v0.9.3/cluster.yaml' | prepend: site.baseurl }}" download>cluster.yaml</a>
      * <a href="{{ '/assets/files/pages/arch/rook/v0.9.3/toolbox.yaml' | prepend: site.baseurl }}" download>toolbox.yaml</a>
      * <a href="{{ '/assets/files/pages/arch/rook/v0.9.3/object.yaml' | prepend: site.baseurl }}" download>object.yaml</a>
      * <a href="{{ '/assets/files/pages/arch/rook/v0.9.3/object-user.yaml' | prepend: site.baseurl }}" download>object-user.yaml</a>


1.  Edit `operator.yaml` and set the environment variables for `FLEXVOLUME_DIR_PATH` and `ROOK_HOSTPATH_REQUIRES_PRIVILEGED` to allow the Rook operator to use OpenShift hostpath storage
```yaml
-  name: FLEXVOLUME_DIR_PATH
   value: "/etc/kubernetes/kubelet-plugins/volume/exec"
-  name: ROOK_HOSTPATH_REQUIRES_PRIVILEGED
   value: "true"
```

1.  Configure the necessary security contexts, and deploy the rook operator, this will create a new namespace, `rook-ceph-system`, and deploy the pods in it:
```bash
oc create -f scc.yaml
oc create -f operator.yaml
```

1.  Check that all the pods are running in `rook-ceph-system`
```bash
oc get pods -n rook-ceph-system
NAME READY STATUS RESTARTS AGE
rook-ceph-agent-j4zms 1/1 Running 0 33m
rook-ceph-agent-qghgc 1/1 Running 0 33m
rook-ceph-agent-tjzv6 1/1 Running 0 33m
rook-ceph-agent-w2rnk 1/1 Running 0 33m
rook-ceph-operator-567f8cbb6-f5rsj 1/1 Running 0 33m
rook-discover-gghsw 1/1 Running 0 33m
rook-discover-jd226 1/1 Running 0 33m
rook-discover-lgfrx 1/1 Running 0 33m
rook-discover-lnjwp 1/1 Running 0 33m
```

1. Edit the `object.yaml` file and replace port `80` with `8080`
```yaml
gateway:
# type of the gateway (s3)
type: s3
# A reference to the secret in the rook namespace where the ssl certificate is stored
sslCertificateRef:
# The port that RGW pods will listen on (http)
port: 8080
```

1.  Once the operator is ready, you can create a Ceph cluster, and Ceph object service. The toolbox service is also handy to deploy for checking the health of the Ceph cluster.
```bash
oc create -f cluster.yaml
oc create -f toolbox.yaml
oc create -f object.yaml
```

1.  Check all the pods are running in `rook-ceph` namespace before proceeding
```bash
oc get pods -n rook-ceph
NAME READY STATUS RESTARTS AGE
rook-ceph-mgr-a-5b6fcf7c6-cx676 1/1 Running 0 6m56s
rook-ceph-mon-a-54d9bc6c97-kvfv6 1/1 Running 0 8m38s
rook-ceph-mon-b-74699bf79f-2xlzz 1/1 Running 0 8m22s
rook-ceph-mon-c-5c54856487-769fx 1/1 Running 0 7m47s
rook-ceph-osd-0-7f4c45fbcd-7g8hr 1/1 Running 0 6m16s
rook-ceph-osd-1-55855bf495-dlfpf 1/1 Running 0 6m15s
rook-ceph-osd-2-776c77657c-sgf5n 1/1 Running 0 6m12s
rook-ceph-osd-3-97548cc45-4xm4q 1/1 Running 0 5m58s
rook-ceph-osd-prepare-ip-10-0-138-84-gc26q 0/2 Completed 0 6m29s
rook-ceph-osd-prepare-ip-10-0-141-184-9bmdt 0/2 Completed 0 6m29s
rook-ceph-osd-prepare-ip-10-0-149-16-nh4tm 0/2 Completed 0 6m29s
rook-ceph-osd-prepare-ip-10-0-173-174-mzzhq 0/2 Completed 0 6m28s
rook-ceph-rgw-my-store-d6946dcf-q8k69 1/1 Running 0 5m33s
rook-ceph-tools-cb5655595-4g4b2 1/1 Running 0 8m46s
```

1.  Next, you will need to create a set of S3 credentials, the resulting credentials will be stored in a secrets file under the `rook-ceph` namespace. There isn’t currently a way to cross-share secrets between OpenShift namespaces, so you will need to copy the secret to whichever namespace is running the applications you want to interact with the object store. You can also copy the AccessKey and SecretKey from the second command.
```bash
oc create -f object-user.yaml
oc get secrets -n rook-ceph rook-ceph-object-user-my-store-odh-user -o json
```

1.  From the OpenShift console, create a route to the rook service, `rook-ceph-rgw-my-store`, in the `rook-ceph` namespace to expose the endpoint. This endpoint url will be used to access the S3 interface from the example notebooks.

{% include next-link.html label="GPU Enablement" url="/docs/administration/advanced-installation/gpu.html" %}
