import React from 'react';

function Header() {
    return (
      <header class="top-header">
      <div id="intro">
          <h4 class="h4-class">Hello, my name is</h4>
          <h1 class="h1-class">Nakisa Alipour.</h1>  
          <h4 class="h4-class">And Im a full-stack web developer.</h4>
      </div>
      <div id="avatar">
          <img src="./Assets/Avatar.png" alt="nakisa's avatar"/>
      </div>
      <nav class="navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact me</a>
      </nav>
  </header>
  );
}

export default Header;
