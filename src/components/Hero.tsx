"use client"

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Gaurika Bhatt";

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(typingInterval);
        }
      }, 150);
      return () => clearInterval(typingInterval);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden max-w-7xl mx-auto">

      {/* Background glow orbs specific to Hero */}
      <div className="glow top-20 left-10 md:left-40"></div>
      <div className="glow-blue bottom-20 right-10 md:right-40"></div>

      <div className="w-full grid md:grid-cols-2 gap-12 items-center z-10 pt-20">

        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <span className="text-sm font-medium text-purple-300">Available for Summer &apos;26 Internships</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <br />
            <span className="inline-block whitespace-nowrap">
              <span className="text-gradient text-glow">{text}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="text-white font-light md:ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light"
          >
            An <span className="text-purple-300 font-medium">AI & Data Science</span> enthusiast passionate about building intelligent
            systems, analyzing data, and solving real-world problems through
            machine learning.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-3 rounded-full font-semibold tracking-wide overflow-hidden glass-card hover:bg-white/10 transition-colors"
            >
              <span className="relative z-10 text-white flex items-center gap-2">
                Download Resume
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Image Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative hidden md:flex justify-center items-center perspective-1000"
        >
          {/* Animated background blobl behind the image */}
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-purple-600 via-blue-500 to-transparent rounded-full blur-[80px] opacity-50 animate-pulse"></div>

          <motion.div
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-[320px] h-[400px] xl:w-[400px] xl:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 z-10 group shadow-[0_0_50px_rgba(168,85,247,0.2)] bg-[#050505] flex items-center justify-center p-6"
          >
            {/* Subtle background glow mapping the 3D depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.15),transparent_70%)] opacity-80 pointer-events-none"></div>
            
            {/* Floating 3D Character Model */}
            <motion.div 
              animate={{ 
                y: [-8, 8, -8]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full transition-transform duration-700 group-hover:scale-110"
            >
              <Image
                src="/3d_avatar_custom.png"
                alt="3D Professional Character Render"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.8)]"
                priority
              />
            </motion.div>

            {/* Edge blending overlay to match image background */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(5,5,5,1)] pointer-events-none rounded-[2rem]"></div>
            
            {/* Dynamic Light Sweep on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}