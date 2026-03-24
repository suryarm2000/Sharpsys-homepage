import "./Footer.css";
import logo from "../../assets/logos/logo_main.png";
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const SERVICES = [
    { label: "Enterprise Solutions",  href: "/services/enterprise-solutions" },
    { label: "CRM",                   href: "/services/crm" },
    { label: "Advanced Analytics",    href: "/services/advanced-analytics" },
    { label: "Business Intelligence", href: "/services/business-intelligence" },
    { label: "Staff Augmentation",    href: "/services/staff-augmentation" },
];

const PRODUCTS = [
    { label: "Quotemind",        href: "/quotemind" },
    { label: "Drag to Dynamics", href: "/dragtodynamics" },
    { label: "E-Invoicing",      href: "/einvoice" },
    { label: "Smartclient",      href: "/smartclient" },
    { label: "Sharpchat",        href: "/sharpchat" },
];

const COMPANY = [
    { label: "About Us",     href: "/about" },
    { label: "Why Sharpsys", href: "/why-sharpsys" },
    { label: "Careers",      href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us",   href: "/contact" },
];

const SOCIALS = [
    { label: "X / Twitter", href: "https://x.com/sharpsys38391", Icon: FaXTwitter   },
    { label: "Instagram", href: "https://www.instagram.com/sharpsyssoft/", Icon: FaInstagram  },
    { label: "YouTube", href: "https://www.youtube.com/@sharpsys3669", Icon: FaYoutube    },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sharpsys-software-solutions-india-pvt-ltd/s", Icon: FaLinkedinIn },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__body">
                <div className="footer__grid">

                    {/* Brand column */}
                    <div className="footer__brand">
                        <a href="/" className="footer__logo">
                            <img
                                src={logo}
                                alt="Sharpsys Software Solutions"
                                className="footer__logo-img"
                            />
                        </a>
                        <p className="footer__tagline">Microsoft Dynamics Partner</p>
                        <p className="footer__contact-line">contact@sharpsys.com</p>
                        <p className="footer__contact-line">Chennai, India</p>
                        <div className="footer__socials">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="footer__social"
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer__col">
                        <p className="footer__col-title">Our Services</p>
                        <ul className="footer__links">
                            {SERVICES.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="footer__link">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer__col">
                        <p className="footer__col-title">Our Products</p>
                        <ul className="footer__links">
                            {PRODUCTS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="footer__link">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer__col">
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
            </div>

            {/* Bottom bar */}
            <div className="footer__bottom">
                <p className="footer__copy">
                    © 2025 Sharpsys Software Solutions (I) Pvt. Ltd. All rights reserved.
                </p>
                <a href="/privacy" className="footer__privacy">Privacy Policy</a>
            </div>

        </footer>
    );
}

export default Footer;