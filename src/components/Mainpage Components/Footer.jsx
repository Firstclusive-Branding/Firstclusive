import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Mainpage Styles/Footer.css";
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
import FBLogo3A from "../../assets/FBLogo3A.svg";
import FBLogo3 from "../../assets/FBLogo3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footerLogoContainer">
          <div className="footerLogo footerLogoMobile">
            <Link to="/">
              <img src={FBLogo3A} alt="Firstclusive Logo" />
            </Link>
          </div>
          <div className="footerLogo footerLogoDesktop">
            <Link to="/">
              <img src={FBLogo3} alt="Firstclusive Logo" />
            </Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="footer-contact-content">
            <span>
              <FaPhoneAlt className="footer-contact-icon" />
              <a href="tel:18002087788"> 1 800-208-7788</a>
            </span>
            <span>
              <IoLogoWhatsapp className="footer-contact-icon" />
              <a href="tel:+919966470788"> +91 996-647-0788</a>
            </span>
            <span>
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:hey@firstclusive.com">hey@firstclusive.com</a>
            </span>
            <span>
              <FaMapMarkerAlt className="footer-contact-icon" />
              <a
                href="https://maps.app.goo.gl/8SEVMAvRyTK85bfN9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mehdipatnam, Hyderabad
              </a>
            </span>
          </div>
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
          Made with <FaHeart />
          by Firstclusive.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
