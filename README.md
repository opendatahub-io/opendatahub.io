![Build Status](https://gitlab.com/opendatahub/opendatahub.io/badges/master/build.svg)
![Jekyll Version](https://img.shields.io/gem/v/jekyll.svg)

---

# OpenDataHub.io Website

## Creating an Inline Announcement

All announcements are located in the `_posts` directory.  They are written in Markdown (`.md`). Files should be named `YYYY-MM-DD-unique-title`.

Announcements will display all content on the news page.  Unlike blog posts, be sure to omit `layout` and `preview` fields.


```jekyll
---
author: yourusername
title:  Sample Announcement
date: 2018-09-09
categories: announcement
---

Content goes here and will be shown directly on the news list.
```

## Creating a Blog Post

All blog posts are located in the `/_posts` directory. Each file is a Markdown (`.md`) file, just like announcements.  Files should be named `YYYY-MM-DD-unique-title`.

Instead of showing all content on the news list, they will have a preview field which is shown.  Content will be shown on the blog post detail page.  The `preview` page is required or else the entire content of the blog post will be displayed on the news list.  The `layout` is required to display properly when clicked.

```jekyll
---
layout: blog
author: yourusername
title:  Sample Blog Post
preview: Preview text is required.  It is shown on the news list instead of the full content.
date: 2018-09-10
categories: blog
---
# Content goes here

This content is NOT shown on the news list, but will be shown on the detail page.  To reach the detail page, the user will click on the "Read more..." link which is automatically generated.

## More stuff...

```

## Create a Page

To keep things organized, pages are located in the `pages` directory, with a directory structure mirroring the site. Configure the metadata:

```jekyll
---
layout: default
title: My Page
permalink: /my-page/
---
```

If you add a new page and want it to appear in the sidebar of that section (such as the sidebar under **Docs**), then you also need to update the `yaml` file associated with that group. These are located under `_data/`. For **Docs**, you would update `docs_toc.yml`, following the structure that currently exists within that file.


## Links

Links should include `{{ site.baseurl }}` before the location. e.g.:

```jekyll
<link href="{{ site.baseurl }}/assets/css/home.css" rel="stylesheet">
<img src="{{ site.baseurl }}/assets/img/datahub_logo_black.png">
<a class="nav-link" href="{{ site.baseurl }}/news/">NEWS</a>
```

## Local testing

You can run the site just like any other Jekyll site as [documented](https://jekyllrb.com/docs/) or using a [jekyll container](https://store.docker.com/community/images/jekyll/jekyll).
