"use client"

import { motion, Variants } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import Image from "next/image";

const projectsData = [
    {
        id: "echochamber",
        isFeatured: true,
        title: "EchoChamber",
        subtitle: "Real-Time Debate & Dueling",
        category: "Full Stack",
        image: "/echochamber.png",
        description: null,
        points: [
            "Developed a full-stack real-time platform for 1v1 debates and live discussions",
            "Enabled ultra-fast live communication and user interaction using Socket.io",
            "Integrated advanced AI-based live moderation via Gemini API",
            "Designed a highly premium modern glassmorphism UI with Tailwind CSS",
            "Implemented robust, secure authentication workflows utilizing JWT tokens",
            "Added data-rich analytics and visual user insights using Recharts"
        ],
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "Gemini API", "JWT", "Recharts"],
        links: { demo: "#", githubFrontend: "https://github.com/Gaurikabhatt27/EchoChamber-frontend.git", githubBackend: "https://github.com/Gaurikabhatt27/EchoChamber-backend.git" },
        styles: {
            titleGradient: "from-purple-400 via-pink-400 to-blue-400",
            hoverText: "group-hover:text-purple-300",
            pointColor: "from-purple-400 to-blue-400",
            techHover: "text-purple-200",
            buttonGradient: "from-purple-600 to-blue-600 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]",
            cardBorder: "border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.15)]",
        }
    },
    {
        id: "lyra",
        isFeatured: false,
        title: "Lyra AI Assistant",
        subtitle: "Advanced AI Chatbot",
        category: "AI / Automation",
        image: "/lyra.png",
        description: "An advanced AI chatbot capable of voice commands, text-to-speech, application control, and real-time search.",
        points: [
            "Developed a multifunctional AI assistant supporting voice-to-text and text-to-speech interactions",
            "Enabled system-level controls like opening, closing, and managing applications via voice commands",
            "Integrated real-time web search for dynamic query handling",
            "Implemented multilingual understanding with English response enforcement",
            "Designed for seamless user interaction and automation of daily tasks"
        ],
        tech: ["Python", "SpeechRecognition", "Text-to-Speech (TTS)", "APIs", "Automation"],
        links: { github: "https://github.com/Gaurikabhatt27/Lyra-PC-Assistant-.git" },
        styles: {
            titleGradient: "from-indigo-400 via-purple-400 to-pink-400",
            hoverText: "group-hover:text-indigo-300",
            pointColor: "from-indigo-400 to-purple-400",
            techHover: "text-indigo-200",
            buttonGradient: "from-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]",
            cardBorder: "border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]",
        }
    },
    {
        id: "heart",
        isFeatured: false,
        title: "Heart Disease Prediction",
        subtitle: "Machine Learning Model",
        category: "Data Science",
        image: "/heart-new.png",
        description: "Machine learning model predicting heart disease risk based on medical parameters using Python and scikit-learn.",
        points: [
            "Built a machine learning model to predict heart disease risk using medical datasets",
            "Performed data preprocessing, feature selection, and model training",
            "Applied classification algorithms using scikit-learn",
            "Evaluated model performance using accuracy and other metrics",
            "Visualized insights for better understanding of health patterns"
        ],
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
        links: { github: "https://github.com/Gaurikabhatt27/Heart_Disease_Prediction.git" },
        styles: {
            titleGradient: "from-blue-400 via-teal-400 to-emerald-400",
            hoverText: "group-hover:text-blue-300",
            pointColor: "from-blue-400 to-teal-400",
            techHover: "text-blue-200",
            buttonGradient: "from-blue-600 to-teal-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]",
            cardBorder: "border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]",
        }
    },
    {
        id: "india",
        isFeatured: false,
        title: "India Socio-Demographic",
        subtitle: "Data Analysis Project",
        category: "Data Analysis",
        image: "/india.png",
        description: "Data analysis project exploring demographic patterns using Python visualization libraries and statistical analysis.",
        points: [
            "Analyzed socio-demographic data to uncover population trends and patterns",
            "Performed data cleaning and exploratory data analysis (EDA)",
            "Visualized key insights using graphs and statistical methods",
            "Identified correlations between demographic factors",
            "Presented findings in a structured and interpretable format"
        ],
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        links: { github: "https://github.com/Gaurikabhatt27/india-socio-demographic-insights.git" },
        styles: {
            titleGradient: "from-emerald-400 via-green-400 to-teal-400",
            hoverText: "group-hover:text-emerald-300",
            pointColor: "from-emerald-400 to-teal-400",
            techHover: "text-emerald-200",
            buttonGradient: "from-emerald-600 to-teal-600 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]",
            cardBorder: "border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)]",
        }
    }
];

