import React from "react";
import UFO from "../assets/UFO.gif";
import "../styles/Branding.css";

const BrandingAnimation = () => {
  return (
    <div className="branding-container">
      <h1 className="branding-text firstclusive">FIRSTCLUSIVE</h1>
      <h1 className="branding-text branding">BRANDING</h1>
      <div className="ufo-wrapper">
        <div className="ufo-container">
          <img src={UFO} alt="UFO" className="ufo" />
        </div>
      </div>
    </div>
  );
};

export default BrandingAnimation;
