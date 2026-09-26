import { ArrowUp, ArrowUpRight } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const focus = [
  "Generative AI",
  "LLM Systems",
  "RAG Pipelines",
  "Cloud AI (Azure)",
  "Full-Stack Engineering",
]

const channels = [
  { label: "GitHub", href: "https://github.com/verjin-dev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/verjin-vargheese" },
  { label: "Email", href: "mailto:verjinvargheese@gmail.com" },
  { label: "Phone", href: "tel:+919080181819" },
]

/* Always a dark band: ink-on-paper inverted in light mode, a raised panel in dark mode. */
export default function Footer() {
  return (
    <footer className="bg-ink text-paper dark:bg-panel dark:text-ink border-t border-rule transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 md:pt-20 pb-8">
        {/* Wordmark */}
        <a
          href="#hero"
          className="block font-display font-semibold leading-[0.85] tracking-[-0.05em]
                     text-[22vw] sm:text-[18vw] lg:text-[13rem]"
        >
          Verjin V.
        </a>

        <div className="mt-12 md:mt-16 pt-10 border-t border-paper/15 dark:border-rule
                        grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          <p className="col-span-2 md:col-span-1 max-w-xs text-[15px] leading-relaxed text-paper/65 dark:text-muted">
            Gen-AI Engineer focused on building production-ready intelligent systems,
            scalable architectures, and enterprise AI solutions.
          </p>

          <FooterColumn title="Index">
            {links.map(link => (
              <li key={link.label}>
                <a href={link.href} className="underline-offset-4 decoration-1 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Focus">
            {focus.map(item => (
              <li key={item}>{item}</li>
            ))}
          </FooterColumn>

          <FooterColumn title="Channels">
            {channels.map(c => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 underline-offset-4 decoration-1 hover:underline"
                >
                  {c.label}
                  <ArrowUpRight size={13} aria-hidden />
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/15 dark:border-rule
                        flex flex-wrap items-center justify-between gap-4
                        font-mono text-[11px] uppercase tracking-[0.14em] text-paper/65 dark:text-muted">
          <p>© {new Date().getFullYear()} Verjin V. All rights reserved.</p>
          <a href="#hero" className="inline-flex items-center gap-1.5 underline-offset-4 decoration-1 hover:underline">
            Back to top
            <ArrowUp size={13} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-paper/65 dark:text-muted">
        {title}
      </h3>
      <ul className="space-y-2.5 font-mono text-[13px] tracking-[0.04em]">
        {children}
      </ul>
    </div>
  )
}
