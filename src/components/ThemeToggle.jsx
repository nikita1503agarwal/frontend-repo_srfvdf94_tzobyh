import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setDark(saved === 'dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ring-1 ring-white/10 bg-white/5 hover:bg-white/10 text-white transition"
      aria-label="Toggle dark mode"
    >
      {dark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="hidden sm:inline">{dark ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default ThemeToggle
