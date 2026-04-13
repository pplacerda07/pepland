# Ideia do Projeto — Landing Page Peptídeos

## Visão Geral

Landing page de venda direta de um infoproduto digital (e-book) sobre peptídeos para recomposição corporal. O objetivo central é converter visitantes em compradores do pacote completo, conduzindo o usuário por um funil de persuasão estruturado do topo ao fundo da página.

---

## O Produto

**Guia Definitivo dos Peptídeos** — pacote digital em 3 volumes entregue em PDF:

| Volume | Nome | Conteúdo |
|--------|------|----------|
| 01 | O Guia Definitivo | O que são peptídeos, como funcionam, diferenças para esteroides e cuidados essenciais |
| 02 | Doses & Reconstituição | Água bacteriostática, cálculos de dose, tabelas e passo a passo de aplicação |
| 03 | Lista de Fornecedores | Laboratórios nacionais e internacionais verificados, critérios de escolha, importação |

**Preço:** ~~R$ 97~~ → **R$ 47,90** (pagamento único, acesso vitalício)  
**Checkout:** CartPanda (`arkan-club.mycartpanda.com`)  
**Entrega:** automática por e-mail após a compra

---

## Público-Alvo

Pessoas interessadas em recomposição corporal (perda de gordura, ganho de massa magra, melhora da pele/sono) que buscam uma alternativa científica e mais segura aos anabolizantes tradicionais. O tom do copy aborda tanto iniciantes quanto profissionais de saúde (ex: nutricionistas).

---

## Estrutura da Página (Funil de Persuasão)

A página segue uma arquitetura clássica de landing page de conversão, com 13 seções em ordem estratégica:

```
1.  Navbar          — Navegação fixa com CTA flutuante
2.  Hero            — Hook emocional + CTA primário ("Você Já Tentou Tudo. Agora Faça do Jeito Certo.")
3.  StatsBar        — Prova rápida: 5+ Peptídeos, 100% Embasamento Científico, 3 Volumes, Acesso 24/7
4.  ProblemSection  — Identificação e empatia com a dor do público
5.  SolutionSection — O que são peptídeos e como diferem de anabolizantes
6.  PeptidesShowcase— Showcase interativo dos 5 temas: O Que São / Gordura / GH / Massa Magra / Pele
7.  ProductVolumes  — Detalhe dos 3 volumes com cards empilháveis (sticky scroll)
8.  SupplierSection — Diferencial exclusivo: "Não Seja Feito de Cobaia"
9.  Testimonials    — Prova social com 4 depoimentos (Ana, Roberto, Luiza, Marcio)
10. Offer           — Preço + lista de inclusões + métodos de pagamento
11. FAQ             — 6 objeções respondidas em 2 categorias
12. Guarantee       — Segurança de entrega
13. FinalCTA        — Fechamento final
14. Footer          — Aviso legal
    FloatingCTA     — Botão flutuante persistente na tela
```

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + Vite |
| Estilização | Tailwind CSS 3 |
| Animações | Framer Motion 12 |
| Ícones | Lucide React |
| Utilitários CSS | clsx + tailwind-merge |
| Tipografia | Montserrat (heading + body) |
| Paleta principal | Dark `#1A1A16` · Gold `#B08A43` · Off-white `#F8F9FA` |

---

## Identidade Visual

- **Estética:** Editorial/premium — minimalista com toques dourados
- **Cor de destaque:** Gold (`#B08A43`) — usada em CTAs, highlights de texto e scrollbar
- **Background:** Off-white claro com textura noise sutil
- **Tipografia:** Montserrat em pesos variados (extrabold para headings, medium para corpo)
- **Efeitos:** Blur de fundo, gradientes suaves, micro-animações de entrada com spring

---

## Funcionalidades Interativas

- **PeptidesShowcase:** Tabs animadas com `layoutId` do Framer Motion — troca de conteúdo com AnimatePresence
- **ProductVolumes:** Cards com `position: sticky` que empilham durante o scroll
- **FAQ:** Accordion com animação de altura via Framer Motion
- **FloatingCTA:** Botão fixo na tela durante toda a navegação
- **Hooks customizados:**
  - `useIntersectionObserver` — dispara animações ao entrar na viewport
  - `useCountUp` — animação de contagem para números/estatísticas
- **Acessibilidade:** Link "Pular para conteúdo principal", aria-labels em todas as seções, `prefers-reduced-motion` respeitado

---

## Fluxo de Conversão

```
Visitante → Hero CTA → [Scroll persuasivo] → Seção Oferta → Checkout CartPanda → E-mail com PDF
```

Todos os CTAs da página apontam para o mesmo link de checkout ou para a âncora `#oferta`.

---

## Diferenciais do Produto Comunicados na Página

1. Embasamento científico (não é receita de academias)
2. Diferença clara entre peptídeos e esteroides/anabolizantes
3. Lista exclusiva de fornecedores nacionais verificados com laudos
4. Guia prático de doses e reconstituição (água bacteriostática, seringas)
5. Acesso vitalício em PDF — leitura em qualquer dispositivo
6. Preço de entrada acessível com oferta de lançamento
