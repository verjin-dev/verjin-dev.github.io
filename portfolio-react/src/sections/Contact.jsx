import { Mail, Phone, MapPin, Send } from "lucide-react"

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
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Ready to bring your next project to life? Let&apos;s discuss how my
            expertise in full-stack development and AI systems can help
            achieve your goals.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 items-start">
          
          {/* LEFT INFO */}
          <div className="space-y-6">
            <InfoCard
              icon={Mail}
              title="Email"
              value="verjinvargheese@gmail.com"
            />
            <InfoCard
              icon={Phone}
              title="Phone"
              value="+91 90801 81819"
            />
            <InfoCard
              icon={MapPin}
              title="Location"
              value="Available for Remote Work"
            />
          </div>

          {/* RIGHT FORM */}
          <div
            className="rounded-2xl border
                       border-slate-200 dark:border-slate-800
                       bg-white dark:bg-slate-900
                       p-8 shadow-sm"
          >
            <h3 className="font-medium
                           text-slate-900 dark:text-white
                           mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg
                             border border-slate-200 dark:border-slate-700
                             bg-white dark:bg-slate-800
                             px-4 py-3 text-sm
                             text-slate-900 dark:text-slate-100
                             placeholder:text-slate-400 dark:placeholder:text-slate-500
                             focus:outline-none focus:ring-2
                             focus:ring-slate-900/10 dark:focus:ring-white/10"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg
                             border border-slate-200 dark:border-slate-700
                             bg-white dark:bg-slate-800
                             px-4 py-3 text-sm
                             text-slate-900 dark:text-slate-100
                             placeholder:text-slate-400 dark:placeholder:text-slate-500
                             focus:outline-none focus:ring-2
                             focus:ring-slate-900/10 dark:focus:ring-white/10"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg
                           border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-800
                           px-4 py-3 text-sm
                           text-slate-900 dark:text-slate-100
                           placeholder:text-slate-400 dark:placeholder:text-slate-500
                           focus:outline-none focus:ring-2
                           focus:ring-slate-900/10 dark:focus:ring-white/10"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg
                           border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-800
                           px-4 py-3 text-sm
                           text-slate-900 dark:text-slate-100
                           placeholder:text-slate-400 dark:placeholder:text-slate-500
                           focus:outline-none focus:ring-2
                           focus:ring-slate-900/10 dark:focus:ring-white/10"
              />

              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2
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

/* ---------------- Info Card ---------------- */

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div
      className="rounded-2xl border
                 border-slate-200 dark:border-slate-800
                 bg-white dark:bg-slate-900
                 p-6 shadow-sm
                 flex items-center gap-4"
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
      </div>
    </div>
  )
}
