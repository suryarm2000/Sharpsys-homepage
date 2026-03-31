import { FiArrowRight } from "react-icons/fi";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import microsoftDynamics from "../../assets/logos/microsoft_dynamics.avif";

function ServiceCard({ service, delay = 0 }) {
    const { elementRef, isInView } = useInViewOnce();

    const cardClassName = [
        "services__card", service.hero ? "services__card--hero" : "", isInView ? "services__card--visible" : "",
    ].filter(Boolean).join(" ");

    return (
        <article 
            ref={elementRef} 
            className={cardClassName} 
            style={{ '--services-card-delay': `${delay}ms` }}
        >
            {service.hero ? (
                <div className="services__card-body">
                    <div className="services__hero-text">
                        <div className="services__card-header-row">
                            <img src={service.icon} alt="" className="services__card-icon" />
                            <h3 className="services__card-title">{service.title}</h3>
                        </div>

                        <div className="services__header-divider" />

                        <p className="services__card-description">
                            {service.description}
                        </p>

                        <div className="services__chips">
                            {service.chips.map((chip) => (
                                <span key={chip} className="services__chip">
                                    {chip}
                                </span>
                            ))}
                        </div>

                        <p className="services__capability">{service.capability}</p>

                        <div className="services__card-divider" />

                        <a href={service.link} className="services__card-footer">
                            <span className="services__footer-label">{service.cta}</span>
                            <span className="services__footer-sep" />
                            <span className="services__footer-arrow">
                                <FiArrowRight size={20} />
                            </span>
                        </a>
                    </div>

                    <div className="services__hero-visual">
                        <img
                            src={microsoftDynamics}
                            alt="Microsoft Dynamics 365 dashboard"
                            className="services__hero-img"
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="services__card-body">
                        <div className="services__card-header-row">
                            <img src={service.icon} alt="" className="services__card-icon" />
                            <h3 className="services__card-title">{service.title}</h3>
                        </div>

                        <div className="services__header-divider" />

                        <p className="services__card-description">
                            {service.description}
                        </p>
                    </div>

                    <div className="services__card-divider" />

                    <a href={service.link} className="services__card-footer">
                        <span className="services__footer-label">{service.cta}</span>
                        <span className="services__footer-sep" />
                        <span className="services__footer-arrow">
                            <FiArrowRight size={20} />
                        </span>
                    </a>
                </>
            )}
        </article>
    );
}

export default ServiceCard;