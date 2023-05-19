import { Button, Card, Text, CardBody, CardFooter, CardTitle, Flex, FlexItem, Grid, GridItem, List, ListItem, Split, SplitItem, Stack, StackItem, TextVariants, Title, Chip } from "@patternfly/react-core";
import React from "react";
import "./ArchitectureMap.css"
import prometheus_logo from "../../../content/assets/img/logos/prometheus-logo.png"
import grafana_logo from "../../../content/assets/img/logos/grafana-logo.svg"
import ceph_logo from "../../../content/assets/img/logos/ceph-logo.png"
<<<<<<< HEAD
<<<<<<< HEAD
import r_studio_logo from "../../../content/assets/img/logos/r-studio-logo.png"
=======
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)
import odh_logo from "../../../content/assets/img/logos/datahub_mark_color-blkbg.png"
import jupyter_logo from "../../../content/assets/img/logos/jupyter-logo.png"
import pytorch_logo from "../../../content/assets/img/logos/pytorch-logo.png"
import tensorflow_logo from "../../../content/assets/img/logos/tensorflow-logo.png"
import kubeflow_logo from "../../../content/assets/img/logos/kubeflow-logo.jpg"
import tekton_logo from "../../../content/assets/img/logos/tekton-logo.png"
import kserve_logo from "../../../content/assets/img/logos/kserve-logo.png"
<<<<<<< HEAD
<<<<<<< HEAD
import vscode_logo from "../../../content/assets/img/logos/vscode-logo.png"
import elyra_logo from "../../../content/assets/img/logos/elyra-logo.svg"
=======
>>>>>>> 137e27d (UX fixes)
import openshift_logo from "../../../content/assets/img/logos/openshift-logo.svg"
import kubernetes_logo from "../../../content/assets/img/logos/kubernetes-logo.png"
import intel_logo from "../../../content/assets/img/logos/intel-logo.png"
<<<<<<< HEAD
import triton_server_logo from "../../../content/assets/img/logos/triton-server-logo.png"
=======
import openshift_logo from "../../../content/assets/img/logos/openshift-logo.svg"
import kubernetes_logo from "../../../content/assets/img/logos/kubernetes-logo.png"
import intel_logo from "../../../content/assets/img/logos/intel-logo.png"
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)

type ArchitectureComponentProps = {
  title?: string;
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  isSelected?: boolean;
}

type ProjectCardProps = {
  title: string;
  body: React.ReactNode;
  link: string;
  icon?: string;
  planned?: boolean
}

const ArchitectureComponent = ({ title, children, color = "white", onClick, isSelected }: ArchitectureComponentProps) => {
  return (
    <Card isFullHeight isCompact isFlat isSelectable={!!onClick} isSelected={isSelected} isRounded onClick={onClick} style={{ backgroundColor: color, justifyContent: "center" }}>
      {title && <CardTitle className="pf-u-text-align-center">{title}</CardTitle>}
      {children && <CardBody className="pf-u-text-align-center">{children}</CardBody>}
    </Card>
  )
}
const ProjectCard = ({ title, body, link, icon, planned }: ProjectCardProps) => {
  return (
    <Card isFullHeight isCompact isFlat isRounded>
      <CardTitle>
        <Split hasGutter style={{ alignItems: "center" }}>
          {icon && (
            <SplitItem>
              <img className="project-image" src={icon} alt={`${title} icon`} />
            </SplitItem>
          )}
          <SplitItem isFilled>
            {title}
          </SplitItem>
          {planned && (
            <SplitItem>
              <Chip style={{ backgroundColor: "#f0f0f0" }} isReadOnly>PLANNED</Chip>
            </SplitItem>
          )}
        </Split>
      </CardTitle>
      <CardBody>{body}</CardBody>
      <CardFooter>
        <Button variant="link" isInline component="a" href={link}>Learn more</Button>
      </CardFooter>
    </Card>
  )
}

