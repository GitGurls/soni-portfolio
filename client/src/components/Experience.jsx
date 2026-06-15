import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const EXPERIENCES = [
  {
    company: 'OpennMind',
    role: 'Frontend Developer',
    period: 'Aug 2025 – Dec 2025',
    type: 'part-time',
    bullets: [
      'Building scalable, reusable React components for the core product',
      'Implementing responsive UI designs with Tailwind CSS and Framer Motion',
      'Collaborating with the design and backend teams on feature delivery',
    ]
  },
    {
    company: 'Algoneiith',
    role: 'Technical Lead',
    period: 'Aug 2025 – Apr 2026',
    type: 'Part-time',
    bullets: [
      'Led technical initiatives and development workflows as a part-time Technical Lead',
      'Collaborated with cross-functional teams on project planning and execution',
      'Mentored junior developers and conducted code reviews',
    ]
  },
  {
    company: "Zero's Arena",
    role: 'Technical Lead',
    period: 'May 2025 – Sep 2025',
    type: 'Leadership',
    bullets: [
      'Led technical operations for hackathons with 1300+ participants across 50+ teams',
      'Managed end-to-end event coordination, judging systems, and submission workflows',
      'Mentored junior developers and helped teams debug and deploy their projects',
    ]
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const exp = EXPERIENCES[active]

  return (
    <section id="experience" ref={ref} className="py-20"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>

      <div className="section-heading">
        <span className="section-number font-mono">02.</span>
        <h2 className="text-lg font-semibold" style={{ color: 'var(--slate-light)' }}>Experience</h2>
      </div>

      <div className="flex gap-0">
        {/* Tab list */}
        <div className="flex flex-col border-l" style={{ borderColor: 'var(--slate-dark)', minWidth: '140px' }}>
          {EXPERIENCES.map((e, i) => (
            <button key={e.company}
              onClick={() => setActive(i)}
              className="text-left px-4 py-3 text-sm font-mono transition-all border-l-2"
              style={{
                borderColor: active === i ? 'var(--green)' : 'transparent',
                color: active === i ? 'var(--green)' : 'var(--slate)',
                background: active === i ? 'rgba(100,255,218,0.05)' : 'transparent',
                marginLeft: '-1px',
              }}>
              {e.company}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="pl-8 flex-1">
          <h3 className="font-semibold text-base" style={{ color: 'var(--slate-light)' }}>
            {exp.role}{' '}
            <span style={{ color: 'var(--green)' }}>@ {exp.company}</span>
          </h3>
          <div className="flex items-center gap-3 mt-1 mb-4">
            <span className="font-mono text-xs" style={{ color: 'var(--slate)' }}>{exp.period}</span>
            <span className="tag">{exp.type}</span>
          </div>
          <ul className="space-y-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--slate)' }}>
                <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '2px' }}>▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
