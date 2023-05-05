import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `opendatahub.io`,
    siteUrl: `https://www.opendatahub.io`
  },
  graphqlTypegen: true,
  plugins: [
    // "gatsby-plugin-google-gtag", // TODO: set up google analytics
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
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
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
        plugins: []
      }
    },

    // `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "src/content/posts/"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `docs`,
        remote: `https://github.com/opendatahub-io/opendatahub-documentation.git`,
        branch: `main`
      }
    },
  ]
};

export default config;
