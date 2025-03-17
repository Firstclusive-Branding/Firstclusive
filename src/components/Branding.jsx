import React from "react";
import UFO from "../assets/UFO.gif";
import { motion } from "framer-motion";
import "../styles/Branding.css";

const BrandingAnimation = () => {
  return (
    <section className="branding-container" id="home">
      <div className="branding-text-container">
        <motion.h1
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="branding-text firstclusive"
        >
          FIRSTCLUSIVE
        </motion.h1>
        <motion.h1
          initial={{ x: "50vw" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
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
