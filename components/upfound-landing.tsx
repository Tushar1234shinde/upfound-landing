'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, ChevronDown, Menu, Play, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'

const navItems = ['About', 'Services', 'Pricing']

export function UpFoundLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(useSpring(y, { stiffness: 120, damping: 18 }), [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(useSpring(x, { stiffness: 120, damping: 18 }), [-0.5, 0.5], [-7, 7])

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetCard() {
    x.set(0)
    y.set(0)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#061c19] text-[#f1f5e9] selection:bg-[#a7e65f] selection:text-[#06201c]">
      <div className="upfound-grid pointer-events-none fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="pointer-events-none fixed left-[16%] top-[-18%] h-[34rem] w-[34rem] rounded-full bg-[#51d68a]/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none fixed bottom-[-20%] right-[-8%] h-[34rem] w-[34rem] rounded-full bg-[#05756c]/20 blur-[140px]" aria-hidden="true" />

      <header className="relative z-20 px-5 pt-5 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-[#092824]/70 px-4 py-3.5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.02em]" aria-label="UpFound home">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#a7e65f] text-[#08211d] shadow-[0_0_24px_rgba(167,230,95,0.2)]"><Sparkles size={14} strokeWidth={2.5} /></span>
            <span>upfound<span className="text-[#a7e65f]">.</span></span>
          </a>
          <div className="hidden items-center gap-8 text-[13px] text-[#b4c8bd] md:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">{item}</a>)}
          </div>
          <div className="hidden items-center gap-5 text-[13px] md:flex">
            <a href="#login" className="text-[#b4c8bd] transition-colors hover:text-white">Log in</a>
            <a href="#signup" className="rounded-full bg-[#e9f4df] px-4 py-2 font-medium text-[#0a2821] transition-transform hover:scale-[1.03]">Sign up <ArrowUpRight className="ml-1 inline" size={13} /></a>
          </div>
          <button className="rounded-full p-2 text-[#c5d5cb] md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Menu size={20} /></button>
        </nav>
        {menuOpen && <div className="mx-2 mt-2 grid gap-1 rounded-3xl border border-white/10 bg-[#0b302a]/95 p-3 text-center text-sm backdrop-blur-xl md:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-2xl py-3 text-[#b4c8bd] hover:bg-white/5 hover:text-white">{item}</a>)}<a href="#signup" className="rounded-2xl bg-[#a7e65f] py-3 font-semibold text-[#08211d]">Sign up</a></div>}
      </header>

      <section id="home" className="relative mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-[1400px] flex-col px-5 pb-14 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-[13%] z-0 select-none overflow-hidden text-center text-[clamp(5.5rem,17vw,15rem)] font-light leading-none tracking-[-0.1em] text-[#bde7d4]/[.08]" aria-hidden="true">UPFOUND</div>
        <div className="relative z-10 max-w-3xl lg:pt-16">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#a7e65f]"><span className="h-1.5 w-1.5 rounded-full bg-[#a7e65f] shadow-[0_0_10px_#a7e65f]" /> The future is funded differently</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .8 }} className="max-w-4xl text-[clamp(4rem,10.5vw,9.5rem)] font-medium leading-[.86] tracking-[-0.085em] text-[#edf4e9]">Capital for <span className="font-serif italic text-[#a7e65f]">what&apos;s</span> next.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35, duration: .7 }} className="mt-9 max-w-sm text-[15px] leading-7 text-[#a9beb3] sm:ml-[18%]">UpFound connects ambitious founders with the conviction, capital, and community to turn category-defining ideas into enduring companies.</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }} className="mt-8 flex flex-wrap items-center gap-4 sm:ml-[18%]"><a href="#signup" className="rounded-full bg-[#a7e65f] px-6 py-3.5 text-sm font-semibold text-[#08211d] transition-all hover:bg-[#c0f17a] hover:shadow-[0_0_32px_rgba(167,230,95,.18)]">Start a conversation <ArrowUpRight className="ml-2 inline" size={15} /></a><a href="#about" className="group flex items-center gap-2 text-sm text-[#c4d3c9]"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-[#a7e65f]/60"><Play size={12} fill="currentColor" /></span> See how we think</a></motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-[8%] right-[4%] hidden w-[42%] max-w-[550px] lg:block" ref={ref} onPointerMove={handlePointerMove} onPointerLeave={resetCard}>
          <motion.div style={{ rotateX, rotateY }} className="relative aspect-[.8] w-full [transform-style:preserve-3d]" initial={{ opacity: 0, scale: .9, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .25, duration: 1.2, ease: 'easeOut' }}>
            <div className="absolute inset-[9%] rounded-[40%_48%_32%_44%] border border-[#b7ffa9]/30 bg-gradient-to-br from-[#a7e65f]/45 via-[#28a978]/25 to-[#064b42]/25 shadow-[inset_-18px_-28px_54px_rgba(0,22,18,.4),0_0_100px_rgba(65,209,133,.2)] backdrop-blur-sm" />
            <div className="absolute left-[20%] top-[18%] h-[54%] w-[45%] rotate-[24deg] border border-white/25 bg-gradient-to-br from-white/40 via-[#8dffbc]/10 to-transparent shadow-[20px_30px_80px_rgba(108,255,171,.18)] [clip-path:polygon(50%_0,100%_21%,87%_82%,50%_100%,8%_82%,0_21%)]" />
            <div className="absolute bottom-[17%] left-[17%] h-16 w-16 rounded-full bg-[#d2ff7b]/50 blur-2xl" />
            <div className="absolute right-[11%] top-[29%] h-28 w-28 rounded-full bg-[#57ffe3]/20 blur-3xl" />
            <div className="absolute left-[6%] top-[33%] h-10 w-10 rounded-full border border-[#a7e65f]/30 bg-[#a7e65f]/10 backdrop-blur-md" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .7 }} className="relative z-10 mt-16 w-fit self-end rounded-2xl border border-white/15 bg-white/[.07] p-4 shadow-2xl backdrop-blur-xl sm:mr-[8%] lg:absolute lg:bottom-[11%] lg:right-[4%] lg:mr-0" aria-label="UpFound portfolio metrics">
          <div className="mb-3 flex items-center justify-between gap-12 text-[10px] uppercase tracking-[.18em] text-[#8da99b]"><span>Portfolio pulse</span><span className="h-1.5 w-1.5 rounded-full bg-[#a7e65f] shadow-[0_0_8px_#a7e65f]" /></div><div className="flex items-end gap-7"><div><p className="text-2xl font-medium tracking-tight text-[#e8f3e6]">$2.4B</p><p className="mt-1 text-[10px] text-[#91aa9f]">capital deployed</p></div><div><p className="text-2xl font-medium tracking-tight text-[#a7e65f]">41%</p><p className="mt-1 text-[10px] text-[#91aa9f]">avg. YoY growth</p></div></div>
        </motion.div>
        <div className="mt-auto hidden items-center justify-between border-t border-white/10 pt-6 text-[11px] uppercase tracking-[.16em] text-[#6f8a7e] sm:flex"><span>Independent venture partners</span><span className="flex items-center gap-2">Scroll to explore <ChevronDown size={13} /></span><span>NY · SF · Everywhere</span></div>
      </section>

      <section id="about" className="mx-auto max-w-[1400px] scroll-mt-8 border-t border-white/10 px-5 py-28 sm:px-8 lg:px-12"><p className="text-xs uppercase tracking-[.2em] text-[#a7e65f]">01 — Our point of view</p><h2 className="mt-7 max-w-4xl text-4xl leading-tight tracking-[-.05em] text-[#eaf3e6] sm:text-6xl">The best companies aren&apos;t found. <span className="text-[#7b988a]">They&apos;re backed early.</span></h2></section>
      <section id="services" className="sr-only" aria-label="Services"><h2>Services</h2></section><section id="pricing" className="sr-only" aria-label="Pricing"><h2>Pricing</h2></section><section id="login" className="sr-only" aria-label="Log in"><h2>Log in</h2></section><section id="signup" className="sr-only" aria-label="Sign up"><h2>Sign up</h2></section>
    </main>
  )
}
