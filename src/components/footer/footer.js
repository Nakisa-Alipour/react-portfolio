import React from 'react';
import './Footer.css';
import '../style.css';

const Footer = () => {
  return (
    <footer>
      <div class="image-container">
            <img src="./Assets/linkedin-2.png" alt="linkedin logo color:#16AEC8FA and Background:none"/>
            <div class="info-box">Linkdin- Coming Soon</div>
        </div>
        <div class="image-container">
            <img src="./Assets/mail.png" alt="mail sign"/>
            <div class="info-box">email address- Coming Soon</div>
        </div>
        <div class="image-container">
            <img src="./Assets/phone.png" alt="phone sign"/>
            <div class="info-box">Phone number - Coming Soon</div>
        </div>
        <div class="image-container">
            <img src="./Assets/github.png" alt="Github sign"/>
            <div class="info-box">Github URL- Coming Soon</div>
        </div>
    </footer>
  );
}

export default Footer;
