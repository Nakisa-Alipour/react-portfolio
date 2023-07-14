import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

/*
Modified Directory Structure:
react-portfolio/
  public/
    index.html
  ...
  src/
    assets/
      projects-images/
        project1.png
        project2.png
      Avatar.png
      github.png
      linkdin-2.png
      mail.png
      phone.pung
    components/
      pages/
        Resume.js
        Projects.js
        Contact.js
        About.js
      Footer.js
      NavTabs.js
      PortfoilioContainer.js

    index.css
    index.js
    App.js
    reportWebVitals.js
  ...
  package.json
  .gitignore  
  jsconfig.json       

*/
