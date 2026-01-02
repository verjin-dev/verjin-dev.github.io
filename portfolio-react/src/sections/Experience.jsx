import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Gen AI Developer",
    company: "Tata Consultancy Services",
    period: "2023 – Present",
    location: "India",
    description:
      "Working on Generative AI solutions including LLM-based systems, RAG pipelines, and enterprise AI integrations. Contributing to scalable AI architectures and deployment-ready solutions.",
    tech: [
      "Python",
      "Generative AI",
      "Azure",
      "LLMs",
      "RAG",
      "FastAPI",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Zoho",
    period: "2023",
    location: "India",
    description:
      "Developed and maintained Java-based applications. Worked on backend logic, optimized database interactions, and collaborated with senior engineers on production-grade systems.",
    tech: [
      "Java",
      "SQL",
      "Spring",
      "Git",
      "Backend Development",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-white dark:bg-slate-950 py-28"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold
                         text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Hands-on experience building scalable applications and
            AI-powered systems in fast-paced environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 space-y-12">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-5 top-0 bottom-0
                       w-px bg-slate-200 dark:bg-slate-800"
          />

          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[18px] top-8
                           w-4 h-4 rounded-full
                           bg-slate-900 dark:bg-white"
              />

              {/* Card */}
              <div
                className="rounded-2xl border
                           border-slate-200 dark:border-slate-800
                           bg-white dark:bg-slate-900
                           p-8
                           shadow-sm
                           hover:shadow-md
                           transition"
              >
                {/* Top Row */}
                <div className="flex flex-col md:flex-row
                                md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg
                                 bg-slate-100 dark:bg-slate-800
                                 flex items-center justify-center"
                    >
                      <Briefcase
                        size={18}
                        className="text-slate-700 dark:text-slate-300"
                        aria-hidden
                      />
                    </div>

                    <div>
                      <h3 className="font-medium
                                     text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex gap-6 text-sm
                               text-slate-500 dark:text-slate-400"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={14} aria-hidden />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} aria-hidden />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="mt-5
                             text-slate-600 dark:text-slate-400
                             leading-relaxed"
                >
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map(item => (
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
