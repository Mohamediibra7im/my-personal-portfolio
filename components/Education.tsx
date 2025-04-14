export default function Education() {
  const educationList = [
    {
      degree: "Bachelor's Degree in Computer Science and Information Technology",
      school: "Helwan National University",
      year: "September 2023 - Present",
      location: "Cairo, Egypt",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Education</h2>
        <div className="mt-6 space-y-10">
          {educationList.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4">
                <p className="text-lg font-medium text-gray-500">{edu.year}</p>
                <p className="text-sm text-gray-400">{edu.location}</p>
              </div>
              <div className="sm:w-3/4 mt-2 sm:mt-0">
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <p className="mt-1 text-lg text-gray-500">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

