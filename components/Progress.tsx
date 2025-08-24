"use client";
import React from 'react'
import { motion, useScroll } from "framer-motion"

const Progress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{ scaleX: scrollYProgress }}
            className='fixed origin-left top-0 left-0 w-screen bg-red-500 dark:bg-white h-[3px] text-white z-[100]'
        />
    )
}

export default Progress