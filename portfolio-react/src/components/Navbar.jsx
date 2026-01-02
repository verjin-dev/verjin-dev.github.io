import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("hero")
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  /* ---------------- Dark mode ---------------- */
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
          if (entry.isIntersecting) setActive(entry.target.id)
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

  /* ---------------- Scroll progress ---------------- */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      setProgress((scrollTop / height) * 100)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60]
                   bg-slate-900 dark:bg-white"
        style={{ width: `${progress}%` }}
      />

      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 w-full z-50
                   bg-white/80 dark:bg-slate-900/80
                   backdrop-blur
                   border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 h-16
                        flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#hero"
            className="font-medium
                       text-slate-900 dark:text-white"
          >
            Verjin V
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {sections.map(item => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                label={item.label}
                active={active === item.id}
              />
            ))}

            <ThemeToggle dark={dark} onToggle={toggleDarkMode} />
          </nav>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 relative"
            aria-label="Open menu"
          >
            <span className={`line ${open && "open"}`} />
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* SLIDE MENU */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72
                    bg-white dark:bg-slate-900
                    border-l border-slate-200 dark:border-slate-800
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="font-medium text-slate-900 dark:text-white">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-4">
            {sections.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block text-base font-medium
                  ${
                    active === item.id
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <ThemeToggle dark={dark} onToggle={toggleDarkMode} mobile />
          </div>
        </div>
      </aside>

      {/* HAMBURGER CSS */}
      <style>{`
        .line {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 24px;
          height: 2px;
          background: currentColor;
          box-shadow: 0 8px, 0 -8px;
          transition: 0.3s;
        }
        .line.open {
          background: transparent;
          box-shadow: none;
        }
        .line.open::before,
        .line.open::after {
          content: "";
          position: absolute;
          width: 24px;
          height: 2px;
          background: currentColor;
          top: 0;
          left: 0;
        }
        .line.open::before {
          transform: rotate(45deg);
        }
        .line.open::after {
          transform: rotate(-45deg);
        }
      `}</style>
    </>
  )
}

/* ---------------- Components ---------------- */

function NavItem({ href, label, active }) {
  return (
    <a
      href={href}
      className="relative text-sm font-medium
                 text-slate-600 dark:text-slate-300
                 hover:text-slate-900 dark:hover:text-white"
    >
      {label}
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

function ThemeToggle({ dark, onToggle, mobile }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2
                  ${mobile ? "text-sm" : "w-9 h-9 justify-center"}
                  rounded-lg
                  hover:bg-slate-100 dark:hover:bg-slate-800`}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
      {mobile && <span>{dark ? "Light Mode" : "Dark Mode"}</span>}
    </button>
  )
}
