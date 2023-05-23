# OpenDataHub.io Website


## Creating a Blog Post

All blog posts are located in the `src/content/blog` directory. Each file is a Markdown (`.md`) file. Files should be named `YYYY-MM-DD-unique-title`.

### Metadata Schema
// type is used to feature different types of content in different places
type: blog | release | video | {or a new category i.e. audio, podcast, file, etc.}

```ts
// author is the author of the content
author: string

// title is the title of the content
title: string

// preview is the preview text that will be shown on the card
preview: string

// date is the date the content was published
date: YYYY-MM-DD

// categories is a list of categories that the content belongs to. Avoid spaces in the category names.
categories: string, string, string, ...

// featured is a boolean value that determines if the content should be featured on the home page and or community page
featured: true | false
```

```md
---
type: blog
author: Sample Author
title:  Sample Title
preview: This is a blog post preview sample
date: 2022-10-31
categories: jupyter, model-serving, gpu
featured: true
---


### Referencing images and files
Images and files can be included in the markdown using relative links to files in the `src/content/assets/img` or `src/content/assets/files` directories.

For example to reference the image `src/content/assets/img/architecture.png` you would use the following markdown:

```md
![alt text](../assets/img/architecture.png)
```

However images and files used only for that markdown file should be organized with this folder structure: `src/content/assets/img/pages/{posts | docs}/{markdown_file_name}/{image_file}.png`

### linking to pages within the site
To link to pages within the site you can use relative or absolute links to the page. For example to link to the `opendatahub.io/docs/tiered-components/` page you would use the following markdown:

```md
[link text](/docs/tiered-components)
```

Or use relative links for when the the markdown is nearby. This is useful for linking to other blog posts.
    
```md
[link text](./{other_blog_post})
```

