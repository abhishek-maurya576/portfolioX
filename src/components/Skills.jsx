import React from 'react'
import { motion } from 'framer-motion'
import { Code, Globe, Layers, Database, Wrench, Users, Award, Trophy } from 'lucide-react'

const Skills = React.memo(function Skills() {
  const getSkillIconUrl = (iconId) => `https://skillicons.dev/icons?i=${iconId}&theme=light`

  // Bento grid data — each cell has a grid span, title, icon, and content
  const bentoCells = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Layers className="w-5 h-5" />,
      // Hero cell — largest, most prominent
      span: 'col-span-2 row-span-2 md:col-span-2 lg:col-span-2',
      accent: 'from-primary-500/20 to-tertiary-500/10',
      skills: [
        { id: 'pytorch', title: 'PyTorch', image: getSkillIconUrl('pytorch') },
        { id: 'tensorflow', title: 'TensorFlow', image: getSkillIconUrl('tensorflow') },
        { id: 'sklearn', title: 'scikit-learn', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { id: 'openai', title: 'OpenAI', image: 'https://skillicons.dev/icons?i=openai&theme=light' },
      ],
    },
    {
      id: 'youtube',
      title: 'B for BCA',
      subtitle: 'YouTube Channel • 400+ Subscribers',
      icon: null, // Custom YouTube SVG below
      span: 'col-span-2 row-span-1 md:col-span-2 lg:col-span-2',
      accent: 'from-red-500/15 to-red-600/5',
      isYouTube: true,
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="w-5 h-5" />,
      span: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-1',
      accent: 'from-primary-600/15 to-primary-700/5',
      skills: [
        { id: 'c', title: 'C', image: getSkillIconUrl('c') },
        { id: 'java', title: 'Java', image: getSkillIconUrl('java') },
        { id: 'python', title: 'Python', image: getSkillIconUrl('py') },
        { id: 'dart', title: 'Dart', image: getSkillIconUrl('dart') },
        { id: 'csharp', title: 'C#', image: getSkillIconUrl('cs') },
      ],
    },
    {
      id: 'web-dev',
      title: 'Web Dev',
      icon: <Globe className="w-5 h-5" />,
      span: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-1',
      accent: 'from-tertiary-500/15 to-primary-500/5',
      skills: [
        { id: 'html', title: 'HTML', image: getSkillIconUrl('html') },
        { id: 'css', title: 'CSS', image: getSkillIconUrl('css') },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: <Layers className="w-5 h-5" />,
      span: 'col-span-2 row-span-1 md:col-span-2 lg:col-span-2',
      accent: 'from-secondary-500/15 to-secondary-600/5',
      skills: [
        { id: 'django', title: 'Django', image: getSkillIconUrl('django') },
        { id: 'dotnet', title: '.NET', image: getSkillIconUrl('dotnet') },
        { id: 'flutter', title: 'Flutter', image: getSkillIconUrl('flutter') },
        { id: 'react', title: 'React', image: getSkillIconUrl('react') },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      span: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-1',
      accent: 'from-primary-400/15 to-primary-500/5',
      skills: [
        { id: 'sql', title: 'MySQL', image: getSkillIconUrl('mysql') },
        { id: 'postgresql', title: 'PostgreSQL', image: getSkillIconUrl('postgres') },
        { id: 'supabase', title: 'Supabase', image: getSkillIconUrl('supabase') },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & IDEs',
      icon: <Wrench className="w-5 h-5" />,
      span: 'col-span-2 row-span-1 md:col-span-3 lg:col-span-3',
      accent: 'from-primary-600/15 to-secondary-500/5',
      skills: [
        { id: 'git', title: 'Git', image: getSkillIconUrl('git') },
        { id: 'github', title: 'GitHub', image: getSkillIconUrl('github') },
        { id: 'vscode', title: 'VS Code', image: getSkillIconUrl('vscode') },
        { id: 'androidstudio', title: 'Android Studio', image: getSkillIconUrl('androidstudio') },
        { id: 'vs2022', title: 'Visual Studio', image: getSkillIconUrl('visualstudio') },
        { id: 'linux', title: 'Linux', image: getSkillIconUrl('linux') },
        { id: 'windows', title: 'Windows', image: getSkillIconUrl('windows') },
      ],
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills',
      icon: <Users className="w-5 h-5" />,
      span: 'col-span-2 row-span-1 md:col-span-2 lg:col-span-2',
      accent: 'from-secondary-600/15 to-secondary-700/5',
      softSkills: [
        { skill: 'Teamwork', example: 'Forensic Flow' },
        { skill: 'Leadership', example: 'Google Ambassador' },
        { skill: 'Logical Reasoning', example: 'Predictor' },
        { skill: 'Proactiveness', example: 'Prompt Enhancer' },
        { skill: 'Continuous Learning', example: 'Certifications' },
      ],
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: <Award className="w-5 h-5" />,
      span: 'col-span-2 row-span-1 md:col-span-2 lg:col-span-2',
      accent: 'from-primary-500/15 to-primary-600/5',
      certifications: [
        'OCI AI Foundations (Oracle) - Oct 2025',
        'Postman API Fundamentals - Oct 2024',
        'Java & C Programming (KG Coding)',
      ],
    },
    {
      id: 'hackathons',
      title: 'Hackathons & Competitions',
      icon: <Trophy className="w-5 h-5" />,
      span: 'col-span-2 row-span-1 md:col-span-4 lg:col-span-4',
      accent: 'from-tertiary-500/15 to-primary-500/5',
      hackathons: [
        { text: 'Gen AI Hackathon 2025', highlight: 'Winner', detail: 'AgriVision — AI-powered crop advisory' },
        { text: 'Smart India Hackathon 2025', highlight: null, detail: 'Forensic Flow MVP' },
        { text: 'GDG on Campus Solution Challenge', highlight: null, detail: 'Participant, 2025' },
        { text: 'Bharatiya Antariksh Hackathon 2025', highlight: null, detail: 'Participant' },
        { text: 'Gen AI Exchange Hackathon', highlight: null, detail: 'Participant, 2025' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.85 },
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
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0" />

      {/* Background elements */}
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
              whileHover={{ scale: 1.05 }}
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

          {/* Bento Box Grid */}
          <div className="bento-grid">
            {bentoCells.map((cell, index) => (
              <motion.div
                key={cell.id}
                variants={itemVariants}
                className={`bento-cell ${cell.span}`}
              >
                {/* Accent gradient background */}
                <div className={`absolute inset-0 rounded-[1.25rem] bg-gradient-to-br ${cell.accent} opacity-60 pointer-events-none`} />

                {/* Cell content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    {cell.isYouTube ? (
                      <span className="w-9 h-9 rounded-xl bg-red-600/15 flex items-center justify-center text-red-400">
                        {/* YouTube play button SVG */}
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </span>
                    ) : cell.icon ? (
                      <span className="w-9 h-9 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400">
                        {cell.icon}
                      </span>
                    ) : null}

                    <div>
                      <h3 className="text-base font-display font-semibold text-frost-text leading-tight">
                        {cell.title}
                      </h3>
                      {cell.subtitle && (
                        <p className="text-xs text-frost-text-secondary/70 mt-0.5">{cell.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* YouTube cell — special content */}
                  {cell.isYouTube && (
                    <div className="flex-1 flex items-center">
                      <a
                        href="https://www.youtube.com/@BforBCA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group w-full"
                      >
                        {/* Large play button */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:bg-red-600/30 group-hover:border-red-400/50 transition-all duration-300 shrink-0"
                        >
                          <svg className="w-7 h-7 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                        <div>
                          <p className="text-frost-text font-semibold group-hover:text-red-400 transition-colors">
                            Watch on YouTube
                          </p>
                          <p className="text-xs text-frost-text-secondary/60 mt-0.5">
                            Educational tech content for BCA students
                          </p>
                        </div>
                      </a>
                    </div>
                  )}

                  {/* Skills grid — icons */}
                  {cell.skills && (
                    <div className="flex-1 flex items-center">
                      <div className="flex flex-wrap gap-3">
                        {cell.skills.map((skill, i) => (
                          <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.05 + i * 0.06,
                              type: "spring",
                              stiffness: 400,
                              damping: 15
                            }}
                            whileHover={{
                              scale: 1.15,
                              y: -4,
                              transition: { duration: 0.2 }
                            }}
                            className="flex flex-col items-center gap-1.5 group/skill cursor-default"
                          >
                            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/skill:border-primary-500/40 group-hover/skill:bg-white/10 transition-all duration-300 overflow-hidden p-1.5">
                              <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                            <span className="text-[10px] text-frost-text-secondary/70 group-hover/skill:text-frost-text transition-colors font-medium">
                              {skill.title}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Soft Skills */}
                  {cell.softSkills && (
                    <div className="flex-1 flex items-start">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                        {cell.softSkills.map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-2 group/soft"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            whileHover={{ x: 4, transition: { duration: 0.2 } }}
                          >
                            <svg className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-frost-text group-hover/soft:text-secondary-500 transition-colors">
                                {item.skill}
                              </p>
                              <p className="text-xs text-frost-text-secondary/60">{item.example}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications */}
                  {cell.certifications && (
                    <div className="flex-1">
                      <ul className="space-y-2.5">
                        {cell.certifications.map((cert, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2 group/cert"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            whileHover={{ x: 4, transition: { duration: 0.2 } }}
                          >
                            <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="text-sm text-frost-text-secondary group-hover/cert:text-frost-text transition-colors">
                              {cert}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Hackathons */}
                  {cell.hackathons && (
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {cell.hackathons.map((hack, i) => (
                          <motion.div
                            key={i}
                            className="group/hack px-3 py-2.5 rounded-xl bg-white/3 border border-white/5 hover:border-primary-500/20 hover:bg-white/5 transition-all duration-300"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {hack.highlight ? (
                                <span className="text-[10px] font-bold text-primary-400 px-2 py-0.5 rounded-full bg-primary-500/15 border border-primary-500/25 uppercase tracking-wider">
                                  {hack.highlight}
                                </span>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-500 shrink-0" />
                              )}
                            </div>
                            <p className="text-sm font-medium text-frost-text group-hover/hack:text-primary-400 transition-colors leading-tight">
                              {hack.text}
                            </p>
                            <p className="text-xs text-frost-text-secondary/60 mt-0.5">{hack.detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Skills
