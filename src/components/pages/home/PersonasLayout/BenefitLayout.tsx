import { Stack, StackItem, Title, Text, Button, Flex, FlexItem } from "@patternfly/react-core"
import { Link } from "gatsby"
import React from "react"
import {ArrowRightIcon} from '@patternfly/react-icons';
import { FeatureCard, FeatureCardProps } from "./FeatureCard";

export type BenefitLayoutProps = {
    title: string
    body: React.ReactNode
    learnMoreUrl?: string
    imageUrl?: string
    features?: FeatureCardProps[]
}

export const BenefitLayout = ({title, body, learnMoreUrl, imageUrl, features=[]}: BenefitLayoutProps) => {
    return (
        <Stack hasGutter>
            <StackItem>
                <Flex direction={{sm: "row", default: "columnReverse"}} flexWrap={{default: "nowrap"}} alignItems={{sm: "alignItemsFlexStart", default: "alignItemsCenter"}}>
                    <FlexItem className='pf-u-w-75'>
                        <Title headingLevel="h3" size="2xl">{title}</Title>
                        <Text component="p">{body}</Text>
                        <Button isInline icon={<ArrowRightIcon />} iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={learnMoreUrl} />}>
                            Learn More
                        </Button>
                    </FlexItem>
                    <FlexItem>
                        <img src={imageUrl} className="rounded shadow"/>
                    </FlexItem>
                </Flex>
            </StackItem>
            <StackItem>
                <Flex direction={{sm: "row", default: "columnReverse"}} flexWrap={{default: "nowrap"}} alignItems={{sm: "alignItemsFlexStart", default: "alignItemsCenter"}}>
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