import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal'

const plans = [
  {
    name: 'STARTER',
    monthlyPrice: 999,
    yearlyPrice: 799,
    popular: false,
    features: [
      { text: '5 Courses Access', included: true },
      { text: 'Community Forum', included: true },
      { text: 'Basic Projects', included: true },
      { text: '1-on-1 Mentorship', included: false },
      { text: 'Career Support', included: true },
      { text: 'Certificate', included: true },
    ],
  },
  {
    name: 'PRO',
    monthlyPrice: 2499,
    yearlyPrice: 1499,
    popular: true,
    features: [
      { text: 'Unlimited Courses', included: true },
      { text: 'Priority Community', included: true },
      { text: 'All Projects + Reviews', included: true },
      { text: '2 Mentor Sessions/mo', included: true },
      { text: 'Basic Career Support', included: true },
      { text: 'Verified Certificate', included: true },
    ],
  },
  {
    name: 'PREMIUM',
    monthlyPrice: 4999,
    yearlyPrice: 3999,
    popular: false,
    features: [
      { text: 'Unlimited Everything', included: true },
      { text: 'VIP Community Access', included: true },
      { text: 'Live Code Reviews', included: true },
      { text: '8 Mentor Sessions/mo', included: true },
      { text: 'Full Placement Support', included: true },
      { text: 'Premium Certificate', included: true },
    ],
  },
]

function PriceDisplay({ price, isYearly }) {
  return (
    <div className="flex items-end gap-1 mb-1">
      <span className="text-text-secondary text-2xl">₹</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={price}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-5xl font-bold text-text-primary"
        >
          {price.toLocaleString('en-IN')}
        </motion.span>
      </AnimatePresence>
      <span className="text-text-secondary text-lg mb-1">/mo</span>
    </div>
  )
}

function PricingCard({ plan, isYearly }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice

  return (
    <div className={`relative card-glow rounded-2xl p-8 ${plan.popular ? 'pricing-popular' : ''}`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
          Most Popular
        </span>
      )}

      <h3 className="text-text-secondary text-sm font-semibold tracking-widest mb-6">
        {plan.name}
      </h3>

      <PriceDisplay price={price} isYearly={isYearly} />

      <p className="text-text-muted text-sm mb-8">
        {isYearly ? 'Per month, billed annually' : 'Per month'}
      </p>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary-light flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-text-muted flex-shrink-0" />
            )}
            <span
              className={
                feature.included
                  ? 'text-text-secondary'
                  : 'text-text-muted line-through'
              }
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {plan.popular ? (
        <Link to="/signup">
          <button className="btn-primary rounded-lg py-3 w-full font-semibold cursor-pointer">
            <span>Get Started →</span>
          </button>
        </Link>
      ) : (
        <Link to="/signup">
          <button className="border border-border-purple rounded-lg py-3 w-full text-text-primary font-semibold hover:border-primary transition-colors duration-300 cursor-pointer">
            Get Started →
          </button>
        </Link>
      )}
    </div>
  )
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg-dark"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal variant="fadeUp">
            <span className="text-primary-light uppercase tracking-widest text-sm font-medium">
              SIMPLE PRICING
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mt-4 mb-4">
              Invest in yourself.{' '}
              <span className="gradient-text">Return tenfold.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              No hidden fees. Cancel anytime. Every plan includes full course access.
            </p>
          </ScrollReveal>

          {/* Toggle */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="bg-bg-card rounded-full p-1 border border-border-purple inline-flex items-center">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    !isYearly
                      ? 'bg-primary text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isYearly
                      ? 'bg-primary text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Yearly
                </button>
              </div>
              <AnimatePresence>
                {isYearly && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full font-medium"
                  >
                    Save 20%
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start"
            staggerDelay={0.15}
          >
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <PricingCard plan={plan} isYearly={isYearly} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </motion.div>
  )
}
