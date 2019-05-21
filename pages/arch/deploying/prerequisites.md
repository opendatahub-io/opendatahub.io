---
layout: arch
title: Deploying
permalink: /arch/deploying/prerequisites
---
## Pre-requisites

Installing ODH requires Openshift 3.11 or 4.0 Cluster. If this is not available, users can request a developer preview cluster with Openshift 4.0 installed here t[ry.openshift.com](https://try.openshift.com/). Official Openshift production documentation for OpenShift 4.1 ([https://docs.openshift.com/container-platform/4.1/welcome/index.html](https://docs.openshift.com/container-platform/4.1/welcome/index.html)) and OCP 3.11 ([https://docs.openshift.com/container-platform/3.11/welcome/index.html](https://docs.openshift.com/container-platform/3.11/welcome/index.html)). OCP 4.0 can also be installed on Amazon Web Services (AWS) following this tutorial ([https://github.com/openshift/training](https://github.com/openshift/training)).

Ansible is also required for installing monitoring tools and AI Library. Please follow installation instructions here: [https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

{% include next-link.html label="Installation" url="/arch/deploying/installation.html" %}