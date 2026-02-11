import React, { useRef } from 'react'; // Added useRef import
import About from './components/About/About';
import Hire from './components/Hire/Hire';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';

function App() {
  const contactRef = useRef(null);

  // 2. Function to handle the smooth scroll
  const handleHireScroll = () => {
  if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* 3. Pass the scroll function to About */}
      <About onHireClick={handleHireScroll} />
      <Hire />
      <Skills/>
      <Experience/>
      <Projects/>
      <Services/>
      <Education/>
      <Contact sectionRef={contactRef} />
      <Footer/>
    </div>
  );
}

export default App;
