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
  Text,
} from "@patternfly/react-core";
import { ExternalLinkAltIcon } from "@patternfly/react-icons/dist/esm/icons/external-link-alt-icon";
import { ContentCard } from "../../shared/ContentCard";
export const FeaturedVideos: React.FC = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "videos" } } }) {
        nodes {
          id
          excerpt
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
  const featured = data.filter((d) => d.frontmatter.featured);
  const posts = featured.length >= 0 ? featured : data;

  return (
    <Stack>
      <StackItem className="pf-u-mx-auto pf-u-mb-3xl max-width-900">
        <Flex
          className="pf-u-text-align-center"
          justifyContent={{ default: "justifyContentCenter" }}
        >
          <FlexItem>
            <Title size={TitleSizes["4xl"]} headingLevel="h2">
              Videos
            </Title>
            <Text>
              Additional videos will be available on the OpenShift youtube
              channel{" "}
              <Button
                className="pf-u-font-size-sm"
                variant="link"
                isInline
                component={(props: any) => (
                  <>
                    <ExternalLinkAltIcon
                      size="sm"
                      className="pf-u-link-color"
                    />{" "}
                    <Link
                      {...props}
                      to={
                        "https://www.youtube.com/playlist?list=PLaR6Rq6Z4Iqcg2znnClv-xbj93Q_wcY8L"
                      }
                    />
                  </>
                )}
              >
                {` AI/ML on OpenShift`}
              </Button>{" "}
              playlist.
            </Text>
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem className="pf-u-mx-auto pf-u-mb-2xl max-width-900">
        <Grid hasGutter>
          {posts.slice(0, 2).map(({ frontmatter, fields }) => (
            <GridItem lg={6} sm={12} key={fields.slug}>
              <ContentCard
                subTitle={frontmatter.categories}
                title={frontmatter.title}
                link={
                  frontmatter.permalink ? frontmatter.permalink : fields.slug
                }
                body={frontmatter.preview}
                buttonVariant={"primary"}
                hasCardFooter
                hasMoreButton
                buttonText={"Watch Now"}
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
              component={(props: any) => <Link {...props} to={"/videos"} />}
              isInline
            >
              View All Videos
            </Button>
          </FlexItem>
        </Flex>
      </StackItem>
    </Stack>
  );
};
