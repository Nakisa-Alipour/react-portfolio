// Import the necessary module
import React from 'react';

// Define the NavTabs component
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="top-header">
      <div id="intro">
            <h4 className="h4-class">Hello, my name is</h4>
            <h1 className="h1-class">Nakisa Alipour.</h1>  
            <h4 className="h4-class">And Im a full-stack web developer.</h4>
        </div>
        <div id="avatar">
            <img src={require("assets/Avatar.png")} alt="nakisa's avatar"/>
        </div>
      <ul className="navigation">
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </div> 
  );
}

// Export the NavTabs component as the default export
export default NavTabs;
