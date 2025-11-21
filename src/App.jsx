import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Videos from './components/Videos'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Videos />
      <Contact />
      <footer className="border-t border-white/10 py-10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-violet-200/80">
          <p>© {new Date().getFullYear()} Space Dev. All rights reserved.</p>
          <div className="text-sm">Built with care • Performance-first • Accessible</div>
        </div>
      </footer>
    </div>
  )
}

export default App
