import type { PageProps } from "gatsby";
import * as React from "react";
import { Footer, Layout, SectionList } from "../components/shared";

import {
  JoinCommunity,
  CommunityMeetings,
  UpcomingEvents,
  MailingList,
  FeaturedVideos,
  FeaturedBlogs,
} from "../components/pages/community";

const CommunityPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SectionList
        sections={[
          { component: <JoinCommunity /> },
          { component: <CommunityMeetings /> },
          { component: <UpcomingEvents /> },
          {
            component: <MailingList />,
            props: {
              className: "pf-u-py-xl",
              style: {
                backgroundImage: `url("https://4682592.fs1.hubspotusercontent-na1.net/hubfs/4682592/images/hp%200922/join-the-community-bg.svg")`,
              }
            }
          },
          { component: <FeaturedVideos /> },
          { component: <FeaturedBlogs /> },
          {
            component: <Footer />,
            props: {
              isWidthLimited: false,
              padding: { default: "noPadding" }
            },
          },
        ]}
      />
    </Layout>
  );
};

export default CommunityPage;
