import Logo from '@/components/Logo'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const cols = [
  {
    title: 'Services',
    links: ['AI Agents', 'Workflow Automation', 'Custom LLMs', 'Conversational AI', 'Data Intelligence'],
  },
  {
    title: 'Company',
    links: ['About', 'Case Studies', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Security', 'AI Ethics'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#03050a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo variant="light" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Engineering intelligent systems that move business forward — beyond the horizon of
              what's manual.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="glass-soft flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:border-sky-400/40 hover:text-sky-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-slate-500 transition-colors duration-300 hover:text-sky-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Silver Horizon. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with intelligence. Run by automation.
          </p>
        </div>
      </div>
    </footer>
  )
}
