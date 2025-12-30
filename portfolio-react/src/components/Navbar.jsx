import { useEffect, useState } from "react"
import { Sun } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    )

    sections.forEach(section => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="font-medium text-slate-900">
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

          {/* Dark mode toggle (optional) */}
          <button
            onClick={() =>
              document.documentElement.classList.toggle("dark")
            }
            className="ml-4 w-9 h-9 rounded-lg
                       flex items-center justify-center
                       hover:bg-slate-100 transition"
          >
            <Sun size={18} />
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
      className="relative text-sm font-medium text-slate-600
                 hover:text-slate-900 transition"
    >
      {label}

      {/* Underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full
          bg-slate-900 transition-transform duration-300
          ${
            active
              ? "scale-x-100"
              : "scale-x-0"
          }
        `}
        style={{ transformOrigin: "left" }}
      />
    </a>
  )
}
