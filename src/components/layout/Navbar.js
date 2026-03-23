import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_main.png";

const NAV_ITEMS = [
    {
        label: "Services",
        dropdown: [
            "Enterprise Solutions",
            "CRM",
            "Advanced Analytics",
            "Business Intelligence",
            "Staff Augmentation",
        ],
    },
    {
        label: "Solutions",
        dropdown: [
            "Microsoft Dynamics 365",
            "Business Central",
            "Power Platform",
            "Gen AI Solutions",
        ],
    },
    {
        label: "Products",
        dropdown: [
            "Quotemind",
            "Drag to Dynamics",
            "E-Invoicing",
            "Smartclient",
            "Sharpchat",
        ],
    },
    {
        label: "About",
        dropdown: null,
    },
];

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavEnter = (label) => setOpenDropdown(label);
    const handleNavLeave = () => setOpenDropdown(null);
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

                {/* Nav links — immediately after logo, left-anchored */}
                <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
                    <ul className="navbar__links">
                        {NAV_ITEMS.map(({ label, dropdown }) => (
                            <li
                                key={label}
                                className="navbar__item"
                                onMouseEnter={() => dropdown && handleNavEnter(label)}
                                onMouseLeave={handleNavLeave}
                            >
                                <a href={`/${label.toLowerCase()}`} className="navbar__link">
                                    {label}
                                    {dropdown && (
                                        <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </a>

                                {dropdown && openDropdown === label && (
                                    <ul className="navbar__dropdown">
                                        {dropdown.map((item) => (
                                            <li key={item} className="navbar__dropdown-item">
                                                <a href="#placeholder" className="navbar__dropdown-link">
                                                    {item}
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
                        <a href="/login" className="navbar__login">Login</a>
                        <a href="/schedule" className="navbar__cta">Schedule a Call</a>
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
