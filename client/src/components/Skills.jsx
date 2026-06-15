import { useInView } from 'react-intersection-observer'

const SKILLS = {
  Frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion', 'Vite'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets (ws)', 'JWT', 'MVC Architecture'],
  Database: ['MongoDB', 'Mongoose', 'Supabase'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Turborepo'],
  Deploy: ['Vercel', 'Render', 'MongoDB Atlas'],
  'CS Fundamentals': ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="py-20"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>

      <div className="section-heading">
        <span className="section-number font-mono">04.</span>
        <h2 className="text-lg font-semibold" style={{ color: 'var(--slate-light)' }}>Skills</h2>
      </div>

      <div className="space-y-6">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--green)' }}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="tag text-xs">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
