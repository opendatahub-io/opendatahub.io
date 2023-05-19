import {
  Flex,
  FlexItem,
  Stack,
  StackItem,
  Title,
  ToggleGroup,
  ToggleGroupItem,
} from "@patternfly/react-core";
import React from "react";

import logo from "../../../../content/assets/img/logos/datahub_mark_color-blkbg.png";
import placeholderImage from "../../../../content/assets/img/placeholder.svg";
import { PlainImageCard } from "../../../shared/PlainImageCard";
import { PlainImageCardProps } from "../../../shared/PlainImageCard";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";
import "./PersonasLayout.css";

type PersonaBenefits = {
  name: string;
  benefits: (PlainImageCardProps & {
    features: FeatureCardProps[];
  })[];
}[];
const data: PersonaBenefits = [
  {
    name: "Data Scientist",
    benefits: [
      {
        title: "Jupyter Notebooks",
        body: "Create and train models in Jupyter notebooks",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "External Data Sources",
            body: "Connect to external data sources (Amazon S3)",
            imageUrl: logo,
          },
          {
            title: "Project Organization",
            body: "Use projects to organize your work and share with colleagues",
            imageUrl: logo,
          },
          {
            title: "Experimentation",
            body: "Run pipelines to experiment with your models",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Model Serving",
        body: "Serve models and create endpoints for application usage",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Feature 1 Title",
            body: "Feature 1 Body",
            imageUrl: logo,
          },
          {
            title: "Feature 2 Title",
            body: "Feature 2 Body",
            imageUrl: logo,
          },
          {
            title: "Feature 3 Title",
            body: "Feature 3 Body",
            imageUrl: logo,
          },
        ],
      },
    ],
  },
  {
    name: "IT Operator",
    benefits: [
      {
        title: "Customization",
        body: "Customize ODH: notebooks and model servers sizes, show/hide specific components, add tile to the launcher, import custom images, etc.",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Custom Notebook Images",
            body: "Create custom notebook images so your users can start with the right software installed",
            imageUrl: logo,
          },
          {
            title: "Resource Access Control",
            body: "Use OpenShift's built-in capabilities to control what resources your users can access",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Troubleshooting",
        body: "Troubleshoot ODH: notebooks won't launch, how to interpret error messages",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Taints for Resource Access Restriction",
            body: "Play with taints to restrict access to specific resources",
            imageUrl: logo,
          },
          {
            title: "Feature 2",
            body: "Feature Body 2",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Deployment of Custom Model Server Engines",
        body: "Deploy custom Model Server engines (Inference servers)",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Idle Notebook Management",
            body: "Manage idle notebooks so you're not paying for resources you don't need to",
            imageUrl: logo,
          },
          {
            title: "Scaling Model Server Instances",
            body: "Scale the deployment of custom Model Server engines to handle increased workload",
            imageUrl: logo,
          },
        ],
      },
    ],
  },
  {
    name: "App Developer",
    benefits: [
      {
        title: "Collaborative Model Development",
        body: "Get access to models your data science colleagues are working on so you can work collaboratively with them",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Shared Model Access",
            body: "Collaborate with data science colleagues by accessing their models",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Jupyter Notebook Integration",
        body: "Open existing models in Jupyter Notebooks to ensure they include the information you need in your application",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Model Integration in Notebooks",
            body: "Seamlessly integrate existing models in Jupyter Notebooks",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Model Endpoint Management",
        body: "Access and create multiple model endpoints",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Endpoint Creation and Management",
            body: "Efficiently manage and create multiple model endpoints",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Unified User Interface",
        body: "Use either the built-in ODH UI or see all the same resources in the familiar OpenShift console",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "User-Friendly Interface",
            body: "Access resources through an intuitive user interface",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Model Containerization",
        body: "Containerize models and serve them manually",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "Manual Model Server Deployment",
            body: "Containerize and serve models manually",
            imageUrl: logo,
          },
          {
            title: "LLM Model Serving",
            body: "Serve LLM models from the Model Server",
            imageUrl: logo,
          },
        ],
      },
      {
        title: "Granular Pipeline Control",
        body: "Manually create/modify Pipelines with YAMLs to have more granular control and integrate them into a proper GitOps process",
        link: "/docs/",
        imageUrl: placeholderImage,
        features: [
          {
            title: "YAML-based Pipeline Management",
            body: "Create and modify Pipelines with YAML for fine-grained control",
            imageUrl: logo,
          },
          {
            title: "GitOps Integration",
            body: "Integrate Pipelines into a GitOps process for better workflow management",
            imageUrl: logo,
          },
        ],
      },
    ],
  };
  }
];

export const PersonasLayout = () => {
  const [isSelected, setIsSelected] = React.useState(data[0].name);
  const handleItemClick = (
    isSelected: boolean,
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent
  ) => {
    const id = event.currentTarget.id;
    setIsSelected(id);
  };

  return (
    <Stack className="personas-layout" hasGutter>
      <StackItem>
        <Flex
          direction={{ default: "column" }}
          alignItems={{ default: "alignItemsCenter" }}
        >
          <FlexItem>
            <Title
              className="pf-u-primary-color-100"
              headingLevel="h4"
              size="3xl"
            >
              <i>I am a</i>
            </Title>
          </FlexItem>
          <FlexItem>
            <ToggleGroup>
              {data.map((persona) => (
                <ToggleGroupItem
                  key={persona.name}
                  text={persona.name}
                  buttonId={persona.name}
                  isSelected={isSelected === persona.name}
                  onChange={handleItemClick}
                />
              ))}
            </ToggleGroup>
          </FlexItem>
        </Flex>
      </StackItem>
      {data.map(
        (persona) =>
          isSelected === persona.name && (
            <StackItem key={persona.name}>
              <Stack hasGutter>
                {persona.benefits.map((benefit) => (
                  <StackItem key={benefit.title}>
                    <Stack hasGutter>
                      <StackItem>
                        <PlainImageCard {...benefit} />
                      </StackItem>
                      <StackItem>
                        <Flex
                          direction={{ sm: "row", default: "columnReverse" }}
                          flexWrap={{ default: "nowrap" }}
                        >
                          {benefit.features.map((feature) => (
                            <FlexItem key={feature.title}>
                              <FeatureCard {...feature} />
                            </FlexItem>
                          ))}
                        </Flex>
                      </StackItem>
                    </Stack>
                  </StackItem>
                ))}
              </Stack>
            </StackItem>
          )
      )}
    </Stack>
  );
};
