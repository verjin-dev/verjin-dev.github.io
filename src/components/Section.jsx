/* ---------------- Section shell + editorial header ----------------
   Every homepage section below the hero shares this frame:
   a hairline rule, a mono "§ 0N — LABEL" index, a large heading and
   an optional intro, laid out on the same 12-column grid as the hero.
   Keep this a server component: importing it from a "use client" file
   trips a Next.js dev-server HMR bug. */

export default function Section({ id, index, label, title, intro, tone = "paper", children }) {
  return (
    <section
      id={id}
      className={`${tone === "panel" ? "bg-panel" : "bg-paper"} text-ink border-t border-rule
                  scroll-mt-16 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-28">
        <header className="grid lg:grid-cols-12 gap-x-10 gap-y-5 pb-10 md:pb-14 mb-10 md:mb-14 border-b border-rule">
          <p className="lg:col-span-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span className="text-accent">§ {index}</span>
            <span aria-hidden className="mx-2 text-rule">—</span>
            {label}
          </p>
          <div className="lg:col-span-8">
            <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em]">
              {title}
            </h2>
            {intro && (
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
                {intro}
              </p>
            )}
          </div>
        </header>

        {children}
      </div>
    </section>
  )
}
