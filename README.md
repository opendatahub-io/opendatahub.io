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

### Running a jekyll container on linux using docker
You can view the local changes to your clone of the opendatahub.io in realtime by running the jekyll server in a docker container. You'll be running the container with a volume mounted to the root of your opendatahub.io repository.
From the root of your cloned opendatahub.io repository:

```bash
# To prevent SELinux from denying docker from mounting your repository folder as a volume You'll need to change the selinux context for the root of the opendatahub.io repository directory
chcon -Rt svirt_sandbox_file_t $PWD

# Set an environment variable for the version of the jekyll container
export JEKYLL_VERSION=3.8

# Run the jekyll container, map the container port 4000 to the host port 4000 and set the environment variable JEKYLL_UID to your user ID to prevent any permission issues with adding or modifying files
# If you're concerned about the container user running with the same user ID, you can modify the permission of the repo folder to allow read/write access to other
docker run --rm --volume="/home/llasmith/projects/data-hub/opendatahub.io:/srv/jekyll" -it -p 4000:4000 -e JEKYLL_UID=$(id -u) jekyll/jekyll:$JEKYLL_VERSION jekyll serve

```
