---
view: post
layout: post
lang: zh
author: ktquez
title: Essential Guide to Improve SEO in Single Page Application Vue.js
description: Optimizing your single page application Vue.js for search engines (SEO) is not simple, but I'll give you some tips on how to improve your results.
excerpt: Optimizing your single page application Vue.js for search engines (SEO) is not a simple task, in this short guide you will have an overview of tools and libs Vue.js that will help you to have a better result + several good practice tips in SPAs.
cover: true
coverAlt: Illustration with gray background on the left side a man pointing to some rectangles on the page simulating results of a search, on the right side the logos of the 4 most important search companies, Google, Yandex, Yahoo and bing, below them a search box.
categories:
  - vuejs
  - seo
tags: 
  - ssr
  - vuejs
  - nuxtjs
  - vuepress
  - prerender
  - SEO
  - SPA
created_at: 2018-09-13 10:00
updated_at: 2018-09-13 10:00
meta:
  - property: og:image
    content: /autores/my.jpeg
  - name: twitter:image
    content: /autores/my.jpeg
---

## Introduction 
SEO (Search Engine Optimization) are practices to be followed to optimize your site for search engines, improving its ranking, bringing better quality and increased traffic, thereby generating much more visibility for the site.

The first question we should ask when creating a website is: 

### What will I do to make my site look good on Google?
Any business currently wishing to survive in this competitive world of search engines should think of the best practices and techniques for marking "Search Engine Results Pages" (SERPs) as in the first pages of Google, Bing, Yahoo !, Ask, and others.

You do not need to be an SEO expert to be able to position yourself better, but your positioning will depend on some good practices, how your application behaves and what it implies in the result.

For example, a Single Page Application (SPA) is a complex situation, because there is no more than a single page `index.html`, which when loaded will be composed using JavaScript, both vanilla and by some framework.

Current search engines care very much about the content of each page of your site, doing automated scans through their crawlers. Because in SPAs the content is not organized or structured when requested, the crawlers can not reap the same as the user sees in the browser as soon as JavaScript rendering occurs.

Before the SPAs boom, Google (main engine) analyzed through what it received via <abbr title="HyperText Transfer Protocol">HTTP</abbr>, however, due to this demand Google developed a way to wait for JavaScript rendering to be able to collect the final result. However, from experience you do not always succeed in indexing correctly, thus becoming a fickle bet.

If you want to see how Google page rendering works, go to the link below:
[https://www.google.com/webmasters/tools/googlebot-fetch](https://www.google.com/webmasters/tools/googlebot-fetch)  

## Solutions for SPAs Vue.Js

### SSR (Server Side Rendering)
In the context of Server Side Rendering (SSR) as the name already says rendering is done on the server, then the search engine crawlers when requesting your site will be able to identify the information in the document completely to read and index.

It is great for dynamic projects that require SEO, but also projects that seek a presence in the social networks where their content is shared by users.

I wrote an article (you can check [this link](/en/posts/when-to-use-server-side-rendering-ssr-in-vuejs-projects.html)) on this topic, in it, you can know more in-depth the benefits of using server-side rendering and know a bit about [Nuxt.js](https://nuxtjs.org/) which is without a doubt the best tool to use when addresses universal applications of [Vue.js](https://vuejs.org/).

### Prerender
Since you now know what server-side rendering is, this implementation may sometimes seem overdone in certain SPAs using Vue.js. It may be because of the type of the project or the lack of structure to deploy a server, among several other business rules.

There is a solution to this peculiarity where you do not need a server infrastructure, I'm talking about a pre-rendering plugin using the webpack called [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin) (created by [Chris Fritz](https://twitter.com/chrisvfritz) one of the main members of Vue.js), this plugin not only works with Vue.js, also works with JavaScript vanilla or more current frameworks.

It has the role of rendering your pages (you inform the routes you want to render) and converts them into static documents (HTML), making the content completely available, helping in reading and indexing.

