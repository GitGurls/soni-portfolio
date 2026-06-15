import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

function App() {
  // Cursor spotlight effect
  useEffect(() => {
    const spotlight = document.createElement('div')
    spotlight.className = 'spotlight'
    document.body.appendChild(spotlight)

    const handleMouseMove = (e) => {
      spotlight.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(100, 255, 218, 0.05), transparent 80%)`
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Scroll progress bar
    const progressBar = document.getElementById('scroll-progress')
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (progressBar) progressBar.style.width = scrolled + '%'
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (document.body.contains(spotlight)) document.body.removeChild(spotlight)
    }
  }, [])

  return (
    <>
      <div id="scroll-progress" />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#112240',
            color: '#ccd6f6',
            border: '1px solid #495670',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </>
  )
}

export default App
