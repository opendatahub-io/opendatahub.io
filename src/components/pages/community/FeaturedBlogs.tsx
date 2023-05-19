import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { ContentCard, ContentCardList, SectionLayout } from "../../shared";

export const FeaturedBlogs: React.FC = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "blog"}}}
        sort: {frontmatter: {date: DESC}}
    ) {
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
  const posts = [...featured, ...data]

  return (
    <SectionLayout
<<<<<<< HEAD
      title="Featured Posts"
=======
      title="Featured posts"
>>>>>>> eb764c9 (UX fixes)
      actionTitle="View all posts"
      actionLink="/blog/?type=blog"
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
            chips={frontmatter.categories.split(",")}
            buttonText={"Continue Reading"}
          />
        ))}
      </ContentCardList>
    </SectionLayout>
  );
};
