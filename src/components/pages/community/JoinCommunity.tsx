import * as React from "react";
import {
  Button,
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Text,
  TextVariants,
  Title,
  TitleSizes,
} from "@patternfly/react-core";
import GithubIcon from "@patternfly/react-icons/dist/esm/icons/github-icon";
import SlackIcon from "@patternfly/react-icons/dist/esm/icons/slack-icon";

export const JoinCommunity: React.FC = () => {
  return (
    <Stack>
      <StackItem>
        <Flex
          className="pf-u-text-align-center"
          justifyContent={{ default: "justifyContentCenter" }}
        >
          <FlexItem>
            <Title size={TitleSizes["4xl"]} headingLevel="h2">
              Join the Open Data Hub community
            </Title>
          </FlexItem>
          <FlexItem>
            <Text component={TextVariants.p}>
              Collaborating with a community is about more than developing code.
              Collaboration is the freedom to ask questions and offer
              improvements—that's the open source way.
            </Text>
            <Button
              title="Source code"
              component="a"
              icon={<GithubIcon />}
              href="https://github.com/opendatahub-io"
              className="pf-u-mr-md"
            >
              Source code
            </Button>
            <Button
              title="Click to join our workspace on Slack"
              icon={<SlackIcon />}
              component="a"
              href="https://join.slack.com/t/odh-io/shared_invite/zt-13hp18gxj-Yb34PfQyP9GDmKMU7AkVYw"
            >
              Join us on Slack
            </Button>
          </FlexItem>
        </Flex>
      </StackItem>
    </Stack>
  );
};
