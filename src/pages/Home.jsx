import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Award,
  Shield,
  Star,
  Building2,
  BadgeCheck,
  BookOpen,
  Code,
  Briefcase,
  Users,
  Clock,
  ArrowRight,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

/* ───────── animated counter hook ───────── */
function useCounter(end, duration = 2000, startOnView = false, ref = null) {
  const [count, setCount] = useState(0)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (startOnView && !inView) return
    let start = 0
    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [end, duration, inView, startOnView])

  return count
}

/* ───────── bar‑chart data ───────── */
const barHeights = [45, 70, 55, 85, 60, 90, 50, 75, 65, 80]

/* ───────── partners ───────── */
const partners = [
  { image: '/recognized/aicte.png', label: 'AICTE\nRecognized', bg: 'bg-[#fde047]' },
  { image: '/recognized/dpiit.png', label: 'DPIIT\nRecognized', bg: 'bg-white' },
  { image: '/recognized/nsdc.png', label: 'NSDC\nRecognized', bg: 'bg-white' },
  { image: '/recognized/itc.png', label: 'ITC\nPartners', bg: 'bg-white' },
]

/* ───────── features ───────── */
const features = [
  {
    icon: BookOpen,
    title: 'Industry Relevant Curriculum',
    desc: 'Programs designed with top industry leaders ensuring you learn what truly matters in the job market.',
  },
  {
    icon: Code,
    title: 'Hands-On Learning',
    desc: 'Build real-world projects, solve challenges, and gain practical experience that employers value.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    desc: 'Dedicated career services including resume workshops, mock interviews, and placement assistance.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    desc: 'Learn directly from industry veterans who bring years of hands-on experience to every session.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    desc: 'Study at your own pace with lifetime access to course materials and recorded sessions.',
  },
]

/* ───────── courses ───────── */
const courses = [
  {
    code: 'FS',
    badge: 'BEGINNER-ADVANCED',
    title: 'Full Stack Development',
    duration: '6 Months',
    projects: '42 Projects',
    price: '₹ 14,000',
    image: '/courses/fullstack.png',
  },
  {
    code: 'DS',
    badge: 'INTERMEDIATE',
    title: 'Data Science & Analysis',
    duration: '3 Months',
    projects: '42 Projects',
    price: '₹ 20,000',
    image: '/courses/datascience.png',
  },
  {
    code: 'AIML',
    badge: 'ADVANCED',
    title: 'AI & Machine Learning',
    duration: '11 Months',
    projects: '60 Projects',
    price: '₹ 12,000',
    image: '/courses/aiml.png',
  },
]

/* ================================================================
   HOME PAGE
   ================================================================ */
