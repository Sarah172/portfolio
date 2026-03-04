import { GraduationCap, Globe, Shield, Award, Calculator, ShieldCheck, BookOpen } from "lucide-react"

const quickFacts = [
  { icon: Award, label: "Graduated with Distinction" },
  { icon: Calculator, label: "Minor in Mathematics" },
  { icon: ShieldCheck, label: "Certificate in Communication Technologies & Cyber Security" },
  { icon: BookOpen, label: "Oxford Study Abroad Program" },
]

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,var(--primary)_0%,transparent_50%)] opacity-[0.04]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-primary/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-primary">About Me</span>
          <div className="h-px flex-1 bg-primary/10" />
        </div>

        <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I am a Computer Science graduate with a deep passion for cybersecurity, focusing on
            network defense, vulnerability assessment, and security engineering. My experience spans
            IT operations and network troubleshooting, where I have developed a practical
            understanding of how enterprise systems are built, maintained, and secured.
          </p>
          <p className="text-lg">
            I am particularly drawn to the intersection of offensive and defensive security,
            leveraging hands-on lab environments to sharpen my skills in penetration testing, traffic
            analysis, and incident investigation. My goal is to contribute to building resilient
            digital infrastructure that organizations can trust.
          </p>
        </div>

        {/* Quick Facts chips */}
        <div className="mt-8 flex flex-wrap gap-3">
          {quickFacts.map((fact) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.label}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium text-primary transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
              >
                <Icon className="h-4 w-4 text-primary" />
                {fact.label}
              </div>
            )
          })}
        </div>

        {/* Highlight cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group glass rounded-xl p-6 transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold heading-color mb-1">Security Focus</h3>
            <p className="text-sm text-muted-foreground">
              Specializing in network analysis, vulnerability assessment, and security hardening.
            </p>
          </div>
          <div className="group glass rounded-xl p-6 transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
            <GraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold heading-color mb-1">CS Graduate</h3>
            <p className="text-sm text-muted-foreground">
              Bachelor of Computer Science from Dalhousie University with strong academic standing.
            </p>
          </div>
          <div className="group glass rounded-xl p-6 transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
            <Globe className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold heading-color mb-1">Oxford Scholar</h3>
            <p className="text-sm text-muted-foreground">
              First Dalhousie CS student selected for the Oxford Study Abroad Program.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
