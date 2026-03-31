import "./ProductsSection.css";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import quotemindImg from "../../assets/logos/quotemind.png";
import einvoicingIcon  from "../../assets/logos/einvoicingIcon.png";
import sharpchatIcon   from "../../assets/logos/sharpchatIcon.png";
import visionmindIcon  from "../../assets/logos/visionmindIcon.png";
import smartclientIcon from "../../assets/logos/smartclientIcon.png";
import dragIcon        from "../../assets/logos/dragIcon.png";

const MINI_PRODUCTS = [
    {
        title: "Drag to Dynamics",
        description: "A secure drag-and-drop upload control for D365FO with live progress feedback and reusable deployment across forms.",
        link: "/dragtodynamics",
        cta: "Learn more",
        icon: dragIcon
    },
    {
        title: "E-Invoicing",
        description: "Built-in Dynamics 365 F&O e-invoicing for GST validation, IRP submission, and real-time status tracking.",
        link: "/einvoice",
        cta: "Learn more",
        icon: einvoicingIcon
    },
        {
        title: "Smartclient",
        description: "A customer collaboration portal for RFQs, quotations, order tracking, dispatch visibility, and invoice access.",
        link: "/smartclient",
        cta: "Learn more",
        icon: smartclientIcon
    },
    {
        title: "Sharpchat",
        description: "Enterprise conversational AI that connects with business systems across Dynamics 365, web, mobile, WhatsApp, and intranet.",
        link: "/sharpchat",
        cta: "Learn more",
        icon: sharpchatIcon
    },
    {
        title: "Visionmind",
        description: "AI-powered visual inspection for real-time defect detection across production and warehouse workflows.",
        link: "/visionmind",
        cta: "Learn more",
        icon: visionmindIcon
    },
];

const DELAYS = [0, 150, 300, 450, 600];

function MiniCard({ product, delay, isInView }) {
    return (
        <a
            href={product.link}
            className={`products__mini-card${isInView ? " products__mini-card--visible" : ""}`}
            style={{ "--products-mini-delay": `${delay}ms` }}
        >
            <div className="products__mini-card-inner">
                <div className="products__mini-body">
                    <div className="products__mini-icon-wrap">
                        {product.icon ? (
                            <img
                                src={product.icon}
                                alt={product.title}
                                className="products__mini-icon"
                            />
                        ) : (
                            <span style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "rgb(255, 45, 85)",
                                lineHeight: 1,
                            }}>
                                {product.title.charAt(0)}
                            </span>
                        )}
                    </div>
                    <p className="products__mini-title">{product.title}</p>
                    <p className="products__mini-desc">{product.description}</p>
                </div>

                <div className="products__mini-footer">
                    <span className="products__mini-link">{product.cta}</span>
                    <span className="products__mini-arrow">→</span>
                </div>
            </div>
        </a>
    );
}

function ProductsSection() {
    const { elementRef: flagshipRef, isInView: flagshipInView } = useInViewOnce();

    const { elementRef: gridRef, isInView: gridInView } = useInViewOnce();

    return (
        <section className="products">
            <div className="products__inner">

                <div className="products__header">
                    <p className="products__eyebrow">Our Products</p>
                    <h2 className="products__heading">
                        Built on Dynamics.&nbsp;Powered by AI.
                    </h2>
                    <p className="products__subheading">
                        <p className="products__subheading">
                            Focused products designed to remove friction from quoting, invoicing, collaboration, and operational workflows.
                        </p>
                    </p>
                </div>

                <div
                    ref={flagshipRef}
                    className={`products__flagship${flagshipInView ? " products__flagship--visible" : ""}`}
                >
                    <div className="products__flagship-text">
                        <div className="products__flagship-badges">
                            <span className="products__badge products__badge--ai">AI-powered</span>
                            <span className="products__badge products__badge--platform">Dynamics 365 F&amp;O</span>
                        </div>

                        <h3 className="products__flagship-title">Quotemind</h3>

                        <div className="products__flagship-divider" />

                        <p className="products__flagship-desc">
                            Automate complex RFQ and quote generation inside Dynamics 365 Finance &amp; Operations.
                            Quotemind uses AI-assisted material prediction, automated costing, and ERP-connected
                            quote generation to reduce manual effort and speed up accurate quote turnaround for
                            engineering and sales teams.
                        </p>

                        <div className="products__flagship-actions">
                            <a href="/quotemid" className="products__flagship-cta-primary">
                                See Quotemind
                            </a>
                            <a href="/demo" className="products__flagship-cta-secondary">
                                Request a demo
                            </a>
                        </div>
                    </div>

                    <div className="products__flagship-visual">
                        <img
                            src={quotemindImg}
                            alt="Quotemind — AI-powered quoting inside Dynamics 365"
                            className="products__flagship-img"
                        />
                    </div>
                </div>

                <div ref={gridRef} className="products__grid">
                    {MINI_PRODUCTS.map((product, index) => (
                        <MiniCard
                            key={product.link}
                            product={product}
                            delay={DELAYS[index]}
                            isInView={gridInView}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProductsSection;