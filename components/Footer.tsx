import { Github, Linkedin} from "lucide-react";
import Image from "next/image";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap gap-3 mb-8 sm:gap-4 justify-center">
            {[
              {
                href: "https://github.com/Mohamediibra7im",
                title: "GitHub",
                icon: (
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-gray-900",
              },
              {
                href: "https://www.linkedin.com/in/mohammed-ibra7im/",
                title: "LinkedIn",
                icon: (
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#0A66C2]",
              },
              {
                href: "https://x.com/M7amed_iibrahim",
                title: "XTwitter",
                icon: <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />,
                hoverBg: "hover:bg-[#1DA1F2]",
              },
              {
                href: "https://codeforces.com/profile/MIDORIYA_",
                title: "Codeforces",
                icon: (
                  <SiCodeforces className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#1f8acb]",
              },
              {
                href: "https://www.hackerrank.com/profile/MID0RIYA",
                title: "HackerRank",
                icon: (
                  <FaHackerrank className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#2EC866]",
              },
              {
                href: "https://leetcode.com/u/mid0riya",
                title: "LeetCode",
                icon: (
                  <SiLeetcode className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                ),
                hoverBg: "hover:bg-[#FFA116]",
              },
              {
                href: "https://atcoder.jp/users/Midoriya_Izuku",
                title: "AtCoder",
                icon: (
                  <Image
                    width={24}
                    height={24}
                    src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
                    alt="AtCoder"
                    className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform"
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
                className={`group text-gray-600 hover:text-white transition-all duration-200 bg-gray-100 ${hoverBg} rounded-full p-2 sm:p-2.5 shadow hover:shadow-lg flex items-center justify-center`}
                title={title}
                aria-label={title}
              >
                {icon}
              </a>
            ))}
          </div>
            <p className="mt-6 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mohammed Ibrahim. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
