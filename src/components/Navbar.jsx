import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstLinkRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const dark = savedTheme === "dark";
      setIsDarkMode(dark);
      document.body.classList.toggle("light-mode", !dark);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMenuOpen);
    if (isMenuOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    document.body.classList.toggle("light-mode", !nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav>
      <NavLink to="/" className="logo-link" onClick={closeMenu}>
        <img src={logo} alt="Mishael Osman Mensah" className="logo" />
      </NavLink>

      {isMenuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

      <ul className={`dashboard-nav ${isMenuOpen ? "active" : ""}`}>
        {links.map((link, index) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={closeMenu}
              ref={index === 0 ? firstLinkRef : undefined}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          ref={hamburgerRef}
          className="hamburger"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
