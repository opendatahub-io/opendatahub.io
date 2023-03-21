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

Links should prepend `site.baseurl` before the location. e.g.:

```jekyll
<link href="{{ '/assets/css/home.css' | prepend: site.baseurl }}" rel="stylesheet">
<img src="{{ '/assets/img/datahub_logo_black.png' | prepend: site.baseurl }}">
<a class="nav-link" href="{{ '/news/' | prepend: site.baseurl }}">NEWS</a>
```

## Local testing

You can run the site just like any other Jekyll site as [documented](https://jekyllrb.com/docs/) or using a [jekyll container](https://store.docker.com/community/images/jekyll/jekyll).

### Serving ODH site locally

1. Ensure all of the requirements [here](https://jekyllrb.com/docs/installation/#requirements) are installed, as well as the `ruby-devel` library.
2. In the root of the repository, run:
``` bash
bundle install
bundle exec jekyll serve
```
3. Go to http://localhost:4000
4. To automatically refresh after every change, use: `bundle exec jekyll serve --livereload`

### Troubleshooting

#### On running `bundle install` you receive: `Ignoring <package-version> because its extensions are not built. Try: gem pristine <package> --version <version>`

This issue might stem from 2 cases:
1. The package was installed on a previous Ruby version
2. The package was installed when not all prerequisites were satisfied

The easiest solution is to delete the package explicitly with
` sudo -i gem uninstall -i /usr/share/gems <package>`
where `/usr/share/gems` might be a different directory on your system.
It can then be reinstalled with `bundle install` once all prerequisites are satisfied.

#### On running bundle exec jekyll serve you receive: `Could not find <package>-<version> in any of the sources`

See troubleshooting case 1.

#### On running `bundle install` you receive: `An error occurred while installing <package> (<version>), and Bundler cannot continue.`
    
This is most likely caused by missing the `ruby-devel`, `gcc` or `g++` libraries.

#### `bundle exec jekyll serve` fails on Ruby 3.0.0 and above:

Run `bundle add webrick` and retry.




