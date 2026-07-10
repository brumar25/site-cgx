import AnimatedSection from '@/components/ui/AnimatedSection'

// Três colunas do template ("História / Nossa Visão / Tecnologia"), com conteúdo real da CGX
const columns = [
  {
    glyph: '×',
    color: '#06B6D4',
    title: 'História',
    text: 'A CGX nasceu da necessidade real de unir visão técnica com entendimento de negócio — e entregar tecnologia que gera resultado de verdade para pequenas e médias empresas.',
  },
  {
    glyph: '○',
    color: '#2563EB',
    title: 'Nossa visão',
    text: 'Ser referência em soluções tecnológicas práticas para empresas que querem organizar, automatizar e crescer. Menos promessa, mais execução.',
  },
  {
    glyph: '+',
    color: '#22D3EE',
    title: 'Tecnologia',
    text: 'n8n, WhatsApp Business API, PostgreSQL, Power BI, Docker e IA (OpenAI e Claude) — um stack moderno aplicado ao contexto real da sua operação.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {columns.map((col, i) => (
            <AnimatedSection key={col.title} delay={0.12 * i}>
              <div className="text-center">
                <span
                  className="glyph block text-5xl mb-6"
                  style={{ color: col.color }}
                  aria-hidden
                >
                  {col.glyph}
                </span>
                <h2 className="font-display font-bold text-2xl text-[#2563EB] mb-5">
                  {col.title}
                </h2>
                <p className="text-[#5B6482] leading-relaxed">{col.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
