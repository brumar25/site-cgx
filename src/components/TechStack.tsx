"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "n8n", category: "Automação", color: "#ea4b71" },
  { name: "OpenAI", category: "IA", color: "#10a37f" },
  { name: "Claude AI", category: "IA", color: "#7c3aed" },
  { name: "Evolution API", category: "WhatsApp", color: "#25d366" },
  { name: "Meta API", category: "WhatsApp", color: "#0082fb" },
  { name: "PostgreSQL", category: "Banco de Dados", color: "#336791" },
  { name: "Docker", category: "Infra", color: "#2496ed" },
  { name: "Cloudflare", category: "Infra", color: "#f38020" },
  { name: "Next.js", category: "Frontend", color: "#ffffff" },
  { name: "Python", category: "Backend", color: "#3776ab" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "Redis", category: "Cache", color: "#dc382d" },
  { name: "Supabase", category: "Backend", color: "#3ecf8e" },
  { name: "Vercel", category: "Deploy", color: "#ffffff" },
  { name: "Typebot", category: "Chatbot", color: "#7c3aed" },
  { name: "VPS Cloud", category: "Infra", color: "#ff6b6b" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#06b6d4] opacity-[0.04] blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest mb-3">
            Tecnologia de ponta
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-white mb-4">
            Stack que usamos
          </h2>
          <p className="text-[#6060a0] max-w-xl mx-auto text-lg">
            Ferramentas modernas, integradas e comprovadas — escolhidas para
            cada problema, não por modismo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-2.5 bg-[#0c0c14] border border-[#1e1e3a] hover:border-[#7c3aed44] rounded-xl px-4 py-2.5 cursor-default transition-all duration-200"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: tech.color }}
              />
              <span className="text-sm font-medium text-[#a0a0c0] group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#404060] hidden sm:block">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[#404060] mt-8"
        >
          + dezenas de integrações via API REST, webhooks e protocolos customizados
        </motion.p>
      </div>
    </section>
  );
}
