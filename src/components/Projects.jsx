import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = React.memo(function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const projects = [
    {
      title: 'ForensicFlow',
      description: 'Advanced digital forensics platform for analyzing Universal Forensic Data Reports (UFDR). Built for Smart India Hackathon 2025 with AI-powered insights using Google Gemini and OpenAI GPT.',
      tech: ['Django', 'React', 'PostgreSQL', 'Celery', 'TailwindCSS'],
      gradient: 'from-blue-600 to-indigo-600',
      link: 'https://forensicflow.vercel.app/',
    },
    {
      title: 'Student Performance Predictor',
      description: 'ML-powered Django application predicting student performance categories using ensemble methods (Random Forest, Decision Tree, Logistic Regression) with interactive Chart.js visualizations.',
      tech: ['Django', 'scikit-learn', 'Bootstrap', 'Chart.js'],
      gradient: 'from-purple-600 to-pink-600',
      link: 'https://ssp-abhi.onrender.com/',
    },
    {
      title: 'AuraCare - Mental Wellness App',
      description: 'Comprehensive mental wellness Flutter app with liquid glass-morphism UI, AI-driven mood tracking, meditation features, and community support powered by Google Gemini.',
      tech: ['Flutter', 'Firebase', 'Google Gemini', 'Cloud Firestore'],
      gradient: 'from-teal-500 to-emerald-600',
      link: 'https://github.com/abhishek-maurya576/auracare/releases',
    },
    {
      title: 'Linkzy - Real-time Chat App',
      description: 'Modern 1-on-1 chat application with beautiful UI and interactive animations. Features real-time messaging, profile pictures, and seamless user experience.',
      tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'Provider'],
      gradient: 'from-orange-500 to-red-500',
      link: 'https://github.com/abhishek-maurya576/linkzy/releases',
    },
  ]

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
    hidden: { y: 80, opacity: 0, scale: 0.8 },
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-polar-mist via-glacial-pearl to-silver-drift relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-indigo-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
      </motion.div>

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
            Featured <motion.span 
              className="gradient-text"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Projects
            </motion.span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-frost-text-secondary text-lg mb-12 max-w-2xl"
          >
            A collection of my recent work showcasing my skills in web development, AI, and content creation.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  rotateX: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative overflow-hidden rounded-2xl bg-frost-veil border border-silver-drift p-8 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Animated gradient border */}
                <motion.div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                />

                {/* Hover glow effect */}
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                
                <motion.h3 
                  className="text-2xl font-bold text-frost-text mb-4 relative z-10"
                  whileHover={{ 
                    color: "#3b82f6",
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-frost-text-secondary mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + techIndex * 0.05,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 500
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#3b82f6",
                        color: "#ffffff",
                        y: -2
                      }}
                      className="px-3 py-1 text-sm rounded-full bg-glacial-pearl text-frost-accent border border-silver-drift transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    x: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center text-frost-accent hover:text-frost-accent-hover font-semibold relative z-10 group"
                >
                  <span>View Project</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: hoveredProject === index ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.a>

              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
