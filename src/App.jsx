import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gradient-to-br from-polar-mist to-glacial-pearl min-h-screen text-frost-text overflow-x-hidden">
      <Header />
      
      <main>
        <Hero onCTAClick={handleViewWork} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-silver-drift bg-frost-veil">
        <div className="container mx-auto px-6 text-center">
          <p className="text-frost-text-secondary">
            © {new Date().getFullYear()} Abhishek Maurya. Built with React & ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}
