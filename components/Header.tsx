"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle"

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 dark:bg-black/40 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-14 xs:h-16">
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20new%20letter-m-6HWOrDV1FR3872f33ET0M4YZxUw8MK.png"
              alt="Logo"
              width={28}
              height={28}
              className="dark:invert w-6 h-6 xs:w-8 xs:h-8 sm:w-8 sm:h-8"
            />
            <span className="text-lg xs:text-xl sm:text-xl font-semibold text-gray-900 dark:text-white">Mohammed Ibrahim</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-[#1B263B] dark:hover:text-[#A7C957] transition-colors px-2 py-1
                  after:content-[''] after:block after:h-0.5 after:bg-[#1B263B] dark:after:bg-[#A7C957] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full p-1.5 xs:p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div
              className={`relative bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/30 rounded-2xl shadow-2xl mx-1 xs:mx-2 mt-2 xs:mt-3 p-3 xs:p-4 transition-all duration-500 ease-out transform ${mobileMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:from-transparent dark:via-gray-700/20 dark:to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-blue-400/5 dark:from-amber-400/3 dark:via-transparent dark:to-blue-400/3 rounded-2xl"></div>
              <div className="relative space-y-1 xs:space-y-2">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`group block px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-100/80 hover:to-gray-50/80 dark:hover:from-gray-800/80 dark:hover:to-gray-700/80 hover:shadow-md hover:scale-[1.02] transform ${mobileMenuOpen ? 'animate-slideIn' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.name}</span>
                      <div className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-amber-400 to-blue-400 dark:from-amber-300 dark:to-blue-300 transition-all duration-300 rounded-full"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

