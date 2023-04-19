import React from 'react'
import { BenefitLayout } from './BenefitLayout'
import { Flex, FlexItem, Stack, StackItem, Title, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core'
import placeholderImage from "../../../../images/placeholder.svg"
import logo from '../../../../images/logos/datahub_mark_color-blkbg.png'
import "./PersonasLayout.css"

export const PersonasLayout = () => {
    const [isSelected, setIsSelected] = React.useState('data-scientist');
    const handleItemClick = (isSelected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
        const id = event.currentTarget.id;
        setIsSelected(id);
    }

    return (
        <Stack className='personas-layout' hasGutter>
            <StackItem>
                <Flex direction={{default: "column"}} alignItems={{default: "alignItemsCenter"}}>
                    <FlexItem>
                        <Title className='pf-u-primary-color-100' headingLevel='h4' size='xl'>I am a</Title>
                    </FlexItem>
                    <FlexItem>
                        <ToggleGroup>
                            <ToggleGroupItem
                                text="Data Scientist"
                                buttonId="data-scientist"
                                isSelected={isSelected === 'data-scientist'}
                                onChange={handleItemClick}
                            />
                            <ToggleGroupItem
                                text="ML Engineer"
                                buttonId="ml-engineer"
                                isSelected={isSelected === 'ml-engineer'}
                                onChange={handleItemClick}
                            />
                            <ToggleGroupItem
                                text="DevOps"
                                buttonId="devops"
                                isSelected={isSelected === 'devops'}
                                onChange={handleItemClick}
                            />
                        </ToggleGroup>
                    </FlexItem>

                </Flex>
            </StackItem>
            {isSelected === 'data-scientist' && (
                <>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 1"
                            body="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 3",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                }
                            ]}
                        />
                    </StackItem>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 2"
                            body="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                            ]}
                        />
                    </StackItem>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 3"
                            body="Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 3",
                                    body: "Lorem ipsum dolor sit amet,\
                                consectetur adipiscing elit, \
                                sed do eiusmod tempor incididun\
                                aliquip ex ea commodo consequat.\
                                Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                }
                            ]}
                        />
                    </StackItem>
                </>
            )}
            {isSelected === 'ml-engineer' && (
                <>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 4"
                            body="Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 3",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                }
                            ]}
                        />
                    </StackItem>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 4"
                            body="Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 2.1",
                                    body: "Lorem ipsum dolor sit amet,\
                                        consectetur adipiscing elit, \
                                        Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2.2",
                                    body: "Lorem ipsum dolor sit amet,\
                                        consectetur adipiscing elit",
                                    imageUrl: logo
                                },
                            ]}
                        />
                    </StackItem>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 5"
                            body="Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, 
                                Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                        consectetur adipiscing elit, \
                                        sed do eiusmod tempor incididun\
                                        aliquip ex ea commodo consequat.\
                                        Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 3",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                }
                            ]}
                        />
                    </StackItem>
                </>
            )}
            {isSelected === 'devops' && (
                <>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 1"
                            body="Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 3",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                }
                            ]}
                        />
                    </StackItem>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 2"
                            body="Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                            ]}
                        />
                    </StackItem>
                    <StackItem>
                        <BenefitLayout
                            title="Benefit 3"
                            body="Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit ir."
                            imageUrl={placeholderImage}

                            features={[
                                {
                                    title: "Feature 1",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 2",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                },
                                {
                                    title: "Feature 3",
                                    body: "Lorem ipsum dolor sit amet,\
                                            consectetur adipiscing elit, \
                                            sed do eiusmod tempor incididun\
                                            aliquip ex ea commodo consequat.\
                                            Duis aute irure dolor in reprehenderit ir.",
                                    imageUrl: logo
                                }
                            ]}
                        />
                    </StackItem>
                </>
            )}
        </Stack>
    )
}