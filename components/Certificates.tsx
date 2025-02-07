import { ExternalLink } from "lucide-react"

const certificates = [
  {
    name: "Advanced Problem Solving",
    issuer: "Coach Academy",
    year: "2024",
    description: "Completed advanced problem-solving training and achieved high rank in final contest",
    link: "https://example.com/certificate/advanced-problem-solving",
  },
  {
    name: "C++ Programming Fundamentals",
    issuer: "Udemy - Yassin Marco",
    year: "2024",
    description: "5 hours comprehensive introduction to C++ programming fundamentals",
    link: "https://example.com/certificate/cpp-fundamentals",
  },
  {
    name: "Advanced C++ Programming",
    issuer: "Udemy - Maria EduCare",
    year: "2024",
    description: "Advanced C++ programming concepts and expert-level techniques",
    link: "https://example.com/certificate/advanced-cpp",
  },
  {
    name: "AI Career Essentials",
    issuer: "ALX Africa",
    year: "2024",
    description: "Essential skills and knowledge for AI career development",
    link: "https://example.com/certificate/ai-career-essentials",
  },
  {
    name: "Advanced Problem Solving",
    issuer: "HackerRank",
    year: "2024",
    description: "Demonstrated advanced problem-solving capabilities",
    link: "https://example.com/certificate/hackerrank-problem-solving",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    year: "2024",
    description: "Comprehensive web development fundamentals and practices",
    link: "https://example.com/certificate/full-stack-web-dev",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Professional Certifications
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-900 font-semibold">{cert.year}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
              {cert.description && <p className="text-sm text-gray-500 mb-4">{cert.description}</p>}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm"
              >
                View Certificate
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

