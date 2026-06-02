import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'Press', path: '#' },
  ],
  Programs: [
    { name: 'Full Stack Development', path: '/courses' },
    { name: 'Data Science', path: '/courses' },
    { name: 'AI & Machine Learning', path: '/courses' },
    { name: 'Cloud Computing', path: '/courses' },
  ],
  Support: [
    { name: 'Help Center', path: '#' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <ScrollReveal variant="fadeUp" className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-green-dot" />
              <span className="text-xl font-bold text-text-primary">ApexSchool</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Accelerate your career with world-class programs, expert mentorship, 
              and real-world learning experiences designed for the future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-border-purple flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <ScrollReveal key={title} variant="fadeUp" delay={0.1 * (i + 1)}>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-text-secondary hover:text-primary-light transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Info */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border-purple flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
              <a href="mailto:hello@edutech.in" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                <Mail size={14} />
                hello@edutech.in
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                <Phone size={14} />
                +91 1234567890
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                xxxxxxxxxx
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <ScrollReveal variant="fadeIn" delay={0.4}>
          <div className="mt-8 pt-6 border-t border-border-purple text-center">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} ApexSchool. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
