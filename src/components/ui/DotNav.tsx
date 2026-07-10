'use client'

import { useState, useEffect } from 'react'

// Navegação lateral por pontos (marca do template Analitix)
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
]

export default function DotNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Seções da página"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          aria-label={label}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            active === id
              ? 'bg-[#06B6D4] border-[#06B6D4] scale-110'
              : 'bg-transparent border-[#9AA3C0] hover:border-[#06B6D4]'
          }`}
        />
      ))}
    </nav>
  )
}
