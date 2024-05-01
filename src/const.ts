import { LinkedContent, PersonaBenefits, RoadmapDataType, SideNavItemConfig } from "./types";
import logo from "./content/assets/img/logos/datahub_mark_color-blkbg.png";
import placeholderImage from "./content/assets/img/placeholder.svg";

export const DOCS_NAVIGATION: SideNavItemConfig[] = [
    {
        title: "Installing Open Data Hub",
        slug: "/docs/installing_open_data_hub/",
    },
    {
        title: "Upgrading Open Data Hub",
        slug: "/docs/upgrading_open_data_hub/",
    },
    {
        title: "Getting started with Open Data Hub",
        slug: "/docs/getting_started_with_open_data_hub/"
    },
    {
        title: "Working on data science projects",
        slug: "/docs/working_on_data_science_projects/"
    },
    {
        title: "Working with distributed workloads",
        slug: "/docs/working_with_distributed_workloads"
    },
    {
        title: "Serving models",
        slug: "/docs/serving_models/"
    }, 
    {
        title: "Monitoring data science models",
        slug: "/docs/monitoring_data_science_models/"
    },
    {
        title: "Managing users",
        slug: "/docs/managing_users/"
    },
    {
        title: "Managing resources",
        slug: "/docs/managing_resources/"
    },
    {
        title: "Architecture",
        slug: "/docs/architecture"
    },
    {
        title: "Tiered Components",
        slug: "/docs/tiered-components"
    },
    {
        title: "Roadmap",
        slug: "/docs/release-notes",
        children: [
            {
                title: "Release Notes",
                slug: "/docs/release-notes"
            },
            {
                title: "Future Releases",
                slug: "/docs/future"
            }
        ]
    }
]

const LINKED_CONTENT: LinkedContent[] = [
    {
        title: "Uploading data to Ceph via command line",
        url: "https://youtu.be/d6X1xvDXewM",
        type: "video",
        categories: ["Tutorial"]
    },

    {
        title: "AI on OpenShift",
        url: "https://www.youtube.com/watch?v=MD1x2IT7rdg",
        type: "video",
    },
    {
        title: "Fraud Detection using the Open Data Hub",
        url: "https://youtu.be/IcQ2bhsw_kQ",
        type: "video",
    },

    {
        title: "Kubecon 2020: How to Use Kubernetes to Build a Data Lake for AI Workloads",
        url: "https://www.youtube.com/watch?v=0HIelZ3qMLE",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Kubecon 2020: Is There a Place For Distributed Storage For AI/ML on Kubernetes?",
        url: "https://www.youtube.com/watch?v=9XhbXtPKttM&feature=youtu.be",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "ML Pipelines with Kubeflow, Argo and Open Data Hub",
        url: "https://youtu.be/NZOky2Gm0iA?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Scalable Kafka Deployment on OpenShift for ML",
        url: "https://youtu.be/og_Abr9jZJU?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "MLFlow: Experiment Tracking on OpenShift",
        url: "https://youtu.be/WgEKfAj7PLc?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Scaling your Open Data Hub for Fun and Production",
        url: "https://youtu.be/dkuTaxWUrfE?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "An Introduction to Unsupervised Deep Learning",
        url: "https://youtu.be/tpDV8nUv45c?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Unsupervised NLP for Log Anomaly Detection",
        url: "https://youtu.be/Dt81qwza-zA?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Sentiment Analysis Service in a DevOps Environment",
        url: "https://youtu.be/2QJ367chSS0?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Machine Learning with Open Source Infrastructure",
        url: "https://youtu.be/K8G_0z5jbcA?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "AIOps: Anomaly Detection with Prometheus and Istio",
        url: "https://youtu.be/5lT-GajT_Wo?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Presto: Cloud Native SQL-on-Anything",
        url: "https://youtu.be/73VZaP3Mh-M?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Data Science in the Open Cloud Exchange Model",
        url: "https://youtu.be/KWDUkm1ZeKY?list=PLU1vS0speL2bxDVhBGZOiNQotzkdxJ8ln",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Ceph Object Storage for AI and ML Workloads",
        url: "https://www.youtube.com/watch?v=n2IW3VIZmg4",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Data Exploration with JupyterHub on OpenShift",
        url: "https://www.youtube.com/watch?v=by0l3b55i7g",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Building AI with Ceph and OpenShift",
        url: "https://www.youtube.com/watch?v=B6E7SyxOB2M",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Using the Massachusetts Open Cloud Data Hub to perform Data Science Experiments",
        url: "https://www.youtube.com/watch?v=iUJ6RGfY0JQ",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "Using the Mass Open Cloud to perform Data Science Experiments",
        url: "https://youtu.be/CZwUCgkKIc4",
        type: "video",
        categories: ["Conference talk"]
    },
    {
        title: "ML Workloads with GPUs on Openshift 4",
        url: "https://www.youtube.com/watch?v=RbJurxB4RSo&feature=youtu.be",
        type: "video",
        categories: ["Conference talk"]
    },

    {
        title: "Innovate @Open podcast",
        url: "https://grhpodcasts.s3.amazonaws.com/opendatahub1908.mp3",
        type: "audio",
    },
]


