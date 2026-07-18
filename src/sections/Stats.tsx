import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal } from '@/components/Reveal'

function Counter({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setVal(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const metrics = [
  { to: 3.4, suffix: 'x', decimals: 1, label: 'Average ROI in year one', note: 'across active engagements' },
  { to: 87, suffix: '%', label: 'Reduction in manual work', note: 'median across deployments' },
  { to: 14, suffix: ' days', label: 'To first live automation', note: 'median time to production' },
  { to: 24, suffix: '/7', label: 'Always-on operations', note: 'agents never sleep' },
]

export default function Stats() {
  return (
    <section id="results" className="relative isolate py-28 sm:py-32">
      {/* faint image reuse for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/silver-horizon-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-[50%_85%] opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060d] via-[#04060d]/85 to-[#04060d]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <span className="glass-soft inline-block rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-sky-300">
            Results
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Numbers that <span className="text-gradient">speak</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass group relative overflow-hidden rounded-3xl p-8 text-center transition-colors duration-500 hover:border-sky-400/30"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
                <div className="font-display text-gradient text-5xl font-semibold tracking-tight sm:text-[3.4rem]">
                  <Counter to={m.to} suffix={m.suffix} decimals={m.decimals ?? 0} />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-200">{m.label}</p>
                <p className="mt-1 text-xs text-slate-500">{m.note}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
