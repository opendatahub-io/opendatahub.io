import { Card, Title, CardBody, Text, Chip, StackItem, Stack, Flex, FlexItem, CardTitle } from "@patternfly/react-core"
import React from "react"
import "./ContentCard.css"
import { navigate } from "gatsby"


type ContentCardProps = {
    title?: string
    body?: React.ReactNode
    imageUrl?: string
    subTitle?: string
    link?: string
    chips?: string[]
    className?: string
}

export const ContentCard = ({ title, body, imageUrl, subTitle, link, chips = [], className = "" }: ContentCardProps) => {
    return (
        <Card onClick={() => link && navigate(link)} isSelectable={!!link} isCompact isFlat isRounded className={`custom-content-card ${className}`}>
            <CardTitle>
                {subTitle && (
                    <StackItem>
                        <Title className="subtitle" headingLevel="h3" size="lg">{subTitle?.toUpperCase()}</Title>
                    </StackItem>
                )}
            </CardTitle>
            <CardBody>
                <Flex justifyContent={{ default: "justifyContentSpaceBetween" }} alignItems={{ default: "alignItemsFlexStart" }} flexWrap={{ default: "nowrap" }} >
                    {(title || body) && (
                        <FlexItem>
                            <Stack hasGutter>
                                {title && (
                                    <StackItem>
                                        <Title headingLevel="h3" size="2xl">{title}</Title>
                                    </StackItem>
                                )}
                                {body && (
                                    <StackItem>
                                        <Text>{body}</Text>
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
                {chips.length > 0 && (
                    <Flex style={{marginTop: "1rem"}}>
                        {chips && chips.map((chip) => (
                            <FlexItem key={chip}>
                                <Chip isReadOnly>{chip}</Chip>
                            </FlexItem>
                        ))}
                    </Flex>
                )}
            </CardBody>
        </Card>
    )
}