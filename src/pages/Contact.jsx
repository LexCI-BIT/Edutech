import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'kharkhana',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'apexschool.io.official@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70321 72953',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat, 9:00 AM - 7:00 PM IST',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <ScrollReveal variant="fadeLeft" className="flex flex-col justify-center">
            <span className="text-primary-light uppercase tracking-widest text-sm font-semibold mb-3">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-none mb-6">
              Let's talk about your{' '}
              <span className="gradient-text italic font-serif">future.</span>
            </h1>
            <p className="text-text-secondary text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
              Whether you have a question about courses, pricing, or just want to explore your options — we're here to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#231553] flex items-center justify-center border-none group-hover:bg-[#2d1b69] transition-all duration-300">
                    <item.icon className="text-[#a855f7]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                      {item.label}
                    </h4>
                    <p className="text-text-secondary text-sm sm:text-base mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column */}
          <ScrollReveal variant="fadeRight" className="flex items-center">
            <div className="w-full card-glow rounded-2xl p-6 sm:p-10 relative">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border-none text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border-none text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    required
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border-none text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-lg bg-[#1e1c2e] border-none text-text-primary text-sm placeholder:text-text-secondary resize-none focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  required
                />

                <motion.button
                  type="submit"
                  whileHover="hover"
                  className="w-full px-8 py-3.5 rounded-lg bg-[#8b5cf6] text-white font-semibold text-sm hover:bg-[#7c3aed] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <motion.span
                    variants={{
                      hover: { x: 4 }
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </motion.div>
  );
}
