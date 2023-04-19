import React from 'react'
import { GeometryBackground } from '../../shared/GeometryBackground'
import { Bullseye, PageSection, PageSectionVariants, PanelHeader, Stack, StackItem, Title } from '@patternfly/react-core'
import { ImageSizeEnum, PlainImageCard } from '../../shared/PlainImageCard'
import placeholderImage from "../../../images/placeholder.svg"

export const CaseStudies = ({ }) => {
    return (
        <GeometryBackground color='#343B52'>
            <PageSection
                isCenterAligned
                isWidthLimited
                padding={{ default: "padding" }}
                variant={PageSectionVariants.dark}
                style={{ backgroundColor: "transparent" }}
            >
                <Bullseye className=''><Title headingLevel={'h3'} size='3xl'>Case Studies</Title></Bullseye>
                <Stack hasGutter>
                    <StackItem>
                        <PlainImageCard
                            title="Case Study 1"
                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                     Donec non purus vitae tortor ultricies aliquam. Sed \
                     euismod, nisl quis aliquet aliquam, nisl nisl aliquam nisl,\
                      quis aliquam nisl nisl nec nisl. Sed euismod, nisl quis aliquet\
                       aliquam, nisl nisl aliquam nisl, quis aliquam nisl nisl nec nisl."
                            link='/docs'
                            imageUrl={placeholderImage}
                            imageSize={ImageSizeEnum.lg}
                        />
                    </StackItem>
                    <PlainImageCard
                        title="Case Study 2"
                        body="Lorem ipsumasdf dolsdafsdfor sit amet, consectetur adipiscing elit.\
                     Donec non purus vitae tortsadfsadfsdfor ultricies aliquam. Sed \
                     euismod, niasdasdffsl quis aliquet asdfasdfsadfaliquam, nisl nisl aliquam nisl,\
                      quis aliquam niassadsadfsdffasdfsadfdfasdfsl nisl nec nisl. Sed euismod, nisl quis aliquet\
                       aliquam, nisl nisl aliquam nisl, quis aliquam nisl nisl nec nisl."
                        link='/docs'
                        imageUrl={placeholderImage}
                        imageSize={ImageSizeEnum.lg}
                    />
                    <StackItem>
                    </StackItem>
                </Stack>
            </PageSection>
        </GeometryBackground>
    )
}
