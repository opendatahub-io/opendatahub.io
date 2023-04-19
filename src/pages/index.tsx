import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header, CompetitiveAdvantage, CaseStudies, ArchitectureMap, CommunityDetails, FeaturedBlogs, PersonasLayout } from "../components/pages/home"
import { Footer, Layout } from "../components/shared"
import { Stack, StackItem } from "@patternfly/react-core"
import "../styles/home.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout location='/'>
      <Stack hasGutter className="section-layout">
        <StackItem>
          <Header />
        </StackItem>
        <StackItem>
          <CompetitiveAdvantage />
        </StackItem>
        <StackItem>
          <PersonasLayout />
        </StackItem>
        <StackItem>
          <CaseStudies />
        </StackItem>
        <StackItem>
          <ArchitectureMap />
        </StackItem>
        <StackItem>
          <CommunityDetails />
        </StackItem>
        <StackItem>
          <FeaturedBlogs />
        </StackItem>
        <StackItem>
          <Footer />
        </StackItem>
      </Stack>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
