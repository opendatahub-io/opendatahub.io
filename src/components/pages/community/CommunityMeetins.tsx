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

export const CommunityMeetins: React.FC = () => {
  return (
    <Grid hasGutter className="pf-u-mx-auto pf-u-mb-3xl max-width-900">
      <GridItem lg={4} sm={6}>
        <Title size={TitleSizes["2xl"]} headingLevel="h2">
          Meetings
        </Title>
        <Text component={TextVariants.p}>
          Community meetings for Open Data Hub are conducted regularly. Get the
          meeting information and find out more on the Open Data Hub Community
          Repo. Meetings are scheduled on Google Calendar
        </Text>
        <GridItem>
          <Button
            className="pf-u-font-size-sm"
            variant="link"
            isInline
            component={(props: any) => (
              <>
                <ExternalLinkAltIcon size="sm" className="pf-u-link-color" />{" "}
                <Link
                  {...props}
                  to={"https://github.com/opendatahub-io/opendatahub-community"}
                />
              </>
            )}
          >
            {`Open Data Hub Community repo`.toUpperCase()}
          </Button>
        </GridItem>
        <Button
          className="pf-u-font-size-sm"
          variant="link"
          isInline
          component={(props: any) => (
            <>
              <ExternalLinkAltIcon size="sm" className="pf-u-link-color" />{" "}
              <Link
                {...props}
                to={
                  "https://calendar.google.com/calendar/u/0/embed?src=opendatahub.community@gmail.com&ctz=America/New_York"
                }
              />
            </>
          )}
        >
          {`google calendar`.toUpperCase()}
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
