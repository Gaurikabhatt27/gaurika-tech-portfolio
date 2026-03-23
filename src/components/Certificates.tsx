"use client"

import { motion, Variants } from "framer-motion";
// import { FiAward } from "react-icons/fi";
import Image from "next/image";

const certificatesData = [
    {
        id: "python-ml",
        title: "Advanced Python for AI/ML",
        issuer: "CSE Pathshala",
        image: "/cse_pathshala_certificate.png",
        link: "https://drive.google.com/file/d/1ULNeo7hIXOgtVUdOrTwTlS2BQn1m8O4b/view",
        description: "Professional Training & Certification",
        points: [
            "Gained knowledge of advanced Python concepts for AI and ML",
            "Applied learning to problem-solving and real-world scenarios",
            "Strengthened foundation in data science and machine learning"
        ],
        gradient: "from-blue-400 to-indigo-400",
        borderhover: "group-hover:border-blue-500/50",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    },
    {
        id: "data-science",
        title: "Data Science Certification",
        issuer: "Board Infinity",
        image: "/data_science_certificate.png",
        link: "https://drive.google.com/file/d/19xlT-xfbicCOsK3att351RQlVIJrSjtV/view",
        description: "Comprehensive Data Science Program",
        points: [
            "Mastered core data science methodologies and statistical analysis",
            "Developed predictive models and machine learning pipelines",
            "Gained practical experience with industry-standard data tools"
        ],
        gradient: "from-purple-400 to-pink-400",
        borderhover: "group-hover:border-purple-500/50",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
    },
    {
        id: "gen-ai",
        title: "Gen AI Fundamentals",
        issuer: "Professional Certification",
        image: "/GenAI.png",
        link: "https://drive.google.com/file/d/1Qd_N07anvXXAzanJExH06UT2127v-Rzf/view",
        description: "Generative AI Core Concepts",
        points: [
            "Explored the architecture and capabilities of Generative AI models",
            "Understood practical applications of LLMs and foundation models",
            "Learned prompting frameworks and AI ethical guidelines"
        ],
        gradient: "from-emerald-400 to-teal-400",
        borderhover: "group-hover:border-emerald-500/50",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
    },
    {
        id: "google-ai",
        title: "AI Fundamentals",
        issuer: "Google",
        image: "/GoogleAI.png",
        link: "https://drive.google.com/file/d/1BF8ouUnFyESQOdJNO1wmPoTdIPfSjczy/view",
        description: "Google Artificial Intelligence Certification",
        points: [
            "Mastered core artificial intelligence principles and problem-solving",
            "Learned Google-specific AI implementation strategies",
            "Understood real-world deployment of AI solutions"
        ],
        gradient: "from-orange-400 to-red-400",
        borderhover: "group-hover:border-orange-500/50",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
    },
    {
        id: "aws-ml",
        title: "Fundamentals of Machine Learning and AI",
        issuer: "AWS Training and Certifications",
        image: "/aws.png",
        link:"https://drive.google.com/file/d/1fJUMMM-i8VoXiTREIIFtsXvJjA5JDKZO/view",
        description: "Amazon Web Services ML Specialization",
        points: [
            "Gained expertise in cloud-based machine learning on AWS",
            "Learned model training, deployment, and operationalization",
            "Applied AWS native AI/ML services to complex data sets"
        ],
        gradient: "from-amber-400 to-yellow-600",
        borderhover: "group-hover:border-amber-500/50",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
    },
    {
        id: "graphs-programming-camp",
        title: "Graphs Programming Camp",
        issuer: "AlgoUniversity",
        image: "/algoUni.png",
        link: "https://drive.google.com/file/d/1cmqwJ2r9_yytiMSQdIh3TMcnkTJbe1WF/view",
        description: "Professional Training & Certification",
        points: [
            "Participated in an intensive programming camp focused on graph algorithms",
            "Solved 17 advanced graph problems covering real-world scenarios",
            "Learned under the mentorship of Codeforces Master Manas Kumar Verma",
            "Strengthened problem-solving skills in graph theory and competitive programming"
        ],
        gradient: "from-purple-400 to-pink-400",
        borderhover: "group-hover:border-purple-500/50",
        shadowHover: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
    }
];

export default function Certificates() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section id="certificates" className="py-24 max-w-6xl mx-auto px-6 relative">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-center mb-16"
            >
                Certifications & Training
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-8"
            >
                {certificatesData.map((cert) => (
                    <motion.div key={cert.id} variants={cardVariants} className="w-full">
                        <div className={`glass-card rounded-3xl overflow-hidden h-full border border-white/10 transition-all duration-500 group bg-black/20 ${cert.borderhover} ${cert.shadowHover} flex flex-col`}>

                            {/* Conditional Image Block */}
                            {cert.image && (
                                <div className="w-full h-48 md:h-56 relative border-b border-white/5 overflow-hidden bg-black/40 flex-shrink-0">
                                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                                        <Image src={cert.image} alt={cert.title} fill className="object-cover blur-2xl opacity-20 scale-125 saturate-150" />
                                    </div>
                                    <div className="relative w-full h-full flex items-center justify-center p-4">
                                        <Image src={cert.image} alt={cert.title} fill className="object-contain p-2 relative z-10 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent pointer-events-none z-20"></div>
                                </div>
                            )}

                            <div className="p-8 relative flex-grow flex flex-col">
                                {/* Glow Effect */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.gradient} blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-full`}></div>

                                <div className="relative z-10 flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="text-lg text-blue-300 font-medium mb-1">{cert.issuer}</div>
                                    <div className="text-sm text-slate-400 font-medium mb-6">{cert.description}</div>

                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {cert.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.gradient} mt-1.5 shrink-0 shadow-[0_0_8px_currentColor]`}></span>
                                                <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {cert.link && (
                                        <div className="pt-4 border-t border-white/10 mt-auto">
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${cert.gradient} bg-opacity-20 border border-white/10 text-white font-semibold text-sm hover:brightness-125 transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                                                View Certificate
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
