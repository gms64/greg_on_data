---
title: zero shot classification with pytorch 
seo_title: Zero Shot Classification with Pytorch
summary: After playing around with Zero Shot Classification for a short amount of time... wow.  This has some potentially incredible use cases for using NLP in areas where it's not worth training a model.
seo_desc: A few short experiments using Zero Shot Classification to label data - using HuggingFace's Transformers library with Pytorch.
createdAt: 2020-11-22 18:00:00
date: 2020-11-22T19:17:57.500Z
---

Alright, so I have to admit that I've been a little skeptical of some of the use cases for NLP in industry.  My initial gut reaction was that NLP would be useful to companies dealing with processing a ton of data, but it was too difficult to ever use for small companies.

I think I may have been *horribly* wrong.

Anyways, I decided to play around with zero shot classification today to do some labeling. I had two dumb projects I wanted to see if it worked for - one being cleaning up job locations for a job hunt and another being classifying books.  So, obvious next step was to mess around in a Jupyter notebook.

I worked with the [transformers](https://github.com/huggingface/transformers) library from [huggingface](https://huggingface.co/) here. For reference, their release of this feature was discussed [here](https://discuss.huggingface.co/t/new-pipeline-for-zero-shot-text-classification/681).  And its pretty freaking cool.

And to give you a preview of the super rough implementation... well, it's pretty effective.

![Zero Shot Classification 1](/img/zero-shot-classification-1.png "Zero Shot Classification")


## Some Code

First, just make sure you have pytorch installed for what we're doing here.  

```pip install torch```

Then install transformers 🤖.

```pip install transformers```

Now onto actually running some code!


## Sports teams

Alright this is just a fun example, but lets run with some sports teams.  I'm in NYC, so we'll just use some local teams and see if they can classify the sport correctly based only on the name.

```
# Load in zero shot
from transformers import pipeline
classifier = pipeline("zero-shot-classification")

# Create a function to print results in a nice way
def _print_res(results):
    for res in result:
        print(res['sequence'])
        print(res['labels'][:5])
        print([round(x,2) for x in res['scores'][:5]])
    return
```

```
classifier('New York Jets', ['Baseball','Football','Basketball','Hockey','Soccer'], hypothesis_template='The team plays {}')

>>> {'sequence': 'New York Jets',
 'labels': ['Football', 'Hockey', 'Basketball', 'Soccer', 'Baseball'],
 'scores': [0.5949817895889282,
  0.3721260130405426,
  0.011746636591851711,
  0.010710458271205425,
  0.010435177013278008]}
```

Decent start, it gets the Jets right. And the high Hockey loading is probably from the Winnipeg Jets(?).

Lets try a few more:

```
sequence = ['New York Jets','New York Mets','New York Knicks','New York Rangers','New York Red Bulls']
hypothesis_template = "The team plays {}."
candidate_labels = ['Baseball','Football','Basketball','Hockey','Soccer']
result = classifier(sequence, candidate_labels, hypothesis_template=hypothesis_template)
_print_res(result)

>>>New York Jets
['Football', 'Hockey', 'Baseball', 'Soccer', 'Basketball']
[0.58, 0.41, 0.01, 0.0, 0.0]
New York Mets
['Baseball', 'Football', 'Soccer', 'Basketball', 'Hockey']
[0.99, 0.0, 0.0, 0.0, 0.0]
New York Knicks
['Basketball', 'Football', 'Baseball', 'Soccer', 'Hockey']
[0.99, 0.0, 0.0, 0.0, 0.0]
New York Rangers
['Baseball', 'Hockey', 'Football', 'Soccer', 'Basketball']
[0.71, 0.2, 0.06, 0.03, 0.0]
New York Red Bulls
['Soccer', 'Football', 'Baseball', 'Hockey', 'Basketball']
[0.58, 0.23, 0.17, 0.02, 0.0]
```

Right, Right, Right, Wrong, Right.  Now the Rangers are probably getting messed up because of the Texas Rangers, who are a baseball team.  Lets see if we can just fix this by messing with the input.

```
result = classifier(['The professional sports team is known as the ' + x for x in sequence], 
                    candidate_labels, hypothesis_template=hypothesis_template)
_print_res(result)

>>> The professional sports team is known as the New York Jets
['Football', 'Hockey', 'Baseball', 'Basketball', 'Soccer']
[0.66, 0.32, 0.01, 0.01, 0.01]
The professional sports team is known as the New York Mets
['Baseball', 'Football', 'Soccer', 'Hockey', 'Basketball']
[0.9, 0.07, 0.01, 0.01, 0.01]
The professional sports team is known as the New York Knicks
['Basketball', 'Football', 'Baseball', 'Hockey', 'Soccer']
[0.93, 0.04, 0.01, 0.01, 0.0]
The professional sports team is known as the New York Rangers
['Hockey', 'Baseball', 'Football', 'Soccer', 'Basketball']
[0.42, 0.34, 0.17, 0.06, 0.01]
The professional sports team is known as the New York Red Bulls
['Soccer', 'Football', 'Baseball', 'Basketball', 'Hockey']
[0.47, 0.25, 0.12, 0.08, 0.07]

```

...Wow, that actually worked.  The Rangers are now classified as a Hockey team.  Its not a *high* level of certainty, but its now the most likely.

And we didn't have to do **any training** of this model. This is pretty incredible.

So lets go on to some actual applications of this, since there are a *lot of them*.

## Locations

So we're going to mess around with a list of cities that we're pretending are from a job posting site.  Some will also note if a job is remote or not for a location.

```
job_locations = ['NYC or Remote','Ann Arbor','SF','Plano','Springfield','White Plains']
```

```
sequence = job_locations
hypothesis_template = "This location is in {}."

state_names = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]
candidate_labels = state_names
result = classifier(sequence, candidate_labels, hypothesis_template=hypothesis_template)
_print_res(result)

>>> NYC or Remote
['New York', 'District of Columbia', 'Washington', 'Maryland', 'Massachusetts']
[0.83, 0.01, 0.0, 0.0, 0.0]
Ann Arbor
['Michigan', 'Maryland', 'Washington', 'District of Columbia', 'Virginia']
[0.95, 0.0, 0.0, 0.0, 0.0]
SF
['California', 'Florida', 'South Dakota', 'District of Columbia', 'Montana']
[0.41, 0.2, 0.09, 0.05, 0.02]
Plano
['Texas', 'District of Columbia', 'Puerto Rico', 'Washington', 'Hawaii']
[0.27, 0.06, 0.03, 0.02, 0.02]
Springfield
['Missouri', 'Illinois', 'Massachusetts', 'Arkansas', 'Washington']
[0.71, 0.21, 0.04, 0.0, 0.0]
White Plains
['New York', 'Washington', 'Massachusetts', 'Maine', 'Pennsylvania']
[0.94, 0.0, 0.0, 0.0, 0.0]

```

5.5/6.  Springfield is a toss-up since it's not sure if you're talking about the one in Missouri, Illinois, or Massachusetts.  But pretty solid results all things considered.  And something like SF gets correctly classified as California, though it could also mean South Florida.  

So pretty solid results for the first go at this.

```
sequence = job_locations
hypothesis_template = "This location is {}."

is_remote = ['Remote','Not Remote']

candidate_labels = is_remote
result = classifier(sequence, candidate_labels, hypothesis_template=hypothesis_template)
_print_res(result)

>>> NYC or Remote
['Remote', 'Not Remote']
[0.84, 0.16]
Ann Arbor
['Not Remote', 'Remote']
[0.97, 0.03]
SF
['Remote', 'Not Remote']
[0.51, 0.49]
Plano
['Not Remote', 'Remote']
[0.99, 0.01]
Springfield
['Not Remote', 'Remote']
[0.97, 0.03]
White Plains
['Not Remote', 'Remote']
[0.98, 0.02]
```

5/6 there.  Correctly gets the NY job as being remote, but SF it decides is a toss-up between remote and not remote. Switch SF to San Francisco and you'll get it to work, but no dice on the abbreviation.

```
classifier('San Francisco', is_remote, hypothesis_template="This location is {}.")
>>> {'sequence': 'San Francisco',
 'labels': ['Not Remote', 'Remote'],
 'scores': [0.9635974764823914, 0.03640249744057655]}
```

And lets try one more test, just to check it knows everything is in the US.

```
sequence = job_locations
hypothesis_template = "This location is located in {}."

country = ['United States','United Kingdom','Germany','France']

candidate_labels = country
result = classifier(sequence, candidate_labels, hypothesis_template=hypothesis_template)
_print_res(result)

>>>NYC or Remote
['United States', 'United Kingdom', 'France', 'Germany']
[0.91, 0.04, 0.03, 0.03]
Ann Arbor
['United States', 'United Kingdom', 'France', 'Germany']
[1.0, 0.0, 0.0, 0.0]
SF
['United States', 'France', 'United Kingdom', 'Germany']
[0.77, 0.18, 0.03, 0.02]
Plano
['United States', 'United Kingdom', 'France', 'Germany']
[0.99, 0.0, 0.0, 0.0]
Springfield
['United States', 'United Kingdom', 'France', 'Germany']
[1.0, 0.0, 0.0, 0.0]
White Plains
['United States', 'United Kingdom', 'France', 'Germany']
[1.0, 0.0, 0.0, 0.0]
```

6/6. Crushing it.

## Multi-Class

Similarly, you can do this with multi-class labeling.

```
sequence = ['I really wish I majored in Computer Science',
            'I had a rough day today',
            'We loved the restaurant',
            'This really didnt go very well',
            'AI is going to ruin everything']
candidate_labels = ['Happiness','Sadness','Fear','Disgust','Anger','Surprise']
hypothesis_template = "The emotion associated with this is {}."
result = classifier(sequence, candidate_labels, multi_class=True, hypothesis_template=hypothesis_template)
_print_res(result)

>>>I really wish I majored in Computer Science
['Sadness', 'Disgust', 'Anger', 'Fear', 'Surprise']
[0.9, 0.88, 0.6, 0.55, 0.28]
I had a rough day today
['Sadness', 'Disgust', 'Anger', 'Fear', 'Surprise']
[1.0, 0.97, 0.96, 0.96, 0.85]
We loved the restaurant
['Happiness', 'Surprise', 'Anger', 'Fear', 'Sadness']
[0.99, 0.9, 0.02, 0.0, 0.0]
This really didnt go very well
['Disgust', 'Sadness', 'Anger', 'Fear', 'Surprise']
[1.0, 1.0, 0.98, 0.95, 0.73]
AI is going to ruin everything
['Disgust', 'Fear', 'Sadness', 'Anger', 'Surprise']
[0.99, 0.99, 0.98, 0.98, 0.04]
```

## Fuzzy Match

Another fun idea is to try to do a fuzzy match using zero-shot classification.  Let's try it on some names and see what it comes back with.  We'll add some prefixes, suffixes, nicknames, and misspellings and see what happens.

```
search_inputs = ['Doe, Jane',
            'Dr. Michael Scott',
            'Snow, Jon',
            'Bob Anderson, CFA',
            'Jim Smith',
            'Williamm Smith',
            'Sir Winston James III']
match_inputs = [
    'Jane Doe',
    'Michael Scott',
    'Jon Snow',
    'Robert Anderson',
    'James Smith',
    'William Smith',
    'Winston James, III'
]
hypothesis_template = "The person's full name is {}."
result = classifier(search_inputs, match_inputs, hypothesis_template=hypothesis_template)
_print_res(result)

>>> Doe, Jane
['Jane Doe', 'William Smith', 'Winston James', 'James Smith', 'Michael Scott']
[0.99, 0.0, 0.0, 0.0, 0.0]
Dr. Michael Scott
['Michael Scott', 'William Smith', 'James Smith', 'Robert Anderson', 'Winston James']
[1.0, 0.0, 0.0, 0.0, 0.0]
Snow, Jon
['Jon Snow', 'Winston James', 'Jane Doe', 'William Smith', 'James Smith']
[0.99, 0.0, 0.0, 0.0, 0.0]
Bob Anderson, CFA
['Robert Anderson', 'Winston James', 'William Smith', 'Michael Scott', 'James Smith']
[1.0, 0.0, 0.0, 0.0, 0.0]
Jim Smith
['James Smith', 'Winston James', 'William Smith', 'Michael Scott', 'Robert Anderson']
[1.0, 0.0, 0.0, 0.0, 0.0]
Williamm Smith
['William Smith', 'Winston James', 'James Smith', 'Michael Scott', 'Robert Anderson']
[1.0, 0.0, 0.0, 0.0, 0.0]
Sir Winston James III
['Winston James', 'James Smith', 'William Smith', 'Robert Anderson', 'Michael Scott']
[0.98, 0.01, 0.0, 0.0, 0.0]
```

And the model is 7/7! Pretty impressive.


## Takeaways

Alright so most of this article has been me playing around with code moreso than opining on use cases for the technology.

But the main use case for this that I see is in *small* data.  For any company with an excel spreadsheet of 100-1k data points, there are a lot of things that zero-shot classifications can add.  Namely:

- Data Quality Checks / Fixes: Correcting Misspellings, Input Errors (putting in a city instead of a state, etc.), etc.
- Text-Based Classification: Adding incremental classification variables that would've otherwise needed to be add by hand. For instance, classifying people in a CRM based on their known hobbies or if they have children, etc.
- Fancy Fuzzy Matching: Matching Cities to States, Company to Parent Company, etc.

Is there more that this can do? Certainly.  I'm probably missing a ton, but those are what stood out at me the most.

Anyways, if you have any thoughts on the above or any ideas what I should check out next, throw a comment below!
