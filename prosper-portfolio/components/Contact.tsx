"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, MapPin } from "lucide-react";
import { toast } from "sonner"; 
import Magnetic from "./Magnetic";

// This tells TypeScript: "I accept ANY properties passed to me"
// This is the 'Emergency Fix' to stop the build error.
export default function Contact(props: any) {
  const { lang, t } = props;
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
        toast.success("Message sent!");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Failed to send.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-black uppercase italic mb-12">
          {t?.contactTitle || "Get in Touch"}
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
           <input name="name" placeholder="Name" required className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-xl outline-none" />
           <input name="email" type="email" placeholder="Email" required className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-xl outline-none" />
           <textarea name="message" placeholder="Message" rows={4} required className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-xl outline-none" />
           <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest">
             {status === "idle" ? "Send Message" : "Processing..."}
           </button>
        </form>
      </div>
    </section>
  );
}