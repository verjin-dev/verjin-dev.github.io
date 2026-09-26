"use client"

import { motion, MotionConfig } from "framer-motion"
import { ArrowRight } from "lucide-react"

const channels = [
  { label: "GitHub", href: "https://github.com/verjin-dev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/verjin-vargheese" },
  { label: "Email", href: "mailto:verjinvargheese@gmail.com" },
]

const stats = [
  { value: "20+", label: "AI models built" },
  { value: "2+", label: "Years experience" },
  { value: "10+", label: "Certifications" },
]

const stack = [
  "Python",
  "LangGraph",
  "LangChain",
  "Azure OpenAI",
  "Azure AI Search",
  "RAG",
  "Next.js",
  "FastAPI",
  "Prompt Engineering",
]

// Shared fade-up entrance, staggered by `delay`.
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="hero"
        className="relative flex flex-col min-h-[calc(100svh-4rem)] bg-paper text-ink
                   selection:bg-accent selection:text-paper transition-colors duration-300"
      >
        <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-8">
          {/* ---------------- Statement + Figure ---------------- */}
          <div className="flex-1 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center py-10 lg:py-12">
            {/* LEFT: statement, CTAs, channels */}
            <div className="lg:col-span-7">
              <motion.p
                {...rise(0)}
                className="flex items-start gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-muted"
              >
                <span className="relative flex h-2 w-2 mt-[3px] shrink-0">
                  <span className="absolute inset-0 bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative h-2 w-2 bg-emerald-600" />
                </span>
                <span>Available for work — Gen-AI Engineer, Thiruvananthapuram IN</span>
              </motion.p>

              <motion.h1
                {...rise(0.08)}
                className="mt-6 font-display font-semibold text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem]
                           leading-[1.02] tracking-[-0.04em] text-ink"
              >
                I build AI systems
                <br />
                that <span className="text-accent">ship</span>
                <br />
                to production.
              </motion.h1>

              <motion.p
                {...rise(0.16)}
                className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted"
              >
                Gen-AI Engineer designing retrieval-augmented generation pipelines,
                LLM agents and resilient full-stack applications on Azure.
              </motion.p>

              <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-5 py-3.5 bg-ink text-paper
                             font-mono text-xs uppercase tracking-[0.14em]
                             hover:bg-accent transition-colors duration-150"
                >
                  View projects
                  <ArrowRight
                    size={14}
                    aria-hidden
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-3.5 border border-ink text-ink
                             font-mono text-xs uppercase tracking-[0.14em]
                             hover:bg-ink hover:text-paper transition-colors duration-150"
                >
                  Get in touch
                </a>
              </motion.div>

              <motion.div
                {...rise(0.32)}
                className="mt-10 pt-4 border-t border-rule flex flex-wrap items-center gap-x-4 gap-y-2
                           font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
              >
                <span className="font-semibold text-ink">Channels //</span>
                {channels.map((c, i) => (
                  <span key={c.label} className="flex items-center gap-4">
                    {i > 0 && <span aria-hidden className="text-rule">/</span>}
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {c.label}
                    </a>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: portrait plate + "Now" card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end pb-8"
            >
              <figure className="relative w-full max-w-[380px]">
                <div className="border border-rule bg-panel p-2">
                  <figcaption className="flex items-center justify-between px-1.5 pb-2 mb-2 border-b border-rule
                                         font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    <span>Fig. 01 — Verjin V.</span>
                    <span>Portrait</span>
                  </figcaption>

                  <div className="relative aspect-[4/5] overflow-hidden border border-rule">
                    <img
                      src="/profile.webp"
                      alt="Portrait of Verjin Vargheese"
                      width={720}
                      height={720}
                      className="h-full w-full object-cover object-[50%_30%]"
                    />
                    <Reticles />
                  </div>

                  {/* Right-aligned: the Now card overlaps the left of this row */}
                  <p className="px-1.5 pt-2 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    8.5241° N, 76.9366° E
                  </p>
                </div>

                {/* Now card */}
                <div className="absolute -bottom-8 left-3 sm:-left-8 max-w-[260px] border border-ink bg-paper p-4">
                  <div className="flex items-center justify-between gap-6 pb-1.5 mb-2 border-b border-rule
                                  font-mono text-[10px] uppercase tracking-[0.14em]">
                    <span className="flex items-center gap-1.5 font-semibold text-accent">
                      <span className="h-1.5 w-1.5 bg-accent" />
                      Now
                    </span>
                    <span className="text-muted">Active focus</span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-ink">
                    Building agentic RAG with LangGraph + Azure AI Search
                  </p>
                </div>
              </figure>
            </motion.div>
          </div>

          {/* ---------------- Stats ---------------- */}
          <ul className="grid grid-cols-3 border-t border-rule">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className="bg-panel px-3 py-5 sm:p-6 border-r border-rule last:border-r-0"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display font-semibold text-3xl sm:text-4xl tracking-[-0.03em] text-ink">
                    {s.value}
                  </span>
                  <span aria-hidden className="hidden sm:inline font-mono text-[10px] font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.06em] sm:tracking-[0.12em] text-muted">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Stack marquee ---------------- */}
        <div className="border-t border-rule bg-panel overflow-hidden select-none">
          <p className="sr-only">Stack: {stack.join(", ")}</p>
          <div aria-hidden className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map(copy => (
              <ul
                key={copy}
                className="flex items-center py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink"
              >
                {stack.map(item => (
                  <li key={item} className="flex items-center">
                    <span className="px-5">{item}</span>
                    <span className="text-accent">·</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}

/* ---------------- Corner reticles on the portrait ---------------- */

function Reticles() {
  // The photo is light in both themes, so the marks stay dark.
  const base = "absolute w-2.5 h-2.5 border-black/50"
  return (
    <>
      <span className={`${base} top-2 left-2 border-t border-l`} />
      <span className={`${base} top-2 right-2 border-t border-r`} />
      <span className={`${base} bottom-2 left-2 border-b border-l`} />
      <span className={`${base} bottom-2 right-2 border-b border-r`} />
    </>
  )
}
