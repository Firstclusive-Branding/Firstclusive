import React from "react";
import UFO from "../../assets/Branding Assets/UFO.gif";
import { motion } from "framer-motion";
import "../../styles/Mainpage Styles/Branding.css";
import EarthVid from "../../assets/Branding Assets/Earth.mp4";
import EarthImg from "../../assets/Branding Assets/Earth.jpeg";

const BrandingAnimation = () => {
  return (
    <motion.section
      className="branding-container"
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <video
        className="earth-video-background"
        src={EarthVid}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        type="video/mp4"
        poster={EarthImg}
      />

      <div className="branding-text-container">
        <motion.h1
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
          className="branding-text firstclusive"
        >
          FIRSTCLUSIVE
        </motion.h1>
        <motion.h1
          initial={{ x: "50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
          className="branding-text branding"
        >
          BRANDING
        </motion.h1>
      </div>
      <div className="ufo-container">
        <img src={UFO} alt="UFO" className="ufo" />
      </div>
    </motion.section>
  );
};

export default BrandingAnimation;
