import type { PageProps } from "gatsby";
import * as React from "react";
import { Footer, Layout } from "../components/shared";
import { PageSection } from "@patternfly/react-core";

import {
  JoinCommunity,
  CommunityMeetins,
  UpcomingEvents,
  MailingList,
  FeaturedVideos,
  FeaturedBlogs,
} from "../components/pages/community";

const CommunityPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageSection variant="light">
        <JoinCommunity />
      </PageSection>
      <PageSection variant="light">
        <CommunityMeetins />
      </PageSection>
      <PageSection variant="light">
        <UpcomingEvents />
      </PageSection>
      <PageSection
        variant="light"
        style={{
          backgroundImage: `url("https://4682592.fs1.hubspotusercontent-na1.net/hubfs/4682592/images/hp%200922/join-the-community-bg.svg")`,
        }}
      >
        <MailingList />
      </PageSection>
      <PageSection variant="light">
        <FeaturedVideos />
      </PageSection>
      <PageSection variant="light">
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

export default CommunityPage;
