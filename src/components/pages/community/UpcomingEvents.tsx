import { graphql, useStaticQuery, Link } from "gatsby";
import * as React from "react";
import placeholderImage from "../../../content/assets/img/placeholder.svg";
import { ContentCard, ContentCardList, SectionLayout } from "../../shared";

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
    <SectionLayout title="Upcoming Events" actionTitle="View All Events" actionLink="/events">
      <ContentCardList>
        {posts.slice(0, 2).map(({ frontmatter, fields }) => (
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
        ))}
      </ContentCardList>
    </SectionLayout>
  );
};
