import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
const path = require(`path`)

interface Node {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
  }
}

interface QueryResult {
    allMarkdownRemark: {
      edges: {
        node: Node
      }[]
    }
  }

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql<QueryResult>(`
    query allMarkdownRemark{
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
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
    }
  `)

  if (result.errors) {
    throw result.errors
  }


  const posts = result.data?.allMarkdownRemark.edges ?? []

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        id: node.id,        
      },
    })
  })
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      date: Date @dateformat
      author: String
      categories: String
      preview: String
    }
    type Fields {
      slug: String
    }
  `)
}