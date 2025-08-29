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
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20new%20letter-m-6HWOrDV1FR3872f33ET0M4YZxUw8MK.png"
              alt="Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Mohammed Ibrahim</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
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
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div
              className={`pt-2 pb-3 space-y-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg mx-2 mt-2 transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

