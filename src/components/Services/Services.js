import React, { useEffect, useRef } from "react";
import "./Services.css";
import { FaCode, FaLaptopCode, FaDatabase, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Responsive and modern websites using React, JavaScript, HTML, CSS and backend technologies.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Application Development",
    desc: "Scalable applications with strong backend logic and secure systems.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Efficient MySQL database design with optimized queries and secure data handling.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Implementation",
    desc: "Clean, modern and user-friendly interfaces with smooth animations and responsive layouts.",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">What I Can Do For You</h2>
      <p className="services-subtitle">
        I help turn ideas into real, working digital products.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;