import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Monitor, Database, Brain, Cloud, Palette } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

const categories = ['All', 'Development', 'Data Science', 'AI/ML', 'Design']

const courses = [
  {
    id: 1,
    title: 'Full Stack Development',
    level: 'BEGINNER-ADVANCED',
    duration: '6 Months',
    projects: 42,
    price: '₹ 14,000',
    category: 'Development',
    icon: Monitor,
    image: '/courses/fullstack.png',
  },
  {
    id: 2,
    title: 'Data Science & Analysis',
    level: 'INTERMEDIATE',
    duration: '3 Months',
    projects: 42,
    price: '₹ 20,000',
    category: 'Data Science',
    icon: Database,
    image: '/courses/datascience.png',
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    level: 'ADVANCED',
    duration: '11 Months',
    projects: 60,
    price: '₹ 12,000',
    category: 'AI/ML',
    icon: Brain,
    image: '/courses/aiml.png',
  },
  {
    id: 4,
    title: 'Cloud Computing',
    level: 'BEGINNER',
    duration: '6 Months',
    projects: 62,
    price: '₹ 18,000',
    category: 'Development',
    icon: Cloud,
    image: '/courses/cloudcomputing.png',
  },
  {
    id: 5,
    title: 'UI/UX Design',
    level: 'BEGINNER-ADVANCED',
    duration: '6 Months',
    projects: 62,
    price: '₹ 16,000',
    category: 'Design',
    icon: Palette,
    image: '/courses/uiux.png',
  },
]

export default function Courses({ onContactClick }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === 'All' || course.category === activeCategory
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg-dark"
    >
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[600px] flex items-center pt-20 border-b border-border-purple/20">
        <div className="absolute inset-0 z-0">
          <img src="/courses.png" alt="Courses Hero Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a] via-[#0a0a1a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal variant="fadeLeft" className="max-w-2xl">
            <span className="text-[#a855f7] uppercase tracking-widest text-sm font-bold">
              OUR VISION
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mt-4 leading-tight">
              Find your <br /> next skill.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Search Bar ===== */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full input-field rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Category Filter Pills ===== */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : 'border border-[#2d1b69]/60 bg-[#0d0b1e] text-text-secondary hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Course Grid ===== */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => {
                const Icon = course.icon
                return (
                  <StaggerItem key={course.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="card-glow rounded-2xl overflow-hidden group"
                    >
                      {/* Image Area */}
                      <div className="h-48 relative overflow-hidden bg-[#1e1c2e]">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <span className="text-xs text-primary-light uppercase tracking-wider font-medium">
                          {course.level}
                        </span>
                        <h3 className="text-lg font-semibold text-text-primary mt-1">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-3 text-sm text-text-secondary">
                          <span>{course.duration}</span>
                          <span className="w-1 h-1 rounded-full bg-text-muted" />
                          <span>{course.projects} Projects</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-lg font-bold text-text-primary">
                            {course.price}
                          </span>
                          <button
                            onClick={onContactClick}
                            className="bg-[#1a103c] text-[#a855f7] px-5 py-1.5 rounded-lg text-xs font-bold hover:bg-[#2d1b69] transition-colors cursor-pointer"
                          >
                            Enroll
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </AnimatePresence>
          </StaggerContainer>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <p className="text-text-secondary text-lg">
                No courses found. Try a different search or category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
