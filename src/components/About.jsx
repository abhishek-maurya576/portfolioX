import React from 'react'
import { motion } from 'framer-motion'

const About = React.memo(function About() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
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

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-600/15 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-frost-text mb-6"
          >
            About <motion.span
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Me
            </motion.span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              {[
                "I'm a passionate BCA student at the University of Allahabad, diving deep into the world of software development and technology.",
                "My journey in tech is driven by curiosity and a desire to build meaningful projects. From creating real-time chat applications to exploring AI-powered tools, I love turning ideas into reality through code.",
                "When I'm not coding, you'll find me creating educational content on YouTube, helping fellow students navigate their academic journey, or exploring the latest trends in web development and artificial intelligence."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="text-lg text-frost-text-secondary leading-relaxed cursor-default"
                >
                  {index === 0 ? (
                    <>
                      I'm a passionate BCA student at the{' '}
                      <motion.strong
                        className="text-frost-text"
                        whileHover={{
                          color: "var(--primary-600)",
                          textShadow: "0 0 8px rgba(var(--primary-rgb), 0.3)"
                        }}
                      >
                        University of Allahabad
                      </motion.strong>
                      , diving deep into the world of software development and technology.
                    </>
                  ) : (
                    text
                  )}
                </motion.p>
              ))}
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: "🎓",
                  title: "Education",
                  content: (
                    <div className="text-frost-text-secondary">
                      <p className="font-semibold text-frost-text">Bachelor of Computer Applications (BCA)</p>
                      <p className="text-sm mt-1">University of Allahabad, Prayagraj</p>
                      <p className="text-sm text-frost-text-secondary/80 mt-1">Oct 2023 – Jun 2026</p>
                    </div>
                  )
                },
                {
                  icon: "💼",
                  title: "Work Experience",
                  content: (
                    <div className="text-frost-text-secondary">
                      <p className="font-semibold text-frost-text">Google Students Ambassador</p>
                      <p className="text-sm mt-1">Google | Jul 2025 – Dec 2025</p>
                      <ul className="mt-3 space-y-2 text-sm">
                        <li>• Engaged in tech initiatives and student community programs</li>
                        <li>• Orchestrated 5+ workshops and skill development events, leading to a 20% increase in student engagement with Google technologies on campus</li>
                      </ul>
                    </div>
                  )
                },
                {
                  icon: "💡",
                  title: "Interests",
                  content: (
                    <ul className="text-frost-text-secondary space-y-2">
                      {[
                        "App Development (Android & Web)",
                        "Artificial Intelligence & Machine Learning",
                        "Open Source Contributions",
                        "Educational Content Creation"
                      ].map((interest, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          whileHover={{ x: 10, color: "var(--primary-600)" }}
                          className="cursor-default"
                        >
                          • {interest}
                        </motion.li>
                      ))}
                    </ul>
                  )
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="glass-effect rounded-2xl p-6 group cursor-default"
                >
                  <h3 className="text-xl font-semibold text-frost-text mb-4 flex items-center gap-2">
                    <span className="text-2xl">
                      {card.icon}
                    </span>
                    {card.title}
                  </h3>
                  {card.content}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default About
