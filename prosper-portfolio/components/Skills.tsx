"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Full-Stack Development", level: 90, color: "bg-blue-500" },
  { name: "UI/UX & Product Design", level: 85, color: "bg-indigo-500" },
  { name: "Data Visualization", level: 75, color: "bg-emerald-500" },
];

export default function Skills() {
  return (
    <section className="px-6">
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className={`h-full ${skill.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}