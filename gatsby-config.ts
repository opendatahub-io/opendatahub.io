import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `opendatahub.io`,
    siteUrl: `https://www.opendatahub.io`,
  },
  graphqlTypegen: true,
  plugins: [
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
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "src/content/blog/",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.REACT_APP_GOOGLE_ANALYTICS_TAG_ID]
      },
    },
  ],
};

export default config;
