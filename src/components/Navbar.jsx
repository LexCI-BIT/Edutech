import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { cartItems, toggleCart } = useCart()

  const isCoursePage = location.pathname.startsWith('/course/');
  
  const currentNavLinks = isCoursePage ? [
    { name: 'Overview', path: '#overview' },
    { name: 'Syllabus', path: '#syllabus' }
  ] : navLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-3 h-3 rounded-full bg-green-dot group-hover:animate-pulse transition-all" />
            <span className="text-lg lg:text-xl font-bold text-text-primary tracking-tight">
              ApexSchool
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {currentNavLinks.map((link) => {
              const isActive = isCoursePage 
                ? (location.hash === link.path || (location.hash === '' && link.path === '#overview'))
                : (location.pathname === link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-light active'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Actions: SignUp + Cart */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/signin"
              className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white inline-block"
            >
              <span>SignUp/SignIn</span>
            </Link>
            
            <button 
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-[#a855f7] transition-colors cursor-pointer group"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#a855f7] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-[#a855f7] transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#a855f7] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border-purple"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => {
                const isContact = link.name === 'Contact Us';
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary-light'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/signin"
                  className="btn-primary block text-center px-5 py-3 rounded-lg text-sm font-semibold text-white mt-4"
                >
                  <span>SignUp/SignIn</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
