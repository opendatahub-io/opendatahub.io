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

import { PlainImageCard, ContentCardList } from "../../../shared";
import { FeatureCard } from "./FeatureCard";
import "./PersonasLayout.css";
import { PERSONAS } from "../../../../const";


export const PersonasLayout = () => {
  const [isSelected, setIsSelected] = React.useState(PERSONAS[0].name);
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
              {PERSONAS.map((persona) => (
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
      {PERSONAS.map(
        (persona) =>
          isSelected === persona.name && (
            <StackItem key={persona.name}>
              <Stack hasGutter>
                {persona.benefits.map((benefit) => (
                  <StackItem key={benefit.title} className="pf-u-mt-3xl">
                    <Stack hasGutter>
                      <StackItem>
                        <PlainImageCard {...benefit} />
                      </StackItem>
                      <StackItem>
                        <ContentCardList>
                          {benefit.features.map((feature) => (
                            <FeatureCard {...feature} />
                          ))}
                        </ContentCardList>
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
