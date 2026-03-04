import { ShieldCheck, Rocket, Code } from "lucide-react"

const events = [
  {
    name: "DEFSEC Atlantic",
    icon: ShieldCheck,
    type: "Conference",
  },
  {
    name: "NorthSec Cybersecurity Conference & CTF",
    icon: ShieldCheck,
    type: "Conference & CTF",
  },
  {
    name: "Atlantic Security Conference",
    icon: ShieldCheck,
    type: "Conference",
  },
  {
    name: "NASA International Space Apps Challenge",
    icon: Rocket,
    type: "Hackathon",
  },
  {
    name: "ShiftKey Women in Tech Hackathon",
    icon: Code,
    type: "Judge / Mentor",
  },
]

export function Conferences() {
  return (
    <section id="conferences" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 dot-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.06)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-purple-500/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Conferences & Community
          </span>
          <div className="h-px flex-1 bg-purple-500/10" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon
            return (
              <div
                key={event.name}
                className="group flex items-center gap-3 glass rounded-xl px-5 py-4 transition-all hover:border-purple-400/25 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <Icon className="h-5 w-5 shrink-0 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">{event.name}</p>
                  <p className="text-xs text-muted-foreground">{event.type}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
