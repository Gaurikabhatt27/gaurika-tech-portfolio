"use client"

import { motion, Variants } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
export default function Education() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <section id="education" className="py-24 relative px-6 max-w-4xl mx-auto">

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-center mb-16"
            >
                Education
            </motion.h2>

            <div className="relative border-l border-purple-500/30 ml-3 md:ml-6 space-y-12 pb-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-12"
                >

                    {/* LPU */}
                    <motion.div variants={itemVariants} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[5px] top-6 w-[10px] h-[10px] rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] animate-pulse"></div>
                        <SpotlightCard className="glass-card p-6 md:p-8 rounded-2xl group border border-white/5 hover:border-purple-500/30 transition-colors" spotlightColor="rgba(168, 85, 247, 0.15)">
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                <span className="text-purple-400 font-semibold text-xs tracking-[0.2em] uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                    Since August 2023
                                </span>
                                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white font-mono text-sm shadow-inner">
                                    CGPA: <span className="text-purple-300 font-bold">8.74</span>
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                                Lovely Professional University
                            </h3>
                            <p className="text-sm text-purple-300/80 mb-2">Punjab, India</p>
                            <p className="text-lg text-slate-400 font-medium">Bachelor of Technology - Computer Science and Engineering</p>
                        </SpotlightCard>
                    </motion.div>

                    {/* Greenfields Int */}
                    <motion.div variants={itemVariants} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[5px] top-6 w-[10px] h-[10px] rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6] animate-pulse"></div>
                        <SpotlightCard className="glass-card p-6 md:p-8 rounded-2xl group border border-white/5 hover:border-blue-500/30 transition-colors" spotlightColor="rgba(59, 130, 246, 0.15)">
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                    April 2022 - March 2023
                                </span>
                                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white font-mono text-sm shadow-inner">
                                    Percentage: <span className="text-blue-300 font-bold">73%</span>
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                                Greenfields Public School
                            </h3>
                            <p className="text-sm text-blue-300/80 mb-2">Delhi, India</p>
                            <p className="text-lg text-slate-400 font-medium">Intermediate (12th class)</p>
                        </SpotlightCard>
                    </motion.div>

                    {/* Greenfields Metric */}
                    <motion.div variants={itemVariants} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[5px] top-6 w-[10px] h-[10px] rounded-full bg-indigo-400 shadow-[0_0_15px_#6366f1] animate-pulse"></div>
                        <SpotlightCard className="glass-card p-6 md:p-8 rounded-2xl group border border-white/5 hover:border-indigo-500/30 transition-colors" spotlightColor="rgba(99, 102, 241, 0.15)">
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                <span className="text-indigo-400 font-semibold text-xs tracking-[0.2em] uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                    April 2020 - March 2021
                                </span>
                                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white font-mono text-sm shadow-inner">
                                    Percentage: <span className="text-indigo-300 font-bold">92%</span>
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300">
                                Greenfields Public School
                            </h3>
                            <p className="text-sm text-indigo-300/80 mb-2">Delhi, India</p>
                            <p className="text-lg text-slate-400 font-medium">Matriculation (10th class)</p>
                        </SpotlightCard>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    )
}