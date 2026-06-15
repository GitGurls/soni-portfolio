import { useInView } from 'react-intersection-observer'

const PROJECTS = [
  {
    title: 'Chess.com Clone',
    description: 'Real-time multiplayer chess platform with WebSocket-powered live gameplay, GitHub OAuth authentication, and Turborepo monorepo architecture. Features move validation, game rooms, and spectator mode.',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Supabase', 'Turborepo'],
    github: 'https://github.com/GitGurls',
    live: 'https://chess-app-iota-five.vercel.app',
    featured: true,
    icon: '♟',
    impact: 'Real-time multiplayer • Monorepo architecture',
  },
  {
    title: 'FOODIE-Frenzy',
    description: 'Full-stack MERN food ordering platform with role-based access control for customers, restaurant owners, and admins. Features JWT authentication, order tracking, and a complete admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/GitGurls',
    live: 'https://foodie-frontend-pink.vercel.app',
    featured: true,
    icon: '🍕',
    impact: 'Role-based access • Admin dashboard • Deployed',
  },
  {
    title: 'ECO-TRACE',
    description: 'MERN stack eco-tourism platform that helps users discover sustainable travel destinations. Features destination listings, carbon footprint tracker, and user reviews system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/GitGurls',
    live: 'https://eco-trace-beryl.vercel.app',
    featured: false,
    icon: '🌿',
    impact: 'Eco-tourism • Carbon tracker',
  },
  {
    title: 'AnonShield',
    description: 'Anonymous digital identity platform built for Codorra Hackathon 2026 (Cybersecurity track). Implements AES-256-GCM encryption and zero-knowledge proof concepts for secure anonymous authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AES-256-GCM'],
    github: 'https://github.com/GitGurls',
    live: 'https://anon-shield-theta.vercel.app',
    featured: false,
    icon: '🛡',
    impact: 'Hackathon project • ZK-proof concepts • E2E encryption',
  },
]

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref}
      className="group relative rounded-lg p-5 card-hover"
      style={{
        background: 'var(--navy-light)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `all 0.4s ease ${index * 0.1}s`,
      }}>

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{project.icon}</span>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ color: 'var(--slate)' }} className="hover-green transition-transform hover:-translate-y-1"
            title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{ color: 'var(--slate)' }} className="hover-green transition-transform hover:-translate-y-1"
              title="Live Demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="font-semibold mb-2 group-hover:text-green transition-colors"
        style={{ color: 'var(--slate-light)', transition: 'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--slate-light)'}>
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--slate)' }}>
        {project.description}
      </p>

      {/* Impact */}
      <p className="font-mono text-xs mb-4" style={{ color: 'var(--green)' }}>
        {project.impact}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" ref={ref} className="py-20"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>

      <div className="section-heading">
        <span className="section-number font-mono">03.</span>
        <h2 className="text-lg font-semibold" style={{ color: 'var(--slate-light)' }}>Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  )
}
