import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { rafThrottle } from '../utils/performance'

const Header = React.memo(function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const sections = useMemo(() => ['hero', 'about', 'skills', 'projects', 'contact'], [])

  const handleScroll = useCallback(
    rafThrottle(() => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      const sectionElements = sections.map(id => document.getElementById(id))

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && scrollPosition >= element.offsetTop - 100) {
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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ${
        scrolled
          ? 'bg-frost-veil/80 backdrop-blur-2xl border-b border-silver-drift/30 shadow-lg shadow-black/20'
          : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="font-display font-bold text-xl gradient-text cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Abhishek Maurya
          </motion.div>

          {/* Pill Navigation */}
          <motion.nav
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-frost-veil/70 backdrop-blur-2xl border border-silver-drift/30 shadow-lg shadow-black/20"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => {
              const isActive = activeSection === item.toLowerCase()
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-frost-veil'
                    : 'text-frost-text-secondary hover:text-frost-text'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-md shadow-primary-600/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.a>
              )
            })}
          </motion.nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(var(--primary-rgb), 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil font-semibold text-sm shadow-md shadow-primary-600/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
})

export default Header
