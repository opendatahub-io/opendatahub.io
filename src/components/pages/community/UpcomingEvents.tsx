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

export const UpcomingEvents: React.FC = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "events" } } }
        limit: 2
        sort: { frontmatter: { date: ASC } }
      ) {
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
            featured
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
              Upcoming Events
            </Title>
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem className="pf-u-mx-auto pf-u-mb-2xl max-width-900">
        <Grid hasGutter>
          {posts.slice(0, 2).map(({ frontmatter, fields }) => (
            <GridItem lg={6} sm={12} key={fields.slug}>
              <ContentCard
                title={frontmatter.title}
                link={fields.slug}
                imageUrl={placeholderImage}
                subTitle={frontmatter.date}
                hasCardFooter
                hasMoreButton
                buttonVariant={"primary"}
                buttonText={"Register Now"}
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
              component={(props: any) => <Link {...props} to={"/events"} />}
              isInline
            >
              View All Events
            </Button>
          </FlexItem>
        </Flex>
      </StackItem>
    </Stack>
  );
};
