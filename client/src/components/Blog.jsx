// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { useInView } from 'react-intersection-observer'

// const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// // Fallback posts shown when backend not connected
// const FALLBACK_POSTS = [
//   {
//     _id: '1',
//     title: 'Building a Real-time Chess App with WebSockets',
//     excerpt: 'How I built a multiplayer chess platform using Node.js WebSockets, React, and Turborepo monorepo architecture — and fixed an infinite reconnect loop bug.',
//     tags: ['WebSockets', 'Node.js', 'React'],
//     createdAt: new Date('2025-05-15').toISOString(),
//     readTime: '5 min read',
//   },
//   {
//     _id: '2',
//     title: 'CORS, ENV Variables & Deployment — Lessons from FOODIE-Frenzy',
//     excerpt: 'Everything that went wrong (and right) while deploying a MERN stack food ordering app on Vercel + Render. Real lessons from real bugs.',
//     tags: ['MERN', 'Deployment', 'Vercel', 'Render'],
//     createdAt: new Date('2025-06-01').toISOString(),
//     readTime: '4 min read',
//   },
//   {
//     _id: '3',
//     title: 'AnonShield — Building Anonymous Auth at a Hackathon',
//     excerpt: 'How our team built an anonymous identity platform with AES-256-GCM encryption and ZK-proof concepts in 24 hours at Codorra Hackathon 2026.',
//     tags: ['Security', 'Hackathon', 'Encryption'],
//     createdAt: new Date('2026-03-10').toISOString(),
//     readTime: '6 min read',
//   },
// ]

// export default function Blog() {
//   const [posts, setPosts] = useState(FALLBACK_POSTS)
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

//   useEffect(() => {
//     axios.get(`${API}/api/blog`)
//       .then(r => { if (r.data?.length) setPosts(r.data) })
//       .catch(() => {/* use fallback */})
//   }, [])

//   return (
//     <section id="blog" ref={ref} className="py-20"
//       style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.5s ease' }}>

//       <div className="section-heading">
//         <span className="section-number font-mono">05.</span>
//         <h2 className="text-lg font-semibold" style={{ color: 'var(--slate-light)' }}>Blog</h2>
//       </div>

//       <div className="space-y-4">
//         {posts.map((post, i) => (
//           <Link key={post._id} to={`/blog/${post._id}`}
//             className="block rounded-lg p-5 card-hover"
//             style={{ background: 'var(--navy-light)', textDecoration: 'none',
//               opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(10px)',
//               transition: `all 0.4s ease ${i * 0.1}s` }}>
//             <div className="flex items-start justify-between gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-sm mb-1 hover-green" style={{ color: 'var(--slate-light)' }}>
//                   {post.title}
//                 </h3>
//                 <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--slate)' }}>
//                   {post.excerpt}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {post.tags?.map(t => <span key={t} className="tag">{t}</span>)}
//                 </div>
//               </div>
//               <div className="text-right flex-shrink-0">
//                 <div className="font-mono text-xs" style={{ color: 'var(--slate)' }}>
//                   {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                 </div>
//                 {post.readTime && (
//                   <div className="font-mono text-xs mt-1" style={{ color: 'var(--slate-dark)' }}>
//                     {post.readTime}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }




