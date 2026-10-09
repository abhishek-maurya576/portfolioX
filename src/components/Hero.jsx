import React, { useEffect, useState, useCallback, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { rafThrottle } from '../utils/performance'
import { TubesBackground } from './ui/neon-flow'
import { Sparkles, ArrowRight, Circle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, XIcon } from './ui/social-icons'

// Terminal code lines with syntax highlighting tokens
// Each line is an array of { text, class } objects for inline coloring
const TERMINAL_LINES = [
  [{ text: '$ ', cls: 'syn-prompt' }, { text: 'python introduce.py', cls: 'syn-variable' }],
  [],
  [{ text: 'class ', cls: 'syn-keyword' }, { text: 'Developer', cls: 'syn-class-name' }, { text: ':', cls: 'syn-operator' }],
  [{ text: '    name', cls: 'syn-variable' }, { text: ' = ', cls: 'syn-operator' }, { text: '"Abhishek Maurya"', cls: 'syn-string' }],
  [{ text: '    role', cls: 'syn-variable' }, { text: ' = ', cls: 'syn-operator' }, { text: '"Backend & AI Engineer"', cls: 'syn-string' }],
  [{ text: '    stack', cls: 'syn-variable' }, { text: ' = ', cls: 'syn-operator' }, { text: '["Django", "PyTorch", "React"]', cls: 'syn-string' }],
  [],
  [{ text: '    def ', cls: 'syn-keyword' }, { text: 'hello', cls: 'syn-function' }, { text: '(', cls: 'syn-operator' }, { text: 'self', cls: 'syn-keyword' }, { text: '):', cls: 'syn-operator' }],
  [{ text: '        return ', cls: 'syn-keyword' }, { text: '"Building AI-powered experiences"', cls: 'syn-string' }],
  [],
  [{ text: '>>> ', cls: 'syn-prompt' }, { text: 'dev', cls: 'syn-variable' }, { text: ' = ', cls: 'syn-operator' }, { text: 'Developer', cls: 'syn-class-name' }, { text: '()', cls: 'syn-operator' }],
  [{ text: '>>> ', cls: 'syn-prompt' }, { text: 'dev', cls: 'syn-variable' }, { text: '.', cls: 'syn-operator' }, { text: 'hello', cls: 'syn-function' }, { text: '()', cls: 'syn-operator' }],
  [{ text: "'Building AI-powered experiences'", cls: 'syn-output' }],
]

// Flatten a line's tokens into a single string for character-by-character typing
function flattenLine(tokens) {
  return tokens.map(t => t.text).join('')
}

// Render a partially typed line with syntax highlighting
function renderPartialLine(tokens, charCount) {
  let remaining = charCount
  const result = []
  for (let i = 0; i < tokens.length && remaining > 0; i++) {
    const token = tokens[i]
    const chars = Math.min(remaining, token.text.length)
    result.push(
      <span key={i} className={token.cls}>
        {token.text.slice(0, chars)}
      </span>
    )
    remaining -= chars
  }
  return result
}

const Hero = React.memo(function Hero({ onCTAClick }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Terminal typing state
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [typingDone, setTypingDone] = useState(false)
  const intervalRef = useRef(null)

  // Character-by-character typing effect
  useEffect(() => {
    if (typingDone) return

    const line = TERMINAL_LINES[currentLine]
    const lineText = flattenLine(line)
    const lineLength = lineText.length

    // If it's an empty line, just advance after a short pause
    if (lineLength === 0) {
      const timeout = setTimeout(() => {
        if (currentLine < TERMINAL_LINES.length - 1) {
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
        } else {
          setTypingDone(true)
        }
      }, 100)
      return () => clearTimeout(timeout)
    }

    // Type characters at variable speed
    const baseSpeed = 30
    // Slow down on prompts, speed up on repeated characters
    const speed = lineText.startsWith('$') || lineText.startsWith('>>>')
      ? baseSpeed + 20
      : baseSpeed

    intervalRef.current = setInterval(() => {
      setCurrentChar(prev => {
        const next = prev + 1
        if (next >= lineLength) {
          clearInterval(intervalRef.current)
          // Move to next line after a pause
          setTimeout(() => {
            if (currentLine < TERMINAL_LINES.length - 1) {
              setCurrentLine(prevLine => prevLine + 1)
              setCurrentChar(0)
            } else {
              setTypingDone(true)
            }
          }, lineText.startsWith("'") ? 400 : 150) // longer pause on output line
          return lineLength
        }
        return next
      })
    }, speed)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentLine, typingDone])

  const handleMouseMove = useCallback(
    rafThrottle((e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }),
    []
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      },
    },
  }

  const magneticVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/abhishek-maurya576', icon: <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishekmaurya9118', icon: <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: 'YouTube', url: 'https://youtube.com/@bforbca', icon: <YouTubeIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: 'Twitter', url: 'https://x.com/Abhishekm576', icon: <XIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ]

  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-20 pb-12 bg-transparent relative overflow-hidden">
      {/* Neon Flow Background - subtle */}
      <TubesBackground
        className="!absolute inset-0 !min-h-0 opacity-30"
        enableClickInteraction={true}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-[1]" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-w-0">
            {/* Text Content Column */}
            <div className="min-w-0 w-full">
              <motion.div
                variants={itemVariants}
                className="text-primary-400 font-medium mb-3 sm:mb-4 inline-flex items-center gap-2 cursor-default"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-400" />
                <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-frost-text leading-[1.15] mb-4 sm:mb-5 tracking-tight break-words"
              >
                Hi, I'm{' '}
                <span className="gradient-text block sm:inline-block">
                  Abhishek Maurya
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-frost-text-secondary max-w-xl mb-6 sm:mb-8 leading-relaxed"
              >
                BCA Graduate & aspiring Graduate Engineer Trainee. I build backend systems, AI/ML pipelines, and modern digital experiences.
              </motion.p>

              {/* Responsive Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                <motion.button
                  onClick={onCTAClick}
                  variants={magneticVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-primary-600/20 overflow-hidden flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-tertiary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                    View My Work
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.a
                  href="#contact"
                  variants={magneticVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="group px-5 py-3 sm:px-8 sm:py-4 rounded-full border border-silver-drift text-frost-text text-xs sm:text-sm md:text-base relative overflow-hidden backdrop-blur-sm hover:border-primary-600/50 transition-colors duration-300 flex items-center justify-center flex-1 sm:flex-none whitespace-nowrap"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-primary-800/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Contact Me</span>
                </motion.a>

                <motion.a
                  href="/Abhishek_Maurya_Resume_.pdf"
                  download
                  variants={magneticVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="group px-5 py-3 sm:px-8 sm:py-4 rounded-full border border-primary-600/40 text-primary-400 text-xs sm:text-sm md:text-base relative overflow-hidden backdrop-blur-sm hover:border-primary-500 hover:bg-primary-600/10 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  {/* Download icon SVG */}
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="relative z-10">Resume</span>
                </motion.a>
              </motion.div>

              {/* Social Links with SVG Icons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.08, duration: 0.4 }}
                    whileHover={{
                      scale: 1.12,
                      y: -3,
                    }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-silver-drift/60 flex items-center justify-center text-frost-text-secondary hover:text-primary-400 hover:border-primary-600/50 transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Interactive Terminal Column */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center min-w-0 w-full mt-6 md:mt-0"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-lg min-w-0"
                style={{
                  x: mousePosition.x * 0.3,
                  y: mousePosition.y * 0.3,
                }}
              >
                {/* Glow behind terminal */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary-500/20 via-primary-600/10 to-tertiary-500/10 rounded-2xl blur-2xl opacity-60 pointer-events-none" />

                {/* Terminal Window */}
                <div className="terminal-window relative w-full overflow-hidden">
                  {/* macOS-style chrome */}
                  <div className="terminal-chrome px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <div className="terminal-dot terminal-dot-close" />
                      <div className="terminal-dot terminal-dot-minimize" />
                      <div className="terminal-dot terminal-dot-maximize" />
                    </div>
                    <div className="flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-1">
                      {/* Small avatar in title bar */}
                      <img
                        src="/profile_img.png"
                        alt="Abhishek"
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-silver-drift/40 shrink-0"
                      />
                      <span className="text-[11px] sm:text-xs text-frost-text-secondary/60 font-medium truncate">
                        introduce.py — abhishek@dev
                      </span>
                    </div>
                    {/* Spacer for centering */}
                    <div className="w-8 sm:w-[52px] shrink-0" />
                  </div>

                  {/* Terminal Body */}
                  <div className="terminal-body terminal-scanline">
                    {TERMINAL_LINES.map((line, lineIndex) => {
                      if (lineIndex > currentLine) return null

                      const lineText = flattenLine(line)

                      // Empty lines
                      if (lineText.length === 0 && lineIndex <= currentLine) {
                        return <div key={lineIndex} className="h-[1.5em] sm:h-[1.7em]" />
                      }

                      // Fully typed lines
                      if (lineIndex < currentLine) {
                        return (
                          <div key={lineIndex} className="whitespace-pre overflow-x-auto scrollbar-none">
                            {line.map((token, i) => (
                              <span key={i} className={token.cls}>{token.text}</span>
                            ))}
                          </div>
                        )
                      }

                      // Currently typing line
                      return (
                        <div key={lineIndex} className="whitespace-pre overflow-x-auto scrollbar-none">
                          {renderPartialLine(line, currentChar)}
                          {!typingDone && <span className="terminal-cursor" />}
                        </div>
                      )
                    })}

                    {/* Show blinking cursor at end when done */}
                    {typingDone && (
                      <div className="whitespace-pre mt-[1.5em] sm:mt-[1.7em]">
                        <span className="syn-prompt">{'>>> '}</span>
                        <span className="terminal-cursor" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating badge — Available for Work */}
                <motion.div
                  animate={{
                    y: [-4, 4, -4],
                    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(52, 211, 153, 0.25)"
                  }}
                  className="absolute -bottom-2.5 right-1 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full shadow-lg shadow-emerald-600/30 font-semibold text-xs sm:text-sm cursor-pointer flex items-center gap-1.5 sm:gap-2 border border-emerald-400/30"
                >
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-100" />
                  </span>
                  <span>Available for Work</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default Hero
