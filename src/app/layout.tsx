import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CGX — Infraestrutura, automação e inteligência para o seu negócio',
  description:
    'A CGX desenvolve soluções em infraestrutura, automação, integração de sistemas, BI e inteligência artificial para empresas que querem mais controle, produtividade e crescimento.',
  keywords: [
    'automação de processos',
    'inteligência artificial',
    'integração de sistemas',
    'BI e dados',
    'infraestrutura',
    'n8n',
    'Power BI',
    'tecnologia para empresas',
  ],
  authors: [{ name: 'CGX' }],
  creator: 'CGX',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.cgxperts.org',
    title: 'CGX — Tecnologia para organizar, automatizar e acelerar seu negócio',
    description:
      'Soluções em infraestrutura, automação, integração de sistemas, BI e IA para empresas que querem crescer.',
    siteName: 'CGX',
    images: [{ url: '/logo-dark.png', width: 600, height: 338, alt: 'CGX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGX — Tecnologia aplicada ao crescimento de negócios',
    description:
      'Infraestrutura, automação e inteligência para o seu negócio.',
    images: ['/logo-dark.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
