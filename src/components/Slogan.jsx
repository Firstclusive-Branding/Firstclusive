import React from "react";
import { motion } from "framer-motion";
import "../styles/Slogan.css";
// import batmanBanner from "../assets/batman-banner1.png";

const Slogan = () => {
  return (
    <div className="slogan-container">
      {/* <img src={batmanBanner} alt="batman-banner" className="batman-banner" /> */}
      <motion.h1
        className="slogan-text results"
        initial={{ x: "-50vw" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring" }}
        viewport={{ once: true }}
      >
        RESULTS,
      </motion.h1>

      <motion.h1
        className="slogan-text not-excuses"
        initial={{ x: "50vw" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring" }}
        viewport={{ once: true }}
      >
        <span className="slogan-not">NOT </span>
        EXCUSES
      </motion.h1>
    </div>
  );
};

export default Slogan;
