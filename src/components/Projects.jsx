import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Projects = React.memo(function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const projects = [
    {
      title: 'ForensicFlow',
      description: 'Advanced digital forensics platform for analyzing Universal Forensic Data Reports (UFDR). Built for Smart India Hackathon 2025 with AI-powered insights using Google Gemini and OpenAI GPT.',
      tech: ['Django', 'React', 'PostgreSQL', 'Celery', 'TailwindCSS'],
      gradient: 'from-primary-600 to-primary-400',
      link: 'https://forensicflow.vercel.app/',
      image: '/project_forensicflow.png',
    },
    {
      title: 'Student Performance Predictor',
      description: 'ML-powered Django application predicting student performance categories using ensemble methods (Random Forest, Decision Tree, Logistic Regression) with interactive Chart.js visualizations.',
      tech: ['Django', 'scikit-learn', 'Bootstrap', 'Chart.js'],
      gradient: 'from-tertiary-500 to-primary-500',
      link: 'https://ssp-abhi.onrender.com/',
      image: '/project_predictor.png',
    },
    {
      title: 'AuraCare - Mental Wellness App',
      description: 'Comprehensive mental wellness Flutter app with liquid glass-morphism UI, AI-driven mood tracking, meditation features, and community support powered by Google Gemini.',
      tech: ['Flutter', 'Firebase', 'Google Gemini', 'Cloud Firestore'],
      gradient: 'from-secondary-500 to-secondary-700',
      link: 'https://github.com/abhishek-maurya576/auracare/releases',
      image: '/project_auracare.png',
    },
    {
      title: 'Linkzy - Real-time Chat App',
      description: 'Modern 1-on-1 chat application with beautiful UI and interactive animations. Features real-time messaging, profile pictures, and seamless user experience.',
      tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'Provider'],
      gradient: 'from-tertiary to-primary-400',
      link: 'https://github.com/abhishek-maurya576/linkzy/releases',
      image: '/project_linkzy.png',
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
    hidden: { y: 80, opacity: 0, scale: 0.9 },
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
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0" />

      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-primary-600/10 to-secondary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-secondary/8 to-tertiary/8 rounded-full blur-3xl" />
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
            className="text-4xl md:text-5xl font-display font-bold text-frost-text mb-4"
          >
            Featured <motion.span
              className="gradient-text"
              whileHover={{
                scale: 1.05,
              }}
            >
              Projects
            </motion.span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6"
          />

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
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative overflow-hidden rounded-2xl bg-glacial-pearl border border-silver-drift/50 cursor-pointer hover:border-primary-600/30 transition-colors duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-glacial-pearl via-glacial-pearl/50 to-transparent" />

                  {/* Gradient top bar */}
                  <motion.div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  {/* Hover glow effect */}
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-primary-500/3 to-transparent rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.h3
                    className="text-2xl font-display font-bold text-frost-text mb-3 relative z-10"
                    whileHover={{
                      color: "var(--primary-400)",
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-frost-text-secondary mb-5 leading-relaxed relative z-10 text-sm"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-5 relative z-10">
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
                          scale: 1.08,
                          backgroundColor: "var(--primary-600)",
                          color: "#09090b",
                          y: -2
                        }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-silver-drift/30 text-frost-text-secondary border border-silver-drift/50 transition-colors"
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
                      scale: 1.03,
                      x: 6
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-sm relative z-10 group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
