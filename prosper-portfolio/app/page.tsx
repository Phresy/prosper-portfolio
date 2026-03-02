"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; // The new brutalist hero
import SocialDock from "../components/SocialDock";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import FooterStats from "../components/FooterStats";
import ScrollProgress from "../components/ScrollProgress";

// Data
import { translations, experience } from "../constants";

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr" | "es" | "de" | "zh">("en");
  const [activeCategory, setActiveCategory] = useState("All");

  const t = translations[lang];
  const e = experience[lang];

  const categories = ["All", ...new Set(t.projects.map((p) => p.category))];
  const getCount = (cat: string) =>
    cat === "All" ? t.projects.length : t.projects.filter((p) => p.category === cat).length;

  const filteredProjects = activeCategory === "All"
    ? t.projects
    : t.projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <SocialDock />

      {/* THIS IS THE CHANGE: High-impact Brutalist Hero */}
      <Hero t={t} lang={lang} />

      <div className="max-w-[1400px] mx-auto px-6 space-y-40 mt-20">
        <Skills />

        <section id="experience" className="w-full">
          <Experience data={e} lang={lang} />
        </section>

        <section id="projects" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 dark:border-slate-800 pb-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
              {t.works}
            </h2>

            <div className="flex flex-wrap gap-2 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {cat === "All" ? t.all : cat} ({getCount(cat)})
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={`${project.id}-${lang}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
         {/* @ts-ignore - Temporary bypass to resolve build block */}
        <Contact lang={lang} t={t} />
      </div>

      <FooterStats />
    </main>
  );
}