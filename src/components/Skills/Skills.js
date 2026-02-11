// src/components/Skills/Skills.js
import React from "react";
import Tilt from "react-parallax-tilt";
import "./Skills.css";

// Import Logos
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/javascript.png";
import reactLogo from "../../assets/skills/react.png";

import spring from "../../assets/skills/springboot.png";
import mysql from "../../assets/skills/mysql.png";

import java from "../../assets/skills/java.png";
import python from "../../assets/skills/python.png";

import git from "../../assets/skills/git.png";
import github from "../../assets/github.png";
import vscode from "../../assets/skills/vscode.png";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-divider top-divider"></div>

      <div className="skills-header">
        <h2>SKILLS</h2>
        <div className="underline"></div>
        <p>
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02}>
            <div className="skills-grid">
              <div className="skill-item"><img src={html} alt="HTML"/><span>HTML</span></div>
              <div className="skill-item"><img src={css} alt="CSS"/><span>CSS</span></div>
              <div className="skill-item"><img src={js} alt="JavaScript"/><span>JavaScript</span></div>
              <div className="skill-item"><img src={reactLogo} alt="React"/><span>React</span></div>
            </div>
          </Tilt>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02}>
            <div className="skills-grid">
              <div className="skill-item"><img src={spring} alt="Spring Boot"/><span>Spring Boot</span></div>
              <div className="skill-item"><img src={mysql} alt="MySQL"/><span>MySQL</span></div>
            </div>
          </Tilt>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02}>
            <div className="skills-grid">
              <div className="skill-item"><img src={java} alt="Java"/><span>Java</span></div>
              <div className="skill-item"><img src={python} alt="Python"/><span>Python</span></div>
            </div>
          </Tilt>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02}>
            <div className="skills-grid">
              <div className="skill-item"><img src={git} alt="Git"/><span>Git</span></div>
              <div className="skill-item"><img src={github} alt="GitHub"/><span>GitHub</span></div>
              <div className="skill-item"><img src={vscode} alt="VS Code"/><span>VS Code</span></div>
            </div>
          </Tilt>
        </div>

      </div>

      <div className="section-divider bottom-divider"></div>
    </section>
  );
};

export default Skills;