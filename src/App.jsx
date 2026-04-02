import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { DottedSurface } from './components/ui/dotted-surface'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, XIcon } from './components/ui/social-icons'

export default function App() {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: <GitHubIcon className="w-4 h-4" />, url: 'https://github.com/abhishek-maurya576', label: 'GitHub' },
    { icon: <LinkedInIcon className="w-4 h-4" />, url: 'https://www.linkedin.com/in/abhishekmaurya9118', label: 'LinkedIn' },
    { icon: <YouTubeIcon className="w-4 h-4" />, url: 'https://youtube.com/@bforbca', label: 'YouTube' },
    { icon: <XIcon className="w-4 h-4" />, url: 'https://x.com/Abhishekm576', label: 'Twitter' },
  ]

  return (
    <div className="bg-gradient-to-br from-polar-mist to-glacial-pearl min-h-screen text-frost-text overflow-x-hidden relative">
      <DottedSurface />
      <Header />

      <main className="relative z-10">
        <Hero onCTAClick={handleViewWork} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-silver-drift/30 bg-frost-veil/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <motion.p
                className="font-display font-bold text-lg gradient-text"
                whileHover={{ scale: 1.02 }}
              >
                Abhishek Maurya
              </motion.p>
              <p className="text-frost-text-secondary text-sm mt-2">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-frost-text-secondary hover:text-primary-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex justify-end gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-silver-drift/50 flex items-center justify-center text-frost-text-secondary hover:text-primary-400 hover:border-primary-600/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-frost-text-secondary text-sm">
              &copy; {new Date().getFullYear()} Abhishek Maurya. All rights reserved.
            </p>
            <p className="text-frost-text-secondary/60 text-xs flex items-center gap-1.5">
              Built with React &
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
