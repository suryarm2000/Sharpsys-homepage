import "./CtaBand.css";

function CtaBand() {
    return (
        <section className="cta">
            <div className="cta__inner">

                <p className="cta__eyebrow">Let's talk</p>

                <h2 className="cta__heading">
                    Ready to choose the right Microsoft solution for your business?
                </h2>

                <p className="cta__subtext">
                    Get expert advice on Microsoft Dynamics, Power Platform,
                    licensing, implementation, and support.
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