export default function Home({ onContactClick }) {
  const statsRef = useRef(null)
  const placementCount = useCounter(94, 2000, true, statsRef)
  const mentorCount = useCounter(12, 2000, true, statsRef)
  const learnerCount = useCounter(8420, 2000, true, statsRef)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden ambient-glow">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* left ── text */}
          <ScrollReveal variant="fadeRight" className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Build Industry Skills That{' '}
              <span className="gradient-text italic">Matter</span>
            </h1>

            <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
              Accelerate your career with world-class programs, expert
              mentorship, and real-world learning experiences designed for the
              future.
            </p>

            <Link to="/courses" className="inline-block mt-8">
              <motion.button 
                whileHover="hover"
                className="btn-primary rounded-full px-8 py-4 text-lg font-semibold text-white flex items-center gap-2 hover:cursor-pointer"
              >
                <span>Explore Courses</span>
                <motion.span
                  variants={{
                    hover: { x: 5 },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </ScrollReveal>

          {/* right ── stats dashboard */}
          <ScrollReveal variant="fadeLeft" delay={0.2}>
            <div
              ref={statsRef}
              className="card-glow rounded-2xl p-6 sm:p-8 relative z-10 animate-float"
            >
              {/* window dots */}
              <div className="flex gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* stats row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[#130c24] rounded-xl p-4 border border-[#2d1b69]/60">
                  <p className="text-xs text-text-secondary font-medium">Completion Rate</p>
                  <p className="text-2xl font-bold text-white mt-1.5">94%</p>
                  <p className="text-xs text-green-500 mt-2 flex items-center gap-1">↑ +3.2%</p>
                </div>
                <div className="bg-[#130c24] rounded-xl p-4 border border-[#2d1b69]/60">
                  <p className="text-xs text-text-secondary font-medium">Courses Active</p>
                  <p className="text-2xl font-bold text-white mt-1.5">12</p>
                  <p className="text-xs text-green-500 mt-2 flex items-center gap-1">↑ +2 new</p>
                </div>
                <div className="bg-[#130c24] rounded-xl p-4 border border-[#2d1b69]/60">
                  <p className="text-xs text-text-secondary font-medium">XP Points</p>
                  <p className="text-2xl font-bold text-white mt-1.5">8,420</p>
                  <p className="text-xs text-green-500 mt-2 flex items-center gap-1">↑ Level 7</p>
                </div>
              </div>

              {/* bar chart */}
              <div className="bg-[#130c24] rounded-xl p-4 border border-[#2d1b69]/60 flex items-end gap-1.5 h-32 mb-4">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#6d28d9] to-[#8b5cf6]"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6 + i * 0.08,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>

              {/* mini cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#130c24] rounded-xl p-3 px-4 border border-[#2d1b69]/60 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                    Full Stack Dev
                  </div>
                  <span className="text-sm font-semibold text-primary-light">82%</span>
                </div>
                <div className="bg-[#130c24] rounded-xl p-3 px-4 border border-[#2d1b69]/60 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Data Science
                  </div>
                  <span className="text-sm font-semibold text-primary-light">67%</span>
                </div>
                <div className="bg-[#130c24] rounded-xl p-3 px-4 border border-[#2d1b69]/60 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    UI/UX Design
                  </div>
                  <span className="text-sm font-semibold text-primary-light">55%</span>
                </div>
                <div className="bg-[#130c24] rounded-xl p-3 px-4 border border-[#2d1b69]/60 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Cloud Arch.
                  </div>
                  <span className="text-sm font-semibold text-primary-light">43%</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RECOGNITION ──────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <p className="text-center text-text-secondary uppercase tracking-widest text-sm mb-10">
            Recognized &amp; Trusted By
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="flex flex-wrap justify-center gap-8 sm:gap-16 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {partners.map(({ image, label, bg }) => (
            <StaggerItem key={label} className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${bg} overflow-hidden`}
              >
                <img src={image} alt={label} className="w-full h-full object-cover" />
              </motion.div>
              <span className="text-sm font-medium text-white whitespace-pre-line text-left leading-tight">
                {label}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── WHY XXX ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative ambient-glow">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" className="text-center mb-14">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-3">
              Why XXX
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Learning redefined for the modern era.
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven pedagogy to deliver
              an immersive learning experience that prepares you for real-world
              challenges.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            staggerDelay={0.1}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-glow p-6 rounded-xl h-full flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary-light" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" className="text-center mb-14">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-3">
              Featured Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Courses built for where the world is going.
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Explore our most popular programs designed to equip you with
              job-ready skills from day one.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {courses.map(({ code, badge, title, duration, projects, price, image }) => (
              <StaggerItem key={code}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-glow rounded-2xl h-full flex flex-col overflow-hidden group"
                >
                  {/* Image Area */}
                  <div className="h-40 relative overflow-hidden bg-[#1e1c2e]">
                    <img 
                      src={image} 
                      alt={title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* badge */}
                    <span className="inline-block self-start text-[10px] tracking-wider uppercase font-semibold text-primary-light border border-border-purple rounded-full px-3 py-1 mb-4">
                      {badge}
                    </span>

                    {/* title */}
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {title}
                    </h3>

                    {/* meta */}
                    <div className="flex gap-4 text-sm text-text-secondary mb-4">
                      <span>{duration}</span>
                      <span className="text-border-purple">|</span>
                      <span>{projects}</span>
                    </div>

                    {/* price + enroll */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-lg font-bold text-white">{price}</span>
                      <button
                        onClick={onContactClick}
                        className="text-primary text-sm font-semibold hover:text-primary-light transition flex items-center gap-1 hover:cursor-pointer"
                      >
                        Enroll <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* view all CTA */}
          <ScrollReveal variant="fadeUp" delay={0.3} className="mt-12 text-center">
            <Link to="/courses">
              <motion.button
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="border border-border-purple rounded-full px-6 py-3 text-sm font-semibold text-text-secondary hover:border-primary hover:text-white transition inline-flex items-center gap-2 hover:cursor-pointer"
              >
                <span>VIEW ALL COURSES</span>
                <motion.span
                  variants={{
                    hover: { x: 4 }
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
