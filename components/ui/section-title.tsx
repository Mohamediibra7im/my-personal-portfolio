import type React from "react"
import clsx from "clsx"

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  accentColor?: string // Optional accent color for the underline
}

export function SectionTitle({
  children,
  subtitle,
  align = "center",
  className = "",
  accentColor = "bg-[#1B263B]",
}: SectionTitleProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align]

  return (
    <div className={clsx("flex flex-col mb-16", alignment, className)}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mt-1 mb-2">
          {subtitle}
        </p>
      )}
      <div
        className={clsx(
          "mt-4 w-16 h-1 rounded-full transition-all duration-300",
          accentColor
        )}
      />
    </div>
  )
}
