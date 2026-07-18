import { motion } from 'framer-motion'
import { Search, DraftingCompass, Rocket, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Audit & Discovery',
    desc: 'We map your operations and surface the highest-leverage automation opportunities — ranked by ROI before we write a line of code.',
  },
  {
    icon: DraftingCompass,
    num: '02',
    title: 'Design & Architect',
    desc: 'Blueprints for agents, pipelines, and integrations — engineered to slot into your existing stack without disruption.',
  },
  {
    icon: Rocket,
    num: '03',
    title: 'Build & Deploy',
    desc: 'Rapid, iterative delivery. Most clients see their first live automation in production within two to four weeks.',
  },
  {
    icon: TrendingUp,
    num: '04',
    title: 'Optimize & Scale',
    desc: 'Continuous monitoring, evaluation, and tuning. Your systems get smarter — and your savings compound — over time.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative isolate py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-500/8 blur-[150px]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-20 text-center">
          <span className="glass-soft inline-block rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-sky-300">
            How we work
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From manual to{' '}
            <span className="text-gradient-warm">autonomous</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A proven four-phase delivery model that takes you from first workshop to
            self-running operations.
          </p>
        </Reveal>

        <div className="relative">
          {/* connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: [0.21, 0.6, 0.35, 1] }}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-sky-400/60 via-cyan-300/40 to-orange-400/50 lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15}>
                <div className="group relative">
                  <div className="relative z-10 mb-7 inline-flex">
                    <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:border-sky-400/40 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                      <step.icon size={22} className="text-sky-300" strokeWidth={1.7} />
                    </div>
                    <span className="font-display absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-300 text-[10px] font-bold text-slate-950">
                      {i + 1}
                    </span>
                  </div>
                  <span className="font-display bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-6xl font-bold text-transparent">
                    {step.num}
                  </span>
                  <h3 className="font-display -mt-4 mb-3 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
