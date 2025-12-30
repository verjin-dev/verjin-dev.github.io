import { motion, useMotionValue } from "framer-motion"

export default function MagneticButton({ children, ...props }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  return (
    <motion.button
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ x, y }}
      className="px-8 py-3 rounded-xl
                 bg-blue-600 text-white
                 hover:shadow-xl
                 transition"
      {...props}
    >
      {children}
    </motion.button>
  )
}
