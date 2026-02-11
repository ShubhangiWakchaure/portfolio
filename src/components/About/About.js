import React from "react";
import "./About.css";
import Tilt from "react-parallax-tilt";
import profilePic from "../../assets/Profile.jpeg";

const About = ({ onHireClick }) => {
  return (
    <section className="about" id="about">
      <div className="about-title">
        <h2>About Me</h2>
      <div className="underline"></div>
      </div>

      <div className="about-container">
        {/* LEFT — IMAGE WITH TILT */}
        <div className="about-image">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.05}
            transitionSpeed={1500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            className="profile-tilt"
          >
            <img src={profilePic} alt="Shubhangi Wakchaure" />
          </Tilt>
        </div>

        {/* RIGHT — TEXT */}
        <div className="about-content">
          <p>
            Hello! I'm <strong>Shubhangi Wakchaure</strong>,a dedicated
            <strong> Full Stack Developer</strong> with a strong interest in creating clean, efficient, and user-focused applications.
            I enjoy turning ideas into real digital experiences and constantly pushing myself to learn and evolve in the tech world.
          </p>

          <p>
            My goal is to grow as a developer while contributing to meaningful and impactful digital solutions.
          </p>
        </div>
      </div>

      {/* Hire Me button at the end of About section */}
      <div className="about-hire-btn-container">
        <button className="hire-me-btn" onClick={onHireClick} type="button">
          Hire Me
        </button>
          <a href="/resume.pdf" download className="download-resume-btn">
          Download Resume
          </a>
      </div>
      
    </section>
  );
};

export default About;