import {
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Title,
  ToggleGroup,
  ToggleGroupItem,
} from "@patternfly/react-core";
import React from "react";

import logo from "../../../../content/assets/img/logos/datahub_mark_color-blkbg.png";
import placeholderImage from "../../../../content/assets/img/placeholder.svg";
import { PlainImageCard } from "../../../shared/PlainImageCard";
import { PlainImageCardProps } from "../../../shared/PlainImageCard";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";
import "./PersonasLayout.css";

type PersonaBenefits = {
  name: string;
  benefits: (PlainImageCardProps & {
    features: FeatureCardProps[];
  })[];
}[];
const data: PersonaBenefits = [
  {
    name: "Data Scientist",
    benefits: [
      {
        title: "Data Catalog",
        body: "Find, understand and trust your data",
        link: "/docs/data-catalog",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Data Lineage",
            body: "Understand how data is used and transformed",
            imageUrl: logo,
          },
          {
            title: "Data Quality",
            body: "Discover data issues and improve data quality",
            imageUrl: logo,
          },
          {
            title: "Schema Discovery",
            body: "Discover data schemas and relationships",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "DevOps",
        body: "Build, deploy and monitor data pipelines",
        link: "/docs/data-pipelines",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Data Pipelines",
            body: "Build, deploy and monitor data pipelines",
            imageUrl: logo,
          },
          {
            title: "Data Quality",
            body: "Discover data issues and improve data quality",
            imageUrl: logo,
          },
          {
            title: "Schema Discovery",
            body: "Discover data schemas and relationships",
            imageUrl: logo,
          },
        ],
      },
    ],
  },
  {
    name: "ML Engineer",
    benefits: [
      {
        title: "Data Catalog",
        body: "Find, understand and trust your data",
        link: "/docs/data-catalog",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Data Lineage",
            body: "Understand how data is used and transformed",
            imageUrl: logo,
          },
          {
            title: "Data Quality",
            body: "Discover data issues and improve data quality",
            imageUrl: logo,
          },
          {
            title: "Schema Discovery",
            body: "Discover data schemas and relationships",
            imageUrl: logo,
          },
        ],
      },
    ],
  },
];

export const PersonasLayout = () => {
  const [isSelected, setIsSelected] = React.useState(data[0].name);
  const handleItemClick = (
    isSelected: boolean,
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent
  ) => {
    const id = event.currentTarget.id;
    setIsSelected(id);
  };

  return (
    <Stack className="personas-layout" hasGutter>
      <StackItem>
        <Flex
          direction={{ default: "column" }}
          alignItems={{ default: "alignItemsCenter" }}
        >
          <FlexItem>
            <Title
              className="pf-u-primary-color-100"
              headingLevel="h4"
              size="3xl"
            >
              <i>I am a</i>
            </Title>
          </FlexItem>
          <FlexItem>
            <ToggleGroup>
              {data.map((persona) => (
                <ToggleGroupItem
                  key={persona.name}
                  text={persona.name}
                  buttonId={persona.name}
                  isSelected={isSelected === persona.name}
                  onChange={handleItemClick}
                />
              ))}
            </ToggleGroup>
          </FlexItem>
        </Flex>
      </StackItem>
      {data.map(
        (persona) =>
          isSelected === persona.name && (
            <StackItem key={persona.name}>
              <Stack hasGutter>
                {persona.benefits.map((benefit) => (
                  <StackItem key={benefit.title}>
                    <Stack hasGutter>
                      <StackItem>
                        <PlainImageCard {...benefit} />
                      </StackItem>
                      <StackItem>
                        <Flex
                          direction={{ sm: "row", default: "columnReverse" }}
                          flexWrap={{ default: "nowrap" }}
                        >
                          {benefit.features.map((feature) => (
                            <FlexItem key={feature.title}>
                              <FeatureCard {...feature} />
                            </FlexItem>
                          ))}
                        </Flex>
                      </StackItem>
                    </Stack>
                  </StackItem>
                ))}
              </Stack>
            </StackItem>
          )
      )}
    </Stack>
  );
};
