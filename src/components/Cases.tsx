"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, DollarSign, Users, BarChart } from "lucide-react";

const cases = [
  {
    icon: DollarSign,
    tag: "Automação Financeira",
    tagColor: "#34d399",
    title: "Conciliação de PIX automatizada",
    before: "Conferência manual de centenas de comprovantes diários, 3h de trabalho toda manhã",
    after: "Sistema lê, valida e reconcilia cada PIX automaticamente em segundos",
    metric: "3h eliminadas por dia",
    metricIcon: Clock,
    sector: "Empresa de Cobrança",
  },
  {
    icon: Users,
    tag: "Atendimento & CRM",
    tagColor: "#38bdf8",
    title: "WhatsApp integrado ao CRM",
    before: "Leads respondidos horas depois, sem registro, sem follow-up, time perdendo oportunidades",
    after: "Cada lead do WhatsApp entra automaticamente no CRM com dados, tag e follow-up agendado",
    metric: "40% mais conversão",
    metricIcon: TrendingUp,
    sector: "Empresa de Serviços",
  },
  {
    icon: Zap,
    tag: "Processos Inteligentes",
    tagColor: "#a78bfa",
    title: "Pipeline de onboarding automatizado",
    before: "Onboarding de clientes levava 5 dias e dependia de 4 pessoas diferentes",
    after: "Fluxo 100% automatizado: contratos, acessos, briefing e kick-off sem intervenção humana",
    metric: "5 dias → 6 horas",
    metricIcon: Clock,
    sector: "SaaS B2B",
  },
  {
    icon: BarChart,
    tag: "Dashboards Gerenciais",
    tagColor: "#fb923c",
    title: "Dashboard operacional em tempo real",
    before: "Gestores dependiam de relatórios semanais em planilhas desatualizadas",
    after: "Painel unificado com dados de vendas, produção e financeiro atualizando a cada 5 minutos",
    metric: "Decisões 10x mais rápidas",
    metricIcon: TrendingUp,
    sector: "Empresa de Manufatura",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7c3aed] opacity-[0.05] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest mb-3">
            Resultados reais
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-white mb-4">
            Cases que falam
            <br />
            <span className="gradient-text">por si mesmos</span>
          </h2>
          <p className="text-[#6060a0] max-w-xl mx-auto text-lg">
            Problemas reais. Soluções sob medida. Resultados mensuráveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => {
            const Icon = c.icon;
            const MetricIcon = c.metricIcon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-hover bg-[#0c0c14] rounded-2xl p-7"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${c.tagColor}15` }}
                  >
                    <Icon size={22} style={{ color: c.tagColor }} />
                  </div>
                  <span
                    className="text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${c.tagColor}15`, color: c.tagColor }}
                  >
                    {c.tag}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-4">{c.title}</h3>

                <div className="space-y-3 mb-5">
                  <div className="flex gap-3">
                    <span className="text-xs font-semibold text-red-400/70 w-14 shrink-0 mt-0.5">ANTES</span>
                    <p className="text-sm text-[#5050800] text-[#505080] leading-relaxed">{c.before}</p>
                  </div>
                  <div className="w-full h-px bg-[#1e1e3a]" />
                  <div className="flex gap-3">
                    <span className="text-xs font-semibold text-[#34d399]/70 w-14 shrink-0 mt-0.5">DEPOIS</span>
                    <p className="text-sm text-[#7070a0] leading-relaxed">{c.after}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style={{ background: `${c.tagColor}12` }}
                  >
                    <MetricIcon size={14} style={{ color: c.tagColor }} />
                    <span className="text-sm font-bold" style={{ color: c.tagColor }}>
                      {c.metric}
                    </span>
                  </div>
                  <span className="text-xs text-[#3030600] text-[#303060]">{c.sector}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
