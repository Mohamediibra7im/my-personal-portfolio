"use client"

import { SectionTitle } from "./ui/section-title";
import { Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { sendEmail } from "@/app/actions/send-email"
import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)
    setStatus(result)
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <SectionTitle subtitle="Get in touch">Contact</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto px-3 xs:px-4 sm:px-6">
        <div>
          <h3 className="text-base xs:text-lg font-medium text-gray-900 dark:text-white mb-4 xs:mb-6">Contact Information</h3>
          <div className="space-y-4 xs:space-y-6">
            <div className="group">
              <div className="flex items-center space-x-3 xs:space-x-4">
                <Mail
                  className={cn(
                    "h-4 w-4 xs:h-5 xs:w-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out",
                    "group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110",
                  )}
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm xs:text-base">Email</p>
                  <a href="mailto:mohammed.iibrahim.omar@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-xs xs:text-sm">
                    mohammed.iibrahim.omar@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center space-x-3 xs:space-x-4">
                <Phone
                  className={cn(
                    "h-4 w-4 xs:h-5 xs:w-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out",
                    "group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110",
                  )}
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm xs:text-base">Phone</p>
                  <a href="tel:+201101873008" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-xs xs:text-sm">
                    +20 110 187 3008
                  </a>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center space-x-3 xs:space-x-4">
                <MapPin
                  className={cn(
                    "h-4 w-4 xs:h-5 xs:w-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out",
                    "group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110",
                  )}
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm xs:text-base">Location</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs xs:text-sm">Giza, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-base xs:text-lg font-medium text-gray-900 dark:text-white mb-4 xs:mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent text-sm xs:text-base"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none rounded-xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent text-sm xs:text-base"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none rounded-xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent text-sm xs:text-base"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 rounded-xl transition-colors text-sm xs:text-base"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={cn(
                    "mt-3 xs:mt-4 p-3 xs:p-4 text-center rounded text-sm xs:text-base",
                    status.success ? "bg-green-50 rounded-xl text-green-800" : "bg-red-50 text-red-800",
                  )}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

