'use client'

import type { Metadata } from 'next'
import { MessageCircle, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG, WHATSAPP_URL } from '@/lib/config'
import { useState, FormEvent } from 'react'

const contactOptions = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Resposta rápida e direta. Ideal para primeiro contato.',
    action: 'Falar no WhatsApp',
    href: WHATSAPP_URL,
    color: '#25D366',
    external: true,
  },
  {
    icon: Mail,
    title: 'E-mail',
    description: 'Para propostas, documentos e detalhamento de projetos.',
    action: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    color: '#2563EB',
    external: false,
  },
  {
    icon: Clock,
    title: 'Horário de atendimento',
    description: 'Segunda a sexta, das 8h às 18h. Retorno em até 24h.',
    action: null,
    href: null,
    color: '#06B6D4',
    external: false,
  },
]

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Build WhatsApp message from form
    const msg = `Olá! Meu nome é ${formData.name}, da empresa ${formData.company || 'não informado'}. Tenho interesse em: ${formData.interest || 'serviços da CGX'}. ${formData.message}`
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3 bg-[#0F172A] border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#06B6D4]/50 focus:ring-1 focus:ring-[#06B6D4]/30 transition-all duration-200'

  const labelClass = 'block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'

  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="inline-block text-xs font-semibold text-[#06B6D4] tracking-widest uppercase mb-4 border border-[#06B6D4]/20 px-3 py-1 rounded-full bg-[#06B6D4]/5">
              Contato
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
              Vamos construir algo{' '}
              <span className="gradient-text">juntos</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-slate-400 text-lg leading-relaxed">
              Fale com a CGX, conte sobre o seu negócio e descubra qual solução faz sentido para a
              sua realidade.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact options */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection>
                <h2 className="font-display font-semibold text-lg text-white mb-6">
                  Como falar com a CGX
                </h2>
              </AnimatedSection>
              {contactOptions.map((option, i) => {
                const Icon = option.icon
                return (
                  <AnimatedSection key={option.title} delay={0.1 * i}>
                    <div className="p-5 rounded-xl bg-[#1E293B]/40 border border-white/5 hover:border-white/10 transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${option.color}15`, border: `1px solid ${option.color}25` }}
                        >
                          <Icon size={18} style={{ color: option.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-white text-sm mb-1">
                            {option.title}
                          </h3>
                          <p className="text-slate-400 text-xs leading-snug mb-3">
                            {option.description}
                          </p>
                          {option.action && option.href && (
                            <a
                              href={option.href}
                              target={option.external ? '_blank' : undefined}
                              rel={option.external ? 'noopener noreferrer' : undefined}
                              className="text-xs font-semibold transition-colors duration-200 hover:underline"
                              style={{ color: option.color }}
                            >
                              {option.action} →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}

              {/* Quick CTA */}
              <AnimatedSection delay={0.4}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 text-sm"
                >
                  <MessageCircle size={18} />
                  Iniciar conversa no WhatsApp
                </a>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1} direction="left">
                <div className="p-8 rounded-2xl bg-[#1E293B]/40 border border-white/5">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} className="text-[#06B6D4]" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-white mb-3">
                        Mensagem enviada!
                      </h3>
                      <p className="text-slate-400 text-base">
                        Você foi redirecionado para o WhatsApp. Aguarde nosso retorno em breve.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display font-bold text-xl text-white mb-6">
                        Enviar mensagem
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Seu nome *</label>
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="João Silva"
                              value={formData.name}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>E-mail *</label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="joao@empresa.com.br"
                              value={formData.email}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Empresa</label>
                          <input
                            type="text"
                            name="company"
                            placeholder="Nome da sua empresa"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Interesse</label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Selecione um serviço...</option>
                            <option>Automação de processos</option>
                            <option>Inteligência artificial</option>
                            <option>Integração de sistemas</option>
                            <option>BI e dados</option>
                            <option>Infraestrutura e suporte</option>
                            <option>Solução sob medida</option>
                            <option>Não sei ainda — quero um diagnóstico</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Mensagem *</label>
                          <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder="Conte um pouco sobre o seu negócio e o que você gostaria de resolver..."
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClass} resize-none`}
                          />
                        </div>
                        <button
                          type="submit"
                          className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-0.5"
                        >
                          <Send size={18} />
                          Enviar via WhatsApp
                        </button>
                        <p className="text-slate-500 text-xs text-center">
                          Ao clicar, você será direcionado ao WhatsApp com sua mensagem preenchida.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
