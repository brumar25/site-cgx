import AnimatedSection from '@/components/ui/AnimatedSection'

// Seção "Imprensa" do template, adaptada para resultados reais da CGX
export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-[#0B1240] py-24 lg:py-32">
      <span className="glyph absolute top-10 left-[12%] text-5xl text-[#22D3EE]/30 hidden lg:block">
        ×
      </span>
      <span className="glyph absolute bottom-12 right-[10%] text-6xl text-[#3B82F6]/30 hidden lg:block">
        +
      </span>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="font-display text-[#22D3EE] text-sm font-semibold tracking-widest uppercase mb-8">
            Resultados reais
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <blockquote className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-14">
            “Reduzimos 6 horas diárias de operação manual com automação e IA.”
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: 'PIX', label: 'Comprovantes lidos e conferidos automaticamente' },
              { value: 'WhatsApp + CRM', label: 'Canais de atendimento integrados à gestão' },
              { value: '−6h/dia', label: 'De trabalho manual eliminado da operação' },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl bg-white/5 border border-white/10 px-6 py-6"
              >
                <p className="font-display font-bold text-2xl gradient-text mb-2">{stat.value}</p>
                <p className="text-slate-400 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
