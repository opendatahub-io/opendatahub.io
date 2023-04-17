---
layout: blog
author: rmartine
title:  Data Catalog in Open Data Hub
preview: Open Data Hub 0.5.0 just released with the introduction of the Data Catalog, a set of components to explore data stored in Data Lakes using Hive-related technologies.
date: 2019-12-15
categories: features, hue, spark, hive, data-cataloging
---

Data Catalog
--------

In the Open Data Hub v0.5.0 release, we introduced Data Catalog. It is a set of components to 
read data stored in Data Lakes, create tables and query them in a SQL-like style. You can find
below a picture of the simplified architecture of Data Catalog:

![alt text](../../assets/img/posts/2019-10-10-data-catalog-in-odh/Data_Catalog_Simplified_Diagram.png "Data Catalog architecture")

These are the components that are part of Data Catalog:

* Hive Metastore, responsible for maintaining the table metadata created by the user to query the data stored in Ceph/S3
* Spark SQL Thrift server to enable an endpoint where clients can connect using an ODBC/JDBC connection
* Cloudera Hue as a Data Exploration tool to explore the Data Lake, create tables and query them. You can 
also create dashboards using the tables managed by Hive Metastore

In the next section we'll cover each component in details.

Hive Metastore
---------

The Hive Metastore component is part of Apache Hive and stores all metadata related to Hive tables. A Hive table
is a special structure where you can expose your data, whether they are unstructred, semi-structured or
structured data, as a table. That way you can use SQL syntax to query this data directly from where the data
is stored without the need to use ETL workflows to insert your data into a relational or NoSQL Database.

One of the advantages of using Hive tables is you don't need to write a full ETL (Extract-Transform-Load) workflow
to have your data available to read from traditional SQL clients. It is possible to partition the data according to
your needs too.

With Hive Metastore, you can catalog your data in order to extract the best from your Data Lake.


Spark SQL Thrift Server
---------

The main feature in Spark SQL Thrift Server is to use the power of Spark SQL and Dataframes to query the data from a
Data Lake, by creating a query plan and run in a Spark cluster to extract all information needed.

In order to use the Spark SQL features, Thrift Server exposes a ODBC/JDBC endpoint so clients like SquirrelSQL, Tableau, 
Superset or any SQL client can connect to it and issue SQL statements using raw data stored in your Data Lake.


Cloudera Hue
---------

Cloudera Hue is a Data Exploration tool where you can explore your Data Lake for the files stored and issue SQL statements
in a Hive instance. Data Catalog combines Hive Metastore and Spark SQL Thrift Server to have all Hive features.

With Hue, you can explore the raw data from the Data Lake, create a set of hive tables and expose them to Data Scientists
to create models based on that data.

Sample Use Cases
------

1) Data Exploration: You can explore your Data Lake to look at the data structure, as well as creating a table structure to
query them.
2) Data Catalogging: After exploring the data and creating tables based on them, you can document the data by creating metadata
against it. With that, you can share with Data Scientists the tables so they can understand what are the features they need
to create their models.

Further improvements
------

With Cloudera Hue in the Data Catalog architecture, it is possible to create visualizations with the data too. As for now, this
feature is disabled as some other components are required to make it work. The Open Data Hub team will evalute the option to include
this Hue feature in Data Catalog. Superset can be a good replacement for Data Visualization tasks, or Jupyterhub.