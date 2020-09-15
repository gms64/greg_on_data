---
title: finding the best data science newsletters
seo_title: Finding The Best Data Science Newsletters
summary: Trying to find the best data science podcasts to subscribe to. With Data Science! Well really, really, really bad 'Data Science'
seo_desc: The best data science newsletters out there for 2020. Tackling data science, data engineering, data analytics, and data visualization.
createdAt: 2020-09-10 18:00:00
date: 2020-09-10T19:17:57.500Z
---

## the most popular data science newsletters

Or at least, the most often cited when looking through articles about data science newsletters. Collected by hand, because my sketchy version of data analysis didn't work... :{

| title                                                                                                                                                                                           | count | 
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------| 
| <a href="https://www.datascienceweekly.org/" target="_blank">Data Science Weekly</a>                                                                                                            | 7     | 
| <a href="https://dataelixir.com/" target="_blank">Data Elixir</a>                                                                                                                               | 6     | 
| <a href="https://mode.com/analytics-dispatch/" target="_blank">The Analytics Dispatch – Mode</a>                                                                                                | 6     | 
| <a href="https://www.kdnuggets.com/news/subscribe.html?1_kne" target="_blank">KD Nuggets</a>                                                                                                    | 6     | 
| <a href="https://www.oreilly.com/emails/newsletters/" target="_blank">O’Reilly Data Newsletter</a>                                                                                              | 5     | 
| <a href="http://roundup.fishtownanalytics.com/" target="_blank">Data Science Roundup</a>                                                                                                        | 5     | 
| <a href="https://datamachina.substack.com/" target="_blank">Data Machina</a>                                                                                                                    | 4     | 
| <a href="http://subscribe.machinelearnings.co/?utm_source=machine_learnings&utm_medium=blog&utm_campaign=publication_homepage&utm_content=navigation_cta" target="_blank">Machine Learnings</a> | 4     | 
| <a href="https://www.datainnovation.org/about/newsletter/" target="_blank">Center for Data Innovation</a>                                                                                       | 4     | 
| <a href="https://us13.campaign-archive.com/home/?u=67bd06787e84d73db24fb0aa5&id=6c9d98ff2c" target="_blank">Import AI</a>                                                                       | 3     | 
| <a href="http://aiweekly.co/" target="_blank">AI Weekly</a>                                                                                                                                     | 3     | 
| <a href="https://tinyletter.com/data-is-plural/" target="_blank">Data is Plural</a>                                                                                                             | 3     | 
| <a href="https://www.deeplearningweekly.com/?utm_source=twitter&utm_medium=profile-description" target="_blank">Deep Learning Weekly</a>                                                        | 3     | 
| <a href="https://www.topbots.com/enterprise-ai-news-pro-newsletter/" target="_blank">Topbots Applied AI</a>                                                                                     | 3     | 
| <a href="https://insidebigdata.com/newsletter/#mc_signup" target="_blank">insideBIGDATA</a>                                                                                                     | 3     | 
| <a href="https://www.datasciencecentral.com/profiles/blogs/check-out-our-dsc-newsletter" target="_blank">Data Science Central</a>                                                               | 3     | 
| <a href="https://www.getrevue.co/profile/wildml" target="_blank">Wild Week in AI</a>                                                                                                            | 2     | 
| <a href="https://towardsdatascience.com/receive-our-newsletters-681049ffa0cf" target="_blank">Towards Data Science Weekly</a>                                                                   | 2     | 
| <a href="https://forms.technologyreview.com/the-algorithm/" target="_blank">The Algorithm – MIT</a>                                                                                             | 2     | 
| <a href="https://www.kaggle.com/data/58702" target="_blank">Kaggle Newsletter</a>                                                                                                               | 2     | 
| <a href="https://deephunt.in/" target="_blank">Deep Hunt</a>                                                                                                                                    | 2     | 
| <a href="https://inside.com/tags/technology" target="_blank">Inside AI</a>                                                                                                                      | 2     | 
| <a href="https://cds.nyu.edu/newsletter/" target="_blank">NYU Data Science</a>                                                                                                                  | 2     | 
| <a href="http://dataconomy.com/" target="_blank">Dataconomy</a>                                                                                                                                 | 2     | 


