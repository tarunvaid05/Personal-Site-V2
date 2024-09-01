import React from 'react';
import './Navbar.css'; 
import linkedinIcon from './linkedin.png';  
import githubIcon from './github.png';      
import emailIcon from './email.png';
import resumeIcon from './Resume.png';        
import resumePdf from './Resume - Stony Brook .pdf';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <button className="imgbutton" onClick={() => window.location.href='https://www.linkedin.com/in/tarun-vaidhyanathan/'}>
        <img src={linkedinIcon} alt="LinkedIn"/>
      </button>
      <button className="imgbutton" onClick={() => window.location.href='https://github.com/tarunvaid05'}>
        <img src={githubIcon} alt="GitHub"/>
      </button>
      <button className="imgbutton" onClick={() => window.location.href='mailto:tarunvaid05@gmail.com'}>
        <img src={emailIcon} alt="Email"/>
      </button>
      <a href={resumePdf} target="_blank" rel="noopener noreferrer">
        <img src={resumeIcon} alt="Resume" />
      </a>
    </div>
  );
}

export default Navbar;
