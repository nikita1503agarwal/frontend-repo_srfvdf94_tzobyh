import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative min-h-[88vh] grid place-items-center">
        <motion.div
          className="mx-auto max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 text-white px-3 py-1 text-xs md:text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="size-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Dark space • Purple galaxy • Futuristic web
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Space Dev — Web experiences from another dimension
          </motion.h1>
          <motion.p
            className="mt-6 text-base md:text-lg text-violet-100/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            We craft fast, accessible, and visually striking websites using modern stacks. From idea to launch, we turn cosmic visions into pixel-perfect reality.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">Start a project</a>
            <a href="#work" className="px-5 py-3 rounded-lg bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition">See our work</a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
    </section>
  )
}

export default Hero
