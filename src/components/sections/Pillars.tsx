import { Server, Zap, Brain } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const pillars = [
  {
    icon: Server,
    number: '01',
    title: 'Estrutura',
    accent: '#06B6D4',
    accentBg: 'rgba(6,182,212,0.08)',
    accentBorder: 'rgba(6,182,212,0.2)',
    description:
      'Base técnica confiável para manter sua operação segura, estável e pronta para evoluir.',
    items: ['Servidores e virtualização', 'Backup e recuperação', 'VPN e acesso remoto', 'Monitoramento e suporte'],
  },
  {
    icon: Zap,
    number: '02',
    title: 'Automação',
    accent: '#2563EB',
    accentBg: 'rgba(37,99,235,0.08)',
    accentBorder: 'rgba(37,99,235,0.2)',
    description:
      'Fluxos e integrações para reduzir tarefas manuais e aumentar a produtividade da equipe.',
    items: ['Automações com n8n', 'Integração ERP, CRM e WhatsApp', 'Fluxos de atendimento', 'Notificações e disparos'],
  },
  {
    icon: Brain,
    number: '03',
    title: 'Inteligência',
    accent: '#22C55E',
    accentBg: 'rgba(34,197,94,0.08)',
    accentBorder: 'rgba(34,197,94,0.2)',
    description:
      'Dados, dashboards e IA aplicados para melhorar decisões e transformar o atendimento.',
    items: ['Assistentes de IA', 'Power BI e dashboards', 'Agentes para WhatsApp', 'Análise e indicadores'],
  },
]

export default function Pillars() {
  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Os 3 pilares da CGX
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Uma visão completa da{' '}
              <span className="gradient-text">sua operação</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Atuamos nas três frentes que sustentam negócios sólidos e preparados para crescer.
            </p>
          </AnimatedSection>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <AnimatedSection key={pillar.title} delay={0.15 * i} direction="up">
                <div
                  className="group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
                  style={{
                    background: `linear-gradient(145deg, ${pillar.accentBg}, rgba(30,41,59,0.6))`,
                    borderColor: pillar.accentBorder,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 40px ${pillar.accent}20, inset 0 0 40px ${pillar.accent}05`,
                    }}
                  />

                  {/* Number */}
                  <span
                    className="absolute top-6 right-8 font-display font-bold text-6xl opacity-5 select-none"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: pillar.accentBg, border: `1px solid ${pillar.accentBorder}` }}
                  >
                    <Icon size={24} style={{ color: pillar.accent }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">
                    {pillar.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: pillar.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
