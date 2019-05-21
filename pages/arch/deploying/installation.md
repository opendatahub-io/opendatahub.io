---
layout: arch
title: Deploying
permalink: /arch/deploying/installation
---
## Installation

The Open Data Hub operator deploys and manages various components using the [Operator SDK](https://github.com/operator-framework/operator-sdk) in the Operator Framework. There are two options to deploy ODH operator: Manual and using Operator Lifecycle Manager (OLM). Both require Openshift 3.11 or 4.0 and an installation of Ceph using Rook operator.

  

The latest version of the Open Data Hub operator project is located here: [https://gitlab.com/opendatahub/opendatahub-operator](https://gitlab.com/opendatahub/opendatahub-operator)

  

The latest version of the Open Data Hub operator image is located here: [https://quay.io/opendatahub/opendatahub-operator](https://quay.io/opendatahub/opendatahub-operator)

  

The following installation instructions will describe installing Ceph(Rook) followed by ODH operator.

#### Ceph installation with the Rook operator

To install Ceph with the Rook operator, please follow these instructions (this does require cluster-admin permissions):

  

1.  Clone the Rook operator    
```bash
git clone https://github.com/rook/rook.git
cd rook
```   

2.  Checkout Rook v0.9.3
```bash
git checkout -b rook-0.9.3 v0.9.3
cd cluster/examples/kubernetes/ceph/
```
    

3.  You will need to edit [operator.yaml](https://gist.githubusercontent.com/mmgaggle/94742f127070d7f0191b00d57f90d564/raw/e5f712309e411420bcc423b93aa90b13f80303ab/operator.yaml), [cluster.yaml](https://gist.githubusercontent.com/mmgaggle/94742f127070d7f0191b00d57f90d564/raw/e5f712309e411420bcc423b93aa90b13f80303ab/cluster.yaml), [rook-config-override.yaml](https://gist.githubusercontent.com/mmgaggle/94742f127070d7f0191b00d57f90d564/raw/3a774a99a4ded7012fb398c65bebb3796dd6dac1/rook-config-override.yaml) and [object.yaml](https://gist.githubusercontent.com/mmgaggle/94742f127070d7f0191b00d57f90d564/raw/e5f712309e411420bcc423b93aa90b13f80303ab/object.yaml). For those that are curious, you can use the following command to see the differences between these versions and the default custom resource definitions.
```bash
git diff -u
```

4.  Edit operator.yaml and set
```yaml
-  name: FLEXVOLUME_DIR_PATH
   value: "/etc/kubernetes/kubelet-plugins/volume/exec"
-  name: ROOK_HOSTPATH_REQUIRES_PRIVILEGED
   value: "true"
```    

5.  Configure the necessary security contexts, and deploy the rook operator, this will create a new namespace, rook-ceph-system, and deploy the pods in it:
```bash
oc create -f scc.yaml
oc create -f operator.yaml
```

6.  Check that all the pods are running in rook-ceph-system
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

7.  Once the operator is ready, you can create a Ceph cluster, and Ceph object service. The toolbox service is also handy to deploy for checking the health of the Ceph cluster.
```bash
oc create -f cluster.yaml
oc create -f toolbox.yaml
oc create -f object.yaml
```   

8.  Check all the pods are running in rook-ceph namespace before proceeding
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

9.  Next, you will need to create a set of S3 credentials, the resulting credentials will be stored in a secrets file under the rook-ceph namespace. There isn’t currently a way to cross-share secrets between OpenShift namespaces, so you will need to copy the secret to whichever namespace is running the applications you want to interact with the object store. You can also copy the AccessKey and SecretKey from the second command.
```bash
oc create -f object-user.yaml
oc get secrets -n rook-ceph rook-ceph-object-user-my-store-my-user -o json
```    

10.  From the Openshift console, create a route to the rook service, rook-ceph-rgw-my-store, in the rook-ceph namespace to expose the endpoint. This endpoint url will be used to access the S3 interface from the example notebooks.
    

#### Option 1: ODH Manual Installation

The Open Data Hub operator can be manually installed by adding the ODH Custom Resource Definition (CRD) to cluster, creating the ODH service account & RBAC policies in the target namespace and deploying the operator image.

  

1.  Clone the opendatahub-operator repository
```bash
git clone [https://gitlab.com/opendatahub/opendatahub-operator](https://gitlab.com/opendatahub/opendatahub-operator)
cd opendatahub-operator
```
    
2.  Deploy the ODH custom resource based on the sample template. This step requires cluster-admin permissions.
```bash
oc create -f deploy/crds/opendatahub_v1alpha1_opendatahub_crd.yaml
```
    

4.  Create a new project to deploy Open Data Hub into
```bash
oc new-project <projectname>
```
    

6.  Create the RBAC policy for the service account the operator will run as
```bash
oc create -f deploy/service_account.yaml
oc create -f deploy/role.yaml
oc create -f deploy/role_binding.yaml
oc adm policy add-role-to-user admin -z opendatahub-operator
```
    
8.  Deploy the operator image into your project
```bash
oc create -f deploy/operator.yaml
```

10.  Deploy the ODH custom resource based on the sample template
```bash
oc create -f deploy/crds/opendatahub_v1alpha1_opendatahub_cr.yaml
```
 
12.  To check successful installation output of command below should be similar.
```bash
oc get pods
NAME READY STATUS RESTARTS AGE
jupyterhub-1-bx5ks 1/1 Running 0 2m7s
jupyterhub-1-deploy 0/1 Completed 0 2m16s
jupyterhub-db-1-deploy 0/1 Completed 0 2m9s
jupyterhub-db-1-wfvl6 1/1 Running 1 2m1s
opendatahub-operator-6fb66fc5b9-z9xb8 1/1 Running 0 2m58s
spark-cluster-opendatahub-m-ft92h 1/1 Running 0 72s
spark-cluster-opendatahub-w-7mnsl 1/1 Running 0 72s
spark-cluster-opendatahub-w-9g8hm 1/1 Running 0 72s
spark-operator-7c67cb6f8f-6xpvs 1/1 Running 0 2m7s
```

  

#### Option 2: ODH Installation via the Operator Lifecycle Manager (OLM) Catalog

In the coming weeks the ODH operator will become available in the community-operators section on [operatorhub.io](https://operatorhub.io/) . Once it is available follow these instructions to install it from the OLM catalogue.

1.  From the Openshift console, navigate to the newly created namespace
    
2.  Select Operator Catalogue from the left menu bar
    
3.  Under Other, search for Open Data Hub
    
4.  In the list of community-operators, you can create a subscription to the Open Data Hub operator catalog. This subscription will allow you to stay current with the latest version the operator as it’s released.
    
5.  Follow the installation instructions to install ODH operator.
    
6.  After installation is successful it should be listed under Installed Operators menu.
