import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css"
import logo from "../assets/logo.png"
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar () {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('light-mode', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo"/>
      
      <ul className={`dashboard-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="link">
          <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
          <Link to="/projects" className="nav-item" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" className="nav-item" onClick={closeMenu}>Contact</Link>
        </div>
      </ul>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
