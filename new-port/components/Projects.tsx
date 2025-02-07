import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, and payment integration.",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
    demoLink: "https://demo.example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
  },
  {
    name: "Weather Application",
    description:
      "A responsive weather application using React and OpenWeatherMap API. It provides real-time weather information, forecasts, and location-based services.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+App",
    demoLink: "https://demo.example.com/weather-app",
    githubLink: "https://github.com/yourusername/weather-app",
    technologies: ["React", "OpenWeatherMap API", "Geolocation API", "Tailwind CSS"],
  },
  {
    name: "Task Management System",
    description:
      "A comprehensive task management system with features like task creation, assignment, progress tracking, and team collaboration tools.",
    image: "/placeholder.svg?height=400&width=600&text=Task+Management",
    demoLink: "https://demo.example.com/task-management",
    githubLink: "https://github.com/yourusername/task-management",
    technologies: ["Vue.js", "Firebase", "Vuex", "Element UI"],
  },
  {
    name: "Todo List Application",
    description:
      "A feature-rich Todo list application built with React and TypeScript. Includes task prioritization, due dates, and local storage persistence.",
    image: "/placeholder.svg?height=400&width=600&text=Todo+List+App",
    demoLink: "https://demo.example.com/todo-list",
    githubLink: "https://github.com/yourusername/todo-list-app",
    technologies: ["React", "TypeScript", "LocalStorage API", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 " />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

