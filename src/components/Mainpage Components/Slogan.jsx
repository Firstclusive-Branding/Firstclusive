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
        initial={{ opacity: 0, opacity: 0, x: "-50vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        RESULTS,
      </motion.h1>

      <motion.h1
        className="slogan-text not-excuses"
        initial={{ opacity: 0, x: "50vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        NOT EXCUSES
      </motion.h1>
    </div>
  );
};

export default Slogan;
