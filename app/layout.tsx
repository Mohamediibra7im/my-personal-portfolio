import "./globals.css"
import { Playpen_Sans } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"

const playpenSansArabic = Playpen_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Ibrahim - Portfolio",
  description: "My personal portfolio showcasing my skills and projects as a full-stack Software Engineer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={playpenSansArabic.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

