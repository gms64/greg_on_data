---
title: nuxt static skeleton
seo_title: nuxt static skeleton
summary: Skeleton Nuxt Blog using Nuxt-Content, Netlify CMS, and a few
  additional features
seo_desc: Skeleton Nuxt Blog using Nuxt-Content, Netlify CMS, and a few
  additional features
---
After finishing this website, I shared it with the reddit community and offered to create a starter point for other peoples' blogs. Since there was *actually* interest, I decided to go for it and set up the skeleton application.  It wasn't much incremental work from getting from this website to that application, was mainly just removing a few things and streamlining others.

You can check out the demo site here: https://nuxt-static-skeleton.netlify.app/

And the Github Repo here: https://github.com/gms64/nuxt-static-skeleton



## What the project includes

- Home Page (custom)
- [nuxt-content](https://content.nuxtjs.org/) powered:
    - About Page (markdown)
    - Contact Page (markdown)
    - Blog Post List Page(s) (with pagination - default to 5 posts per page)
    - Blog Post Single Page
- Google Fonts (Header / Body Text can be defined separately)
- [Flexbox Grid](http://flexboxgrid.com/)
- Modified [Skeleton CSS](http://getskeleton.com/)
- Google Analytics (Turned on by default, you can add your id in the `nuxt.config.js` file)
- Netlify CMS for in-browser editing (at /admin) once the site is deployed
- Interactive Editor from nuxt-content when running the dev server
- SEO Title / Description separation for better SEO control
- Sitemap Generation via Netlify
- Contact form via Netlify