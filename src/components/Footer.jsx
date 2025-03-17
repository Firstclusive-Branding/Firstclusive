import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGoogle,
} from "react-icons/fa";
import { FaXTwitter, FaHeart } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
// import { TbDeviceLandlinePhone } from "react-icons/tb";

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
            <a href="tel:18002087788"> 1 800-208-7788</a>
          </p>
          <p>
            <IoLogoWhatsapp className="footer-contact-icon" />
            <a href="tel:+919966470788"> +91 996-647-0788</a>
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
              href="https://x.com/firstclusive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://maps.app.goo.gl/beasMFBhB2ZW6V7M8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Since 2014 - Made with <FaHeart />
          by Firstclusive.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
