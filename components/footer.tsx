import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-mono text-foreground">Sarah Morshed</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {"Built with Next.js & Tailwind CSS. \u00A9 "}
          {new Date().getFullYear()}
          {" All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
