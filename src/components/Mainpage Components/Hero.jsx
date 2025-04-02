import { useEffect } from "react";
import "../../styles/Mainpage Styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    const wordGroups = document.querySelectorAll(".hero-title .word-group");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
      }
    );

    wordGroups.forEach((group) => {
      observer.observe(group);
    });
  }, []);
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="word-group">
            <span>Transforming</span> <span>Ideas</span> <span>into</span>
            <span> Reality.</span>
          </div>
          <div className="word-group">
            <span>Firstclusive</span> <span>Branding</span> <span>-</span>
            <span>Your</span>
          </div>
          <div className="word-group">
            <span>trusted</span> <span>partner</span> <span>in</span>
            <span> IT</span>
          </div>
          <div className="word-group">
            <span>solutions,</span> <span>web</span> <span>development,</span>
            <span> branding,</span>
          </div>
          <div className="word-group">
            <span>and</span> <span>digital</span> <span>marketing</span>
            <span>since</span>
          </div>
          <div className="word-group">
            <span>2014.</span> <span>With</span> <span>over</span>
            <span> 800</span>
          </div>
          <div className="word-group">
            <span>clients</span> <span>worldwide,</span> <span>we</span>
            <span> specialize</span>
          </div>
          <div className="word-group">
            <span>in</span> <span>empowering</span> <span>businesses</span>
            <span> across</span>
          </div>
          <div className="word-group">
            <span>healthcare,</span> <span>education,</span>
            <span>construction,</span> <span>retail,</span>
          </div>
          <div className="word-group">
            <span>and</span> <span>hospitality.</span>
          </div>
        </h1>
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
