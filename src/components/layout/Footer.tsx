import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG, WHATSAPP_URL } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5 group w-fit">
              <div className="bg-white/90 group-hover:bg-white rounded-xl px-3 py-1.5 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.4)] transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="CGX"
                  width={120}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Infraestrutura, automação e inteligência para empresas que querem operar melhor e crescer com segurança.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E293B] hover:bg-[#25D366]/20 border border-white/5 hover:border-[#25D366]/30 flex items-center justify-center text-slate-400 hover:text-[#25D366] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-lg bg-[#1E293B] hover:bg-[#2563EB]/20 border border-white/5 hover:border-[#2563EB]/30 flex items-center justify-center text-slate-400 hover:text-[#2563EB] transition-all duration-200"
                aria-label="E-mail"
              >
                <Mail size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E293B] hover:bg-[#0077B5]/20 border border-white/5 hover:border-[#0077B5]/30 flex items-center justify-center text-slate-400 hover:text-[#0077B5] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/servicos', label: 'Serviços' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#06B6D4] text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                'Automação de processos',
                'Inteligência artificial',
                'Integração de sistemas',
                'BI e dados',
                'Infraestrutura',
                'Soluções sob medida',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/servicos"
                    className="text-slate-400 hover:text-[#06B6D4] text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CGX. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Tecnologia que organiza, automatiza e acelera.
          </p>
        </div>
      </div>
    </footer>
  )
}
