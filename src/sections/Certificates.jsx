"use client"

import { motion } from "framer-motion"

const certificates = [
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
    issuer: "Microsoft",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
  },
  {
    title: "Claude Certified Architect – Foundations Certification",
    issuer: "Anthropic",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg",
  },
  {
    title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
  },
  {
    title: "AI/ML for Geo Analysis",
    issuer: "Indian Institute of Remote Sensing (IIRS), ISRO",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg",
  },
  {
    title: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kaggle.svg",
  },
  {
    title: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg",
  },
  {
    title: "Generative AI Foundations Certificate Program",
    issuer: "upGrad",
    image: "https://www.upgrad.com/favicon.ico",
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    issuer: "Microsoft",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
  },
  {
    title: "CompTIA Security+ ce Certification",
    issuer: "CompTIA",
    image: "https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
  },
  {
    title: "Oracle Certified Foundations Associate, Java",
    issuer: "Oracle",
    image: "https://images.credly.com/size/340x340/images/aeada4ab-bd8f-4c3c-bf4a-a9f2f4e04dd2/02a_Java_Foundations_Associate.png",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    image: "https://images.credly.com/size/80x80/images/b40db465-587f-45eb-a854-af8630a630e7/blob",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="bg-white dark:bg-slate-950 py-28 relative overflow-hidden transition-colors duration-300">
      
      {/* Dynamic glow decoration */}
      <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-3.5 py-1.5 rounded-full border border-purple-200 dark:border-purple-800/60 bg-violet-50/60 dark:bg-violet-950/20 text-purple-650 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Verified Credentials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Industry Certifications
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Professional qualifications demonstrating deep competence in cloud solutions architecture, artificial intelligence systems, and robust programming structures.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-6 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-[0_10px_25px_rgba(139,92,246,0.06)] dark:hover:shadow-[0_10px_25px_rgba(139,92,246,0.12)] hover:border-slate-350 dark:hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-300 min-h-[260px]"
            >
              
              {/* Badge Image Frame with high contrast */}
              <div className="w-24 h-24 flex items-center justify-center relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-all duration-300"
                />
              </div>

              {/* Text Meta blocks */}
              <div className="mt-6 flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 px-1">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {cert.issuer}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
