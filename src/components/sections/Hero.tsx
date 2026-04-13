'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/config'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Radial glow — center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Top-left accent */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Bottom-right accent */}
      <div
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Decorative geometric lines */}
      <div className="absolute top-1/4 left-8 w-px h-24 bg-gradient-to-b from-transparent via-[#06B6D4]/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-32 bg-gradient-to-b from-transparent via-[#2563EB]/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 left-16 w-16 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/30 to-transparent hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          Tecnologia aplicada ao crescimento de negócios
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6"
        >
          Tecnologia para{' '}
          <span className="relative inline-block">
            <span className="gradient-text">organizar,</span>
          </span>
          <br />
          <span className="gradient-text">automatizar</span> e acelerar
          <br />
          <span className="text-slate-300">o seu negócio.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="font-body text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A CGX desenvolve soluções em infraestrutura, automação, integração de sistemas, BI e
          inteligência artificial para empresas que querem mais{' '}
          <span className="text-slate-200">controle, produtividade e crescimento.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-0.5 text-base"
          >
            Falar no WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/servicos"
            className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold rounded-xl transition-all duration-300 text-base"
          >
            Conhecer serviços
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '3 pilares', label: 'Estrutura, Automação e Inteligência' },
            { value: '6 serviços', label: 'Soluções completas para o seu negócio' },
            { value: 'Sob medida', label: 'Projetos adaptados à sua realidade' },
          ].map((stat) => (
            <div
              key={stat.value}
              className="px-6 py-4 rounded-xl bg-[#1E293B]/60 border border-white/5 backdrop-blur-sm text-center"
            >
              <p className="font-display font-bold text-[#06B6D4] text-xl mb-1">{stat.value}</p>
              <p className="text-slate-400 text-xs leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#value-prop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