const architectureComponents: { [key: string]: ProjectCardProps[] } = {
  "storage": [
    {
      title: "Ceph",
      body: "Ceph is a distributed object store and file system designed to provide excellent performance, reliability and scalability.",
      link: "https://ceph.io/",
      icon: ceph_logo
    },
  ],
  "odh-dashboard": [{
    title: "Open Data Hub Dashboard",
    body: (
      <>
        <p>A dashboard for Open Data Hub components.</p>
        <List>
<<<<<<< HEAD
<<<<<<< HEAD
          <ListItem>Show's what's installed.</ListItem>
          <ListItem>Show's what's available for installation.</ListItem>
          <ListItem>Links to component UIs.</ListItem>
          <ListItem>Links to component documentation.</ListItem>
=======
=======
>>>>>>> 137e27d (UX fixes)
          <ListItem>Shows what's installed</ListItem>
          <ListItem>Shows what's available for installation</ListItem>
          <ListItem>Links to component UIs</ListItem>
          <ListItem>Links to component documentation</ListItem>
<<<<<<< HEAD
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)
        </List>
      </>
    ),
    link: "https://github.com/opendatahub-io/odh-dashboard",
    icon: odh_logo

  }],
  "notebook-controller": [
    {
      title: "ODH Notebook Controller",
      body: "The controller will watch the Kubeflow Notebook custom resource events to extend the Kubeflow notebook controller behavior.",
      link: "https://github.com/opendatahub-io/kubeflow/tree/master/components/odh-notebook-controller",
      icon: odh_logo
    },
    {
      title: "Jupyter Notebook w/ JupyterLab UI",
      body: "An open source notebook platform that ODH provides with multiple notebook image streams that incorporate embedded AI/ML libraries.",
      link: "https://jupyter.org/",
      icon: jupyter_logo
    },
    {
      title: "Kubeflow Notebook Controller",
      body: "The Kubeflow Notebook Controller is a Kubernetes custom controller that manages the lifecycle of Jupyter notebooks.",
      link: "https://github.com/opendatahub-io/kubeflow/tree/v1.6-branch/components/notebook-controller",
      icon: kubeflow_logo
    },
    {
      title: "PyTorch",
      body: "An open source machine learning framework that accelerates the path from research prototyping to production deployment.",
      link: "https://pytorch.org/",
      icon: pytorch_logo
    },
    {
      title: "TensorFlow",
      body: "An end-to-end open source platform for machine learning.",
      link: "https://www.tensorflow.org/",
      icon: tensorflow_logo
    },
<<<<<<< HEAD
<<<<<<< HEAD
    {
      title: "RStudio",
      body: "RStudio is an integrated development environment for R.",
      link: "https://posit.co/products/open-source/rstudio/",
      icon: r_studio_logo
    },
    {
      title: "VS Code",
      body: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
      link: "https://code.visualstudio.com/",
      icon: vscode_logo
    },
    {
      title: "Elyra",
      body: "Elyra is a set of AI-centric extensions to JupyterLab Notebooks.",
      link: "https://elyra.readthedocs.io/en/latest/",
      icon: elyra_logo
    }
=======
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)
  ],
  "model-serving": [
    {
      title: "ModelMesh",
      body: "The ModelMesh framework is a mature, general-purpose model serving management/routing layer designed for high-scale, high-density and frequently-changing model use cases.",
      link: "https://github.com/opendatahub-io/modelmesh",
      icon: kserve_logo
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: "KServe",
      body: "KFServing is a Kubernetes-based server that supports high performance serving of machine learning (ML) models, and inference.",
      link: "https://github.com/kserve/kserve",
      icon: kserve_logo
    },
    {
=======
>>>>>>> 137e27d (UX fixes)
      title: "TrustyAI",
      body: "responsible for storing model inference data and providing fairness metrics.",
      link: "https://kogito.kie.org/trustyai/"
    },
    {
<<<<<<< HEAD
      title: "scikit-learn",
      body: "A set of python modules for machine learning and data mining.",
      link: "https://scikit-learn.org/stable/",
      icon: scikit_learn_logo
    },
    {
=======
      title: "TrustyAI",
      body: "responsible for storing model inference data and providing fairness metrics.",
      link: "https://kogito.kie.org/trustyai/"
    },
    {
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)
      title: "OpenVINO",
      body: "OpenVINO Toolkit is a comprehensive toolkit for quickly developing applications and solutions that emulate human vision.",
      link: "https://docs.openvinotoolkit.org/latest/index.html",
      icon: intel_logo
    },
<<<<<<< HEAD
<<<<<<< HEAD
    {
      title: "Triton Server",
      body: "An open-source deep learning inference server.",
      link: "https://developer.nvidia.com/nvidia-triton-inference-server",
      icon: triton_server_logo
    }
=======
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)
  ],
  "data-science-pipelines": [
    {
      title: "Data Science Pipelines",
      body: "Project bringing Kubeflow Pipelines and Tekton together. The current code allows you run Kubeflow Pipelines with Tekton backend end to end.",
      link: "https://github.com/opendatahub-io/data-science-pipelines",
      icon: odh_logo,
    },
    {
      title: "Kubeflow Pipelines",
      body: "A platform for building and deploying portable, scalable machine learning (ML) workflows based on Docker containers.",
      link: "https://www.kubeflow.org/docs/pipelines/",
      icon: kubeflow_logo
    },
    {
      title: "Tekton",
      body: "A powerful and flexible open-source framework for creating CI/CD systems, allowing developers to build, test, and deploy across cloud providers and on-premise systems.",
      link: "https://tekton.dev/",
      icon: tekton_logo
    }
  ],
  "monitoring": [
    {
      title: "Prometheus",
      body: "An open-source systems monitoring and alerting toolkit.",
      link: "https://prometheus.io/",
      icon: prometheus_logo
    },
    {
      title: "Grafana",
      body: "An open-source platform for monitoring and observability.",
      link: "https://grafana.com/",
      icon: grafana_logo
    }
  ],
  "open-data-hub-operator": [
    {
      title: "Open Data Hub Operator",
      body: "Open Data Hub operator is a downstream project of kfctl operator that manages the KfDef Custom Resource. This CR is used to deploy Open Data Hub components in the OpenShift cluster.",
      link: "https://github.com/opendatahub-io/opendatahub-operator",
      icon: odh_logo
    },
    {
      title: "Open Data Hub Manifests",
      body: "A repository for Open Data Hub components Kustomize manifests.",
      link: "https://github.com/opendatahub-io/odh-manifests",
      icon: odh_logo
    }
  ],
  "hybrid-cloud": [],
  "cluster": [
    {
      title: "OpenShift",
      body: "Red Hat OpenShift is a Kubernetes platform that provides a foundation for on-premises, hybrid, and multicloud deployments.",
      link: "https://www.openshift.com/",
      icon: openshift_logo
    },
    {
      title: "Kubernetes",
      body: "An open-source system for automating deployment, scaling, and management of containerized applications.",
      link: "https://kubernetes.io/",
      icon: kubernetes_logo
    }
  ]
}

