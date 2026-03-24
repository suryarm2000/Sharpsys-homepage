import "./ServicesSection.css";

const SERVICES = [
    {
        number: "01",
        title: "Enterprise Solutions",
        description:
            "Implement Microsoft Dynamics 365 solutions across finance, operations, and business growth. From Finance & Operations and Business Central to Power Platform, we tailor each deployment to your workflows, integrations, and scale goals.",
        chips: ["Dynamics 365 F&O", "Business Central", "Power Platform"],
        capability: "Implementation · Customization · Integration · Support",
        link: "/services/enterprise-solutions",
        hero: true,
    },
    {
        number: "02",
        title: "CRM",
        description:
            "Connect sales, service, and customer workflows with CRM solutions that improve visibility, response time, and relationship management across teams.",
        link: "/services/crm",
    },
    {
        number: "03",
        title: "Business Intelligence",
        description:
            "Build dashboards and reporting systems that help teams track KPIs, monitor performance, and make clearer business decisions.",
        link: "/services/business-intelligence",
    },
    {
        number: "04",
        title: "Advanced Analytics",
        description:
            "Go beyond reporting with scalable analytics solutions that help teams forecast trends, improve data quality, and make faster, better decisions across the business.",
        link: "/services/advanced-analytics",
    },
    {
        number: "05",
        title: "Staff Augmentation",
        description:
            "Extend your team with skilled Dynamics and technology professionals who can accelerate delivery, fill capability gaps, and support critical business initiatives.",
        link: "/services/staff-augmentation",
    },
];

function ServicesSection() {
    return (
        <section className="services">
            <div className="services__inner">

                {/* Header */}
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

                {/* Bento Grid */}
                <div className="services__grid">
                    {SERVICES.map((service) => (
                        <a
                            href={service.link}
                            key={service.link}
                            className={`services__card${service.hero ? " services__card--hero" : ""}`}
                        >
                            {/* Corner arrow */}
                            <span className="services__card-arrow" aria-hidden="true">↗</span>

                            <span className="services__card-number">{service.number}</span>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-description">{service.description}</p>

                            {/* Chips */}
                            {service.chips && (
                                <div className="services__chips">
                                    {service.chips.map((chip) => (
                                        <span key={chip} className="services__chip">{chip}</span>
                                    ))}
                                </div>
                            )}

                            {/* Capability line */}
                            {service.capability && (
                                <p className="services__capability">{service.capability}</p>
                            )}

                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ServicesSection;