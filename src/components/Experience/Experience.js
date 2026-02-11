// src/components/Experience/Experience.js
import React from "react";
import "./Experience.css";
import technorbitLogo from "../../assets/technorbit.png"; // add logo here

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-divider top-divider"></div>

      <div className="experience-header">
        <h2>EXPERIENCE</h2>
        <div className="underline"></div>
        <p>My professional journey and practical industry experience</p>
      </div>

      <div className="experience-container">
        <div className="experience-card">
          <div className="exp-top">
            <img src={technorbitLogo} alt="Technorbit Systems" />
            <div>
              <h3>Java Full Stack Developer Intern</h3>
              <h4>Technorbit Infosystems</h4>
              <span>Internship Training Program • 1.5 Months</span>
            </div>
          </div>

          <ul className="exp-points">
            <li>Worked on real-time web application development using Java, Servlets, JSP, and MySQL</li>
            <li>Designed and implemented backend modules with database connectivity and CRUD operations</li>
            <li>Built dynamic UI pages and integrated frontend with backend logic</li>
            <li>Debugged application issues and improved performance and usability</li>
            <li>Collaborated with team members and followed structured development practices</li>
          </ul>
        </div>
      </div>

      <div className="section-divider bottom-divider"></div>
    </section>
  );
};

export default Experience;