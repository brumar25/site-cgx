import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Check, Bot, Workflow, BarChart3 } from 'lucide-react'

// Blocos alternados do template ("Inteligente" / "Rápido"), com as frentes reais da CGX
const features = [
  {
    icon: Workflow,
    title: 'Automatize o que é repetitivo',
    text: 'Fluxos com n8n conectam WhatsApp, planilhas, ERP e CRM para eliminar retrabalho: leitura de comprovantes PIX, cobranças, notificações e triagem de atendimento rodando sozinhos.',
    bullets: ['Menos retrabalho e erro humano', 'Processos padronizados', 'Equipe focada no que importa'],
    image: '/images/equipe.jpg',
    alt: 'Equipe trabalhando em conjunto com notebooks',
  },
  {
    icon: Bot,
    title: 'IA que atende e resolve',
    text: 'Agentes de inteligência artificial treinados com a base de conhecimento da sua empresa atendem no WhatsApp, classificam mensagens e documentos e apoiam a equipe interna — 24 horas por dia.',
    bullets: ['Atendimento imediato, a qualquer hora', 'Respostas padronizadas e confiáveis', 'Escala sem aumentar equipe'],
    image: '/images/whatsapp.jpg',
    alt: 'Pessoa usando o celular para atendimento',
  },
  {
    icon: BarChart3,
    title: 'Decida com dados, não com achismo',
    text: 'Estruturamos seus dados e entregamos dashboards em Power BI com os indicadores que importam: operação, vendas e financeiro em tempo real, sem depender de planilha.',
    bullets: ['Visibilidade total da operação', 'Indicadores em tempo real', 'Gargalos identificados cedo'],
    image: '/images/bi-dados.jpg',
    alt: 'Notebook exibindo dashboard de indicadores',
  },
]

export default function Features() {
  return (
    <section id="como-funciona" className="bg-[#F0F4FC] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1C2350] text-center mb-20">
            Como funciona
          </h2>
        </AnimatedSection>

        <div className="space-y-20 lg:space-y-28">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const reversed = i % 2 === 1
            return (
              <div
                key={feature.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reversed ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <AnimatedSection direction={reversed ? 'left' : 'right'}>
                  <div className="rounded-3xl overflow-hidden shadow-card-lg">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={1200}
                      height={860}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.1} direction={reversed ? 'right' : 'left'}>
                  <div>
                    <span className="w-12 h-12 rounded-2xl bg-white shadow-card flex items-center justify-center mb-6">
                      <Icon size={22} className="text-[#2563EB]" />
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1C2350] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-[#5B6482] text-lg leading-relaxed mb-6">{feature.text}</p>
                    <ul className="space-y-2.5">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-[#1C2350] text-sm font-medium">
                          <span className="w-5 h-5 rounded-full bg-white border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                            <Check size={11} className="text-[#2563EB]" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            )
          })}
        </div>

        {/* Metodologia em 4 passos */}
        <AnimatedSection delay={0.1}>
          <div className="mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Diagnóstico', text: 'Mapeamos gargalos, processos e sistemas do seu cenário atual.' },
              { n: '02', title: 'Desenho da solução', text: 'Arquitetura, ferramentas, integrações e cronograma definidos.' },
              { n: '03', title: 'Implantação', text: 'Implementamos e integramos tudo com acompanhamento próximo.' },
              { n: '04', title: 'Evolução contínua', text: 'Refinamos e evoluímos conforme o negócio cresce e muda.' },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-2xl bg-white p-6 shadow-card hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="font-display font-bold text-3xl text-[#2563EB]">{step.n}</span>
                <h4 className="font-display font-semibold text-[#1C2350] mt-3 mb-2">{step.title}</h4>
                <p className="text-[#5B6482] text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
