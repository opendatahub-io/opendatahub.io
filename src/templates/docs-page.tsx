import { PageProps, graphql } from "gatsby";
import * as React from "react";

import { Layout, Seo } from "../components/shared";
import SideNavigation from "../components/shared/SideNavigation";
import { DOCS_NAVIGATION } from "../const";
import { PageSection } from "@patternfly/react-core";
import { AsciiDocSection } from "../types";

const DocsPageTemplate = ({
  data: { asciidoc: doc, allFile: allDocs },
  location,
}: PageProps<Queries.DocsPageTemplateQuery>) => {
  const toc: { [key: string]: AsciiDocSection[] } = allDocs.edges
    .map((edge) => edge.node.childAsciidoc)
    .reduce((prev, curr) => {
      if (curr?.fields?.slug && curr.sections) {
        return {
          ...prev,
          [curr.fields.slug]: curr.sections.filter(
            (section) => section?.level && section.level <= 1
          ),
        };
      } else {
        return prev;
      }
    }, {});

  return (
    <Layout
      sidebar={
        <SideNavigation
          config={DOCS_NAVIGATION}
          location={location}
          toc={toc}
        />
      }
    >
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <div
          className="asciidoc-docs"
          dangerouslySetInnerHTML={{ __html: doc?.html ?? "" }}
        />
      </PageSection>
    </Layout>
  );
};

export const Head = ({
  data: { asciidoc: doc },
}: PageProps<Queries.DocsPageTemplateQuery>) => {
  return <Seo title={doc?.document?.title ?? "Documentation"} />;
};

export default DocsPageTemplate;

export const pageQuery = graphql`
  query DocsPageTemplate($id: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "docs" }
        childrenAsciidoc: { elemMatch: { id: { ne: null } } }
      }
    ) {
      edges {
        node {
          childAsciidoc {
            fields {
              slug
            }
            sections {
              parentId
              name
              level
              index
              id
            }
          }
        }
      }
    }
    asciidoc(id: { eq: $id }) {
      html
      id
      document {
        title
      }
      sections {
        id
        index
        level
        name
        parentId
      }
    }
  }
`;
