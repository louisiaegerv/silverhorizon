import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem]">
            {/* image backdrop */}
            <div className="absolute inset-0">
              <img
                src="/images/silver-horizon-hero.jpg"
                alt=""
                className="h-full w-full object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-[#04060d]/72 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#04060d] via-transparent to-[#04060d]/60" />
            </div>

            {/* animated border glow */}
            <div className="animate-border-flow pointer-events-none absolute inset-0 rounded-[2.5rem] border border-transparent bg-[linear-gradient(120deg,rgba(56,189,248,0.5),transparent_30%,transparent_70%,rgba(251,146,60,0.4))] bg-[length:300%_300%] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-px" />

            <div className="glass relative flex flex-col items-center border-0 px-8 py-20 text-center sm:px-16 sm:py-24">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.6, 0.35, 1] }}
                className="glass mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
              >
                <CalendarClock size={26} className="text-sky-300" strokeWidth={1.6} />
              </motion.div>

              <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Your competitors are automating.
                <br />
                <span className="text-gradient">Will you lead — or catch up?</span>
              </h2>
              <p className="mt-6 max-w-xl text-slate-300/90">
                Book a free 30-minute automation audit. We'll map your three highest-ROI
                opportunities — yours to keep, whether we work together or not.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href="mailto:hello@silverhorizon.ai"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 px-9 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_50px_rgba(56,189,248,0.55)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Claim Your Free Audit
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <span className="text-xs text-slate-400">No commitment · Response within 24 hours</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
