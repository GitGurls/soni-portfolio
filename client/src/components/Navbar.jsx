import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.href.replace('#', '')))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(10,25,47,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--slate-dark)' }}>
        <span className="font-mono text-sm" style={{ color: 'var(--green)' }}>soni.dev</span>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--slate-light)' }} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ background: 'rgba(10,25,47,0.98)' }}>
          {NAV_ITEMS.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
              className="font-mono text-lg hover-green"
              style={{ animationDelay: `${i * 0.05}s`, color: active === n.href ? 'var(--green)' : 'var(--slate-light)' }}>
              <span style={{ color: 'var(--green)' }}>{String(i + 1).padStart(2, '0')}. </span>
              {n.label}
            </a>
          ))}
        </div>
      )}

      {/* Desktop sticky left nav — rendered inside sidebar in Home.jsx via Hero */}
    </>
  )
}

// Export nav items for use in Hero sidebar
export { NAV_ITEMS }
