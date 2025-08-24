"use client";
// making custom cursor
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react'


// Hide the default cursor globally and hide in click
if (typeof window !== 'undefined') {
    document.body.style.cursor = 'none';
    const prev = document.getElementById('custom-cursor-style');
    if (prev) prev.remove();
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.innerHTML = `
        body, button, a, input, textarea {
            cursor: none !important;
        }
        button:active, a:active {
            cursor: none !important;
        }
    `;
    document.head.appendChild(style);

}


const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: { clientX: number; clientY: number; }) => {
            cursorX.set(e.clientX - 25);
            cursorY.set(e.clientY - 25);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="cursor fixed block z-[51] pointer-events-none rounded-full bg-white mix-blend-difference w-6 h-6 md:w-10 md:h-10"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    );
}
export default Cursor;