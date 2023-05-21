import { PageProps, graphql } from "gatsby";
import * as React from "react";
import {
  PageSection,
  Flex,
  FlexItem,
  Title,
  TitleSizes,
  Text,
  Chip,
} from "@patternfly/react-core";
import { Layout, Seo } from "../components/shared";

const BlogPostTemplate = ({ data: { markdownRemark: post } }: PageProps<Queries.BlogPostTemplateQuery>) => {
  const chips: string[] = (post?.frontmatter?.categories ?? "").split(",")
  return (
    <Layout>
      <PageSection variant="light" className="markdown">
        <Title size={TitleSizes["4xl"]} headingLevel="h2">
          {post?.frontmatter?.title}
        </Title>
        <Text>{post?.frontmatter?.date}</Text>
        <Flex>
          {
            chips.map((chip) => (
              <FlexItem key={chip}>
                <Chip isReadOnly>{chip}</Chip>
              </FlexItem>
            ))}
        </Flex>
        <div
          dangerouslySetInnerHTML={{ __html: post?.html ?? "" }}
        />
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

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    markdownRemark(id: {eq: $id }) {
    id
    excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        categories
        preview
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
