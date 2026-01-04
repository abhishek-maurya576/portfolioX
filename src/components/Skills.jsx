import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedFolder } from './ui/3d-folder'
import { Code, Globe, Layers, Database, Wrench } from 'lucide-react'

const Skills = React.memo(function Skills() {
  // Technical skills data with skillicons.dev icons
  // Using individual icon URLs for each skill
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
    <section id="skills" className="py-20 bg-gradient-to-b from-silver-drift via-glacial-pearl to-polar-mist relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl" />

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
            Skills & <motion.span
              className="gradient-text"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-frost-text-secondary text-lg mb-12 max-w-2xl"
          >
            A comprehensive showcase of my technical abilities, soft skills, certifications, and competitive achievements.
          </motion.p>

          {/* Technical Skills with 3D Folders */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-frost-text mb-8 flex items-center gap-2">
              <span>💻</span>
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
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-frost-text mb-6 flex items-center gap-2">
              <span>🤝</span>
              Soft Skills
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{
                scale: 1.02,
                y: -5,
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
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="text-frost-accent text-xl"
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                        color: "#10b981"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ✓
                    </motion.span>
                    <div>
                      <motion.p
                        className="font-semibold text-frost-text group-hover:text-frost-accent transition-colors"
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
              initial={{ opacity: 0, x: -50, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{
                scale: 1.05,
                x: 10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl p-6 group"
            >
              <h3 className="text-xl font-bold text-frost-text mb-4 flex items-center gap-2">
                <motion.span
                  className="text-2xl"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  🎓
                </motion.span>
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
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="text-frost-accent text-xl mt-0.5"
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                        color: "#3b82f6"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ✓
                    </motion.span>
                    <motion.span
                      className="text-frost-text-secondary group-hover/item:text-frost-text"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {cert}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Hackathons */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{
                scale: 1.05,
                x: -10,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl p-6 group"
            >
              <h3 className="text-xl font-bold text-frost-text mb-4 flex items-center gap-2">
                <motion.span
                  className="text-2xl"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  🏆
                </motion.span>
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
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="text-frost-accent mt-1"
                      whileHover={{
                        scale: 1.5,
                        rotate: 360,
                        color: "#fbbf24"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      •
                    </motion.span>
                    <motion.span
                      className="text-frost-text-secondary group-hover/item:text-frost-text"
                      whileHover={{ color: "#3b82f6" }}
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


