import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { SiCodeforces, SiLeetcode,  } from "react-icons/si";

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Mohamed Ibrahim
            <Image
              src="https://camo.githubusercontent.com/d552948e7884c41fde2d32b9221d79f0df2076c7d824aaab954ca93f53d95884/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
              alt="Waving Hand Gif"
              width={33}
              height={33}
              className="inline-block"
              unoptimized
            />
            </h1>
          <div className="mb-6">
            <p className="text-xl text-gray-600">
              Full Stack Software Engineer <br className="hidden sm:inline" />
              <span className="text-lg text-gray-600 sm:ml-0"> & Competitive Programmer</span>
            </p>
          </div>
            <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Mohamediibra7im"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ibra7im/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:mohammed.iibrahim.omar@gmail.com" className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110" title="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://codeforces.com/profile/MIDORIYA_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="Codeforces"
            >
              <SiCodeforces className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/mid0riya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="LeetCode"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
            <a
              href="https://atcoder.jp/users/Midoriya_Izuku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
              title="AtCoder"
            >
              <Image
              width={24}
              height={24}
              src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
              alt="AtCoder"
              className="h-7 w-7"
              />
            </a>
          </div>
          <a href="#contact" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded-full">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="w-80 h-80 mx-auto overflow-hidden rounded-full">
            <Image
              src="https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFM720fbbzwX8O5q2kPK0pYDfbroUj1CilQWIvT"
              alt="Mohammed Ibrahim"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
