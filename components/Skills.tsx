import { Code, Puzzle, Database, Globe, Server, PenToolIcon as Tool, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "C#", "LINQ", "Python", "Java", "OOP", "Go", "SQL"],
  },
  {
    title: "Core Skills",
    icon: Puzzle,
    skills: ["Algorithms", "Data Structures", "OOP", "Problem Solving", "Competitive Programming"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["ASP.NET Core", "Django", "Flask", "RESTful APIs", "Node.js"],
  },
  {
    title: "Databases Technologies",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MS SQL Server, SQLite", "MongoDB"],
  },
  {
    title: "Tools & IDEs",
    icon: Tool,
    skills: ["Git & GitHub", "Visual Studio", "VS Code", "Codeblocks", "CLion", "PyCharm", "LaTeX", "Figma", "Postman", "Swagger"],
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
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Technical Proficiencies
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-gray-700 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
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

