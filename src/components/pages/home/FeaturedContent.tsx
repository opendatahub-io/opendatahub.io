import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ContentCard, ContentCardList, SectionLayout } from '../../shared'


export const FeaturedContent = ({ }) => {
  const pageQuery = useStaticQuery(graphql`
<<<<<<< HEAD
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "blog" } } }) {
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
=======
  {
    allMarkdownRemark(
      filter: {frontmatter: {type: {in: ["blog", "video", "release"]}}}
      sort: {frontmatter: {date: DESC}}
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
>>>>>>> eb764c9 (UX fixes)
        }
      }
    }
  }
  `);

  const data = pageQuery.allMarkdownRemark.nodes ?? [];
  const featured = data.filter((d) => d.frontmatter.featured);
<<<<<<< HEAD
  const posts = featured.length >= 0 ? featured : data;

  return (
    <SectionLayout
      title="Whats new"
=======
  const posts = [...featured, ...data]

  return (
    <SectionLayout
      title="What's new"
>>>>>>> eb764c9 (UX fixes)
      actionTitle="View all content"
      actionLink="/blog"
    >
      <ContentCardList>
        {posts.slice(0, 2).map(({ frontmatter, fields, excerpt }) => (
          <ContentCard
<<<<<<< HEAD
=======
            key={frontmatter.title}
>>>>>>> eb764c9 (UX fixes)
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
}