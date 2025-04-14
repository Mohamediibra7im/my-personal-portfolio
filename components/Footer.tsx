import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

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
              className="text-gray-900 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="Github Profile"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ibra7im"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://codeforces.com/profile/MIDORIYA_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="Codeforces"
            >
              <Image
                width={23}
                height={23}
                src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-regular-tal-revivo.png"
                alt="Codeforces"
                className="h-8 w-8"
              />
            </a>
            <a
              href="https://leetcode.com/u/mid0riya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="LeetCode"
            >
              <Image
                width={20}
                height={20}
                src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-regular-tal-revivo.png"
                alt="LeetCode"
                className="h-7 w-7"
              />
            </a>
            <a
              href="https://atcoder.jp/users/Midoriya_Izuku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="AtCoder"
            >
              <Image
                width={24}
                height={24}
                src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
                alt="AtCoder"
                className="h-9 w-9"
              />
            </a>
          </div>
          <p className="mt-6 text-gray-600">© 2025 Mohammed Ibrahim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

