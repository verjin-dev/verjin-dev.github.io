"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Submits logically
  }

  return (
    <section id="contact" className="bg-white dark:bg-slate-950 py-28 relative overflow-hidden transition-colors duration-300">
      
      {/* Background neon glows */}
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3.5 py-1.5 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50/60 dark:bg-violet-950/20 text-violet-655 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider">
            Reach Out
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Let&apos;s Build Together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium">
            Whether you&apos;re exploring an AI solution architecture, building a full-stack product, or looking to collaborate — my inbox is always open.
          </p>
        </div>

        {/* Content Columns split */}
        <div className="grid gap-12 md:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: Contact Cards (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            
            <InfoCard
              icon={Mail}
              title="Email"
              value="verjinvargheese@gmail.com"
              href="mailto:verjinvargheese@gmail.com"
              hint="Best for formal dialogue"
              color="text-violet-500 bg-violet-50 dark:bg-violet-950/30"
            />

            <InfoCard
              icon={Phone}
              title="Phone / WhatsApp"
              value="+91 90801 81819"
              href="tel:+919080181819"
              hint="Quick updates & urgent syncs"
              color="text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30"
            />

            <InfoCard
              icon={MapPin}
              title="Location"
              value="Remote · India"
              hint="Open to remote global roles"
              color="text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
            />

            {/* Custom Availability Tracker Card */}
            <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/20 p-5 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-650 dark:text-slate-350">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Response Sprints</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Expect replies in less than 24 hours.</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Form Card (7 cols) */}
          <div className="md:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 backdrop-blur p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Send a Message
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 mb-6 leading-relaxed">
              Fill in your details below, and I will connect with you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-500 dark:focus:ring-violet-400 transition duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-500 dark:focus:ring-violet-400 transition duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-500 dark:focus:ring-violet-400 transition duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your requirements or ideas..."
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-500 dark:focus:ring-violet-400 transition duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-sm font-semibold transition shadow-md hover:shadow-lg duration-200"
              >
                <Send size={15} />
                <span>Send Message</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-405 dark:text-slate-500 font-semibold tracking-wider uppercase">
                <ShieldCheck size={12} />
                <span>Message securely dispatched</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

/* ---------------- Reusable UI Info Card ---------------- */

function InfoCard({ icon: Icon, title, value, href, hint, color }) {
  const CardBody = (
    <div className="rounded-2xl border border-slate-200/65 dark:border-slate-800/80 bg-white dark:bg-slate-950/40 p-5 shadow-sm flex items-start gap-4 hover:border-slate-350 dark:hover:border-slate-700 transition duration-300">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={18} />
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{title}</h4>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{value}</p>
        <p className="text-xs text-slate-500 dark:text-slate-405 mt-1 font-medium">{hint}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block group">
        {CardBody}
      </a>
    )
  }

  return CardBody
}
