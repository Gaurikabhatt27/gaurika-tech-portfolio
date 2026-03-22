"use client"

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 relative px-6">

            {/* Decorative ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>

                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 inline-block">
                    About Me
                </h2>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed relative z-10 font-light">
                    <p>
                        I am a Computer Science student at <span className="text-white font-medium">Lovely Professional University</span> with a strong
                        interest in Artificial Intelligence, Data Science, and Machine Learning.
                    </p>
                    <p>
                        I enjoy building intelligent systems, analyzing datasets, and solving
                        real-world problems through data-driven insights. My approach blends analytical
                        thinking with creative problem-solving.
                    </p>
                    <p>
                        My journey includes certifications in AI, Machine Learning, and Data Science
                        from industry platforms, applying these skills to build practical projects like
                        <span className="text-purple-300"> Heart Disease Prediction</span> and socio-demographic data analysis.
                    </p>
                </div>

            </motion.div>
        </section>
    )
}