"use client";
import { motion } from "framer-motion";

export default function Hero({ t, lang }: { t: any, lang: string }) {
  return (
    <section className="relative pt-32 pb-10 px-6 max-w-[1400px] mx-auto overflow-hidden border-b border-slate-200 dark:border-slate-800">
      {/* Top Metadata Line */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Full-Stack Engineer
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Prosper Obeng-Gyan
        </span>
        <span className="px-4 py-2 border border-slate-900 dark:border-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer">
          {lang.toUpperCase()}
        </span>
      </div>

      <div className="relative z-10">
        {/* Massive Brutalist Headline */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-4 text-slate-900 dark:text-white"
        >
          Software <br /> 
          <span className="text-blue-600">Engineer</span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <div className="flex flex-wrap gap-4 mt-12 mb-20">
          {['React.js', 'Next.js', 'TypeScript', 'Node.js'].map((tag) => (
            <span key={tag} className="px-4 py-2 border border-slate-900 dark:border-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              {tag}
            </span>
          ))}
        </div>

        {/* Informational Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Experience</p>
            <p className="text-4xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">4+ Years</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Projects</p>
            <p className="text-4xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">20+</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Location</p>
            <p className="text-xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">Remote / GH</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Availability</p>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               <p className="text-xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">Open to Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}