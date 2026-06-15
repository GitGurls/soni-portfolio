import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-20"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>

      <div className="section-heading">
        <span className="section-number font-mono">01.</span>
        <h2 className="text-lg font-semibold" style={{ color: 'var(--slate-light)' }}>About Me</h2>
      </div>

      <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--slate)' }}>
        <p>
          Hey! I'm Soni, a passionate{' '}
          <span style={{ color: 'var(--slate-light)' }}>Full Stack Developer</span> and{' '}
          <span style={{ color: 'var(--slate-light)' }}>B.Tech CSE </span> student from Lucknow,
          currently pursuing my degree with a CGPA of{' '}
          <span style={{ color: 'var(--green)' }}>8.85</span>.
        </p>
        <p>
          I love turning ideas into real products. Whether it's a{' '}
          <span style={{ color: 'var(--slate-light)' }}>real-time multiplayer chess platform</span>{' '}
          with WebSockets or a full-fledged{' '}
          <span style={{ color: 'var(--slate-light)' }}>food ordering system</span>,
          I care deeply about clean code, performance, and user experience.
        </p>
        <p>
          As a{' '}
          <span style={{ color: 'var(--slate-light)' }}>Technical Lead at Zero's Arena</span>,
          I organized and managed hackathons for{' '}
          <span style={{ color: 'var(--green)' }}>1300+ participants</span> across{' '}
          <span style={{ color: 'var(--green)' }}>50+ teams</span>.
      I previously worked as a{' '}
<span style={{ color: 'var(--slate-light)' }}>Frontend Developer at OpennMind</span>{' '}
(until Dec 2025), building scalable UI components.
        </p>
        <p>
          When I'm not coding, I'm exploring new tech, contributing to community initiatives,
          or hunting for the next interesting project to build.
        </p>
      </div>

      {/* Quick facts */}
      <div className="grid grid-cols-2 gap-3 mt-8">
        {[
          { label: 'CGPA', value: '8.85' },
          { label: 'Hackathon Participants Led', value: '1300+' },
          { label: 'Teams Managed', value: '50+' },
          { label: 'Projects Deployed', value: '5+' },
        ].map(f => (
          <div key={f.label} className="p-3 rounded card-hover" style={{ background: 'var(--navy-light)' }}>
            <div className="text-xl font-bold" style={{ color: 'var(--green)' }}>{f.value}</div>
            <div className="text-xs mt-1" style={{ color: 'var(--slate)' }}>{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
