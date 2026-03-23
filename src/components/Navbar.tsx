"use client"

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Education", path: "#education" },
    { name: "Experience", path: "#experience" },
    { name: "Certificates", path: "#certificates" },
    { name: "Resume", path: "#resume" },
    { name: "Contact", path: "#contact" }
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 flex justify-center py-6 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className={`flex items-center justify-between px-6 lg:px-8 py-3 rounded-full transition-all duration-300 ${scrolled ? "glass-nav shadow-lg w-[95%] max-w-7xl" : "w-[98%] max-w-7xl bg-transparent"
        }`}>

        <div className="flex items-center gap-2 shrink-0 mr-8 lg:mr-auto" ref={profileRef}>
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="relative w-8 h-8 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-transform overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500/50 block"
              aria-label="Toggle Profile Info"
            >
              <Image src="/profile.png" alt="Profile" fill className="object-cover" />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 left-0 w-72 glass-nav rounded-2xl p-6 shadow-2xl border border-white/10 z-[100]"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] border-2 border-purple-500/30 mb-3">
                      <Image src="/profile.png" alt="Gaurika Bhatt Profile" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">Gaurika Bhatt</h3>
                    <p className="text-sm text-purple-400 font-medium mt-1">AI & Data Science Enthusiast</p>
                  </div>
                  
                  <p className="text-sm text-slate-300 text-center mb-6 leading-relaxed">
                    Passionate about building intelligent systems and solving real-world problems through machine learning.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pb-2 border-t border-white/10 pt-5">
                    <div className="text-center bg-white/5 rounded-xl py-3 border border-white/5 transition-colors hover:bg-white/10">
                      <div className="text-2xl font-bold text-white mb-1">4+</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Technical Projects</div>
                    </div>
                    <div className="text-center bg-white/5 rounded-xl py-3 border border-white/5 transition-colors hover:bg-white/10">
                      <div className="text-2xl font-bold text-white mb-1">6+</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Professional Certifications</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/" className="font-bold text-xl tracking-wide text-white hover:text-purple-400 transition-colors ml-1">
            Gaurika<span className="text-gray-500">.dev</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1 glass-card px-2 py-1.5 rounded-full">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className="relative px-3 xl:px-4 py-1.5 text-[13px] xl:text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full whitespace-nowrap"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button (Simplified) */}
        <button className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </motion.nav>
  );
}