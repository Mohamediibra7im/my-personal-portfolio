import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "./ui/section-title";

interface Project {
  name: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
  status: string;
}

export const projects: Project[] = [
  {
    name: "Personal Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMToAX6tHsIRJglXdvZDBSsVL8NptFnijwCbGu",
    demoLink: "https://mohamed-ibrahim-omar.vercel.app",
    githubLink: "https://github.com/Mohamediibra7im/new-port",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel"],
    status: "Completed",
  },
  {
    name: "Collage Management System",
    description: "CMS is a web application that simplifies and automates academic and administrative tasks, improving efficiency and offering an easy-to-use interface for students, faculty, and administrators.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMgzzigE5YV8UEhCTJjONdpB3zebFWKvI2ywxi",
    demoLink: "#",
    githubLink: "https://github.com/Collage-Management-System",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Next.js", "Tailwind CSS"],
    status: "Completed",
  },
  {
    name: "CF-Problem Scraper",
    description: "A Python application that scrapes Codeforces for problem data, allowing users to search and filter problems based on difficulty, tags, and more. Features a GUI built with PyQt5.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMyNGGM797TUs6cnz3kjxt2DgZSNiA0o9KXm4h",
    demoLink: "https://lnkd.in/dsgK-gci",
    githubLink: "https://github.com/Mohamediibra7im/CF-Problem-Scraper",
    technologies: ["Python", "PyQt5", "requests", "requests-cache", "JSON"],
    status: "Completed",
  },
  {
    name: "FCFS Scheduling Calculator",
    description: "A web-based calculator for First-Come, First-Served (FCFS) scheduling algorithm. It allows users to input process details and calculates waiting time, turnaround time, and average waiting time.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMYBBY5Fyfz6Mm2PYwX1GIl8K0pg7hWVdBZy3N",
    demoLink: "https://fcfs-scheduling-calculator.vercel.app/",
    githubLink: "https://github.com/Mohamediibra7im/FCFS-Scheduling-Calculator",
    technologies: ["Python", "Flask", "JavaScript", "HTML/CSS", "SQLite", "Bootstrap"],
    status: "Completed",
  },
  {
    name: "N Puzzle Solver",
    description:
      "A Python-based N puzzle solver using Best First search algorithm and heuristics. It provides a GUI for user interaction and visualizes the solving process.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMEtCJ3tIUnNYb4i5CeGA81RtDg3L9r7hPFwK0",
    demoLink: "#",
    githubLink: "https://github.com/Mohamediibra7im/N-Puzzle-Game",
    technologies: ["Python", "OOP", "PyQt5", "Search Algorithms", "Heuristics"],
    status: "Completed",
  },
  {
    name: "Event Management System",
    description:
      "A Java-based event management system with features for event creation, registration, and ticketing. Utilizes JavaFX for the GUI and text files for data storage.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMgDbxGI5YV8UEhCTJjONdpB3zebFWKvI2ywxi",
    demoLink: "#",
    githubLink: "https://github.com/Mohamediibra7im/Event-Management-System",
    technologies: ["Java", "OOP", "JavaFX", "Text Files"],
    status: "Completed",
  },
  {
    name: "FilmAPI",
    description:
      "A RESTful API for managing film data, built with Go and PostgreSQL. It supports CRUD operations, user authentication, and advanced search features.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMHNsoCbyF4PaobKweHshEyj7cQ3WAnrSZVpJf",
    demoLink: "#",
    githubLink: "https://github.com/Mohamediibra7im/FilmApi",
    technologies: ["Go (Golang)", "Fiber", "PostgreSQL", "Logrus", "Rate Limiting"],
    status: "Completed",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with the MERN stack. It features user authentication, product management, and a shopping cart system.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMcko9WzNkRhuDOr7WMXlTdm6LQ9xSJ83v1f2j",
    demoLink: "#",
    githubLink: "#",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "TypeScript"],
    status: "still working",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Featured Projects">Projects</SectionTitle>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-48 lg:h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 mb-3 xs:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 xs:px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 flex-nowrap">
                    {project.demoLink && project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-2.5 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                        Demo
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-2.5 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm font-medium border border-gray-900 dark:border-gray-400 text-gray-900 dark:text-gray-100 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                        Code
                      </a>
                    )}
                    {project.status.toLowerCase() === "still working" && (
                      <span className="inline-flex items-center px-2.5 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-xl">
                        <svg
                          className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Under Development
                      </span>
                    )}
                    {project.status.toLowerCase() === "completed" && (
                      <span className="inline-flex items-center px-2.5 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 rounded-xl">
                        <svg
                          className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}