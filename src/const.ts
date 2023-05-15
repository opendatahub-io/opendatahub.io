import { LinkedContent, SideNavItemConfig } from "./types";

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