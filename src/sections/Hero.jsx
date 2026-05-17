"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, Play, Terminal as TerminalIcon } from "lucide-react"

// Typing roles
const roles = [
  "Gen-AI Systems Engineer",
  "LLM Integration Expert",
  "Full-Stack Web Innovator",
  "Azure Cloud Specialist"
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    let timer
    const currentFullText = roles[roleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    if (!isDeleting && displayText === currentFullText) {
      // Hold state before deleting
      timer = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center bg-slate-50 dark:bg-slate-950 bg-grid-pattern overflow-hidden pt-12"
    >
      {/* Soft floating background neon colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-16 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: Texts & Actions (Grid 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50/60 dark:bg-violet-950/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span>Available for Hire</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Hello, I&apos;m <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 dark:from-violet-400 dark:via-purple-400 dark:to-cyan-400">
                Verjin Vargheese
              </span>
            </motion.h1>

            {/* Typewriter role sub-heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-10 text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-350 flex items-center"
            >
              <span className="text-violet-600 dark:text-violet-400">#</span>
              <span className="ml-1.5">{displayText}</span>
              <span className="w-1 h-6 bg-slate-500 dark:bg-slate-400 ml-1.5 animate-pulse" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-650 dark:text-slate-300 text-lg max-w-xl leading-relaxed"
          >
            Gen-AI Engineer focused on building and optimizing production-grade intelligent systems, scalable retrieval-augmented generation (RAG) models, and resilient full-stack applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-medium transition-all shadow-md hover:shadow-lg dark:shadow-slate-950/20"
            >
              <span>View Creations</span>
            </a>

            <a
              href="mailto:verjinvargheese@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 font-medium transition-all"
            >
              <Mail size={18} />
              <span>Reach Out</span>
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <SocialLink href="https://github.com/verjin-dev">
              <Github size={20} />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/verjin-vargheese">
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href="mailto:verjinvargheese@gmail.com">
              <Mail size={20} />
            </SocialLink>
          </motion.div>

          {/* Mini Counter Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-6 pt-8 max-w-md border-t border-slate-200 dark:border-slate-900"
          >
            <StatCard value="20+" label="AI Models Built" />
            <StatCard value="2+" label="Years Experience" />
            <StatCard value="10+" label="Tech Certifications" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Mock Developer Terminal (Grid 5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md"
          >
            {/* Background glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-cyan-500 rounded-3xl blur-2xl opacity-15 dark:opacity-20 pointer-events-none" />

            {/* Code Terminal */}
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Reusable Sub-Components ---------------- */

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-400 dark:hover:text-violet-400 hover:shadow-sm transition-all"
    >
      {children}
    </a>
  )
}

function StatCard({ value, label }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
        {value}
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-450 mt-1 uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  )
}

// Live typing mock agent terminal
function Terminal() {
  const [logs, setLogs] = useState([])

  const steps = [
    { text: "pip install langgraph langchain-openai weaviate", color: "text-slate-300", delay: 1000 },
    { text: "python run_rag_agent.py", color: "text-violet-400", delay: 1500 },
    { text: "[sys] Initializing LLM System ... [OK]", color: "text-slate-400", delay: 800 },
    { text: "[sys] Connecting to Azure AI Search Cluster ... [OK]", color: "text-slate-400", delay: 1000 },
    { text: "[sys] Loading knowledge database embeddings ... [OK]", color: "text-slate-400", delay: 1200 },
    { text: "[agent] System ready! Injecting prompt: 'Design architecture'", color: "text-green-400", delay: 1200 },
    { text: "[agent] Querying vector DB: 'Design architecture' ... Found 4 chunks", color: "text-cyan-400", delay: 1000 },
    { text: "[agent] LLM: Generating optimal system topology graph ... Done!", color: "text-cyan-400", delay: 1500 },
    { text: "Success! Token Usage: 345 Prompt, 512 Completion", color: "text-emerald-500 font-semibold", delay: 1000 },
  ]

  useEffect(() => {
    let timeoutId

    let currentStep = 0
    const executeStep = () => {
      if (currentStep < steps.length) {
        setLogs((prev) => {
          if (prev.length >= steps.length) return prev
          return [...prev, steps[currentStep]]
        })
        const currentDelay = steps[currentStep].delay
        currentStep++
        timeoutId = setTimeout(executeStep, currentDelay)
      } else {
        // Reset terminal loop after 5s
        timeoutId = setTimeout(() => {
          setLogs([])
          currentStep = 0
          executeStep()
        }, 5000)
      }
    }

    executeStep()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-left h-[330px] flex flex-col">
      {/* Header bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <TerminalIcon size={12} />
          <span className="text-[10px] uppercase font-semibold tracking-wider">python3 · RAG_agent</span>
        </div>
        <div className="w-4 h-4" /> {/* spacer */}
      </div>

      {/* Code / Logs area */}
      <div className="p-5 flex-1 overflow-y-auto space-y-2 bg-slate-950/80">
        <div className="text-slate-500"># Verjin Dev RAG chatbot environment</div>
        
        {logs.map((log, idx) => {
          if (!log) return null
          return (
            <div key={idx} className={`${log.color || "text-slate-300"} leading-relaxed`}>
              {(log.text?.startsWith("pip") || log.text?.startsWith("python")) ? (
                <span className="text-violet-500 mr-1.5">$</span>
              ) : null}
              {log.text}
            </div>
          )
        })}

        <div className="flex items-center gap-1 text-slate-500">
          <span>$</span>
          <span className="w-1.5 h-3.5 bg-slate-400 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

