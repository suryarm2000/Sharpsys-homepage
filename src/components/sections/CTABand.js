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
                    <a href="/consultation" className="cta__btn-primary">
                        Schedule a Call
                    </a>
                    <a href="/demo" className="cta__btn-secondary">
                        Request a Demo
                    </a>
                </div>

            </div>
        </section>
    );
}

export default CtaBand;