import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-bg-card rounded-2xl border border-border-purple p-6 sm:p-8 relative gradient-border">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-text-primary mb-2">Contact Us</h2>
              <p className="text-text-secondary text-sm mb-6">
                Leave your details and we'll get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Please enter your name"
                  className="input-field w-full px-4 py-3 rounded-lg text-text-primary text-sm placeholder:text-text-muted"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Please enter your email"
                  className="input-field w-full px-4 py-3 rounded-lg text-text-primary text-sm placeholder:text-text-muted"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Please enter your phone number"
                  className="input-field w-full px-4 py-3 rounded-lg text-text-primary text-sm placeholder:text-text-muted"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows={4}
                  className="input-field w-full px-4 py-3 rounded-lg text-text-primary text-sm placeholder:text-text-muted resize-none"
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-lg text-white font-semibold text-sm"
                >
                  <span>Send</span>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
