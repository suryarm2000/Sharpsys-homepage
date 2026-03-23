import "./MicrosoftSection.css";

const CHIPS = [
    "Dynamics 365 F&O",
    "Business Central",
    "Dynamics 365 CE",
    "Power BI",
    "PowerApps",
    "Azure",
];

const CAPABILITIES = [
    "Implementation, customization, and integration",
    "Licensing, subscription, and Microsoft support",
    "24/7 monitoring, maintenance, and troubleshooting",
];

function MicrosoftSection() {
    return (
        <section className="ms">
            <div className="ms__inner">

                {/* Left: main content */}
                <div className="ms__content">
                    <p className="ms__eyebrow">Microsoft Certified Partner</p>
                    <h2 className="ms__heading">
                        Microsoft Dynamics expertise across ERP, CRM, and analytics
                    </h2>
                    <p className="ms__body">
                        Sharpsys helps businesses implement, customize, integrate, and
                        support Microsoft business applications across Dynamics 365,
                        Power Platform, and Azure.
                    </p>
                    <div className="ms__actions">
                        <a href="/schedule" className="ms__btn-primary">Schedule a Call</a>
                        <a href="/microsoft" className="ms__btn-secondary">Explore Solutions</a>
                    </div>
                </div>

                {/* Right: detail panel */}
                <div className="ms__panel">

                    <div className="ms__panel-block">
                        <p className="ms__panel-label">Products we work with</p>
                        <div className="ms__chips">
                            {CHIPS.map((chip) => (
                                <span key={chip} className="ms__chip">{chip}</span>
                            ))}
                        </div>
                    </div>

                    <div className="ms__panel-divider"></div>

                    <div className="ms__panel-block">
                        <p className="ms__panel-label">What we deliver</p>
                        <ul className="ms__capabilities">
                            {CAPABILITIES.map((item) => (
                                <li key={item} className="ms__capability-item">{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default MicrosoftSection;