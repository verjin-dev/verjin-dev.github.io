import { ArrowUpRight } from "lucide-react"
import Section from "@/components/Section"

// Gen-AI work first, to match the positioning in the hero.
const projects = [
  {
    title: "RAG-Based Knowledge Chatbot",
    description: "Enterprise-grade Retrieval-Augmented Generation chatbot enabling accurate document-based query answering.",
    tech: ["LLMs", "RAG Pipeline", "Weaviate", "Azure AI"],
    code: "https://github.com/verjin-dev/rag-chatbot",
    demo: ""
  },
  {
    title: "AI Resume Analyzer",
    description: "Generative AI system that evaluates resumes and provides structured insights using LLMs, NLP, and FastAPI.",
    tech: ["Python", "LLM", "Azure OpenAI", "FastAPI"],
    code: "https://github.com/verjin-dev/ai-resume-analyzer",
    demo: ""
  },
  {
    title: "Car Parking Space Detection",
    description: "Real-time parking space availability detection using YOLO and OpenCV, designed for smart city and automation use cases.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    code: "https://github.com/verjin-dev/car-parking-space-detection",
    demo: ""
  },
  {
    title: "RS Communication Portfolio",
    description: "Highly polished Next.js portfolio website for RS Communication showcasing services, WhatsApp booking systems, and testimonials.",
    tech: ["React.js", "Tailwind CSS", "WhatsApp API", "PostgreSQL"],
    code: "https://github.com/rs-communication/rs-communication.git",
    demo: "https://rs-communication.github.io/rs-communication/"
  },
  {
    title: "Bike Service Application",
    description: "Service management platform for bike service centers with booking, tracking, and administrative workflows.",
    tech: ["Node.js", "Express", "MongoDB", "REST APIs"],
    code: "https://github.com/verjin-dev/bike-service-application",
    demo: ""
  },
  {
    title: "Student Management Portal",
    description: "Full-stack web portal for managing student records, attendance tracking, and grading charts efficiently.",
    tech: ["React.js", "Flask API", "SQLite", "Tailwind CSS"],
    code: "https://github.com/verjin-dev/student-management-system",
    demo: ""
  }
]

export default function Projects() {
  return (
    <Section
      id="projects"
      index="05"
      label="Projects"
      title="Selected projects"
      intro="Systems that show my work across LLM orchestration, computer vision and full-stack architecture."
    >
      <ol className="border-t border-ink">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className="group grid grid-cols-[3rem_1fr] lg:grid-cols-12 gap-x-4 lg:gap-x-10 gap-y-4
                       py-7 md:py-9 border-b border-rule hover:bg-panel transition-colors"
          >
            <span className="lg:col-span-1 pt-2 lg:pl-3 font-mono text-[11px] tracking-[0.12em] text-accent">
              P-{String(i + 1).padStart(2, "0")}
            </span>

            <div className="lg:col-span-5">
              <h3 className="font-display font-medium text-2xl md:text-[28px] leading-tight tracking-[-0.02em] text-ink">
                {project.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map(tag => (
                  <li
                    key={tag}
                    className="px-1.5 py-0.5 border border-rule bg-paper font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <p className="col-start-2 lg:col-start-auto lg:col-span-4 pt-1 text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="col-start-2 lg:col-start-auto lg:col-span-2 lg:pr-3 flex lg:flex-col lg:items-end gap-x-5 gap-y-2 pt-1
                            font-mono text-xs uppercase tracking-[0.14em]">
              {project.code && <ProjectLink href={project.code} label="Code" title={project.title} />}
              {project.demo && <ProjectLink href={project.demo} label="Live" title={project.title} accent />}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function ProjectLink({ href, label, title, accent = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title} — ${label === "Code" ? "source code" : "live demo"}`}
      className={`inline-flex items-center gap-1 border-b border-transparent hover:border-current transition-colors
                  ${accent ? "text-accent" : "text-ink"}`}
    >
      {label}
      <ArrowUpRight size={14} aria-hidden />
    </a>
  )
}
