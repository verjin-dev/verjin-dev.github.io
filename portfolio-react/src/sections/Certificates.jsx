const certificates = [
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    image:
      "https://www.databricks.com/sites/default/files/2023-06/fundamentals-badge-generative-lp.png",
  },
  {
    title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT",
    image:
      "https://images.credly.com/size/80x80/images/f9f3c533-9b5a-47eb-8a3e-5734663116c0/image.png",
  },
  {
    title: "CompTIA Security+ ce Certification",
    issuer: "CompTIA",
    image:
      "https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
  },
  {
    title: "Oracle Certified Foundations Associate, Java",
    issuer: "Oracle",
    image:
      "https://images.credly.com/size/340x340/images/aeada4ab-bd8f-4c3c-bf4a-a9f2f4e04dd2/02a_Java_Foundations_Associate.png",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    image:
      "https://images.credly.com/size/80x80/images/b40db465-587f-45eb-a854-af8630a630e7/blob",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    image:
      "https://images.credly.com/size/80x80/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
  },
  {
    title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    image:
      "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    issuer: "Microsoft",
    image:
      "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    image:
      "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
    issuer: "Microsoft",
    image:
      "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
  },
]

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-white dark:bg-slate-950 py-28"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold
                         text-slate-900 dark:text-white">
            Certifications
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Industry-recognized certifications validating expertise in
            cloud platforms, AI systems, and modern engineering practices.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map(cert => (
            <div
              key={cert.title}
              className="rounded-2xl border
                         border-slate-200 dark:border-slate-800
                         bg-white dark:bg-slate-900
                         p-6
                         shadow-sm hover:shadow-md
                         transition text-center"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                decoding="async"
                className="mx-auto h-24 object-contain"
              />

              <h3
                className="mt-6 text-sm font-medium leading-snug
                           text-slate-900 dark:text-white"
              >
                {cert.title}
              </h3>

              <p className="mt-2 text-sm
                            text-slate-600 dark:text-slate-400">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
