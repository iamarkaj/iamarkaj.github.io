---
layout: post
title: Split And Rephrase - NLP
image: img/sar/cover.png
tags: [NLP, Python, StanfordParser, Transformers, TfIdf]
author: ajb
---

The aim is to split a complex sentence into a meaning-preserving sequence of shorter sentences.


## OVERVIEW <a href="https://github.com/iamarkaj/Split-and-Rephrase"><img src="https://img.shields.io/badge/GitHub-black" alt="stream" width="75" height="35"/></a>


The input sentence with more than two clauses is strategically broken into 2 sentences, each sentence having no more than 2 clauses. They are sent to the **Hugging Face's T5** pre-trained model fine-tuned with 300K sentences from websplit v1.0 dataset, to split up into multiple sentences. Each multiple sentence is further assigned a similarity score to the input sentence based on **TF-IDF Vectorizer**. The sentences with fewer similarity scores are removed.


## EXAMPLE

<div class="post-flex-display">
<img src="/img/sar/example.png" width="800" height="800" alt="diagram">
</div>


## FUTURE WORKS

[1] Preservation of keywords is an important factor. But the output from the fine-tuned Hugging Face's T5 model replaced a few words with their synonyms. This can be improved by filtering the training data from the dataset.
<br>
[2] Loss of important keywords. The output sometimes ignores important dates, places, etc.


## REFERENCES

[1] rui-yan: [split-and-rephrase](https://github.com/rui-yan/split-and-rephrase)
<br>
[2] shreyaUp: [Sentence-Simplification](https://github.com/shreyaUp/Sentence-Simplification)
