"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        // Mock successful form submission behavior
        setTimeout(() => {
            setStatus("success");
            const form = e.target as HTMLFormElement;
            form.reset(); // Clear the form after sending
            
            // Revert back to idle after showing success message
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative px-6 overflow-hidden max-w-6xl mx-auto">
            {/* Background glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                        Ready to Connect?
                    </h2>
                    
                    <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                        Whether you have a question about data science, want to discuss machine learning applications, or just want to say hi, my inbox is always open. Fill out the form or reach out via social media!
                    </p>

                    <div className="flex gap-6 mt-14">
                        <a href="https://github.com/Gaurikabhatt27" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full text-slate-400 hover:text-white hover:-translate-y-1 transition-all group">
                            <svg className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/gaurika-bhatt-869600283/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full text-slate-400 hover:text-white hover:-translate-y-1 transition-all group">
                            <svg className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="mailto:gaurikabhatt27@gmail.com" className="p-4 glass-card rounded-full text-slate-400 hover:text-white hover:-translate-y-1 transition-all group">
                            <svg className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-xl shadow-purple-900/10 border border-white/10"
                >
                    {/* Subtle gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                required
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows={4}
                                required
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                                placeholder="How can we collaborate?"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === "loading" || status === "success"}
                            className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold tracking-wide hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                        >
                            {status === "idle" && (
                                <>
                                    <span>Send Message</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                            {status === "loading" && (
                                <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            )}
                            {status === "success" && (
                                <>
                                    <span>Message Sent Directly!</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}