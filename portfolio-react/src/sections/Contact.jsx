import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-950 py-28"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold
                         text-slate-900 dark:text-white">
            Let’s Build Something Meaningful
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Whether you’re exploring an idea, building a product, or scaling
            an AI system — I’m open to meaningful collaborations.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 items-start">

          {/* LEFT — CONTACT INFO */}
          <div className="space-y-6">

            <InfoCard
              icon={Mail}
              title="Email"
              value="verjinvargheese@gmail.com"
              hint="Best for detailed discussions"
            />

            <InfoCard
              icon={Phone}
              title="Phone"
              value="+91 90801 81819"
              hint="Quick calls & urgent matters"
            />

            <InfoCard
              icon={MapPin}
              title="Location"
              value="Remote · India"
              hint="Open to global opportunities"
            />

            {/* Availability */}
            <div
              className="rounded-2xl border
                         border-slate-200 dark:border-slate-800
                         bg-slate-50 dark:bg-slate-900
                         p-6 flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-lg
                           bg-slate-100 dark:bg-slate-800
                           flex items-center justify-center
                           text-slate-700 dark:text-slate-300"
              >
                <Clock size={18} aria-hidden />
              </div>

              <div>
                <p className="font-medium
                              text-slate-900 dark:text-white">
                  Typical Response Time
                </p>
                <p className="text-sm
                              text-slate-600 dark:text-slate-400">
                  Within 24 hours on business days
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            className="rounded-2xl border
                       border-slate-200 dark:border-slate-800
                       bg-white dark:bg-slate-900
                       p-8 shadow-sm"
          >
            <h3 className="font-medium
                           text-slate-900 dark:text-white
                           mb-2">
              Send a Message
            </h3>
            <p className="text-sm
                          text-slate-600 dark:text-slate-400
                          mb-6">
              Share a brief overview and I’ll get back to you.
            </p>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>

              <Input placeholder="Subject" />

              <Textarea placeholder="Tell me about your project…" />

              <button
                type="submit"
                className="inline-flex items-center gap-2
                           px-6 py-3 rounded-lg
                           bg-slate-900 dark:bg-white
                           text-white dark:text-slate-900
                           hover:bg-slate-800 dark:hover:bg-slate-200
                           transition"
              >
                <Send size={16} aria-hidden />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Reusable UI ---------------- */

function InfoCard({ icon: Icon, title, value, hint }) {
  return (
    <div
      className="rounded-2xl border
                 border-slate-200 dark:border-slate-800
                 bg-white dark:bg-slate-900
                 p-6 shadow-sm
                 flex items-start gap-4"
    >
      <div
        className="w-10 h-10 rounded-lg
                   bg-slate-100 dark:bg-slate-800
                   flex items-center justify-center
                   text-slate-700 dark:text-slate-300"
      >
        <Icon size={18} aria-hidden />
      </div>

      <div>
        <p className="text-sm font-medium
                      text-slate-900 dark:text-white">
          {title}
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {value}
        </p>
        {hint && (
          <p className="mt-1 text-xs
                        text-slate-500 dark:text-slate-500">
            {hint}
          </p>
        )}
      </div>
    </div>
  )
}

function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-800
                 px-4 py-3 text-sm
                 text-slate-900 dark:text-slate-100
                 placeholder:text-slate-400 dark:placeholder:text-slate-500
                 focus:outline-none focus:ring-2
                 focus:ring-slate-900/10 dark:focus:ring-white/10"
    />
  )
}

function Textarea({ placeholder }) {
  return (
    <textarea
      rows={5}
      placeholder={placeholder}
      className="w-full rounded-lg
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-800
                 px-4 py-3 text-sm
                 text-slate-900 dark:text-slate-100
                 placeholder:text-slate-400 dark:placeholder:text-slate-500
                 focus:outline-none focus:ring-2
                 focus:ring-slate-900/10 dark:focus:ring-white/10"
    />
  )
}
