"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Layers } from "lucide-react";

export default function SwipeCard({ project }: { project: any }) {
  // These "MotionValues" track the card's position as you drag it
  const x = useMotionValue(0);
  
  // This automatically changes the color/rotation based on how far you drag
  const rotate = useTransform(x, [-100, 100], [-10, 10]);
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0]);

  return (
    <div className="relative flex justify-center items-center h-[400px] w-full cursor-grab active:cursor-grabbing">
      <motion.div
        style={{ x, rotate, opacity }}
        drag="x" // Only allow horizontal dragging
        dragConstraints={{ left: 0, right: 0 }} // Snap back to center when released
        whileTap={{ scale: 0.95 }}
        className="w-full max-w-[300px] h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 shadow-2xl flex flex-col justify-between text-white relative overflow-hidden"
      >
        {/* Decorative background circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
            <Layers size={24} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase opacity-70">
            UI/UX Concept
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-blue-100 mb-4">{project.description}</p>
          <div className="h-1 w-12 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}