import "./ServicesSection.css";
import ServiceCard from "./ServiceCard";
import iconEnterprise from "../../assets/logos/erp.svg";
import iconCRM from "../../assets/logos/crm.jpg";
import iconBI from "../../assets/logos/business-intelligence.png";
import iconAnalytics from "../../assets/logos/data.png";
import iconStaff from "../../assets/logos/staff-management.png";

const SERVICES = [
    {
        title: "Enterprise Solutions",
        description:
            "Implement Microsoft Dynamics 365 solutions that bring finance, operations, supply chain, customer service, and reporting into one connected business system. We help organizations deploy, customize, integrate, and support Dynamics 365 Finance & Operations, Business Central, and Power Platform based on real operational needs, not generic templates.",
        chips: ["Dynamics 365 F&O", "Business Central", "Power Platform"],
        capability: "Implementation · Customization · Integration · Support",
        link: "/services/enterprise-solutions",
        cta: "Explore Enterprise",
        icon: iconEnterprise,
        hero: true,
    },
    {
        title: "CRM & Customer Engagement",
        description:
            "Modernize how your teams manage leads, accounts, service requests, field operations, and customer communication. Our CRM solutions are built around Microsoft Dynamics 365 to improve pipeline visibility, strengthen customer relationships, streamline service workflows, and help teams respond faster with better context across every interaction.",
        link: "/services/crm",
        cta: "Explore CRM",
        icon: iconCRM,
    },
    {
        title: "Business Intelligence",
        description:
            "Turn disconnected business data into dashboards, reports, and visual insights that leaders can actually use. We deliver Power BI and Tableau solutions for KPI tracking, executive reporting, self-service analytics, and real-time performance monitoring, helping teams move from static reporting to faster, more confident decision-making.",
        link: "/services/business-intelligence",
        cta: "Explore BI",
        icon: iconBI,
    },
    {
        title: "Advanced Analytics",
        description:
            "Build a stronger data foundation for forecasting, optimization, and smarter business planning. Our advanced analytics services cover data migration, ETL, warehousing, analytics engineering, machine learning, and consulting, helping organizations improve data quality, unify fragmented sources, and turn raw information into actionable business intelligence.",
        link: "/services/advanced-analytics",
        cta: "Explore Analytics",
        icon: iconAnalytics,
    },
    {
        title: "Staff Augmentation",
        description:
            "Extend your delivery capacity with experienced Microsoft Dynamics and data professionals who can plug into your team quickly. We provide flexible engagement models including dedicated resources, time-and-material support, and package-based delivery so you can close skill gaps, accelerate project timelines, and maintain momentum without long hiring cycles.",
        link: "/services/staff-augmentation",
        cta: "Explore Staffing",
        icon: iconStaff,
    },
];

function ServicesSection() {

    const DELAYS = [0, 0, 250, 0, 250];

    return (
        <section className="services">
            <div className="services__inner">
                <div className="services__header">
                    <p className="services__eyebrow">Our Services</p>
                    <h2 className="services__heading">
                        Solutions built around your business
                    </h2>
                    <p className="services__subheading">
                        From ERP implementation to staff augmentation, we cover the full
                        spectrum of what your team needs to move faster and operate smarter.
                    </p>
                </div>

                <div className="services__grid">
                    {SERVICES.map((service, index) => (
                        <ServiceCard 
                            key={service.link} 
                            service={service}
                            delay={DELAYS[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;