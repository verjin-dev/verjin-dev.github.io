"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Code2, Globe2, ShieldAlert } from "lucide-react"

const skillCategories = [
  {
    id: "ai",
    label: "Gen-AI & Data Science",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Generative AI", level: "Expert" },
      { name: "LLM Orchestration", level: "Expert" },
      { name: "RAG Systems", level: "Expert" },
      { name: "LangChain & LangGraph", level: "Expert" },
      { name: "Microsoft Autogen", level: "Advanced" },
      { name: "Azure OpenAI Services", level: "Expert" },
      { name: "Hugging Face Transformers", level: "Advanced" },
      { name: "VectorDBs (Weaviate, Pinecone, Qdrant)", level: "Expert" },
      { name: "FastAPI Pipelines", level: "Expert" },
      { name: "Llama.cpp", level: "Advanced" },
      { name: "scikit-learn & pandas", level: "Advanced" },
      { name: "TensorFlow & PyTorch", level: "Intermediate" }
    ]
  },
  {
    id: "backend",
    label: "Languages & Backend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript / Node.js", level: "Advanced" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Express.js & Fastify", level: "Advanced" },
      { name: "PostgreSQL & MySQL", level: "Advanced" },
      { name: "MongoDB & Redis", level: "Advanced" },
      { name: "Bun & Deno", level: "Intermediate" },
      { name: "SQLite", level: "Advanced" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: Globe2,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Flutter & Dart", level: "Advanced" },
      { name: "Framer Motion", level: "Expert" },
      { name: "Three.js Canvas", level: "Intermediate" },
      { name: "Chakra UI / Material UI", level: "Advanced" },
      { name: "Vanilla HTML5 / CSS3", level: "Expert" }
    ]
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    icon: ShieldAlert,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Amazon Web Services (AWS)", level: "Advanced" },
      { name: "Microsoft Azure", level: "Expert" },
      { name: "Google Cloud (GCP)", level: "Intermediate" },
      { name: "Docker Containers", level: "Advanced" },
      { name: "Kubernetes Orchestration", level: "Intermediate" },
      { name: "Terraform IaC", level: "Intermediate" },
      { name: "GitHub Actions CI/CD", level: "Advanced" },
      { name: "Git / GitHub / GitLab", level: "Expert" },
      { name: "Firebase & Supabase", level: "Advanced" },
      { name: "Vercel & Netlify", level: "Expert" },
      { name: "pytest & Jest testing", level: "Advanced" }
    ]
  }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("ai")
  const currentCategory = skillCategories.find((cat) => cat.id === activeTab)

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 py-28 relative overflow-hidden transition-colors duration-300">
      {/* Glow asset background */}
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50/60 dark:bg-violet-950/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider">
            Expertise Catalog
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Core Technical Skills
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A comprehensive overview of my capabilities across modern development stacks, intelligent agentic AI integrations, and DevOps pipelines.
          </p>
        </div>

        {/* Dynamic Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 border-b border-slate-200 dark:border-slate-800/80 pb-6 max-w-4xl mx-auto">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 select-none ${
                  isActive 
                    ? "text-slate-900 dark:text-white" 
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-white/40 dark:bg-slate-950/10"
                }`}
              >
                {/* sliding pill selection indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} className={isActive ? "text-violet-500" : ""} />
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skills Filtering Display grid */}
        <div className="max-w-4xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentCategory.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="group rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/30 p-5 shadow-sm hover:shadow-md hover:border-slate-350 dark:hover:border-slate-700 transition duration-300 relative overflow-hidden"
                >
                  {/* Hover visual accent indicator on bottom-left border */}
                  <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${currentCategory.color} transition-all duration-300`} />

                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {skill.name}
                    </h3>
                    
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      skill.level === "Expert" 
                        ? "bg-violet-100/60 dark:bg-violet-950/30 text-violet-700 dark:text-violet-450"
                        : skill.level === "Advanced"
                        ? "bg-blue-100/60 dark:bg-blue-950/30 text-blue-700 dark:text-blue-450"
                        : "bg-slate-100/60 dark:bg-slate-850/40 text-slate-600 dark:text-slate-400"
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
