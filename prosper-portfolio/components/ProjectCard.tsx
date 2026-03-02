"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe, Database, Layout } from "lucide-react";
import TiltCard from "./TiltCard";

export default function ProjectCard({ project }: { project: any }) {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "full-stack": return <Code2 size={20} />;
      case "ui/ux": return <Layout size={20} />;
      case "data analysis": return <Database size={20} />;
      default: return <Globe size={20} />;
    }
  };

  return (
    <TiltCard>
      <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] h-full transition-all hover:shadow-[0_30px_60px_rgba(37,99,235,0.15)] overflow-hidden flex flex-col">
        
        {/* Deep Layer: Project Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={project.image || "/api/placeholder/800/600"} 
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle darkened overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
          
          {/* Floating Action Buttons over Image */}
          <div 
            style={{ transform: "translateZ(80px)" }} 
            className="absolute top-6 right-6 flex gap-3"
          >
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github} 
              target="_blank" 
              className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white hover:text-blue-600 rounded-full transition-colors shadow-xl"
            >
              <Github size={20}/>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.link} 
              target="_blank" 
              className="p-3 bg-blue-600 text-white rounded-full transition-colors shadow-xl shadow-blue-500/20"
            >
              <ExternalLink size={20}/>
            </motion.a>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-4 flex-grow flex flex-col">
          {/* Floating Icon - Mid Depth */}
          <div 
            style={{ transform: "translateZ(40px)" }} 
            className="w-fit p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl -mt-14 relative z-10 shadow-lg backdrop-blur-md border border-white/50 dark:border-slate-800/50"
          >
            {getIcon(project.category)}
          </div>

          {/* Text Content - High Depth */}
          <div style={{ transform: "translateZ(60px)" }} className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/80">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tags - Surface Depth */}
          <div 
            style={{ transform: "translateZ(20px)" }} 
            className="flex flex-wrap gap-2 mt-auto pt-4"
          >
            {project.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Glossy Overlay remains handled by TiltCard's glare logic */}
      </div>
    </TiltCard>
  );
}