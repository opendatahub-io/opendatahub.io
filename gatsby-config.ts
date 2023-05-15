import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `opendatahub.io`,
    siteUrl: `https://www.opendatahub.io`,
  },
  graphqlTypegen: true,
  plugins: [
    // "gatsby-plugin-google-gtag", // TODO: set up google analytics
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/content/assets/img/logos/datahub_mark_color.png",
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Open Data Hub RSS Feed",
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ]
      }
    },
    // `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "src/content/posts/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: "src/content/events/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "src/content/videos/",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "docs",
        "path": "src/content/docs/"
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "src/content/posts/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: "src/content/events/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "path": "src/content/assets/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "docs",
        "path": "src/content/docs/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "src/content/assets/"
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `docs`,
        remote: `https://github.com/opendatahub-io/opendatahub-documentation.git`,
        branch: `main`,
        local: "public/static/docs",
      },
    },
  ],
};

export default config;
