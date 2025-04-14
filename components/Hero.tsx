import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mohamed Ibrahim <span className="text-yellow-400">👋</span>
          </h1>
          <div className="mb-6">
            <p className="text-xl text-gray-600">
              Full Stack Software Engineer <br className="hidden sm:inline" />
              <span className="text-lg text-gray-600 sm:ml-0"> & Competitive Programmer</span>
            </p>
          </div>
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Mohamediibra7im"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ibra7im/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:mohammed.iibrahim.omar@gmail.com" className="text-gray-600 hover:text-gray-900" title="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <a href="#contact" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded-full">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="w-80 h-80 mx-auto overflow-hidden rounded-full">
            <Image
              src="https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFM720fbbzwX8O5q2kPK0pYDfbroUj1CilQWIvT"
              alt="Mohammed Ibrahim"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