## newsletter time!

*If you're not familiar with this format, I'm trying it out for the readers that come here from Google, so they can find their answer quickly at the top of the page*

Continuing my completely absurd crusade to find publications to subscribe to, I'm opting to look at newsletters next.  

Similar to my views on [podcasts](/blog/best-data-science-podcasts), I love newsletters. *And* I recently found a cool app that lets me subscribe to them *outside* of my normal email, so I can have a separate 'Data Science/Tech Newsletter' app, effectively.  Which is *fantastic*. Like truly, honestly, fantastic.  Highly recommend.  For reference, its called [slick inbox](https://slickinbox.com/) and its still in beta.  There's also apparently one called [stoop inbox](https://stoopinbox.com/), which seems pretty similar.

Anyways, you probably don't care about that, lets get on to the process.

## the original plan - finding data science newsletters with web scraping

So, off the back of a *raging success* that was my last post on [finding data science podcasts](/blog/best-data-science-podcasts), which racked up a grand total of 3 views, I thought the next step was to obviously find some newsletters to subscribe to. Now the question is really... how...?

My first thought was to find a site that aggregates newsletter listings and estimates subscribers, but I struck out hard on that front. So I moved to plan B - google-ing what the best data science newsletters were. That search brought me to a lot of blog posts in list format, which had links to - you guessed it - newsletters.  My bright data-science-y mind thought, "Hey, you can scrape these links and count the frequency they occur in the articles - that'll be an easy way to get your answer". So that's *exactly* what I did.

Well, that's what I scoped out and built... unfortunately, I had to scrap the code because links to newsletters are inconsistent (in that some people link to a main site, some to a subscribe-specific link, etc).  But since I did already build the code, I think its worth sharing... even if it looks like its held together with duct tape.

As an aside - the results above were collected by hand - I added a new entry for each newsletter that was mentioned, then incremented it for every additional time someone talked about it. I only went through a few articles in the end since its a bit of annoying process, but here we are... The takeaway is that *that* version of data collection is do-able *and* valuable, but definitely not scalable. That said, some things that aren't scalable are worth doing *because* they aren't scalable.

## the original plan - the code

I'm going to throw the code below with a bit less than the standard amount of commentary.  Since it doesn't *actually* work, no one's really going to end up using it... probably?

    # import default python packages
    import urllib
    import requests
    import time

    # import non-standard python packages
    # if you dont have these installed, install them with pip or conda
    from bs4 import BeautifulSoup
    from readability import Document
    import pandas as pd

    # define your desktop user-agent
    USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"

    # function to create google query string based on a query text
    def string_to_google_query(string, pg=None):
        query = urllib.parse.quote_plus(f'{string}')
        if pg != None:
            query = query + "&start=" + str(10*(pg-1))
        return f"https://google.com/search?hl=en&lr=en&q={query}", string

    # Queries to feed
    list_kwargs = [
        {"string": 'data science newsletters'},
        {"string": 'data science newsletters', "pg": 2},
        {"string": 'data science newsletters', "pg": 3},
        {"string": 'data engineering newsletters'},
        {"string": 'data visualization newsletters'},
        {"string": 'data science trends newsletters'},
    ]

    headers = {"user-agent" : USER_AGENT}

    results = []
    for x in list_kwargs:
        url, search_term = string_to_google_query(**x)
        resp = requests.get(url, headers=headers)
        if resp.status_code == 200:
            soup = BeautifulSoup(resp.content, "html.parser")
        
        for g in soup.find_all('div', class_='r'):
            anchors = g.find_all('a')
            if anchors:
                link = anchors[0]['href']
                title = g.find('h3').text
                item = {
                    "title": title,
                    "link": link,
                    "search_term": search_term
                }
                results.append(item)

        time.sleep(2.5)

    # put results into a dataframe
    newsletter_df = pd.DataFrame(results)

    # Check there is a number in the title (such as 'top 10 newsletters')
    # or that the title contains newsletter
    newsletter_df = newsletter_df.loc[(newsletter_df['title'].str.contains('[0-9]') | newsletter_df['title'].str.lower().str.contains('newsletter'))]
    newsletter_df.drop_duplicates(subset='link',inplace=True)


    # define a crawler to extract links and anchor text
    def article_link_crawl(link):
        """
        Returns links and either a 1 or 0 if it was a success / failure.
        Only Crawls articles, so there should be a few failures
        """
        domain = link.split('://')[1].split('/')[0]
        try:
            article_links = []
            resp = requests.get(link, headers=headers)
            # pass through readibility to get the article content rather than the full webpage
            rd_doc = Document(resp.text)
            if resp.status_code == 200:
                soup = BeautifulSoup(rd_doc.content(), "html.parser")
            link_soup = soup.find_all('a')
            for link in link_soup:
                item = {
                    "text": link.get_text().strip(),
                    "link": link['href']
                    }
                if item['text'] != '' and item['link'].find(domain) == -1 and item['link'][0] != '/' and item['link'][0] != '#':
                    article_links.append(item)
            return article_links, 1
        except:
            return None, 0

    # loop through results
    agg_links = []
    total_success = 0
    total_fail = 0
    fail_urls = []
    for link in newsletter_df['link']:
        res_links, is_success = article_link_crawl(link)
        if is_success == 1:
            total_success = total_success+1
        else:
            total_fail = total_fail+1
            fail_urls.append(link)
        
        if res_links != None:
            for lnk in res_links:
                agg_links.append(lnk)
        time.sleep(2.5)

    # function to get frequency of a link
    def list_freq(tgt_list): 
        freq = {} 
        for item in tgt_list: 
            if (item in freq): 
                freq[item] += 1
            else: 
                freq[item] = 1
        
        result = []
        for key, value in freq.items(): 
            result.append({
                "link": key,
                "count": value
            })
        return result

    clean_link_list = [x['link'].replace('http://','https://') for x in agg_links]
    link_freq = list_freq(clean_link_list)

    clean_text_list = [x['text'].replace('http://','https://') for x in agg_links]
    text_freq = list_freq(clean_text_list)

    link_freq_df = pd.DataFrame(link_freq)
    text_freq_df = pd.DataFrame(text_freq)

    link_freq_df.sort_values('count',ascending=False).head(20)

This was the result of the code - not great, but not horrible.  In the end, I just decided the 'old fashioned way' was the proper way to find newsletters...

| link                                                                                                                                        | count | 
|---------------------------------------------------------------------------------------------------------------------------------------------|-------| 
| https://roundup.fishtownanalytics.com/                                                                                                      | 7     | 
| https://www.oreilly.com/data/newsletter.html                                                                                                | 7     | 
| https://dataelixir.com/                                                                                                                     | 7     | 
| https://www.datascienceweekly.org/                                                                                                          | 7     | 
| https://us13.campaign-archive.com/home/?u=67bd06787e84d73db24fb0aa5&id=6c9d98ff2c                                                           | 6     | 
| https://github.com/EthicalML/awesome-machine-learning-operations                                                                            | 5     | 
| https://www.instagram.com/data4sci/                                                                                                         | 4     | 
| https://www.linkedin.com/company/dataforscience/                                                                                            | 4     | 
| https://github.com/DataForScience                                                                                                           | 4     | 
| https://medium.com/data-for-science                                                                                                         | 4     | 
| https://twitter.com/data4sci                                                                                                                | 4     | 
| https://tinyletter.com/data-is-plural                                                                                                       | 4     | 
| https://theodi.org/knowledge-opinion/the-week-in-data/                                                                                      | 4     | 
| https://www.facebook.com/data4sci/                                                                                                          | 4     | 
| https://towardsdatascience.com/doing-machine-learning-the-uber-way-five-lessons-from-the-first-three-years-of-michelangelo-da584a857cc2     | 3     | 
| https://www.datasciencecentral.com/profiles/blogs/check-out-our-dsc-newsletter                                                              | 3     | 
| https://www.podcastinit.com                                                                                                                 | 3     | 
| https://www.getrevue.co/profile/datamachina                                                                                                 | 3     | 
| https://www.datascienceweekly.org/newsletters                                                                                               | 3     | 
| https://medium.com/towards-data-science/newsletters/the-daily-pick?source=newsletter_v3_promo--------------------------newsletter_v3_promo- | 3     | 

