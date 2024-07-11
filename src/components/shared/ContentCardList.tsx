import React from "react";

import { Grid, GridItem, gridSpans } from "@patternfly/react-core";

type ContentCardListProps = {
    children: React.ReactNode[];
    rowSpan?: gridSpans | "auto";
}

export const ContentCardList = ({ children, rowSpan = "auto" }: ContentCardListProps) => {
    const span = rowSpan === "auto" ? (children.length <= 3 ? 12 / children.length as gridSpans : 3) : rowSpan;
    return (
        <Grid hasGutter style={{ justifyItems: "center", placeItems: "stretch" }}>
            {children.map((card, i) => (
                <GridItem lg={span} sm={12} key={`content-card-${i}`}>
                    {card}
                </GridItem>
            ))}
        </Grid>
    )
}