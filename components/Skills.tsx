import { Puzzle, Database, Globe, Server, PenToolIcon as Tool, Users } from "lucide-react"
import { IoCodeSlash } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { SectionTitle } from "./ui/section-title";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: IoCodeSlash,
    skills: ["C", "C++", "C#", "LINQ", "Python", "Java", "Go", "SQL"],
  },
  {
    title: "Core Skills",
    icon: Puzzle,
    skills: ["Algorithms", "Data Structures", "OOP", "Problem Solving", "Competitive Programming"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "SASS", "Angular", "React", "Next.js", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["ASP.NET Core", "Django", "Flask", "RESTful APIs", "Node.js", "Express.js"],
  },
  {
    title: "Databases Technologies",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MS SQL Server", "SQLite", "MongoDB"],
  },
  {
    title: "Tools & IDEs",
    icon: Tool,
    skills: ["Git & GitHub", "Visual Studio", "VS Code", "Codeblocks", "CLion", "PyCharm", "LaTeX", "Figma", "Postman", "Swagger"],
  },
  {
    title: "Operating Systems",
    icon: FaComputer,
    skills: ["Windows", "Linux", "Ubuntu"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Communication",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Critical Thinking",
      "Creativity",
      "Adaptability",
      "Self-Motivation",
      "Conflict Resolution",
      "Empathy",
      "Active Listening",
      "Negotiation",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Technical Proficiencies">
          Skills
        </SectionTitle>
        <div className="grid gap-4 xs:gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 xs:p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3 xs:mb-4">
                <category.icon className="w-5 h-5 xs:w-6 xs:h-6 text-gray-700 dark:text-gray-300 mr-2" />
                <h3 className="text-lg xs:text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 xs:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

