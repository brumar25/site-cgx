# CGX — Site Institucional

Site institucional da marca CGX — one-page no estilo do template Analitix (Wix), desenvolvido com Next.js 14, Tailwind CSS e Framer Motion.

Seções: Hero &rarr; Sobre &rarr; Como funciona &rarr; Serviços &rarr; Resultados &rarr; Solicite um diagnóstico. As rotas antigas (`/sobre`, `/servicos`, `/contato`) redirecionam para as âncoras correspondentes.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS 3
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Tipografia:** Raleway (Google Fonts) — mesma família do template
- **Deploy:** Docker + Nginx

---

## Estrutura de pastas

```
cgx-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz (fontes, metadata, header/footer)
│   │   ├── globals.css         # Estilos globais e variáveis CSS
│   │   ├── page.tsx            # One-page (todas as seções)
│   │   ├── servicos/page.tsx   # Redirect → /#servicos
│   │   ├── sobre/page.tsx      # Redirect → /#sobre
│   │   └── contato/page.tsx    # Redirect → /#contato
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero navy + mockup de dashboard
│   │   │   ├── About.tsx       # História / Visão / Tecnologia
│   │   │   ├── Features.tsx    # Como funciona + metodologia
│   │   │   ├── Services.tsx    # Grid de serviços
│   │   │   ├── Quote.tsx       # Resultados reais
│   │   │   └── Contact.tsx     # Formulário → WhatsApp
│   │   └── ui/
│   │       ├── AnimatedSection.tsx
│   │       └── DotNav.tsx      # Navegação lateral por pontos
│   └── lib/
│       └── config.ts           # ← Configure WhatsApp e e-mail aqui
├── nginx/
│   └── nginx.conf
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Configuração inicial

Antes de rodar, edite `src/lib/config.ts`:

```ts
export const SITE_CONFIG = {
  whatsapp: {
    number: '5511999999999',  // ← Coloque o número real aqui (com DDI+DDD)
    message: 'Olá! Gostaria de saber mais sobre as soluções da CGX.',
  },
  email: 'contato@cgx.com.br',  // ← E-mail real
  ...
}
```

---

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:3000
```

---

## Build de produção

```bash
# Build
npm run build

# Rodar localmente
npm start
```

---

## Deploy com Docker (VPS)

### Pré-requisitos na VPS

- Docker + Docker Compose instalados
- Porta 80 e 443 liberadas no firewall

### Deploy simples (sem Nginx)

```bash
# Na VPS, clone o repositório
git clone <seu-repo> cgx-site
cd cgx-site

# Build e subir
docker compose up -d --build

# Site disponível em http://IP_DA_VPS:3000
```

### Deploy com Nginx + SSL (recomendado)

1. Aponte o domínio `cgx.com.br` para o IP da VPS

2. Instale o Certbot e gere os certificados:

```bash
apt install certbot
certbot certonly --standalone -d cgx.com.br -d www.cgx.com.br
```

3. Copie os certificados:

```bash
mkdir -p nginx/certs
cp /etc/letsencrypt/live/cgx.com.br/fullchain.pem nginx/certs/
cp /etc/letsencrypt/live/cgx.com.br/privkey.pem nginx/certs/
```

4. Suba com Nginx:

```bash
docker compose --profile with-nginx up -d --build
```

5. Site disponível em https://cgx.com.br

### Atualizar o site

```bash
git pull
docker compose down
docker compose up -d --build
```

---

## Comandos úteis Docker

```bash
# Ver logs
docker compose logs -f cgx-site

# Reiniciar container
docker compose restart cgx-site

# Parar tudo
docker compose down

# Ver status
docker compose ps
```

---

## Renovação automática SSL

Adicione ao crontab da VPS:

```bash
crontab -e

# Adicionar linha:
0 3 * * * certbot renew --quiet && cp /etc/letsencrypt/live/cgx.com.br/*.pem /caminho/cgx-site/nginx/certs/ && docker compose -f /caminho/cgx-site/docker-compose.yml restart nginx
```

---

## Personalização

| Arquivo | O que editar |
|---|---|
| `src/lib/config.ts` | WhatsApp, e-mail, redes sociais |
| `src/components/sections/Hero.tsx` | Título e subtítulo principal |
| `src/components/sections/Services.tsx` | Serviços |
| `src/components/sections/About.tsx` | Sobre a empresa |
| `src/app/layout.tsx` | Título e descrição SEO |
| `src/app/globals.css` | Cores e estilos globais |

---

## Imagens

Fotos de banco aberto (Unsplash — licença livre para uso comercial, sem atribuição obrigatória), em `public/images/`:

| Arquivo | Foto |
|---|---|
| `hero-bg.jpg` | Server room — unsplash.com/photos/ef010cbdcc31 (Taylor Vick) |
| `dashboard.jpg` | Dashboard analytics — unsplash.com/photos/bebda4e38f71 (Luke Chesser) |
| `equipe.jpg` | Equipe trabalhando — unsplash.com/photos/009f0129c71c (Annie Spratt) |
| `whatsapp.jpg` | Celular em uso — unsplash.com/photos/f56000c27a9a |
| `bi-dados.jpg` | Notebook com indicadores — unsplash.com/photos/afdab827c52f (Carlos Muza) |

---

Desenvolvido pela CGX.
