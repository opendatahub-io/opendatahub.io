import { Button, Flex, FlexItem, Stack, StackItem, Text, TextVariants, Title, TitleSizes } from '@patternfly/react-core'
import React from 'react'
import logo from "../../../images/logos/datahub_mark_color-blkbg.png"
import "./CompetitiveAdvantage.css"

type CompetitiveAdvantageProps = {
    enableIntroVideo?: boolean
}

export const CompetitiveAdvantage = ({ enableIntroVideo }: CompetitiveAdvantageProps = { enableIntroVideo: false }) => {
    return (
        <Stack>
            <StackItem className='pf-u-mx-auto pf-u-mb-4xl max-width-900'>
                <Flex direction={{ default: "columnReverse", md: "row" }} flexWrap={{default: "nowrap"}} alignItems={{md: "alignItemsCenter"}} spaceItems={{default: "spaceItems2xl", md: "spaceItems4xl"}}>
                    {enableIntroVideo && (
                        <FlexItem className='pf-u-w-50-on-md'>
                            <iframe
                            className='rounded'
                            src="https://www.youtube.com/embed/kdjd1wNK9Wc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />                          
                        </FlexItem>
                    )}
                    <FlexItem className={`${enableIntroVideo ? "pf-u-w-50-on-md" : ""}`}>
                        <Flex className='pf-u-text-align-center' justifyContent={{ default: "justifyContentCenter" }}>
                            <FlexItem>
                                <Title size={TitleSizes["3xl"]} headingLevel='h2'>What is Open Data Hub?</Title>
                            </FlexItem>
                            <FlexItem>
                                <Text component={TextVariants.p}>
                                    The Open Data Hub is a comprehensive collection of open source tools
                                    designed to facilitate the entire data science life cycle.
                                    The project was developed to take advantage of <Button className='inline-link-underline' component="a" href="https://kubernetes.io/" variant='link' isInline>Kubernetes</Button> running
                                    on the <Button className='inline-link-underline' component="a" href="https://www.redhat.com/en/technologies/cloud-computing/openshift" variant='link' isInline>Red Hat OpenShift Container Platform</Button>.
                                </Text>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </StackItem>
            <StackItem className='pf-u-mx-auto'>
                <Flex spacer={{ default: "spacerLg" }} direction={{ default: "column", md: "row" }} flexWrap={{ default: "nowrap" }}>
                    <FlexItem>
                        <Stack>
                            <StackItem>
                                <img src={logo} alt='Open Data Hub logo' className='icon' />
                            </StackItem>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Flexible</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='strong-text'>hybrid cloud</span> tempor inc.Lorem ipsum dolor sit amet, consectetur adipiscin
                                </Text>
                            </StackItem>
                        </Stack>
                    </FlexItem>
                    <FlexItem>
                        <Stack>
                            <StackItem>
                                <img src={logo} alt='Open Data Hub logo' className='icon' />
                            </StackItem>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Scalable</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='strong-text'>hybrid cloud</span> tempor inc.Lorem ipsum dolor sit amet, consectetur adipiscin
                                </Text>
                            </StackItem>
                        </Stack>
                    </FlexItem>
                    <FlexItem>
                        <Stack>
                            <StackItem>
                                <img src={logo} alt='Open Data Hub logo' className='icon' />
                            </StackItem>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Deploy Anywhere</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='strong-text'>hybrid cloud</span> tempor inc.Lorem ipsum dolor sit amet, consectetur adipiscin
                                </Text>
                            </StackItem>
                        </Stack>
                    </FlexItem>
                </Flex>
            </StackItem>
        </Stack>
    )
}