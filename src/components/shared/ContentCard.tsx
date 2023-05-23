import {
  Card,
  CardBody,
  CardTitle,
  Chip,
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Text,
  Title,
  CardFooter,
  Button,
  CardProps,
} from "@patternfly/react-core";
import { navigate } from "gatsby";
import React from "react";
import ArrowRightIcon from "@patternfly/react-icons/dist/esm/icons/arrow-right-icon";
import "./ContentCard.css";

type ContentCardProps = CardProps & {
  title?: string | null;
  body?: React.ReactNode;
  imageUrl?: string;
  subTitle?: string | null;
  link?: string | null;
  chips?: string[];
  className?: string;
  hasMoreButton?: boolean;
  buttonText?: string;
  handleChipClick?: (chip: string) => void;
};

export const ContentCard = ({
  title,
  body,
  imageUrl,
  subTitle,
  link,
  chips = [],
  className = "",
  hasMoreButton,
  buttonText,
  handleChipClick = () => undefined,
  ...props
}: ContentCardProps) => {
  return (
    <Card
      onClick={() => link && navigate(link)}
      isSelectable={!!link}
      isCompact
      isFlat
      isRounded
      isFullHeight
      className={`custom-content-card ${className}`}
      {...props}
    >
      <CardTitle>
        {subTitle && (
          <StackItem>
            <Title className="subtitle" headingLevel="h3" size="lg">
              {subTitle?.toUpperCase()}
            </Title>
          </StackItem>
        )}
      </CardTitle>
      <CardBody>
        <Flex
          justifyContent={{ default: "justifyContentSpaceBetween" }}
          alignItems={{ default: "alignItemsFlexStart" }}
          flexWrap={{ default: "nowrap" }}
        >
          {(title || body) && (
            <FlexItem>
              <Stack hasGutter>
                {title && (
                  <StackItem>
                    <Title headingLevel="h3" size="2xl">
                      {title}
                    </Title>
                  </StackItem>
                )}
                {body && (
                  <StackItem>
                    {body}
                  </StackItem>
                )}
              </Stack>
            </FlexItem>
          )}
          {imageUrl && (
            <FlexItem className={title || body ? "pf-u-w-50" : ""}>
              <img src={imageUrl} className="rounded" />
            </FlexItem>
          )}
        </Flex>
      </CardBody>
      {(hasMoreButton || chips.length > 0) && (
        <CardFooter>
          <Stack hasGutter>
            {chips.length > 0 && (
              <StackItem>
                <Flex style={{ marginTop: "1rem" }}>
                  {chips &&
                    chips.map((chip) => (
                      <FlexItem key={chip}>
                        <Chip component="button" isOverflowChip onClick={(event) => {
                          handleChipClick(chip)
                          event.stopPropagation()
                        }}>{chip}</Chip>
                      </FlexItem>
                    ))}
                </Flex>
              </StackItem>
            )}
            {hasMoreButton && (
              <StackItem>
                <Button variant="primary">
                  {buttonText} <ArrowRightIcon />
                </Button>
              </StackItem>
            )}
          </Stack>
        </CardFooter>
      )}
    </Card>
  );
};
