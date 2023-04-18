---
layout: docs
title: Adding custom notebook images
permalink: /docs/administration/installation-customization/add-custom-image
---

This document describes how to add custom notebook images to use in the JupyterHub Spawner UI

## How to add a custom notebook image

The JupyterHub Spawner UI provides a list of available images, which are suitable to be run as a singleuser notebook server.
Each of these images provide a set of different preinstalled dependencies and each is bound to a different profile. This means each also uses different configurations and compute resources.

Each image is listed in a dropdown list in the Spawner UI.

### Adding an existing image

If an image exists in a registry (like quay.io) and you wish to add it to ODH, you can create an `ImageStream`, which points to the image.

Then choose to add a label and enter the:
`opendatahub.io/notebook-image=true` label to enable it in the Spawner UI

The `ImageStream` YAML should look similar to this:

```
apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  labels:
    opendatahub.io/notebook-image: "true"
  annotations:
    opendatahub.io/notebook-image-url: "https://github.com/thoth-station/s2i-minimal-notebook"
    opendatahub.io/notebook-image-name: "Minimal Notebook Image"
    opendatahub.io/notebook-image-desc: "Jupyter notebook image with minimal dependency set to start experimenting with Jupyter environment."
  name: s2i-minimal-notebook
spec:
  lookupPolicy:
    local: true
  tags:
  - annotations:
      openshift.io/imported-from: quay.io/thoth-station/s2i-minimal-notebook
    from:
      kind: DockerImage
      name: quay.io/thoth-station/s2i-minimal-notebook:v0.0.4
    name: "v0.0.4"
    referencePolicy:
      type: Source
```

### Creating a custom image

To create a custom image, you can use  https://quay.io/repository/thoth-station/s2i-minimal-notebook as your base image and create a `BuildConfig`, which has your own repository with your desired customisations as its source.

For example, you could take the https://github.com/thoth-station/s2i-scipy-notebook/ repo, and your `BuildConfig` would look like this:

``` 
apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  labels:
    build: s2i-scipy-notebook
  name: s2i-scipy-notebook
spec:
  output:
    to:
      kind: ImageStreamTag
      name: s2i-scipy-notebook:local-build
  source:
    git:
      uri: https://github.com/thoth-station/s2i-scipy-notebook
    type: Git
  strategy:
    sourceStrategy:
      from:
        kind: ImageStreamTag
        name: quay.io/thoth-station/s2i-minimal-notebook:latest
    type: Source
  triggers:
  - type: ConfigChange
```

You can now create an `ImageStream` the same way as in the **Adding an existing image** section and push the build into it.

### Notes

This feature is not dependent on the version of the UI
