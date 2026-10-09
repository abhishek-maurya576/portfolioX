import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MicroExpander } from './ui/micro-expander'
import { GitHubIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, XIcon } from './ui/social-icons'
import { Mail, MapPin, CheckCircle, XCircle } from 'lucide-react'

const Contact = React.memo(function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [emailCopied, setEmailCopied] = useState(false)

  // One-click clipboard copy for email address
  const handleCopyEmail = useCallback(async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText('maurya972137@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2500)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formDataObj = new FormData(e.target)
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        throw new Error('Web3Forms access key is not configured.')
      }
      formDataObj.append('access_key', accessKey)
      formDataObj.append('subject', `New Portfolio Contact from ${formData.name}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const handleChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/abhishek-maurya576',
      icon: <GitHubIcon className="w-5 h-5" />,
      hoverClass: 'hover:text-frost-text hover:bg-silver-drift/50',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abhishekmaurya9118',
      icon: <LinkedInIcon className="w-5 h-5" />,
      hoverClass: 'hover:text-secondary-500 hover:bg-secondary-600/10',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@bforbca',
      icon: <YouTubeIcon className="w-5 h-5" />,
      hoverClass: 'hover:text-red-400 hover:bg-red-600/10',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zymprox',
      icon: <InstagramIcon className="w-5 h-5" />,
      hoverClass: 'hover:text-tertiary-500 hover:bg-tertiary-500/10',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Abhishekm576',
      icon: <XIcon className="w-5 h-5" />,
      hoverClass: 'hover:text-frost-text hover:bg-silver-drift/50',
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-primary-600/10 to-secondary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-tertiary/10 to-primary-400/8 rounded-full blur-3xl" />
      </div>

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
            Get In{' '}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Touch
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
            Have an engineering role, technical consultation, or collaboration in mind? Send a message or reach out directly.
          </motion.p>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="relative md:col-span-5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message...', rows: 5 },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <motion.label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-frost-text-secondary mb-2 uppercase tracking-wider"
                      animate={{
                        color: focusedField === field.name ? 'var(--primary-400)' : '',
                        y: focusedField === field.name ? -2 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {field.label}
                    </motion.label>

                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={field.rows}
                        className="w-full px-4 py-3 rounded-xl bg-glacial-pearl border border-silver-drift/50 text-frost-text focus:border-primary-600/50 focus:outline-none transition-all duration-300 resize-none"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-glacial-pearl border border-silver-drift/50 text-frost-text focus:border-primary-600/50 focus:outline-none transition-all duration-300"
                        placeholder={field.placeholder}
                      />
                    )}

                    {/* Animated Focus Indicator Bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === field.name ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-frost-veil font-semibold shadow-lg shadow-primary-600/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <motion.div
                          className="w-4 h-4 border-2 border-frost-veil/30 border-t-frost-veil rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                {/* Submission Result Alerts */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 rounded-xl bg-emerald-950/30 border border-emerald-700/40 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-emerald-300 font-semibold text-sm">Message delivered successfully</p>
                        <p className="text-emerald-400/80 text-xs mt-0.5">Thank you for reaching out. I will respond promptly.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 rounded-xl bg-rose-950/30 border border-rose-700/40 flex items-center gap-3"
                    >
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <div>
                        <p className="text-rose-300 font-semibold text-sm">Unable to submit contact form</p>
                        <p className="text-rose-400/80 text-xs mt-0.5">Please email directly at maurya972137@gmail.com</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Contact Details & Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 md:col-span-7"
            >
              <div className="glass-effect rounded-2xl p-6">
                {/* Contact Pills Grid */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {/* Email Pill with One-Click Copy */}
                  <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-frost-veil/50 border border-silver-drift/30 hover:border-primary-600/30 transition-all duration-300 group flex-1">
                    <a
                      href="mailto:maurya972137@gmail.com"
                      className="flex items-center gap-3 min-w-0 flex-1"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-frost-veil shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-frost-text-secondary uppercase tracking-wider">Email</p>
                        <p className="text-frost-text font-medium text-sm truncate group-hover:text-primary-400 transition-colors">
                          maurya972137@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Dedicated Clipboard Action Button */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address to clipboard"
                      title="Copy email to clipboard"
                      className="shrink-0 px-2.5 py-1.5 rounded-lg border border-silver-drift/50 bg-white/5 hover:bg-white/10 text-frost-text-secondary hover:text-primary-400 hover:border-primary-600/40 transition-all duration-200 flex items-center gap-1.5 text-xs font-medium"
                    >
                      {emailCopied ? (
                        <>
                          <svg className="w-3.5 h-3.5 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-primary-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5 text-frost-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Location Pill */}
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-frost-veil/50 border border-silver-drift/30 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tertiary-500 to-tertiary-600 flex items-center justify-center text-frost-veil shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-frost-text-secondary uppercase tracking-wider">Location</p>
                      <p className="text-frost-text font-medium text-sm">Allahabad, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Connect Strip */}
                <div className="pt-4 border-t border-silver-drift/30">
                  <p className="text-xs text-frost-text-secondary uppercase tracking-wider mb-4">Connect With Me</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 400,
                        }}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MicroExpander
                            text={social.name}
                            icon={social.icon}
                            variant="ghost"
                            className={`h-11 ${social.hoverClass} transition-all duration-300`}
                          />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability Banner */}
              <div className="glass-effect rounded-xl p-4 flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <p className="text-frost-text font-medium text-sm">Open for Graduate Engineer & Software roles</p>
                  <p className="text-frost-text-secondary text-xs mt-0.5">Active across Prayagraj, Bangalore, or Remote</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Contact
