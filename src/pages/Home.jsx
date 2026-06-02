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
  Monitor,
  Settings,
  Heart,
  PenTool,
  GraduationCap,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Circle, 
  Phone, 
  Camera, 
  MessageCircle, 
  Play, 
  FileText, 
  Signal, 
  Wifi, 
  Battery
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

/* ───────── testimonials ───────── */
const testimonials = [
  {
    name: "Parthiv Kumar",
    course: "Cybersecurity",
    university: "Amrita Vishwa Vidyapeetham",
    title: "I am grateful to ApexSchool for this wonderful opportunity",
    text: "During this intensive program, I gained valuable knowledge and hands-on experience in various aspects of cybersecurity. One of the highlights of my internship was working on an individual minor project where I had the opportunity to deal with a machine and identify vulnerabilities.",
    image: "https://i.pravatar.cc/150?u=10"
  },
  {
    name: "Ashi Dabhade",
    course: "Psychology",
    university: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
    title: "I got deep insights into psychological theories",
    text: "This experience has been incredibly enriching, providing me with deep insights into psychological theories and practical skills. The hands-on learning and exposure to real-world scenarios have significantly enhanced my understanding and passion for the field.",
    image: "https://i.pravatar.cc/150?u=20"
  },
  {
    name: "Pavan R V",
    course: "Data Science",
    university: "Amrita Vishwa Vidyapeetham",
    title: "Guidance and expertise were instrumental",
    text: "Thank you for providing such a valuable opportunity. Your guidance and expertise were instrumental in my learning journey. I deeply appreciate the knowledge gained and look forward to applying it in our future endeavors.",
    image: "https://i.pravatar.cc/150?u=30"
  },
  {
    name: "Prabash Tankala",
    course: "Web Development",
    university: "GITAM Deemed University",
    title: "This experience allowed me to enhance my technical skills",
    text: "I recently completed a rewarding internship where I had the opportunity to delve deeply into the field of Machine Learning over a period of two months. This experience allowed me to enhance my technical skills and gain practical insights into algorithms and applications.",
    image: "https://i.pravatar.cc/150?u=40"
  },
  {
    name: "Simran Yaseen",
    course: "Nanotechnology",
    university: "GD Goenka University",
    title: "This journey has been rewarding",
    text: "This journey has been rewarding, providing me with invaluable skills and insights that I am eager to apply in my professional endeavors. The experience has not only enhanced my expertise but also fueled my excitement for the future.",
    image: "https://i.pravatar.cc/150?u=50"
  },
  {
    name: "Aashi Makhija",
    course: "Marketing",
    university: "Vellore Institute Of Technology",
    title: "I got to learn how to build a strong network",
    text: "I'm happy to share with you all that I completed my internship as a Marketing Intern in the past 4 weeks. I performed three tasks of getting students of different fields getting enrolled in the company for different courses and internship programmes.",
    image: "https://i.pravatar.cc/150?u=60"
  }
];

/* ───────── categories & courses ───────── */
const categories = [
  { id: 'tech', label: 'Tech & Data', icon: Monitor },
  { id: 'mechanics', label: 'Mechanics', icon: Settings },
  { id: 'business', label: 'Business', icon: Briefcase },
  { id: 'medical', label: 'Medical', icon: Heart },
  { id: 'design', label: 'Design', icon: PenTool },
  { id: 'bootcamp', label: 'Bootcamp', icon: GraduationCap },
]

