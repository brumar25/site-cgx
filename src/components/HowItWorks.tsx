"use client";

import { motion } from "framer-motion";
import { Search, FileCode2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico Gratuito",
    description:
      "Entendemos a fundo sua operação: gargalos, processos repetitivos, sistemas usados e objetivos de crescimento.",
    color: "#a78bfa",
  },
  {
    icon: FileCode2,
    step: "02",
    title: "Proposta Personalizada",
    description:
      "Mapeamos as automações e integrações com maior impacto e entregamos uma proposta clara com ROI estimado.",
    color: "#38bdf8",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Desenvolvimento & Implantação",
    description:
      "Desenvolvemos e implantamos as soluções em sprints rápidos, com testes, treinamento da equipe e acompanhamento.",
    color: "#34d399",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Suporte Contínuo",
    description:
      "Monitoramos, evoluímos e damos suporte às soluções. Somos parceiro técnico, não só um fornecedor.",
    color: "#f472b6",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, #7c3aed, transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest mb-3">
            Processo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-white mb-4">
            Como a CGX trabalha
          </h2>
          <p className="text-[#6060a0] max-w-xl mx-auto text-lg">
            Do diagnóstico à entrega, um processo claro, transparente e focado em resultado.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#7c3aed33] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center border"
                      style={{
                        background: `${s.color}0f`,
                        borderColor: `${s.color}33`,
                      }}
                    >
                      <Icon size={28} style={{ color: s.color }} />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-[#6060a0] border border-[#1e1e3a] bg-[#050508] px-1.5 py-0.5 rounded-full">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-[17px]">{s.title}</h3>
                  <p className="text-sm text-[#6060a0] leading-relaxed">{s.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
