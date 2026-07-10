import type { Metadata } from 'next'
import { Poppins, Mulish } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cgxperts.org'),
  title: 'CGX — A forma mais inteligente de operar o seu negócio',
  description:
    'A CGX desenvolve automações, integrações, BI e inteligência artificial para empresas que querem crescer sem aumentar a complexidade operacional.',
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
    title: 'CGX — A forma mais inteligente de operar o seu negócio',
    description:
      'Automações, integrações, BI e IA sob medida para empresas que querem mais controle, produtividade e crescimento.',
    siteName: 'CGX',
    images: [{ url: '/logo-dark.png', width: 600, height: 338, alt: 'CGX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGX — A forma mais inteligente de operar o seu negócio',
    description: 'Automações, integrações, BI e IA sob medida para o seu negócio.',
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
    <html lang="pt-BR" className={`${poppins.variable} ${mulish.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
