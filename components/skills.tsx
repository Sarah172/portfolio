import { Lock, Cloud, Code, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Security & Networking",
    icon: Lock,
    skills: [
      "Nmap",
      "Metasploit",
      "Wireshark",
      "TCP/IP",
      "DNS",
      "ARP",
      "Vulnerability Assessment",
      "Network Enumeration",
      "Linux Security Fundamentals",
    ],
  },
  {
    title: "Cloud & Systems",
    icon: Cloud,
    skills: [
      "AWS Fundamentals",
      "IAM",
      "Linux CLI",
      "Active Directory",
      "SharePoint Governance",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      "Python",
      "Java",
      "SQL",
      "PowerShell",
      "JavaScript",
      "MATLAB",
      "PHP",
      "Git",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["ServiceNow", "Microsoft 365", "ConnectWise", "GitHub"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--primary)_0%,transparent_50%)] opacity-[0.04]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-primary/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            Technical Skills
          </span>
          <div className="h-px flex-1 bg-primary/10" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="glass rounded-xl p-6 transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold heading-color">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-primary/10 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80 transition-colors hover:border-primary/25 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
