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
  }, [id])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--navy)' }}>
      <span className="font-mono text-green-accent" style={{ color: 'var(--green)' }}>Loading...</span>
    </div>
  )

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--navy)' }}>
      <p style={{ color: 'var(--slate-light)' }} className="text-xl mb-4">Post not found.</p>
      <Link to="/" style={{ color: 'var(--green)' }} className="font-mono text-sm hover:underline">← Back home</Link>
    </div>
  )

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/#blog" style={{ color: 'var(--green)' }} className="font-mono text-sm hover:underline mb-8 block">
          ← Back to Blog
        </Link>
        <span className="font-mono text-xs" style={{ color: 'var(--slate)' }}>{new Date(post.createdAt).toLocaleDateString()}</span>
        <h1 className="text-3xl font-bold mt-2 mb-4" style={{ color: 'var(--slate-light)' }}>{post.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="prose prose-invert max-w-none" style={{ color: 'var(--slate)' }}
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
        />
      </div>
    </div>
  )
}
