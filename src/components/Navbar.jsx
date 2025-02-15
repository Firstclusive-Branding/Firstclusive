import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo logoDesktop">
        <a href="">
          <img src="FBLogo3A.png" alt="Firstclusive Logo" />
        </a>
      </div>
      <div className="logo logoMobile">
        <a href="">
          <img src="FBLogo3.png" alt="Firstclusive Logo" />
        </a>
      </div>
      <div
        className="hamburger"
        onClick={(e) => {
          setMenuOpen(!menuOpen);
          e.stopPropagation();
        }}
      >
        <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <span>
            <a href="#home">Home</a>
          </span>
        </li>
        <li
          className={`nav-item dropdown ${openDropdown === 1 ? "open" : ""}`}
          onClick={(e) => {
            toggleDropdown(1);
            e.stopPropagation();
          }}
        >
          <span>
            About <i className="bi bi-chevron-down"></i>
            <i className="bi bi-chevron-right"></i>
          </span>
          <ul className="nav-dropdown">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <a href="#portfolio">Our Portfolio</a>
            </li>
            <li>
              <a href="#mission">Mission & Vision</a>
            </li>
            <li>
              <a href="#history">Company History</a>
            </li>
          </ul>
        </li>
        <li
          className={`nav-item dropdown ${openDropdown === 2 ? "open" : ""}`}
          onClick={(e) => {
            toggleDropdown(2);
            e.stopPropagation();
          }}
        >
          <span>
            Services <i className="bi bi-chevron-down"></i>
            <i className="bi bi-chevron-right"></i>
          </span>
          <ul className="nav-dropdown">
            <li>
              <a href="#logo-branding">Logo & Branding</a>
            </li>
            <li>
              <a href="#uiux-design">UI/UX Design</a>
            </li>
            <li>
              <a href="#web-development">Web Development</a>
            </li>
            <li>
              <a href="#digital-marketing">Digital Marketing</a>
            </li>
            <li>
              <a href="#printing">Printing</a>
            </li>
          </ul>
        </li>
        <li
          className={`nav-item dropdown ${openDropdown === 3 ? "open" : ""}`}
          onClick={(e) => {
            toggleDropdown(3);
            e.stopPropagation();
          }}
        >
          <span>
            Contact <i className="bi bi-chevron-down"></i>
            <i className="bi bi-chevron-right"></i>
          </span>
          <ul className="nav-dropdown">
            <li>
              <a href="#support">Customer Support</a>
            </li>
            <li>
              <a href="#location">Our Location</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="getintouch">
        <span>
          GET IN TOUCH <i className="bi bi-telephone-outbound-fill"></i>
        </span>
        <span className="bubbleEffect"></span>
      </div>
    </nav>
  );
};

export default Navbar;
