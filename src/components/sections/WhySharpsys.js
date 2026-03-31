import "./WhySharpsys.css";
import { useInViewOnce } from "../../hooks/useInViewOnce";

/* ─── Card data ────────────────────────────────────────────────────────────── */
const FLAGSHIP = {
    tag: "Focused Roadmap",
    title: "We scope the business first, then shape the system around it",
    body: [
        "Before configuration starts, we map workflows, process gaps, integrations, and operational constraints so the solution fits how your business actually runs.",
        "Our approach blends structured planning with agile/rapid execution, giving teams a clearer path from discovery and design to deployment and go-live."
    ],
    proof: "Discovery → Design → Build → Training & Go-Live"
};

const SMALL_CARDS = [
    {
        tag: "Reliable Predictability",
        title: "Predictable, milestone-led delivery",
        body: "Clear scope, defined handoffs, and go-live criteria keep projects moving without open-ended timelines or vague ownership."
    },
    {
        tag: "Product IP",
        title: "In-house products, real use cases",
        body: "Quotemind, E-Invoicing, Sharpchat, Smartclient, Visionmind, and Drag to Dynamics are built around real operational use cases, not generic demos."
    },
    {
        tag: "Steady Performance",
        title: "Support beyond go-live",
        body: "We stay involved with troubleshooting, tuning, training, and ongoing support so adoption and performance do not drop after launch."
    },
    {
        tag: "Agile Engagement",
        title: "Agile execution, full visibility",
        body: "We work beyond the UI layer across APIs, data movement, and business logic, with visibility and collaboration maintained throughout delivery."
    },
];

const DELAYS = [0, 250, 0, 250];

const STATS = [
    { num: "15+", label: "years of ERP and\nbusiness systems delivery" },
    { num: "40+", label: "enterprise clients\nacross industries" },
    { num: "6",   label: "proprietary products\nbuilt on Dynamics 365" },
];

const QUOTE = {
    text: "Sharpsys provided excellent support during our migration of AX application and post implementation support, including integrations and ongoing maintenance.",
    attr: "— Mr. Subramanian S, General Manager (IT Applications), Lifecell International Pvt. Ltd."
};

function FlagshipCard({ isInView }) {
    return (
        <div
            className={`why__card why__card--flagship${isInView ? " why__card--visible" : ""}`}
            style={{ "--why-card-delay": "0ms" }}
        >
            <p className="why__card-tag">{FLAGSHIP.tag}</p>
            <h3 className="why__card-title">{FLAGSHIP.title}</h3>
            <div className="why__card-divider" />
            {FLAGSHIP.body.map((para, i) => (
                <p key={i} className="why__card-body">{para}</p>
            ))}
            <span className="why__proof-chip">{FLAGSHIP.proof}</span>
        </div>
    );
}

function SmallCard({ card, delay, isInView }) {
    return (
        <div
            className={`why__card why__card--small${isInView ? " why__card--visible" : ""}`}
            style={{ "--why-card-delay": `${delay}ms` }}
        >
            <p className="why__card-tag">{card.tag}</p>
            <h3 className="why__card-title">{card.title}</h3>
            <div className="why__card-divider" />
            <p className="why__card-body">{card.body}</p>
        </div>
    );
}

function WhySharpsys() {
    const { elementRef: gridRef,  isInView: gridInView  } = useInViewOnce();
    const { elementRef: proofRef, isInView: proofInView } = useInViewOnce();

    return (
        <section className="why">
            <div className="why__inner">

                <div className="why__header">
                    <p className="why__eyebrow">Why Sharpsys</p>
                    <h2 className="why__heading">
                        Tailored roadmaps. Predictable delivery. Agile execution.
                    </h2>
                    <p className="why__subheading">
                        Sharpsys combines structured implementation, agile engagement, and long-term support 
                        to deliver business systems that fit your operations and keep performing after go-live.
                    </p>
                </div>

                <div ref={gridRef} className="why__grid">
                    <FlagshipCard isInView={gridInView} />
                    {SMALL_CARDS.map((card, index) => (
                        <SmallCard
                            key={card.tag}
                            card={card}
                            delay={DELAYS[index]}
                            isInView={gridInView}
                        />
                    ))}
                </div>

                <div
                    ref={proofRef}
                    className={`why__proof${proofInView ? " why__proof--visible" : ""}`}
                >
                    {STATS.map((stat) => (
                        <div key={stat.num} className="why__proof-stat">
                            <span className="why__proof-num">{stat.num}</span>
                            <span className="why__proof-label">
                                {stat.label.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i === 0 && <br />}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}

                    <div className="why__proof-quote">
                        <p className="why__proof-quote-text">"{QUOTE.text}"</p>
                        <p className="why__proof-quote-attr">{QUOTE.attr}</p>
                    </div>
                </div>        
            </div>
        </section>
    );
}

export default WhySharpsys;