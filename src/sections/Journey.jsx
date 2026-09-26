import Section from "@/components/Section"

const timelineItems = [
  {
    type: "work",
    title: "Gen AI Developer",
    institution: "Tata Consultancy Services",
    location: "India",
    period: "2023 — Present",
    details: "Working on enterprise-level Generative AI systems, RAG architectures, and custom LLM solutions. Building production-grade intelligent tools, designing LangGraph workflows, and performing cloud deployments.",
    tech: ["Python", "Generative AI", "Azure", "LLMs", "RAG", "FastAPI", "Docker"]
  },
  {
    type: "work",
    title: "Java Developer Intern",
    institution: "Zoho",
    location: "India",
    period: "2023",
    details: "Developed backend logic, maintained database interactions using SQL, and optimized Java Spring APIs. Assisted senior architects with deployment infrastructure and agile code cycles.",
    tech: ["Java", "SQL", "Spring Boot", "Git", "API Optimization"]
  },
  {
    type: "education",
    title: "Bachelor of Computer Science & Engineering",
    institution: "Erode Sengunthar Engineering College",
    location: "Erode, Tamil Nadu, India",
    period: "2019 — 2023",
    details: "Acquired a rigorous base in computer systems, algorithms, database designs, and machine learning structures. Graduated with high academic distinction.",
    highlights: ["CGPA: 9.64 / 10", "Academic Distinction", "Strong ML & Engineering Foundations"]
  },
  {
    type: "education",
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Sacred Heart Matriculation Higher Secondary School",
    location: "Padanthalumoodu, Tamil Nadu, India",
    period: "2018 — 2019",
    details: "Completed standard secondary curriculum with direct emphasis on Advanced Mathematics and Computer Science.",
    highlights: ["Focus on Math & Computer Science", "Percentage: 60.5%"]
  },
  {
    type: "education",
    title: "Secondary School Certificate (SSC)",
    institution: "Sacred Heart Matriculation Higher Secondary School",
    location: "Padanthalumoodu, Tamil Nadu, India",
    period: "2016 — 2017",
    details: "Graduated secondary school curriculum with distinction in science and mathematics subjects.",
    highlights: ["Percentage: 82.2%", "Academic Merit Awardee"]
  }
]

export default function Journey() {
  return (
    <Section
      id="journey"
      index="02"
      label="Journey"
      title="Experience & Education"
      intro="A chronological record of my professional work in technology and the academic foundation behind it."
      tone="panel"
    >
      <ol className="border-t border-ink">
        {timelineItems.map(item => (
          <li
            key={item.title}
            className="grid lg:grid-cols-12 gap-x-10 gap-y-4 py-8 md:py-10 border-b border-rule"
          >
            {/* Period + type */}
            <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
              <span className="text-ink font-medium">{item.period}</span>
              <span
                className={`px-1.5 py-0.5 border text-[10px] ${
                  item.type === "work" ? "border-accent text-accent" : "border-rule text-muted"
                }`}
              >
                {item.type === "work" ? "Work" : "Edu"}
              </span>
            </div>

            {/* Role */}
            <div className="lg:col-span-6">
              <h3 className="font-display font-medium text-2xl md:text-[28px] leading-tight tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[15px] text-ink">
                {item.institution}
                <span className="text-muted"> · {item.location}</span>
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                {item.details}
              </p>
            </div>

            {/* Stack or highlights */}
            <div className="lg:col-span-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {item.tech ? "Stack" : "Highlights"}
              </p>
              <ul className="font-mono text-xs leading-relaxed text-ink">
                {(item.tech || item.highlights).map(t => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden className="text-accent">/</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
