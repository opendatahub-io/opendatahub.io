import { PageProps, graphql } from "gatsby";
import * as React from "react";
import {
  PageSection,
} from "@patternfly/react-core";
import { Footer, Layout, Seo } from "../components/shared";

const BlogPostTemplate = ({ data: { markdownRemark: page } }: PageProps<Queries.BlogPostTemplateQuery>) => {
  return (
    <Layout>
      <PageSection variant="light" className="markdown" style={{ minHeight: "100vh" }}>
        <div
          dangerouslySetInnerHTML={{ __html: page?.html ?? "" }}
        />
      </PageSection>
      <Footer />
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: page } }) => {
  return (
    <Seo
      title={"OpenDataHub.io"}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query PageTemplate($id: String!) {
    markdownRemark(id: {eq: $id }) {
    id
    excerpt(pruneLength: 160)
      html
    }
  }
`;
