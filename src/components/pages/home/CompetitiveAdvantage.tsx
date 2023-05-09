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
import React from "react";

import logo from "../../../content/assets/img/logos/datahub_mark_color-blkbg.png";
import cloudUploadIcon from "../../../content/assets/img/cloud_upload_icon.svg";
import hybridCloud from "../../../content/assets/img/hybrid_cloud_icon.svg";

import "./CompetitiveAdvantage.css";

type CompetitiveAdvantageProps = {
  enableIntroVideo?: boolean;
};

export const CompetitiveAdvantage = (
  { enableIntroVideo }: CompetitiveAdvantageProps = { enableIntroVideo: false }
) => {
  return (
    <Stack>
      <StackItem className="pf-u-mx-auto pf-u-mb-4xl max-width-900">
        <Flex
          direction={{ default: "columnReverse", md: "row" }}
          flexWrap={{ default: "nowrap" }}
          alignItems={{ md: "alignItemsCenter" }}
          spaceItems={{ default: "spaceItems2xl", md: "spaceItems4xl" }}
        >
          {enableIntroVideo && (
            <FlexItem className="pf-u-w-50-on-md">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/kdjd1wNK9Wc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </FlexItem>
          )}
          <FlexItem className={`${enableIntroVideo ? "pf-u-w-50-on-md" : ""}`}>
            <Flex
              className="pf-u-text-align-center"
              justifyContent={{ default: "justifyContentCenter" }}
            >
              <FlexItem>
                <Title size={TitleSizes["3xl"]} headingLevel="h2">
                  What is Open Data Hub?
                </Title>
              </FlexItem>
              <FlexItem>
                <Text component={TextVariants.p}>
                  Open Data Hub is an open source AI platform designed for the hybrid cloud.
                  The community seeks to bridge the gap between application developers,
                  data stewards and data scientists by blending the leading open source AI
                  tools with a unifying and intuitive user experience. Open Data Hub reduces
                  the time it takes to infuse applications, services or business operations
                  with AI. With
                  <Button
                    className="inline-link-underline"
                    component="a"
                    href="https://kubernetes.io/"
                    variant="link"
                    isInline
                  >
                    Kubernetes
                  </Button>
                  {", "}
                  <Button
                    className="inline-link-underline"
                    component="a"
                    href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
                    variant="link"
                    isInline
                  >
                    OpenShift
                  </Button>
                  {" and "}
                  <Button
                    className="inline-link-underline"
                    component="a"
                    href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"
                    variant="link"
                    isInline
                  >
                    operators
                  </Button>
                  {" "}at its core, Open Data Hub
                  also simplifies AI application deployments at scale to private data centers,
                  cloud providers, edge devices and anywhere in between.
                </Text>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem className="pf-u-mx-auto">
        <Flex
          spacer={{ default: "spacerLg" }}
          direction={{ default: "column", md: "row" }}
          flexWrap={{ default: "nowrap" }}
        >
          <FlexItem>
            <Stack>
              <StackItem>
                <img src={hybridCloud} alt="hybrid cloud icon" className="icon" />
              </StackItem>
              <StackItem>
                <Title size={TitleSizes["xl"]} headingLevel="h3">
                  Hybrid Cloud Ready
                </Title>
              </StackItem>
              <StackItem>
                <Text component={TextVariants.p}>
                  Simplify the lifecycle management of your <span className="strong-text">machine learning models</span> and AI
                  applications across private data centers, public cloud providers, edge devices and more.
                </Text>
              </StackItem>
            </Stack>
          </FlexItem>
          <FlexItem>
            <Stack>
              <StackItem>
                <img src={cloudUploadIcon} alt="cloud upload icon" className="icon" />
              </StackItem>
              <StackItem>
                <Title size={TitleSizes["xl"]} headingLevel="h3">
                  Fast Deployment
                </Title>
              </StackItem>
              <StackItem>
                <Text component={TextVariants.p}>
                  With the power of Kubernetes operators, get up and running in minutes on any OpenShift cluster
                  running in the <span className="strong-text">hybrid cloud</span>. Customize your deployment with additional tools using the extensible plug-and-play framework.

                </Text>
              </StackItem>
            </Stack>
          </FlexItem>
          <FlexItem>
            <Stack>
              <StackItem>
                <img src={logo} alt="Open Data Hub logo" className="icon" />
              </StackItem>
              <StackItem>
                <Title size={TitleSizes["xl"]} headingLevel="h3">
                  Enhanced User Experience
                </Title>
              </StackItem>
              <StackItem>
                <Text component={TextVariants.p}>
                  An improved user experience allows application developers and data scientists to orchestrate workflows,
                  <span className="strong-text">train and serve models</span>, and build AI-infused applications faster than ever.
                </Text>
              </StackItem>
            </Stack>
          </FlexItem>
        </Flex>
      </StackItem>
    </Stack>
  );
};
