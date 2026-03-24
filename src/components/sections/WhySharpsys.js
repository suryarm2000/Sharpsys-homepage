import "./WhySharpsys.css";

const BLOCKS = [
    {
        number: "01",
        heading: "Microsoft-first business applications expertise",
        copy: "Delivering implementations, customization, and integration across Dynamics 365, Power Platform, and Azure for connected business operations.",
        proof: "Microsoft Certified Partner · D365 F&O · Business Central · CE · Power BI · PowerApps · Azure",
    },
    {
        number: "02",
        heading: "Delivery with clarity from planning to go-live",
        copy: "A blended implementation model that combines structured planning with agile execution, helping teams move faster without losing control.",
        proof: "Waterfall + Microsoft Sure Step + Agile / Rapid implementation",
    },
    {
        number: "03",
        heading: "Long-term support, not just project delivery",
        copy: "From post-implementation support and monitoring to on-demand services and staff augmentation, Sharpsys stays involved after launch.",
        proof: "AMC / maintenance · on-demand services · 24/7 support for critical systems",
    },
];

const STATS = [
    { value: "15+", label: "Years trusted experience" },
    { value: "40+",  label: "Clients across the globe" },
    {
        value: null,
        label: null,
        quote: {
            text: "Sharpsys helped us successfully complete our AX 2012 R3 work, including integrations and ongoing support.",
            name: "Mr. Subramanian S",
            role: "General Manager (IT Applications)",
            company: "Lifecell International Pvt. Ltd.",
        },
    },
];

function WhySharpsys() {
    return (
        <section className="why">
            <div className="why__inner">

                {/* Header */}
                <div className="why__header">
                    <p className="why__eyebrow">Why Sharpsys</p>
                    <h2 className="why__heading">
                        Built on Microsoft. Focused on business outcomes.
                    </h2>
                </div>

                {/* Blocks */}
                <div className="why__grid">
                    {BLOCKS.map((block) => (
                        <div key={block.number} className="why__block">
                            <span className="why__block-number">{block.number}</span>
                            <h3 className="why__block-heading">{block.heading}</h3>
                            <p className="why__block-copy">{block.copy}</p>
                            <p className="why__block-proof">{block.proof}</p>
                        </div>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="why__statsbar">

                    {/* Stat 1 */}
                    <div className="why__stat">
                        <span className="why__stat-value">{STATS[0].value}</span>
                        <span className="why__stat-label">{STATS[0].label}</span>
                    </div>

                    {/* Stat 2 */}
                    <div className="why__stat">
                        <span className="why__stat-value">{STATS[1].value}</span>
                        <span className="why__stat-label">{STATS[1].label}</span>
                    </div>

                    {/* Client quote */}
                    <div className="why__stat why__stat--quote">
                        <p className="why__quote-text">"{STATS[2].quote.text}"</p>
                        <div className="why__quote-attribution">
                            <span className="why__quote-name">{STATS[2].quote.name}</span>
                            <span className="why__quote-role">
                                {STATS[2].quote.role}, {STATS[2].quote.company}
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default WhySharpsys;
