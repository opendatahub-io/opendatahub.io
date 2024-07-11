import {
  Flex,
  FlexItem,
  PageSection,
  PageSectionVariants,
  Stack,
  StackItem,
} from "@patternfly/react-core";
import { Link } from "gatsby";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <PageSection
      isCenterAligned
      isWidthLimited
      className="footer-section"
      padding={{ default: "padding" }}
      variant={PageSectionVariants.dark}
      style={{ backgroundColor: "transparent" }}
    >
      <Flex
        className="pf-u-my-lg"
        direction={{ default: "column", sm: "row" }}
        justifyContent={{ default: "justifyContentCenter" }}
        alignItems={{ default: "alignItemsFlexStart" }}
        spaceItems={{ sm: "spaceItems4xl", default: "spaceItemsLg" }}
      >
        <FlexItem>
          <Stack>
            <StackItem className="pf-u-mb-sm">
              <b>QUICK LINKS</b>
            </StackItem>
            <StackItem>
              <Link to="/docs/quick-installation/">Installation</Link>
            </StackItem>
            <StackItem>
              <Link to="/docs/getting-started-with-open-data-hub">
                Get Started
              </Link>
            </StackItem>
            <StackItem>
              <Link to="/docs/release-notes">Release Notes</Link>
            </StackItem>
            <StackItem>
              <Link to="/blog">Blog</Link>
            </StackItem>
            <StackItem>
              <Link to="/community">Community</Link>
            </StackItem>
          </Stack>
        </FlexItem>
        <FlexItem>
          <Stack>
            <StackItem className="pf-u-mb-sm">
              <b>STAY IN TOUCH</b>
            </StackItem>
            <StackItem>
              <a
                href="https://github.com/opendatahub-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </StackItem>
            <StackItem>
              <a
                href="https://odh-io.slack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slack
              </a>
            </StackItem>
            <StackItem>
              <a
                href="https://calendar.google.com/calendar/u/0/embed?src=opendatahub.community@gmail.com&ctz=America/New_York"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meetings Calendar
              </a>
            </StackItem>
            <StackItem>
              <a
                href="https://lists.opendatahub.io/admin/lists/announcements.lists.opendatahub.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mailing List
              </a>
            </StackItem>
          </Stack>
        </FlexItem>
      </Flex>
    </PageSection>
  );
};
