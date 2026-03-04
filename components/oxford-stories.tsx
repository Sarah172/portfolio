import { ArrowUpRight, BookOpen, Plane, FileText, GraduationCap, Sparkles, Heart } from "lucide-react"

const stories = [
  {
    title: "Why I Chose Oxford & Study Abroad",
    excerpt:
      "The moment I saw the opportunity to study at one of the world's most prestigious universities, I knew I had to pursue it. Here's what drew me to Oxford and how I made the leap.",
    icon: Plane,
    tag: "Decision",
  },
  {
    title: "The Application Process",
    excerpt:
      "From Dalhousie's exchange nomination to Oxford's formal application, navigating OSAP funding, and the UK visa process. A step-by-step account of what it really takes.",
    icon: FileText,
    tag: "Process",
  },
  {
    title: "What I Studied & the Tutorial System",
    excerpt:
      "Oxford's tutorial system was unlike anything I'd experienced. Small group sessions, intensive one-on-one discussions with professors, and a pace that pushed my thinking.",
    icon: GraduationCap,
    tag: "Academics",
  },
  {
    title: "Culture Shock & Traditions",
    excerpt:
      "Formal hall dinners, sub fusc gowns, and punting on the Thames. The centuries-old traditions at Oxford were both enchanting and wonderfully disorienting.",
    icon: Sparkles,
    tag: "Culture",
  },
  {
    title: "My Favorite Memory & How It Shaped My Plans",
    excerpt:
      "One conversation over tea in the Junior Common Room changed how I think about cybersecurity's global impact. Here's the moment that shaped my post-graduate direction.",
    icon: Heart,
    tag: "Reflection",
  },
]

export function OxfordStories() {
  return (
    <section id="blog" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 dot-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.06)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-purple-500/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Oxford Stories
          </span>
          <div className="h-px flex-1 bg-purple-500/10" />
        </div>

        <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto text-balance">
          Reflections from my time at the University of Oxford as the first Dalhousie CS student in
          the Study Abroad Program.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => {
            const Icon = story.icon
            return (
              <article
                key={story.title}
                className="group flex flex-col glass rounded-xl p-6 transition-all hover:border-purple-400/25 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-400">
                    {story.tag}
                  </span>
                  <Icon className="h-4 w-4 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground leading-snug group-hover:text-purple-300 transition-colors">
                  {story.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {story.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-purple-400">
                  <BookOpen className="h-3.5 w-3.5" />
                  Read story
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
