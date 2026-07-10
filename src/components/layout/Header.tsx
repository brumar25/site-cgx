'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#servicos', label: 'Serviços' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  // Scroll-spy simples: marca o link da seção visível
  useEffect(() => {
    const ids = ['home', 'sobre', 'como-funciona', 'servicos', 'contato']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_2px_20px_rgba(6,10,38,0.25)]">
      <div className="flex items-stretch h-[72px]">
        {/* Painel branco do logo (marca do template) */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center bg-white px-6 sm:px-10 shrink-0"
        >
          <Image
            src="/logo.png"
            alt="CGX — Sua infraestrutura, sob controle"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Barra navy com navegação */}
        <div className="flex-1 bg-[#0B1240] flex items-center justify-end px-5 lg:px-12">
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 font-display text-sm font-medium transition-colors duration-200 ${
                  active === link.href ? 'text-[#22D3EE]' : 'text-white hover:text-[#22D3EE]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className={`px-3 py-2 font-display text-sm font-semibold transition-colors duration-200 ${
                active === '#contato' ? 'text-[#22D3EE]' : 'text-white hover:text-[#22D3EE]'
              }`}
            >
              Solicite um diagnóstico
            </a>
          </nav>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0B1240] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[...navLinks, { href: '#contato', label: 'Solicite um diagnóstico' }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 font-display text-sm font-medium text-white hover:text-[#22D3EE] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
