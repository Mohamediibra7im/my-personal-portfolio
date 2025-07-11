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

                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-left">
                  Hi, I&apos;m <span className="font-semibold text-gray-900">Mohammed Ibrahim Omar</span>, a passionate Full Stack Software Engineer dedicated to crafting impactful web applications. My expertise spans both backend and frontend development, working with languages like <span className="font-medium">Python</span>, <span className="font-medium">C#</span>, <span className="font-medium">Go</span>, and <span className="font-medium">Java</span>, and frameworks such as <span className="font-medium">Django</span>, <span className="font-medium">.NET Core</span>, and <span className="font-medium">React</span>. I&apos;m experienced with databases including <span className="font-medium">MySQL</span>, <span className="font-medium">PostgreSQL</span>, and <span className="font-medium">MS SQL Server</span>.
                  <br /><br />
                  Beyond coding, I&apos;ve embraced leadership as Vice President &amp; Head of Technical Committee at HNU - FCSIT ICPC Community and as Head of Researchers at Triple-S Cairo branch. These roles have sharpened my problem-solving, teamwork, and leadership abilities.
                  <br /><br />
                  My portfolio features diverse projects from a Codeforces problem scraper and a College Management System to a Film API and this very portfolio site demonstrating my adaptability and drive to deliver real-world solutions. I&apos;m always eager to learn, grow, and take on new challenges where I can blend technical excellence with collaborative leadership.
                </p>

                <a
                href="https://drive.google.com/file/d/1HyKzZwqvfWgyLHMubHvLDQfktLrlwnEa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
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