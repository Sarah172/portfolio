"use client"

import Image from "next/image"
import { Github, Linkedin, Download, ChevronDown, MapPin } from "lucide-react"
import { AuroraBackground } from "./aurora-background"
import { SecurityFocus } from "./security-focus"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-28 pb-16">
        {/* Glass card */}
        <div className="glass-strong rounded-2xl p-8 sm:p-10">
          {/* Welcome line */}
          <p className="text-sm font-mono text-primary/70 tracking-wide mb-6">
            {"Welcome \u2014 I build secure systems and investigate network traffic."}
          </p>

          {/* Profile image + name row */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Profile image with violet glow ring */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-purple-500/50 via-violet-400/30 to-purple-600/50 blur-md" />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/40 shadow-lg shadow-primary/20">
                <Image
                  src="public/images/profile2.JPEG"
                  alt="Sarah Morshed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name + location + description */}
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                <span className="neon-text">Sarah Morshed</span>
              </h1>
              <div className="mt-2 flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm">Halifax, Canada</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Security projects, lab write-ups, Oxford stories, and experience.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Here
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="href= https://github.com/Sarah172" target="_blank" rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-morshed-25816b65/" target="_blank" rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        {/* Security Focus interactive carousel */}
        <SecurityFocus />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-primary/40" />
      </div>
    </section>
  )
}
