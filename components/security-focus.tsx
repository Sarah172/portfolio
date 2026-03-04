"use client"

import { useState, useEffect, useCallback } from "react"

const focusItems = [
  {
    label: "Network Security",
    description:
      "Designing and auditing secure network architectures, firewall rules, and access controls to protect enterprise infrastructure.",
    section: "#skills",
  },
  {
    label: "Packet Analysis",
    description:
      "Deep-diving into network traffic with Wireshark to detect anomalies, reconstruct sessions, and investigate incidents.",
    section: "#projects",
  },
  {
    label: "Vulnerability Assessment",
    description:
      "Systematically scanning and evaluating systems with Nmap and Metasploit to identify and document security weaknesses.",
    section: "#projects",
  },
  {
    label: "Security Engineering",
    description:
      "Building resilient systems with defense-in-depth principles, from IAM policies to endpoint hardening.",
    section: "#experience",
  },
  {
    label: "Threat Detection",
    description:
      "Monitoring network traffic patterns and system logs to identify indicators of compromise and suspicious activity.",
    section: "#skills",
  },
]

export function SecurityFocus() {
  const [active, setActive] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % focusItems.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(advance, 3500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, advance])

  const handlePillClick = (index: number) => {
    setActive(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
      <p className="text-xs font-mono uppercase tracking-widest text-primary/60 mb-4">
        Security Focus
      </p>

      {/* Pill carousel */}
      <div className="flex flex-wrap gap-2 mb-5">
        {focusItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => handlePillClick(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === i
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Description + optional jump link */}
      <div className="min-h-[56px]">
        <p className="text-sm text-foreground/80 leading-relaxed transition-all duration-300">
          {focusItems[active].description}
        </p>
        <a
          href={focusItems[active].section}
          className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {"See related work \u2192"}
        </a>
      </div>
    </div>
  )
}
