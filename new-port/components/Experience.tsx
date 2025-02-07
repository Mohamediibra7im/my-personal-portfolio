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
    title: "Academic Coordinator",
    company: "Summarize Team",
    period: "January 2024 - October 2024",
    location: "Cairo, Egypt",
    description: [
      "Advising students on academic matters, including course selection, academic performance, and career guidance.",
    ],
  },
  {
    title: "Trainee - Full Stack Development",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "November 2024 - Present",
    location: "Hybrid",
    description: [
      "Developing with .NET technologies and building data-driven applications",
      "Working with C#, HTML5, JavaScript, CSS3, and .NET Core Web API",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Experience</h2>
        <div className="mt-6 space-y-10">
          {experienceList.map((exp, index) => (
            <div key={index} className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4">
                <p className="text-lg font-medium text-gray-500">{exp.period}</p>
                <p className="text-sm text-gray-400">{exp.location}</p>
              </div>
              <div className="sm:w-3/4 mt-2 sm:mt-0">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="mt-1 text-lg text-gray-500">{exp.company}</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

