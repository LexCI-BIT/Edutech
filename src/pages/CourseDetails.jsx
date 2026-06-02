import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Star, Download, ArrowRight, User, Award, TrendingUp, Briefcase, ChevronDown, Users, Video, MessageSquare, ShieldCheck, Check, Zap, Lock } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { courses } from './Courses'
import { syllabusData } from '../data/syllabusData'
import { useCart } from '../context/CartContext'



export default function CourseDetails() {
  const { id } = useParams()
  const location = useLocation()
  const [course, setCourse] = useState(null)
  const [openModule, setOpenModule] = useState(null)
  const { addToCart, cartItems } = useCart()

  const activeTab = location.hash === '#syllabus' ? 'syllabus' : 'overview';

  const isAdded = course ? cartItems.some(item => item.id === course.id) : false;

  const courseSyllabus = course && syllabusData[course.id] && syllabusData[course.id].length > 0
    ? syllabusData[course.id]
    : (syllabusData['tech-web'] || []);

  const handleAddToCart = () => {
    if (course) {
      addToCart(course);
    }
  };

  useEffect(() => {
    // Find course by ID
    const foundCourse = courses.find(c => c.id === id)
    if (foundCourse) {
      setCourse(foundCourse)
    } else {
      // Fallback if not found, use web development as default for the screenshot layout
      setCourse(courses.find(c => c.id === 'tech-web'))
    }
  }, [id])

  if (!course) return <div className="min-h-screen bg-bg-dark flex items-center justify-center text-white">Loading...</div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg-dark text-white font-sans relative"
      style={{
        backgroundImage: 'url("/courses/mainbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a1a]/80"></div>
      
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <div className="relative z-10">
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            {/* Left: Image & Stats */}
            <ScrollReveal variant="fadeRight" className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#2d1b69]/40 bg-[#130f26] shadow-2xl relative aspect-[4/3]">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>
                
                {/* Dots mimicking carousel */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    <div className="w-6 h-1 rounded-full bg-[#a855f7]"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                </div>
              </div>
              
              {/* Stats strip */}
              <div className="bg-[#130f26]/80 border border-[#2d1b69]/40 rounded-2xl p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                    <Users className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">50,000+</p>
                    <p className="text-gray-400 text-xs">Learners Enrolled</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-[#2d1b69]/40 pl-4">
                  <div className="w-10 h-10 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                    <Star className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{course.rating || '4.8'}</p>
                    <p className="text-gray-400 text-xs">Average Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-[#2d1b69]/40 pl-4">
                  <div className="w-10 h-10 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Industry</p>
                    <p className="text-gray-400 text-xs">Recognized</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Info & Cart */}
            <ScrollReveal variant="fadeLeft">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 text-[#a855f7] text-xs font-bold uppercase tracking-wider bg-[#1a103c] border border-[#a855f7]/30 px-3 py-1 rounded-full w-fit">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
                Master the art of building modern, responsive, and high-performance websites from scratch.
              </p>
              
              <div className="text-4xl font-bold text-white mb-8">
                <span className="text-[#a855f7]">₹</span>14,000<span className="text-[#a855f7]">.00</span>
              </div>

              <div className="bg-[#130f26]/60 border border-[#2d1b69]/40 rounded-2xl p-6 space-y-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#a855f7]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">All benefits of</p>
                    <p className="text-white font-bold text-sm">Self Paced</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Live Sessions</p>
                    <p className="text-gray-400 text-xs">Interactive live classes with industry experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Doubt Clearing Sessions</p>
                    <p className="text-gray-400 text-xs">Get your doubts resolved anytime</p>
                  </div>
                </div>
              </div>

              {isAdded ? (
                <button className="w-full bg-[#3b0764] text-white font-bold py-4 rounded-xl flex items-center justify-between px-6 transition-colors border border-[#a855f7]/30 cursor-pointer">
                    Added to cart <Check className="w-5 h-5" />
                </button>
              ) : (
                <button onClick={handleAddToCart} className="w-full bg-[#5b21b6] hover:bg-[#6d28d9] text-white font-bold py-4 rounded-xl flex items-center justify-between px-6 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer">
                    Add to cart <ArrowRight className="w-5 h-5" />
                </button>
              )}

              <div className="grid grid-cols-3 gap-4 mt-6 border border-[#2d1b69]/40 rounded-xl p-4 bg-[#130f26]/40">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                  <span className="text-[10px] text-gray-400 leading-tight">7 Days<br/>Money Back</span>
                </div>
                <div className="flex items-center justify-center gap-2 border-l border-[#2d1b69]/40 pl-4">
                  <ShieldCheck className="w-4 h-4 text-gray-500 shrink-0" />
                  <span className="text-[10px] text-gray-400 leading-tight">Lifetime<br/>Access</span>
                </div>
                <div className="flex items-center justify-center gap-2 border-l border-[#2d1b69]/40 pl-4">
                  <Lock className="w-4 h-4 text-gray-500 shrink-0" />
                  <span className="text-[10px] text-gray-400 leading-tight">Secure<br/>Payment</span>
                </div>
              </div>

            </ScrollReveal>
          </div>
        </section>

      {/* ── OVERVIEW & FORM SECTION (OVERVIEW TAB) ───────────────── */}
      {activeTab === 'overview' && (
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Overview */}
          <ScrollReveal variant="fadeRight">
            <h3 className="text-3xl font-bold text-white mb-2">Overview</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-8"></div>
            
            <h4 className="text-xl font-bold text-primary-light mb-2">Program Highlight</h4>
            <p className="text-gray-400 text-sm mb-10">Transform Your Skills with Our Comprehensive Program</p>

            <div className="space-y-6">
              {[
                { icon: User, text: 'Designed for executives, consultants, and entrepreneurs' },
                { 
                  icon: Award, 
                  text: 'Accreditation from NSDC', 
                  img: 'https://corizo.in/wp-content/uploads/2025/02/Frame-1686563909.png' 
                },
                { 
                  icon: Award, 
                  text: 'Accreditation from Skill India', 
                  img: 'https://corizo.in/wp-content/uploads/2025/02/Frame-1686563908.png' 
                },
                { icon: TrendingUp, text: 'Fosters expertise and innovation for professional growth' },
                { icon: Briefcase, text: '100+ Internship Partners' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a103c] rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <item.icon className="w-5 h-5 text-primary-light" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
                    <span className="text-gray-300 font-medium text-sm leading-snug">
                      {item.text}
                    </span>
                    {item.img && (
                      <div className="bg-white rounded px-2 py-1 flex items-center justify-center shrink-0 w-24">
                        <img src={item.img} alt="Logo" className="max-h-8 object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal variant="fadeLeft">
            <div className="bg-gradient-to-b from-[#1a103c]/40 to-transparent border border-primary/30 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">
                Fill the form to apply for <br />
                {course.title} Program
              </h3>

              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">First Name <span className="text-primary-light">*</span></label>
                  <input type="text" placeholder="Name" className="w-full bg-[#0d0b1e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone number <span className="text-primary-light">*</span></label>
                  <input type="tel" placeholder="Phone number" className="w-full bg-[#0d0b1e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email ID <span className="text-primary-light">*</span></label>
                  <input type="email" placeholder="Email Address" className="w-full bg-[#0d0b1e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">College name <span className="text-primary-light">*</span></label>
                  <input type="text" placeholder="College name*" className="w-full bg-[#0d0b1e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" />
                </div>
                
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg mt-4 transition-colors cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  Enquiry
                </button>
              </form>
            </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── SYLLABUS SECTION (SYLLABUS TAB) ───────────────────── */}
      {activeTab === 'syllabus' && (
      <section id="syllabus" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Floating Dotted Patterns */}
        <div className="absolute top-20 left-20 opacity-30 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
          </div>
        </div>
        <div className="absolute top-32 right-32 opacity-30 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
          </div>
        </div>
        <div className="absolute top-48 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <span className="text-[#a855f7] uppercase tracking-[0.3em] text-xs font-bold mb-3 block">CURRICULUM</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a855f7] mb-4">Syllabus</h2>
            <p className="text-gray-400 text-sm sm:text-base">A step-by-step learning path designed to take you from<br/>beginner to industry-ready professional.</p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="bg-[#0b0515]/60 border border-[#2d1b69]/40 rounded-3xl p-6 sm:p-8 space-y-4 backdrop-blur-xl shadow-[0_0_50px_rgba(45,27,105,0.2)]">
              {courseSyllabus.map((item) => {
                const isOpen = openModule === item.id
                return (
                  <div key={item.id} className="bg-[#120826] border border-[#2d1b69]/80 hover:border-[#4a2b99] rounded-2xl overflow-hidden transition-all duration-300 group shadow-lg">
                    <button 
                      onClick={() => setOpenModule(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between p-4 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-11 h-11 bg-gradient-to-br from-[#4b1085] to-[#2d0859] rounded-xl flex items-center justify-center font-bold text-white shrink-0 border border-[#5b199e]/40 shadow-inner">
                          {item.id}
                        </div>
                        <span className="font-semibold text-sm sm:text-[15px] text-left text-gray-200 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full border border-[#4b1085] bg-[#1a0a3a]/50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#4b1085]' : ''}`}>
                        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#a855f7]'}`} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 pt-0 pl-[76px] text-sm text-gray-400 mt-1 mx-4 border-t border-[#2d1b69]/30">
                            <div className="pt-4 space-y-3">
                              {item.topics.map((topic, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                                  <span className="text-gray-300">{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
      )}
      </div>
    </motion.div>
  )
}
