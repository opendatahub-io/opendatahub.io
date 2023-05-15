import { GatsbyNode, Node as _Node } from "gatsby";
import { createFilePath, FileSystemNode } from "gatsby-source-filesystem";

const path = require(`path`);
const asciidoc = require(`asciidoctor`)();

interface Node {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

type Without<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

interface QueryResult {
  allFile: {
    edges: {
      node: XOR<{ childAsciidoc: Node }, { childMarkdownRemark: Node }>;
    }[];
  };
}

const isFileSystemNode = (node: _Node): node is FileSystemNode => {
  return (node as FileSystemNode).absolutePath !== undefined;
};

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNodeField, createParentChildLink, createNode } = actions;

  if (isFileSystemNode(node) && ["adoc", "asciidoc"].includes(node.extension)) {
    const asciidocOptions = {
      safe: "unsafe",
      to_file: false,
      attributes: {
        showtitle: true,
        "site-baseurl": "/",
        imagesdir: "/static/docs/",
        upstream: true,
        "skip-front-matter": true,
        stem: "asciimath",
      },
    };

    try {
      var _title$getCombined, _title$getMain;
      const doc = asciidoc.loadFile(node.absolutePath, asciidocOptions);
      const html = doc.convert(asciidocOptions);

      const title = doc.getDocumentTitle({
        partition: true,
      });
      let sections = null;
      if (doc.hasSections()) {
        const flattenSections = (sections, parentId) => {
          return sections.reduce((flattened, s) => {
            const section = {
              name: s.getTitle(),
              id: s.getId(),
              level: s.getLevel(),
              index: s.getIndex(),
              parentId: parentId,
            };
            const nestedSections = flattenSections(s.getSections(), section.id);
            return flattened.concat(section, nestedSections);
          }, []);
        };

        sections = flattenSections(doc.getSections(), null);
      }

      const extractPageAttributes = (allAttributes) =>
        Object.entries(allAttributes).reduce((pageAttributes, [key, value]) => {
          if (key.startsWith(`page-`)) {
            pageAttributes[key.replace(/^page-/, ``)] = value;
          }
          return pageAttributes;
        }, {});

      const pageAttributes = extractPageAttributes(doc.getAttributes());
      const asciiNode = {
        id: createNodeId(`${node.id} >>> ASCIIDOC`),
        parent: node.id,
        internal: {
          type: `Asciidoc`,
          mediaType: `text/html`,
          contentDigest: "",
        },
        children: [],
        html,
        document: {
          title:
            (_title$getCombined =
              title === null || title === void 0
                ? void 0
                : title.getCombined()) !== null && _title$getCombined !== void 0
              ? _title$getCombined
              : ``,
          subtitle:
            title !== null && title !== void 0 && title.hasSubtitle()
              ? title.getSubtitle()
              : ``,
          main:
            (_title$getMain =
              title === null || title === void 0 ? void 0 : title.getMain()) !==
              null && _title$getMain !== void 0
              ? _title$getMain
              : ``,
        },
        sections,
        pageAttributes,
      };
      asciiNode.internal.contentDigest = createContentDigest(asciiNode);
      createNode(asciiNode);
      createParentChildLink({
        parent: node,
        child: asciiNode,
      });
    } catch (err) {
      reporter.panicOnBuild(`Error processing Asciidoc ${node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`
        }:\n
      ${err}`);
    }
  }

  if (
    node.internal.type === "MarkdownRemark" ||
    node.internal.type === "Asciidoc"
  ) {
    const slug = createFilePath({ node, getNode, basePath: "src/content" });
    const sourceInstanceName = getNode(node.parent!)!.sourceInstanceName;

    createNodeField({
      node,
      name: "slug",
      value: `/${sourceInstanceName}${slug}`,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: "/docs/",
    isPermanent: false,
    redirectInBrowser: true,
    toPath: "/docs/getting-started-with-open-data-hub",
  });

  const docsResult = await graphql<QueryResult>(`
    query docFiles {
      allFile(
        filter: {
          sourceInstanceName: { eq: "docs" }
          childAsciidoc: { fields: { slug: { ne: null } } }
        }
      ) {
        edges {
          node {
            childAsciidoc {
              document {
                title
              }
              fields {
                slug
              }
              id
            }
          }
        }
      }
    }
  `);

  const blogResult = await graphql<QueryResult>(`
    query blogFiles {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        edges {
          node {
            childMarkdownRemark {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
              }
              id
            }
          }
        }
      }
    }
  `);

  const eventsResult = await graphql<QueryResult>(`
    query eventFiles {
      allFile(filter: { sourceInstanceName: { eq: "events" } }) {
        edges {
          node {
            childMarkdownRemark {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
              }
              id
            }
          }
        }
      }
    }
  `);

  const videosResult = await graphql<QueryResult>(`
    query videoFiles {
      allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
        edges {
          node {
            childMarkdownRemark {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
              }
              id
            }
          }
        }
      }
    }
  `);

  if (docsResult.errors) {
    throw docsResult.errors;
  }
  if (blogResult.errors) {
    throw blogResult.errors;
  }
  if (eventsResult.errors) {
    throw eventsResult.errors;
  }
  if (videosResult.errors) {
    throw videosResult.errors;
  }

  // create docs pages
  const docs = docsResult.data?.allFile.edges ?? [];
  docs.forEach(({ node: _node }) => {
    const node = _node.childAsciidoc ?? _node.childMarkdownRemark
    if (node?.fields?.slug) {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/docs-page.tsx"),
        context: {
          id: node.id,
        },
      });
    }
  });

  // create blog post pages
  const post = blogResult.data?.allFile.edges ?? [];
  post.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        id: node.childMarkdownRemark.id,
      },
    });
  });

  // create blog post pages
  const events = eventsResult.data?.allFile.edges ?? [];
  events.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve("./src/templates/events-page.tsx"),
      context: {
        id: node.childMarkdownRemark.id,
      },
    });
  });

  // create blog post pages
  const videos = videosResult.data?.allFile.edges ?? [];
  videos.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve("./src/templates/videos-page.tsx"),
      context: {
        id: node.childMarkdownRemark.id,
      },
    });
  });
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

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
  `);
};
