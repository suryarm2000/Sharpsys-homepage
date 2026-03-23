import "./HeroSection.css";
import dashboardImg from "../../assets/dashboard-overview.png";

function HeroSection(){

    return(
        <section className="hero">
            <div className="hero__inner">
                {/* Left content */}
                <div className="hero__text">
                    <h1 className="hero__heading">
                        Microsoft Dynamics solutions that simplify operations
                    </h1>
                    <p className="hero__subheading">
                        Tailored Microsoft Dynamics solutions that streamline workflows, 
                        improve visibility, and help teams make faster decisions.
                    </p>

                    <div className="hero__actions">
                        <a href="/demo" className="hero__button hero__button-primary">
                            Request a Demo
                        </a>
                        <a href="/contact" className="hero__button hero__button-secondary">
                            Talk to an Expert
                        </a>
                    </div>
                </div>

                {/* Right visual */}
                <div className="hero__visual">
                    <div className="hero__browser">
                        <div className="browser__screen">
                            <img
                                src={dashboardImg}
                                alt="Sharpsys ERP Dashboard"
                                className="browser__img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default HeroSection;