function Services() {
  const services = [
    {
      title: 'Custom Websites',
      desc: 'Design-driven, responsive websites built with React, Next.js, and Tailwind.'
    },
    {
      title: 'Web Apps',
      desc: 'Robust SPAs and dashboards with clean APIs, real-time features, and auth.'
    },
    {
      title: 'E-commerce',
      desc: 'High-converting storefronts with blazing performance and seamless checkout.'
    },
    {
      title: 'Brand & UI',
      desc: 'Visual identity, UI kits, and design systems that scale across products.'
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-violet-200/80">A focused suite of services to launch and grow your product.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/7.5 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 mb-4" />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-violet-200/80">{s.desc}</p>
              <div className="mt-6 text-fuchsia-300/90 text-sm opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
