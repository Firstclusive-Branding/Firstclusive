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

// import React, { useEffect, useRef } from "react";

// const CustomCursor = () => {
//   const canvasRef = useRef(null);
//   const trail = useRef([]);
//   const targetPos = useRef({ x: 0, y: 0 });
//   const currentPos = useRef({ x: 0, y: 0 });
//   const smoothing = 0.1; // Adjust this for more or less lag

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const handleMouseMove = (e) => {
//       targetPos.current = { x: e.clientX, y: e.clientY };
//     };

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Smoothly interpolate current position toward target position
//       currentPos.current.x +=
//         (targetPos.current.x - currentPos.current.x) * smoothing;
//       currentPos.current.y +=
//         (targetPos.current.y - currentPos.current.y) * smoothing;

//       // Push new point to trail
//       trail.current.push({
//         x: currentPos.current.x,
//         y: currentPos.current.y,
//         alpha: 1,
//       });

//       // Fade and clean trail
//       trail.current = trail.current
//         .map((point) => ({ ...point, alpha: point.alpha - 0.018 }))
//         .filter((point) => point.alpha > 0);

//       // Draw the trail lines
//       for (let i = 0; i < trail.current.length - 1; i++) {
//         const p1 = trail.current[i];
//         const p2 = trail.current[i + 1];

//         // Core line
//         ctx.beginPath();
//         ctx.moveTo(p1.x, p1.y);
//         ctx.lineTo(p2.x, p2.y);
//         ctx.strokeStyle = `rgba(174, 245, 7, ${p1.alpha})`;
//         ctx.lineWidth = 6;
//         ctx.shadowColor = "#aef507";
//         ctx.shadowBlur = 20;
//         ctx.stroke();

//         // Outer glow line
//         ctx.beginPath();
//         ctx.moveTo(p1.x, p1.y);
//         ctx.lineTo(p2.x, p2.y);
//         ctx.strokeStyle = `rgba(174, 245, 7, ${p1.alpha * 0.4})`;
//         ctx.lineWidth = 16;
//         ctx.shadowColor = "#aef507";
//         ctx.shadowBlur = 50;
//         ctx.stroke();
//       }

//       requestAnimationFrame(draw);
//     };

//     draw();

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         pointerEvents: "none",
//         zIndex: 999999,
//         background: "transparent",
//       }}
//     />
//   );
// };

// export default CustomCursor;
