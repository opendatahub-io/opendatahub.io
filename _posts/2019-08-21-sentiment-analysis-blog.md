---
layout: blog
author: ochatter
title:  Open Source Sentiment Analysis Modeling - An advanced approach
preview: This blog decribes the end-to-end approach at building a Sentiment Analysis service using open source components and continually improving it. 
date: 2019-09-04
categories: sentiment analysis, machine learning, natural language processing, deep learning, open source
---

Table of Contents
------

* [Introduction](#introduction)
* [What is Sentiment analysis](#what-is-sentiment-analysis)
* [Our Approaches](#our-approaches)
* [Open-source NLP tools for sentiment analysis](#open-source-nlp-tools-for-sentiment-analysis)
* [Deep Learning for sentiment analysis](#deep-learning-for-sentiment-analysis)
* [BERT for sentiment analysis](#bert-for-sentiment-analysis)
* [Infrastructure requirements for building the service](#infrastructure-requirements-for-building-the-service)
* [Continuous improvement and incorporating feedback](#continuous-improvement-and-incorporating-feedback)


Introduction
------

Traditionally, sentiment analysis and opinion mining are techniques used by organizations to ascertain customer sentiments about their products, brand and services. With growing availability of opinion-rich resources like customer service surveys, reviews, blogs and engagement metrics there is an ever increasing opportunity for actively using the available resources in order to understand customer sentiments and opinions. 

This also poses a challenge when it comes to narrowing down to a system which can generalize to a wide variety of use cases. Also much of the Cognitive and Artificial Intelligence (AI) systems need infrastructures to support their training, development and maintenance. 

This blog outlines our approach to improving the sentiment analysis service at Red Hat, through continuous learning and discusses how we evolved the system to learn, adapt and produce desirable outcomes for a multitude of use cases. Through this blog, we also demonstrate the approaches we took and our results on comparative analyses of the approaches.

What is Sentiment analysis
------

Sentiment Analysis is a technique to identify emotional states and polarity from human language. These tasks, pertaining to extracting sentiments from a piece of text, often about a certain topic fall under the field of Natural language processing (NLP). NLP is a range of computational techniques for the automatic analysis and representation of human language. It is closely linked to the fields of artificial intelligence (AI) and computational linguistics. 

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/sentiment_analysis_example.png "An example of sentence classification of tweets into positive and negative sentiments.")

There are various approaches that can be taken to build a sentiment analysis service. One of the most intuitive approaches is that of building of a textual analysis system. Such a system comprises of analyzing a piece of text based on the terms appearing in the text and building a rule-based or fact-based system around categorizing pieces of text into various sentiment classes. The other approach, which is mainly how most of the state-of-the-art systems work is a machine learning and deep learning based approach. In this approach, rather than teaching a system to make a decision based on a set of rules, we expose the system to a variety of examples and train it to learn from the examples and then draw predictions on the basis of those. 

In the following sections, we go over details of the techniques mentioned above and explain how we leveraged each of the above techniques, into iteratively improving our system at Red Hat and narrowing down to a deep learning based approach in the end, and how it fits our use-case.

Our Approaches
------

In this section, we describe in detail, the approaches we took for sentiment analysis and the results we got at each step, and how we improved the sentiment analysis service iteratively.

#### Open-source NLP tools for Sentiment Analysis

Our initial approach to sentiment analysis was building a service which can detect sentiments from  customer reviews using three open-source NLP tools, Stanford CoreNLP,  Vader Sentiment Processor and TextBlob.

The CoreNLP model is built using a Recurrent Neural Network trained on a tree based corpus called 'Stanford Sentiment Treebank' which is a fully labeled parse tree that allows for a complete analysis of the compositional effects of sentiment in language. On the other hand Vader is a lexicon based and rule based approach at sentiment analysis mainly targeted towards social media text. TextBlob is a classifier based approach, where a Naive Bayes classifier is used for a multiclass classification. 

The initial approach involved sentiment calculation using the CoreNLP Annotator with an additional validation step performed on the annotated results by passing sentences which are classified as negative by CoreNLP, through Vader and Textblob for negative sentiment validation(nsv). 

The results of the above approach are shown in the figure below. We are displaying F1-scores, which is calculated from Precision and Recall values for each sentiment. Precision is the ratio of correctly predicted positive observations to the total predicted positive observations. Recall is the ratio of correctly predicted positive observations to the all observations in actual class. 

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/metrics-for-initial-approach.png "F-1 scores of initially developed service using open source NLP tools")

F1 Score is the weighted average of Precision and Recall. Therefore, this score takes both false positives and false negatives into account.  

A core limitation of this method was, that it ignores the fact that we are in fact, treating the 3 models as competitive or alternate NLP models to treat a sentence, whereas, there is a significant difference between the 3 models in terms of their accuracy at sentence classification and their ability  to truly identify a certain label positive, negative, or neutral.
In order to improve this service, we created a service, which is an ensemble of the 3 models, Stanford CoreNLP, Vader and TextBlob and created an ensemble model by giving weighted scores to the 3 services. So, we  give scores to the three services, based on the precision values of the 3 services when they are used independently to calculate sentiment on a training dataset. 

The results of this approach are shown in the figure below. We are displaying the F1-scores of the ensembled model when tested on a test dataset.

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/metrics-for-weighted-approach.png "F-1 scores of service  using model stacking approach with weighted precision scores")

As we can see from the results in the above figure, as compared to the results of the primary approach as shown in the previous figure, there were improvements in the service by using a model stacking method with weighted average.

#### Deep Learning for Sentiment Analysis

As Young et al. point out in, for decades NLP problems were tackled using common machine learning approaches like SVMs, and logistic regression trained on very high dimensional and sparse features. However, recently, studies by Mikolov and Socher show, neural network based approaches are showing superior results in NLP using dense vectors and word embeddings. Deep learning is an application of artificial neural networks that allows computational models that are composed of multiple layers to learn representations of data. 

Andrew Ng., a pioneer in the field of machine learning points out -
“for most flavors of the old generations of learning algorithms … performance will plateau. … deep learning … is the first class of algorithms … that is scalable. … performance just keeps getting better as you feed them more data.”

Much after neural networks were introduced in 1958, in the late 1990s, the research community started to lose interest in neural networks mainly because they were regarded as only practical for “shallow” neural networks ( with one or two layers), since training a deep neural network is computationally very  expensive. However, recently, deep learning has produced state-of-the-art results in many application domains, starting from computer vision, speech recognition and most recently, natural language processing.

The renaissance of neural networks as pointed out by Lei Zhang, can be attributed to factors like availability of computing power due to advances in hardware eg. GPUs, availability of huge amounts of training data and introduction of learning intermediate representations.

And today, these very factors help us develop better systems and more advanced models to tackle NLP tasks. 

In order to understand how deep learning can be applied to customer reviews, we need to first think about the kind of data we are feeding into the system, which in our case is text, or an input string. But in order to apply mathematical operations like dot products, matrix multiplications etc, instead of a string input, we need to convert each word in the string into a vector. These vectors can be created in a way such as to represent the context, meaning and semantics. And, in order to create these vectors, which are called, word embeddings, we use word vector generation models like Word2Vec and GloVe. This gives us an embedding matrix, that contains vectors for each distinct word in the training corpus. We started with building a Recurrent Neural Network model (RNN) with Long short term memory units for sentiment analysis. A recurrent neural network is a bit different from a traditional feedforward neural network. The main difference is the temporality of an RNN and thus they are ideal for sequential data like sentences and text. LSTM ( Long short term memory ) units are modules that we can place inside of RNNs. At a high level, they make sure we are able to encapsulate long term dependencies in the text.

#### BERT for Sentiment Analysis

A big challenge in NLP is the shortage of training data. Most modern deep learning techniques benefit from large amounts of training data, that is, in hundreds of thousands and millions. However, since NLP is a very diversified field with many distinct tasks, there is a shortage of task specific datasets. This includes customer service review datasets, survey datasets, operational data etc.

To close this gap, a technique called Bidirectional Encoder Representation from Transformers (BERT) was developed for training general purpose language representation models using enormous amount of unannotated text on the web ( known as pre-training) by researchers at Google.

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/bert-architecture.png "Pre - training general purpose language representation models on huge unannotated text and Fine tuning on customer review dataset")

The pre-trained model can then be fined tuned on smaller datasets for performing sentiment analysis.

The advantage that this gives us is that, by using the principles of transfer learning, the universal properties that a language model possesses when exposed to a huge amount of data could be used in our case where there is a lack of annotated datasets.

We use pre-trained BERT models and fine-tune it on our comparatively smaller dataset. This allows us to take advantage of feature extraction that happens in the front layers of the network without developing that feature extraction network from scratch.

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/bert-results.png "F-1 Scores of Positive and Negative sentiments run on BERT based model")

##### Results using the BERT model

The BERT based model performs better than our RNN based approach and predicts positive sentiments with a 0.92 F1 Score and 0.73 F1 Score. This showed significant improvements as compared to all our previous approaches. Another advantage of this approach is that, it lets us get a single sentiment annotation for an entire customer review, by encapsulating very long term dependencies in text.  Moreover, the process of building the service highly improves for the BERT based deep learning model by using GPUs for training the model. We discuss this in more detail in the next section.

Infrastructure requirements for building the service
------

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/cpu-vs-gpu.png "CPU vs GPU and comparison of training time")

So, as we fine-tune a sentiment analysis model, with pre-trained BERT parameters by training it on a large annotated dataset, we introduce large computational operations in terms of memory. To compute the data efficiently, we need infrastructures that can handle the computation processes in minimum time. 

We need GPUs to solve these problems since neural networks heavily rely on floating point matrix multiplication. Also, deep learning algorithms require a lot of data to train, thus they need large memory and high speed networks to complete in a reasonable amount of time.

Although, less expensive as compared to the pre-training procedure, the fine-tuning step when run on a CPU with 4 cores and 8 Gigabytes of RAM takes about 3 hours to train. The same model when trained using an NVIDIA P100 GPU with 3584 cores and 16 Gigabytes of Memory, trains the model in only about 6 minutes.

This speeds up the overall workflow of training, testing , hyperparameter tuning and thus building of the service.

Also, for training the models and running predictions we use the Jupyterhub installation of the Open Data Hub which have GPU support. Jupyter notebooks allow running code, documenting, visualization in the same environment which makes the process of training and prototyping more flexible.

###### Links to sample code and model

The code used for training and testing and the saved model can be found in this [repository](https://gitlab.com/opendatahub/sample-models/tree/master/sentiment-analysis).

Continuous improvement and incorporating feedback
------

![alt text](../../assets/img/posts/2019-08-21-sentiment-analysis-blog/feedback.png "Feedback system for the sentiment analysis service")

The lifecycle of developing AI systems, does not end with building the first iteration of the system. We improve the system and continuously evolve it by making it learn from a feedback system. 

In our Sentiment Analysis project at Red Hat, after deployment of the service, we introduce additional steps of monitoring how our service is performing, capturing feedback from users, and including it back in building our ground truth, our model training and evaluation process.

For this purpose, we built a feedback system which lets users correctly annotate the captured results from running the service on data for any false predictions that might be observed. 

As we see in the figure above, the results of the feedback annotation are introduced back in the training of the model in the second supervised learning phase, therefore, making our training datasets larger and more robust and enabling us to generate more context specific data which can be introduced in the training phase of the model, thus continually improving the service.
