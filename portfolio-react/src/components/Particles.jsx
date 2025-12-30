import { motion } from "framer-motion"

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            y: [null, -100],
            opacity: [null, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
