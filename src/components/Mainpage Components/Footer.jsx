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
import { IoMdArrowDropright } from "react-icons/io";
import FBLogo3A from "../../assets/FBLogo3A.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-wrapper">
          <Link
            to="/"
            className="footer-logo-link"
            aria-label="Firstclusive Home"
          >
            <img src={FBLogo3A} alt="Firstclusive Logo" />
          </Link>
          <p className="startup-badge">
            Proudly part of <span>#startupindia</span>
          </p>
          <p className="footer-brand-note">
            We don’t just design brands — we build identities that work in the
            real world. From strategy to storytelling, every project is made to
            attract, convert and grow with purpose.
          </p>
          <div className="footer-social-icons">
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
        <div className="footer-links-logo">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <IoMdArrowDropright />
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/our-services">Services</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/our-location">Our Location</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <IoMdArrowDropright />
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact footer-office-details">
          <h3>Contact Us</h3>
          <div className="footer-contact-content">
            <span>
              <FaPhoneAlt className="footer-contact-icon" />
              <a href="tel:18002087788">1 800–208–7788</a>
            </span>
            <span>
              <IoLogoWhatsapp className="footer-contact-icon" />
              <a href="tel:+919966470788">+91 996–647–0788</a>
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

        {/* <div className="footer-social">
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
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>
          Made with <FaHeart /> by Firstclusive
        </p>
      </div>
    </footer>
  );
};

export default Footer;
