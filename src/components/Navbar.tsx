"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    { name: "Contact", path: "#contact" }
  ];
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      <div className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-300 ${scrolled ? "glass-nav shadow-lg w-[90%] max-w-5xl" : "w-full max-w-6xl bg-transparent"
        }`}>

        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform overflow-hidden">
            <Image src="/profile.png" alt="Profile" fill className="object-cover" />
          </div>
          <span className="font-bold text-xl tracking-wide text-white group-hover:text-purple-400 transition-colors">
            Gaurika<span className="text-gray-500">.dev</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2 glass-card px-4 py-2 rounded-full">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full"
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
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </motion.nav>
  );
}