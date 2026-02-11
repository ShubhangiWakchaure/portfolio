import React, { useEffect , useRef} from 'react'; // 1. REMOVE useRef from here
import './Hire.css';
import bgImage from '../../assets/bg.jpg';  

const Hire = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("animate-active");
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []); 

  return (
    // 5. Attach the prop ref to the section
    <section className="hire-section"ref={sectionRef}>
      <div className="hire-main-container">
        
        <div className="image-column">
          <img src={bgImage} alt="Portfolio Background" className="portfolio-img" />
        </div>

        <div className="sliding-door-panel">
          <div className="text-content">
            
            <h3 className="heading">
              “Passionate about coding, creating, and delivering impactful solutions.
               Let’s collaborate and make your vision a reality!!”
            </h3>
            
            <a 
              href="/resume.pdf" 
              download="My_Resume.pdf" 
              className="download-btn"
            >
              Download Resume 
              <span className="arrow">↓</span>
            </a>
            
            <div className="socials">
              <a href="https://www.linkedin.com/in/shubhangi-wakchaure-1752522b2/" target="_blank" rel="noreferrer">
            <img src={require("../../assets/linkedin-logo.png")} alt="LinkedIn" />
          </a>
          <a href="https://github.com/ShubhangiWakchaure" target="_blank" rel="noreferrer">
            <img src={require("../../assets/github.png")} alt="GitHub" />
          </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hire;