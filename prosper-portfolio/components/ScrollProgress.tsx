"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Adding a spring makes the bar feel "liquid" and responsive
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left shadow-[0_0_10px_rgba(37,99,235,0.5)]"
      style={{ scaleX }}
    />
  );
}