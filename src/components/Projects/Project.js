import React from "react";
import "./Project.css";

import shopperImg from "../../assets/projects/Shopper.png";
import emptrackImg from "../../assets/projects/emptrack.jpg";
import mahayatraImg from "../../assets/projects/mahayatra.png";
import translyImg from "../../assets/projects/Transly.png";
import accidentImg from "../../assets/projects/accident.png";

const projects = [
  {
    title: "Shopper – E-commerce Website",
    description:
      "A full-featured e-commerce platform with product browsing, cart management, and secure checkout functionality.",
    image: shopperImg,
    tech: ["React","MySQL", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ShubhangiWakchaure/Ecommerce-website",
    demo: "#",
  },
  {
    title: "EmpTrack – Employee Management System",
    description:
      "A role-based employee management system where admins can manage employees and users can securely access their profiles.",
    image: emptrackImg,
    tech: ["Java", "Servlets", "JSP", "MySQL", "Bootstrap"],
    repo: "https://github.com/ShubhangiWakchaure/Employee-Management-System",
    demo: "#",
  },
  {
    title: "MahaYatra – Bus & Train Reservation System",
    description:
      "An online reservation system for buses and trains featuring seat selection, route search, and booking management.",
    image: mahayatraImg,
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "REST API"],
    repo: "https://github.com/ShubhangiWakchaure/Reservation-System",
    demo: "#",
  },
  {
    title: "Transly – AI Language Agent",
    description:
      "An AI-powered assistant capable of translating and understanding multiple languages using NLP models.",
    image: translyImg,
    tech: ["Python", "Google Gemini API", "AI/NLP", "Gradio"],
    repo: "https://github.com/ShubhangiWakchaure/Transly_AI_Agent",
    demo: "#",
  },
  {
    title: "AI-Based Accident Detection System",
    description:
      "A computer vision system that detects road accidents in real-time using deep learning and video processing.",
    image: accidentImg,
    tech: ["Python", "OpenCV", "YOLO", "Deep Learning","IOT"],
    repo: "https://github.com/ShubhangiWakchaure",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>PROJECTS</h2>
        <div className="underline"></div>
        <p>A showcase of the projects I have worked on across different technologies</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn repo-btn">
                View Repo
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;