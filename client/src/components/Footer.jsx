export default function Footer() {
  return (
    <footer className="py-8 text-center" style={{ borderTop: '1px solid var(--slate-dark)' }}>
      <p className="font-mono text-xs" style={{ color: 'var(--slate-dark)' }}>
        Designed & Built by{' '}
        <span style={{ color: 'var(--green)' }}>Soni Gupta</span>
      </p>
      <p className="font-mono text-xs mt-1" style={{ color: 'var(--slate-dark)' }}>
        React · Node.js · MongoDB · Deployed on Vercel & Render
      </p>
    </footer>
  )
}
