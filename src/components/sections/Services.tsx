import {
  Workflow,
  Bot,
  Link2,
  BarChart3,
  HardDrive,
  Settings2,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const services = [
  {
    icon: Workflow,
    title: 'Automação de processos',
    description:
      'Fluxos que eliminam trabalho manual: cobranças, comprovantes, notificações e triagem de atendimento rodando sozinhos.',
    tags: ['n8n', 'WhatsApp', 'ERP', 'CRM'],
  },
  {
    icon: Bot,
    title: 'Inteligência artificial',
    description:
      'Assistentes e agentes de IA com a base de conhecimento da sua empresa, para atendimento e apoio interno.',
    tags: ['Agentes IA', 'WhatsApp Bot', 'Base de conhecimento'],
  },
  {
    icon: Link2,
    title: 'Integração de sistemas',
    description:
      'ERP, CRM, bancos de dados, APIs e canais de atendimento conectados em um ecossistema único, sem ilhas de dados.',
    tags: ['APIs', 'Webhooks', 'ETL'],
  },
  {
    icon: BarChart3,
    title: 'BI e dados',
    description:
      'Dashboards e indicadores em tempo real para uma gestão mais ágil: operação, vendas e financeiro em um só lugar.',
    tags: ['Power BI', 'SQL', 'KPIs'],
  },
  {
    icon: HardDrive,
    title: 'Infraestrutura e suporte',
    description:
      'Servidores, backup, VPN e monitoramento organizados para uma operação estável, segura e pronta para crescer.',
    tags: ['VMs', 'Backup', 'VPN'],
  },
  {
    icon: Settings2,
    title: 'Soluções sob medida',
    description:
      'Portais, painéis operacionais e sistemas internos desenvolvidos para necessidades que produto pronto não resolve.',
    tags: ['Portais', 'Painéis', 'Sistemas'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1C2350] mb-4">
              O que a CGX entrega
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[#5B6482] text-lg max-w-xl mx-auto">
              Serviços organizados pelo problema que resolvem — não pela tecnologia.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.title} delay={0.08 * (i % 3)}>
                <div className="group h-full rounded-2xl border border-[#E3EAF8] bg-white p-7 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <span className="w-12 h-12 rounded-2xl bg-[#F0F4FC] border border-[#E3EAF8] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#2563EB]" />
                  </span>
                  <h3 className="font-display font-semibold text-lg text-[#1C2350] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[#5B6482] text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F0F4FC]">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-semibold bg-[#F0F4FC] text-[#2563EB]"
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
      </div>
    </section>
  )
}
