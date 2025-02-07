import Image from "next/image"

const projects = [
  {
    title: "Web Design",
    image: "/placeholder.svg",
  },
  {
    title: "App Design",
    image: "/placeholder.svg",
  },
  {
    title: "Brand Design",
    image: "/placeholder.svg",
  },
  {
    title: "Web Design",
    image: "/placeholder.svg",
  },
  {
    title: "App Design",
    image: "/placeholder.svg",
  },
]

const categories = ["All", "Web", "App", "Design"]

export default function Portfolio() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Portfolio</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button key={category} className="px-4 py-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            {category}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

