import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CourseDetails from './pages/CourseDetails'
import Checkout from './pages/Checkout'
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './context/CartContext'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup'

  return (
    <CartProvider>
      <div className="min-h-screen bg-bg-dark">
        <Navbar onContactClick={() => setIsContactModalOpen(true)} />
        <CartSidebar />
        
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onContactClick={() => setIsContactModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses onContactClick={() => setIsContactModalOpen(true)} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>

      {!isAuthPage && <Footer />}

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
    </CartProvider>
  )
}

export default App
