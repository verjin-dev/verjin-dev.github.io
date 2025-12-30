import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-slate-900">
                Verjin V
              </span>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Gen-AI Engineer · Full-Stack Developer
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <FooterIcon
              href="https://github.com/verjin-dev"
              label="GitHub"
            >
              <Github size={18} />
            </FooterIcon>

            <FooterIcon
              href="https://linkedin.com/in/verjin-vargheese"
              label="LinkedIn"
            >
              <Linkedin size={18} />
            </FooterIcon>

            <FooterIcon
              href="mailto:verjinvargheese@gmail.com"
              label="Email"
            >
              <Mail size={18} />
            </FooterIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------------- Icon Button ---------------- */

function FooterIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full
                 border border-slate-200
                 flex items-center justify-center
                 text-slate-600
                 hover:bg-slate-100 hover:text-slate-900
                 transition"
    >
      {children}
    </a>
  )
}
