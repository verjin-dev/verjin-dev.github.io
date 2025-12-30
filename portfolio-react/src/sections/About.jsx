export default function About() {
  const age = new Date().getFullYear() - 2000

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <img
            src="/profile.jpg"
            alt="Verjin V"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-slate-600 mb-6">
            As a GenAI Developer with 2+ years of experience, I build and deploy
            AI-driven solutions that solve real-world problems.
          </p>

          <ul className="space-y-2 text-sm">
            <li><strong>Age:</strong> {age}</li>
            <li><strong>Location:</strong> Thiruvananthapuram, India</li>
            <li><strong>Email:</strong> verjinvargheese@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
