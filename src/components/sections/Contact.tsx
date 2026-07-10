'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, MessageCircle, Mail, Clock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG, WHATSAPP_URL } from '@/lib/config'

const inputClass =
  'w-full px-4 py-3.5 bg-white border border-[#E3EAF8] rounded-xl text-[#1C2350] placeholder-[#9AA3C0] text-sm focus:outline-none focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 transition-all duration-200'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${formData.name}, da empresa ${formData.company || 'não informado'}. Tenho interesse em: ${formData.interest || 'um diagnóstico'}. ${formData.message}`
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contato" className="bg-[#F0F4FC] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1C2350] mb-4">
              Solicite um diagnóstico
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[#5B6482] text-lg max-w-xl mx-auto">
              Conte sobre o seu negócio e receba um diagnóstico gratuito — sem compromisso, sem
              enrolação.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl bg-white shadow-card-lg p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="w-16 h-16 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-[#06B6D4]" />
                </span>
                <h3 className="font-display font-bold text-2xl text-[#1C2350] mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-[#5B6482]">
                  Você foi redirecionado para o WhatsApp. Aguarde nosso retorno em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome *"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Seu e-mail *"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Interesse...</option>
                    <option>Automação de processos</option>
                    <option>Inteligência artificial</option>
                    <option>Integração de sistemas</option>
                    <option>BI e dados</option>
                    <option>Infraestrutura e suporte</option>
                    <option>Solução sob medida</option>
                    <option>Não sei ainda — quero um diagnóstico</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte um pouco sobre o seu negócio e o que você gostaria de resolver... *"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
                <button type="submit" className="btn-pill w-full">
                  <Send size={18} />
                  Enviar via WhatsApp
                </button>
                <p className="text-[#9AA3C0] text-xs text-center">
                  Ao clicar, você será direcionado ao WhatsApp com sua mensagem preenchida.
                </p>
              </form>
            )}
          </div>
        </AnimatedSection>

        {/* Canais diretos */}
        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-[#5B6482]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#2563EB] transition-colors"
            >
              <MessageCircle size={16} className="text-[#06B6D4]" />
              WhatsApp — resposta rápida
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 hover:text-[#2563EB] transition-colors"
            >
              <Mail size={16} className="text-[#06B6D4]" />
              {SITE_CONFIG.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[#06B6D4]" />
              Seg a sex, 8h às 18h
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
