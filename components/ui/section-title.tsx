import type React from "react"
import clsx from "clsx"

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionTitle({
  children,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align]

  return (
    <div className={clsx("flex flex-col mb-12 xs:mb-14 sm:mb-16", alignment, className)}>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 xs:mb-3 tracking-tight leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base xs:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mt-1 mb-2">
          {subtitle}
        </p>
      )}
      <div
        className={clsx(
          "mt-3 xs:mt-4 w-12 xs:w-16 h-0.5 xs:h-1 rounded-full transition-all duration-300",
          "bg-[#1B263B] dark:bg-gray-400"
        )}
      />
    </div>
  )
}
