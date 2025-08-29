import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-8 xs:py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap gap-2 xs:gap-3 mb-6 xs:mb-8 justify-center">
            {[
              {
                href: "https://github.com/Mohamediibra7im",
                title: "GitHub",
                icon: (
                  <Github className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-gray-900",
              },
              {
                href: "https://www.linkedin.com/in/mohammed-ibra7im/",
                title: "LinkedIn",
                icon: (
                  <Linkedin className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#0A66C2]",
              },
              {
                href: "https://x.com/M7amed_iibrahim",
                title: "XTwitter",
                icon: <FaXTwitter className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#1DA1F2]",
              },
              {
                href: "https://codeforces.com/profile/MIDORIYA_",
                title: "Codeforces",
                icon: (
                  <SiCodeforces className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#1f8acb]",
              },
              {
                href: "https://www.hackerrank.com/profile/MID0RIYA",
                title: "HackerRank",
                icon: (
                  <FaHackerrank className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#2EC866]",
              },
              {
                href: "https://leetcode.com/u/mid0riya",
                title: "LeetCode",
                icon: (
                  <SiLeetcode className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#FFA116]",
              },
              {
                href: "https://atcoder.jp/users/Midoriya_Izuku",
                title: "AtCoder",
                icon: (
                  <div className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded flex items-center justify-center">
                      <span className="text-white dark:text-white text-xs xs:text-sm font-bold font-mono">A</span>
                    </div>
                  </div>
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
          <p className="mt-4 xs:mt-6 text-gray-500 dark:text-gray-400 text-xs xs:text-sm">
            &copy; {new Date().getFullYear()} Mohammed Ibrahim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
