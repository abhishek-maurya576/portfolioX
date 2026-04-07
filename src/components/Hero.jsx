import React, { useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { rafThrottle } from '../utils/performance'
import { TubesBackground } from './ui/neon-flow'
import { Sparkles, ArrowRight, Circle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, XIcon } from './ui/social-icons'

const Hero = React.memo(function Hero({ onCTAClick }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

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
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [-6, 6, -6],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const magneticVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/abhishek-maurya576', icon: <GitHubIcon className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishekmaurya9118', icon: <LinkedInIcon className="w-5 h-5" /> },
    { name: 'YouTube', url: 'https://youtube.com/@bforbca', icon: <YouTubeIcon className="w-5 h-5" /> },
    { name: 'Twitter', url: 'https://x.com/Abhishekm576', icon: <XIcon className="w-5 h-5" /> },
  ]

  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-16 pb-12 bg-transparent relative overflow-hidden">
      {/* Neon Flow Background - subtle */}
      <TubesBackground
        className="!absolute inset-0 !min-h-0 opacity-30"
        enableClickInteraction={true}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-[1]" />

      <motion.div
        className="container mx-auto px-6 py-12 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="text-primary-400 font-medium mb-4 inline-flex items-center gap-2 cursor-default"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm tracking-widest uppercase">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-frost-text leading-[1.1] mb-5 tracking-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text inline-block">
                  Abhishek Maurya
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-frost-text-secondary max-w-xl mb-8 leading-relaxed"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  BCA student & aspiring Software Engineer.
                </motion.span>{' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  I build modern digital experiences with clean code and thoughtful design.
                </motion.span>
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  onClick={onCTAClick}
                  variants={magneticVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil font-semibold shadow-lg shadow-primary-600/20 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-tertiary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  className="group px-8 py-4 rounded-full border border-silver-drift text-frost-text relative overflow-hidden backdrop-blur-sm hover:border-primary-600/50 transition-colors duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-primary-800/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Contact Me</span>
                </motion.a>
              </motion.div>

              {/* Social Links with SVG Icons */}
              <motion.div
                variants={itemVariants}
                className="flex gap-3 mt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                    }}
                    className="w-10 h-10 rounded-full border border-silver-drift/60 flex items-center justify-center text-frost-text-secondary hover:text-primary-400 hover:border-primary-600/50 transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-sm"
                style={{
                  x: mousePosition.x * 0.3,
                  y: mousePosition.y * 0.3,
                }}
              >
                {/* Glow ring behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500/30 via-primary-600/20 to-tertiary-500/20 rounded-3xl blur-2xl opacity-60" />

                {/* Image container */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden border border-silver-drift/50 shadow-2xl shadow-black/50"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(var(--primary-rgb), 0.2)"
                  }}
                >
                  <motion.img
                    src="/profile_img.png"
                    alt="Abhishek Maurya"
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-frost-veil/30 via-transparent to-transparent" />
                </motion.div>

                {/* Floating badge - premium, no emoji */}
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(var(--primary-rgb), 0.3)"
                  }}
                  className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil px-5 py-2.5 rounded-full shadow-lg shadow-primary-600/30 font-medium text-sm cursor-pointer flex items-center gap-2"
                >
                  <Circle className="w-2.5 h-2.5 fill-current animate-pulse" />
                  Available for Work
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
