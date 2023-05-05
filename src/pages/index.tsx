import { PageSection } from "@patternfly/react-core";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import {
  ArchitectureMap,
  CaseStudies,
  CommunityDetails,
  CompetitiveAdvantage,
  FeaturedBlogs,
  Header,
  PersonasLayout,
} from "../components/pages/home";
import { Footer, Layout } from "../components/shared";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout useTransparentNavbar>
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <Header />
      </PageSection>
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <CompetitiveAdvantage />
      </PageSection>
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <PersonasLayout />
      </PageSection>
      <CaseStudies />
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <ArchitectureMap />
      </PageSection>
      <CommunityDetails />
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <FeaturedBlogs />
      </PageSection>
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <Footer />
      </PageSection>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
