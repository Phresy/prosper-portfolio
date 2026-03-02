"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Users, Activity } from "lucide-react";
import { getGitHubStats } from "../lib/github"; // Verify this path!

export default function GitHubStats() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    // Calling the function with your exact username string
    getGitHubStats("Phresy").then((data) => {
      if (data) setStats(data);
    });
  }, []);

  if (!stats) return <div className="text-center p-10 opacity-50 italic">Syncing with GitHub...</div>;

  const statItems = [
    { label: "Repositories", value: stats.public_repos, icon: <GitBranch size={20} /> },
    { label: "Followers", value: stats.followers, icon: <Users size={20} /> },
    { label: "Following", value: stats.following, icon: <Activity size={20} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto my-12 px-6">
      {statItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:border-blue-500 transition-colors"
        >
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl">
            {item.icon}
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{item.label}</p>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}