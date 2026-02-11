import React from "react";
import "./Education.css";

// 🎓 Center timeline hat icon
import hatIcon from "../../assets/education.png";

// College Logos
import sppuLogo from "../../assets/university.png";
import degreeLogo from "../../assets/institute.png";
import hscLogo from "../../assets/college.png";
import schoolLogo from "../../assets/school.png";

const educationData = [
  {
    title: "University",
    year: "Sep 2022 – May 2026",
    college: "Savitribai Phule Pune University",
    logo: sppuLogo,
    desc: "Recognized university known for academic excellence, research, and diverse engineering programs."
  },
  {
    title: "Bachelor of Engineering",
    year: "Sep 2022 – May 2026",
    college: "Sir Visvesvaraya Institute of Technology, Nashik",
    logo: degreeLogo,
    desc: "Focused on software development, databases, and full-stack technologies with real-world projects."
  },
  {
    title: "Higher Secondary (HSC)",
    year: "Aug 2021 – Sep 2022",
    college: "G.M.D Arts,B.W Commerce & Science College ,Sinnar",
    logo: hscLogo,
    desc: "Completed higher secondary education in science stream with strong academic foundation."
  },
  {
    title: "Secondary School (SSC)",
    year: "May 2019 – March 2020",
    college: "Matoshri C & A Chandak Kanya Vidyalay,Sinnar",
    logo: schoolLogo,
    desc: "Completed secondary education with excellent academic performance and extracurricular activities."
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="section-title">
        <h2>Education</h2>
        <div className="title-underline"></div>
        </div>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            
            {/* LEFT SIDE */}
            <div className="timeline-left">
              <h3>{edu.title}</h3>
              <span>{edu.year}</span>
            </div>

            {/* CENTER ICON */}
            <div className="timeline-center">
              <div className="timeline-icon">
                <img src={hatIcon} alt="Education Icon" />
              </div>
            </div>

            {/* RIGHT SIDE CARD */}
            <div className="timeline-right">
              <div className="edu-card">
                <h3 className="college-name">
                  <img src={edu.logo} alt={edu.college} className="college-logo" />
                  {edu.college}
                </h3>
                <div className="card-line"></div>
                <p>{edu.desc}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;