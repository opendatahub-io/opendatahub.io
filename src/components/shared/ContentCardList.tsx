import React from "react";

import { Grid, GridItem } from "@patternfly/react-core";

type ContentCardListProps = {
    children: React.ReactNode[];
}

export const ContentCardList = ({ children }: ContentCardListProps) => (
    <Grid hasGutter style={{ justifyItems: "center" }}>
        {children.map((card, i) => (
            <GridItem lg={6} sm={12} key={`content-card-${i}`}>
                {card}
            </GridItem>
        ))}
    </Grid>
)