export interface Product {
    slug: string;
    title: string;
    desc: string;
    image: string;
    features: string[];
    details: {
        longDescription: string;
        benefits: string[];
        technicalSpecs: Record<string, string>;
        targetAudience: string[];
    };
}

export const products: Product[] = [
    {
        slug: "ai-analytics-suite",
        title: "AI Analytics Suite",
        desc: "Advanced AI-powered analytics platform for real-time business insights and predictive modeling.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
        details: {
            longDescription: "Unleash the power of your data with our AI Analytics Suite. This comprehensive platform leverages state-of-the-art machine learning algorithms to transform raw data into actionable strategic insights. Whether you need to forecast market trends, optimize supply chains, or personalize customer experiences, our suite provides the intelligence you need to stay ahead of the competition.",
            benefits: [
                "Reduce operational costs by identifying inefficiencies automatically.",
                "Increase revenue through data-driven decision making.",
                "Seamless integration with existing data infrastructure (SQL, NoSQL, Data Lakes).",
                "User-friendly interface designed for both data scientists and business executives."
            ],
            technicalSpecs: {
                "Deployment": "Cloud (AWS, Azure, GCP), On-Premise, Hybrid",
                "Supported Data Sources": "Apache Kafka, PostgreSQL, MongoDB, Snowflake, REST APIs",
                "AI Models": "Regression, Classification, Neural Networks, Time-Series Forecasting",
                "Security": "SSO, RBAC, End-to-end Encryption (AES-256)"
            },
            targetAudience: ["Financial Services", "Retail", "Manufacturing", "Healthcare"]
        }
    },
    {
        slug: "cloud-solutions",
        title: "Cloud Solutions",
        desc: "Scalable cloud infrastructure services ensuring high availability and security for your applications.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        features: ["Auto-scaling", "Load Balancing", "Secure Storage"],
        details: {
            longDescription: "Our Cloud Solutions provide a robust, secure, and scalable foundation for your digital enterprise. We handle the complexities of cloud infrastructure management, allowing your team to focus on innovation. From effortless auto-scaling to rigorous security compliance, we ensure your applications are always available and performing at their peak.",
            benefits: [
                "99.99% Uptime SLA for critical workloads.",
                "Automated scaling to handle traffic spikes without manual intervention.",
                "Integrated disaster recovery and backup solutions.",
                "Cost optimization tools to prevent budget overruns."
            ],
            technicalSpecs: {
                "Architecture": "Microservices, Serverless, Containerized (Kubernetes)",
                "Storage": "Object Storage, Block Storage, File Systems",
                "Compliance": "GDPR, HIPAA, SOC 2 Type II",
                "Monitoring": "Real-time metrics, Distributed Tracing, Log Aggregation"
            },
            targetAudience: ["SaaS Startups", "Enterprise IT", "E-commerce Platforms"]
        }
    },
    {
        slug: "iot-platform",
        title: "IoT Platform",
        desc: "Comprehensive device management platform for monitoring and controlling industrial IoT ecosystems.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        features: ["Device Management", "Remote Monitoring", "OTA Updates"],
        details: {
            longDescription: "Connect, manage, and secure your improved fleet of devices with our industrial-grade IoT Platform. Designed for scale, it supports millions of concurrent connections, enabling real-time bi-directional communication. Simplify the complexity of IoT deployments with features like over-the-air (OTA) firmware updates, remote diagnostics, and predictive maintenance capabilities.",
            benefits: [
                "Centralized management dashboard for all diverse edge devices.",
                "Secure onboarding and lifecycle management using x.509 certificates.",
                "Real-time telemetry data processing and visualization.",
                "Reduce downtime with predictive maintenance alerts."
            ],
            technicalSpecs: {
                "Protocols": "MQTT, CoAP, HTTP/S, WebSocket, LwM2M",
                "Edge Compute": "Docker support on edge gateways",
                "Connectivity": "Cellular (4G/5G/NB-IoT), Wi-Fi, LoRaWAN",
                "Scalability": "Up to 10 million devices per instance"
            },
            targetAudience: ["Smart Cities", "Logistics", "Industrial Automation", "Agriculture"]
        }
    },
    {
        slug: "cyber-security-consultant",
        title: "Cyber Security Auditing and Information Security Assurance",
        desc: "Strategic security consulting to fortify your infrastructure against modern cyber threats and ensure compliance.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
        features: ["Risk Assessment", "Penetration Testing", "Security Compliance"],
        details: {
            longDescription: "In an era of sophisticated cyber threats, our Cyber and Information Security Consulting services provide the shield your business needs. We go beyond simple checklists to offer deep-dive technical assessments, red teaming operations, and strategic roadmap development. Our experts work alongside your team to build a culture of security and resilience.",
            benefits: [
                "Identify and remediate critical vulnerabilities before attackers exploit them.",
                "Achieve and maintain compliance with industry standards (ISO 27001, PCI-DSS).",
                "Enhance incident response capabilities and reduce recovery time.",
                "Regular security training and phishing simulations for employees."
            ],
            technicalSpecs: {
                "Services": "Vulnerability Assessment, Penetration Testing (Web/Mobile/Network), Architecture Review",
                "Compliance Frameworks": "NIST, ISO 27001, GDPR, HIPAA",
                "Tools Used": "Burp Suite Pro, Nessus, Metasploit, Custom Scripts",
                "Deliverables": "Executive Summary, Technical Report, Remediation Roadmap"
            },
            targetAudience: ["Banking & Finance", "Healthcare Providers", "Government Agencies", "Tech Enterprises"]
        }
    },
    {
        slug: "patent-writing-services",
        title: "Patent Writing Services",
        desc: "Expert patent drafting and filing services to protect your intellectual property.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        features: ["Patent Drafting", "Prior Art Search", "Filing Assistance"],
        details: {
            longDescription: "Our Patent Writing Services provide end-to-end support for inventors and businesses looking to protect their innovations. From conducting exhaustive prior art searches to drafting robust patent applications that withstand scrutiny, our team of experienced patent attorneys and technical writers ensures your intellectual property is secure.",
            benefits: [
                "Maximize the scope of your patent protection.",
                "Reduce the risk of rejection with thorough prior art searches.",
                "Streamlined filing process for domestic and international patents (PCT).",
                "Expert guidance on patent strategy and portfolio management."
            ],
            technicalSpecs: {
                "Service Types": "Utility Patents, Design Patents, Provisional Applications",
                "Jurisdictions": "US (USPTO), EU (EPO), India (IPO), International (PCT)",
                "Deliverables": "Draft Application, Search Report, Filing Receipt",
                "Turnaround Time": "Expedited services available (5-10 business days)"
            },
            targetAudience: ["Inventors", "R&D Labs", "Startups", "Universities"]
        }
    }
];
