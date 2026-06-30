import { ArrowLeft, Cloud, Download, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "How Seedr Helped Me Download and Manage Files Easily",
  description:
    "A short article about how Seedr helps with cloud downloads, file access, and simple file management.",
}

export default function SeedrPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </a>
          <a
            href="/blog"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            Blog
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Cloud Downloads
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            How Seedr Helped Me Download and Manage Files Easily
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Seedr has been a useful tool for me because it makes downloading and
            managing files much simpler. Instead of depending on slow local
            downloads or keeping my device active for a long time, I can use
            Seedr to fetch files directly to the cloud and access them whenever I
            need them.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <Cloud className="text-teal-700" size={24} />
            <h2 className="mt-4 text-base font-bold text-slate-950">
              Cloud Access
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Files are saved online, so I can open them later from another
              device without moving everything manually.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <Download className="text-teal-700" size={24} />
            <h2 className="mt-4 text-base font-bold text-slate-950">
              Faster Workflow
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              It reduces the waiting time and makes large downloads easier to
              manage from a clean web interface.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <ShieldCheck className="text-teal-700" size={24} />
            <h2 className="mt-4 text-base font-bold text-slate-950">
              Less Device Load
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Because the work happens in the cloud, my computer stays free for
              other tasks while downloads continue.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-slate-700">
          <p>
            What I like most about Seedr is the simple experience. I can add a
            file, let Seedr handle it remotely, and then stream or download it
            from my account. This saves time, keeps my local storage cleaner, and
            avoids the usual trouble of managing downloads directly on my
            device.
          </p>
          <p>
            For anyone who wants an easier way to handle cloud-based downloads,
            Seedr is worth trying. You can visit it here:{" "}
            <a
              href="https://www.seedr.cc/"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.seedr.cc/
            </a>
          </p>
        </div>
      </article>
    </main>
  )
}
