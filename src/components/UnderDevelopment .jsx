import React from "react";
import { Link } from "react-router-dom";
import "../styles/UnderDevelopment.css";
import DevelopmentImage from "../assets/underDevelopment.png";

const UnderDevelopment = () => {
  return (
    <div className="development-container">
      <img src={DevelopmentImage} alt="Page Under Development" />
      <p className="development-text">
        This page is currently under development. Stay tuned for updates!
      </p>
      <Link to="/" className="development-button">
        Go Home
      </Link>
    </div>
  );
};

export default UnderDevelopment;
