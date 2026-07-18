import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const testimonials = [
  {
    quote:
      'Silver Horizon rebuilt our entire support operation with AI agents. Resolution time dropped 78% in six weeks — and our team finally does the work humans should be doing.',
    name: 'Elena Voss',
    role: 'COO, Meridian Logistics',
    initials: 'EV',
  },
  {
    quote:
      'They didn\'t sell us hype. They audited, prioritized by ROI, and shipped. Our invoice processing went from 3 days to 11 minutes, fully autonomous.',
    name: 'Marcus Chen',
    role: 'VP Operations, Vantacore',
    initials: 'MC',
  },
  {
    quote:
      'The custom LLM system they built knows our product catalog better than most of our hires. It\'s like onboarding a genius employee who never sleeps.',
    name: 'Priya Raman',
    role: 'Founder & CEO, Lumenar',
    initials: 'PR',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate py-28 sm:py-36">
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-full rounded-full bg-sky-500/8 blur-[150px]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <span className="glass-soft inline-block rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-sky-300">
            Client voices
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Trusted at the <span className="text-gradient">frontier</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <motion.figure
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="glass group relative flex h-full flex-col rounded-3xl p-8 transition-colors duration-500 hover:border-sky-400/30"
              >
                <Quote size={28} className="mb-5 text-sky-400/40 transition-colors duration-500 group-hover:text-sky-400/70" strokeWidth={1.4} />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-orange-300 text-orange-300" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
                  <span className="font-display flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/25 bg-gradient-to-br from-sky-400/20 to-cyan-300/5 text-sm font-semibold text-sky-200">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
