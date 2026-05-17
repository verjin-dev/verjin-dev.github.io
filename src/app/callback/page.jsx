"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Music, ShieldCheck } from "lucide-react"

export default function CallbackPage() {
  const [status, setStatus] = useState("Authenticating...")

  useEffect(() => {
    // Log the OAuth callback details to console as before
    console.log("OAuth callback received", window.location.href)
    setStatus("Authentication successful!")
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main glass card */}
      <div className="relative z-10 w-full max-w-md bg-slate-950/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] text-center">
        {/* Animated icon container */}
        <div className="mx-auto w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center text-green-400 mb-8 animate-pulse">
          <Music size={36} className="animate-bounce" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
          Spotify OAuth Redirect
        </h1>
        
        <p className="text-slate-400 text-sm mb-6">
          Authorization callback received successfully
        </p>

        {/* Status display */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-green-400 text-sm font-medium mb-8">
          <CheckCircle size={16} />
          {status}
        </div>

        <div className="border-t border-slate-800/80 pt-6">
          <p className="text-sm text-slate-400">
            You can close this tab now.
          </p>
          <div className="mt-4 flex justify-center items-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={14} />
            <span>Secure Handshake Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
