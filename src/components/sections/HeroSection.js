import "./HeroSection.css";
import dynamics365 from "../../assets/logos/microsoft_finance.jpeg";
import leftImage1 from "../../assets/logos/hero_visual_4.png"
import leftImage2 from "../../assets/logos/hero_visual_1.png";
import rightImage1 from "../../assets/logos/hero_visual_2.png";
import rightImage2 from "../../assets/logos/hero_visual_3.png";

function HeroSection() {

    const heroTitle = "Unified ERP and AI for Smarter Operations";
    const heroWords = heroTitle.split(" ");

    return (
        <section className="hero">
            <div className="hero__inner">

                {/* Hero content */}
                <div className="hero__text">

                    <p className="hero__eyebrow">MICROSOFT CERTIFIED PARTNER • D365 + GENAI</p>

                    <h1 className="hero__heading" aria-label={heroTitle}>
                        {heroWords.map((word, index) => (
                            <span
                                key={index}
                                className="hero__heading-word"
                                style={{ animationDelay: `${index * 0.12}s` }}
                                aria-hidden="true"
                            >
                                {word}
                                {index !== heroWords.length - 1 && "\u00A0"}
                            </span>
                        ))}
                    </h1>

                    <p className="hero__subheading">
                        Sharpsys helps businesses implement Microsoft Dynamics 365, automate workflows, 
                        and turn data into faster decisions, better visibility, and scalable growth.
                    </p>

                    <div className="hero__actions">
                        <a href="/demo" className="hero__button-primary">
                            Request a Demo
                        </a>
                        <a href="/contact" className="hero__button-secondary">
                            Talk to an Expert
                        </a>
                    </div>
                </div>

                {/* Visual below */}
                <div className="hero__visual">
                    <div className="hero__gallery">
                        <div className="hero__side hero__side--left hero__side--far">
                            <img
                                src={leftImage1}
                                alt=""
                                className="hero__side-img"
                            />
                        </div>
                        <div className="hero__side hero__side--left hero__side--near">
                            <img
                                src={leftImage2}
                                alt=""
                                className="hero__side-img"
                            />
                        </div>
                        <div className="hero__browser">
                            <div className="browser__screen">
                                <img
                                    src={dynamics365}
                                    alt="Sharpsys ERP Dashboard"
                                    className="browser__img"
                                />
                            </div>
                        </div>
                        <div className="hero__side hero__side--right hero__side--near">
                            <img
                                src={rightImage1}
                                alt=""
                                className="hero__side-img"
                            />
                        </div>
                        <div className="hero__side hero__side--right hero__side--far">
                            <img
                                src={rightImage2}
                                alt=""
                                className="hero__side-img"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;