export const PERSONAS: PersonaBenefits = [
    {
        name: "IT Operator",
        benefits: [
            {
                title: "Effortless Deployment",
                body: "Deploy the Open Data Hub (ODH) AI platform within minutes, enabling swift provisioning and setup by IT operators. ODH offers an accelerated path to accessing AI/ML tools for data scientists.",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "Streamlined Integration",
                        body: "Integrate seamlessly with popular open-source AI/ML tools, providing a unified user experience for data scientists.",
                        imageUrl: logo,
                    },
                    {
                        title: "Rapid Deployment of Resources",
                        body: "Decrease the time it takes to deploy the necessary resources for data scientists, enabling them to start working quickly and efficiently.",
                        imageUrl: logo,
                    },
                ],
            },
            {
                title: "Democratized Access",
                body: "Democratize access to open-source AI/ML tools by making them easily available to data scientists. ODH empowers IT operators to meet the increasing demand for these tools.",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "Unified User Experience",
                        body: "Provide data scientists with a unified user experience across a range of popular open-source AI/ML tools, facilitating seamless collaboration and productivity.",
                        imageUrl: logo,
                    },
                    {
                        title: "Open-Source Integration",
                        body: "Integrate with a diverse range of open-source AI/ML tools, allowing data scientists to leverage the best tools for their specific needs.",
                        imageUrl: logo,
                    },
                ],
            },
            {
                title: "Customization",
                body: "Effortlessly customize the Open Data Hub (ODH) to meet specific requirements, such as adjusting notebook and model server sizes, hiding or displaying specific components, adding custom tiles to the launcher, importing custom images, and more.",
                link: "/docs/",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "Custom Notebook Images",
                        body: "Create and deploy custom notebook images, empowering users to start their work with the necessary software already installed.",
                        imageUrl: logo,
                    },
                    {
                        title: "Resource Access Control",
                        body: "Leverage OpenShift's built-in capabilities to precisely control users' access to resources, ensuring optimal security and privacy measures.",
                        imageUrl: logo,
                    },
                    {
                        title: "Taints for Resource Access Restriction",
                        body: "Effectively utilize taints to restrict access to specific resources within the ODH environment, enhancing security and resource management.",
                        imageUrl: logo,
                    },
                ],
            },
        ],
    },
    {
        name: "Data Scientist",
        benefits: [
            {
                title: "Jupyter Notebooks",
                body: "Utilize Jupyter notebooks to create and train machine learning models.",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "R Studio Support",
                        body: "Leverage R Studio for creating and training machine learning models.",
                        imageUrl: logo,
                    },
                    {
                        title: "Open Source AI Tools",
                        body: "Utilize a wide range of open source tools for data science, including TensorFlow, PyTorch, and more.",
                        imageUrl: logo,
                    },
                ],
            },
            {
                title: "Model Serving",
                body: "Serve trained models and create endpoints for seamless integration into applications.",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "Repeatable Experiments",
                        body: "Implement data science pipelines using Kubeflow Pipelines and Tekton to create repeatable experiments for consistent and reliable results.",
                        imageUrl: logo,
                    },
                    {
                        title: "Model Explainability",
                        body: "Enhance model interpretability and gain insights into the factors driving predictions using TrustyAI.",
                        imageUrl: logo,
                    },
                    {
                        title: "Streamlined Deployment",
                        body: "Effortlessly deploy machine learning models in production environments, including popular cloud-based platforms.",
                        imageUrl: logo,
                    },
                ],
            },
            {
                title: "Collaboration and Connectivity",
                body: "Collaborate with colleagues to share models and work together on projects.",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "Shared Model Access",
                        body: "Collaborate with colleagues by accessing their models and sharing your own.",
                        imageUrl: logo,
                    },
                    {
                        title: "Efficient Project Organization",
                        body: "Leverage project management capabilities to efficiently organize your work and collaborate with colleagues.",
                        imageUrl: logo,
                    },
                    {
                        title: "Access External Data Sources",
                        body: "Connect seamlessly to external data sources like Amazon S3 for comprehensive data exploration and analysis.",
                        imageUrl: logo,
                    },
                ],
            }
        ],
    },
    {
        name: "App Developer",
        benefits: [
            {
                title: "Enhanced Development Experience",
                body: "Improve your development experience with seamless VS Code integration and version control.",
                link: "/docs/",
                imageUrl: placeholderImage,
                features: [
                    {
                        title: "VS Code Support",
                        body: "Enjoy seamless integration with Visual Studio Code (VS Code), a powerful development environment for building your applications.",
                        imageUrl: logo,
                    },
                    {
                        title: "Endpoint Creation and Management",
                        body: "Efficiently create and manage multiple model endpoints to serve your application needs.",
                        imageUrl: logo,
                    },
                    {
                        title: "Manual Model Server Deployment",
                        body: "Containerize and serve models manually",
                        imageUrl: logo,
                    },
                ],
            },
            {
                title: "Streamlined Workflow Management",
                body: "Improve your application development workflow with granular pipeline control and GitOps integration.",
                link: "/docs/",
                imageUrl: placeholderImage,
                features: [

                    {
                        title: "CI/CD Integration",
                        body: "Leverage CI/CD tools to streamline your application development lifecycle and ensure efficient deployment processes.",
                        imageUrl: logo,
                    },
                    {
                        title: "GitOps Integration",
                        body: "Integrate Pipelines into a GitOps process to streamline application deployment to stage and production environments.",
                        imageUrl: logo,
                    },
                    {
                        title: "Application and Model Versioning",
                        body: "Efficiently manage versions of your applications and models for better organization and tracking.",
                        imageUrl: logo,
                    },
                ],
            },
        ],
    }
];

