import { Flex, FlexItem, PageSection } from "@patternfly/react-core";
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
      <Flex spaceItems={{ default: "spaceItems4xl" }} direction={{ default: "column" }}>
        <FlexItem>
          <PageSection
            isCenterAligned
            isWidthLimited
            padding={{ default: "padding" }}
          >
            <CompetitiveAdvantage />
          </PageSection>
        </FlexItem>
        <FlexItem>
          <PageSection
            isCenterAligned
            isWidthLimited
            padding={{ default: "padding" }}
          >
            <PersonasLayout />
          </PageSection>
        </FlexItem>
        <FlexItem>
          <CaseStudies />
        </FlexItem>
        <FlexItem>
          <PageSection
            isCenterAligned
            isWidthLimited
            padding={{ default: "padding" }}
          >
            <ArchitectureMap />
          </PageSection>
        </FlexItem>
        <FlexItem>
          <CommunityDetails />
        </FlexItem>
        <FlexItem>
          <PageSection
            isCenterAligned
            isWidthLimited
            padding={{ default: "padding" }}
          >
            <FeaturedBlogs />
          </PageSection>
        </FlexItem>
        <FlexItem>
          <Footer />
        </FlexItem>
      </Flex>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
