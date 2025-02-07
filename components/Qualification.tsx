import { GraduationCap, Briefcase } from "lucide-react"

const educationList = [
  {
    degree: "Bachelor's Degree in Computer Science and Information Technology",
    school: "Helwan National University",
    year: "September 2023 - Present",
    location: "Cairo, Egypt",
  },
  {
    degree: "High School",
    school: "El Emam Ali Official Language School",
    year: "2009 - 2023",
    location: "Giza, Egypt",
  },
]

const experienceList = [
  {
    title: "Head of Researchers",
    company: "Triple-S Cairo branch",
    period: "November 2023 - Present",
    location: "Cairo, Egypt",
    description: [
      "Leading and managing the research team, which includes hiring, mentoring, and evaluating researchers.",
      "Managing the resources allocated to research, including budgets, equipment, and facilities.",
    ],
  },
  {
    title: "Academic Coordinator",
    company: "Summarize Team",
    period: "January 2024 - October 2024",
    location: "Cairo, Egypt",
    description: [
      "Advising students on academic matters, including course selection, academic performance, and career guidance.",
    ],
  },
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
    title: "Trainee - Summer Training",
    company: "Information Technology Institute (ITI)",
    period: "January 2024 - October 2024",
    location: "Cairo, Egypt",
    description: [
      "Participated in full stack development projects using Python and its frameworks.",
      "Developed user interfaces and server-side logic during the training.",
      "Gained practical experience through mentorship.",
    ],
  },
  {
    title: "Trainee - Full Stack Development",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "November 2024 - Present",
    location: "Hybrid",
    description: [
      "Rooted in .NET technologies, the profile showcases a solid foundation for developing data-driven applications. With expertise in C#, HTML5, JavaScript, CSS3, and .NET CoreWeb API, the candidate is equipped to deliver full-stack solutions across scalable web services and applications",
    ],
  },
  {
    title: "Trainee - Level 2 Problem Solving Training",
    company: "Coach Academy",
    period: "July 2024 - October 2024",
    location: "Hybrid",
    description: [
      "Completed training focused on strong problem-solving skills.",
      "Learned to analyze complex challenges and apply logical reasoning.",
    ],
  },
  {
    title: "Trainee - Competitive Programming Internship",
    company: "IEEE Delta Academy",
    period: "September 2024 - Present",
    location: "Remote",
    description: [
      "Engaged in daily coding challenges and algorithm development.",
      "Participated in team-based projects to enhance problem-solving skills.",
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

