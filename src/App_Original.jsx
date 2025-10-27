import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AvatarScene from './components/AvatarScene'

export default function App() {
  const scrollY = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Simple scroll tracking
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-dark-bg min-h-screen text-white overflow-x-hidden">
      <Header />
      
      <main>
        <Hero onCTAClick={handleViewWork} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Fixed 3D Avatar Canvas - Desktop Only */}
      {mounted && (
        <div className="pointer-events-auto fixed right-8 top-32 w-[420px] h-[520px] hidden lg:block z-40">
          <AvatarScene scrollY={scrollY} />
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Abhishek Maurya. Built with React, Three.js & ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}
