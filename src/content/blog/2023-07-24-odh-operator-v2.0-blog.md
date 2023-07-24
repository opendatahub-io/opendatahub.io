---
type: blog
author: VaishnaviHire
title: "Exploring the DataScienceCluster: A New Custom Resource in OpenDataHub(incubation)"
preview: ODH is now incubating a new version(v2.0.0) of Operator
date: 2023-07-24
categories: features, release, documentation
featured: true
---

Starting with ODH 1.8, we are excited to announce a new version of our OpenDataHub operator(v2.0.0) that introduces a 
custom resource called **DataScienceCluster**.  This is an **alpha release** exclusively available on the “fast” channel
and subject to evolve continuously.

## Introducing DataScienceCluster

The DataScienceCluster custom resource allows fine-grained control over various data science components deployed within
your ODH Deployment. It encapsulates various data science applications managed through Kustomize deployments. With this 
custom resource, you can **enable** and **disable** any of the integrated components at any time, thereby giving you 
control over your data science environment. Every core component provided by ODH is currently exposed by the
DataScienceCluster.

Here is an example of the DataScienceCluster custom resource:
```
apiVersion: datasciencecluster.opendatahub.io/v1alpha1
kind: DataScienceCluster
metadata:
  name: default
spec:
  components:
    dashboard:
      enabled: true
    datasciencepipelines:
      enabled: false
    distributedworkloads:
      enabled: true
    kserve:
      enabled: false
    modelmeshserving:
      enabled: false
    workbenches:
      enabled: true
```
## Understanding the Components

Each component in the **DataScienceCluster** spec represents a data science application also provided through ODH
manifests. Let's take a quick look at what each of these components does:

- **dashboard**: A web dashboard that displays installed Open Data Hub components with easy access to component APIs
- **datasciencepipelines**: Pipeline solution for end to end MLOps workflows that support the Kubeflow Pipelines SDK and Tekton.
- **distributedworkloads(incubation)**: This enables you to distribute your computational workloads across different nodes in your cluster, enhancing performance and efficiency.
- **kserve(incubation):** This is for serving your models. KServe provides a serverless framework to deploy machine learning models with the potential to scale based on demand.
- **modelmeshserving:** This enables you to serve your models using ModelMesh, which is designed to facilitate high-scale, high-density, and frequently changing model use cases.
- **workbenches:** This component enables you to set up your data science workbenches or Jupyter notebooks for interactive data analysis.


Each of these components can be **enabled** or **disabled** at will by simply changing the enabled field to true or false. 
This gives you the flexibility to customize your data science environment according to the specific needs of your project.

## Upcoming Features in DataScienceCluster

We are dedicated to continually improving the DataScienceCluster custom resource, and we are thrilled to share some 
upcoming enhancements that we believe will bring even more versatility and power to your data science workflows.

### Integration with New Components
In the upcoming release, we plan to expand the number of components that can be managed through DataScienceCluster. 
We are currently evaluating several new applications and tools which can provide additional functionality and capabilities
to your data science workflows. We have already integrated some incubating applications (kserve and distributed workloads)
into the new operator. Our goal is to ensure that DataScienceCluster remains a comprehensive, one-stop solution for managing
your data science environment.

### Making Component Fields Configurable
In an effort to provide more granular control over individual components, we are working on a feature to make component
fields configurable. This means that you will be able to adjust individual parameters within each component, beyond just
enabling or disabling them. With this feature, you can fine-tune each component to suit your specific needs, providing 
more flexibility and control than before. 

### Improved Logging and Eventing
To enhance observability and debugging, we are improving the logging and eventing capabilities of the DataScienceCluster
custom resource. These enhancements will provide more insight into the performance and state of your components, helping
you to detect and diagnose issues more quickly and effectively. The logging improvements will provide more detailed and
contextual information, while enhanced eventing will help you monitor the state of your cluster in real-time.


## Getting Involved and Additional Resources

- **Try it out** : Try out the new operator installation using the steps give in our [installation Guide](https://opendatahub.io/docs/quick-installation-new-operator/#installing-the-new-open-data-hub-operator). 
If you want to upgrade from existing installation, use our [Upgrade Guide](https://opendatahub.io/docs/quick-installation/) 
under section **Upgrade to new operator(version 2.X)**.
- **Contribution Guide:** If you're interested in contributing to the development of DataScienceCluster, please review
our [Contribution Guide](https://github.com/opendatahub-io/opendatahub-operator/blob/feature-rearchitecture/README.md#developer-guide). This guide provides detailed instructions on how to contribute, from setting up your development
environment to running e2e tests locally.
- **Design Document:** For an in-depth understanding of the design and architecture of DataScienceCluster, check out our
[Design Document](https://github.com/opendatahub-io/opendatahub-operator/blob/feature-rearchitecture/docs/DESIGN.md). 
- **Codebase:** To open issues and review code, visit [opendatahub-operator](https://github.com/opendatahub-io/opendatahub-operator/tree/feature-rearchitecture) repo.

In conclusion, the introduction of the **DataScienceCluster** custom resource represents a significant step forward in
streamlining and managing data science workflows for Open Data Hub. We're excited about the upcoming features and 
improvements and look forward to seeing how the community will utilize and enhance DataScienceCluster.
Thank you for your continued support, and we look forward to your contributions and feedback. 
