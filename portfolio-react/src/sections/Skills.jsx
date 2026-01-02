import { motion } from "framer-motion"
import {
  Code,
  Globe,
  Cloud,
  Database,
  Settings,
  Beaker,
} from "lucide-react"

const skills = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["JavaScript", "Python", "Java", "SQL", "Dart", "HTML", "CSS"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Flutter",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    items: [
      "Node.js",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: Beaker,
    items: [
      "OpenAI / Azure OpenAI",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Vector Databases",
      "Ollama",
      "Llama.cpp",
    ],
  },
  {
    title: "Machine Learning",
    icon: Beaker,
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Hugging Face",
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: [
      "Azure",
      "AWS",
      "GCP",
      "Firebase",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Redis",
      "Pinecone",
      "Weaviate",
      "Neo4j",
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: Settings,
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
      "Azure DevOps",
    ],
  },
  {
    title: "Testing & Quality",
    icon: Beaker,
    items: ["Jest", "Pytest", "Unit Testing", "Integration Testing"],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-slate-950 py-28"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold
                         text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A focused and production-ready skill set covering AI systems,
            full-stack development, and modern cloud infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border
                         border-slate-200 dark:border-slate-800
                         bg-white dark:bg-slate-900
                         p-6
                         shadow-sm hover:shadow-md
                         transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg
                             flex items-center justify-center
                             bg-slate-100 dark:bg-slate-800
                             text-slate-700 dark:text-slate-300"
                >
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="font-medium
                               text-slate-900 dark:text-white">
                  {title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map(item => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
