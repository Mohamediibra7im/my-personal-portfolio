import { GraduationCap, BriefcaseBusiness} from "lucide-react"
import React from "react"
import { SectionTitle } from "./ui/section-title";
import { MdOutlineVolunteerActivism } from "react-icons/md";

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
    title: "Trainee - Full Stack .Net Web Development Internship",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "November 2024 - May 2025",
    location: "Hybrid",
    description: [
      "Developing with .NET technologies and building data-driven applications",
      "Working with C#, HTML5, JavaScript, CSS3, and .NET Core Web API",
      "Delivering full-stack solutions for scalable web services and applications",
    ],
  },
  {
    title: "Trainee - Full Stack Development with Python",
    company: "Information Technology Institute (ITI)",
    period: "August 2024 - September 2024",
    location: "Remote",
    description: [
      "Developing with Django and building data-driven applications",
      "Working with Python, HTML5, JavaScript, CSS3, and Django REST Framework",
      "Gaining experience in full-stack development and web application design",
    ],
  },
  {
    title: "Trainee - Competitive Programming Internship",
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
    title: "Trainee - Level 2 Problem Solving Training",
    company: "Coach Academy",
    period: "July 2024 - October 2024",
    location: "Remote",
    description: [
      "This training includes hands-on experience in competitive programming, focusing on problem-solving and optimization techniques to enhance performance in programming competitions"
    ],
  },

]

const volunteeringList = [
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
    period: "January 2024 - February 2025",
    location: "Cairo, Egypt",
    description: [
      "Advising students on academic matters, including course selection, academic performance, and career guidance.",
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
        <SectionTitle subtitle="A snapshot of my academic and professional journey">
          Qualifications
        </SectionTitle>

        {/* Education Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-7 h-7 text-gray-800" />
            <span className="text-xl font-semibold text-gray-900">Education</span>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="space-y-12">
              {educationList.map((edu, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-3 top-2 w-3 h-3 bg-gray-900 rounded-full border-4 border-white group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-700">{edu.school}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <span>{edu.year}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hidden sm:inline">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-2 mb-8">
            <BriefcaseBusiness className="w-7 h-7 text-gray-800" />
            <span className="text-xl font-semibold text-gray-900">Experience</span>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="space-y-12">
              {experienceList.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-3 top-2 w-3 h-3 bg-gray-900 rounded-full border-4 border-white group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <span>{exp.period}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hidden sm:inline">{exp.location}</span>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        { }
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <MdOutlineVolunteerActivism className="w-7 h-7 text-gray-800" />
            <span className="text-xl font-semibold text-gray-900">Volunteering</span>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="space-y-12">
              {volunteeringList.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-3 top-2 w-3 h-3 bg-gray-900 rounded-full border-4 border-white group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <span>{exp.period}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hidden sm:inline">{exp.location}</span>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}