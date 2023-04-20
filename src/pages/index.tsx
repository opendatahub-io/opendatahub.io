import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header, CompetitiveAdvantage, CaseStudies, ArchitectureMap, CommunityDetails, FeaturedBlogs, PersonasLayout } from "../components/pages/home"
import { Footer, Layout } from "../components/shared"
import { PageSection} from "@patternfly/react-core"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout location='/'>
      <PageSection isCenterAligned isWidthLimited padding={{ default: "padding" }}>
        <Header />
      </PageSection>
      <PageSection isCenterAligned isWidthLimited padding={{ default: "padding" }}>
        <CompetitiveAdvantage />
      </PageSection>
      <PageSection isCenterAligned isWidthLimited padding={{ default: "padding" }}>
        <PersonasLayout />
      </PageSection>
      <CaseStudies />
      <PageSection isCenterAligned isWidthLimited padding={{ default: "padding" }}>
        <ArchitectureMap />
      </PageSection>
        <CommunityDetails />
      <PageSection isCenterAligned isWidthLimited padding={{ default: "padding" }}>
        <FeaturedBlogs />
      </PageSection>
      <PageSection isCenterAligned isWidthLimited padding={{ default: "padding" }}>
        <Footer />
      </PageSection>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
