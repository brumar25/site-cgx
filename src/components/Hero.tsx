"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "6h+", label: "de operação manual eliminada por dia" },
  { value: "3x", label: "mais escala sem novos funcionários" },
  { value: "100%", label: "sob medida para o seu negócio" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="glow-orb w-[700px] h-[700px] bg-[#7c3aed] opacity-[0.12] top-[-200px] left-1/2 -translate-x-1/2" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#06b6d4] opacity-[0.06] bottom-0 right-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <FadeUp delay={0} className="mb-6 inline-flex">
          <Badge
            variant="outline"
            className="border-[#7c3aed55] bg-[#7c3aed11] text-[#a78bfa] px-4 py-1.5 text-sm font-medium gap-2"
          >
            <Zap size={13} className="fill-[#a78bfa] text-[#a78bfa]" />
            Automação + IA + Sistemas Inteligentes
          </Badge>
        </FadeUp>

        <FadeUp delay={0.12}>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            <span className="gradient-text-white">Automatize operações,</span>
            <br />
            <span className="gradient-text">reduza trabalho manual</span>
            <br />
            <span className="gradient-text-white">e escale com IA.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.24}>
          <p className="text-lg md:text-xl text-[#8080b0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Desenvolvemos integrações, sistemas e automações sob medida para
            empresas que querem crescer sem aumentar a complexidade operacional.
          </p>
        </FadeUp>

        <FadeUp delay={0.36} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="https://wa.me/5500000000000?text=Olá!%20Quero%20um%20diagnóstico%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-base font-medium px-8 py-4 transition-colors shadow-lg shadow-[#7c3aed33]"
          >
            <MessageSquare size={18} />
            Diagnóstico Gratuito
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1e1e3a] bg-transparent hover:bg-[#7c3aed11] hover:border-[#7c3aed55] text-[#a0a0c0] hover:text-white text-base font-medium px-8 py-4 transition-colors"
          >
            Ver Soluções
            <ArrowRight size={18} />
          </a>
        </FadeUp>

        <FadeUp delay={0.48} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-[#0c0c14] border border-[#1e1e3a] rounded-xl px-6 py-5"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-[#6060a0]">{s.label}</div>
            </div>
          ))}
        </FadeUp>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}
