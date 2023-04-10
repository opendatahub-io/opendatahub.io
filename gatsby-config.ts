import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `opendatahub.io`,
    // siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-google-gtag",
     {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./content/posts/"
      },
    __key: "pages"
  },
  // {
  //   resolve: `gatsby-source-git`,
  //   options: {
  //     name: `docs-repo`,
  //     remote: `https://github.com/opendatahub-io/opendatahub-documentation.git`,
  //     branch: `main`
  //   }
  // },
]
};

export default config;
