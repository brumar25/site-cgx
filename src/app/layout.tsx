import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CGX | Automação, IA e Sistemas Inteligentes para Empresas",
  description:
    "A CGX desenvolve automações, sistemas e soluções com IA para empresas que querem operar com mais eficiência e escala. Integrações, atendimento automatizado e dashboards gerenciais.",
  keywords: ["automação", "inteligência artificial", "IA", "n8n", "WhatsApp", "integração", "sistemas", "CGX"],
  openGraph: {
    title: "CGX | Automação & IA para Empresas",
    description: "Transformamos operações empresariais com IA, automações e sistemas inteligentes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f0f0ff]">
        {children}
      </body>
    </html>
  );
}
