import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty(
          "--x",
          `${e.clientX - rect.left}px`
        )
        e.currentTarget.style.setProperty(
          "--y",
          `${e.clientY - rect.top}px`
        )
      }}
      className="
        relative min-h-screen overflow-hidden
        bg-white dark:bg-slate-950
        [--x:50%] [--y:50%]
      "
    >
      {/* CURSOR SPOTLIGHT */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[radial-gradient(600px_at_var(--x)_var(--y),rgba(99,102,241,0.18),transparent_70%)]
          dark:bg-[radial-gradient(600px_at_var(--x)_var(--y),rgba(56,189,248,0.16),transparent_70%)]
        "
      />

      {/* SOFT AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/3 right-1/4
                     w-[700px] h-[700px]
                     bg-gradient-to-tr
                     from-slate-200/60 via-slate-100/40 to-transparent
                     dark:from-slate-800/40 dark:via-slate-700/30
                     rounded-full blur-[140px]"
        />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-8 pt-28
                   grid md:grid-cols-2 gap-20 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold
                       text-slate-900 dark:text-white
                       tracking-tight leading-tight"
          >
            Hello, I&apos;m <br />
            <span className="font-bold">Verjin V</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg
                       text-slate-600 dark:text-slate-300
                       max-w-xl"
          >
            Gen-AI Engineer crafting intelligent systems and scalable
            applications with strong engineering foundations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4
                       text-slate-500 dark:text-slate-400
                       max-w-xl"
          >
            Specializing in LLM systems, RAG pipelines, cloud AI,
            and production-ready full-stack solutions.
          </motion.p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2
                         px-6 py-3 rounded-lg
                         bg-slate-900 text-white
                         hover:bg-slate-800
                         dark:bg-white dark:text-slate-900
                         dark:hover:bg-slate-200
                         transition"
            >
              <Download size={18} aria-hidden />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2
                         px-6 py-3 rounded-lg
                         border border-slate-300
                         text-slate-900
                         hover:bg-slate-50
                         dark:border-slate-700
                         dark:text-slate-100
                         dark:hover:bg-slate-800
                         transition"
            >
              View My Work
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-4">
            <SocialIcon href="https://github.com/verjin-dev" label="GitHub">
              <Github />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/in/verjin-vargheese"
              label="LinkedIn"
            >
              <Linkedin />
            </SocialIcon>
            <SocialIcon
              href="mailto:verjinvargheese@gmail.com"
              label="Email"
            >
              <Mail />
            </SocialIcon>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-10 max-w-md">
            <Stat value="50+" label="Projects" />
            <Stat value="2+" label="Years Exp" />
            <Stat value="100%" label="Client Satisfaction" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotateX: 4, rotateY: -4 }}
          style={{ perspective: 1000 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div
              className="w-[360px] h-[360px] rounded-full
                         overflow-hidden
                         border-4 border-white dark:border-slate-900
                         shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)]"
            >
              <img
                src="/profile.webp"
                alt="Verjin V"
                width="360"
                height="360"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Availability badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 right-0
                         bg-white dark:bg-slate-900
                         text-slate-900 dark:text-slate-100
                         rounded-full px-4 py-2
                         flex items-center gap-2
                         shadow-md text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Open to Work
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   text-sm
                   text-slate-400 dark:text-slate-500
                   flex flex-col items-center z-10"
      >
        <span>Scroll to explore</span>
        <span className="mt-1">↓</span>
      </motion.div>
    </section>
  )
}

/* ---------------- Reusable ---------------- */

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="w-12 h-12 rounded-full
                 border border-slate-200 dark:border-slate-700
                 flex items-center justify-center
                 text-slate-600 dark:text-slate-300
                 hover:bg-slate-100 dark:hover:bg-slate-800
                 hover:text-slate-900 dark:hover:text-white
                 transition"
    >
      {children}
    </a>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-semibold
                      text-slate-900 dark:text-white">
        {value}
      </div>
      <div className="text-sm
                      text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  )
}
