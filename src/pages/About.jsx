import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, TrendingUp, Layers, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

// ── Counter hook ──────────────────────────────────────────────────────
function useCountUp(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    let startTime = null
    const numericEnd = parseInt(end.replace(/[^0-9]/g, ''), 10)

    function step(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * numericEnd))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [end, duration, startCounting])

  return count
}

// ── Stat Card ─────────────────────────────────────────────────────────
function StatCard({ value, suffix, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, 2000, isInView)

  return (
    <motion.div
      ref={ref}
      className="px-8 py-10 text-center flex flex-col items-center justify-center transition-colors hover:bg-primary/5"
    >
      <p className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-text-secondary mt-1">{label}</p>
    </motion.div>
  )
}

// ── Decorative Illustrations ──────────────────────────────────────────

function MissionIllustration() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <img src="/aboutus/ourmission.png" alt="Our Mission" className="w-full h-full object-cover" />
    </div>
  )
}

function VisionIllustration() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <img src="/aboutus/ourvision.png" alt="Our Vision" className="w-full h-full object-cover" />
    </div>
  )
}

function PhilosophyIllustration() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl">
      <img src="/aboutus/learningphilosopy.png" alt="Learning Philosophy" className="w-full h-full object-cover" />
    </div>
  )
}

// ── About Page ────────────────────────────────────────────────────────

const stats = [
  { value: '50', suffix: 'K+', label: 'Learners Worldwide' },
  { value: '500', suffix: '+', label: 'Expert Mentors' },
  { value: '1000', suffix: '+', label: 'Hiring Partners' },
  { value: '95', suffix: '%', label: 'Placement Support' },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4">
        <ScrollReveal variant="fadeUp" className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Education that{' '}
            <em className="gradient-text not-italic font-bold italic">bridges</em>{' '}
            <br />
            the gap.
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            We empower learners with industry-focused education that bridges the
            gap between learning and real-world careers.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────── */}
      <section className="pb-20 px-4">
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 border border-[#2d1b69]/40 bg-[#06060c] divide-x divide-y lg:divide-y-0 divide-[#2d1b69]/40">
            {stats.map((s) => (
              <StatCard
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Our Mission ──────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <ScrollReveal variant="fadeLeft" className="flex-1">
            <p className="text-sm font-semibold tracking-widest text-primary-light uppercase mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              Turning ambition into real&nbsp;outcomes.
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Our mission is to empower learners from all backgrounds with
              industry-relevant skills and hands-on experience. We partner with
              leading companies and seasoned mentors to deliver education that is
              practical, accessible, and directly tied to career outcomes — so
              every learner can turn their ambition into tangible results.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" className="flex-1 w-full max-w-md lg:max-w-none">
            <MissionIllustration />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Vision ───────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <ScrollReveal variant="fadeLeft" className="flex-1 w-full max-w-md lg:max-w-none">
            <VisionIllustration />
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" className="flex-1">
            <p className="text-sm font-semibold tracking-widest text-primary-light uppercase mb-3">
              Our Vision
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              A future where skills define&nbsp;success.
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              We envision a world where success is determined not by degrees
              alone, but by the skills you bring to the table. Our goal is to
              create a future where every student gains practical, in-demand
              capabilities — opening doors to meaningful careers, regardless of
              their starting point.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Learning Philosophy ──────────────────────────────────── */}
      <section className="py-20 pb-28 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <ScrollReveal variant="fadeLeft" className="flex-1">
            <p className="text-sm font-semibold tracking-widest text-primary-light uppercase mb-3">
              Learning Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              Learn by building. <br className="hidden sm:block" />
              Grow by shipping.
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              We believe theory without practice is incomplete. That's why every
              program is built around real projects, live challenges, and
              portfolio-ready work. Our learners don't just study concepts — they
              build, ship, and iterate, gaining confidence and competence that
              employers can see from day one.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" className="flex-1 w-full max-w-md lg:max-w-none">
            <PhilosophyIllustration />
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
