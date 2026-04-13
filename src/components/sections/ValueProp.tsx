import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ValueProp() {
  return (
    <section id="value-prop" className="relative py-24 bg-[#020617]">
      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0F172A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Nossa proposta
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Ajudamos empresas a sair do{' '}
              <span className="gradient-text">improviso</span> e construir
              <br className="hidden sm:block" /> operações mais{' '}
              <span className="text-white">conectadas</span> e eficientes.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Pequenas e médias empresas que dependem de processos manuais, planilhas e sistemas
              desconectados perdem tempo, cometem erros e dificultam o crescimento. Nós mudamos
              isso.
            </p>
          </AnimatedSection>

          {/* Pain points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                before: 'Retrabalho e processos manuais',
                after: 'Fluxos automatizados e eficientes',
              },
              {
                before: 'Sistemas desconectados e ilhas de dados',
                after: 'Integração completa e dados centralizados',
              },
              {
                before: 'Decisões sem visibilidade',
                after: 'Dashboards e indicadores em tempo real',
              },
              {
                before: 'Atendimento desorganizado',
                after: 'IA e automação no atendimento',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * i} direction="up">
                <div className="group relative p-5 rounded-xl bg-[#0F172A] border border-white/5 hover:border-[#06B6D4]/20 transition-all duration-300 text-left overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-red-500/60 shrink-0" />
                      <p className="text-slate-500 text-xs leading-snug">{item.before}</p>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-[#06B6D4]/20 to-transparent mb-3" />
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#06B6D4] shrink-0" />
                      <p className="text-slate-200 text-xs font-medium leading-snug">{item.after}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  )
}