const courses = [
  // Tech & Data
  {
    id: 'tech-web',
    categoryId: 'tech',
    title: 'Web Development',
    image: '/courses/fullstack.png',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Web Fundamentals to Build Your Own Website',
    duration: '2 Months',
    mentees: '13k+',
  },
  {
    id: 'tech-android',
    categoryId: 'tech',
    title: 'Android Development',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop',
    isBestSeller: true,
    rating: 4,
    description: 'Master Android Programming to Create Your Own Mobile',
    duration: '2 Months',
    mentees: '10k+',
  },
  {
    id: 'tech-cyber',
    categoryId: 'tech',
    title: 'Cyber Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    isBestSeller: true,
    rating: 4.5,
    description: 'Master Cloud Security to Safeguard Your Digital Assets',
    duration: '2 Months',
    mentees: '12k+',
  },
  {
    id: 'tech-ai',
    categoryId: 'tech',
    title: 'Artificial Intelligence',
    image: '/courses/aiml.png',
    isBestSeller: false,
    rating: 4,
    description: 'Master AI to Innovate and Transform Industries',
    duration: '2 Months',
    mentees: '10k+',
  },
  {
    id: 'tech-ds',
    categoryId: 'tech',
    title: 'Data Science',
    image: '/courses/datascience.png',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Data Science to Unlock Insights from Data',
    duration: '2 Months',
    mentees: '15k+',
  },
  {
    id: 'tech-ml',
    categoryId: 'tech',
    title: 'Machine Learning',
    image: '/courses/machine_learning.png',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Machine Learning to Develop Intelligent Systems',
    duration: '2 Months',
    mentees: '9k+',
  },
  {
    id: 'tech-iot',
    categoryId: 'tech',
    title: 'IoT & Robotics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master IoT & Robotics to Build Smart & Automated Systems',
    duration: '2 Months',
    mentees: '16k+',
  },
  {
    id: 'tech-cloud',
    categoryId: 'tech',
    title: 'Cloud Computing',
    image: '/courses/cloudcomputing.png',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master in Revolutionize Digital Infrastructure',
    duration: '2 Months',
    mentees: '13k+',
  },
  {
    id: 'tech-embedded',
    categoryId: 'tech',
    title: 'Embedded System',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master in Developing High-Performance Devices',
    duration: '2 Months',
    mentees: '10k+',
  },

  // Mechanics
  {
    id: 'mech-hev',
    categoryId: 'mechanics',
    title: 'Hybrid & Electric Vehicles',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Hybrid & Electric Vehicles to Drive the Future of Transportation',
    duration: '2 Months',
    mentees: '8k+',
  },
  {
    id: 'mech-autocad',
    categoryId: 'mechanics',
    title: 'Auto CAD',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master AutoCAD Skills to Design and Develop Precision Engineering Projects',
    duration: '2 Months',
    mentees: '11k+',
  },

  // Business
  {
    id: 'biz-dm',
    categoryId: 'business',
    title: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Digital Marketing to Grow Your Online Presence',
    duration: '2 Months',
    mentees: '11k+',
  },
  {
    id: 'biz-fin',
    categoryId: 'business',
    title: 'Finance',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Finance to Navigate the World of Investments',
    duration: '2 Months',
    mentees: '12k+',
  },
  {
    id: 'biz-hr',
    categoryId: 'business',
    title: 'Human Resource',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master HR to Build & Manage Effective Teams',
    duration: '2 Months',
    mentees: '13k+',
  },
  {
    id: 'biz-stock',
    categoryId: 'business',
    title: 'Stock Market',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master in Making Informed Investment Decisions',
    duration: '2 Months',
    mentees: '14k+',
  },
  {
    id: 'biz-analytics',
    categoryId: 'business',
    title: 'Business Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Drive Smarter Decisions with Business Analytics Mastery',
    duration: '2 Months',
    mentees: '15k+',
  },
  {
    id: 'biz-law',
    categoryId: 'business',
    title: 'Corporate Law',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Legal Strategy for Corporate Law in Business',
    duration: '2 Months',
    mentees: '16k+',
  },

  // Medical
  {
    id: 'med-genetics',
    categoryId: 'medical',
    title: 'Genetics Engineering/ Nanotechnology',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Genetic Engineering to Pioneer Innovations in Science and Medicine',
    duration: '2 Months',
    mentees: '11k+',
  },
  {
    id: 'med-psych',
    categoryId: 'medical',
    title: 'Psychology',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Psychology to Understand and Improve Human Behaviour & Activity',
    duration: '2 Months',
    mentees: '12k+',
  },
  {
    id: 'med-coding',
    categoryId: 'medical',
    title: 'Medical Coding',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Medical Coding for Precise Healthcare Documentation Compliance',
    duration: '2 Months',
    mentees: '13k+',
  },

  // Design
  {
    id: 'des-uiux',
    categoryId: 'design',
    title: 'UI/UX Design',
    image: '/courses/uiux.png',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master UI/UX Design to Craft Engaging User Experiences',
    duration: '2 Months',
    mentees: '12k+',
  },
  {
    id: 'des-graphic',
    categoryId: 'design',
    title: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Graphic Design and Bring Creative Ideas to Life',
    duration: '2 Months',
    mentees: '13k+',
  },
  {
    id: 'des-fashion',
    categoryId: 'design',
    title: 'Fashion Designing',
    image: '/courses/fashion_designing.png',
    isBestSeller: false,
    rating: 4.5,
    description: 'Master Fashion Designing to Create Trendsetting Styles',
    duration: '2 Months',
    mentees: '14k+',
  },

  // Bootcamp
  {
    id: 'bc-drone',
    categoryId: 'bootcamp',
    title: 'Drone Engineering',
    image: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.0,
    description: 'Master Drone Engineering to Innovate Aerial Technology',
    duration: '2 Months',
    mentees: '10k+',
  },
  {
    id: 'bc-career',
    categoryId: 'bootcamp',
    title: 'Career Advancement Program',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.0,
    description: 'Accelerate Career Growth with Master Strategies',
    duration: '2 Months',
    mentees: '11k+',
  },
  {
    id: 'bc-robotics',
    categoryId: 'bootcamp',
    title: 'Robotics Engineering',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.0,
    description: 'Master in Design Transforming Intelligent Machine',
    duration: '2 Months',
    mentees: '13k+',
  },
  {
    id: 'bc-arvr',
    categoryId: 'bootcamp',
    title: 'AR VR',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
    isBestSeller: false,
    rating: 4.0,
    description: 'Master in Creating Interactive Digital Realities - AR & VR',
    duration: '2 Months',
    mentees: '14k+',
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
  const [activeCategory, setActiveCategory] = useState('tech')

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

        <div className="overflow-hidden relative w-full max-w-6xl mx-auto mask-edges py-4">
          <div className="flex animate-scroll w-max hover:cursor-pointer">
            {/* First half */}
            <div className="flex gap-8 sm:gap-16 items-center pr-8 sm:pr-16">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`p1-${partner.label}-${index}`} className="flex items-center gap-3 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl ${partner.bg} overflow-hidden`}
                  >
                    <img src={partner.image} alt={partner.label} className="w-full h-full object-cover" />
                  </motion.div>
                  <span className="text-sm font-medium text-white whitespace-pre-line text-left leading-tight">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Second half */}
            <div className="flex gap-8 sm:gap-16 items-center pr-8 sm:pr-16">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`p2-${partner.label}-${index}`} className="flex items-center gap-3 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl ${partner.bg} overflow-hidden`}
                  >
                    <img src={partner.image} alt={partner.label} className="w-full h-full object-cover" />
                  </motion.div>
                  <span className="text-sm font-medium text-white whitespace-pre-line text-left leading-tight">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY APEXSCHOOL ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative ambient-glow overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
              Why Choose ApexSchool ?
            </h2>
            
            {/* Connection Flow */}
            <div className="flex items-center justify-center max-w-3xl mx-auto gap-4 hidden md:flex">
              <div className="border border-white/20 rounded px-6 py-2 bg-white/5 text-sm font-semibold tracking-wide text-white">
                LEARNING CHALLENGES
              </div>
              <div className="flex-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="flex-1 h-0.5 bg-primary"></div>
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary"></div>
              </div>
              <div className="bg-primary text-white rounded px-6 py-2 text-sm font-semibold tracking-wide">
                HOW WE ENCOUNTER
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            {/* Left Column: Mobile Animation */}
            <div className="w-full lg:w-1/2 flex justify-center py-10 relative">
              <img 
                src="https://corizo.in/wp-content/themes/techglobiz/images/why-corizo-homepage-gif.gif" 
                alt="Mobile Chat Animation"
                className="w-full max-w-[550px] object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>

            {/* Right Column: Features */}
            <div className="w-full lg:w-1/2">
              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                staggerDelay={0.15}
              >
                {[
                  { icon: Play, text: 'LIVE Interactive Session' },
                  { icon: Award, text: 'Industry ratified certifications' },
                  { icon: Users, text: 'Expert Industry Mentor' },
                  { icon: FileText, text: 'Portfolio worthy projects' },
                  { icon: MessageCircle, text: 'Dedicated query session' },
                  { icon: Users, text: 'Active Community' },
                ].map((feature, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-4 p-4 rounded-xl h-full card-glow border border-[#2d1b69]/60"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
                        <feature.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-white leading-tight">
                        {feature.text}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Explore Programs
            </h2>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Select Type</h3>
              <div className="flex flex-col gap-3">
                {categories.map(cat => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all hover:cursor-pointer ${
                        isActive
                          ? 'bg-[#f4ebff] text-primary shadow-sm'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <cat.icon size={20} className={isActive ? 'text-primary' : 'text-gray-500'} />
                        <span className="font-semibold text-sm">{cat.label}</span>
                      </div>
                      <ChevronRight size={18} className={isActive ? 'text-primary' : 'text-gray-400'} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="flex-1">
              <StaggerContainer
                key={activeCategory}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                staggerDelay={0.1}
              >
                {courses.filter(c => c.categoryId === activeCategory).length > 0 ? (
                  courses.filter(c => c.categoryId === activeCategory).map((course) => (
                    <StaggerItem key={course.id}>
                      <Link to={`/course/${course.id}`} className="bg-white rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 group/card block">
                        {/* Image Area */}
                        <div className="h-48 relative overflow-hidden group">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {course.isBestSeller && (
                            <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md z-10">
                              Best Seller
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5">
                            <h3 className="text-xl font-bold text-white leading-tight group-hover/card:text-primary-light transition-colors">
                              {course.title}
                            </h3>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star 
                                key={star} 
                                size={14} 
                                className={star <= course.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} 
                              />
                            ))}
                          </div>

                          <p className="text-gray-700 text-sm font-medium mb-5 flex-1 line-clamp-2">
                            {course.description}
                          </p>

                          <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1.5 rounded-md text-xs text-gray-700 font-semibold">
                              <Calendar size={14} />
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1.5 rounded-md text-xs text-gray-700 font-semibold">
                              <Users size={14} />
                              {course.mentees}
                            </div>
                          </div>

                          <div className="text-primary font-bold text-sm flex items-center gap-1.5 group-hover/card:text-primary-dark transition-colors self-start mt-auto">
                            Know More <ArrowUpRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-gray-400">
                    <p>No courses available in this category yet.</p>
                  </div>
                )}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-20 relative w-full border-t border-white/5 overflow-hidden bg-black/20">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A Testimony to What We Do</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Marquee Row 1 */}
        <div className="w-full relative overflow-hidden mask-edges mb-6">
          <div className="flex animate-scroll w-max hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 px-3 shrink-0">
                {testimonials.slice(0, 3).map((testimony, j) => (
                  <div key={`r1-${j}`} className="w-[450px] bg-[#130c24] border border-[#2d1b69]/60 rounded-2xl p-6 hover:-translate-y-2 hover:border-primary/60 transition-all duration-300 shadow-xl group">
                    <div className="flex items-center gap-4 mb-5">
                      <img src={testimony.image} alt={testimony.name} className="w-14 h-14 rounded-full border-2 border-primary-light object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h4 className="text-white font-bold text-lg leading-tight">{testimony.name}</h4>
                        <p className="text-gray-400 text-xs font-medium">{testimony.course}</p>
                        <p className="text-primary-light text-[11px] font-semibold tracking-wide">{testimony.university}</p>
                      </div>
                    </div>
                    <h5 className="text-white font-semibold mb-3">{testimony.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{testimony.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Slightly slower) */}
        <div className="w-full relative overflow-hidden mask-edges pb-4">
          <div className="flex animate-scroll w-max hover:[animation-play-state:paused]" style={{ animationDuration: '28s', animationDirection: 'reverse' }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 px-3 shrink-0">
                {testimonials.slice(3, 6).map((testimony, j) => (
                  <div key={`r2-${j}`} className="w-[450px] bg-[#130c24] border border-[#2d1b69]/60 rounded-2xl p-6 hover:-translate-y-2 hover:border-primary/60 transition-all duration-300 shadow-xl group">
                    <div className="flex items-center gap-4 mb-5">
                      <img src={testimony.image} alt={testimony.name} className="w-14 h-14 rounded-full border-2 border-primary-light object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h4 className="text-white font-bold text-lg leading-tight">{testimony.name}</h4>
                        <p className="text-gray-400 text-xs font-medium">{testimony.course}</p>
                        <p className="text-primary-light text-[11px] font-semibold tracking-wide">{testimony.university}</p>
                      </div>
                    </div>
                    <h5 className="text-white font-semibold mb-3">{testimony.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{testimony.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#130c24] border border-[#2d1b69]/60 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl group">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hire talent that stands out!</h2>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              With relevant skills and experience at leading companies, our alumni could add value to your company
            </p>
            
            <button 
              onClick={onContactClick}
              className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto cursor-pointer"
            >
              Connect with us <ArrowUpRight size={20} />
            </button>
            
            {/* Logos */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center p-1 ${partner.bg}`}>
                    <img src={partner.image} alt={partner.label} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold text-left whitespace-pre-line leading-tight">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
