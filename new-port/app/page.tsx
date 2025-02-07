import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Qualification from "@/components/Qualification"
import Projects from "@/components/Projects"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { AOSInit } from "@/components/aos-init"
import "aos/dist/aos.css"

export default function Home() {
  return (
    <div className="bg-white">
      <AOSInit />
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Qualification />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Certificates />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

