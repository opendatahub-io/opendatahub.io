---
layout: blog
author: vpavlin
title:  Open Data Hub 0.6.1 Release Guide
preview: Open Data Hub 0.6.1 was just released with many bug fixes and some new exciting features. It is also the first release where OpenShift CI helped us to review the contributions.
date: 2020-05-28
categories: features, road map, release
---

What is new?
------

Open Data Hub 0.6.1 is now available in OpenShift OperatorHub. It comes with many important bug fixes in the operator, some new components and integration with OpenShift CI.

We have also added READMEs for all the components to make sure it is easy for users to orient themselves in the new manifests structure.

The components added or (re)enabled in this version are:

| Technology | Version | Category | Deployment Method | 
|--|--|--|--|
| [AI Library](https://github.com/opendatahub-io/odh-manifests/tree/master/ai-library) | 0.6.0 | Machine Learning | Manifests |
| [Seldon](https://github.com/opendatahub-io/odh-manifests/tree/master/odhseldon) | 1.1.0 | Model Serving | OLM |
{:class="table table-bordered table-striped"}

We have also enabled OpenShift CI for our odh-manifests repository to help us with PR reviews. We have a basic set of tests and are [expanding the test set](https://github.com/orgs/opendatahub-io/projects/4) to make sure that your PRs are reviewed faster in a more automated fashion.

Read More
------
You can read more in a blog post we have published on [developers.redhat.com](https://developers.redhat.com/blog/2020/06/02/open-data-hub-0-6-1-bug-fix-release-to-smooth-out-redesign-regressions/).
