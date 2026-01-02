import { useEffect } from "react"

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow")

    const move = e => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      id="cursor-glow"
      aria-hidden
      className="
        pointer-events-none
        fixed top-0 left-0 z-40
        w-[400px] h-[400px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        blur-[120px]
        opacity-40
        bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_70%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)]
        transition-transform duration-75
      "
    />
  )
}
