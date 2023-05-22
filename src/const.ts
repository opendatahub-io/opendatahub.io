import { LinkedContent, PersonaBenefits, SideNavItemConfig } from "./types";
import logo from "./content/assets/img/logos/datahub_mark_color-blkbg.png";
import placeholderImage from "./content/assets/img/placeholder.svg";

export const DOCS_NAVIGATION: SideNavItemConfig[] = [
    {
        title: "Getting started with Open Data Hub",
        slug: "/docs/getting-started-with-open-data-hub/"
    },
    {
        title: "Working on data science projects",
        slug: "/docs/working-on-data-science-projects/"
    },
    {
        title: "Administration",
        slug: "/docs/administration",
        children: [
            {
                title: "Advanced Installation",
                slug: "/docs/administration/advanced-installation",
                children: [
                    {
                        title: "GPU Enablement",
                        slug: "/docs/administration/advanced-installation/gpu"
                    },
                    {
                        title: "Installing Object Storage",
                        slug: "/docs/administration/advanced-installation/object-storage"
                    },
                    {
                        title: "Pre-requisites for Optional Components",
                        slug: "/docs/administration/advanced-installation/optional"
                    }
                ]
            },
            {
                title: "Installation Customization",
                slug: "/docs/administration/installation-customization",
                children: [
                    {
                        title: "Adding Custom Notebook Images",
                        slug: "/docs/administration/installation-customization/add-custom-image"
                    },
                    {
                        title: "Customizing the Installation",
                        slug: "/docs/administration/installation-customization/customization"
                    }
                ]
            }
        ]
    },
    {
        title: "Advanced Tutorials",
        slug: "/docs/advanced-tutorials",
        children: [
            {
                title: "Data Exploration",
                slug: "/docs/advanced-tutorials/data-exploration"
            }
        ]
    },
    {
        title: "Additional Resources",
        slug: "/docs/additional"
    },
    {
        title: "Architecture",
        slug: "/docs/architecture"
    },
    {
        title: "Tiered Components",
        slug: "/docs/tiered-components"
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

export enum SourceInstanceNameLabel {
    videos = "VIDEO",
    blog = "BLOG",
    audio = "AUDIO",
    releases = "RELEASE"
}

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