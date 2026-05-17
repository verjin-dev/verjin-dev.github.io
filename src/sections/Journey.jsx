"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"

const timelineItems = [
  {
    type: "work",
    title: "Gen AI Developer",
    institution: "Tata Consultancy Services",
    location: "India",
    period: "2023 – Present",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tcs.svg",
    details: "Working on enterprise-level Generative AI systems, RAG architectures, and custom LLM solutions. Building production-grade intelligent tools, designing LangGraph workflows, and performing cloud deployments.",
    tech: ["Python", "Generative AI", "Azure", "LLMs", "RAG", "FastAPI", "Docker"]
  },
  {
    type: "work",
    title: "Java Developer Intern",
    institution: "Zoho",
    location: "India",
    period: "2023",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zoho.svg",
    details: "Developed backend logic, maintained database interactions using SQL, and optimized Java Spring APIs. Assisted senior architects with deployment infrastructure and agile code cycles.",
    tech: ["Java", "SQL", "Spring Boot", "Git", "API Optimization"]
  },
  {
    type: "education",
    title: "Bachelor of Computer Science & Engineering",
    institution: "Erode Sengunthar Engineering College",
    location: "Erode, Tamil Nadu, India",
    period: "2019 – 2023",
    logo: "/assets/img/esec.png",
    details: "Acquired a rigorous base in computer systems, algorithms, database designs, and machine learning structures. Graduated with high academic distinction.",
    highlights: ["CGPA: 9.64 / 10", "Academic Distinction", "Strong ML & Engineering Foundations"]
  },
  {
    type: "education",
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Sacred Heart Matriculation Higher Secondary School",
    location: "Padanthalumoodu, Tamil Nadu, India",
    period: "2018 – 2019",
    logo: "/assets/img/sacred_heart.png",
    details: "Completed standard secondary curriculum with direct emphasis on Advanced Mathematics and Computer Science.",
    highlights: ["Focus on Math & Computer Science", "Percentage: 60.5%"]
  },
  {
    type: "education",
    title: "Secondary School Certificate (SSC)",
    institution: "Sacred Heart Matriculation Higher Secondary School",
    location: "Padanthalumoodu, Tamil Nadu, India",
    period: "2016 – 2017",
    logo: "/assets/img/sacred_heart.png",
    details: "Graduated secondary school curriculum with distinction in science and mathematics subjects.",
    highlights: ["Percentage: 82.2%", "Academic Merit Awardee"]
  }
]

export default function Journey() {
  return (
    <section id="journey" className="bg-white dark:bg-slate-950 py-28 relative overflow-hidden transition-colors duration-300">
      {/* Background glowing blob */}
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3.5 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800/60 bg-cyan-50/60 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="mt-4 text-slate-650 dark:text-slate-400">
            A cohesive chronological mapping of my professional contributions in technology and foundational academic credentials.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-16">
          {/* Glowing vertical slider effect */}
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-violet-500 via-purple-500 to-cyan-500 pointer-events-none" />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-purple-500 dark:border-purple-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all overflow-hidden p-1.5">
                {item.logo ? (
                  <img src={item.logo} alt={item.institution} className="w-full h-full object-contain dark:brightness-100" />
                ) : item.type === "work" ? (
                  <Briefcase size={13} className="text-purple-600 dark:text-purple-400 animate-pulse" />
                ) : (
                  <GraduationCap size={14} className="text-cyan-600 dark:text-cyan-400" />
                )}
              </div>

              {/* Glassmorphic Timeline Card */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 md:p-8 shadow-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.06)] dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 relative overflow-hidden">
                
                {/* Decorative absolute glow accent inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/5 to-cyan-500/5 rounded-bl-full pointer-events-none" />

                {/* Top Metas row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {item.logo && (
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2.5 shrink-0 shadow-sm">
                        <img src={item.logo} alt={item.institution} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider mb-2 ${
                        item.type === "work" 
                          ? "bg-purple-100/60 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400" 
                          : "bg-cyan-100/60 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400"
                      }`}>
                        {item.type === "work" ? "Professional" : "Academic"}
                      </span>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-650 dark:text-slate-300 text-sm mt-0.5 font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Period and Map labels */}
                  <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-1.5 md:items-end text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <p className="mt-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.details}
                </p>

                {/* Tech Stack List (if Work) */}
                {item.tech && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Academic Highlights list (if Education) */}
                {item.highlights && (
                  <div className="mt-5 space-y-2 border-t border-slate-100 dark:border-slate-850 pt-4">
                    <div className="text-[11px] font-bold text-slate-450 uppercase tracking-wider mb-2">Key Highlights</div>
                    <div className="flex flex-wrap gap-3">
                      {item.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs text-slate-650 dark:text-slate-350"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
