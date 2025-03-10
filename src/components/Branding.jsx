import React from "react";
import UFO from "../assets/UFO.gif";
import { motion } from "framer-motion";
import "../styles/Branding.css";

const BrandingAnimation = () => {
  return (
    <section className="branding-container" id="home">
      <div className="branding-text-container">
        <motion.h1
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="branding-text firstclusive"
        >
          FIRSTCLUSIVE
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="branding-text branding"
        >
          BRANDING
        </motion.h1>
      </div>
      <div className="ufo-container">
        <img src={UFO} alt="UFO" className="ufo" />
      </div>
    </section>
  );
};

export default BrandingAnimation;
