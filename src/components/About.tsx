"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, Code2 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Resultado, não features",
    description: "Entregamos impacto operacional. Não nos importamos com a tecnologia — nos importamos com o problema que ela resolve.",
    color: "#a78bfa",
  },
  {
    icon: Zap,
    title: "Velocidade com qualidade",
    description: "Sprints rápidos, entregas funcionais e evolução contínua. Nada de projetos que ficam em reunião por meses.",
    color: "#38bdf8",
  },
  {
    icon: Code2,
    title: "Parceiro técnico",
    description: "Não somos fornecedor. Somos parte do time. Entendemos o negócio, falamos a língua da operação e da tecnologia.",
    color: "#34d399",
  },
  {
    icon: Shield,
    title: "Confiabilidade total",
    description: "Sistemas robustos, monitorados e com suporte real. Porque automação que quebra gera caos, não eficiência.",
    color: "#f472b6",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#7c3aed] opacity-[0.06] blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest mb-3">
              Sobre a CGX
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-white mb-6 leading-tight">
              Somos obcecados
              <br />
              <span className="gradient-text">por eficiência</span>
            </h2>
            <p className="text-[#7070a0] text-lg leading-relaxed mb-6">
              A CGX nasceu de uma obsessão: por que empresas ainda perdem horas
              em tarefas que podem ser automatizadas?
            </p>
            <p className="text-[#6060a0] leading-relaxed mb-6">
              Desenvolvemos automações, integrações e sistemas de IA para
              empresas que querem operar com mais inteligência — sem depender de
              processos manuais frágeis e equipes sobrecarregadas.
            </p>
            <p className="text-[#6060a0] leading-relaxed">
              Cada solução é desenvolvida do zero, para o problema real do
              cliente. Não existe template, não existe solução genérica. Existe
              diagnóstico, entendimento e execução precisa.
            </p>

            <div className="mt-8 p-4 bg-[#0c0c14] border border-[#7c3aed22] rounded-xl">
              <p className="text-[#a78bfa] font-medium text-sm italic">
                &ldquo;A CGX desenvolve automações, sistemas e soluções com IA para
                empresas que querem operar com mais eficiência e escala.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-[#0c0c14] border border-[#1e1e3a] rounded-xl p-5 card-hover"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${v.color}15` }}
                  >
                    <Icon size={18} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{v.title}</h3>
                  <p className="text-xs text-[#505080] leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
