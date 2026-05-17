"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, Clock, BookOpen, Sun, Moon } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Seedr: Revolutionizing Torrent Downloading in the Cloud",
    date: "March 15, 2026",
    readTime: "3 min read",
    category: "Cloud Services",
    summary:
      "Seedr is a cloud-based torrent downloading platform that offers a fast and secure way to download torrent files without needing a local client or seedbox. Learn about its storage options, privacy protection, and key advantages.",
    content:
      "Seedr is a cloud-based torrent downloading platform that offers a fast and secure way to download torrent files. With Seedr, users can download torrents without the need for a torrent client or seedbox. The platform offers unlimited storage and bandwidth, allowing users to download and store large files with ease. In addition, Seedr uses encryption to protect users' privacy, ensuring that their online activities remain private. Whether you're a casual user or a power user, Seedr is a great option for downloading torrents securely and quickly.",
  },
  {
    id: 2,
    title: "Maximizing Digital Productivity with Cloud Seedboxes",
    date: "April 28, 2026",
    readTime: "4 min read",
    category: "Productivity",
    summary:
      "Discover the benefits of cloud-based downloading infrastructure. How caching systems, remote file management, and instant streaming integrations can optimize your media workflows.",
    content:
      "Seedr operates by fetching files directly to its cloud servers at high speeds. Once cached in the cloud, users can instantly stream videos, listen to music, or download files directly to their devices via secure HTTP links. This eliminates the CPU and network congestion typically associated with standard P2P clients, offering a high-performance alternative for media curation and high-speed data transfers.",
  },
]

export default function BlogPage() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Blog Navbar */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-850">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </a>

          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-900 dark:text-white">
              Verjin V. Blog
            </span>

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
            Insights & Writing
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Thoughts & Discoveries
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A small space where I document interesting cloud tools, developer workflows, and technical walkthroughs.
          </p>
        </div>

        {/* Posts Stack */}
        <div className="space-y-12">
          {posts.map(post => (
            <article
              key={post.id}
              className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Meta tags */}
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={13} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={13} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-4">
                {post.title}
              </h2>

              {/* Summary */}
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
                {post.content}
              </p>

              {/* Read button */}
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                <BookOpen size={16} />
                <span>Article Complete</span>
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  )
}
