---
layout: docs
title: Installation
permalink: /docs/ai-library/installation
style_class: ai-library
---

### Pre-requisites
As a component of Open Data Hub, the AI Library requires the same pre-requisites as Open Data Hub.

Installing ODH requires OpenShift 3.11 or 4.x. Documentation for OpenShift can be located ([here](https://docs.openshift.com/container-platform)).  All screenshots and instructions are from OpenShift 4.2.  For the purposes of this quick start, we used [try.openshift.com](https://try.openshift.com/) on AWS.  Tutorials have also been tested on [Code Ready Containers](https://code-ready.github.io/crc/) with 16GB of RAM.

Installation of Open Data Hub components Seldon and Argo will require the installation of their respective CRDs as outlined in the Advanced Installation instructions for [Optional Components](../administration/advanced-installation/optional.html).

#### External Components:
AI Library uses S3 Storage and has currently been tested with Ceph.
- Ceph Storage


#### Open Data Hub Components
In addition, several ODH components are required and can be installed simultaneously or beforehand.  
- Seldon
- Argo
- JupyterHub (recommended but not required)


### Enabling the AI Library

Installation of the AI Library can be done during the initial installation of ODH or enabled afterwards.

1.  Navigate to the ODH deployment.
    - Navigate to `Installed Operators` 
    - Select `Open Data Hub Operator`
    - Click the `Open Data Hub` Tab
    - Under `Open Data Hubs` select your deployment.
![ODH List]({{site.baseurl}}/assets/img/pages/docs/ai-library/installation/1-odh-list.png "ODH List")

1.  Edit the ODH deployment's setting YAML.
![ODH YAML]({{site.baseurl}}/assets/img/pages/docs/ai-library/installation/2-odh-yaml.png "ODH YAML")

1.  Set the pre-requisites and the ai-library settings to `odh_deploy: true` and set the s3 credentials appropriately.  You can  leave the other defaults or customized as you wish.  The required settings should look somewhat like the following:
```yaml
aicoe-jupyterhub:
  odh_deploy: true
seldon:
  odh_deploy: true
argo:
  odh_deploy: true
ai-library:
  odh_deploy: true
  s3_endpoint: 'https://ceph.storage'
  s3_access: 'access-key'
  s3_secret: 'secret-key'
  s3_bucket: 'my-bucket'
  s3_region: 'blank-for-ceph'
```

1.  Verify the installation.  
    1.  Navigate to your project's status
    1.  You should see several deployments including Seldon and AI Library services
    ![ODH YAML]({{site.baseurl}}/assets/img/pages/docs/ai-library/installation/2-odh-yaml.png "3-verify")
    1.  Using curl, browser, or other client test a route to one of the AI Library services.  For example, on CRC to test linear regression:
    ```bash
    curl -k https://linear-regression-odh.apps-crc.testing/
    ```
    A response of `Hello World!!` indicates the service is alive and ready.
    
    
### Installing Sample Models and Data

The AI Library deploys the appropriate endpoints, but it does not deploy sample models and data by default.  Sample data and models are kept in a [sample-models GitLab repository](https://gitlab.com/opendatahub/sample-models.git).  In order to try some of these models, they must be copied to the Ceph storage location accessible to AI Library.  Use your favorite method to do so.  Below details how to do so using the `s3cmd` tool.

1.  Install `s3cmd` cli
    ```bash
    pip3 install s3cmd
    ```

1.  Configure the credentials either as environment variables or in s3cmd config file
    ```bash
    export ACCESS_KEY=
    export SECRET_KEY=
    export HOST=
    ```
    (or)
    ```bash
    s3cmd --configure
    ```

1.  Check connectivity by using the following command to list existing buckets
    ```bash
    s3cmd ls --host=$HOST --access_key=$ACCESS_KEY --secret_key=$SECRET_KEY
    ```
1.  Create a new bucket to copy data in to,
    ```bash
    s3cmd mb s3://AI-LIBRARY --host=$HOST --access_key=$ACCESS_KEY --secret_key=$SECRET_KEY
    ```
1.  Clone the sample data set locally
    ```bash
    git clone ​ https://gitlab.com/opendatahub/sample-models.git
    cd sample-models
    ```

1.  Sync the required directory/files to your s3 backend.
    ```bash
    s3cmd sync <MODEL-DIRECTORY> s3://AI-LIBRARY/ --host=$HOST --access_key=$ACCESS_KEY --secret_key=$SECRET_KEY
    ```
1.  Once copied, list the contents of the bucket AI-LIBRARY to check files have been copied
    ```bash
    s3cmd ls s3://AI-LIBRARY --host=$HOST --access_key=$ACCESS_KEY --secret_key=$SECRET_KEY --recursive
    ```

{% include next-link.html label="Services" url="/docs/ai-library/services.html" %}
