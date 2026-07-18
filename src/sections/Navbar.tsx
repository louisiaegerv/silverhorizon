import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from '@/components/Logo'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.6, 0.35, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-2 md:px-4 py-3 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'border border-transparent'
        }`}
      >
        <Logo variant="light" />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-lg px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-sm bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
          >
            Book a Call
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md md:rounded-xl glass text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-strong absolute inset-x-4 top-full mt-2 rounded-2xl p-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
