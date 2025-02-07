import { Code, Database, Globe, Server, PenToolIcon as Tool, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "C#", "LINQ", "Python", "Java", "OOP"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "SASS",
      "React",
      "Django",
      "RESTful APIs",
      ".NET",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MS SQL Server"],
  },
  {
    title: "Tools & IDEs",
    icon: Tool,
    skills: ["Git & GitHub", "Visual Studio", "VS Code", "Codeblocks", "CLion", "PyCharm", "LaTeX"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Communication",
      "Teamwork",
      "Problem-Solving",
      "Time Management",
      "Leadership",
      "Critical Thinking",
      "Creativity",
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Server,
    skills: ["Node.js", "Express.js", "Docker", "CI/CD", "AWS", "Heroku"],
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

