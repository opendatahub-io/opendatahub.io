import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { ContentCard, ContentCardList, SectionLayout } from "../../shared";

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
  const featured = data.filter((d) => d.frontmatter.featured);
  const posts = featured.length >= 0 ? featured : data;

  return (
    <SectionLayout
      title="Featured Posts"
      actionTitle="View all posts"
      actionLink="/blog/?layout=blog"
    >
      <ContentCardList>
        {posts.slice(0, 2).map(({ frontmatter, fields, excerpt }) => (
          <ContentCard
            title={frontmatter.title}
            body={excerpt}
            link={fields.slug}
            subTitle={frontmatter.date}
            hasMoreButton
            buttonText={"Continue Reading"}
          />
        ))}
      </ContentCardList>
    </SectionLayout>
  );
};
