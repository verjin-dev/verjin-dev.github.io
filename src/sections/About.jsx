import Section from "@/components/Section"

export default function About() {
  const age = new Date().getFullYear() - 2000

  const facts = [
    { label: "Role", value: "Gen AI Developer, Tata Consultancy Services" },
    { label: "Location", value: "Thiruvananthapuram, Kerala, India" },
    { label: "Age", value: `${age} years` },
    { label: "Education", value: "B.E. Computer Science & Engineering — CGPA 9.64" },
    {
      label: "Email",
      value: "verjinvargheese@gmail.com",
      href: "mailto:verjinvargheese@gmail.com",
    },
  ]

  return (
    <Section id="about" index="01" label="About" title="About me">
      <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12">
        {/* Bio */}
        <div className="lg:col-span-7">
          <p className="font-display text-2xl sm:text-3xl leading-snug tracking-[-0.02em] text-ink">
            As a GenAI Developer with 2+ years of experience, my career objective is to
            leverage my expertise in Generative AI to develop innovative solutions that
            address real-world challenges.
          </p>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            I am highly passionate about staying at the forefront of AI advancements and
            am committed to continuous learning and professional growth, specializing in
            building production-ready LLM pipelines, cognitive search, and cloud deployments.
          </p>
        </div>

        {/* Spec sheet */}
        <dl className="lg:col-span-5 border-t border-ink">
          {facts.map(f => (
            <div
              key={f.label}
              className="grid grid-cols-[7rem_1fr] gap-4 py-3.5 border-b border-rule"
            >
              <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {f.label}
              </dt>
              <dd className="text-[15px] text-ink break-words">
                {f.href ? (
                  <a href={f.href} className="underline decoration-rule underline-offset-4 hover:text-accent hover:decoration-accent transition-colors">
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
