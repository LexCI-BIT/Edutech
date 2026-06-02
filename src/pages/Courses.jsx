import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Monitor, Database, Brain, Cloud, Palette } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

const categories = ['All', 'Tech & Data', 'Mechanics', 'Business', 'Medical', 'Design', 'Bootcamp']

export const courses = [
  // Tech & Data
  {
    id: 'tech-web',
    title: 'Web Development',
    level: 'BEGINNER-ADVANCED',
    duration: '2 Months',
    projects: 20,
    price: '₹ 15,000',
    category: 'Tech & Data',
    image: '/courses/fullstack.png',
  },
  {
    id: 'tech-android',
    title: 'Android Development',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 15,
    price: '₹ 14,500',
    category: 'Tech & Data',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop',
  },
  {
    id: 'tech-cyber',
    title: 'Cyber Security',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 18,
    price: '₹ 16,000',
    category: 'Tech & Data',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    id: 'tech-ai',
    title: 'Artificial Intelligence',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 25,
    price: '₹ 18,000',
    category: 'Tech & Data',
    image: '/courses/aiml.png',
  },
  {
    id: 'tech-ds',
    title: 'Data Science',
    level: 'INTERMEDIATE-ADVANCED',
    duration: '2 Months',
    projects: 22,
    price: '₹ 17,500',
    category: 'Tech & Data',
    image: '/courses/datascience.png',
  },
  {
    id: 'tech-ml',
    title: 'Machine Learning',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 24,
    price: '₹ 17,000',
    category: 'Tech & Data',
    image: '/courses/machine_learning.png',
  },
  {
    id: 'tech-iot',
    title: 'IoT & Robotics',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 30,
    price: '₹ 19,000',
    category: 'Tech & Data',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 'tech-cloud',
    title: 'Cloud Computing',
    level: 'BEGINNER-INTERMEDIATE',
    duration: '2 Months',
    projects: 15,
    price: '₹ 15,500',
    category: 'Tech & Data',
    image: '/courses/cloudcomputing.png',
  },
  {
    id: 'tech-embedded',
    title: 'Embedded System',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 18,
    price: '₹ 16,500',
    category: 'Tech & Data',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },

  // Mechanics
  {
    id: 'mech-hev',
    title: 'Hybrid & Electric Vehicles',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 12,
    price: '₹ 14,000',
    category: 'Mechanics',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
  },
  {
    id: 'mech-autocad',
    title: 'Auto CAD',
    level: 'BEGINNER',
    duration: '2 Months',
    projects: 14,
    price: '₹ 12,500',
    category: 'Mechanics',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
  },

  // Business
  {
    id: 'biz-dm',
    title: 'Digital Marketing',
    level: 'BEGINNER',
    duration: '2 Months',
    projects: 15,
    price: '₹ 13,000',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
  },
  {
    id: 'biz-fin',
    title: 'Finance',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 20,
    price: '₹ 16,000',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
  },
  {
    id: 'biz-hr',
    title: 'Human Resource',
    level: 'BEGINNER',
    duration: '2 Months',
    projects: 10,
    price: '₹ 12,000',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
  },
  {
    id: 'biz-stock',
    title: 'Stock Market',
    level: 'BEGINNER-ADVANCED',
    duration: '2 Months',
    projects: 25,
    price: '₹ 15,500',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
  },
  {
    id: 'biz-analytics',
    title: 'Business Analytics',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 22,
    price: '₹ 17,000',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 'biz-law',
    title: 'Corporate Law',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 12,
    price: '₹ 18,500',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=400&fit=crop',
  },

  // Medical
  {
    id: 'med-genetics',
    title: 'Genetics Engineering/ Nanotechnology',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 15,
    price: '₹ 20,000',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop',
  },
  {
    id: 'med-psych',
    title: 'Psychology',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 18,
    price: '₹ 15,000',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
  },
  {
    id: 'med-coding',
    title: 'Medical Coding',
    level: 'BEGINNER-INTERMEDIATE',
    duration: '2 Months',
    projects: 25,
    price: '₹ 13,500',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },

  // Design
  {
    id: 'des-uiux',
    title: 'UI/UX Design',
    level: 'BEGINNER-ADVANCED',
    duration: '2 Months',
    projects: 30,
    price: '₹ 16,000',
    category: 'Design',
    image: '/courses/uiux.png',
  },
  {
    id: 'des-graphic',
    title: 'Graphic Design',
    level: 'BEGINNER',
    duration: '2 Months',
    projects: 25,
    price: '₹ 14,000',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
  },
  {
    id: 'des-fashion',
    title: 'Fashion Designing',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 20,
    price: '₹ 15,500',
    category: 'Design',
    image: '/courses/fashion_designing.png',
  },

  // Bootcamp
  {
    id: 'bc-drone',
    title: 'Drone Engineering',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 15,
    price: '₹ 22,000',
    category: 'Bootcamp',
    image: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=600&h=400&fit=crop',
  },
  {
    id: 'bc-career',
    title: 'Career Advancement Program',
    level: 'BEGINNER',
    duration: '2 Months',
    projects: 10,
    price: '₹ 12,000',
    category: 'Bootcamp',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
  {
    id: 'bc-robotics',
    title: 'Robotics Engineering',
    level: 'ADVANCED',
    duration: '2 Months',
    projects: 22,
    price: '₹ 25,000',
    category: 'Bootcamp',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 'bc-arvr',
    title: 'AR VR',
    level: 'INTERMEDIATE',
    duration: '2 Months',
    projects: 18,
    price: '₹ 21,000',
    category: 'Bootcamp',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
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
                      <Link to={`/course/${course.id}`} className="flex flex-col h-full block">
                        {/* Image Area */}
                        <div className="h-48 relative overflow-hidden bg-[#1e1c2e]">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <span className="text-xs text-primary-light uppercase tracking-wider font-medium">
                            {course.level}
                          </span>
                          <h3 className="text-lg font-semibold text-text-primary mt-1 group-hover:text-primary-light transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-3 text-sm text-text-secondary">
                            <span>{course.duration}</span>
                            <span className="w-1 h-1 rounded-full bg-text-muted" />
                            <span>{course.projects} Projects</span>
                          </div>
                          <div className="flex items-center justify-between mt-auto pt-4">
                            <span className="text-lg font-bold text-text-primary">
                              {course.price}
                            </span>
                            <span
                              className="bg-[#1a103c] text-[#a855f7] px-5 py-1.5 rounded-lg text-xs font-bold group-hover:bg-[#2d1b69] transition-colors cursor-pointer"
                            >
                              Learn More
                            </span>
                          </div>
                        </div>
                      </Link>
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
