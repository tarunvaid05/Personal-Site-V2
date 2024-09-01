import React from 'react';
import './Projects.css'; 
import calcpic from './calcpic.png';  
import htmlLogo from './html.png';    
import cssLogo from './css.png';      
import jsLogo from './js.png';        

function Projects() {
  return (
    <div className="projectcontainer">
      <div className="projects">
        <img src={calcpic} alt="Calculator Website"/>
      </div>
      <div className="projectinfo">
        <h5><b>Web Calculator</b></h5>
        <div className="logos-bar">
          <img src={htmlLogo} alt="HTML Logo"/>
          <img src={cssLogo} alt="CSS Logo"/>
          <img src={jsLogo} alt="JavaScript Logo"/>
        </div>
        <p>
          Published on March, 2024. This project aims to replicate a basic calculator app as a Website.
          <br/>
          <a href="https://tarunvaid05.github.io/Calculator/"><b>See More ⇒</b></a>
        </p>
      </div>
    </div>
  );
}

export default Projects;