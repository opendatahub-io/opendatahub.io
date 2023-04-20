import { Title, Text, Button, Flex, FlexItem, StackItem, Stack } from "@patternfly/react-core"
import { Link } from "gatsby"
import React from "react"
import { ArrowRightIcon } from '@patternfly/react-icons';
import { FeatureCard, FeatureCardProps } from "./FeatureCard";

export enum ImageSizeEnum {
    sm = 100,
    md = 75,
    lg = 50,
    xl = 25
}

export type PlainImageCardProps = {
    title: string
    body: React.ReactNode
    link?: string
    imageUrl?: string
    imageSize?: ImageSizeEnum
    features?: FeatureCardProps[]
}


export const PlainImageCard = ({ title, body, link, imageUrl, imageSize = ImageSizeEnum.sm, features = [] }: PlainImageCardProps) => {
    return (
        <Stack>
            <StackItem>
                <Flex direction={{ sm: "row", default: "columnReverse" }} flexWrap={{ default: "nowrap" }} alignItems={{ sm: "alignItemsFlexStart" }}>
                    <FlexItem className={`pf-u-w-${imageSize}-on-sm`}>
                        <Title headingLevel="h3" size="2xl">{title}</Title>
                        <Text component="p">{body}</Text>
                        {link && (
                            <Button isInline icon={<ArrowRightIcon />} iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={link} />}>
                                Learn More
                            </Button>
                        )}
                    </FlexItem>
                    <FlexItem>
                        <img src={imageUrl} className="rounded" />
                    </FlexItem>
                </Flex>
            </StackItem>

            <StackItem>
                <Flex direction={{ sm: "row", default: "columnReverse" }} flexWrap={{ default: "nowrap" }} alignItems={{ sm: "alignItemsFlexStart", default: "alignItemsCenter" }}>
                    {features.map((feature) => (
                        <FlexItem key={feature.title}>
                            <FeatureCard {...feature} />
                        </FlexItem>
                    ))}
                </Flex>
            </StackItem>
        </Stack>
    )
}