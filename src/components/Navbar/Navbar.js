import React, { useState } from "react";
import "./Navbar.css";

import swLogo from "../../assets/logo 1.png";
import linkedinIcon from "../../assets/linkedin-logo.png";
import githubIcon from "../../assets/github.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* LEFT LOGO */}
          <div className="logo">
            <img src={swLogo} alt="SW Logo" />
          </div>

          {/* CENTER LINKS (DESKTOP) */}
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="right-section">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/ShubhangiWakchaure" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>

            {/* HAMBURGER BUTTON */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="/resume.pdf" onClick={closeMenu}>Downaload Resume</a>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;