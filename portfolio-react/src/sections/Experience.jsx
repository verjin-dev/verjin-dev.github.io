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
      className="bg-white py-28"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-600">
            Hands-on experience building scalable applications and
            AI-powered systems in fast-paced environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200
                         bg-white p-8
                         shadow-sm"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100
                                  flex items-center justify-center">
                    <Briefcase size={18} className="text-slate-700" />
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-slate-600 leading-relaxed">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full
                               bg-slate-100 text-sm
                               text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
