import AnimatedSection from '@/components/ui/AnimatedSection'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/config'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.06) 30%, transparent 70%)',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-8 left-1/4 w-px h-20 bg-gradient-to-b from-[#06B6D4]/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-8 right-1/4 w-px h-20 bg-gradient-to-t from-[#2563EB]/20 to-transparent hidden lg:block" />
      <div className="absolute top-1/2 left-8 w-20 h-px bg-gradient-to-r from-transparent to-[#06B6D4]/20 hidden lg:block" />
      <div className="absolute top-1/2 right-8 w-20 h-px bg-gradient-to-l from-transparent to-[#2563EB]/20 hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-6 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
            Vamos conversar?
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mb-6">
            Quer entender como a tecnologia pode{' '}
            <span className="gradient-text">destravar sua operação?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Fale com a CGX e veja como podemos estruturar uma solução sob medida para o seu negócio.
            Sem compromisso, sem enrolação.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-0.5 text-base"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contato"
              className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold rounded-xl transition-all duration-300 text-base"
            >
              Enviar mensagem
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Trust indicators */}
        <AnimatedSection delay={0.4}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500">
            {['Resposta rápida', 'Diagnóstico gratuito', 'Sem compromisso'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
