import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 500);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 10, stiffness: 100, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 10, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 500);
    };

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("resize", handleResize);
    if (isVisible) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

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
        zIndex: 99999,
        translateX: smoothX,
        translateY: smoothY,
        boxShadow: "0 0 12px #aef507, 0 0 24px #aef50788",
        mixBlendMode: "exclusion",
      }}
    />
  );
};

export default CustomCursor;
