import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './ui/social-icons'

// Category filter tabs
const CATEGORIES = ['All', 'AI & ML', 'Backend & Web', 'Mobile']

// Badge color mapping per project gradient
const BADGE_COLORS = {
  'from-primary-500 to-tertiary-500': '',
  'from-emerald-500 to-primary-500': 'tech-badge-emerald',
  'from-primary-600 to-primary-400': '',
  'from-tertiary-500 to-primary-500': 'tech-badge-coral',
  'from-secondary-500 to-secondary-700': 'tech-badge-teal',
  'from-tertiary to-primary-400': 'tech-badge-coral',
}

const PROJECTS_DATA = [
  {
    id: 'pronunex',
    title: 'Pronunex',
    category: 'AI & ML',
    flagshipBadge: 'Infosys AI Internship',
    description: 'AI-driven pronunciation improvement platform with phoneme-level speech analysis using Wav2Vec2 and cosine similarity scoring. Features adaptive practice, real-time feedback, and interactive progress dashboards.',
    tech: ['React', 'Django', 'PostgreSQL', 'Wav2Vec2', 'AI/NLP'],
    gradient: 'from-primary-500 to-tertiary-500',
    liveUrl: 'https://pronunex.iabhishek.in',
    githubUrl: 'https://github.com/abhishek-maurya576',
    image: '/project_pronunex.png',
  },
  {
    id: 'agrivision',
    title: 'AgriVision',
    category: 'AI & ML',
    flagshipBadge: 'Hackathon Winner 2025',
    description: 'Gen AI Hackathon 2025 Winner — AI-powered crop disease detection platform. Engineered a custom + LLM pipeline converting crop-disease predictions into natural-language treatment recommendations.',
    tech: ['Flask', 'LLM', 'Gen AI', 'Python'],
    gradient: 'from-emerald-500 to-primary-500',
    liveUrl: null,
    githubUrl: 'https://github.com/abhishek-maurya576',
    image: '/project_agrivision.png',
  },
  {
    id: 'forensicflow',
    title: 'ForensicFlow',
    category: 'Backend & Web',
    flagshipBadge: 'Smart India Hackathon',
    description: 'Advanced digital forensics platform for analyzing Universal Forensic Data Reports (UFDR). Built for Smart India Hackathon 2025 with AI-powered insights using Google Gemini and OpenAI GPT.',
    tech: ['Django', 'React', 'PostgreSQL', 'Celery', 'TailwindCSS'],
    gradient: 'from-primary-600 to-primary-400',
    liveUrl: 'https://forensicflow.vercel.app/',
    githubUrl: 'https://github.com/abhishek-maurya576',
    image: '/project_forensicflow.png',
  },
  {
    id: 'predictor',
    title: 'Student Performance Predictor',
    category: 'Backend & Web',
    flagshipBadge: null,
    description: 'ML-powered Django application predicting student performance categories using ensemble methods (Random Forest, Decision Tree, Logistic Regression) with interactive Chart.js visualizations.',
    tech: ['Django', 'scikit-learn', 'Bootstrap', 'Chart.js'],
    gradient: 'from-tertiary-500 to-primary-500',
    liveUrl: 'https://ssp-abhi.onrender.com/',
    githubUrl: 'https://github.com/abhishek-maurya576',
    image: '/project_predictor.png',
  },
  {
    id: 'auracare',
    title: 'AuraCare - Mental Wellness App',
    category: 'Mobile',
    flagshipBadge: 'Gemini AI Powered',
    description: 'Comprehensive mental wellness Flutter app with liquid glass-morphism UI, AI-driven mood tracking, meditation features, and community support powered by Google Gemini.',
    tech: ['Flutter', 'Firebase', 'Google Gemini', 'Cloud Firestore'],
    gradient: 'from-secondary-500 to-secondary-700',
    liveUrl: 'https://github.com/abhishek-maurya576/auracare/releases',
    githubUrl: 'https://github.com/abhishek-maurya576/auracare',
    image: '/project_auracare.png',
  },
  {
    id: 'linkzy',
    title: 'Linkzy - Real-time Chat App',
    category: 'Mobile',
    flagshipBadge: null,
    description: 'Modern 1-on-1 chat application with responsive UI and interactive animations. Features real-time messaging, profile pictures, and seamless user experience.',
    tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'Provider'],
    gradient: 'from-tertiary to-primary-400',
    liveUrl: 'https://github.com/abhishek-maurya576/linkzy/releases',
    githubUrl: 'https://github.com/abhishek-maurya576/linkzy',
    image: '/project_linkzy.png',
  },
]

const Projects = React.memo(function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  // Filter project cards according to active category pill
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA
    return PROJECTS_DATA.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Section divider line */}
      <div className="section-divider absolute top-0" />

      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-primary-600/10 to-secondary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-secondary/8 to-tertiary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-frost-text mb-4"
          >
            Featured{' '}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
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
            className="text-frost-text-secondary text-lg mb-8 max-w-2xl leading-relaxed"
          >
            Production applications and AI pipelines engineered for scalability, real-world utility, and clean architecture.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isSelected
                      ? 'text-frost-veil'
                      : 'text-frost-text-secondary hover:text-frost-text border border-silver-drift/50 hover:border-primary-600/40 bg-frost-veil/40 backdrop-blur-md'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-md shadow-primary-600/25"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              )
            })}
          </motion.div>

          {/* Responsive Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const badgeClass = BADGE_COLORS[project.gradient] || ''

                return (
                  <motion.article
                    key={project.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.35, ease: 'easeOut' },
                    }}
                    className="group relative overflow-hidden rounded-2xl bg-glacial-pearl border border-silver-drift/50 hover:border-primary-600/40 transition-colors duration-300 flex flex-col justify-between"
                  >
                    {/* Top Media Area */}
                    <div>
                      <div className="relative h-52 overflow-hidden bg-frost-veil/70">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-glacial-pearl via-glacial-pearl/40 to-transparent" />

                        {/* Top Accent Gradient Bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />

                        {/* Flagship Badge (Award/Internship) */}
                        {project.flagshipBadge && (
                          <div className="absolute top-3 right-3 z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-frost-veil/85 backdrop-blur-md border border-primary-500/40 text-primary-400 shadow-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                              {project.flagshipBadge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Area */}
                      <div className="p-6 pt-3">
                        <motion.h3
                          className="text-2xl font-display font-bold text-frost-text mb-3"
                          whileHover={{ color: 'var(--primary-400)' }}
                        >
                          {project.title}
                        </motion.h3>

                        <p className="text-frost-text-secondary mb-5 leading-relaxed text-sm">
                          {project.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`tech-badge ${badgeClass}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dual Action Buttons Footer */}
                    <div className="px-6 pb-6 pt-2 border-t border-silver-drift/20 flex flex-wrap items-center gap-3">
                      {/* Live Demo or Release Link */}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil font-semibold text-xs shadow-md shadow-primary-600/20 hover:shadow-lg transition-all"
                        >
                          <span>{project.category === 'Mobile' ? 'Download APK' : 'Live Demo'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      {/* Source Code GitHub Link */}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-silver-drift/70 bg-white/5 hover:bg-white/10 text-frost-text text-xs font-semibold hover:border-primary-600/40 transition-colors"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </motion.a>
                      )}
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default Projects
