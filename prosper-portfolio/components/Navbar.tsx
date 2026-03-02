"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Sun, Moon, Sparkles } from "lucide-react";

export default function Navbar({ lang, setLang }: { lang: string, setLang: (l: any) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch for the theme toggle
  useEffect(() => setMounted(true), []);

  const langs = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "zh", label: "中文" }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-4xl">
      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-slate-800/50 rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        
        {/* Brand Logo with Glow */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:rotate-12 transition-transform">
            <Sparkles size={16} />
          </div>
          <span className="font-black text-xl tracking-tighter italic uppercase hidden md:block">
            Prosper <span className="text-blue-600">OG</span>
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Theme Switcher Integration */}
          {mounted && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-700 shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-blue-600" />}
            </motion.button>
          )}

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1" />

          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
            >
              <Globe size={14} className="text-blue-600" />
              <span className="hidden sm:inline">{langs.find(l => l.code === lang)?.label}</span>
              <span className="sm:hidden">{lang}</span>
              <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-44 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-2 overflow-hidden z-[110]"
                >
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-tighter transition-all mb-1 last:mb-0 ${
                        lang === l.code 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}