import { Link } from "gatsby";
import * as React from "react";
import {
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Title,
  TitleSizes,
  Text,
  TextVariants,
  Button,
} from "@patternfly/react-core";

export const MailingList: React.FC = () => {
  return (
    <Stack>
      <StackItem className="pf-u-mx-auto pf-u-mt-3xl pf-u-mb-3xl max-width-900">
        <Flex
          className="pf-u-text-align-center"
          justifyContent={{ default: "justifyContentCenter" }}
        >
          <FlexItem>
            <Title size={TitleSizes["4xl"]} headingLevel="h2">
              Join community mailing list
            </Title>
            <Text component={TextVariants.p}>
              Stay up to date with the latest announcements and discussion about
              the Open Data Hub.
            </Text>

            <Button
              className="pf-c-button pf-m-primary pf-m-display-lg"
              type="button"
              component={(props: any) => (
                <Link
                  {...props}
                  to={"https://lists.opendatahub.io/admin/lists/"}
                />
              )}
              isInline
            >
              Join community
            </Button>
          </FlexItem>
        </Flex>
      </StackItem>
    </Stack>
  );
};
