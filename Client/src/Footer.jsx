import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <ul className="social-icons">
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Code of Conduct</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
