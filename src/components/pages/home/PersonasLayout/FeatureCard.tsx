import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderMain,
  CardTitle,
} from "@patternfly/react-core";
import React from "react";

export type FeatureCardProps = {
  title: string;
  body: React.ReactNode;
  imageUrl?: string;
};

export const FeatureCard = ({ title, body, imageUrl }: FeatureCardProps) => {
  return (
    <Card isCompact isFlat isRounded>
      {imageUrl && (
        <CardHeader>
          <CardHeaderMain>
            <img
              src={imageUrl}
              alt={`${title} feature image`}
              style={{ height: "35px" }}
            />
          </CardHeaderMain>
        </CardHeader>
      )}
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
    </Card>
  );
};
