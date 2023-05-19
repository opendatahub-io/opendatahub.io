import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ContentCard, ContentCardList, SectionLayout } from '../../shared'


export const FeaturedContent = ({ }) => {
    const pageQuery = useStaticQuery(graphql`
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
        }
      }
    }
  `);

    const data = pageQuery.allMarkdownRemark.nodes ?? [];
    const featured = data.filter((d) => d.frontmatter.featured);
    const posts = featured.length >= 0 ? featured : data;

    return (
        <SectionLayout
            title="Whats new"
            actionTitle="View all content"
            actionLink="/blog"
        >
            <ContentCardList>
                {posts.slice(0, 2).map(({ frontmatter, fields, excerpt }) => (
                    <ContentCard
                        title={frontmatter.title}
                        body={excerpt}
                        link={fields.slug}
                        subTitle={frontmatter.date}
                        hasCardFooter
                        hasMoreButton
                        buttonVariant={"primary"}
                        buttonText={"View"}
                        date={new Date(frontmatter.date)}
                    />
                ))}
            </ContentCardList>
        </SectionLayout>
    );
}