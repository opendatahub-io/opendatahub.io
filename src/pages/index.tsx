import { PageSection } from "@patternfly/react-core";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import {
  ArchitectureMap,
  CommunityDetails,
  CompetitiveAdvantage,
  FeaturedContent,
  Header,
  PersonasLayout,
} from "../components/pages/home";
import { Footer, Layout, SectionList } from "../components/shared";

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
      <SectionList
        sections={[
          { component: <CompetitiveAdvantage /> },
          { component: <ArchitectureMap /> },
          {
            component: <CommunityDetails />,
            props: {
              className: "pf-u-py-xl",
              style: {
                backgroundColor: "#eeeeee",
              },
            },
          },
          { component: <FeaturedContent /> },
          {
            component: <Footer />,
            props: {
              isWidthLimited: false,
              padding: { default: "noPadding" },
            },
          },
        ]}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
