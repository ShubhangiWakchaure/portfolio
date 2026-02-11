import React from "react";
import "./Hero.css";
 // 👉 Put your background image in assets

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">HELLO, WORLD!!</p>
        <h1 className="hero-title">
          It's Me <br />
          <span>Shubhangi Wakchaure</span>
        </h1>

        <p className="hero-role">
          FullStack Developer | Java Developer | AI Enthusiast
        </p>

        <a href="#about" className="hero-btn">
          MORE ABOUT ME ↓
        </a>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/" target="_blank" rel="noreferrer">
            <img src={require("../../assets/linkedin-logo.png")} alt="LinkedIn" />
          </a>
          <a href="https://github.com/ShubhangiWakchaure" target="_blank" rel="noreferrer">
            <img src={require("../../assets/github.png")} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;