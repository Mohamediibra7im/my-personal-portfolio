import { ExternalLink, Briefcase, FolderIcon as FolderDone, Headphones } from "lucide-react";
import { SectionTitle } from "./ui/section-title";
import { projects } from "./Projects";


const stats = [
  {
    label: "Experience",
    value: "2+ Years",
    description: "Working",
    icon: Briefcase,
  },
  {
    label: "Completed",
    value: `${projects.length}+`,
    description: "Projects",
    icon: FolderDone,
  },
  {
    label: "Support",
    value: "24/7",
    description: "Online",
    icon: Headphones,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My introduction">About Me</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="space-y-8 text-center">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                      <br />
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-left">
                Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Mohammed Ibrahim Omar</span>, a Computer Science student at Helwan National University and a passionate Full Stack Developer with a strong foundation in competitive programming. My technical expertise spans multiple programming languages including <span className="font-medium text-gray-800 dark:text-gray-200">C++</span>, <span className="font-medium text-gray-800 dark:text-gray-200">C#</span>, <span className="font-medium text-gray-800 dark:text-gray-200">Python</span>, <span className="font-medium text-gray-800 dark:text-gray-200">Java</span>, and <span className="font-medium text-gray-800 dark:text-gray-200">Go</span>, with proficiency in modern web technologies like <span className="font-medium text-gray-800 dark:text-gray-200">React</span>, <span className="font-medium text-gray-800 dark:text-gray-200">Next.js</span>, <span className="font-medium text-gray-800 dark:text-gray-200">ASP.NET Core</span>, and <span className="font-medium text-gray-800 dark:text-gray-200">Django</span>.
                <br /><br />
                Currently, I&apos;m gaining hands-on experience as a Full Stack .NET Web Development Intern at Digital Egypt Pioneers Initiative (DEPI), where I&apos;m building data-driven applications using C#, .NET Core Web API, and modern frontend technologies. My competitive programming background, enhanced through training at IEEE Delta Academy and Coach Academy, has sharpened my problem-solving skills and algorithmic thinking.
                <br /><br />
                Beyond technical skills, I&apos;ve demonstrated strong leadership as Vice President &amp; Head of Technical Committee at HNU-FCSIT ICPC Community and CO-Head of Scientific Committee at HNU-FCSIT Student Union. These roles have honed my abilities in team management, event organization, and fostering collaborative learning environments. I&apos;m passionate about creating efficient, scalable solutions and always eager to tackle new challenges that combine technical innovation with real-world impact.
              </p>

              <a
                href="https://drive.google.com/file/d/1HyKzZwqvfWgyLHMubHvLDQfktLrlwnEa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 text-white font-semibold rounded-full shadow-lg hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 dark:focus:ring-gray-400"
                aria-label="View my CV (opens in new tab)"
              >
                <span>View CV</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}