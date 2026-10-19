'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, ChevronDown, Globe2, Menu, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'

const navItems = ['Home', 'About', 'Services', 'Pricing', 'Solution']

export function UpFoundLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useTransform(useSpring(pointerY, { stiffness: 140, damping: 20 }), [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(useSpring(pointerX, { stiffness: 140, damping: 20 }), [-0.5, 0.5], [-8, 8])

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#031e1a] text-[#eaf5ec] selection:bg-[#5ef39a] selection:text-[#03231c]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_44%,rgba(39,155,125,.34),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(37,212,139,.18),transparent_28%),linear-gradient(135deg,#062821_0%,#073c35_48%,#021b1a_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(1,17,16,.42)_78%)]" aria-hidden="true" />
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

      <section id="home" className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1240px] flex-col px-8 pb-8 pt-12 lg:px-16 lg:pt-14">
        <h1 className="pointer-events-none absolute left-1/2 top-[10%] z-0 -translate-x-1/2 whitespace-nowrap text-[clamp(5rem,14vw,12rem)] font-light leading-none tracking-[-.1em] text-[#c9eee2]/[.27]">Legacy Bank</h1>
        <div className="relative z-10 mt-[42vh] max-w-[280px] lg:mt-[35vh]">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[31px] font-medium uppercase leading-[1.05] tracking-[-.06em] text-white">Fuel for<br />startups</motion.p>
          <p className="mt-3 max-w-[220px] text-[10px] leading-[1.45] text-[#a8c8bb]">Strategic guidance, funding support, and growth acceleration for early-stage ventures.</p>
          <div className="mt-5 flex gap-3"><a href="#signup" className="rounded-full bg-[#46dc87] px-5 py-3 text-[10px] font-semibold text-[#04281e] transition hover:bg-[#78f4aa]">Get Started</a><a href="#about" className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-[10px] text-white transition hover:bg-white/20">Contact Us</a></div>
        </div>

        <div ref={ref} onPointerMove={handleMove} onPointerLeave={() => { pointerX.set(0); pointerY.set(0) }} className="pointer-events-auto absolute left-1/2 top-[18%] z-10 h-[390px] w-[330px] -translate-x-1/2 sm:h-[470px] sm:w-[395px]">
          <motion.div style={{ rotateX, rotateY }} className="relative h-full w-full [transform-style:preserve-3d]" initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
<motion.div animate={{ rotate: [0, 2.2, 0, -2.2, 0], y: [0, -5, 0, -3, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="group absolute inset-[-9%] flex items-center justify-center">
  <div className="absolute inset-[18%] rounded-full bg-[#39e6a0]/25 blur-[70px]" aria-hidden="true" />
  <img src="/images/upfound-crystal-card.png" alt="Emerald crystal card sculpture floating above a glowing pedestal" className="relative h-full w-full object-contain mix-blend-screen opacity-[.94] transition-transform duration-700 ease-out group-hover:scale-[1.045] [mask-image:radial-gradient(ellipse_64%_68%_at_50%_47%,black_44%,rgba(0,0,0,.72)_62%,transparent_92%)]" />
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(3,30,26,.25)_78%,transparent_100%)]" aria-hidden="true" />
</motion.div>
          </motion.div>
        </div>

        <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .6 }} className="absolute bottom-[14%] right-8 z-20 w-[205px] rounded-2xl border border-white/10 bg-[#28594e]/70 p-4 shadow-2xl backdrop-blur-xl lg:right-16" aria-label="Launching startups metrics"><div className="flex items-center justify-between text-[10px] text-white"><span>Launching Startups</span><ArrowUpRight size={14} /></div><div className="mt-5 flex items-end justify-between"><div className="space-y-3 text-[9px] text-[#b5d0c3]"><p><strong className="text-white">83%</strong> Success Rate</p><p><strong className="text-white">17%</strong> Failure Rate</p></div><div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#8cf06c] border-l-transparent text-lg font-medium shadow-[0_0_18px_rgba(140,240,108,.3)]">86<span className="text-[9px]">%</span></div></div><p className="mt-3 text-right text-[9px] text-[#69ef91]">↑ 4.52%</p></motion.aside>

        <div className="relative z-20 mt-auto flex items-center justify-center text-[9px] uppercase tracking-[.18em] text-[#779b8d]"><span className="mr-2">◦</span>Scroll to<br />explore more</div>
      </section>
      <section id="about" className="sr-only" aria-label="About"><h2>About UpFound</h2></section><section id="services" className="sr-only" aria-label="Services"><h2>Services</h2></section><section id="pricing" className="sr-only" aria-label="Pricing"><h2>Pricing</h2></section><section id="solution" className="sr-only" aria-label="Solution"><h2>Solution</h2></section><section id="signup" className="sr-only" aria-label="Login and registration"><h2>Login / Register</h2></section>
    </main>
  )
}
