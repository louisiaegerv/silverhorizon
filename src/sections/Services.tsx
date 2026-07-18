import { motion } from 'framer-motion'
import {
  Bot,
  Workflow,
  BrainCircuit,
  MessageSquareText,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const services = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    desc: 'Custom agents that research, decide, and execute — handling support, ops, and sales tasks around the clock without supervision.',
    tag: 'Flagship',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'End-to-end orchestration across your stack. We connect CRMs, ERPs, and internal tools into seamless, self-running pipelines.',
  },
  {
    icon: BrainCircuit,
    title: 'Custom LLM Systems',
    desc: 'Fine-tuned and RAG-powered language systems trained on your data, your voice, and your domain knowledge.',
  },
  {
    icon: MessageSquareText,
    title: 'Conversational AI',
    desc: 'Human-grade chat and voice experiences for support and sales — fluent in your products from day one.',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    desc: 'Predictive analytics and real-time dashboards that turn raw operational data into decisions you can act on.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Governance & Security',
    desc: 'Guardrails, evals, and compliance frameworks so your AI stays accurate, auditable, and enterprise-safe.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative isolate py-28 sm:py-36">
      {/* ambient */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-full -translate-x-1/2 rounded-full bg-sky-500/8 blur-[160px]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <span className="glass-soft inline-block rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-sky-300">
            What we build
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Capability, engineered{' '}
            <span className="text-gradient">end to end</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            From first audit to fully autonomous operations — every system we ship is built for
            measurable ROI, not demos.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-colors duration-500 hover:border-sky-400/30"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/0 blur-3xl transition-all duration-700 group-hover:bg-sky-400/20" />
                {/* top sheen */}
                <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {s.tag && (
                  <span className="absolute right-5 top-5 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-300">
                    {s.tag}
                  </span>
                )}

                <div className="mb-6 inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/15 to-cyan-300/5 p-3.5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon size={24} className="text-sky-300" strokeWidth={1.7} />
                </div>

                <h3 className="font-display mb-3 text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-sky-300/0 transition-all duration-500 group-hover:text-sky-300">
                  Learn more
                  <ArrowUpRight size={13} className="-translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
