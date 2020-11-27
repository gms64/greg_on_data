---
title: vue delayed search field - wait for users to stop typing before calling a function
seo_title: Vue Delayed Search - Wait for Users to Stop Typing Before Calling Functions
summary: Just a quick piece of code that helped me on one of my project - I had to duct tape it together myself, so imagine it may be helpful to others.
seo_desc: Here's a delayed search component / skeleton that you can use in Vue.  It'll wait until the user is done with an input before it fires the function
createdAt: 2020-11-26 18:00:00
date: 2020-11-26T19:17:57.500Z
---

## Delayed Search

Hey guys, quick post here - I came across this problem when I was creating a search box in one of my [projects](http://nextnovelproject.com/genres) that would trigger 0.5s after the user stops typing.  It's pretty convenient and really easy to integrate.

Here's the simple Vue Integration in [jsfiddle](https://jsfiddle.net/c36rebs4/1/).

And here it is as a component in [Nuxt](https://gist.github.com/gms64/c1f3d3f41c7969607dd7d17f95d99e3e).


<script async src="//jsfiddle.net/c36rebs4/1/embed/js,html,result/"></script>

<hr>




