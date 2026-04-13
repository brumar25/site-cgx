import {
  Workflow,
  Bot,
  Link2,
  BarChart3,
  HardDrive,
  Settings2,
  ArrowRight,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const services = [
  {
    icon: Workflow,
    title: 'Automação de processos',
    description:
      'Integramos ferramentas e criamos fluxos que eliminam trabalho manual e aumentam a eficiência operacional.',
    tags: ['n8n', 'WhatsApp', 'ERP', 'CRM'],
    color: '#06B6D4',
  },
  {
    icon: Bot,
    title: 'Inteligência artificial',
    description:
      'Criamos assistentes e agentes de IA para atendimento ao cliente, consultas internas e apoio operacional.',
    tags: ['Agentes IA', 'WhatsApp Bot', 'Base de conhecimento'],
    color: '#2563EB',
  },
  {
    icon: Link2,
    title: 'Integração de sistemas',
    description:
      'Conectamos ERPs, CRMs, bancos de dados, APIs e canais de atendimento em um ecossistema unificado.',
    tags: ['APIs', 'Webhooks', 'ETL', 'Banco de dados'],
    color: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'BI e dados',
    description:
      'Transformamos dados operacionais em dashboards e indicadores para gestão mais ágil e assertiva.',
    tags: ['Power BI', 'SQL', 'Dashboards', 'KPIs'],
    color: '#22C55E',
  },
  {
    icon: HardDrive,
    title: 'Infraestrutura e suporte',
    description:
      'Organizamos servidores, backups, rede, acesso remoto e continuidade para uma base técnica sólida.',
    tags: ['VMs', 'Backup', 'VPN', 'Monitoramento'],
    color: '#F59E0B',
  },
  {
    icon: Settings2,
    title: 'Soluções sob medida',
    description:
      'Projetos personalizados para necessidades específicas: portais, painéis, sistemas internos e automações complexas.',
    tags: ['Portais', 'Painéis', 'Sistemas', 'Processos'],
    color: '#EC4899',
  },
]

export default function Services() {
  return (
    <section className="relative py-24 bg-[#020617]">
      {/* Top gradient */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0F172A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Portfólio de serviços
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              O que a CGX entrega
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Soluções práticas que resolvem os principais gargalos da sua operação.
            </p>
          </AnimatedSection>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.title} delay={0.1 * (i % 3)} direction="up">
                <div className="group relative p-6 rounded-2xl bg-[#0F172A] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover h-full flex flex-col">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      background: `${service.color}10`,
                      border: `1px solid ${service.color}25`,
                    }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: `${service.color}10`,
                          color: service.color,
                          border: `1px solid ${service.color}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Link to full services page */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="group inline-flex items-center gap-2 text-[#06B6D4] hover:text-white font-semibold text-sm transition-colors duration-200"
            >
              Ver todos os serviços em detalhes
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  )
}
