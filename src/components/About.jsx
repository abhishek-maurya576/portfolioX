import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Lightbulb } from 'lucide-react'

// Key impact metrics for instant recruiter evaluation
const IMPACT_METRICS = [
  {
    value: '8.29',
    unit: 'CGPA',
    label: 'Academic Standing',
    detail: 'Univ. of Allahabad (BCA)',
  },
  {
    value: '6+',
    unit: 'Shipped',
    label: 'Production Systems',
    detail: 'AI/ML, Web & Mobile',
  },
  {
    value: '1st',
    unit: 'Place',
    label: 'Hackathon Winner',
    detail: 'Gen AI Hackathon 2025',
  },
  {
    value: '400+',
    unit: 'Subs',
    label: 'Tech Community',
    detail: 'B for BCA YouTube Creator',
  },
]

// Timeline data — experience entries in chronological order (newest first)
const TIMELINE_ENTRIES = [
  {
    title: 'AI Intern / Trainee',
    org: 'Infosys Springboard',
    date: 'Jan 2026 – Mar 2026',
    bullets: [
      'Built backend APIs and NLP pipelines for Pronunex — an AI pronunciation assessment platform',
      'Implemented audio preprocessing and phoneme alignment using Python, Whisper, and Hugging Face Transformers',
      'Wrote unit tests with pytest to ensure reliability of scoring pipelines',
    ],
  },
  {
    title: 'Google Students Ambassador',
    org: 'Google',
    date: 'Jul 2025 – Dec 2025',
    bullets: [
      'Directed 5+ technical workshops on Google ecosystem technologies across campus',
      'Managed community engagement across CMP Degree College, boosting student participation',
    ],
  },
  {
    title: 'Git & GitHub Workshop — Speaker',
    org: 'CMP Degree College, Prayagraj',
    date: '17 Apr 2025',
    bullets: [
      'Conducted an offline workshop for 60–70 students covering version control, branching, PRs, and collaborative workflows',
    ],
  },
]

