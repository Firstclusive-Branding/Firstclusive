import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footerLogoContainer">
          <div className="footerLogo footerLogoMobile">
            <Link to="/">
              <img src="FBLogo3A.png" alt="Firstclusive Logo" />
            </Link>
          </div>
          <div className="footerLogo footerLogoDesktop">
            <Link to="/">
              <img src="FBLogo3.png" alt="Firstclusive Logo" />
            </Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <FaPhoneAlt className="footer-contact-icon" />
            <a href="tel:+919885925529"> +91-9885925529</a>
          </p>
          <p>
            <FaEnvelope className="footer-contact-icon" />
            <a href="mailto:hey@firstclusive.com">hey@firstclusive.com</a>
          </p>
          <p>
            <FaMapMarkerAlt className="footer-contact-icon" />
            <a
              href="https://maps.app.goo.gl/8SEVMAvRyTK85bfN9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mehdipatnam, Hyderabad
            </a>
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/firstclusive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/firstclusive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/firstclusive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/firstclusive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Since 2014 - Made with ❤ by Firstclusive.</p>
      </div>
    </footer>
  );
};

export default Footer;
