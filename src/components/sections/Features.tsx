import AnimatedSection from '@/components/ui/AnimatedSection'
import { Check, Bot, Workflow, BarChart3 } from 'lucide-react'

// Blocos alternados do template ("Inteligente" / "Rápido"), com as frentes reais da CGX
const features = [
  {
    icon: Workflow,
    title: 'Automatize o que é repetitivo',
    text: 'Fluxos com n8n conectam WhatsApp, planilhas, ERP e CRM para eliminar retrabalho: leitura de comprovantes PIX, cobranças, notificações e triagem de atendimento rodando sozinhos.',
    bullets: ['Menos retrabalho e erro humano', 'Processos padronizados', 'Equipe focada no que importa'],
    mockup: 'flow' as const,
  },
  {
    icon: Bot,
    title: 'IA que atende e resolve',
    text: 'Agentes de inteligência artificial treinados com a base de conhecimento da sua empresa atendem no WhatsApp, classificam mensagens e documentos e apoiam a equipe interna — 24 horas por dia.',
    bullets: ['Atendimento imediato, a qualquer hora', 'Respostas padronizadas e confiáveis', 'Escala sem aumentar equipe'],
    mockup: 'chat' as const,
  },
  {
    icon: BarChart3,
    title: 'Decida com dados, não com achismo',
    text: 'Estruturamos seus dados e entregamos dashboards em Power BI com os indicadores que importam: operação, vendas e financeiro em tempo real, sem depender de planilha.',
    bullets: ['Visibilidade total da operação', 'Indicadores em tempo real', 'Gargalos identificados cedo'],
    mockup: 'chart' as const,
  },
]

function FlowMockup() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1240] to-[#141C56] p-8 sm:p-10 shadow-card-lg overflow-hidden">
      <span className="glyph absolute top-4 right-6 text-3xl text-[#22D3EE]/40">+</span>
      <div className="space-y-4">
        {[
          { label: 'Nova mensagem no WhatsApp', tone: '#22D3EE' },
          { label: 'IA classifica e extrai os dados', tone: '#3B82F6' },
          { label: 'ERP atualizado + equipe notificada', tone: '#22C55E' },
        ].map((node, i) => (
          <div key={node.label}>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: node.tone }} />
              <span className="text-slate-200 text-sm">{node.label}</span>
            </div>
            {i < 2 && <div className="w-px h-4 bg-white/20 ml-6" />}
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-400 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
        Fluxo executado automaticamente, sem intervenção manual
      </p>
    </div>
  )
}

function ChatMockup() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1240] to-[#141C56] p-8 sm:p-10 shadow-card-lg overflow-hidden">
      <span className="glyph absolute bottom-4 right-6 text-3xl text-[#3B82F6]/40">×</span>
      <div className="space-y-3">
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
          <p className="text-slate-200 text-sm">Oi! Qual o status do meu pedido?</p>
        </div>
        <div className="max-w-[85%] ml-auto rounded-2xl rounded-br-md bg-gradient-to-r from-[#06B6D4] to-[#2563EB] px-4 py-3">
          <p className="text-white text-sm">
            Olá! Seu pedido #482 saiu para entrega hoje às 14h. Quer receber o link de
            rastreamento?
          </p>
        </div>
        <div className="max-w-[60%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
          <p className="text-slate-200 text-sm">Quero sim!</p>
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-400 flex items-center gap-2">
        <Bot size={13} className="text-[#22D3EE]" />
        Respondido pela IA da CGX em 2 segundos
      </p>
    </div>
  )
}

function ChartMockup() {
  const bars = [42, 66, 55, 80, 72, 94]
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1240] to-[#141C56] p-8 sm:p-10 shadow-card-lg overflow-hidden">
      <span className="absolute top-5 right-6 w-6 h-6 rounded-full border-[3px] border-[#22D3EE]/40" />
      <div className="flex items-center justify-between mb-6">
        <p className="font-display text-white text-sm font-semibold">Eficiência operacional</p>
        <span className="text-[#22D3EE] text-xs font-semibold">+124%</span>
      </div>
      <div className="flex items-end gap-3 h-36">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-lg"
            style={{
              height: `${h}%`,
              background:
                i === bars.length - 1
                  ? 'linear-gradient(180deg, #22D3EE, #2563EB)'
                  : 'rgba(255,255,255,0.12)',
            }}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between text-[10px] text-slate-500">
        {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}

const mockups = { flow: FlowMockup, chat: ChatMockup, chart: ChartMockup }

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
            const Mockup = mockups[feature.mockup]
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
                  <Mockup />
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
                          <span className="w-5 h-5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center shrink-0">
                            <Check size={11} className="text-[#06B6D4]" />
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
                <span className="font-display font-bold text-3xl gradient-text">{step.n}</span>
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