const About = React.memo(function About() {
  // Scroll-linked timeline line animation
  const timelineRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-600/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-frost-text mb-4"
          >
            About{' '}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Me
            </motion.span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-12"
          />

          {/* Top section: Profile Image + Intro */}
          <div className="grid md:grid-cols-12 gap-10 mt-8 mb-12">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-full max-w-xs"
              >
                {/* Glow ring behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500/30 via-primary-600/20 to-tertiary-500/20 rounded-3xl blur-2xl opacity-60" />

                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border border-silver-drift/50 shadow-2xl shadow-black/50">
                  <motion.img
                    src="/profile_img.png"
                    alt="Abhishek Maurya"
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-frost-veil/30 via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>

            {/* Intro paragraphs + Education */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 space-y-6"
            >
              <p className="text-lg text-frost-text-secondary leading-relaxed cursor-default">
                BCA graduate with hands-on experience in{' '}
                <strong className="text-frost-text font-semibold hover:text-primary-400 transition-colors">
                  backend development, AI/ML pipelines, and full-stack software engineering
                </strong>
                . Focused on building reliable REST APIs, speech and NLP models, and production-ready applications.
              </p>

              <p className="text-lg text-frost-text-secondary leading-relaxed cursor-default">
                Engineered Pronunex during an Infosys AI internship and won 1st Place at the Gen AI Hackathon 2025 with AgriVision. Dedicated to writing clean, maintainable code with robust system architectures.
              </p>

              <p className="text-lg text-frost-text-secondary leading-relaxed cursor-default">
                Beyond software architecture, I manage the B for BCA YouTube channel (300+ community), sharing practical computer science guidance, version control tutorials, and AI engineering insights.
              </p>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                className="glass-effect rounded-2xl p-6 group cursor-default"
              >
                <h3 className="text-xl font-display font-semibold text-frost-text mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  Education
                </h3>
                <div className="text-frost-text-secondary">
                  <p className="font-semibold text-frost-text">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-sm mt-1">University of Allahabad, Prayagraj</p>
                  <p className="text-sm text-frost-text-secondary/80 mt-1">Oct 2023 – Jun 2026 | CGPA 8.29</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Impact Metrics Highlight Strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {IMPACT_METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: 'rgba(217, 119, 6, 0.4)' }}
                transition={{ duration: 0.2 }}
                className="glass-effect rounded-2xl p-5 border border-silver-drift/40 flex flex-col justify-between"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl lg:text-4xl font-display font-bold text-primary-400 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-semibold text-primary-500 uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary-600/10 border border-primary-600/20">
                    {metric.unit}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-frost-text leading-tight">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-frost-text-secondary/70 mt-1">
                    {metric.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience — Vertical Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-bold text-frost-text mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400">
                {/* Briefcase SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              Experience
            </h3>

            {/* Timeline */}
            <div ref={timelineRef} className="relative">
              {/* The animated central/left line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-silver-drift/20 md:-translate-x-[1px]">
                <motion.div
                  className="w-full bg-gradient-to-b from-primary-500 to-primary-700"
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Timeline entries */}
              <div className="space-y-0">
                {TIMELINE_ENTRIES.map((entry, index) => {
                  const isLeft = index % 2 === 0

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        index < TIMELINE_ENTRIES.length - 1 ? 'pb-12' : ''
                      }`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-4 md:left-1/2 z-10 -translate-x-1/2">
                        <motion.div
                          className={`timeline-node ${index === 0 ? 'active' : ''}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2,
                            type: 'spring',
                            stiffness: 400,
                            damping: 15,
                          }}
                          style={{
                            position: 'relative',
                            left: 0,
                            transform: 'none',
                          }}
                        />
                      </div>

                      {/* Desktop layout: alternate left/right */}
                      <div className={`hidden md:block md:w-1/2 ${isLeft ? 'order-1' : 'order-1 pr-12'}`}>
                        {!isLeft && (
                          <TimelineCard entry={entry} index={index} side="left" />
                        )}
                      </div>

                      <div className={`hidden md:block md:w-1/2 ${isLeft ? 'order-2 pl-12' : 'order-2'}`}>
                        {isLeft && (
                          <TimelineCard entry={entry} index={index} side="right" />
                        )}
                      </div>

                      {/* Mobile layout: always on right */}
                      <div className="md:hidden pl-12 w-full">
                        <TimelineCard entry={entry} index={index} side="right" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div variants={itemVariants} className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-effect rounded-2xl p-6 group cursor-default"
            >
              <h3 className="text-xl font-display font-semibold text-frost-text mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400">
                  <Lightbulb className="w-6 h-6" />
                </span>
                Interests & Focus Areas
              </h3>
              <ul className="text-frost-text-secondary space-y-2.5">
                {[
                  'Cloud Computing (OCI & AWS Architecture)',
                  'Machine Learning & Audio DSP Pipelines (Wav2Vec2, Whisper)',
                  'High-Performance Web APIs (Django REST Framework, FastAPI)',
                  'Open Source Engineering & Community Mentorship',
                  'Developer Tooling & Technical Content Creation',
                ].map((interest, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    whileHover={{ x: 6, color: 'var(--primary-400)' }}
                    className="cursor-default flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/70" />
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

// Timeline Card sub-component
function TimelineCard({ entry, index, side }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === 'left' ? 40 : -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className="timeline-card"
    >
      {/* Date badge */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <span className="text-xs font-medium text-primary-400 px-3 py-1 rounded-full bg-primary-600/10 border border-primary-600/20">
          {entry.date}
        </span>
        <span className="text-xs text-frost-text-secondary/70 font-medium">
          {entry.org}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-lg font-display font-semibold text-frost-text mb-3">
        {entry.title}
      </h4>

      {/* Bullet points */}
      <ul className="space-y-2">
        {entry.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2 text-sm text-frost-text-secondary"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + i * 0.08, duration: 0.4 }}
          >
            <span className="w-1 h-1 rounded-full bg-primary-500 mt-2 shrink-0" />
            {bullet}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default About
