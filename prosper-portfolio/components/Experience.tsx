"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience({ data, lang }: { data: any[], lang: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full animate-bounce" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-4">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
              {lang === "zh" ? "历程" : "Timeline"}
            </h2>
            <p className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs ml-1">
              {lang === "zh" ? "职业足迹" : "Professional Footprint"}
            </p>
          </div>
          <div className="h-[2px] flex-grow bg-slate-200 dark:bg-slate-800 mx-8 hidden md:block mb-4" />
        </div>

        <div className="relative space-y-12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Year Column */}
              <div className="md:col-span-2">
                <span className="text-4xl md:text-5xl font-black text-slate-200 dark:text-slate-800 group-hover:text-blue-600/20 transition-colors duration-500">
                  {item.year}
                </span>
              </div>

              {/* Content Card */}
              <div className="md:col-span-10 relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-8 md:p-12 rounded-[3rem] transition-all hover:border-blue-500/30 hover:shadow-[0_20px_80px_rgba(37,99,235,0.1)]">
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">@{item.company}</p>
                  </div>
                  <div className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest w-fit border border-slate-200 dark:border-slate-700">
                    {item.type}
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Aesthetic Detail: Sequence Number */}
                <div className="absolute bottom-8 right-12 text-8xl font-black text-slate-500/5 select-none pointer-events-none">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}