"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export default function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.15)",
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position relative to the center of the card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Raw mouse coordinates for the spotlight gradient
    const lightX = useMotionValue(-1000);
    const lightY = useMotionValue(-1000);

    // Spring animations for smooth tilting
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        lightX.set(mx);
        lightY.set(my);

        // Normalize coordinates carefully between -0.5 and 0.5
        const xPct = mx / width - 0.5;
        const yPct = my / height - 0.5;

        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Return card to flat position smoothly
        mouseX.set(0);
        mouseY.set(0);
    };

    const backgroundTemplate = useMotionTemplate`radial-gradient(400px circle at ${lightX}px ${lightY}px, ${spotlightColor}, transparent 50%)`;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative overflow-hidden group perspective-1000 ${className}`}
        >
            {/* 3D Extruded Content */}
            <div style={{ transform: "translateZ(30px)" }} className="relative z-10 w-full h-full">
                {children}
            </div>

            {/* Dynamic Spotlight Glow Layer */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: backgroundTemplate,
                }}
            />
        </motion.div>
    );
}
