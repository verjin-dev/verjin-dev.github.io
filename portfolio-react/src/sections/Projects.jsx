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
      "A comprehensive system to manage church activities, member records, and event scheduling. with financial tracking. using Flutter for cross-platform accessibility.",
    tech: ["Flutter", "Flask", "PostgreSQL", "Tailwind", "REST API"],
    code: "",
    demo: "",
  },
  {
    title: "RS Communication Portfolio Website",
    image: "/projects/Project.webp",
    description:
      "Portfolio website for RS Communication showcasing services, projects, and client testimonials with a modern design.",
    tech: ["React", "Whatsapp API", "PostgreSQL", "Tailwind", "REST API"],
    code: "https://github.com/rs-communication/rs-communication",
    demo: "https://rs-communication.github.io/rs-communication/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600">
            Selected projects showcasing experience in AI systems,
            full-stack development, and scalable architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200
                         bg-white overflow-hidden
                         shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="h-48 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="font-medium text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full
                                 bg-slate-100 text-sm
                                 text-slate-700"
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
                                 border border-slate-300
                                 text-sm text-slate-700
                                 hover:bg-slate-100 transition"
                    >
                      <Github size={16} />
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
                                 bg-slate-900 text-white
                                 text-sm hover:bg-slate-800 transition"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
