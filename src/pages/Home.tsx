import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Services from '@/sections/Services'
import Process from '@/sections/Process'
import Stats from '@/sections/Stats'
import Testimonials from '@/sections/Testimonials'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#04060d] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
