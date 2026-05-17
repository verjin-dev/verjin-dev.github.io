"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Car Parking Space Detection",
    image: "/projects/Project.webp",
    description: "Real-time parking space availability detection using YOLO and OpenCV, designed for smart city and automation use cases.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    code: "https://github.com/verjin-dev/car-parking-space-detection",
    demo: ""
  },
  {
    title: "AI Resume Analyzer",
    image: "/projects/Project.webp",
    description: "Generative AI system that evaluates resumes and provides structured insights using LLMs, NLP, and FastAPI.",
    tech: ["Python", "LLM", "Azure OpenAI", "FastAPI"],
    code: "https://github.com/verjin-dev/ai-resume-analyzer",
    demo: ""
  },
  {
    title: "RAG-Based Knowledge Chatbot",
    image: "/projects/Project.webp",
    description: "Enterprise-grade Retrieval-Augmented Generation chatbot enabling accurate document-based query answering.",
    tech: ["LLMs", "RAG Pipeline", "Weaviate", "Azure AI"],
    code: "https://github.com/verjin-dev/rag-chatbot",
    demo: ""
  },
  {
    title: "Bike Service Application",
    image: "/projects/Project.webp",
    description: "Service management platform for bike service centers with booking, tracking, and administrative workflows.",
    tech: ["Node.js", "Express", "MongoDB", "REST APIs"],
    code: "https://github.com/verjin-dev/bike-service-application",
    demo: ""
  },
  {
    title: "RS Communication Portfolio",
    image: "/projects/Project.webp",
    description: "Highly polished Next.js portfolio website for RS Communication showcasing services, WhatsApp booking systems, and testimonials.",
    tech: ["React.js", "Tailwind CSS", "WhatsApp API", "PostgreSQL"],
    code: "https://github.com/rs-communication/rs-communication.git",
    demo: "https://rs-communication.github.io/rs-communication/"
  },
  {
    title: "Student Management Portal",
    image: "/projects/Project.webp",
    description: "Full-stack web portal for managing student records, attendance tracking, and grading charts efficiently.",
    tech: ["React.js", "Flask API", "SQLite", "Tailwind CSS"],
    code: "https://github.com/verjin-dev/student-management-system",
    demo: ""
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-900 py-28 relative overflow-hidden transition-colors duration-300">
      
      {/* Background neon glows */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3.5 py-1.5 rounded-full border border-purple-200 dark:border-purple-800/60 bg-violet-50/60 dark:bg-violet-950/20 text-purple-650 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Featured Creations
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Personal Projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A hand-picked selection of systems illustrating my competencies in full-stack architecture, machine learning model fine-tuning, and LLM orchestration.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950/40 backdrop-blur shadow-sm hover:shadow-[0_15px_35px_rgba(139,92,246,0.06)] dark:hover:shadow-[0_15px_35px_rgba(139,92,246,0.12)] hover:border-violet-500/40 dark:hover:border-violet-400/40 transition duration-300 flex flex-col h-full overflow-hidden"
            >
              
              {/* Project Card Image Overlay Frame */}
              <div className="h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                {/* Neon tint layer */}
                <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-[10px] font-semibold text-slate-650 dark:text-slate-350 border border-slate-200/40 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions row */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-850 flex gap-3">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-850 text-xs font-semibold text-slate-650 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-850 hover:text-slate-900 dark:hover:text-white transition"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs font-semibold shadow-sm transition"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
