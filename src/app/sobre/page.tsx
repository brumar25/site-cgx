import type { Metadata } from 'next'
import { Target, Eye, Heart, ArrowRight, MessageCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { WHATSAPP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Sobre — CGX',
  description:
    'Conheça a CGX: missão, visão, valores e como trabalhamos para transformar a tecnologia em crescimento para o seu negócio.',
}

const values = [
  { label: 'Clareza', desc: 'Comunicação direta e objetiva em cada etapa do projeto.' },
  { label: 'Confiabilidade', desc: 'Comprometimento real com prazos, qualidade e resultados.' },
  { label: 'Agilidade', desc: 'Entrega rápida sem abrir mão do cuidado e da precisão.' },
  { label: 'Inovação útil', desc: 'Tecnologia que serve o negócio, não tecnologia pelo modismo.' },
  { label: 'Proximidade', desc: 'Atendimento próximo e consultivo ao longo de todo o projeto.' },
  { label: 'Execução', desc: 'Responsabilidade com a entrega real, não só com a apresentação.' },
]

const differentials = [
  {
    title: 'Visão técnica e de negócio',
    description:
      'Não somos só uma empresa de TI. Entendemos o negócio por trás de cada projeto e construímos soluções que fazem sentido operacional e estratégico.',
    color: '#06B6D4',
  },
  {
    title: 'Soluções integradas',
    description:
      'Atuamos nas três frentes que normalmente ficam separadas: infraestrutura, automação e inteligência. Isso faz a CGX mais completa do que concorrentes especializados em apenas um desses pilares.',
    color: '#2563EB',
  },
  {
    title: 'Foco em resultado prático',
    description:
      'Cada projeto tem uma entrega clara. Não vendemos diagnósticos intermináveis — entregamos soluções funcionando em produção.',
    color: '#22C55E',
  },
  {
    title: 'Atendimento consultivo',
    description:
      'Somos um parceiro próximo, não um fornecedor distante. Acompanhamos de perto, explicamos as decisões e ajustamos ao longo do caminho.',
    color: '#8B5CF6',
  },
]

export default function SobrePage() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Quem somos
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Tecnologia com{' '}
              <span className="gradient-text">propósito</span> e execução
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              A CGX nasceu da necessidade real de unir visão técnica com entendimento de negócio —
              e entregar tecnologia que gera resultado de verdade para pequenas e médias empresas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Target,
                label: 'Missão',
                color: '#06B6D4',
                text: 'Ajudar empresas a operar melhor usando infraestrutura, automação, integração de sistemas e inteligência artificial.',
              },
              {
                Icon: Eye,
                label: 'Visão',
                color: '#2563EB',
                text: 'Ser referência em soluções tecnológicas práticas para pequenas e médias empresas que querem organizar, automatizar e crescer.',
              },
              {
                Icon: Heart,
                label: 'Compromisso',
                color: '#22C55E',
                text: 'Cada projeto entregue com cuidado, clareza e responsabilidade. Menos promessa, mais execução.',
              },
            ].map(({ Icon, label, color, text }) => (
              <AnimatedSection key={label} delay={0.1}>
                <div
                  className="p-8 rounded-2xl border h-full"
                  style={{
                    background: `${color}08`,
                    borderColor: `${color}20`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{label}</h3>
                  <p className="text-slate-400 leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimatedSection>
              <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
                O que nos guia
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Nossos valores
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <AnimatedSection key={value.label} delay={0.08 * i}>
                <div className="p-6 rounded-xl bg-[#1E293B]/40 border border-white/5 hover:border-[#06B6D4]/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#06B6D4] group-hover:shadow-glow-cyan transition-all" />
                    <h3 className="font-display font-semibold text-white">{value.label}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pl-5">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimatedSection>
              <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
                Por que a CGX
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Nossos diferenciais
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {differentials.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 * i}>
                <div className="group p-8 rounded-2xl bg-[#0F172A] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div
                    className="w-2 h-8 rounded-full mb-4"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)` }}
                  />
                  <h3 className="font-display font-bold text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Vamos trabalhar juntos?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-slate-400 text-lg mb-8">
              Entre em contato e descubra como a CGX pode transformar a tecnologia do seu negócio.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-0.5 text-base"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
