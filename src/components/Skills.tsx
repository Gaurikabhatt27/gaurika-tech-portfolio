"use client"

import { motion, Variants } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const skills = [
  "Python", "C++", "JavaScript",
  "Data Structures & Algorithms", "OOPs", "Problem Solving",
  "Machine Learning", "Data Science",
  "NumPy", "Pandas", "Matplotlib", "Scikit-learn",
  "Data Visualization", "Exploratory Data Analysis (EDA)", "Model Evaluation",
  "REST APIs", "Authentication & Authorization",
  "Real-Time Systems", "Web Development"
];

const tools = [
  "React.js", "Node.js", "Express.js",
  "MongoDB", "Socket.io",
  "Tailwind CSS",
  "Git & GitHub",
  "VS Code", "Jupyter Notebook",
  "Microsoft Excel", "Power BI",
  "Postman",
  "Google Gemini API"
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 15 }
    },
  };

  return (
    <section id="skills" className="py-24 relative px-6 max-w-5xl mx-auto">

      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Technical Arsenal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 max-w-2xl mx-auto"
        >
          Languages, frameworks, and tools I use to analyze data and build intelligent systems.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px", amount: 0.1 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={badgeVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <SpotlightCard className="group relative px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md cursor-pointer overflow-hidden transition-colors hover:border-purple-500/50" spotlightColor="rgba(168, 85, 247, 0.2)">
              {/* Hover flare effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <span className="relative z-10 text-slate-300 font-medium tracking-wide group-hover:text-white transition-colors">
                {skill}
              </span>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-16 mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
        >
          Tools & Platforms
        </motion.h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px", amount: 0.1 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool}
            variants={badgeVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <SpotlightCard className="group relative px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md cursor-pointer overflow-hidden transition-colors hover:border-teal-500/50" spotlightColor="rgba(45, 212, 191, 0.2)">
              {/* Hover flare effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <span className="relative z-10 text-slate-300 font-medium tracking-wide group-hover:text-white transition-colors">
                {tool}
              </span>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}