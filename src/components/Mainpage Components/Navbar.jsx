import React, { useState, useEffect, useRef } from "react";
import "../../styles/Mainpage Styles/Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "../../styles/Mainpage Styles/HamburgerIcon.css";
import FBLogo3 from "../../assets/FBLogo3.svg";
import FBLogo3A from "../../assets/FBLogo3A.svg";
import ButtonAnimation from "./ButtonAnimation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
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
    setHasMounted(true);
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
          <img src={FBLogo3A} alt="Firstclusive Logo" />
        </Link>
      </div>
      <div className="logo logoMobile">
        <Link to="/" onClick={handleHomeClick}>
          <img src={FBLogo3} alt="Firstclusive Logo" />
        </Link>
      </div>

      {hasMounted && (
        <button
          className={`hamburger hamburger--collapse ${
            menuOpen ? "is-active" : ""
          }`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      )}

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
          style={{
            cursor: "url('/Cursors/CursorPointer.cur'), pointer",
          }}
        >
          <span
            style={{
              cursor: "url('/Cursors/CursorPointer.cur'), pointer",
            }}
          >
            About <FaChevronDown />
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
            </Link>
          </span>
        </li>

        <li className="nav-item">
          <span>
            <Link to="/blogs" onClick={closeMenu}>
              Blogs
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/careers" onClick={closeMenu}>
              Careers
            </Link>
          </span>
        </li>
        <li
          className={`nav-item dropdown ${openDropdown === 3 ? "open" : ""}`}
          onClick={(e) => {
            toggleDropdown(3);
            e.stopPropagation();
          }}
          style={{
            cursor: "url('/Cursors/CursorPointer.cur'), pointer",
          }}
        >
          <span
            style={{
              cursor: "url('/Cursors/CursorPointer.cur'), pointer",
            }}
          >
            Contact <FaChevronDown />
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
            {/* <li>
              <Link to="/careers" onClick={closeMenu}>
                Careers
              </Link>
            </li> */}
          </ul>
        </li>
      </ul>

      {/* <div className="getintouch">
        <Link to="/contact-us" className="getintouchLink">
          <span>GET IN TOUCH</span>
          <span className="getintouch-icon">
            <PiPhoneCallFill size={20} />
          </span>
          <span className="bubbleEffect"></span>
        </Link>
      </div> */}
      <span className="get-in-touch-button">
        <ButtonAnimation text="GET IN TOUCH" link="/contact-us" />
      </span>
    </nav>
  );
};

export default Navbar;
