export const SITE_CONFIG = {
  name: 'CGX',
  tagline: 'Infraestrutura, automação e inteligência para o seu negócio.',
  description:
    'A CGX desenvolve soluções em infraestrutura, automação, integração de sistemas, BI e inteligência artificial para empresas que querem mais controle, produtividade e crescimento.',
  whatsapp: {
    number: '5567992017855', // Substitua pelo número real
    message: 'Olá! Gostaria de saber mais sobre as soluções da CGX.',
  },
  email: 'contato@cgxperts.org',
  social: {
    linkedin: 'https://linkedin.com/company/cgx',
  },
}

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
  SITE_CONFIG.whatsapp.message
)}`
