import AnimatedSection from '@/components/ui/AnimatedSection'
import { Search, PenTool, Rocket, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Entendemos o cenário da empresa, mapeamos os gargalos, processos e sistemas existentes.',
    color: '#06B6D4',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Desenho da solução',
    description:
      'Desenhamos a solução ideal: arquitetura, ferramentas, integrações e cronograma de entrega.',
    color: '#2563EB',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implantação',
    description:
      'Implementamos, configuramos e integramos tudo com cuidado e acompanhamento próximo.',
    color: '#8B5CF6',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Evolução contínua',
    description:
      'Ajustamos, refinamos e evoluímos as soluções conforme o negócio cresce e muda.',
    color: '#22C55E',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Metodologia
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Como funciona o trabalho
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">
              Um processo claro e estruturado do primeiro contato à entrega em produção.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={step.number} delay={0.15 * i} direction="up">
                  <div className="relative flex flex-col items-center text-center">
                    {/* Step circle */}
                    <div className="relative mb-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 border"
                        style={{
                          background: `${step.color}10`,
                          borderColor: `${step.color}30`,
                        }}
                      >
                        <Icon size={24} style={{ color: step.color }} />
                      </div>
                      {/* Pulse ring */}
                      <div
                        className="absolute inset-0 rounded-full opacity-20 animate-ping"
                        style={{ background: step.color, animationDuration: `${3 + i * 0.5}s` }}
                      />
                      {/* Number badge */}
                      <span
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white z-20"
                        style={{ background: step.color }}
                      >
                        {i + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-semibold text-lg text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
