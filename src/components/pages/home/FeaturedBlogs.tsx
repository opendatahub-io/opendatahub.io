import React from 'react'
import { Title, Gallery, GalleryItem, StackItem, Stack, Flex, FlexItem, Button } from '@patternfly/react-core'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { ContentCard } from '../../shared'
import placeholderImage from "../../../images/placeholder.svg"

const getLatestBlog = (start: number, end?: number) => {

    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
          nodes {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              preview
            }
          }
        }
      }
    `);
    return data.allMarkdownRemark.nodes.slice(start, end)

};
const blogCards = (data) => {
    return (
        <Gallery hasGutter maxWidths={{default: '400px'}}>
            {
                data.map(({frontmatter, fields}) => (
                    <ContentCard title={frontmatter.title} body={frontmatter.preview} link={fields.slug} imageUrl={placeholderImage}/>
                ))
            }
        </Gallery>
    )
}

const blogLinks = (data) => {
    return (
        <Gallery hasGutter maxWidths={{default: '400px'}}>
            {
                data.map(({frontmatter, fields}) => (
                    <GalleryItem>
                        <Flex flexWrap={{default: 'nowrap'}} direction={{default:'row'}} justifyContent={{xl: 'justifyContentFlexStart', md:'justifyContentFlexEnd'}}>
                            <FlexItem>
                                <p>{frontmatter.title}</p>
                            </FlexItem>
                            <FlexItem>
                                <Button isInline iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={fields.slug} />}>
                                        {frontmatter.date}
                                </Button>
                            </FlexItem>
                        </Flex>
                    </GalleryItem>
                ))
            }
        </Gallery>
    )
}

export const FeaturedBlogs = ({}) => {
    return (
        <Stack hasGutter>
            <StackItem>
                <Title className='pf-u-text-align-center' headingLevel={'h3'} size='3xl'>Whats New</Title>
            </StackItem>
            <StackItem>
                {blogCards(getLatestBlog(0,2))}
            </StackItem>
            <StackItem>
                {blogLinks(getLatestBlog(2, 12))}
            </StackItem>
        </Stack>
    )
}