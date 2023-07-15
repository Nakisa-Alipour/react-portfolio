// Import the necessary module
import React from 'react';

// Define the Footer component
function Footer() {
  return (
    <div className="footer">
      <div className="image-container">
        <img src={require("assets/linkedin-2.png")} target="_blank" alt="linkedin logo color:#16AEC8FA and Background:none"/>
        <div className="info-box">Linkdin- Coming Soon</div>
      </div>
      <div className="image-container">
        <img src={require("assets/mail.png")} target="_blank" alt="mail sign"/>
        <div className="info-box">email address- Coming Soon</div>
      </div>
      <div className="image-container">
        <img src={require("assets/phone.png")} target="_blank" alt="phone sign"/>
        <div className="info-box">Phone number - Coming Soon</div>
      </div>
      <div className="image-container">
        <img src={require("assets/github.png")} target="_blank" alt="Github sign"/>
        <div className="info-box">Github URL- Coming Soon</div>
      </div>
    </div>
  );
}

// Export the Footer component as the default export
export default Footer;