export const ROADMAP_DATA: RoadmapDataType = {
    "future": [
        {
            "title": "Open Data Hub 1.8 (July 2023)",
            "version": 1.8,
            "children": [
                {
                    "title": "ODH Operator"
                },
                {
                    "title": "ODH Dashboard"
                },
                {
                    "title": "Model Mesh"
                },
                {
                    "title": "TrustyAI Explainability"
                },
                {
                    "title": "Data Science Pipelines operator"
                },
                {
                    "title": "Distributed Workloads"
                }
            ]
        }
    ],
    "past": [
        {
            "title": "Open Data Hub 1.7 (June 2023)",
            "version": 1.7,
            "children": [
                {
                    "title": "ODH Operator",
                    "description": "ODH Operator image now includes a local copy of the release version of the ODH Core deployment manifests that can be referenced from any supported kfdef"
                },
                {
                    "title": "ODH Dashboard",
                    "description": "Update to version v2.11"
                },
                {
                    "title": "Model Mesh"
                },
                {
                    "title": "TrustyAI Explainability"
                },
                {
                    "title": "Data Science Pipelines operator",
                    "description": "Update to version v1.0.0"
                },
                {
                    "title": "Distributed Workloads",
                    "description": "Upgrade to Project CodeFlare v0.0.4"
                }
            ]
        },
        {
            "title": "Open Data Hub 1.6 (May 2023)",
            "version": 1.6,
            "children": [
                {
                    "title": "ODH Operator",
                    "description": "Default to the `rolling` OLM release channel and deprecate `stable`"

                },
                {
                    "title": "ODH Dashboard",
                    "description": "Upgrade to v2.9"

                },
                {
                    "title": "Model Mesh"
                },
                {
                    "title": "TrustyAI Explainability"
                },
                {
                    "title": "Data Science Pipelines operator",
                    "description": "Upgrade to v0.2.0"

                },
                {
                    "title": "Distributed Workloads",
                    "description": "Incubation of the Distributed Workloads stack supporting the CodeFlare SDK"
                }
            ]
        },
        {
            "title": "Open Data Hub 1.5 (April 2023)",
            "version": 1.5,
            "children": [
                {
                    "title": "ODH Operator",
                    "description": "Migration to the operator-sdk 1.24"
                },
                {
                    "title": "Model Mesh",
                    "description": "Update to v0.11.0"
                },
                {
                    "title": "TrustyAI Explainability"
                },
                {
                    "title": "Jupyter Notebooks",
                    "description": "Add Python 3.8 / 3.9 versions of all notebook images"
                },
                {
                    "title": "ODH Dashboard Model Serving UI",
                    "description": "Add intial UI support for the new Model Serving stack"
                },
                {
                    "title": "Data Science Pipelines operator",
                    "description": "Adds support for namespace isolation of Data Science Pipelines"
                }
            ]
        },
        {
            "title": "Open Data Hub 1.4 - (October 2022)",
            "version": 1.4,
            "children": [
                {
                    "title": "Model Serving",
                    "description": "Updates to the etcd and minio setups"
                },
                {
                    "title": "Support for ODH Notebook Controller"
                },
                {
                    "title": "ODH Dashboard Admin UI and Notebook Controller backend",
                    "description": "Add UI support for admin configurations"
                },
                {
                    "title": "Deployment of Data Science Pipelines based on Kubeflow Pipelines (Tekton)"
                },
                {
                    "title": "ODH Re-architecture - Phase 1",
                    "description": "Categorize existing components (as of ODH v1.3.0) into support Tiers for updates/deprecation and designate maintainers Tiered approach <br> - Tier 0 - ODH Core <br> - Tier 1 - Long Term community support with assigned MAINTAINERS and full test suite <br> - Tier 2 - Any components in the <a href=\"https://github.com/opendatahub-io-contrib\" >opendatahub-io-contrib</a> org that are not included in the ODH Core deployment but maintain ODH integrations of interest to the community<br>"
                }
            ]
        },
        {
            "title": "Open Data Hub 1.3 - (May/June 2022)",
            "version": 1.3,
            "children": [
                {
                    "title": "Tutorials and website cleanup",
                    "url": "https://github.com/opendatahub-io/opendatahub.io/projects/1"
                },
                {
                    "title": "Dashboard updates",
                    "url": "https://github.com/opendatahub-io/odh-dashboard/projects/2",
                    "description": "Admin -  Bring your own notebooks+ Cluster Settings"
                },
                {
                    "title": "Bring your own notebooks",
                    "description": "Allow admins the flexibility to provide to users their own notebook images"
                },
                {
                    "title": "Model Serving",
                    "description": "Implementation of Model Mesh using Oauth"
                },
                {
                    "title": "Community governance model",
                    "url": "https://github.com/opendatahub-io/opendatahub-community/issues/11"
                },
                {
                    "title": "Kubeflow 1.5 support",
                    "url": "https://github.com/opendatahub-io/manifests/projects/2",
                    "description": "Includes ability to install Kubeflow v1.5.0 components on OpenShift <br> Support for the integration of Service Mesh with Kubeflow v1.5 on OpenShift"
                }
            ]
        },
        {
            "title": "Open Data Hub 1.2 - Q4 2021",
            "version": 1.2,
            "children": [
                {
                    "title": "JupyterHub Custom Notebooks User Interface improvement",
                    "description": "Add User Interface elements for users to enter new custom notebook images"
                },
                {
                    "title": "Kubeflow 1.3 on OCP 4.6/4.7/4.8",
                    "description": "Enable Kubeflow 1.3 on OCP 4.6/4.7/4.8 by resolving all issues.",
                    "url": "https://github.com/kubeflow/manifests/issues/1895"
                },
                {
                    "title": "Kubeflow integration with Red Hat Service Mesh.",
                    "description": "Replace Istio stack with Red Hat Serivce Mesh in Kubeflow"
                },
                {
                    "title": "ODH and KF authentication architecture.",
                    "description": "Architect an integrated authentication solution for ODH and KF."
                },
                {
                    "title": "KF 1.3.1 OCP Stack update.",
                    "description": "This includes updating the Kubeflow 1.3.1 openshift stack to work on OCP 4.4+"
                }
            ]
        },
        {
            "title": "Open Data Hub 1.1 - July 2021",
            "version": 1.1,
            "children": [
                {
                    "title": "Kubeflow 1.3",
                    "description": "Update the Openshift Kubeflow distribution to Kubeflow version 1.3",
                    "url": "https://github.com/kubeflow/manifests/tree/v1.3.0/distributions/stacks/openshift"
                },
                {
                    "title": "Openshift Pipelines",
                    "description": "Installation of Red Hat OpenShift Pipelines along with all of the required custom resources to enable a workflow supported by Tekton pipelines"
                },
                {
                    "title": "Trino",
                    "description": "Trino is a fast distributed SQL query engine that can integrate with multiple data sources such as S3, SQL databases, and NoSQL databases"
                },
                {
                    "title": "JupyterHub",
                    "description": "Updates include new Spawner user interface,ability to customize and specify JupyterHub PostgreSQL parameters and new notebook images with JupyterLab."
                },
                {
                    "title": "Open Data Hub operator",
                    "description": "Updates include support for Operator Level 4 (Deep Insights), new Prometheus metrics collection, new Grafana Dashboard and new status field to reflect operator installation status."
                },
                {
                    "title": "Open Data Hub Dashboard",
                    "description": "Integrated with Openshift Authentication to access the dashboard."
                }
            ]
        },
        {
            "title": "Open Data Hub 1.0 - January 2021",
            "version": 1,
            "url": "https://github.com/orgs/opendatahub-io/projects/12",
            "children": [
                {
                    "title": "ODH Data Catalog",
                    "description": "Migrate Open Data Hub Data Catalog component from Ansible to Kustomize.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/222"
                },
                {
                    "title": "Kubeflow KFServing",
                    "description": "Enable KFServing in Open Data Hub.",
                    "url": "https://github.com/opendatahub-io/manifests/issues/63"
                },
                {
                    "title": "Kubeflow Pipelines on Tekton",
                    "description": "Enable Kubeflow Pipelines using Tekton in Open Data Hub."
                },
                {
                    "title": "Disconnected Deployment",
                    "description": "Investigate and introduce ability to deploy ODH on disconnected OpenShift clusters.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/15"
                },
                {
                    "title": "JupyterHub Spawner UI Rearchitecture",
                    "description": "Replace existing static HTML spawner UI with dynamic React base one which will allow for more customization and easier extensabiliy.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/146"
                }
            ]
        },
        {
            "title": "Open Data Hub 0.9 - End of October 2020",
            "version": 0.9,
            "url": "https://github.com/orgs/opendatahub-io/projects/11",
            "children": [
                {
                    "title": "Kubeflow 1.2",
                    "description": "Add OpenShift stack in Kubeflow 1.2 to achieve release sync between ODH and KF",
                    "url": "https://github.com/opendatahub-io/manifests/issues/54"
                },
                {
                    "title": "Disconnected Deployment",
                    "moved": 1,
                    "description": "Investigate and introduce ability to deploy ODH on disconnected OpenShift clusters.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/15"
                },
                {
                    "title": "UBI based KF",
                    "moved": "1.1+",
                    "description": "Continuation of the \"UBI based ODH\" expanding to Kubeflow project and looking at what does it take to move Kubeflow components to UBI."
                },
                {
                    "title": "CI/CD",
                    "description": "Continuation of the of the effort to design and create a complete CI/CD process."
                },
                {
                    "title": "Object Storage",
                    "description": "Add an Object Storage tool based on Rook-Ceph",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/149"
                },
                {
                    "title": "Enable Monitoring",
                    "description": "Continuation of the effort to enable Prometheus enpoints in all Open Data Hub and Kubeflow components."
                },
                {
                    "title": "Open Data Hub Dashboard",
                    "description": "Team is currently creating an Open Data Hub dashboard that will be the entry point to all installed components.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/186"
                },
                {
                    "title": "Notebooks to Pipelines with Elyra",
                    "description": "Added a JupyterLab notebook image that includes Elyra. Elyra converts notebooks to Argo or Kubeflow pipelines.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/pull/171"
                }
            ]
        },
        {
            "title": "Open Data Hub 0.8 - End of August 2020",
            "version": 0.8,
            "url": "https://github.com/orgs/opendatahub-io/projects/8",
            "children": [
                {
                    "title": "ODH JupyterHub",
                    "description": "Forked JupyterHub repos under Open Data Hub github repo for maintaining new changes. Added notebook images to Thoth Station for building. Added ability to launch JupyterLab images."
                },
                {
                    "title": "Notebooks to Pipelines with Elyra",
                    "description": "Added a JupyterLab notebook image that includes Elyra. Elyra converts notebooks to Argo or Kubeflow pipelines.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/pull/171",
                    "moved": 0.9
                },
                {
                    "title": "Mixing ODH & KF components- Distributed Training",
                    "description": "Added Pytorch operator to work with Open Data Hub components.",
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/147"
                },
                {
                    "title": "Mixing ODH & KF components- Kubeflow Monitoring",
                    "description": "Added monitoring to Kubeflow components by enabling monitoring to Argo and adding Prometheus and Grafana to Kubeflow installation."
                },
                {
                    "title": "CI/CD",
                    "description": "Added more tests to Open Data Hub components including Kafka and Superset and enhanced JupyterHub testing by adding Selenium for web portal testing"
                }
            ]
        },
        {
            "title": "Open Data Hub 0.7 - End of June 2020",
            "version": 0.7,
            "children": [
                {
                    "title": "KF 1.0 on OpenShift",
                    "description": "The main goal of this initiative is to verify Kubeflow 1.0 works on OpenShift and fix the issues we find. Another goal is to document and ideally automate some of the verification process to start enabling the CI for KF on OpenSHift."
                },
                {
                    "title": "CI improvements",
                    "description": "Extending tests for all components, enabling CI for the operator repository."
                },
                {
                    "title": "Mixing ODH & KF components (start)",
                    "description": "Proving users can mix ODH and KF components, compiling a prioritized list of components to be verified and fixed, proving on the first component (probably TF Job or Pytorch Job)"
                },
                {
                    "title": "Add Object Storage Component",
                    "moved": 0.9,
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/104",
                    "description": "Since ODH relies on S3 compatible object storage, add dependency on some minimal install of OpenShift Container Storage."
                },
                {
                    "title": "Convert Data Catalog to Kustomize",
                    "moved": 1,
                    "url": "https://github.com/opendatahub-io/odh-manifests/issues/105",
                    "description": "Data Catalog is the last component missing the conversion to Kustomize."
                }
            ]
        },
        {
            "title": "Open Data Hub 0.6 - End of April 2020",
            "version": 0.6,
            "children": [
                {
                    "title": "Rebase ODH on KF operator",
                    "description": "Use Kubeflow operator as a base for ODH."
                },
                {
                    "title": "Convert ODH components to Kustomize",
                    "description": "Convert all ODH components to Kustomize to match Kubeflow deployment tooling."
                },
                {
                    "title": "Start CI for ODH",
                    "description": "Investicate and kickstart ODH CI based on OpenShift CI"
                },
                {
                    "title": "Move to Github",
                    "description": "Since the goal of this release is to get closer to KF community, we need to move to Github"
                },
                {
                    "title": "Add Apache Airflow",
                    "description": "Add Apache Airflow as a component into Open Data Hub"
                }
            ]
        }
    ]
}
