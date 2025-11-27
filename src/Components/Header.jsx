import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="logo">
        <Link to="/">
          <img src="/image.png" alt="Logo" />
        </Link>
      </div>

      <ul className="nav-desktop">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>

      <div className="right-icons">
        <a
          href="https://github.com/IamChidinma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amaechi-chidinma-76053a352"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>

      {menuOpen && (
        <div className={`mobile-dropdown ${darkMode ? "dark" : "light"}`}>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contacts" onClick={toggleMenu}>
            Contact
          </Link>
          <div className="mobile-icons">
            <a
              href="https://github.com/IamChidinma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amaechi-chidinma-76053a352"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
