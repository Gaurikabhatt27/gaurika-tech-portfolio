"use client"

import { motion, Variants } from "framer-motion";

const resumeData = [
    {
        id: "general-cv",
        title: "General CV",
        subtitle: "Professional Resume",
        description: "A comprehensive overview of my skills, experience, and projects across various domains, showcasing my technical abilities and growth.",
        viewLink: "/general_cv.pdf",
        downloadLink: "/general_cv.pdf",
        gradient: "from-blue-500 to-cyan-400",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
        borderHover: "group-hover:border-blue-500/50"
    },
    {
        id: "specialized-cv",
        title: "Data Science & AI/ML CV",
        subtitle: "Domain-Centric Resume",
        description: "A heavily tailored breakdown focusing exclusively on my advanced machine learning models, generative AI analytics, and deep data science capabilities.",
        viewLink: "/specialized_cv.pdf",
        downloadLink: "/specialized_cv.pdf",
        gradient: "from-purple-500 to-pink-500",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(216,180,254,0.2)]",
        borderHover: "group-hover:border-purple-500/50"
    }
];

export default function Resume() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section id="resume" className="py-24 relative px-6 overflow-hidden max-w-6xl mx-auto">
            {/* Background Ambience */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                    Curriculum Vitae
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    I maintain two distinct versions of my resume. Choose the one that best aligns with the specific technical domain you are hiring for.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-8 md:gap-12"
            >
                {resumeData.map((cv) => (
                    <motion.div key={cv.id} variants={cardVariants}>
                        <div className={`glass-card rounded-3xl p-8 md:p-10 h-full border border-white/10 transition-all duration-500 group bg-black/20 ${cv.borderHover} ${cv.shadowHover} relative overflow-hidden flex flex-col`}>
                            
                            {/* Inner ambient glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cv.gradient} blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-full`}></div>

                            <div className="relative z-10 flex-grow">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                                        {cv.title}
                                    </h3>
                                    <div className="text-lg font-medium bg-gradient-to-r hover:to-white bg-clip-text text-transparent mb-4" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                                        <span className={`bg-gradient-to-r ${cv.gradient} bg-clip-text text-transparent`}>{cv.subtitle}</span>
                                    </div>
                                    <p className="text-slate-400 text-base leading-relaxed">
                                        {cv.description}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="relative z-10 mt-10 grid grid-cols-2 gap-4">
                                <a 
                                    href={cv.viewLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all hover:-translate-y-1 shadow-lg backdrop-blur-sm`}
                                >
                                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    View CV
                                </a>
                                
                                <a 
                                    href={cv.downloadLink} 
                                    download
                                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r ${cv.gradient} bg-opacity-20 border border-white/10 text-white font-semibold hover:brightness-110 transition-all hover:-translate-y-1 shadow-lg`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    Download
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
