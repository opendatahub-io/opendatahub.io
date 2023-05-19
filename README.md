# OpenDataHub.io Website

## Creating an Inline Announcement

All announcements are located in the `content/posts` directory.  They are written in Markdown (`.md`). Files should be named `YYYY-MM-DD-unique-title`.

Announcements will display all content on the news page.  Unlike blog posts, be sure to omit `layout` and `preview` fields.


```md
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

```md
---
type: blog
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