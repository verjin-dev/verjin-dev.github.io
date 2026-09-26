import Section from "@/components/Section"
import ContactForm from "@/components/ContactForm"

const EMAIL = "verjinvargheese@gmail.com"

const lines = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone / WhatsApp", value: "+91 90801 81819", href: "tel:+919080181819" },
  { label: "Location", value: "Remote · India" },
  { label: "Response", value: "Within 24 hours", accent: true },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let’s build together."
      intro="Whether you’re exploring an AI solution architecture, building a full-stack product, or looking to collaborate — my inbox is always open."
      tone="panel"
    >
      <div className="grid lg:grid-cols-12 gap-x-10 gap-y-14">
        {/* Direct lines */}
        <div className="lg:col-span-5">
          <p className="flex items-center gap-2.5 mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            <span className="h-2 w-2 bg-accent" />
            Open to remote global roles
          </p>
          <dl className="border border-rule bg-paper">
            {lines.map(line => (
              <div key={line.label} className="px-5 py-4 border-b border-rule last:border-b-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {line.label}
                </dt>
                <dd className={`mt-1.5 font-mono text-[15px] break-words ${line.accent ? "text-accent" : "text-ink"}`}>
                  {line.href ? (
                    <a href={line.href} className="hover:text-accent transition-colors">
                      {line.value}
                    </a>
                  ) : (
                    line.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm email={EMAIL} className="lg:col-span-7" />
      </div>
    </Section>
  )
}
