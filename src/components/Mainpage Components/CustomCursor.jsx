import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 10, stiffness: 100, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 10, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "16px",
        height: "16px",
        backgroundColor: "#aef507",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        translateX: smoothX,
        translateY: smoothY,
        boxShadow: "0 0 12px #aef507, 0 0 24px #aef50788",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
