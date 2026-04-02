import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedFolder } from './ui/3d-folder'
import { Code, Globe, Layers, Database, Wrench, Users, Award, Trophy } from 'lucide-react'

const Skills = React.memo(function Skills() {
  const getSkillIconUrl = (iconId) => `https://skillicons.dev/icons?i=${iconId}&theme=light`

  const technicalSkillFolders = [
    {
      title: 'Programming',
      icon: <Code className="w-5 h-5" />,
      projects: [
        { id: 'c', title: 'C', image: getSkillIconUrl('c') },
        { id: 'java', title: 'Java', image: getSkillIconUrl('java') },
        { id: 'python', title: 'Python', image: getSkillIconUrl('py') },
        { id: 'dart', title: 'Dart', image: getSkillIconUrl('dart') },
        { id: 'csharp', title: 'C#', image: getSkillIconUrl('cs') },
      ]
    },
    {
      title: 'Web Dev',
      icon: <Globe className="w-5 h-5" />,
      projects: [
        { id: 'html', title: 'HTML', image: getSkillIconUrl('html') },
        { id: 'css', title: 'CSS', image: getSkillIconUrl('css') },
      ]
    },
    {
      title: 'Frameworks',
      icon: <Layers className="w-5 h-5" />,
      projects: [
        { id: 'django', title: 'Django', image: getSkillIconUrl('django') },
        { id: 'dotnet', title: '.NET', image: getSkillIconUrl('dotnet') },
        { id: 'flutter', title: 'Flutter', image: getSkillIconUrl('flutter') },
        { id: 'react', title: 'React', image: getSkillIconUrl('react') },
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      projects: [
        { id: 'sql', title: 'MySQL', image: getSkillIconUrl('mysql') },
        { id: 'postgresql', title: 'PostgreSQL', image: getSkillIconUrl('postgres') },
      ]
    },
    {
      title: 'Tools & IDEs',
      icon: <Wrench className="w-5 h-5" />,
      projects: [
        { id: 'git', title: 'Git', image: getSkillIconUrl('git') },
        { id: 'github', title: 'GitHub', image: getSkillIconUrl('github') },
        { id: 'vscode', title: 'VS Code', image: getSkillIconUrl('vscode') },
        { id: 'androidstudio', title: 'Android Studio', image: getSkillIconUrl('androidstudio') },
        { id: 'vs2022', title: 'Visual Studio', image: getSkillIconUrl('visualstudio') },
        { id: 'linux', title: 'Linux', image: getSkillIconUrl('linux') },
        { id: 'windows', title: 'Windows', image: getSkillIconUrl('windows') },
      ]
    },
  ]

  const softSkills = [
    { skill: 'Teamwork/Collaboration', example: 'Projects (Forensic Flow)' },
    { skill: 'Leadership/Mentorship', example: 'Work Experience (Google Students Ambassador)' },
    { skill: 'Logical Reasoning', example: 'Projects (Predictor)' },
    { skill: 'Proactiveness/Initiative', example: 'Projects (Prompt Enhancer)' },
    { skill: 'Continuous Learning', example: 'Certifications/Skills' },
  ]

  const certifications = [
    'OCI AI Foundations (Oracle) - Oct 2025',
    'Postman API Fundamentals - Oct 2024',
  ]

  const hackathons = [
    'Smart India Hackathon 2025 (Forensic Flow MVP)',
    'GDG on Campus Solution Challenge – Participant, 2025',
    'Bharatiya Antariksh Hackathon 2025 – Participant 2025',
    'Gen AI Exchange Hackathon – Participant, 2025',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0" />

      {/* Background elements — no purple */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-600/8 to-tertiary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/8 to-primary-400/8 rounded-full blur-3xl" />

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
            Skills & <motion.span
              className="gradient-text"
              whileHover={{
                scale: 1.05,
              }}
            >
              Expertise
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
            A comprehensive showcase of my technical abilities, soft skills, certifications, and competitive achievements.
          </motion.p>

          {/* Technical Skills with 3D Folders */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-display font-bold text-frost-text mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400">
                <Code className="w-5 h-5" />
              </span>
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {technicalSkillFolders.map((folder, index) => (
                <motion.div
                  key={folder.title}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                >
                  <AnimatedFolder
                    title={folder.title}
                    projects={folder.projects}
                    icon={folder.icon}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-display font-bold text-frost-text mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-secondary-600/15 flex items-center justify-center text-secondary-500">
                <Users className="w-5 h-5" />
              </span>
              Soft Skills
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{
                y: -3,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {softSkills.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <motion.p
                        className="font-semibold text-frost-text group-hover:text-primary-400 transition-colors"
                      >
                        {item.skill}
                      </motion.p>
                      <p className="text-sm text-frost-text-secondary">{item.example}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications & Hackathons */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl p-6 group"
            >
              <h3 className="text-xl font-display font-bold text-frost-text mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400">
                  <Award className="w-5 h-5" />
                </span>
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <motion.span
                      className="text-frost-text-secondary group-hover/item:text-frost-text transition-colors"
                    >
                      {cert}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Hackathons */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl p-6 group"
            >
              <h3 className="text-xl font-display font-bold text-frost-text mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-tertiary-500/15 flex items-center justify-center text-tertiary-500">
                  <Trophy className="w-5 h-5" />
                </span>
                Hackathons & Competitions
              </h3>
              <ul className="space-y-3">
                {hackathons.map((hackathon, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group/item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-500 mt-2 shrink-0" />
                    <motion.span
                      className="text-frost-text-secondary group-hover/item:text-frost-text transition-colors"
                    >
                      {hackathon}
                    </motion.span>
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

export default Skills
