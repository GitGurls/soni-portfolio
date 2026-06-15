

import { useState, useEffect } from 'react'
import { NAV_ITEMS } from './Navbar'

const ROLES = ['Full Stack Developer', 'MERN Stack Dev', 'Backend Developer', 'Problem Solver']

export default function Hero({ mobile }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [active, setActive] = useState('#about')

  // Typewriter effect
  useEffect(() => {
    const role = ROLES[roleIdx]
    let timeout
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx((roleIdx + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  // Active section tracking (desktop)
  useEffect(() => {
    if (mobile) return
    const sections = NAV_ITEMS.map(n => document.getElementById(n.href.replace('#', '')))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [mobile])

  const content = (
    <div className={mobile ? 'pt-20 pb-10' : 'flex flex-col justify-between h-full'}>
      {/* Top: photo + name + tagline */}
      <div>
        {/* Photo — sabse upar */}
        <div className={`mb-6 ${mobile ? 'flex justify-center' : ''}`}>
          <div className="relative w-36 h-36 group">
            <img
              src="/soni-pro.jpeg"
              alt="Soni Gupta"
              className="w-36 h-36 rounded-full object-cover object-center"
              style={{ border: '2px solid var(--green)', filter: 'grayscale(15%)' }}
              onError={e => {
                e.target.src = `https://ui-avatars.com/api/?name=Soni+Gupta&background=112240&color=64ffda&size=128&bold=true`
              }}
            />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
              style={{ background: 'var(--green)' }} />
          </div>
        </div>

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border"
          style={{ borderColor: 'var(--green)', background: 'rgba(100,255,218,0.06)' }}>
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--green)', animation: 'blink 1.5s ease infinite' }} />
          <span className="font-mono text-xs" style={{ color: 'var(--green)' }}>Available for opportunities</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: 'var(--slate-light)' }}>
          Soni Gupta
        </h1>
        <h2 className="text-xl lg:text-2xl font-semibold mb-4" style={{ color: 'var(--slate)' }}>
          <span style={{ color: 'var(--green)' }}>{displayed}</span>
          <span className="blink" style={{ color: 'var(--green)' }}>|</span>
        </h2>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--slate)' }}>
          B.Tech CSE student from Lucknow with a{' '}
          <span style={{ color: 'var(--slate-light)' }}>CGPA of 9.08</span>. I build{' '}
          <span style={{ color: 'var(--slate-light)' }}>fast, scalable full-stack applications</span>{' '}
          with real-world impact — from real-time chess platforms to food ordering systems.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5 mt-6">
          <a href="https://github.com/GitGurls" target="_blank" rel="noreferrer"
            title="GitHub" style={{ color: 'var(--slate)' }}
            className="hover-green transition-transform hover:-translate-y-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/soni-gupta-54b075329" target="_blank" rel="noreferrer"
            title="LinkedIn" style={{ color: 'var(--slate)' }}
            className="hover-green transition-transform hover:-translate-y-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:starsindo3761@gmail.com" title="Email"
            style={{ color: 'var(--slate)' }} className="hover-green transition-transform hover:-translate-y-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="font-mono text-xs px-4 py-2 rounded border transition-all hover:bg-opacity-10"
            style={{ color: 'var(--green)', borderColor: 'var(--green)', background: 'transparent' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(100,255,218,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            Resume ↗
          </a>
        </div>
      </div>

      {/* Bottom: desktop nav */}
      {!mobile && (
        <nav className="flex flex-col gap-4 mt-10">
          {NAV_ITEMS.map((n, i) => (
            <a key={n.href} href={n.href}
              className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest transition-all"
              style={{ color: active === n.href ? 'var(--slate-light)' : 'var(--slate)' }}>
              <span className="nav-line block h-px transition-all duration-300"
                style={{
                  width: active === n.href ? '64px' : '32px',
                  background: active === n.href ? 'var(--slate-light)' : 'var(--slate-dark)'
                }} />
              {n.label}
            </a>
          ))}
        </nav>
      )}

    </div>
  )

  return content
}