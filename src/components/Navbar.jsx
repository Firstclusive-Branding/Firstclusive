import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

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
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollToTop", "true");
      navigate("/");
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo logoDesktop">
        <Link to="/" onClick={handleHomeClick}>
          <img src="FBLogo3A.png" alt="Firstclusive Logo" />
        </Link>
      </div>
      <div className="logo logoMobile">
        <Link to="/" onClick={handleHomeClick}>
          <img src="FBLogo3.png" alt="Firstclusive Logo" />{" "}
        </Link>
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
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
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
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-team" onClick={closeMenu}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/our-portfolio" onClick={closeMenu}>
                Our Portfolio
              </Link>
            </li>
            <li>
              <Link to="/mission-and-vision" onClick={closeMenu}>
                Mission & Vision
              </Link>
            </li>
            <li>
              <Link to="/company-history" onClick={closeMenu}>
                Company History
              </Link>
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
            <Link to="/our-services" onClick={closeMenu}>
              Services
              {/* <i className="bi bi-chevron-down"></i> */}
            </Link>

            {/* <i className="bi bi-chevron-right"></i> */}
          </span>
          {/* <ul className="nav-dropdown">
            <li>
              <Link to="/logo-branding" onClick={closeMenu}>
                Logo & Branding
              </Link>
            </li>
            <li>
              <Link to="/uiux-design" onClick={closeMenu}>
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/web-development" onClick={closeMenu}>
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing" onClick={closeMenu}>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/printing" onClick={closeMenu}>
                Printing
              </Link>
            </li>
          </ul> */}
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
              <Link to="/contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/our-location" onClick={closeMenu}>
                Our Location
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={closeMenu}>
                Careers
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="getintouch">
        <Link to="/contact-us" className="getintouchLink">
          <span>
            GET IN TOUCH <i className="bi bi-telephone-outbound-fill"></i>
          </span>
          <span className="bubbleEffect"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
