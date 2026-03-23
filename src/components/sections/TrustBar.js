import "./TrustBar.css";
import infosightLogo  from "../../assets/logos/infosight_consulting.png";
import sisLogo        from "../../assets/logos/SIS.png";
import lifecellLogo   from "../../assets/logos/life_cell.png";
import alpharithmLogo from "../../assets/logos/alpharithm.png";
import aptLogo        from "../../assets/logos/AP&T.png";
import apteanLogo     from "../../assets/logos/Aptean.png";
import criLogo        from "../../assets/logos/CRI.png";
import fomraLogo      from "../../assets/logos/Fomra.png";
import gunungLogo     from "../../assets/logos/gunung_steel.png";
import gympacLogo     from "../../assets/logos/gympac.png";
import nskLogo        from "../../assets/logos/NSK.png";
import pkfLogo        from "../../assets/logos/PKF.png";
import psiogLogo      from "../../assets/logos/Psiog_Digital.png";
import quadrantLogo   from "../../assets/logos/quadrant.png";

const LOGOS = [
    { name: "Infosight Consulting", src: infosightLogo  },
    { name: "SIS",                  src: sisLogo        },
    { name: "LifeCell",             src: lifecellLogo   },
    { name: "Alpharithm",           src: alpharithmLogo },
    { name: "AP&T",                 src: aptLogo        },
    { name: "Aptean",               src: apteanLogo     },
    { name: "CRI Pumps",            src: criLogo        },
    { name: "Fomra",                src: fomraLogo      },
    { name: "Gunung Steel",         src: gunungLogo     },
    { name: "Gympac Life Fitness",  src: gympacLogo     },
    { name: "NSK",                  src: nskLogo        },
    { name: "PKF Sridhar",          src: pkfLogo        },
    { name: "Psiog Digital",        src: psiogLogo      },
    { name: "Quadrant4",            src: quadrantLogo   },
];

function TrustBar() {
    return (
        <section className="trustbar">

            <p className="trustbar__label">
                Trusted by businesses across industries
            </p>

            <div className="trustbar__track-outer">
                <div className="trustbar__track">

                    {LOGOS.map((logo, index) => (
                        <div key={`primary-${index}`} className="trustbar__logo-item">
                        <img src={logo.src} alt={logo.name} className="trustbar__logo-img" />
                        </div>
                    ))}

                    {LOGOS.map((logo, index) => (
                        <div key={`duplicate-${index}`} className="trustbar__logo-item" aria-hidden="true">
                        <img src={logo.src} alt={logo.name} className="trustbar__logo-img" />
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}

export default TrustBar;