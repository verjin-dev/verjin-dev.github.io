"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
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

  /* ---------------- Dark mode sync ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const next = !dark
    setDark(next)

    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
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

    sections.forEach(section => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
                 bg-white dark:bg-slate-900
                 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-8 h-16
                      flex items-center justify-between">
        {/* Logo */}
        <div className="font-medium text-slate-900 dark:text-white">
          Verjin V
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {sections.map(item => (
            <NavItem
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              active={active === item.id}
            />
          ))}

          {/* Dark mode toggle */}
          <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            onClick={toggleDarkMode}
            className="ml-4 w-9 h-9 rounded-lg
                       flex items-center justify-center
                       hover:bg-slate-100 dark:hover:bg-slate-800
                       transition"
          >
            {dark ? (
              <Sun size={18} aria-hidden />
            ) : (
              <Moon size={18} aria-hidden />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

/* ---------------- Nav Item ---------------- */

function NavItem({ href, label, active }) {
  return (
    <a
      href={href}
      className="relative text-sm font-medium
                 text-slate-600 dark:text-slate-300
                 hover:text-slate-900 dark:hover:text-white
                 transition"
    >
      {label}

      {/* Active underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full
                    bg-slate-900 dark:bg-white
                    transition-transform duration-300
                    ${active ? "scale-x-100" : "scale-x-0"}`}
        style={{ transformOrigin: "left" }}
      />
    </a>
  )
}
