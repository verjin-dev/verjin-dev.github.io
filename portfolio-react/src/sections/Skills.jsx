import {
  Code,
  Settings,
  Globe,
  Database,
  Cloud,
  Beaker,
} from "lucide-react"

const skills = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    items: [
      "Docker",
      "Git",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Azure",
    ],
  },
  {
    title: "JavaScript Libraries & Frameworks",
    icon: Globe,
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Vanilla JS",
      "Bun",
      "Deno",
    ],
  },
  {
    title: "Web Frameworks",
    icon: Database,
    items: ["Express.js", "Fastify"],
  },
  {
    title: "Backend as a Service",
    icon: Cloud,
    items: ["Firebase", "Appwrite"],
  },
  {
    title: "Testing",
    icon: Beaker,
    items: ["Jest"],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Technical Skills
          </h2>
          <p className="mt-4 text-slate-600">
            Comprehensive expertise across modern development stacks with
            focus on scalable web applications and DevOps practices.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200
                         bg-white p-6
                         shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg
                             flex items-center justify-center
                             bg-slate-100 text-slate-700"
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-medium text-slate-900">
                  {title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map(item => (
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
