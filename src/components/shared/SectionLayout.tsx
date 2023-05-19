import React from "react";

import { Bullseye, Button, Flex, FlexItem, Stack, StackItem, Title, TitleSizes, Text, ButtonProps } from "@patternfly/react-core";
import { Link } from "gatsby";

type SectionLayoutProps = {
    title: string;
    description?: React.ReactNode;
    actionTitle?: string;
    actionLink?: string;
    children?: React.ReactNode;
    buttonProps?: ButtonProps & React.RefAttributes<any>
};

export const SectionLayout = ({ title, description, children, actionTitle, actionLink, buttonProps = {} }: SectionLayoutProps) => {
    return (
        <Stack>
            <StackItem className="pf-u-mb-xl">
                <Flex
                    className="pf-u-text-align-center"
                    justifyContent={{ default: "justifyContentCenter" }}
                >
                    <FlexItem>
                        <Title size={TitleSizes["3xl"]} headingLevel="h2">
                            {title}
                        </Title>
                        <Text>
                            {description}
                        </Text>
                    </FlexItem>
                </Flex>

            </StackItem>
            {!!children && (
                <StackItem className="pf-u-mb-lg">
                    {children}
                </StackItem>
            )}
            {!!actionLink && (
                <StackItem>
                    <Bullseye>
                        <Button
                            variant="link"
                            component={(props: any) => <Link {...props} to={actionLink} />}
                            isInline
                            {...buttonProps}
                        >
                            {actionTitle ?? "More"}
                        </Button>
                    </Bullseye>
                </StackItem>
            )}
        </Stack>
    );
}