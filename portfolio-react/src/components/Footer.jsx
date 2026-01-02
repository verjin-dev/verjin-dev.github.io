import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  FileText,
} from "lucide-react"

const links = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const focus = [
  "Generative AI",
  "LLM Systems",
  "RAG Pipelines",
  "Cloud AI (Azure)",
  "Full-Stack Engineering",
]

export default function Footer() {
  return (
    <footer
      className="bg-white dark:bg-slate-950
                 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* TOP GRID */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-4"
        >

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold
                           text-slate-900 dark:text-white">
              Verjin V
            </h3>

            <p className="mt-3 max-w-md
                          text-slate-600 dark:text-slate-400">
              Gen-AI Engineer focused on building production-ready
              intelligent systems, scalable architectures, and
              enterprise AI solutions.
            </p>

            {/* CTA + Resume */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2
                           px-5 py-3 rounded-lg
                           bg-slate-900 dark:bg-white
                           text-white dark:text-slate-900
                           hover:bg-slate-800 dark:hover:bg-slate-200
                           transition"
              >
                Let’s work together
                <ArrowUpRight size={16} aria-hidden />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2
                           px-5 py-3 rounded-lg
                           border border-slate-300 dark:border-slate-700
                           text-slate-700 dark:text-slate-300
                           hover:bg-slate-100 dark:hover:bg-slate-800
                           transition"
              >
                <FileText size={16} aria-hidden />
                Resume
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-medium
                           text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm
                               text-slate-600 dark:text-slate-400
                               hover:text-slate-900 dark:hover:text-white
                               transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FOCUS AREAS */}
          <div>
            <h4 className="font-medium
                           text-slate-900 dark:text-white">
              Focus Areas
            </h4>
            <ul className="mt-4 space-y-2">
              {focus.map(item => (
                <li
                  key={item}
                  className="text-sm
                             text-slate-600 dark:text-slate-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div
          className="my-12
                     border-t border-slate-200 dark:border-slate-800"
        />

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col md:flex-row
                     items-center justify-between gap-6"
        >

          {/* SIGNATURE */}
          <p className="text-sm
                        text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Verjin V —
            Built with React & Tailwind CSS
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <Social href="https://github.com/verjin-dev" label="GitHub">
              <Github />
            </Social>
            <Social
              href="https://linkedin.com/in/verjin-vargheese"
              label="LinkedIn"
            >
              <Linkedin />
            </Social>
            <Social
              href="mailto:verjinvargheese@gmail.com"
              label="Email"
            >
              <Mail />
            </Social>
            <Social
              href="tel:+919080181819"
              label="Phone"
            >
              <Phone />
            </Social>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

/* ---------------- Social Button ---------------- */

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-lg
                 flex items-center justify-center
                 border border-slate-200 dark:border-slate-700
                 text-slate-600 dark:text-slate-300
                 hover:bg-slate-100 dark:hover:bg-slate-800
                 hover:text-slate-900 dark:hover:text-white
                 transition"
    >
      {children}
    </a>
  )
}