export default function Projects() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        },
    };

    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto px-6 relative">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-center mb-16"
            >
                Featured Projects
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid lg:grid-cols-2 gap-8"
            >
                {projectsData.map((project) => (
                    <motion.div key={project.id} variants={cardVariants} className="w-full flex">
                        <SpotlightCard className={`glass-card rounded-3xl overflow-hidden border ${project.styles.cardBorder} group flex flex-col w-full h-full bg-black/20`}>
                            {/* Top Visual Side */}
                            <div className="w-full h-56 md:h-64 flex-shrink-0 flex flex-col justify-center items-center bg-black/40 relative overflow-hidden border-b border-white/5">
                                {project.image ? (
                                    <>
                                        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                                            <Image src={project.image} alt={project.title} fill className="object-cover blur-2xl opacity-20 scale-125 saturate-150" />
                                        </div>
                                        <div className="relative w-full h-full flex items-center justify-center p-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 z-10 p-2"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent opacity-80 z-20 pointer-events-none"></div>
                                    </>
                                ) : (
                                    <>
                                        {/* Abstract Graphic representing EchoChamber */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none"></div>
                                        <div className="w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-purple-500/5 backdrop-blur-sm">
                                            <div className="absolute w-20 h-20 rounded-full border border-blue-500/30 animate-[spin_8s_linear_infinite]"></div>
                                            <div className="absolute w-28 h-28 rounded-full border border-pink-500/20 animate-[spin_12s_linear_infinite_reverse]"></div>
                                            <div className="text-4xl filter drop-shadow-2xl z-20">🎙️</div>
                                        </div>
                                        <div className="mt-4 text-center relative z-10">
                                            <h3 className={`text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${project.styles.titleGradient}`}>{project.title.toUpperCase()}</h3>
                                            <p className="text-[10px] text-purple-300/80 uppercase tracking-widest mt-1 font-bold">{project.subtitle}</p>
                                        </div>
                                        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(3,0,20,1)] pointer-events-none z-20"></div>
                                    </>
                                )}
                            </div>

                            {/* Bottom Content Side */}
                            <div className="w-full p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        {project.isFeatured && (
                                            <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]">Featured</span>
                                        )}
                                        <span className="px-2.5 py-1 text-[10px] font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full">{project.category}</span>
                                    </div>
                                    <h3 className={`text-2xl font-black text-white ${project.styles.hoverText} transition-colors leading-tight`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 font-medium mt-1">{project.subtitle}</p>

                                    {project.description && (
                                        <p className="text-slate-400 leading-relaxed text-xs mt-3 line-clamp-2">{project.description}</p>
                                    )}
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {project.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${project.styles.pointColor} rounded-full shrink-0 shadow-[0_0_8px_currentColor]`}></span>
                                            <span className="text-slate-300 text-[12px] md:text-[13px] leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className={`px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-semibold tracking-wide ${project.styles.techHover} shadow-sm hover:bg-white/10 transition-colors cursor-default`}>{tech}</span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                                    {project.links.demo && (
                                        <a href={project.links.demo} className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${project.styles.buttonGradient} text-white font-bold tracking-wide transition-transform text-xs hover:-translate-y-1`}>
                                            Launch Demo
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} className="px-5 py-2.5 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/20 hover:bg-white/10 hover:border-white/40 transition-transform flex items-center gap-2 text-xs hover:-translate-y-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.links.githubFrontend && (
                                        <a href={project.links.githubFrontend} className="px-5 py-2.5 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/20 hover:bg-white/10 hover:border-white/40 transition-transform flex items-center gap-2 text-xs hover:-translate-y-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            GitHub (Frontend)
                                        </a>
                                    )}
                                    {project.links.githubBackend && (
                                        <a href={project.links.githubBackend} className="px-5 py-2.5 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/20 hover:bg-white/10 hover:border-white/40 transition-transform flex items-center gap-2 text-xs hover:-translate-y-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            GitHub (Backend)
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    )
}