import React from 'react';
import 'components/style/Footer.css';
import 'components/style/Style.css';

const Footer = () => {
  return (
    <footer>
      <div className="image-container">
            <img src="./assets/Avatar.png" alt="linkedin logo color:#16AEC8FA and Background:none"/>
            <div className="info-box">Linkdin- Coming Soon</div>
        </div>
        <div className="image-container">
            <img src="./assets/mail.png" alt="mail sign"/>
            <div className="info-box">email address- Coming Soon</div>
        </div>
        <div className="image-container">
            <img src="./assets/phone.png" alt="phone sign"/>
            <div className="info-box">Phone number - Coming Soon</div>
        </div>
        <div className="image-container">
            <img src="./assets/github.png" alt="Github sign"/>
            <div className="info-box">Github URL- Coming Soon</div>
        </div>
    </footer>
  );
}

export default Footer;
