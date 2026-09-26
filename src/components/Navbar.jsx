"use client"

import { useEffect, useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"

const sections = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("hero")
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  /* ---------------- Dark mode sync ---------------- */
  // The inline script in layout.jsx applies the saved theme before paint.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleDarkMode = () => {
    const next = !dark
    setDark(next)

    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
  }

  /* ---------------- Scroll spy ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    ;["hero", ...sections.map(s => s.id)].forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper border-b border-rule transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#hero"
          className="font-display text-xl font-medium tracking-tight text-ink"
        >
          Verjin V.
        </a>

        <div className="flex items-center gap-6 xl:gap-8">
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {sections.map(item => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                label={item.label}
                active={active === item.id}
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <IconButton
              label={dark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDarkMode}
            >
              {dark ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
            </IconButton>

            {/* Mobile menu toggle */}
            <IconButton
              label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(o => !o)}
              className="lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-rule bg-paper"
        >
          <ul className="max-w-7xl mx-auto px-4 sm:px-8 py-2">
            {sections.map((item, i) => (
              <li key={item.id} className="border-b border-rule last:border-b-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors
                              ${active === item.id ? "text-accent" : "text-ink hover:text-accent"}`}
                >
                  {item.label}
                  <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

/* ---------------- Nav Item ---------------- */

function NavItem({ href, label, active }) {
  return (
    <a
      href={href}
      aria-current={active ? "true" : undefined}
      className={`relative py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-150
                  ${active ? "text-accent" : "text-muted hover:text-ink"}`}
    >
      {label}

      {/* Active underline */}
      <span
        className={`absolute left-0 -bottom-0.5 h-px w-full bg-accent
                    transition-transform duration-300 origin-left
                    ${active ? "scale-x-100" : "scale-x-0"}`}
      />
    </a>
  )
}

/* ---------------- Icon Button ---------------- */

function IconButton({ label, className = "", children, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`w-9 h-9 flex items-center justify-center
                  border border-rule bg-panel text-ink
                  hover:border-ink transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
