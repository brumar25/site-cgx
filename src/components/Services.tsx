"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  GitBranch,
  BarChart3,
  Brain,
  Banknote,
  Layers,
  Settings,
  Users,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Atendimento Automatizado",
    pain: "Equipe sobrecarregada com perguntas repetitivas e atendimentos manuais.",
    solution: "Chatbots inteligentes no WhatsApp e outras plataformas com IA treinada no seu negócio.",
    result: "Até 80% das interações resolvidas sem intervenção humana.",
    color: "#a78bfa",
  },
  {
    icon: GitBranch,
    title: "Integração entre Sistemas",
    pain: "Dados dispersos em planilhas, CRMs, ERPs e sistemas que não conversam entre si.",
    solution: "Conectamos todas as ferramentas da sua operação em um fluxo único e automatizado.",
    result: "Fim das tarefas duplicadas e dos dados desatualizados.",
    color: "#38bdf8",
  },
  {
    icon: BarChart3,
    title: "Dashboards Gerenciais",
    pain: "Decisões tomadas no escuro por falta de dados em tempo real.",
    solution: "Painéis personalizados com os indicadores que realmente importam para o seu negócio.",
    result: "Visibilidade total da operação em tempo real.",
    color: "#34d399",
  },
  {
    icon: Brain,
    title: "Agentes de IA",
    pain: "Processos que exigem análise, triagem e tomada de decisão contínua.",
    solution: "Agentes inteligentes que executam tarefas complexas de forma autônoma.",
    result: "Operação que escala sem aumentar a equipe.",
    color: "#f472b6",
  },
  {
    icon: Banknote,
    title: "Automação Financeira",
    pain: "Horas gastas conferindo comprovantes, emitindo boletos e conciliando pagamentos.",
    solution: "Automação completa do fluxo financeiro, do PIX ao relatório gerencial.",
    result: "Zero erros humanos no financeiro, 100% rastreável.",
    color: "#fb923c",
  },
  {
    icon: Layers,
    title: "Processos Inteligentes",
    pain: "Fluxos operacionais lentos, com muitos gargalos e dependência humana.",
    solution: "Mapeamos e automatizamos os processos que mais consomem tempo da sua equipe.",
    result: "Redução de até 70% no tempo de execução de tarefas repetitivas.",
    color: "#facc15",
  },
  {
    icon: Settings,
    title: "Infraestrutura & Cloud",
    pain: "Servidores instáveis, ambientes desconfigurados e sem escalabilidade.",
    solution: "Configuração e gerenciamento de VPS, Docker, Cloudflare e ambientes cloud.",
    result: "Infraestrutura estável, segura e escalável para crescer.",
    color: "#a78bfa",
  },
  {
    icon: Users,
    title: "CRM & Gestão Comercial",
    pain: "Leads perdidos, follow-up esquecido e pipeline sem visibilidade.",
    solution: "Implementação e automação de CRM com integrações no WhatsApp e e-mail.",
    result: "Pipeline organizado e follow-up automático, sem esforço manual.",
    color: "#38bdf8",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="servicos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest mb-3">
            O que resolvemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-white mb-4">
            Soluções que transformam
            <br />
            <span className="gradient-text">operações empresariais</span>
          </h2>
          <p className="text-[#6060a0] max-w-xl mx-auto text-lg">
            Não vendemos tecnologia. Vendemos resultado operacional — menos
            trabalho manual, mais escala e previsibilidade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="card-hover bg-[#0c0c14] rounded-xl p-6 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${s.color}18` }}
                >
                  <Icon size={20} style={{ color: s.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-[15px]">{s.title}</h3>
                <p className="text-[#4040700] text-xs text-[#505080] mb-3 leading-relaxed">{s.pain}</p>
                <p className="text-xs text-[#7070a0] leading-relaxed mb-3">{s.solution}</p>
                <div
                  className="text-xs font-medium px-2.5 py-1 rounded-full inline-block"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  {s.result}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
