import { motion } from 'framer-motion'

function Work() {
  const projects = [
    {
      name: 'Nebula Commerce',
      tag: 'E‑commerce',
    },
    {
      name: 'OrbitOS',
      tag: 'Web App',
    },
    {
      name: 'Cosmo Blog',
      tag: 'Marketing',
    },
  ]

  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-violet-200/80">A glimpse of products we helped bring to life.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="group overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <div className="h-48 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.35),transparent_35%)]" />
              <div className="p-6">
                <span className="text-xs text-fuchsia-300/90">{p.tag}</span>
                <h3 className="text-white font-semibold text-lg mt-1">{p.name}</h3>
                <p className="text-violet-200/80 text-sm mt-2">Performance-first. Accessible. Crafted with care.</p>
                <div className="mt-4 inline-flex items-center text-fuchsia-300/90 text-sm">View case →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
