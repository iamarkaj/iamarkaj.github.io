---
layout: post
title: Split And Rephrase
image: img/sar/cover.png
tags: [NLP, Python, StanfordParser, Transformers, TfIdf]
customlink: true
customlinktitle: GitHub
customlinkaddress: https://github.com/iamarkaj/Split-and-Rephrase
author: ajb
---

**Aim**
<br>
The aim is to split a complex sentence into a meaning-preserving sequence of shorter sentences.

**Overview**
<br>
The input sentence with more than two clauses is strategically broken into 2 sentences, each sentence having no more than 2 clauses. They are sent to the **Hugging Face's T5** pre-trained model fine-tuned with 300K sentences from websplit v1.0 dataset, to split up into multiple sentences. Each multiple sentence is further assigned a similarity score to the input sentence based on **TF-IDF Vectorizer**. The sentences with fewer similarity scores are removed.

**Example**
<br>
<div class="post-flex-display">
    <img src="/img/sar/example.png" width="600" height="600" alt="diagram">
</div>

**Future Works**
<br>
[1] Preservation of keywords is an important factor. But the output from the fine-tuned Hugging Face's T5 model replaced a few words with their synonyms. This can be improved by filtering the training data from the dataset.
<br>
[2] Loss of important keywords. The output sometimes ignores important dates, places, etc.


**References**
<br>
[1] rui-yan: [split-and-rephrase](https://github.com/rui-yan/split-and-rephrase)
<br>
[2] shreyaUp: [Sentence-Simplification](https://github.com/shreyaUp/Sentence-Simplification)
