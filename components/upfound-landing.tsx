'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, ChevronDown, Globe2, Menu, Mouse, Sparkles } from 'lucide-react'
import { useState } from 'react'

const navItems = ['Home', 'About', 'Services', 'Pricing', 'Solution']

export function UpFoundLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#031e1a] text-[#eaf5ec] selection:bg-[#5ef39a] selection:text-[#03231c]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_44%,rgba(39,155,125,.34),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(37,212,139,.18),transparent_28%),linear-gradient(135deg,#062821_0%,#073c35_48%,#021b1a_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(1,17,16,.42)_78%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-3 z-[2] rounded-[28px] border border-white/[.07]" aria-hidden="true" />
      <div className="upfound-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <header className="pointer-events-auto relative z-30 px-8 pt-7 lg:px-16">
        <nav className="mx-auto flex max-w-[1240px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2 text-[13px] font-medium tracking-tight"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#62ec9b] text-[#05251d]"><Sparkles size={14} fill="currentColor" /></span>UpFound</a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.09] p-1.5 text-[11px] text-[#aac8bb] shadow-lg backdrop-blur-xl md:flex">
            {navItems.map((item, index) => <a key={item} href={index === 0 ? '#home' : `#${item.toLowerCase()}`} className={`rounded-full px-4 py-2 transition ${index === 0 ? 'bg-white/15 text-white' : 'hover:bg-white/10 hover:text-white'}`}>{item}{item === 'Services' && <ChevronDown className="ml-1 inline" size={11} />}</a>)}
            <span className="mx-1 h-4 w-px bg-white/10" /><button className="rounded-full px-3 py-2 hover:bg-white/10" aria-label="Select language"><Globe2 className="mr-1 inline" size={12} />English <ChevronDown className="ml-1 inline" size={11} /></button>
          </div>
          <a href="#signup" className="hidden rounded-full bg-[#46dc87] px-5 py-2.5 text-[11px] font-semibold text-[#05261d] shadow-[0_0_30px_rgba(70,220,135,.22)] transition hover:bg-[#72f5a8] md:block">Login / Register</a>
          <button className="rounded-full border border-white/10 p-2 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Menu size={18} /></button>
        </nav>
        {menuOpen && <div className="mx-auto mt-3 grid max-w-sm gap-1 rounded-2xl border border-white/10 bg-[#092d27]/95 p-3 text-center text-sm backdrop-blur-xl md:hidden">{navItems.map(item => <a key={item} href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-xl py-3 text-[#c1d5cb] hover:bg-white/10">{item}</a>)}<a href="#signup" className="rounded-xl bg-[#46dc87] py-3 font-semibold text-[#05261d]">Login / Register</a></div>}
      </header>

      <section id="home" className="pointer-events-none relative z-10 mx-auto flex min-h-[980px] max-w-[1400px] sm:min-h-[calc(100vh-5rem)] flex-col px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
        <h1 className="pointer-events-none absolute left-1/2 top-[8%] z-0 -translate-x-1/2 sm:top-[4%] lg:top-[3%] whitespace-nowrap text-[clamp(4.5rem,15.8vw,14.5rem)] font-light leading-none tracking-[-.11em] text-[#c9eee2]/[.27]">Legacy Bank</h1>
        <div className="relative z-10 mt-[66vh] max-w-[300px] sm:mt-[40vh] lg:mt-[35vh]">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[clamp(2rem,7vw,2.5rem)] font-medium uppercase leading-[1.02] tracking-[-.06em] text-white">Fuel for<br />startups</motion.p>
          <p className="mt-3 max-w-[220px] text-[10px] leading-[1.45] text-[#a8c8bb]">Strategic guidance, funding support, and growth acceleration for early-stage ventures.</p>
          <div className="mt-5 flex gap-3"><a href="#signup" className="rounded-full bg-[#46dc87] px-5 py-3 text-[10px] font-semibold text-[#04281e] transition hover:bg-[#78f4aa]">Get Started</a><a href="#about" className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-[10px] text-white transition hover:bg-white/20">Contact Us</a></div>
        </div>

        <div className="pointer-events-auto absolute left-1/2 top-[14%] z-10 h-[335px] w-[292px] -translate-x-1/2 sm:top-[7%] sm:h-[485px] sm:w-[405px] lg:top-[6%] lg:h-[515px] lg:w-[430px]">
          <motion.div className="relative h-full w-full" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
<motion.div whileHover={{ scale: 1.045 }} transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.7 }} className="group absolute inset-[-4%] flex items-center justify-center">
  <div className="absolute inset-[18%] rounded-full bg-[#39e6a0]/25 blur-[70px]" aria-hidden="true" />
  <img src="/images/upfound-crystal-card.png" alt="Emerald crystal card sculpture floating above a glowing pedestal" className="relative h-full w-full object-contain opacity-[.98] brightness-[1.12] saturate-[1.08] transition-none" />
</motion.div>
          </motion.div>
        </div>

        <nav className="pointer-events-auto absolute right-4 top-[36%] z-30 sm:top-[39%] flex flex-col items-center gap-1 rounded-full border border-white/10 bg-white/[.08] p-2 text-[#d7eee4] shadow-xl backdrop-blur-xl sm:right-6 lg:right-10" aria-label="Social media">
          <a href="#instagram" aria-label="Instagram" className="rounded-full p-2 transition hover:bg-white/15 hover:text-[#63ef9b]"><span className="text-[14px] leading-none">◎</span></a>
          <a href="#facebook" aria-label="Facebook" className="rounded-full p-2 transition hover:bg-white/15 hover:text-[#63ef9b]"><span className="text-[15px] font-semibold leading-none">f</span></a>
          <a href="#x" aria-label="X" className="rounded-full p-2 text-[15px] font-medium transition hover:bg-white/15 hover:text-[#63ef9b]">𝕏</a>
        </nav>

        <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .6 }} className="absolute bottom-[3%] right-6 z-20 w-[220px] rounded-2xl sm:bottom-[12%] border border-white/10 bg-[#28594e]/70 p-4 shadow-2xl backdrop-blur-xl sm:bottom-[13%] lg:right-16" aria-label="Launching startups metrics"><div className="flex items-center justify-between text-[10px] text-white"><span>Launching Startups</span><ArrowUpRight size={14} /></div><div className="mt-5 flex items-end justify-between"><div className="space-y-3 text-[9px] text-[#b5d0c3]"><p><strong className="text-white">83%</strong> Success Rate</p><p><strong className="text-white">17%</strong> Failure Rate</p></div><div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#8cf06c] border-l-transparent text-lg font-medium shadow-[0_0_18px_rgba(140,240,108,.3)]">86<span className="text-[9px]">%</span></div></div><p className="mt-3 text-right text-[9px] text-[#69ef91]">↑ 4.52%</p></motion.aside>

        <div className="pointer-events-none absolute bottom-[-1px] left-1/2 z-20 h-28 w-[112%] -translate-x-1/2 overflow-hidden" aria-hidden="true"><svg viewBox="0 0 1200 180" preserveAspectRatio="none" className="h-full w-full"><path d="M0 92C180 148 340 165 600 164s420-16 600-72v88H0Z" fill="#021815" /></svg></div>
        <div className="relative z-30 mt-auto flex items-center justify-center gap-2 pb-2 text-center text-[9px] uppercase leading-[1.35] tracking-[.18em] text-[#779b8d]"><Mouse size={14} strokeWidth={1.5} className="text-[#a8c8bb]" /><span>Scroll to<br />explore more</span></div>
      </section>
      <section id="about" className="sr-only" aria-label="About"><h2>About UpFound</h2></section><section id="services" className="sr-only" aria-label="Services"><h2>Services</h2></section><section id="pricing" className="sr-only" aria-label="Pricing"><h2>Pricing</h2></section><section id="solution" className="sr-only" aria-label="Solution"><h2>Solution</h2></section><section id="signup" className="sr-only" aria-label="Login and registration"><h2>Login / Register</h2></section>
    </main>
  )
}
