import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2 flex-wrap">
            Mohammed Ibrahim
            <Image
              src="https://camo.githubusercontent.com/d552948e7884c41fde2d32b9221d79f0df2076c7d824aaab954ca93f53d95884/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
              alt="Waving Hand Gif"
              width={28}
              height={28}
              className="inline-block w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-8 md:h-8"
              unoptimized
            />
          </h1>
          <div className="mb-4 sm:mb-6">
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Full Stack Software Engineer
            </p>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-300 flex items-center gap-2 flex-wrap">
              <span>Competitive Programmer</span>
              <span className="inline-block animate-bounce text-yellow-500 text-xl xs:text-2xl">🏆</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              {
                href: "https://github.com/Mohamediibra7im",
                title: "GitHub",
                icon: <Github className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-gray-900",
              },
              {
                href: "https://www.linkedin.com/in/mohammed-ibra7im/",
                title: "LinkedIn",
                icon: <Linkedin className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#0A66C2]",
              },
              {
                href: "https://x.com/M7amed_iibrahim",
                title: "XTwitter",
                icon: <FaXTwitter className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#1DA1F2]",
              },
              {
                href: "mailto:mohammed.iibrahim.omar@gmail.com",
                title: "Email",
                icon: <Mail className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-red-600",
              },
              {
                href: "https://codeforces.com/profile/MIDORIYA_",
                title: "Codeforces",
                icon: <SiCodeforces className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#1f8acb]",
              },
              {
                href: "https://www.hackerrank.com/profile/MID0RIYA",
                title: "HackerRank",
                icon: <FaHackerrank className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#2EC866]",
              },
              {
                href: "https://leetcode.com/u/mid0riya",
                title: "LeetCode",
                icon: <SiLeetcode className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#FFA116]",
              },
              {
                href: "https://atcoder.jp/users/Midoriya_Izuku",
                title: "AtCoder",
                icon: (
                  <Image
                    width={20}
                    height={20}
                    src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
                    alt="AtCoder"
                    className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform"
                  />
                ),
                hoverBg: "hover:bg-[#222]",
              },
            ].map(({ href, title, icon, hoverBg }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-200 bg-gray-100 dark:bg-gray-800 ${hoverBg} rounded-full p-1.5 xs:p-2 sm:p-2.5 shadow hover:shadow-lg flex items-center justify-center`}
                title={title}
                aria-label={title}
              >
                {icon}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 text-white font-semibold rounded-full shadow-lg hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-200 group text-sm xs:text-base"
          >
            Contact Me
            <ArrowRight className="ml-2 xs:ml-3 h-4 w-4 xs:h-5 xs:w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center items-center relative">
          <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden border-4 xs:border-6 sm:border-8 border-white dark:border-gray-800 transition-all duration-300 group">
            <Image
              src="https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFM720fbbzwX8O5q2kPK0pYDfbroUj1CilQWIvT"
              alt="Mohammed Ibrahim"
              width={512}
              height={512}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          <div className="mt-3 xs:mt-4 flex items-center gap-2 xs:gap-3">
            <span className="relative flex h-2.5 w-2.5 xs:h-3 xs:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 xs:h-3 xs:w-3 bg-green-500 border border-white dark:border-gray-800"></span>
            </span>
            <span className="text-xs xs:text-sm text-gray-700 dark:text-gray-300 font-medium">
              Open to new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
