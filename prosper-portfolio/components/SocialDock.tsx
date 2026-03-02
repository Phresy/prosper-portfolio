"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: <Github size={20} />, link: "https://github.com/Phresy", label: "GitHub" },
  { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/prosper-obeng-gyan-164901264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
  {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 3L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://x.com/prosperobeng289",
    label: "X",
  },
  { icon: <Mail size={20} />, link: "mailto:obenggyanp@gmail.com", label: "Email" },
];

export default function SocialDock() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl"
      >
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            className="p-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all hover:-translate-y-1"
            title={social.label}
          >
            {social.icon}
          </a>
        ))}
        <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800 mx-1" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
          Hire Me
        </button>
      </motion.div>
    </div>
  );
}