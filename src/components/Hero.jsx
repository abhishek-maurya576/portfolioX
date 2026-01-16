import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { rafThrottle } from '../utils/performance'

const Hero = React.memo(function Hero({ onCTAClick }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Throttled mouse move handler for better performance
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
      y: [-8, 8, -8],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
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

  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-16 pb-12 bg-transparent relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-600/15 to-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-3xl"></div>
      </motion.div>

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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="text-frost-accent font-semibold mb-4 inline-block cursor-default"
              >
                <motion.span
                  animate={{
                    rotate: [0, 14, -8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                  className="inline-block mr-2"
                >
                  👋
                </motion.span>
                Welcome to my portfolio
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold text-frost-text leading-tight mb-4"
              >
                Hi, I'm{' '}
                <span className="gradient-text inline-block">
                  Abhishek Maurya
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-frost-text-secondary max-w-xl mb-6 leading-relaxed"
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
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary text-white font-semibold shadow-lg overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-tertiary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">
                    View My Work
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
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
                  className="group px-8 py-4 rounded-full border-2 border-silver-drift text-frost-text relative overflow-hidden backdrop-blur-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-700/30 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Contact Me</span>
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-6"
              >
                {[
                  { name: 'GitHub', url: 'https://github.com/abhishek-maurya576' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishekmaurya9118' },
                  { name: 'YouTube', url: 'https://youtube.com/@bforbca' },
                  { name: 'Twitter', url: 'https://x.com/Abhishekm576' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.2,
                      y: -6,
                      color: "var(--primary-600)",
                      textShadow: "0 4px 8px rgba(var(--primary-rgb), 0.3)"
                    }}
                    className="text-frost-text-secondary relative group"
                  >
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                    {social.name}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-xs mx-auto"
                style={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                }}
              >
                {/* Animated decorative background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-secondary-500/20 to-tertiary-500/20 rounded-3xl blur-2xl" />

                {/* Image container with enhanced effects */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden border-4 border-frost-veil shadow-2xl"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(var(--primary-rgb), 0.3)"
                  }}
                >
                  <motion.img
                    src="/profile_img.jpg"
                    alt="Abhishek Maurya"
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Enhanced gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-frost-text/10 to-transparent"
                    whileHover={{ opacity: 0.5 }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Enhanced floating badge */}
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(var(--primary-rgb), 0.4)"
                  }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-secondary text-white px-6 py-3 rounded-full shadow-lg font-semibold cursor-pointer"
                >
                  <span className="mr-2">
                    🚀
                  </span>
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
