import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../../styles/Mainpage Styles/FloatingIcons.css";
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
        style={{
          cursor: "url('/Cursors/CursorPointer.cur'), pointer",
        }}
      >
        <FaWhatsapp size={35} />
      </a>

      <a
        href="tel:18002087788"
        className="floating-icon phone"
        style={{
          cursor: "url('/Cursors/CursorPointer.cur'), pointer",
        }}
      >
        <FaPhoneAlt size={25} />
      </a>
    </motion.div>
  );
};

export default FloatingIcons;
