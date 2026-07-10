import Image from 'next/image'
import { Linkedin, Mail, MessageCircle, Clock } from 'lucide-react'
import { SITE_CONFIG, WHATSAPP_URL } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-[#060A26]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Marca */}
          <div>
            <div className="bg-white rounded-xl px-4 py-2 w-fit mb-5">
              <Image
                src="/logo.png"
                alt="CGX"
                width={130}
                height={44}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Automações, integrações, BI e inteligência artificial para empresas que querem
              operar melhor e crescer com controle.
            </p>
          </div>

          {/* Contato (rodapé do template) */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 hover:text-[#22D3EE] transition-colors"
                >
                  <Mail size={16} className="text-[#22D3EE]" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#22D3EE] transition-colors"
                >
                  <MessageCircle size={16} className="text-[#22D3EE]" />
                  WhatsApp — resposta rápida
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#22D3EE]" />
                Segunda a sexta, das 8h às 18h
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '#home', label: 'Home' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#como-funciona', label: 'Como funciona' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#contato', label: 'Solicite um diagnóstico' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#22D3EE] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0077B5]/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#0077B5] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CGX. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs">A forma mais inteligente de operar o seu negócio.</p>
        </div>
      </div>
    </footer>
  )
}
