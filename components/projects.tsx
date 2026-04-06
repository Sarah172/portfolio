import { Github, ExternalLink, Terminal, Network, Shield, Lock, Users } from "lucide-react"

const projects = [
  {
    title: "Metasploitable 2 Vulnerability Assessment & Exploitation",
    icon: Terminal,
    summary:
      "Performed network enumeration using Nmap, identified vulnerable services, and executed controlled exploits with Metasploit including Samba CVE-2007-2447 to gain remote shell access. Evaluated system privilege exposure and documented security hardening recommendations.",
    tags: ["Nmap", "Metasploit", "Samba", "CVE-2007-2447", "Linux"],
    github: "https://github.com/Sarah172/metasploitable2-vulnerability-assessment.git",
  },
  {
    title: "Wireshark Network Traffic Analysis & Protocol Investigation",
    icon: Network,
    summary:
      "Analyzed packet captures to diagnose TCP retransmissions, detect ARP spoofing indicators, investigate DNS anomalies, and reconstruct FTP sessions to recover authentication artifacts.",
    tags: ["Wireshark", "TCP/IP", "ARP", "DNS", "FTP"],
    github: "https://github.com/Sarah172/wireshark-network-traffic-analysis.git",
  },
  {
    title: "AWS S3 Security Hardening (End-to-End)",
    icon: Shield,
    summary:
      "Secured an AWS S3 environment for a production-like use case by implementing least-privilege IAM access, bucket policies, encryption enforcement, folder-level isolation, activity logging, monitoring, and real-time alerts for destructive actions. Validated access controls through CLI-based testing and blocked all public access.",
    tags: [
      "AWS S3",
      "IAM",
      "Bucket Policies",
      "CloudTrail",
      "CloudWatch",
      "SNS",
      "AWS CLI",
      "Encryption",
    ],
    github: "https://github.com/Sarah172/aws-s3-zero-trust-security.git",
  },
  {
    title: "AWS IAM Policy for S3 Access Control",
    icon: Lock,
    summary:
      "Built and tested a least-privilege IAM policy for Amazon S3 that restricted access to object downloads only. Scoped permissions precisely to S3 resources, attached the policy to an IAM user, and validated allowed and denied actions through AWS CLI testing to confirm secure access behavior.",
    tags: [
      "AWS IAM",
      "Amazon S3",
      "Least Privilege",
      "IAM Policies",
      "AWS CLI",
      "Access Control",
      "Cloud Security",
    ],
    github: "https://github.com/Sarah172/aws-iam-s3-permissions.git",
  },
  {
  title: "Active Directory Access Control Using Group Policy",
  icon: Users,
  summary:
    "Implemented role-based access control in a Windows Server environment by using Active Directory and Group Policy to restrict Remote Desktop (RDP) access for specific user groups. Configured domain infrastructure in Azure, automated user and group creation with PowerShell, and validated access restrictions through real login testing.",
  tags: [
    "Active Directory",
    "Group Policy",
    "Windows Server",
    "Azure",
    "RBAC",
    "PowerShell",
    "RDP",
    "Access Control",
  ],
  github: "https://github.com/Sarah172/active-directory-gpo-access-control.git",
},
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 dot-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.06)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-purple-500/10" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Cybersecurity Projects
          </span>
          <div className="h-px flex-1 bg-purple-500/10" />
        </div>

        <div className="mt-10 space-y-5">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="group glass rounded-xl p-6 transition-all hover:border-purple-400/25 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-foreground text-lg leading-snug">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        className="shrink-0 flex items-center gap-1.5 rounded-lg border border-purple-500/10 bg-purple-500/5 px-3 py-1.5 text-xs font-medium text-purple-300 transition-colors hover:border-purple-400/30 hover:text-purple-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        View
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
