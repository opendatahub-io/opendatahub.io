import { graphql, useStaticQuery, Link } from "gatsby";
import * as React from "react";
import { Button } from "@patternfly/react-core";
import { ExternalLinkAltIcon } from "@patternfly/react-icons/dist/esm/icons/external-link-alt-icon";
import { ContentCard, ContentCardList, SectionLayout } from "../../shared";

export const FeaturedVideos: React.FC = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "video" } } }
        sort: { frontmatter: { date: DESC } }
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
  const posts = [...featured, ...data.filter((d) => !d.frontmatter.featured)];

  return (
    <SectionLayout
      title="Videos"
      description={
        <>
          Additional videos will be available on the OpenShift youtube channel{" "}
          <Button
            className="pf-u-font-size-sm"
            variant="link"
            isInline
            component="a"
            icon={<ExternalLinkAltIcon size="sm" />}
            href="https://www.youtube.com/playlist?list=PLaR6Rq6Z4Iqcg2znnClv-xbj93Q_wcY8L"
          >
            AI/ML on OpenShift
          </Button>{" "}
          playlist.
        </>
      }
      actionTitle="View all videos"
      actionLink="/blog/?type=videos"
    >
      <ContentCardList>
        {posts.slice(0, 2).map(({ frontmatter, fields }) => (
          <ContentCard
            key={frontmatter.title}
            subTitle={frontmatter.date}
            title={frontmatter.title}
            link={frontmatter.permalink ? frontmatter.permalink : fields.slug}
            body={frontmatter.preview}
            chips={frontmatter.categories.split(",")}
            hasMoreButton
            buttonText={"Watch Now"}
          />
        ))}
      </ContentCardList>
    </SectionLayout>
  );
};
