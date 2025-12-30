import { motion, useMotionValue, useTransform } from "framer-motion"

export default function FloatingCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY }}
      className="w-72 h-96 rounded-2xl
                 bg-white/80 dark:bg-slate-900/80
                 backdrop-blur-xl border
                 shadow-2xl p-6
                 transform-gpu"
    >
      <h3 className="text-xl font-bold mb-2">AI Model Card</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Gen-AI Engineer · Azure · LLMs · ML Systems
      </p>

      <div className="mt-6 text-xs space-y-2">
        <div>🔹 LLM Integration</div>
        <div>🔹 RAG Pipelines</div>
        <div>🔹 Model Deployment</div>
        <div>🔹 AI Architecture</div>
      </div>
    </motion.div>
  )
}
