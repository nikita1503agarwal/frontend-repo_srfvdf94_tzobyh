import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit – ready to connect to backend endpoint later
    setTimeout(() => setStatus('Thanks! We\'ll reach out shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let\'s build something stellar</h2>
            <p className="mt-3 text-violet-200/80">Tell us about your idea—scope, timeline, and goals. We\'ll get back within 24 hours.</p>
            <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-violet-200/80 text-sm">
              <p>Prefer email? hello@spacedev.studio</p>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="grid grid-cols-1 gap-4">
              <input className="bg-white/5 ring-1 ring-white/10 rounded-lg px-4 py-3 text-white placeholder:text-violet-200/50 focus:outline-none focus:ring-fuchsia-500/50" placeholder="Your name" required />
              <input type="email" className="bg-white/5 ring-1 ring-white/10 rounded-lg px-4 py-3 text-white placeholder:text-violet-200/50 focus:outline-none focus:ring-fuchsia-500/50" placeholder="Email" required />
              <textarea rows="4" className="bg-white/5 ring-1 ring-white/10 rounded-lg px-4 py-3 text-white placeholder:text-violet-200/50 focus:outline-none focus:ring-fuchsia-500/50" placeholder="Tell us about your project" required />
              <button className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">
                Send message
              </button>
              {status && <p className="text-sm text-violet-200/80">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
