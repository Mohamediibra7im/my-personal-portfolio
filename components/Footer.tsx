import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/Mohamediibra7im"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              title="Github Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ibra7im"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-6 text-gray-600">© 2025 Mohammed Ibrahim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

