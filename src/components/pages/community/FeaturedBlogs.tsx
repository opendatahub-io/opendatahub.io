import { graphql, useStaticQuery, Link } from "gatsby";
import * as React from "react";
import {
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Title,
  TitleSizes,
  Grid,
  GridItem,
  Button,
} from "@patternfly/react-core";
import placeholderImage from "../../../content/assets/img/placeholder.svg";
import { ContentCard } from "../../shared/ContentCard";

export const FeaturedBlogs: React.FC = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "blog" } } }) {
        nodes {
          excerpt(truncate: true, pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            preview
            permalink
            featured
            categories
          }
        }
      }
    }
  `);

  const data = pageQuery.allMarkdownRemark.nodes ?? [];
  console.log("🚀 ~ file: FeaturedBlogs.tsx:42 ~ data:", data);
  const featured = data.filter((d) => d.frontmatter.featured);
  const posts = featured.length >= 0 ? featured : data;
  console.log("🚀 ~ file: FeaturedBlogs.tsx:44 ~ posts:", posts);

  return (
    <Stack>
      <StackItem className="pf-u-mx-auto pf-u-mb-3xl max-width-900">
        <Flex
          className="pf-u-text-align-center"
          justifyContent={{ default: "justifyContentCenter" }}
        >
          <FlexItem>
            <Title size={TitleSizes["4xl"]} headingLevel="h2">
              Featured Blogs
            </Title>
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem className="pf-u-mx-auto pf-u-mb-2xl max-width-900">
        <Grid hasGutter>
          {posts.slice(0, 2).map(({ frontmatter, fields, excerpt }) => (
            <GridItem lg={6} sm={12} key={fields.slug}>
              <ContentCard
                title={frontmatter.title}
                body={excerpt}
                link={fields.slug}
                imageUrl={placeholderImage}
                subTitle={frontmatter.date}
                hasCardFooter
                hasMoreButton
                buttonVariant={"primary"}
                buttonText={"Continue Reading"}
              />
            </GridItem>
          ))}
        </Grid>
        <Flex
          className="pf-u-text-align-center"
          justifyContent={{ default: "justifyContentCenter" }}
        >
          <FlexItem className="pf-u-mt-2xl">
            <Button
              variant="link"
              component={(props: any) => (
                <Link {...props} to={"/blog/?layout=blog"} />
              )}
              isInline
            >
              View All Blogs
            </Button>
          </FlexItem>
        </Flex>
      </StackItem>
    </Stack>
  );
};
