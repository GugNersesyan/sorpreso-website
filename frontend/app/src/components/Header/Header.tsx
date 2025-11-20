import { NavLink } from "react-router-dom";
import { useState, useCallback, memo } from "react";
import "./Header.css";

interface NavItem {
    label: string;
    path: string;
}

const navItems: readonly NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "News", path: "/news" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
] as const;

export const Header = memo(() => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <header className="header" role="banner">
            <div className="header__container">
                <div className="header__logo">
                    <h1 className="header__title">Sorpreso</h1>
                </div>

                {/* Mobile menu button */}
                <button
                    className="header__mobile-toggle"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="main-navigation"
                >
                    <span className="header__hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Navigation */}
                <nav
                    id="main-navigation"
                    className={`header__nav ${isMobileMenuOpen ? "header__nav--open" : ""}`}
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <ul className="header__nav-list">
                        {navItems.map(({ label, path }) => (
                            <li key={path} className="header__nav-item">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
});

Header.displayName = "Header";
