import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{children}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  )
}

