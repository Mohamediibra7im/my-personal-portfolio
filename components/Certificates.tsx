import { ExternalLink } from "lucide-react"

const certificates = [
  {
    name: "ECPC Qualification Contest 2024",
    issuer: "Egyptian Collegiate Programming Contest (ECPC)",
    year: "2024",
    description: "Participated in the ECPC qualification contest 2024",
    link: "https://drive.google.com/file/d/1Q42FVyGPE1z6-jeA3UqpF-72zfRqQeMZ/view?usp=sharing",
  },
  {
    name: "Advanced Problem Solving Training",
    issuer: "Coach Academy",
    year: "2024",
    description: "Completed advanced problem-solving training and achieved high rank in final contest",
    link: "https://drive.google.com/file/d/1CE6S3OIo_K3sp3s9aVpGw5BemcAKTJhl/view?usp=sharing",
  },
  {
    name: "Problem Solving Assessment",
    issuer: "HackerRank",
    year: "2024",
    description: "Demonstrated advanced problem-solving capabilities",
    link: "https://drive.google.com/file/d/1bxUqxSKhq2Qlo6lHGoE45xrEdhxbKYDl/view?usp=sharing",
  },
  {
    name: "C++ Programming Fundamentals",
    issuer: "Udemy - Yassin Marco",
    year: "2024",
    description: "5 hours comprehensive introduction to C++ programming fundamentals",
    link: "https://drive.google.com/file/d/126uMqFNkypxaUch-G_hJAX3JuyHhUQPn/view?usp=sharing",
  },
  {
    name: "Advanced C++ Programming",
    issuer: "Udemy - Maria EduCare",
    year: "2024",
    description: "Advanced C++ programming concepts and expert-level techniques",
    link: "https://drive.google.com/file/d/1Q0zu5SPI73eayQGkj2EELcJW6-FRuc_S/view?usp=sharing",
  },
  {
    name: "Mastering Data Structures and OPP in C++",
    issuer: "Udemy - OCSALY Academy",
    year: "2024",
    description: "Mastered data structures and object-oriented programming in C++",
    link: "https://drive.google.com/file/d/13Mq0gDZK6dC1aZyfZth_-OKESoRHTSdJ/view?usp=sharing",
  },
  {
    name: "AI Career Essentials",
    issuer: "ALX Africa",
    year: "2024",
    description: "Essential skills and knowledge for AI career development",
    link: "https://drive.google.com/file/d/1Gj5-1Xv_h-S16OkGfLeSeKr3zDh5t7SQ/view?usp=sharing",
  },
  {
    name: "Web Development Course",
    issuer: "Udemy - Ziad Smadi",
    year: "2024",
    description: "Comprehensive web development course covering HTML, CSS",
    link: "https://drive.google.com/file/d/1Vjn-7BDamLIYtAY3SnkMKdfqlIQSNnEK/view?usp=sharing",
  },
  {
    name: "Learn SQL from scratch in Arabic",
    issuer: "Udemy - Ahmed Hatem",
    year: "2024",
    description: "A beginner-level SQL course taught in Arabic",
    link: "https://drive.google.com/file/d/1cqkL_J2AmLZLrVs_2wSsy5QG-h2MWN2p/view?usp=sharing",
  },
  {
    name: "Full Stack Summer Training",
    issuer: "Information Technology Institute (ITI)",
    year: "2024",
    description: "Completed summer training program focused on Full Stack Web Development with django",
    link: "https://drive.google.com/file/d/1l84d8-RA0t4MGdC__wcI9BQToMDGO3z3/view?usp=sharing",
  },
  {
    name: "Principles of Writing Clean Code",
    issuer: "MaharaTech ITIMooca",
    year: "2024",
    description: "Learned principles of writing clean and maintainable code",
    link: "https://drive.google.com/file/d/1WNiCgV06JQrodqIcVn4RZqI1CLRgcPsm/view?usp=sharing",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Professional Certifications
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-900 font-semibold">{cert.year}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
              {cert.description && <p className="text-sm text-gray-500 mb-4">{cert.description}</p>}
              </div>
              <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm mt-auto"
              >
              View Certificate
              <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

