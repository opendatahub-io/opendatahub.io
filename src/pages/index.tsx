import * as React from "react"
import '@patternfly/react-core/dist/styles/base.css';
import type { HeadFC, PageProps } from "gatsby"
import { Header, CompetitiveAdvantage, Personas, CaseStudies, ArchitectureMap, CommunityDetails, FeaturedBlogs } from "../components/pages/home"
import { Footer, Navbar } from "../components/shared"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <CompetitiveAdvantage />
      <Personas />
      <CaseStudies />
      <ArchitectureMap />
      <CommunityDetails />
      <FeaturedBlogs />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
