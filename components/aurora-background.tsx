"use client"

import { useEffect, useRef } from "react"

export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create CSS-only floating particles (data-point style)
    const count = 30
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div")
      el.className = "particle"
      const size = Math.random() * 2 + 1.5
      el.style.width = `${size}px`
      el.style.height = `${size}px`
      el.style.left = `${Math.random() * 100}%`
      el.style.bottom = `-${Math.random() * 20}px`
      el.style.animationDuration = `${Math.random() * 12 + 10}s`
      el.style.animationDelay = `${Math.random() * 15}s`
      el.style.opacity = `${Math.random() * 0.4 + 0.1}`
      container.appendChild(el)
      particles.push(el)
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient blend: deep violet into midnight purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]" />

      {/* Aurora animation overlay */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Soft radial glows */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-[0.06] blur-3xl" />
      <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-[0.05] blur-3xl" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[radial-gradient(ellipse,var(--primary)_0%,transparent_70%)] opacity-[0.04] blur-3xl" />

      {/* Particles container */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
