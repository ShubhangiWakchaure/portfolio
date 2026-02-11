import React from "react";
import "./Footer.css";

import locationIcon from "../../assets/map.png";
import emailIcon from "../../assets/gmail.png";
import phoneIcon from "../../assets/phone-call.png";

import linkedinIcon from "../../assets/linkedin-logo.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* CONTACT INFO */}
      <div className="footer-contact">
        <div className="footer-item">
          <img src={locationIcon} alt="location" />
          <p>Nashik, Maharashtra, India</p>
        </div>

        <div className="footer-item">
          <img src={emailIcon} alt="email" />
          <p>shubhangiwakchaure3@gmail.com</p>
          <p>shubhangiwakchaure2004@gmail.com</p>
        </div>

        <div className="footer-item">
          <img src={phoneIcon} alt="phone" />
          <p>+91 7350400437</p>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/ShubhangiWakchaure" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="github" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shubhangi Wakchaure. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;