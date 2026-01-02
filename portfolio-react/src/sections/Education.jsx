import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Computer Science & Engineering",
    institution: "Erode Sengunthar Engineering College",
    location: "Erode, Tamil Nadu, India",
    period: "2019 – 2023",
    highlights: [
      "CGPA: 9.64 / 10",
      "Strong foundation in Computer Science, AI, and Software Engineering",
      "Graduated with academic distinction",
    ],
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Sacred Heart Matriculation Higher Secondary School",
    location: "Padanthalumoodu, Tamil Nadu, India",
    period: "2018 – 2019",
    highlights: [
      "Percentage: 60.5%",
      "Focus on Mathematics and Computer Science",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sacred Heart Matriculation Higher Secondary School",
    location: "Padanthalumoodu, Tamil Nadu, India",
    period: "2016 – 2017",
    highlights: [
      "Percentage: 82.2%",
      "Strong academic performance",
    ],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-white dark:bg-slate-950 py-28"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold
                         text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Academic background that built a strong foundation in computer
            science, engineering principles, and problem-solving.
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

          {education.map((edu, index) => (
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
                      <GraduationCap
                        size={18}
                        className="text-slate-700 dark:text-slate-300"
                        aria-hidden
                      />
                    </div>

                    <div>
                      <h3 className="font-medium
                                     text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex gap-6 text-sm
                               text-slate-500 dark:text-slate-400"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={14} aria-hidden />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} aria-hidden />
                      {edu.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul
                  className="mt-5 list-disc pl-5 space-y-2
                             text-slate-600 dark:text-slate-400"
                >
                  {edu.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
