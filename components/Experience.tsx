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

