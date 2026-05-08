"use client";

import { Globe, MessageSquare, ExternalLink } from "lucide-react";

const links = {
  Soluções: [
    { label: "Atendimento Automatizado", href: "#servicos" },
    { label: "Integrações", href: "#servicos" },
    { label: "Dashboards", href: "#servicos" },
    { label: "Agentes de IA", href: "#servicos" },
    { label: "Automação Financeira", href: "#servicos" },
  ],
  Empresa: [
    { label: "Sobre a CGX", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Stack Tecnológica", href: "#stack" },
    { label: "Como Funciona", href: "#como-funciona" },
  ],
  Contato: [
    { label: "WhatsApp", href: "https://wa.me/5500000000000" },
    { label: "E-mail", href: "mailto:contato@cgx.com.br" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e3a] bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">CGX</span>
              <span className="text-[10px] font-medium text-[#6060a0] border border-[#1e1e3a] px-1.5 py-0.5 rounded-full">
                TECH
              </span>
            </div>
            <p className="text-sm text-[#404060] leading-relaxed mb-5 max-w-[220px]">
              Automações, sistemas e IA para empresas que querem operar com mais
              eficiência e escala.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-[#1e1e3a] flex items-center justify-center text-[#404060] hover:text-[#a78bfa] hover:border-[#7c3aed44] transition-colors"
              >
                <Globe size={15} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-[#1e1e3a] flex items-center justify-center text-[#404060] hover:text-[#a78bfa] hover:border-[#7c3aed44] transition-colors"
              >
                <ExternalLink size={15} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                className="w-8 h-8 rounded-lg border border-[#1e1e3a] flex items-center justify-center text-[#404060] hover:text-[#25d366] hover:border-[#25d36644] transition-colors"
              >
                <MessageSquare size={15} />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-[#505080] uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#404060] hover:text-[#a0a0c0] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e1e3a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#303050]">
            © {new Date().getFullYear()} CGX Tech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#303050]">
            Desenvolvido pela própria CGX — com automação, claro.
          </p>
        </div>
      </div>
    </footer>
  );
}
