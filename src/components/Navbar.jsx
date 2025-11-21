import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 ring-1 ring-white/10 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
            <span className="text-white font-bold">✦</span>
          </div>
          <div>
            <p className="text-white font-semibold leading-tight tracking-tight">Space Dev</p>
            <p className="text-xs text-violet-200/70 -mt-0.5">Cosmic web experiences</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-200 hover:text-white transition-colors">Services</a>
          <a href="#work" className="text-slate-200 hover:text-white transition-colors">Work</a>
          <a href="#videos" className="text-slate-200 hover:text-white transition-colors">Videos</a>
          <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/10 transition">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
