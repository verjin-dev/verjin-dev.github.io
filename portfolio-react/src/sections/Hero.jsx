import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px]
                        bg-slate-200/60 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28
                      grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold
                       text-slate-900 tracking-tight leading-tight"
          >
            Hello, I'm <br />
            <span className="font-bold">Verjin V</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-slate-600 max-w-xl"
          >
            Gen-AI Engineer crafting intelligent systems and scalable
            applications with strong engineering foundations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-slate-500 max-w-xl"
          >
            Specializing in LLM systems, RAG pipelines, cloud AI,
            and production-ready full-stack solutions.
          </motion.p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2
                         px-6 py-3 rounded-lg
                         bg-slate-900 text-white
                         hover:bg-slate-800 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2
                         px-6 py-3 rounded-lg
                         border border-slate-300
                         hover:bg-slate-50 transition"
            >
              View My Work
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-4">
            <SocialIcon href="https://github.com/verjin-dev">
              <Github />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/verjin-vargheese">
              <Linkedin />
            </SocialIcon>
            <SocialIcon href="mailto:verjinvargheese@gmail.com">
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
          className="relative flex justify-center"
        >
          {/* Profile image */}
          <div className="relative">
            <div
              className="w-[360px] h-[360px] rounded-full
                         overflow-hidden border-4 border-white
                         shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]"
            >
              <img
                src="/profile.webp"
                alt="Verjin V"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Availability badge */}
            <div
              className="absolute bottom-4 right-0
                         bg-white rounded-full px-4 py-2
                         flex items-center gap-2
                         shadow-md text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for hire
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2
                      text-sm text-slate-400 flex flex-col items-center">
        <span>Scroll to explore</span>
        <span className="mt-1">↓</span>
      </div>
    </section>
  )
}

/* ---------------- Reusable components ---------------- */

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full
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

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-slate-900">
        {value}
      </div>
      <div className="text-sm text-slate-500">
        {label}
      </div>
    </div>
  )
}
