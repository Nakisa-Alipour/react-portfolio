import React from 'react';
import '../../components/style/Header.css'; 
import '../../components/style/Style.css'; 

function Header() {
    return (
      <header className="top-header">
      <div id="intro">
          <h4 className="h4-class">Hello, my name is</h4>
          <h1 className="h1-class">Nakisa Alipour.</h1>  
          <h4 className="h4-class">And Im a full-stack web developer.</h4>
      </div>
      <div id="avatar">
          <img src="assets/Avatar.png" alt="nakisa's avatar"/>
      </div>
      <nav className="navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact me</a>
      </nav>
  </header>
  );
}

export default Header;
