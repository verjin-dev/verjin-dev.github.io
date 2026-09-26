import Section from "@/components/Section"

// `level` is only set where the credential's name states it.
const certificates = [
  { title: "Azure Solutions Architect Expert (AZ-305)", issuer: "Microsoft", level: "Expert" },
  { title: "Claude Certified Architect – Foundations", issuer: "Anthropic", level: "Foundations" },
  { title: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft", level: "Associate" },
  { title: "AI/ML for Geo Analysis", issuer: "IIRS, ISRO" },
  { title: "5-Day AI Agents Intensive Course with Google", issuer: "Kaggle" },
  { title: "Academy Accreditation – Generative AI Fundamentals", issuer: "Databricks", level: "Fundamentals" },
  { title: "Generative AI Foundations Certificate Program", issuer: "upGrad" },
  { title: "Azure Data Scientist Associate (DP-100)", issuer: "Microsoft", level: "Associate" },
  { title: "CompTIA Security+ ce", issuer: "CompTIA" },
  { title: "Oracle Certified Foundations Associate, Java", issuer: "Oracle", level: "Associate" },
  { title: "Python for Data Science", issuer: "IBM" },
  { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", level: "Fundamentals" },
]

export default function Certificates() {
  return (
    <Section
      id="certificates"
      index="04"
      label="Certificates"
      title="Certifications"
      intro="Professional credentials in cloud solutions architecture, artificial intelligence and software engineering."
      tone="panel"
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
        {certificates.map((cert, i) => (
          <li key={cert.title} className="bg-paper p-5 flex flex-col sm:min-h-[196px]">
            <div className="flex items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              <span className="text-accent">C-{String(i + 1).padStart(2, "0")}</span>
              {cert.level && (
                <span className="px-1.5 py-0.5 border border-rule text-muted">{cert.level}</span>
              )}
            </div>

            <h3 className="mt-4 mb-6 font-display font-medium text-lg leading-snug tracking-[-0.01em] text-ink">
              {cert.title}
            </h3>

            <p className="mt-auto pt-3 border-t border-rule flex justify-between gap-3
                          font-mono text-[10px] uppercase tracking-[0.12em]">
              <span className="text-muted">Issuer</span>
              <span className="text-ink text-right">{cert.issuer}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
