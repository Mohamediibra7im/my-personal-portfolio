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

    const [showCursor, setShowCursor] = React.useState(true);
    useEffect(() => {
        const checkScreen = () => {
            const shouldShow = window.innerWidth >= 768;
            setShowCursor(shouldShow);
            document.body.style.cursor = shouldShow ? 'none' : '';
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => {
            window.removeEventListener('resize', checkScreen);
            document.body.style.cursor = '';
        };
    }, []);
    
    if (!showCursor) return null;
    return (
        <motion.div
            className="cursor fixed block z-[51] pointer-events-none rounded-full bg-white mix-blend-difference w-12 h-12 md:w-14 md:h-14"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    );
}
export default Cursor;