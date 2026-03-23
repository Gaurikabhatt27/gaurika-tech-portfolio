"use client"

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { FiUsers, FiAward } from "react-icons/fi";

const experiences = [
  {
    title: "Community Development Project (NGO)",
    organization: "Gyandeep Growth Foundation",
    role: "Volunteer Educator",
    icon: <FiUsers className="w-6 h-6 text-purple-400 group-hover:text-blue-400 transition-colors" />,
    points: [
      "Taught English vocabulary and basic science concepts to students",
      "Conducted interactive activities, games, and craft sessions",
      "Improved student engagement through creative learning methods",
      "Developed communication, leadership, and teaching skills"
    ],
    // NGO Activity Images
    images: [
      "/cdp1.jpeg", "/cdp2.jpeg", "/cdp3.jpeg", "/cdp4.jpeg",
      "/cdp5.jpeg", "/cdp6.jpeg", "/cdp7.jpeg", "/cdp8.jpeg"
    ]
  }
];

function PhotoStackedGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center mt-4">
      {/* Gallery Header Context */}
      <div className="text-center mb-10">
        <h4 className="text-purple-300 font-bold text-sm uppercase tracking-widest bg-purple-500/10 inline-block px-5 py-2 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          Volunteer Work Gallery
        </h4>
        <p className="text-slate-400 text-sm mt-4 font-medium">Glimpses from community education and interactive sessions</p>
      </div>

      <div className="relative w-full max-w-3xl mx-auto h-[350px] md:h-[500px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
             key={index}
             initial={{ x: 100, opacity: 0, rotateZ: 5, scale: 0.9 }}
             animate={{ x: 0, opacity: 1, rotateZ: 0, scale: 1 }}
             exit={{ x: -100, opacity: 0, rotateZ: -5, scale: 0.9 }}
             transition={{ type: "spring", stiffness: 300, damping: 22 }}
             onClick={handleNext}
             className="cursor-pointer absolute w-[90%] h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 bg-[#0a0a0a] group ring-1 ring-purple-500/10"
          >
               {/* Blurred Background Layer for Elegant Padding (Prevents Empty Black Bounds) */}
               <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                 <img src={images[index]} className="w-full h-full object-cover blur-2xl opacity-30 scale-125 saturate-150" />
               </div>

               {/* Foreground Image Layer (object-contain ensures ZERO cutting/cropping) */}
               <img src={images[index]} alt={`Gallery ${index + 1}`} className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 z-10 drop-shadow-2xl" />
               
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-20"></div>
               
               <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white border border-white/20 shadow-xl group-hover:bg-white/25 transition-colors z-30 flex items-center gap-2">
                 <span>Next Photo</span>
                 <span className="bg-black/60 px-2.5 py-1 rounded-full text-purple-200">{index + 1} / {images.length}</span>
              </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Background stacked cards simulating a physical deck */}
        {images.length > 1 && (
          <div className="absolute w-[90%] h-full rounded-3xl overflow-hidden border border-white/10 z-0 opacity-40 translate-y-6 scale-[0.96] bg-[#0a0a0a]">
            <div className="absolute inset-0 w-full h-full"><img src={images[(index + 1) % images.length]} className="w-full h-full object-cover blur-[8px]" /></div>
          </div>
        )}
        {images.length > 2 && (
          <div className="absolute w-[90%] h-full rounded-3xl overflow-hidden border border-white/5 -z-10 opacity-20 translate-y-12 scale-[0.92] bg-[#0a0a0a]">
            <div className="absolute inset-0 w-full h-full"><img src={images[(index + 2) % images.length]} className="w-full h-full object-cover blur-[12px]" /></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="experience" className="py-24 relative px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center mb-16"
      >
        Experience & Community Work
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-16 max-w-5xl mx-auto"
      >
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-8 md:p-10 group relative overflow-hidden shadow-xl shadow-purple-900/10 border border-white/10"
            >
              {/* Background Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">{exp.title}</h3>
                    <div className="text-lg text-blue-300 font-medium mt-2">{exp.organization}</div>
                    <div className="text-md text-slate-400 mt-1">{exp.role}</div>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                      <span className="text-slate-300 text-base md:text-lg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Render images completely OUTSIDE the card in an interactive stacked gallery */}
            {exp.images && (
              <motion.div variants={itemVariants} className="w-full px-2 mt-4">
                <PhotoStackedGallery images={exp.images} />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