import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API}/api/blog/${id}`)
      .then(r => setPost(r.data))
      .catch(console.error)
      .finally(() => setLoading(false))
    window.scrollTo(0, 0)
  }, [id])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--navy)' }}>
      <div className="text-center">
        <div className="font-mono text-sm mb-2" style={{ color: 'var(--green)' }}>Loading post</div>
        <div className="flex gap-1 justify-center">
          {[0,1,2].map(i => (
            <span key={i} className="inline-block w-2 h-2 rounded-full" style={{
              background: 'var(--green)',
              animation: `blink 1s ease ${i * 0.2}s infinite`
            }} />
          ))}
        </div>
      </div>
    </div>
  )

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: 'var(--navy)' }}>
      <p className="text-5xl">404</p>
      <p className="font-mono" style={{ color: 'var(--slate-light)' }}>Post not found.</p>
      <Link to="/#blog" style={{ color: 'var(--green)' }} className="font-mono text-sm hover:underline">
        ← Back to Blog
      </Link>
    </div>
  )

  // Parse content — split by \n\n for paragraphs, handle ## headings, ` code`
  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      // Heading ##
      if (block.startsWith('## ')) {
        return (
          <h2 key={i} className="text-xl font-bold mt-10 mb-4" style={{ color: 'var(--slate-light)' }}>
            {block.replace('## ', '')}
          </h2>
        )
      }
      // Heading ###
      if (block.startsWith('### ')) {
        return (
          <h3 key={i} className="text-lg font-semibold mt-8 mb-3" style={{ color: 'var(--slate-light)' }}>
            {block.replace('### ', '')}
          </h3>
        )
      }
      // Code block ```
      if (block.startsWith('```')) {
        const code = block.replace(/```[\w]*/g, '').trim()
        return (
          <pre key={i} className="rounded-lg p-4 my-6 overflow-x-auto font-mono text-sm"
            style={{ background: 'var(--navy-light)', color: 'var(--green)', border: '1px solid var(--slate-dark)' }}>
            <code>{code}</code>
          </pre>
        )
      }
      // Bullet list
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter(l => l.startsWith('- '))
        return (
          <ul key={i} className="space-y-2 my-4 pl-2">
            {items.map((item, j) => (
              <li key={j} className="flex gap-3 text-sm" style={{ color: 'var(--slate)' }}>
                <span style={{ color: 'var(--green)', flexShrink: 0 }}>▹</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, `<strong style="color:var(--slate-light)">$1</strong>`) }} />
              </li>
            ))}
          </ul>
        )
      }
      // Blockquote
      if (block.startsWith('> ')) {
        return (
          <blockquote key={i} className="pl-4 py-2 my-4 italic text-sm"
            style={{ borderLeft: '3px solid var(--green)', color: 'var(--slate)', background: 'rgba(100,255,218,0.04)' }}>
            {block.replace('> ', '')}
          </blockquote>
        )
      }
      // Normal paragraph — bold support
      return (
        <p key={i} className="text-sm leading-relaxed my-4" style={{ color: 'var(--slate)' }}
          dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, `<strong style="color:var(--slate-light)">$1</strong>`) }} />
      )
    })
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      {/* Scroll progress */}
      <div id="scroll-progress" style={{ position: 'fixed', top: 0, left: 0, height: '2px', background: 'var(--green)', zIndex: 9999, width: '0%' }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{ background: 'rgba(10,25,47,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--slate-dark)' }}>
        <Link to="/" className="font-mono text-sm" style={{ color: 'var(--green)' }}>soni.dev</Link>
        <Link to="/#blog" className="font-mono text-xs flex items-center gap-2 hover-green" style={{ color: 'var(--slate)' }}>
          ← Back to Blog
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-16">

        {/* Cover image */}
        {post.image && (
          <div className="rounded-xl overflow-hidden mb-10" style={{ border: '1px solid var(--slate-dark)' }}>
            <img src={post.image} alt={post.title} className="w-full object-cover" style={{ maxHeight: '400px' }} />
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 font-mono text-xs" style={{ color: 'var(--slate)' }}>
          <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span style={{ color: 'var(--slate-dark)' }}>·</span>
          <span style={{ color: 'var(--green)' }}>{post.readTime || '5 min read'}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 leading-tight" style={{ color: 'var(--slate-light)' }}>
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10 pb-8" style={{ borderBottom: '1px solid var(--slate-dark)' }}>
          {post.tags?.map(tag => <span key={tag} className="tag">#{tag}</span>)}
        </div>

        {/* Content */}
        <div className="blog-content">
          {renderContent(post.content)}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid var(--slate-dark)' }}>
          <div className="flex items-center gap-3">
            <img src="/soni-pro.jpeg" alt="Soni Gupta" className="w-10 h-10 rounded-full object-cover object-center"
              style={{ border: '1px solid var(--green)' }} />
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--slate-light)' }}>Soni Gupta</div>
              <div className="font-mono text-xs" style={{ color: 'var(--slate)' }}>Full Stack Developer</div>
            </div>
          </div>
          <Link to="/#blog" className="font-mono text-xs hover-green" style={{ color: 'var(--green)' }}>
            ← More Posts
          </Link>
        </div>

      </article>
    </div>
  )
}