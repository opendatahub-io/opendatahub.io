import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentCard, ContentCardList, SectionLayout } from "../../shared";

export const FeaturedContent = ({}) => {
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { in: ["blog", "video", "release"] } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
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
      title="What's new"
      actionTitle="View all content"
      actionLink="/blog"
    >
      <ContentCardList>
        {posts.slice(0, 2).map(({ frontmatter, fields, excerpt }) => (
          <ContentCard
            key={frontmatter.title}
            title={frontmatter.title}
            body={excerpt}
            link={fields.slug}
            subTitle={frontmatter.date}
            hasMoreButton
            buttonText={"View"}
          />
        ))}
      </ContentCardList>
    </SectionLayout>
  );
};
