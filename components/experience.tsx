import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Technical Support Engineer Co-op",
    company: "SolutionInc.",
    bullets: [
      "Designed and troubleshot secure Wi-Fi networks in commercial environments.",
      "Supported network infrastructure and connectivity systems.",
      "Resolved incidents through structured troubleshooting processes.",
    ],
  },
  {
    title: "IT Operations Specialist Co-op",
    company: "High Liner Foods",
    bullets: [
      "Provided Tier 1\u20132 technical support across North America.",
      "Migrated 250+ intranet pages to SharePoint with governance controls.",
      "Evaluated ERP integration vendors and presented technical analysis to leadership.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 dot-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.06)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-purple-500/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Experience
          </span>
          <div className="h-px flex-1 bg-purple-500/10" />
        </div>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-purple-500/10 hidden sm:block" aria-hidden="true" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-500/20 bg-card shadow-md shadow-purple-500/5">
                    <Briefcase className="h-4 w-4 text-purple-400" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass rounded-xl p-6 transition-all hover:border-purple-400/25 hover:shadow-lg hover:shadow-purple-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm font-medium text-purple-400">{exp.company}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/40" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
