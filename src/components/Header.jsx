import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { rafThrottle } from '../utils/performance'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, XIcon } from './ui/social-icons'

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const SOCIAL_LINKS = [
  { icon: <GitHubIcon className="w-4 h-4" />, url: 'https://github.com/abhishek-maurya576', label: 'GitHub' },
  { icon: <LinkedInIcon className="w-4 h-4" />, url: 'https://www.linkedin.com/in/abhishekmaurya9118', label: 'LinkedIn' },
  { icon: <YouTubeIcon className="w-4 h-4" />, url: 'https://youtube.com/@bforbca', label: 'YouTube' },
  { icon: <XIcon className="w-4 h-4" />, url: 'https://x.com/Abhishekm576', label: 'Twitter' },
]

const Header = React.memo(function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = useMemo(() => ['hero', 'about', 'skills', 'projects', 'contact'], [])

  // Throttle scroll listener to keep 60 FPS on lower-tier hardware
  const handleScroll = useCallback(
    rafThrottle(() => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      const sectionElements = sections.map(id => document.getElementById(id))

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && scrollPosition >= element.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }),
    [sections]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open to prevent background jitter
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 py-3.5 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? 'bg-frost-veil/85 backdrop-blur-2xl border-b border-silver-drift/40 shadow-lg shadow-black/25'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="font-display font-bold text-xl gradient-text cursor-pointer select-none"
            onClick={() => {
              setMobileMenuOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Abhishek Maurya
          </motion.div>

          {/* Desktop Navigation Pills */}
          <motion.nav
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-frost-veil/70 backdrop-blur-2xl border border-silver-drift/30 shadow-lg shadow-black/20"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-frost-veil'
                      : 'text-frost-text-secondary hover:text-frost-text'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionPill"
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-md shadow-primary-600/20"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              )
            })}
          </motion.nav>

          {/* Desktop Actions: Resume & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/Abhishek_Maurya_Resume_.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-silver-drift/50 text-frost-text-secondary hover:text-primary-400 hover:border-primary-600/40 text-sm font-medium transition-all duration-300"
            >
              {/* Premium Download SVG Icon */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(var(--primary-rgb), 0.25)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil font-semibold text-sm shadow-md shadow-primary-600/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            whileTap={{ scale: 0.92 }}
            className="md:hidden w-11 h-11 rounded-xl border border-silver-drift/50 bg-frost-veil/60 backdrop-blur-lg flex items-center justify-center text-frost-text hover:text-primary-400 hover:border-primary-600/40 transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              {/* Top Bar */}
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              {/* Middle Bar */}
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`}
              />
              {/* Bottom Bar */}
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-frost-veil/95 backdrop-blur-2xl border-b border-silver-drift/40 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.25 }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-600/15 text-primary-400 border border-primary-600/30'
                          : 'text-frost-text-secondary hover:text-frost-text hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary-400 shadow-sm shadow-primary-500/50" />
                      )}
                    </motion.a>
                  )
                })}
              </nav>

              {/* Action Buttons: Resume + CTA */}
              <div className="pt-2 border-t border-silver-drift/30 flex flex-col gap-3">
                <a
                  href="/Abhishek_Maurya_Resume_.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-silver-drift/60 text-frost-text text-sm font-medium hover:border-primary-500/50 hover:bg-primary-600/10 transition-colors"
                >
                  <svg className="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil text-sm font-semibold shadow-md shadow-primary-600/20"
                >
                  Get in Touch
                </a>
              </div>

              {/* Mobile Social Strip */}
              <div className="pt-2 flex items-center justify-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-silver-drift/50 flex items-center justify-center text-frost-text-secondary hover:text-primary-400 hover:border-primary-600/50 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
})

export default Header
