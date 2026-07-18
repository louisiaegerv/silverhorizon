import { Hexagon, Triangle, Layers, Zap, Globe, Cpu, Command, Aperture } from 'lucide-react'

const partners = [
  { icon: Hexagon, name: 'NEXALYX' },
  { icon: Triangle, name: 'VANTACORE' },
  { icon: Layers, name: 'STRATUM' },
  { icon: Zap, name: 'VOLTIQ' },
  { icon: Globe, name: 'MERIDIAN' },
  { icon: Cpu, name: 'CIRCUITRY' },
  { icon: Command, name: 'KEYPEAK' },
  { icon: Aperture, name: 'LUMENAR' },
]

export default function Marquee() {
  const row = [...partners, ...partners]
  return (
    <section className="relative border-y border-white/5 bg-[#05070e]/80 py-10">
      <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500">
        Powering operations for forward-thinking teams
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {row.map(({ icon: Icon, name }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 text-slate-500 transition-colors duration-300 hover:text-slate-200"
            >
              <Icon size={18} strokeWidth={1.6} />
              <span className="font-display text-sm font-medium tracking-[0.22em]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
