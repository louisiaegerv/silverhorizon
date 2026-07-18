import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Play, Bot, Workflow, BrainCircuit } from 'lucide-react'

const ease = [0.21, 0.6, 0.35, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
}

const item = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease },
  },
}

const stats = [
  { value: '120+', label: 'Automations shipped' },
  { value: '$18M', label: 'Client costs saved' },
  { value: '40hrs', label: 'Saved weekly per team' },
  { value: '99.9%', label: 'Workflow uptime' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.7], ['0%', '-18%'])

  return (
    <section ref={ref} id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      {/* ---- Background image with parallax ---- */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <motion.img
          src="/images/silver-horizon-hero.jpg"
          alt="Silver Horizon futuristic headquarters at sunset"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
        />
      </motion.div>

      {/* ---- Cinematic overlays ---- */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#04060d]/80 via-[#04060d]/35 to-[#04060d]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04060d]/70 via-transparent to-[#04060d]/50" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      {/* readability vignette behind headline */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_52%_42%_at_50%_46%,rgba(4,6,13,0.72),transparent_70%)]" />

      {/* ---- Floating ambient glows ---- */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-[130px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px] animate-float-slow [animation-delay:2.5s]" />

      {/* ---- Content ---- */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-40 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center">
          {/* Badge */}
          <motion.div variants={item} className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles size={14} className="text-sky-300" />
            <span className="text-xs font-medium tracking-[0.18em] text-slate-200 uppercase">
              AI &amp; Automation Agency
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Where intelligence
            <br />
            meets the{' '}
            <span className="text-gradient animate-shimmer bg-[linear-gradient(100deg,#e8eef5,#9fc7e8,#4db8ff,#e8eef5)] bg-clip-text text-transparent">
              horizon
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={item} className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
            Silver Horizon designs and deploys AI agents, intelligent workflows, and end-to-end
            automation systems — so your business runs faster, leaner, and beyond the limits of
            manual work.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_45px_rgba(56,189,248,0.5)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Start Your Automation
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="glass group inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-sky-400/40 hover:bg-white/10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/20">
                <Play size={11} className="ml-0.5 fill-sky-300 text-sky-300" />
              </span>
              Explore Capabilities
            </a>
          </motion.div>

          {/* Floating mini-chips */}
          <motion.div variants={item} className="mt-12 hidden flex-wrap items-center justify-center gap-3 md:flex">
            {[
              { icon: Bot, text: 'Autonomous AI Agents' },
              { icon: Workflow, text: 'Workflow Orchestration' },
              { icon: BrainCircuit, text: 'Custom LLM Systems' },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className="glass-soft animate-float-slow flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-300"
                style={{ animationDelay: `${i * 1.4}s` }}
              >
                <Icon size={13} className="text-sky-300" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ---- Stats strip ---- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10"
      >
        <div className="glass grid grid-cols-2 gap-y-6 rounded-3xl px-8 py-7 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-1 text-center ${
                i > 0 ? 'md:border-l md:border-white/10' : ''
              }`}
            >
              <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">{s.value}</span>
              <span className="text-xs tracking-wide text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="pointer-events-none absolute bottom-36 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <div className="flex h-9 w-5.5 justify-center rounded-full border border-white/25 p-1.5">
          <div className="h-1.5 w-1 rounded-full bg-sky-300 animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  )
}
