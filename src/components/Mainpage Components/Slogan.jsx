import React from "react";
import { motion } from "framer-motion";
import "../../styles/Mainpage Styles/Slogan.css";

const Slogan = () => {
  return (
    <div className="slogan-container">
      <span className="circle-gradient-background"></span>
      <span className="circle-gradient-background"></span>
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
        NOT EXCUSES
      </motion.h1>
    </div>
  );
};

export default Slogan;
