import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      <Navbar />
      <main className="lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* LEFT — sticky sidebar (desktop only) */}
        {/* <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:py-24 lg:flex lg:flex-col lg:justify-between"> */}
        <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:py-10 lg:flex lg:flex-col lg:justify-between lg:overflow-y-auto">
          <Hero />
        </aside>

        {/* RIGHT — scrollable content */}
        <div className="lg:w-[55%] lg:py-24 lg:ml-auto">
          {/* Mobile hero */}
          <div className="lg:hidden">
            <Hero mobile />
          </div>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}
