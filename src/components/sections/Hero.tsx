'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B1240]">
      {/* Foto de fundo (Unsplash) com véu navy, como no template */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0B1240]/50" />

      {/* Glifos decorativos do template */}
      <span className="glyph absolute top-[20%] left-[9%] text-5xl text-[#22D3EE]/60 hidden lg:block">
        +
      </span>
      <span className="glyph absolute top-[15%] right-[13%] text-4xl text-[#3B82F6]/60 hidden lg:block">
        ×
      </span>
      <span className="absolute bottom-[32%] right-[8%] w-8 h-8 rounded-full border-4 border-[#22D3EE]/40 hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-44 pb-0 text-center">
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight mb-6"
        >
          A forma mais inteligente de
          <br className="hidden sm:block" /> operar o seu negócio.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Automações, integrações e IA sob medida para empresas que querem crescer sem aumentar a
          complexidade operacional.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#contato" className="btn-pill">
            Solicite um diagnóstico
            <ArrowRight size={18} />
          </a>
          <a href="#como-funciona" className="btn-pill-outline">
            Como funciona
          </a>
        </motion.div>

        {/* Dashboard real, cortado na dobra como no template */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="relative max-w-3xl mx-auto"
        >
          <div className="rounded-t-2xl overflow-hidden shadow-card-lg border border-white/10 border-b-0">
            <Image
              src="/images/dashboard.jpg"
              alt="Dashboard de indicadores operacionais"
              width={1400}
              height={933}
              className="w-full h-auto block"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
