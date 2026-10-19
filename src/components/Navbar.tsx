import { useEffect, useState } from 'react'
import { NAV } from '../data/content'
import type { Theme } from '../hooks/useTheme'

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.45 },
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav id="nav" className="glass">
      <a className="f" href="#top" style={{ fontSize: 20 }}>
        NKG<span style={{ color: 'var(--c1)' }}>.</span>
      </a>
      <div className="lk">
        {NAV.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'on' : ''}>
            {l.label}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button className="btn" onClick={onToggleTheme} aria-label="Switch between dark and light theme" style={{ padding: '9px 14px' }}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <a className="btn pri" href="#contact" style={{ padding: '9px 18px' }}>
          Hire me →
        </a>
      </div>
    </nav>
  )
}
