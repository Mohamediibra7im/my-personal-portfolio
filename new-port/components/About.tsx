import { Download, Briefcase, FolderIcon as FolderDone, Headphones } from "lucide-react"
import { SectionTitle } from "./ui/section-title"

const stats = [
  {
    label: "Experience",
    value: "2+ Years",
    description: "Working",
    icon: Briefcase,
  },
  {
    label: "Completed",
    value: "10+",
    description: "Projects",
    icon: FolderDone,
  },
  {
    label: "Support",
    value: "24/7",
    description: "Online",
    icon: Headphones,
  },
]

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My introduction">About Me</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            {/* Remove this block
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ME.jpg-T0yOHS4Ic5h5qpnBjyqtMRlJhogZQ5.jpeg"
                alt="Mohammed Ibrahim"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            */}

            <div className="space-y-8 text-center">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="font-semibold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">
                      {stat.label}
                      <br />
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-lg">
                Full-Stack .NET developer and competitive programmer skilled in building scalable, data-driven
                applications. Proficient in C#, JavaScript, HTML5, CSS3, and the .NET Core Web API, with experience in
                full-stack Python development. Actively involved in competitive programming and committed to delivering
                efficient and impactful solutions.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

