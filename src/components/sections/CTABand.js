import "./CtaBand.css";

function CtaBand() {
    return (
        <section className="cta">
            <div className="cta__inner">

                <p className="cta__eyebrow">Let's talk</p>

                <h2 className="cta__heading">
                    Ready to plan the right solution for your business?
                </h2>

                <p className="cta__subtext">
                    Talk to Sharpsys about ERP, AI products, integrations, and implementation support 
                    — and get practical guidance tailored to your operations.
                </p>

                <div className="cta__actions">
                    <a href="/demo" className="cta__btn-primary">
                        Request a Demo
                    </a>
                    <a href="/consultations" className="cta__btn-secondary">
                        Schedule a Call
                    </a>
                </div>

            </div>
        </section>
    );
}

export default CtaBand;