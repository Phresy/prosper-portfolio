"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </motion.button>
  );
}