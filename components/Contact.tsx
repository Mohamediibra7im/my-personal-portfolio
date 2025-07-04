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
    <section id="contact" className="py-16 sm:py-20">
      <SectionTitle subtitle="Get in touch">Contact</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="group">
              <div className="flex items-center space-x-4">
                <Mail
                  className={cn(
                    "h-5 w-5 text-gray-600 transition-all duration-300 ease-in-out",
                    "group-hover:text-gray-900 group-hover:scale-110",
                  )}
                />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:mohammed.iibrahim.omar@gmail.com" className="text-gray-600 hover:text-gray-900">
                    mohammed.iibrahim.omar@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center space-x-4">
                <Phone
                  className={cn(
                    "h-5 w-5 text-gray-600 transition-all duration-300 ease-in-out",
                    "group-hover:text-gray-900 group-hover:scale-110",
                  )}
                />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+201101873008" className="text-gray-600 hover:text-gray-900">
                    +20 110 187 3008
                  </a>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center space-x-4">
                <MapPin
                  className={cn(
                    "h-5 w-5 text-gray-600 transition-all duration-300 ease-in-out",
                    "group-hover:text-gray-900 group-hover:scale-110",
                  )}
                />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Giza, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gray-900 text-white hover:bg-gray-800 rounded-xl transition-colors"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={cn(
                    "mt-4 p-4 text-center rounded",
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

