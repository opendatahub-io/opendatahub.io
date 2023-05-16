import { graphql } from "gatsby";
import * as React from "react";

import { Layout, Seo } from "../components/shared";
import {
  PageSection,
  Grid,
  GridItem,
  Stack,
  StackItem,
  Flex,
  FlexItem,
  Title,
  TitleSizes,
  Text,
} from "@patternfly/react-core";
const EventsTemplate = ({ data: { markdownRemark: post } }) => {
  return (
    <Layout>
      <PageSection variant="light">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <Flex className="pf-u-w-75vw pf-u-flex-direction-column">
            <header>
              <FlexItem>
                <Title size={TitleSizes["4xl"]} headingLevel="h2">
                  {post.frontmatter.title}
                </Title>
              </FlexItem>

              <FlexItem>
                <Text>{post.frontmatter.date}</Text>
                <Text>{post.frontmatter.venue}</Text>
                <Text>{post.frontmatter.address}</Text>
              </FlexItem>
            </header>
            <FlexItem>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </FlexItem>
          </Flex>
        </article>
      </PageSection>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      preview={post.frontmatter.preview || post.excerpt}
    />
  );
};

export default EventsTemplate;

export const pageQuery = graphql`
  query EventsTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        preview
        categories
        preview
        date(formatString: "MMMM DD, YYYY")
        venue
        address
      }
    }
  }
`;
