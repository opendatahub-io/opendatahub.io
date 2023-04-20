import React from 'react'
import { GeometryBackgroundInv } from '../../shared/GeometryBackgroundInv'
import { Gallery, GalleryItem, PageSection, PageSectionVariants, Stack, StackItem, Title } from '@patternfly/react-core'
import { Button, Flex, FlexItem, Text, TextVariants, TitleSizes } from '@patternfly/react-core'
import { Link } from "gatsby"

export const CommunityDetails = ({}) => {
    return (
        <GeometryBackgroundInv color='#EEEEEE'>
            <PageSection
                isCenterAligned
                isWidthLimited
                padding={{ default: "padding" }}
                variant={PageSectionVariants.light}
                style={{ backgroundColor: "transparent" }}
            >   
                <Flex className='pf-u-text-align-center' style={{marginBottom: "3rem"}} justifyContent={{ default: "justifyContentCenter" }}>
                    <FlexItem>
                        <Title className='pf-u-text-align-center' headingLevel={'h3'} size='3xl'>Join the Open Data Hub community</Title>
                    </FlexItem>
                    <FlexItem>
                        <Text component={TextVariants.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, hybrid cloud tempor inc.Lorem ipsum dolor sit amet, consectetur adipiscin
                        </Text>
                    </FlexItem>
                </Flex>
                
                <Gallery hasGutter minWidths={{ default: '400px'}}>
                    <GalleryItem>
                        <Stack>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Discussions</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Join the discussions about Open Data Hub
                                </Text>
                            </StackItem>
                            <StackItem>
                                <Button isInline iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={"https://join.slack.com/t/odh-io/shared_invite/zt-13hp18gxj-Yb34PfQyP9GDmKMU7AkVYw"} />}>
                                    JOIN OUR WORKSPACE ON SLACK
                                </Button>
                            </StackItem>
                        </Stack>
                    </GalleryItem>
                    <GalleryItem>
                        <Stack>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Meetings</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Community meetings for Open Data Hub are conducted regularly
                                </Text>
                            </StackItem>
                            <StackItem>
                                <Button isInline iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={"https://github.com/opendatahub-io/opendatahub-community"} />}>
                                    OPEN DATA HUB COMMUNITY REPO
                                </Button>
                            </StackItem>
                            <StackItem>
                                <Button isInline iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={"https://calendar.google.com/calendar/u/0/embed?src=opendatahub.community@gmail.com&ctz=America/New_York"} />}>
                                    GOOGLE CALENDAR
                                </Button>
                            </StackItem>
                        </Stack>
                    </GalleryItem>
                    <GalleryItem>
                        <Stack>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Source Code</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Browse the source code for various projects that form the Open Data Hub
                                </Text>
                            </StackItem>
                            <StackItem>
                                <Button isInline iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={"https://github.com/opendatahub-io"} />}>
                                    GITHUB ORIGINATION
                                </Button>
                            </StackItem>
                        </Stack>
                    </GalleryItem>
                    <GalleryItem>
                        <Stack>
                            <StackItem>
                                <Title size={TitleSizes["xl"]} headingLevel='h3'>Mailing List</Title>
                            </StackItem>
                            <StackItem>
                                <Text component={TextVariants.p}>
                                    Stay up to date with the latest announcements and discussion about the Open Data Hub
                                </Text>
                                <Button isInline iconPosition="right" variant='link' component={(props: any) => <Link {...props} to={"https://lists.opendatahub.io/admin/lists/"} />}>
                                    SUBSCRIBE TO THE MAILING LIST
                                </Button>
                            </StackItem>
                        </Stack>     
                    </GalleryItem>
                </Gallery>
            </PageSection>
        </GeometryBackgroundInv>
    )
}