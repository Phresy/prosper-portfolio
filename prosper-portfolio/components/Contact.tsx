"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, MapPin } from "lucide-react";
import { toast } from "sonner"; // Import Sonner
import Magnetic from "./Magnetic";

export default function Contact({ lang }: { lang: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        
        // Localized Toast Feedback
        const toastMsg = {
          en: "Message sent! I'll be in touch.",
          fr: "Message envoyé ! Je vous contacterai.",
          es: "¡Mensaje enviado! Estaré en contacto.",
          de: "Nachricht gesendet! Ich melde mich.",
          zh: "消息已发送！我会尽快联系您。"
        };

        toast.success(toastMsg[lang as keyof typeof toastMsg] || toastMsg.en);
        
        (e.target as HTMLFormElement).reset();
        
        // Reset status to idle after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Transmission failed. Please try again later.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Info Side */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">
              Let's build something <span className="text-blue-600 underline">extraordinary</span>.
            </h2>
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
                 <Mail size={18}/> obenggyanp@gmail.com
               </div>
               <div className="flex items-center gap-4 text-slate-500">
                 <MapPin size={18}/> Accra, Ghana
               </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-slate-800/50 p-10 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <input 
                  name="name" 
                  placeholder={lang === "zh" ? "姓名" : "Name"} 
                  required 
                  className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <input 
                  name="email" 
                  type="email" 
                  placeholder={lang === "zh" ? "电子邮件" : "Email"} 
                  required 
                  className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <textarea 
                  name="message" 
                  placeholder={lang === "zh" ? "您的信息" : "Your Message"} 
                  rows={4} 
                  required 
                  className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-3xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none transition-all" 
                />
              </div>
              
              <Magnetic>
                <button 
                  disabled={status !== "idle"}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-70 shadow-lg shadow-blue-500/20"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        {lang === "zh" ? "发送消息" : "Send Message"} <Send size={18} />
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        {lang === "zh" ? "发送中..." : "Sending..."} <Loader2 size={18} className="animate-spin" />
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 text-green-300">
                        {lang === "zh" ? "已发送！" : "Sent!"} <CheckCircle size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}