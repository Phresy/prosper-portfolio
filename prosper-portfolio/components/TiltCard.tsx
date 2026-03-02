"use client";
import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Motion values for the glare effect
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Smooth out tilt with springs
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform for rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Transform for the glare background position
  const background = useTransform(
    [x, y],
    ([latestX, latestY]) => 
      `radial-gradient(circle at ${(latestX as number + 0.5) * 100}% ${(latestY as number + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative w-full h-full group"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {/* Dynamic Glare Overlay */}
        <motion.div
          style={{
            background,
            transform: "translateZ(1px)", // Positioned slightly above the card surface
          }}
          className="absolute inset-0 z-10 pointer-events-none rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* The actual content (ProjectCard) */}
        {children}
      </div>
    </motion.div>
  );
}