'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const donuts = [
  { label: 'Horas manuais eliminadas', value: '−82%', deg: 295, color: '#06B6D4' },
  { label: 'Processos automatizados', value: '46', deg: 245, color: '#2563EB' },
  { label: 'Atendimentos com IA', value: '24/7', deg: 330, color: '#22D3EE' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-bokeh">
      {/* Glifos decorativos do template */}
      <span className="glyph absolute top-[18%] left-[10%] text-5xl text-[#22D3EE]/70 hidden lg:block animate-float-slow">
        +
      </span>
      <span className="glyph absolute top-[14%] right-[14%] text-4xl text-[#3B82F6]/70 hidden lg:block animate-float">
        ×
      </span>
      <span className="absolute bottom-[30%] right-[9%] w-8 h-8 rounded-full border-4 border-[#22D3EE]/50 hidden lg:block animate-float" />
      <span className="glyph absolute bottom-[38%] left-[7%] text-6xl text-[#2563EB]/40 hidden lg:block">
        +
      </span>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-44 pb-16 text-center">
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
          className="font-body text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
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

        {/* Mockup de dashboard (como no template, feito em CSS) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="relative max-w-4xl mx-auto"
        >
          {/* Card lateral navy com checklist */}
          <div className="absolute -left-6 sm:-left-10 top-10 z-20 hidden sm:block w-56 rounded-2xl bg-gradient-to-br from-[#141C56] to-[#0B1240] border border-white/10 p-5 shadow-card-lg animate-float">
            <p className="font-display text-white text-xs font-semibold mb-4 tracking-wide uppercase">
              Fluxos ativos
            </p>
            {['Comprovantes PIX lidos', 'WhatsApp → CRM', 'Relatório diário enviado'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2.5 mb-3 last:mb-0">
                  <span className="w-5 h-5 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/40 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#22D3EE]" />
                  </span>
                  <span className="text-slate-300 text-xs">{item}</span>
                </div>
              )
            )}
          </div>

          {/* Card principal branco com donuts */}
          <div className="relative z-10 rounded-t-3xl bg-white shadow-card-lg px-8 sm:px-14 pt-10 pb-0">
            <div className="flex items-center justify-between mb-8">
              <p className="font-display font-semibold text-[#1C2350] text-sm">
                Painel operacional
              </p>
              <span className="flex items-center gap-2 text-xs font-semibold text-[#06B6D4]">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                ao vivo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-10 pb-10">
              {donuts.map((d) => (
                <div key={d.label} className="flex flex-col items-center">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-3">
                    <div
                      className="donut absolute inset-0"
                      style={{
                        background: `conic-gradient(${d.color} ${d.deg}deg, #E3EAF8 ${d.deg}deg)`,
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-[#1C2350] text-base sm:text-xl">
                      {d.value}
                    </span>
                  </div>
                  <p className="text-[#5B6482] text-[11px] sm:text-xs text-center leading-snug">
                    {d.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
