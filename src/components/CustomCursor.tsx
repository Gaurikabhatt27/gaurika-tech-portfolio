"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Motion values for coordinates
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs for the outer ring
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check for touch device, don't run cursor logic if true
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor on interactive elements
            if (
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Outer glowing ring that trails behind smoothly */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-400 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(168, 85, 247, 0.15)" : "transparent",
                }}
                transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
            />
            {/* Inner solid dot that snaps exactly to the pointer */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-purple-300 pointer-events-none z-[10000] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "13px",
                    translateY: "13px",
                }}
            />
        </>
    );
}
