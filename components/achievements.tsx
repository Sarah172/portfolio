import { Award, GraduationCap, Newspaper, Star, Calculator, ShieldCheck, Globe, SquareChevronRight } from "lucide-react"

const achievements = [
  {
    icon: GraduationCap,
    title: "Graduated with Distinction",
    detail: "Dalhousie University, Bachelor of Computer Science",
  },
  {
    icon: Calculator,
    title: "Minor in Mathematics",
    detail: "Complementary analytical foundation",
  },
  {
    icon: ShieldCheck,
    title: "Certificate in Communication Technologies & Cyber Security",
    detail: "Specialized credential in security and communications",
  },
  {
    icon: Globe,
    title: "Oxford Study Abroad Program",
    detail: "First Dal CS student selected for University of Oxford exchange",
  },
  {
    icon: Award,
    title: "Leacross Foundation Leadership Scholarship",
    detail: "$10,000 awarded for leadership and academic excellence",
  },
  {
    icon: Newspaper,
    title: "Featured on Dal News",
    detail: "University media coverage for Oxford selection",
  },
  {
    icon: Star,
    title: "Golden Key Honour Society",
    detail: "Top 15% of students",
  },
  {
  icon: SquareChevronRight,
  title: "Cybersecurity – Growth Edition (Skills for Hire Atlantic)",
  detail: "Digital Nova Scotia 2026 · Final Score: 95%",
},
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 dot-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.06)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-purple-500/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Achievements & Recognition
          </span>
          <div className="h-px flex-1 bg-purple-500/10" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex items-start gap-4 glass rounded-xl p-5 transition-all hover:border-purple-400/25 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
