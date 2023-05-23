import * as React from "react";
import {
  Button,
  Text,
  TextVariants,
  Title,
  TitleSizes,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import { Link } from "gatsby";
import { ExternalLinkAltIcon } from "@patternfly/react-icons/dist/esm/icons/external-link-alt-icon";

export const CommunityMeetings: React.FC = () => {
  return (
    <Grid hasGutter>
      <GridItem lg={4} sm={6}>
        <Title size={TitleSizes["2xl"]} headingLevel="h2">
          Meetings
        </Title>
        <Text component={TextVariants.p}>
          Community meetings for Open Data Hub are conducted regularly. Get the
          meeting information and find out more on the Open Data Hub community
          Repo. Meetings are scheduled on Google calendar
        </Text>
        <GridItem>
          <Button
            className="pf-u-font-size-sm"
            variant="link"
            isInline
            component="a"
            href="https://github.com/opendatahub-io/opendatahub-community"
            icon={<ExternalLinkAltIcon size="sm" />}
          >
            Open Data Hub community repo
          </Button>
        </GridItem>
        <Button
          className="pf-u-font-size-sm"
          variant="link"
          isInline
          component="a"
          href="https://calendar.google.com/calendar/u/0/embed?src=opendatahub.community@gmail.com&ctz=America/New_York"
          icon={<ExternalLinkAltIcon size="sm" />}
        >
          Google calendar
        </Button>
      </GridItem>
      <GridItem lg={8} sm={6}>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=opendatahub.community%40gmail.com&ctz=Asia%2FKolkata"
          style={{ border: 0, minHeight: "24rem" }}
        ></iframe>
      </GridItem>
    </Grid>
  );
};
