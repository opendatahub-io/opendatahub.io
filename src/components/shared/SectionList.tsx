import { Flex, FlexItem, PageSection, PageSectionProps } from "@patternfly/react-core";
import React from "react";

type SectionListProps = {
    sections: ({
        component: React.ReactNode;
        props?: PageSectionProps
    })[];

}
export const SectionList = ({ sections }: SectionListProps) => (
    <Flex className="pf-u-mt-2xl" spaceItems={{ default: "spaceItems4xl" }} direction={{ default: "column" }}>
        {sections.map((section) => (
            <FlexItem>
                <PageSection
                    isCenterAligned
                    isWidthLimited
                    padding={{ default: "padding" }}
                    {...section.props}
                >
                    {section.component}
                </PageSection>
            </FlexItem>
        ))}
    </Flex>
)