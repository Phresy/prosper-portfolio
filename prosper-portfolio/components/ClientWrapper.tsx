"use client";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "./Particles";
import ThemeToggle from "./ThemeToggle";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Particles />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1] // The "Prospixel" Premium Ease
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}