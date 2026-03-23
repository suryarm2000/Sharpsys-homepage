import "./ServicesSection.css";

const SERVICES = [
    {
        number: "01",
        title: "Enterprise Solutions",
        description:
            "Implement Microsoft Dynamics solutions that streamline operations and support growth.",
        link: "/services/enterprise-solutions",
    },
    {
        number: "02",
        title: "CRM",
        description:
            "Connect sales and service workflows for better visibility and faster response.",
        link: "/services/crm",
    },
    {
        number: "03",
        title: "Advanced Analytics",
        description:
            "Turn business data into actionable insights with scalable analytics solutions.",
        link: "/services/advanced-analytics",
    },
    {
        number: "04",
        title: "Business Intelligence",
        description:
            "Track KPIs with dashboards built for faster, clearer decision-making.",
        link: "/services/business-intelligence",
    },
    {
        number: "05",
        title: "Staff Augmentation",
        description:
            "Extend your team with skilled Dynamics professionals when you need them.",
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

                {/* Cards */}
                <div className="services__grid">
                    {SERVICES.map((service) => (
                        <div key={service.link} className="services__card">
                            <span className="services__card-number">{service.number}</span>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-description">{service.description}</p>
                            <a href={service.link} className="services__card-link">
                                Learn more →
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ServicesSection;