import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Car Parking Space Detection",
    image: "/projects/Project.webp",
    description:
      "Real-time parking space availability detection using YOLO and OpenCV, designed for smart city and automation use cases.",
    tech: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    code: "https://github.com/verjin-dev/car-parking-space-detection",
    demo: "",
  },
  {
    title: "Bike Service Application",
    image: "/projects/Project.webp",
    description:
      "Service management platform for bike service centers with booking, tracking, and administrative workflows.",
    tech: ["Node.js", "Python", "MongoDB", "REST API"],
    code: "https://github.com/verjin-dev/bike-service-application",
    demo: "",
  },
  {
    title: "RAG-Based Knowledge Chatbot",
    image: "/projects/Project.webp",
    description:
      "Enterprise-grade Retrieval-Augmented Generation chatbot enabling accurate document-based question answering.",
    tech: ["LLM", "RAG", "Vector DB", "Azure"],
    code: "https://github.com/verjin-dev/rag-chatbot",
    demo: "",
  },
  {
    title: "AI Resume Analyzer",
    image: "/projects/Project.webp",
    description:
      "Generative AI system that evaluates resumes and provides structured insights using LLMs and NLP techniques.",
    tech: ["Python", "LLM", "Azure AI", "FastAPI"],
    code: "https://github.com/verjin-dev/ai-resume-analyzer",
    demo: "",
  },
  {
    title: "Student Management Portal",
    image: "/projects/Project.webp",
    description:
      "Full-stack web portal for managing student records, attendance, and academic data efficiently.",
    tech: ["React", "Flask", "SQLite", "Tailwind"],
    code: "https://github.com/verjin-dev/student-management-system",
    demo: "",
  },
  {
    title: "Church Management System",
    image: "/projects/Project.webp",
    description:
      "Comprehensive system to manage church activities, member records, events, and financial tracking using Flutter.",
    tech: ["Flutter", "Flask", "PostgreSQL", "REST API"],
    code: "",
    demo: "",
  },
  {
    title: "RS Communication Portfolio Website",
    image: "/projects/Project.webp",
    description:
      "Portfolio website for RS Communication showcasing services, projects, and client testimonials with a modern UI.",
    tech: ["React", "WhatsApp API", "PostgreSQL", "Tailwind"],
    code: "https://github.com/rs-communication/rs-communication.git",
    demo: "https://rs-communication.github.io/rs-communication/",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-slate-950 py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold
                         text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Selected work demonstrating expertise in AI systems,
            full-stack development, and scalable architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border
                         border-slate-200 dark:border-slate-800
                         bg-white dark:bg-slate-900
                         overflow-hidden
                         shadow-sm hover:shadow-md
                         transition"
            >
              {/* Image */}
              <div className="h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover
                             transition-transform duration-300
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="font-medium
                               text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed
                             text-slate-600 dark:text-slate-400"
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full
                                 bg-slate-100 dark:bg-slate-800
                                 text-sm
                                 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-4">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2
                                 px-4 py-2 rounded-lg
                                 border border-slate-300 dark:border-slate-700
                                 text-sm
                                 text-slate-700 dark:text-slate-300
                                 hover:bg-slate-100 dark:hover:bg-slate-800
                                 transition"
                    >
                      <Github size={16} aria-hidden />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2
                                 px-4 py-2 rounded-lg
                                 bg-slate-900 dark:bg-white
                                 text-white dark:text-slate-900
                                 text-sm
                                 hover:bg-slate-800 dark:hover:bg-slate-200
                                 transition"
                    >
                      <ExternalLink size={16} aria-hidden />
                      Demo
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
