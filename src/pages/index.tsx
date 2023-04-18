import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header, CompetitiveAdvantage, Personas, CaseStudies, ArchitectureMap, CommunityDetails, FeaturedBlogs } from "../components/pages/home"
import { Footer, Layout } from "../components/shared"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout location='/'>
      <Header />
      <CompetitiveAdvantage />
      <Personas />
      <CaseStudies />
      <ArchitectureMap />
      <CommunityDetails />
      <FeaturedBlogs />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
