import "./Footer.css";
import logo from "../../assets/logos/logo_footer.png";
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

const SERVICES = [
    { label: "Enterprise Solutions",  href: "/services/enterprise-solutions"  },
    { label: "CRM",                   href: "/services/crm"                   },
    { label: "Advanced Analytics",    href: "/services/advanced-analytics"    },
    { label: "Business Intelligence", href: "/services/business-intelligence" },
    { label: "Staff Augmentation",    href: "/services/staff-augmentation"    },
];

const PRODUCTS = [
    { label: "Quotemind",        href: "/products/quotemind"        },
    { label: "E-Invoicing",      href: "/products/e-invoicing"      },
    { label: "Sharpchat",        href: "/products/sharpchat"        },
    { label: "Smartclient",      href: "/products/smartclient"      },
    { label: "Visionmind",       href: "/products/visionmind"       },
    { label: "Drag to Dynamics", href: "/products/drag-to-dynamics" },
];

const COMPANY = [
    { label: "About Us",     href: "/about"   },
    { label: "Why Sharpsys", href: "/why"     },
    { label: "Careers",      href: "/careers" },
    { label: "Contact Us",   href: "/contact" },
    { label: "Privacy Policy", href: "/privacypolicy" }
];

function Footer() {
    return (
        <footer className="footer">

            <div className="footer__body">

                <div className="footer__brand">
                    <img src={logo} alt="Sharpsys" className="footer__logo" />

                    <p className="footer__tagline">Microsoft Dynamics Partner</p>

                    <div className="footer__contact">
                        <p className="footer__contact-line footer__contact-line--email">
                            contactus@sharpsyssoft.com
                        </p>
                        <p className="footer__contact-line">Chennai, India</p>
                    </div>

                    <div className="footer__socials">
                        <a href="https://x.com/sharpsys38391" target="_blank" rel="noopener noreferrer" className="footer__social footer__social--x" aria-label="X">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.instagram.com/sharpsyssoft/" target="_blank" rel="noopener noreferrer" className="footer__social footer__social--instagram" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@sharpsys3669" target="_blank" rel="noopener noreferrer" className="footer__social footer__social--youtube" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                        <a href="https://www.linkedin.com/company/sharpsys-software-solutions-india-pvt-ltd" target="_blank" rel="noopener noreferrer" className="footer__social footer__social--linkedin" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div>
                    <p className="footer__col-title">Services</p>
                    <ul className="footer__links">
                        {SERVICES.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="footer__link">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="footer__col-title">Products</p>
                    <ul className="footer__links">
                        {PRODUCTS.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="footer__link">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="footer__col-title">Company</p>
                    <ul className="footer__links">
                        {COMPANY.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="footer__link">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="footer__bottom">
                <p className="footer__copy">
                    © {new Date().getFullYear()} Sharpsys Software Solutions [l] Pvt. Ltd., | All rights reserved
                </p>
            </div>

        </footer>
    );
}

export default Footer;