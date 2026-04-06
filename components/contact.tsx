import { Mail, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 dot-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-purple-500/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Get In Touch
          </span>
          <div className="h-px flex-1 bg-purple-500/10" />
        </div>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          {"I'm always interested in discussing cybersecurity, new opportunities, and collaborative projects. Feel free to reach out!"}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:sarahmorshed@gmail.com"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="h-4 w-4" />
            Say Hello
          </a>
          <div className="flex items-center gap-3">
            <a
              href="mailto:sarah@example.com"
              className="flex h-11 w-11 items-center justify-center glass rounded-xl text-muted-foreground transition-all hover:border-purple-400/30 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Sarah172"
              className="flex h-11 w-11 items-center justify-center glass rounded-xl text-muted-foreground transition-all hover:border-purple-400/30 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-morshed-25816b65/"
              className="flex h-11 w-11 items-center justify-center glass rounded-xl text-muted-foreground transition-all hover:border-purple-400/30 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
