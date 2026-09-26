import Section from "@/components/Section"

const skillCategories = [
  {
    id: "ai",
    label: "Gen-AI & Data Science",
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

const levels = [
  { name: "Expert", score: 3 },
  { name: "Advanced", score: 2 },
  { name: "Intermediate", score: 1 },
]

const scoreOf = level => levels.find(l => l.name === level)?.score ?? 0

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      title="Capabilities"
      intro="My working stack across Generative AI, backend and frontend engineering, and the cloud infrastructure that runs it."
    >
      {/* Matrix: gap-px over a rule-coloured background draws the hairlines */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-rule border border-rule">
        {skillCategories.map((cat, i) => (
          <div key={cat.id} className="bg-paper">
            <h3 className="flex items-center justify-between gap-3 px-4 py-3.5 border-b border-rule bg-panel
                           font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
              <span>
                <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="mx-1.5 text-muted">//</span>
                {cat.label}
              </span>
              <span className="font-normal text-muted">{cat.skills.length}</span>
            </h3>
            <ul className="px-4 py-2">
              {cat.skills.map(skill => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-4 py-2.5 border-b border-rule last:border-b-0"
                >
                  <span className="text-[15px] leading-snug text-ink">{skill.name}</span>
                  <Proficiency score={scoreOf(skill.level)} label={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 border border-rule bg-panel
                      font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
        <span className="font-semibold text-ink">Proficiency</span>
        {levels.map(l => (
          <span key={l.name} className="flex items-center gap-2">
            <Proficiency score={l.score} />
            {l.name}
          </span>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 3-square proficiency mark ---------------- */

function Proficiency({ score, label }) {
  return (
    <span className="flex shrink-0 gap-[3px]" title={label}>
      {label && <span className="sr-only">{label}</span>}
      {[1, 2, 3].map(n => (
        <span
          key={n}
          aria-hidden
          className={`w-2 h-2 ${
            n > score
              ? "border border-muted/50"
              : score === 3
                ? "bg-accent"
                : "bg-ink"
          }`}
        />
      ))}
    </span>
  )
}
