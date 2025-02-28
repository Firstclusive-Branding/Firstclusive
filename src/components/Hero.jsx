import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transforming Ideas into Reality</h1>
        <p className="hero-subtitle">
          Firstclusive Branding - Your trusted partner in IT solutions, web
          development, branding, and digital marketing since 2014.
        </p>
        <p className="hero-description">
          With over 800 clients worldwide, we specialize in empowering
          businesses across healthcare, education, construction, retail, and
          hospitality.
        </p>
      </div>
      <Link to="/our-services" className="hero-button">
        <span>
          EXPLORE SERVICES <i className="bi bi-telephone-outbound-fill"></i>
        </span>
        <span className="hero-bubble-effect"></span>
      </Link>
    </header>
  );
};

export default Hero;
