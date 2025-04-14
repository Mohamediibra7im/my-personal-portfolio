import { GraduationCap, Briefcase } from "lucide-react"

const educationList = [
  {
    degree: "Bachelor's Degree in Computer Science and Information Technology",
    school: "Helwan National University",
    year: "September 2023 - Present",
    location: "Cairo, Egypt",
  },
]

const experienceList = [
  {
    title: "Vice President & Head of Technical Committee",
    company: "HNU-FCSIT ICPC Community",
    period: "December 2024 - Present",
    location: "Hybrid",
    description: [
      "Assisting the President in overseeing the organization's operations",
      "Managing the technical aspects of the ICPC",
      "Leading the creation, review, and validation of programming problems",
    ],
  },
  {
    title: "Trainee - Full Stack Development with .NET",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "November 2024 - Present",
    location: "Hybrid",
    description: [
      "Developing with .NET technologies and building data-driven applications",
      "Working with C#, HTML5, JavaScript, CSS3, and .NET Core Web API",
    ],
  },
  {
    title: "Trainee - Competitive Programming (Intern)",
    company: "IEEE Delta Academy",
    period: "November 2024 - February 2025",
    location: "Remote",
    description: [
      "Participating in competitive programming training sessions and contests",
      "Learning algorithms and data structures to solve complex problems efficiently",
      "Collaborating with peers to enhance problem-solving skills and coding techniques",
    ],
  },
  {
    title: "Academic Coordinator",
    company: "Summarize Team",
    period: "January 2024 - February 2025",
    location: "Cairo, Egypt",
    description: [
      "Advising students on academic matters, including course selection, academic performance, and career guidance.",
    ],
  },
  {
    title: "Trainee - Full Stack Development with Django",
    company: "Information Technology Institute (ITI)",
    period: "November 2024 - September 2024",
    location: "Remote",
    description: [
      "Developing with Django and building data-driven applications",
      "Working with Python, HTML5, JavaScript, CSS3, and Django REST Framework",
      "Gaining experience in full-stack development and web application design",
    ],
  },
  {
    title: "Head of Researchers",
    company: "Triple-S Cairo branch",
    period: "November 2023 - February 2024",
    location: "Cairo, Egypt",
    description: [
      "Leading and managing the research team, which includes hiring, mentoring, and evaluating researchers.",
      "Managing the resources allocated to research, including budgets, equipment, and facilities.",
    ],
  },
]

export default function Qualification() {
  return (
    <section id="qualifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Qualification</h2>
          <p className="text-gray-600">My personal journey</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6" />
              <span className="text-lg font-medium">Education</span>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="space-y-12">
                {educationList.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-3 top-2 w-3 h-3 bg-gray-600 rounded-full border-4 border-white"></div>
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6" />
              <span className="text-lg font-medium">Experience</span>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="space-y-12">
                {experienceList.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-3 top-2 w-3 h-3 bg-gray-600 rounded-full border-4 border-white"></div>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

