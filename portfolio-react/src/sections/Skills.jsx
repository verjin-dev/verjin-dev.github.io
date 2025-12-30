import { title } from "framer-motion/client"
import {
  Code,
  Settings,
  Globe,
  Database,
  Cloud,
  Beaker,
} from "lucide-react"

const skills = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["JavaScript", "Java", "SQL", "Python", "HTML", "CSS", "Dart"],
  },
  {
    title: "Generative AI Tools",
    icon: Beaker,
    items: [
      "OpenAI GPT",
      "Azure OpenAI",
      "GPT-4all",
      "Gemini AI",
      "Hugging Face Transformers",
      "LangChain",
      "langgraph",
      "Ollama",
      "LLM",
      "RAG",
      "Vector Databases",
      "Llama.cpp",
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "Firebase", "Heroku", "render.com"],
  },
  {
    title: "Gen AI & Machine Learning",
    icon: Beaker,
    items: [
      "OpenAI GPT",
      "Hugging Face Transformers",
      "LangChain",
      "langgraph",
      "Llama.cpp",
      "FastAPI",
      "scikit-learn",
      "pandas",
      "NumPy",
      "TensorFlow",
      "PyTorch",
      "Azure AI Services",
      "Azure Cognitive Search",
      "Azure Machine Learning",
      "kaggle",

    ],
  },
  {
    title: "Agent Frameworks",
    icon: Beaker,
    items: [
      "LangChain Agents",
      "Autogen",
      "Langgraph Agents",
      "Copilot Agents",
      "Copilot Studio",
    ],
  },
  {
    title: "frontend Development",
    icon: Globe,
    items: ["React.js", "Next.js", "Tailwind CSS", "Chakra UI", "Framer Motion", "Three.js", "flutter"],
  },
  {
    title: "Version Control",
    icon: Settings,
    items: ["Git", "GitHub", "GitLab", "Bitbucket","Azure DevOps","GitHub Actions","CI/CD", "Jenkins", "Jira"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Firebase Firestore", "weaviate", "Pinecone", "neo4j", "quadrant" ],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    items: [
      "Docker",
      "Git",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Azure",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    title: "JavaScript Libraries & Frameworks",
    icon: Globe,
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Vanilla JS",
      "Bun",
      "Deno",
    ],
  },
  {
    title: "Web Frameworks",
    icon: Database,
    items: ["Express.js", "Fastify", "Flask", "Spring Boot", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend as a Service",
    icon: Cloud,
    items: ["Firebase", "Appwrite", "render.com", "Supabase", "Heroku", "netlify" , "Vercel"],
  },
  {
    title: "Testing",
    icon: Beaker,
    items: ["Jest", "pytest","python unittest"],
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
            Comprehensive expertise across modern development stacks with
            focus on scalable web applications and DevOps practices.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="rounded-2xl border
                         border-slate-200 dark:border-slate-800
                         bg-white dark:bg-slate-900
                         p-6
                         shadow-sm hover:shadow-md transition"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
