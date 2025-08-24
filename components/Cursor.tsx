// making custom cursor
"use client";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react'

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
            className="cursor md:fixed md:block hidden z-[51] pointer-events-none  rounded-full bg-white mix-blend-difference w-12 h-12 md:w-14 md:h-14"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    );
}
export default Cursor;