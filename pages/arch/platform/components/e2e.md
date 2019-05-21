---
layout: arch
title: Open Data Hub Platform
permalink: /arch/platform/components/e2e
---
## Components and Considerations

### End-to-End Considerations

ODH project’s main goal is to provide an open source end-to-end AI platform on Openshift Container Platform that is equipped to run large AI/ML distributed workloads. As discussed earlier an end-to-end AI platform includes all phases of AI processing starting from data ingestion all the way to production AI/ML hosting and monitoring. There are multiple user personas for this platform that work on different phases. Figure 2  displays a high level architecture diagram of ODH as an end-to-end AI platform running on Openshift Container platform.

  

All the tools and components listed below are currently being used as part of Red Hat’s internal ODH platform cluster. This internal cluster is utilized by multiple internal teams of data scientists running AI/ML workloads for functions such as Anomaly Detection and Natural Language Processing. A subset of these components and tools are included in the ODH release available today and the rest are scheduled to be integrated in future releases as described in the roadmap section below.

**Figure 2: End-to-End Reference AI Architecture on Openshift**
![alt text](../../../assets/img/pages/arch/odb_ocp_ref_arch.png "End-to-End Reference AI Architecture on Openshift")
  

**Data in Motion** is essential in today's enterprise backend networks where data resides in multiple locations, especially to support data stored in legacy systems. Hybrid Cloud architectures also require sharing data between different cloud systems. Tools such as Red Hat AMQ Streams, Kafka and Logstash provide robust and scalable data transfer capabilities native to the Openshift platform. Data Engineers can use these tools to transfer required data from multiple sources.

  

**Storage: Data Lake/Databases/In-Memory** includes  tools for distributed file, block and object storage at scale. We include tools for both relational databases and document-oriented databases. Big data storage requires the freedom of no schema constraints while data access requires some form of ordered schema definition. Data ingestion can be easily performed using Red Hat Data Grid into distributed object storage provided by Ceph. High performance in-memory datastore solutions such as Red Hat Data Grid which is based on Infinispan are essential for fast data access needed for analysis or model training.

  
**Metadata Management** tools basically add informational metadata to the stored data such as databases, tables, columns, partitions, schemas and location. Currently, we have investigated Hive Metastore as a solution that provides an SQL interface to access the metadata information.

  

**Data Analysis: Big Data Processing** tools are needed for running large distributed AI workloads. Apache Spark™is installed as an operator on OCP providing cluster wide custom resource to launch distributed AI workloads on distributed spark clusters. These spark clusters are not shared among users, they are specific to each user providing isolation of resource usage and management. Spark clusters are also ephemeral and are deleted once the user shuts down the notebook providing efficient resource management.

  

**Data Analysis: Data Exploration** tools provide the  query and visualization functions for data scientists to perform initial exploration of the data. Hue provides an SQL interface to query the data and basic visualization. Kibana is also a data visualization tool for Elasticsearch indexed data.

  

**Data Analysis: Streaming** tools such as Kafka and Elasticsearch allow for distributed and scalable message distribution native to Openshift.

  

**Artificial Intelligence and Machine Learning: Model Lifecycle** tools provide functionalities to serve the model and collect essential metrics needed to monitor the lifecycle of the model. It allows constant evaluation of model performance which can lead to the need for retraining or re-validation. [Seldon](https://www.seldon.io/) is a tool that provides model hosting and metric collection from both the model itself and the component serving the model. MLflow provides parameter tracking for models and deployment functionalities.

  

**Artificial Intelligence and Machine Learning: ML Applications** such as the Open Data Hub AI Library provides pre-trained models such as sentiment analysis and topic modeling. These models can be deployed and used for prediction out of the box making it effortlessly accessible to users.

  

**Artificial Intelligence and Machine Learning: Interactive Notebooks** provide a development workspace for data scientists and business analysts to conduct their analysis work. [JupyterHub](https://jupyter.org/hub) is a tool that provides a multi-user notebook environment that allows users to use notebooks running in their own workspace. This allows for resource management isolation. Hue is also a multiuser data analysis platform that allows querying and plotting of data.

  

**Artificial Intelligence and Machine Learning: Business Intelligence** tools such as [Apache Superset](https://superset.incubator.apache.org/) provide a rich set of data visualization tools and come enterprise-ready with authentication, multi-user and security integrated.  
  

**Security and Governance** include tools for providing services, data and API security and governance. Data in storage and in motion require security for both access and encryption. The Ceph Object Gateway provides encryption of uploaded objects and options for the management of encryption keys. The Ceph Object Gateway stores that data in the Ceph Storage Cluster in encrypted form. Red Hat Single Sign-On ([Keycloak](https://www.keycloak.org/)) and Openshift provide user authentication while Red Hat 3Scale provides an API gateway for REST Interfaces.

  

**Monitoring and Orchestration** provide tools for monitoring all aspects of the end-to-end AI platform. This includes but is not limited to data, messaging, API, resources availability and utilization, etc. Prometheus and Grafana offer an interface for collecting and displaying metrics. For orchestration tools we included Jenkins and Argo Workflows that provide the functionality to create and manage workflows for build and release automation. Argo is Openshift native workflow tools that can run pods in a directed acyclic graph (DAG) workflow.

{% include next-link.html label="Included Components" url="/arch/platform/components/included.html" %}