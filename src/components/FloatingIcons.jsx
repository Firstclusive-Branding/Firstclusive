import React from "react";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../styles/FloatingIcons.css";
import { motion } from "framer-motion";

const FloatingIcons = () => {
  const location = useLocation();

  if (location.pathname === "/notfound") {
    return null;
  }

  return (
    <motion.div
      className="floating-icons-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <a
        href="https://wa.me/+919966470788"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp size={40} />
      </a>

      {/* <button className="floating-icon chat">
        <FaComments size={30} />
      </button> */}
    </motion.div>
  );
};

export default FloatingIcons;