enum ArchitectureComponentColors {
  external = "#f0f0f0",
  management = "#f2f6eb",
  service = "#ecefff"
}

export const ArchitectureMap = ({ }) => {
  const [selectedComponent, setSelectedComponent] = React.useState<string | undefined>(undefined)

  return (
    <Stack hasGutter>
      <StackItem>
        <Flex
          className="pf-u-text-align-center"
          spaceItems={{ default: "spaceItemsNone" }}
          direction={{ default: "column" }}
        >
          <FlexItem>
            <Title
              className="pf-u-text-align-center"
              headingLevel={"h3"}
              size="3xl"
            >
              Built on open-source
            </Title>
          </FlexItem>
          <FlexItem>
            <Text component={TextVariants.p}>
              Explore the projects of Open Data Hub
            </Text>
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem>
        <Grid hasGutter>
<<<<<<< HEAD
<<<<<<< HEAD
          <GridItem span={2} rowSpan={6}>
=======
          <GridItem span={2} rowSpan={5}>
>>>>>>> eb764c9 (UX fixes)
=======
          <GridItem span={2} rowSpan={5}>
>>>>>>> 137e27d (UX fixes)
            <ArchitectureComponent color={ArchitectureComponentColors.external} isSelected={selectedComponent === "storage"} title="Storage" onClick={() => setSelectedComponent("storage")} />
          </GridItem>
          <GridItem span={10}>
            <ArchitectureComponent color={ArchitectureComponentColors.service} title="ODH Dashboard" isSelected={selectedComponent === "odh-dashboard"} onClick={() => setSelectedComponent("odh-dashboard")}>
              User-facing dashboard presenting components as a single unified experience
            </ArchitectureComponent>
          </GridItem>
          <GridItem span={3}>
            <ArchitectureComponent color={ArchitectureComponentColors.service} title="Notebook Controller" isSelected={selectedComponent === "notebook-controller"} onClick={() => setSelectedComponent("notebook-controller")} />
          </GridItem>
          <GridItem span={3}>
            <ArchitectureComponent color={ArchitectureComponentColors.service} title="Model Serving" isSelected={selectedComponent === "model-serving"} onClick={() => setSelectedComponent("model-serving")} />
          </GridItem>
          <GridItem span={4}>
            <ArchitectureComponent color={ArchitectureComponentColors.service} title="Data Science Pipelines" isSelected={selectedComponent === "data-science-pipelines"} onClick={() => setSelectedComponent("data-science-pipelines")} />
          </GridItem>
          <GridItem span={10}>
            <ArchitectureComponent color={ArchitectureComponentColors.management} title="Monitoring and Alerting" isSelected={selectedComponent === "monitoring"} onClick={() => setSelectedComponent("monitoring")} />
          </GridItem>
          <GridItem span={10}>
            <ArchitectureComponent color={ArchitectureComponentColors.management} title="Open Data Hub Operator" isSelected={selectedComponent === "open-data-hub-operator"} onClick={() => setSelectedComponent("open-data-hub-operator")}>
              Responsible for deploying and maintaining all components
            </ArchitectureComponent>
          </GridItem>
          <GridItem span={10}>
            <ArchitectureComponent color={ArchitectureComponentColors.management} title="Kubernetes, OKD and OpenShift" isSelected={selectedComponent === "cluster"} onClick={() => setSelectedComponent("cluster")} />
          </GridItem>
          <GridItem span={12}>
            <ArchitectureComponent color={ArchitectureComponentColors.external} title="Hybrid Cloud">
              Physical Servers, Virtual Machines, Private Cloud, AWS, Google Cloud, Microsoft Azure, IBM Cloud
            </ArchitectureComponent>
          </GridItem>
        </Grid >
      </StackItem>
      <StackItem>
        {selectedComponent && architectureComponents[selectedComponent].length > 0 && (
          <Grid hasGutter>
            <GridItem span={12}>
              <Title className="pf-u-text-align-center" headingLevel="h2" size="xl">Projects</Title>
            </GridItem>
            {architectureComponents[selectedComponent].map((project, index) => (
              <GridItem span={4} key={index}>
                <ProjectCard {...project} />
              </GridItem>
            ))
            }
          </Grid>
        )}
      </StackItem>
    </Stack>
  )
};
