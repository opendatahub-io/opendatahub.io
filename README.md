# OpenDataHub.io Website


## Creating a blog post

All blog posts are located in the `src/content/blog` directory. Each file is a Markdown (`.md`) file. Files should be named `YYYY-MM-DD-unique-title`.

### Metadata schema

```ts
// type is used to feature different types of content in different places
type: blog | release | video | {or a new category i.e. audio, podcast, file, etc.}

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

// permalink is the url path to the content and is not required. This is used if the content is not in the markdown file but in a different external location.
permalink: string
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
```

### Referencing images and files
Images and files can be included in the markdown using relative links to files in the `src/content/assets/img` or `src/content/assets/files` directories.

For example to reference the image `src/content/assets/img/architecture.png` you would use the following markdown:

```md
![alt text](../assets/img/architecture.png)
```

However images and files used only for that markdown file should be organized with this folder structure: `src/content/assets/img/pages/{posts | docs}/{markdown_file_name}/{image_file}.png`

### Linking to pages within the site
To link to pages within the site you can use relative or absolute links to the page. For example to link to the `opendatahub.io/docs/tiered-components/` page you would use the following markdown:

```md
[link text](/docs/tiered-components)
```

Or use relative links for when the the markdown is nearby. This is useful for linking to other blog posts.
    
```md
[link text](./{other_blog_post})
```

## Creating a video post

Video posts are located in the `src/content/blogs` directory. Each file is a Markdown (`.md`) file. They are like blog post except content should only include the frontmatter and no markdown content.

```md
---
type: video
author: Sample Author
title:  Sample Title
preview: This is a blog post preview sample
date: 2022-10-31
categories: jupyter, model-serving, gpu
featured: true
permalink: https://www.youtube.com/watch?v=1234567890
---
```

## Creating a release post

Release posts are identical to blog posts with the exception that the `type` is set to `release`.


## Creating a new page

### Creating a new page with markdown

All markdown pages are located in the `src/content/pages` directory. Each file is a Markdown (`.md`) file. Files should be named whatever you want the url to be. For example if you want the url to be `opendatahub.io/about` then the file should be named `about.md`. If you want the url to be `opendatahub.io/about/team` then the file should be encased in a folder named `about` and the file should be named `team.md`. You may also still have a file named `about.md` in the `src/content/pages` directory. This will be the landing page for the `about` url.

Do not create any markdown files in the `src/content/pages` directory with the following names: `docs.md`, `blog.md`, or `community.md` as these are reserved for the landing pages of those sections.

### Creating a new page with React

All React pages are located in the `src/pages` directory. Each file is a React (`.tsx`) file. Files should be named whatever you want the url to be. For example if you want the url to be `opendatahub.io/about` then the file should be named `about.tsx`. If you want the url to be `opendatahub.io/about/team` then the file should be encased in a folder named `about` and the file should be named `team.tsx`. You may also still have a file named `about.tsx` in the `src/pages` directory. This will be the landing page for the `about` url.

Just like with markdown pages, do not create any React files in the `src/pages` directory that match names in the `src/content/pages` directory.