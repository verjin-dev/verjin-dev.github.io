export default function About() {
  const age = new Date().getFullYear() - 2000

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900 py-28 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image wrapper with elegant shadows */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/profile.webp"
              alt="Verjin V"
              className="rounded-2xl w-full object-cover border border-slate-200 dark:border-slate-800 shadow-lg"
            />
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            About Me
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            As a GenAI Developer with 2+ years of experience, my career objective is to leverage my expertise in Generative AI to develop innovative solutions that address real-world challenges.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            I am highly passionate about staying at the forefront of AI advancements and am committed to continuous learning and professional growth, specializing in building production-ready LLM pipelines, cognitive search, and cloud deployments.
          </p>

          <ul className="mt-8 space-y-4 border-t border-slate-200 dark:border-slate-800 pt-6 text-sm">
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white w-24">Age:</span>
              <span>{age} Years</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white w-24">Location:</span>
              <span>Thiruvananthapuram, Kerala, India</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white w-24">Email:</span>
              <a href="mailto:verjinvargheese@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                verjinvargheese@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
