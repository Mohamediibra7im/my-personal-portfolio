"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                disabled
                className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-600/30 shadow-lg backdrop-blur-md"
            >
                <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Button>
        )
    }

    const isDark = (resolvedTheme ?? theme) === "dark"

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-600/30 shadow-lg backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:from-transparent dark:via-gray-700/20 dark:to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10 dark:from-amber-400/5 dark:via-transparent dark:to-blue-400/5 rounded-xl"></div>
            <Sun className={`relative h-4 w-4 text-amber-500 transition-all duration-300 ${isDark ? "block rotate-0 scale-100" : "hidden rotate-90 scale-0"}`} />
            <Moon className={`relative h-4 w-4 text-slate-600 transition-all duration-300 ${isDark ? "hidden -rotate-90 scale-0" : "block rotate-0 scale-100"}`} />
        </Button>
    )
}


