import type { Metadata } from 'next'
import {
  Workflow,
  Bot,
  Link2,
  BarChart3,
  HardDrive,
  Settings2,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { WHATSAPP_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Serviços — CGX',
  description:
    'Conheça todos os serviços da CGX: automação de processos, IA, integração de sistemas, BI, infraestrutura e soluções sob medida.',
}

const services = [
  {
    icon: Workflow,
    title: 'Automação de processos',
    color: '#06B6D4',
    tagline: 'Menos trabalho manual. Mais eficiência.',
    description:
      'Criamos fluxos automatizados que eliminam retrabalho, padronizam processos e conectam ferramentas que hoje operam de forma isolada. Cada automação é pensada para o contexto real da sua operação.',
    deliveries: [
      'Automações com n8n e plataformas low-code',
      'Fluxos entre WhatsApp, formulários, planilhas, ERP e CRM',
      'Disparos automáticos de mensagens e notificações',
      'Validações de dados e geração de tarefas',
      'Automação de cobrança e acompanhamento operacional',
      'Atendimento automatizado com triagem inteligente',
    ],
    benefits: ['Menos retrabalho', 'Mais velocidade', 'Menos erro humano', 'Processos padronizados'],
  },
  {
    icon: Bot,
    title: 'Inteligência artificial aplicada',
    color: '#2563EB',
    tagline: 'Escala sem aumentar equipe na mesma proporção.',
    description:
      'Implementamos agentes e assistentes de IA treinados com a base de conhecimento da sua empresa. Da triagem de atendimento ao suporte interno, a IA trabalha enquanto sua equipe foca no que importa.',
    deliveries: [
      'Assistentes de IA para atendimento via WhatsApp',
      'Agentes com base de conhecimento personalizada',
      'Bots para consulta de documentos e processos',
      'Classificação e interpretação de mensagens e PDFs',
      'IA integrada a fluxos de automação existentes',
      'Assistentes internos para equipes',
    ],
    benefits: ['Atendimento mais rápido', 'Escala operacional', 'Respostas padronizadas', 'Autonomia para clientes'],
  },
  {
    icon: Link2,
    title: 'Integração de sistemas',
    color: '#8B5CF6',
    tagline: 'Um ecossistema conectado, sem ilhas de informação.',
    description:
      'Conectamos sistemas que hoje operam separados, criando um fluxo contínuo de dados entre ERP, CRM, canais de atendimento e ferramentas internas. Menos erro de digitação, mais consistência e velocidade.',
    deliveries: [
      'Integração entre ERP, CRM, WhatsApp e e-mail',
      'Centralização e sincronização de dados',
      'Desenvolvimento de APIs e webhooks',
      'Rotinas automatizadas de atualização',
      'Consolidação de informações operacionais',
      'Conectores entre bancos de dados e sistemas legados',
    ],
    benefits: ['Dados unificados', 'Menos ilhas de informação', 'Maior consistência', 'Visão operacional completa'],
  },
  {
    icon: BarChart3,
    title: 'BI e dados',
    color: '#22C55E',
    tagline: 'Transforme dados em decisões.',
    description:
      'Estruturamos seus dados e criamos dashboards que mostram o que realmente importa. Do histórico de planilhas ao Power BI em produção, construímos uma base sólida para análise e tomada de decisão.',
    deliveries: [
      'Estruturação e modelagem de banco de dados',
      'Tratamento e histórico de planilhas',
      'Automação de carga e atualização de dados',
      'Dashboards em Power BI',
      'Indicadores operacionais, comerciais e financeiros',
      'Relatórios automatizados por período',
    ],
    benefits: ['Decisões melhores', 'Visibilidade da operação', 'Acompanhamento de metas', 'Identificação de gargalos'],
  },
  {
    icon: HardDrive,
    title: 'Infraestrutura e suporte técnico',
    color: '#F59E0B',
    tagline: 'Base sólida para uma operação estável.',
    description:
      'Organizamos, configuramos e monitoramos a infraestrutura técnica da sua empresa. De servidores a redes, de backup a acesso remoto seguro, garantimos que sua operação esteja sempre disponível e protegida.',
    deliveries: [
      'Implantação e organização de servidores',
      'Virtualização de ambientes',
      'Backup automatizado e recuperação de dados',
      'Monitoramento de infraestrutura',
      'VPN e acesso remoto seguro',
      'Hardening básico e boas práticas de segurança',
    ],
    benefits: ['Mais estabilidade', 'Mais segurança', 'Menos risco de parada', 'Base para crescimento'],
  },
  {
    icon: Settings2,
    title: 'Soluções sob medida',
    color: '#EC4899',
    tagline: 'Quando o padrão não resolve, criamos o que você precisa.',
    description:
      'Para necessidades específicas que não se encaixam em produtos prontos, desenvolvemos soluções customizadas: portais internos, painéis operacionais, sistemas de gestão e fluxos personalizados de atendimento.',
    deliveries: [
      'Portais internos e áreas do cliente',
      'Painéis operacionais e sistemas de gestão',
      'Automações com validação documental',
      'Processos personalizados de atendimento',
      'Integrações customizadas entre sistemas',
      'Ferramentas específicas para a realidade da empresa',
    ],
    benefits: ['Solução exata para o problema', 'Sem desperdício de recurso', 'Alta aderência ao processo', 'Escalável'],
  },
]

export default function ServicosPage() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Portfólio completo
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Serviços <span className="gradient-text">sob medida</span>
              <br />
              para o seu negócio
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Da infraestrutura à inteligência artificial, cada serviço é pensado para gerar resultado
              real na operação da sua empresa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.title} delay={0.05 * i}>
                <div
                  className="group relative p-8 lg:p-10 rounded-2xl bg-[#1E293B]/40 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}50, transparent)` }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                        >
                          <Icon size={22} style={{ color: service.color }} />
                        </div>
                        <div>
                          <h2 className="font-display font-bold text-xl text-white">{service.title}</h2>
                          <p className="text-sm" style={{ color: service.color }}>{service.tagline}</p>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((b) => (
                          <span
                            key={b}
                            className="text-xs px-3 py-1.5 rounded-full font-medium"
                            style={{
                              background: `${service.color}10`,
                              color: service.color,
                              border: `1px solid ${service.color}20`,
                            }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Deliveries */}
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                        O que entregamos
                      </p>
                      <ul className="space-y-3">
                        {service.deliveries.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0"
                              style={{ color: service.color }}
                            />
                            <span className="text-slate-300 text-sm leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#020617] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Pronto para começar?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-slate-400 text-lg mb-8">
              Fale com a CGX e receba um diagnóstico gratuito para o seu negócio.
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
