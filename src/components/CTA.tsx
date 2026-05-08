"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed0a] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#7c3aed] opacity-[0.08] blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-[#7c3aed] text-sm font-semibold uppercase tracking-widest mb-6 border border-[#7c3aed33] bg-[#7c3aed11] px-4 py-1.5 rounded-full">
            <Clock size={13} />
            Diagnóstico gratuito — resposta em até 24h
          </div>

          <h2 className="text-5xl md:text-6xl font-bold gradient-text-white mb-6 leading-tight">
            Pronto para parar de
            <br />
            <span className="gradient-text">perder tempo com</span>
            <br />
            processos manuais?
          </h2>

          <p className="text-[#6060a0] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fale com a CGX agora. Fazemos um diagnóstico gratuito da sua operação
            e mostramos onde a automação e a IA podem gerar o maior impacto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5500000000000?text=Olá!%20Quero%20um%20diagnóstico%20gratuito%20da%20minha%20operação"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-lg font-medium px-10 py-5 transition-colors shadow-xl shadow-[#7c3aed44]"
            >
              <MessageSquare size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@cgx.com.br"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1e1e3a] bg-transparent hover:bg-[#7c3aed11] hover:border-[#7c3aed55] text-[#a0a0c0] hover:text-white text-lg font-medium px-10 py-5 transition-colors"
            >
              Enviar E-mail
              <ArrowRight size={20} />
            </a>
          </div>

          <p className="mt-8 text-sm text-[#404060]">
            Sem compromisso. Sem enrolação. Só resultado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
