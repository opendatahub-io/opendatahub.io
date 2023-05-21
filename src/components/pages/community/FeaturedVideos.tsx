import { graphql, useStaticQuery, Link } from "gatsby";
import * as React from "react";
import {
  Button,
} from "@patternfly/react-core";
import { ExternalLinkAltIcon } from "@patternfly/react-icons/dist/esm/icons/external-link-alt-icon";
import { ContentCard, ContentCardList, SectionLayout } from "../../shared";


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
    <SectionLayout
      title="Videos"
      description={(<>
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
      </>)}
      actionTitle="View all videos"
      actionLink="/videos"
    >
      <ContentCardList>
        {posts.slice(0, 2).map(({ frontmatter, fields }) => (
          <ContentCard
            subTitle={frontmatter.categories}
            title={frontmatter.title}
            link={
              frontmatter.permalink ? frontmatter.permalink : fields.slug
            }
            body={frontmatter.preview}
            hasMoreButton
            buttonText={"Watch Now"}
          />
        ))}
      </ContentCardList>
    </SectionLayout>

  );
};
