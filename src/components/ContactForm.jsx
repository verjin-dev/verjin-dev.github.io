"use client"

import { ArrowRight } from "lucide-react"

const fields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Enter name", autoComplete: "name" },
  { name: "email", label: "Your email", type: "email", placeholder: "Enter email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", placeholder: "What is this about?", wide: true },
]

const inputClass =
  "w-full bg-transparent border-0 border-b border-rule px-0 py-3 text-[17px] text-ink " +
  "placeholder:text-muted/60 focus:outline-none focus:border-accent " +
  "focus:shadow-[0_1px_0_0_rgb(var(--accent))] transition-colors"

/* The site is static (GitHub Pages), so the form hands off to the
   visitor's email client with everything pre-filled. */
export default function ContactForm({ email, className = "" }) {
  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className={`grid sm:grid-cols-2 gap-x-8 gap-y-8 ${className}`}>
      {fields.map(f => (
        <div key={f.name} className={f.wide ? "sm:col-span-2" : ""}>
          <Label htmlFor={`contact-${f.name}`}>{f.label}</Label>
          <input
            id={`contact-${f.name}`}
            name={f.name}
            type={f.type}
            required
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            className={inputClass}
          />
        </div>
      ))}

      <div className="sm:col-span-2">
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Outline your requirements or ideas…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 px-6 py-4 bg-ink text-paper
                     font-mono text-xs uppercase tracking-[0.14em]
                     hover:bg-accent transition-colors duration-150"
        >
          Send message
          <ArrowRight
            size={14}
            aria-hidden
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          Opens your email app with the message ready to send
        </p>
      </div>
    </form>
  )
}

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
    >
      {children} <span aria-hidden className="text-accent">*</span>
    </label>
  )
}
