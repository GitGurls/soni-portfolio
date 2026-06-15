import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useInView } from 'react-intersection-observer'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields')
      return
    }
    setLoading(true)
    try {
      await axios.post(`${API}/api/contact`, form)
      toast.success('Message sent! I\'ll get back to you soon 🎉')
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error('Something went wrong. Email me directly!')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--navy-light)',
    border: '1px solid var(--slate-dark)',
    borderRadius: '6px',
    padding: '10px 14px',
    color: 'var(--slate-light)',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  }

  return (
    <section id="contact" ref={ref} className="py-20"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>

      <div className="section-heading">
        <span className="section-number font-mono">06.</span>
        <h2 className="text-lg font-semibold" style={{ color: 'var(--slate-light)' }}>Get In Touch</h2>
      </div>

      <p className="text-sm mb-8" style={{ color: 'var(--slate)' }}>
        I'm currently looking for internship opportunities. Whether you have a question,
        a project idea, or just want to say hi — my inbox is always open!
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-xs block mb-2" style={{ color: 'var(--green)' }}>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--green)'}
              onBlur={e => e.target.style.borderColor = 'var(--slate-dark)'}
            />
          </div>
          <div>
            <label className="font-mono text-xs block mb-2" style={{ color: 'var(--green)' }}>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--green)'}
              onBlur={e => e.target.style.borderColor = 'var(--slate-dark)'}
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-xs block mb-2" style={{ color: 'var(--green)' }}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="What's on your mind?"
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--green)'}
            onBlur={e => e.target.style.borderColor = 'var(--slate-dark)'}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="font-mono text-sm px-6 py-3 rounded border transition-all"
          style={{
            color: loading ? 'var(--slate)' : 'var(--green)',
            borderColor: loading ? 'var(--slate-dark)' : 'var(--green)',
            background: 'transparent',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={e => !loading && (e.currentTarget.style.background = 'rgba(100,255,218,0.08)')}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          {loading ? 'Sending...' : 'Send Message →'}
        </button>
      </div>

      {/* Direct contact */}
      <div className="grid grid-cols-3 gap-4 mt-10 pt-8" style={{ borderTop: '1px solid var(--slate-dark)' }}>
        {[
         { label: 'Email', value: 'starsindo3761@gmail.com', href: 'mailto:starsindo3761@gmail.com' },
          { label: 'LinkedIn', value: 'soni-gupta', href: 'https://www.linkedin.com/in/soni-gupta-54b075329' },
          { label: 'GitHub', value: '@GitGurls', href: 'https://github.com/GitGurls' },
        ].map(c => (
          <div key={c.label} className="text-center">
            <div className="font-mono text-xs mb-1" style={{ color: 'var(--slate)' }}>{c.label}</div>
            <a href={c.href} target="_blank" rel="noreferrer"
              className="font-mono text-xs hover-green" style={{ color: 'var(--green)' }}>
              {c.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
