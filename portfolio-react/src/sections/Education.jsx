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
      className="bg-white py-28"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Education
          </h2>
          <p className="mt-4 text-slate-600">
            Academic background that built a strong foundation in computer
            science, engineering principles, and problem-solving.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 space-y-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200
                         bg-white p-8 shadow-sm"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100
                                  flex items-center justify-center">
                    <GraduationCap size={18} className="text-slate-700" />
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {edu.location}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-5 list-disc pl-5 text-slate-600 space-y-2">
                {edu.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
