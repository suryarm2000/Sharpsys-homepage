import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/logo_main.png";
import { IoChevronDown } from "react-icons/io5";

const NAV_ITEMS = [
    {
        label: "Products",
        href: "/products",
        dropdown: [
            { label: "Quotemind",        href: "/quotemind" },
            { label: "Drag to Dynamics", href: "/dragtodynamics" },
            { label: "E-Invoicing",      href: "/einvoice" },
            { label: "Smartclient",      href: "/smartclient" },
            { label: "Sharpchat",        href: "/sharpchat" },
            { label: "Visionmind",       href: "/visionmind" },
        ],
    },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            { label: "Enterprise Solutions", href: "/services/enterprise-solutions" },
            { label: "CRM",                  href: "/services/crm" },
            { label: "Advanced Analytics",   href: "/services/advanced-analytics" },
            { label: "Business Intelligence", href: "/services/business-intelligence" },
            { label: "Staff Augmentation",   href: "/services/staff-augmentation" },
        ],
    },
    {
        label: "Resources",
        href: "/resources",
        dropdown: [
            { label: "Case Studies",     href: "/resources/case-studies" },
            { label: "Blog",             href: "/resources/blog" },
            { label: "FAQ",              href: "/resources/faq" },
            { label: "Webinars / Guides", href: "/resources/webinars" },
        ],
    },
    {
        label: "Company",
        href: "/company",
        dropdown: [
            { label: "About Us",    href: "/about" },
            { label: "Careers",     href: "/careers" },
            { label: "Contact Us",  href: "/contact" },
        ],
    },
];

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (label, hasDropdown) => {
        if (!hasDropdown) return;
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className="navbar">
            <div className="navbar__inner">

                {/* Logo — far left */}
                <a href="/" className="navbar__logo">
                    <img
                        src={logo}
                        alt="Sharpsys Software Solutions"
                        className="navbar__logo-img"
                    />
                </a>

                {/* Nav links */}
                <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
                    <ul className="navbar__links">
                        {NAV_ITEMS.map(({ label, href, dropdown }) => (
                            <li key={label} className="navbar__item">
                                <a
                                    href={href}
                                    className={`navbar__link ${dropdown ? "navbar__link--toggle" : ""}`}
                                    onClick={dropdown ? (e) => { e.preventDefault(); handleNavClick(label, !!dropdown); } : undefined}
                                    aria-expanded={dropdown ? openDropdown === label : undefined}
                                >
                                    {label}
                                    {dropdown && (
                                        <IoChevronDown
                                            className={`navbar__chevron ${openDropdown === label ? "navbar__chevron--open" : ""}`}
                                            size={13}
                                        />
                                    )}
                                </a>

                                {dropdown && openDropdown === label && (
                                    <ul className="navbar__dropdown">
                                        {dropdown.map((item) => (
                                            <li key={item.label} className="navbar__dropdown-item">
                                                <a href={item.href} className="navbar__dropdown-link">
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Actions — far right */}
                    <div className="navbar__actions">
                        <a href="/" className="navbar__login">Login</a>
                        <a href="/" className="navbar__cta">Schedule a Call</a>
                    </div>
                </nav>

                {/* Hamburger — mobile only */}
                <button
                    className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </header>
    );
}

export default Navbar;