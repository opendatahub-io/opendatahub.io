import React from "react";
import { DOCS_NAVIGATION, ROADMAP_DATA } from "../../const";
import {
  Button,
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardProps,
  CardTitle,
  PageSection,
  Panel,
  Split,
  SplitItem,
  Title,
} from "@patternfly/react-core";
import { PageProps } from "gatsby";
import { Footer, Layout, SideNavigation } from "../../components/shared";

const ProjectCard = ({
  title,
  description,
  url,
  moved,
  ...props
}: {
  title: string;
  description?: string;
  url?: string;
  moved?: string | number;
} & CardProps) => (
  <Card isCompact {...props}>
    <CardHeader>
      {url && (
        <CardActions>
          <Button variant="tertiary" isSmall component="a" href={url}>
            Github Issues
          </Button>
        </CardActions>
      )}
      <CardTitle style={{ color: moved ? "grey" : undefined }}>
        {title}{" "}
        {moved ? (
          <Button
            isInline
            variant="link"
            component="a"
            href={`#${moved.toString().replace("+", "")}`}
          >{`(Moved to ${moved})`}</Button>
        ) : undefined}
      </CardTitle>
    </CardHeader>
    {description && (
      <CardBody style={{ color: moved ? "grey" : undefined }}>
        {description}
      </CardBody>
    )}
  </Card>
);

const FutureIndex = ({ location }: PageProps) => {
  return (
    <Layout
      sidebar={
        <SideNavigation config={DOCS_NAVIGATION} location={location} toc={{}} />
      }
    >
      <PageSection
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <div className="asciidoc-docs">
          <Title size="4xl" headingLevel="h1">
            Roadmap
          </Title>
          {ROADMAP_DATA.future.map((release) => (
            <Panel
              className="rounded pf-u-p-md pf-u-mt-lg"
              style={{ backgroundColor: "#f1f1f1", width: "100%" }}
              key={release.title}
            >
              <Title className="pf-u-mb-lg" headingLevel="h1">
                {release.title}
              </Title>
              {release.children.map((project) => (
                <ProjectCard
                  className="rounded pf-u-mb-sm"
                  key={project.title}
                  title={project.title}
                />
              ))}
            </Panel>
          ))}
          <Title size="3xl" headingLevel="h2" className="pf-u-mt-2xl">
            Past releases
          </Title>
          <span>Visit the </span>
          <Button
            component="a"
            href="/docs/release-notes"
            variant="link"
            isInline
          >
            release notes
          </Button>
          <span> section for detailed information about the releases.</span>
          {ROADMAP_DATA.past.map((release) => (
            <Panel
              id={release.version.toString()}
              className="rounded pf-u-p-md pf-u-mt-lg"
              style={{ backgroundColor: "#f1f1f1", width: "100%" }}
              key={release.title}
            >
              <Split>
                <SplitItem>
                  <Title headingLevel="h2" size="3xl" className="pf-u-mb-lg">
                    Release {release.title}
                  </Title>
                </SplitItem>
                <SplitItem isFilled />
                {release.url && (
                  <SplitItem>
                    <Button variant="tertiary" component="a" href={release.url}>
                      GitHub Project
                    </Button>
                  </SplitItem>
                )}
              </Split>
              {release.children.map((project) => (
                <ProjectCard
                  className="rounded pf-u-mb-sm"
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  moved={project?.moved}
                />
              ))}
            </Panel>
          ))}
        </div>
      </PageSection>
      <PageSection isCenterAligned padding={{ default: "noPadding" }}>
        <Footer />
      </PageSection>
    </Layout>
  );
};

export default FutureIndex;
