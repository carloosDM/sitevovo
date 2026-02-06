# PRD - Delícias da Vovó Idalcy®

## Informações do Projeto
**Data de Criação:** 05/02/2026
**Tipo:** Landing Page One-Page para Padaria Artesanal
**Status:** MVP Frontend Completo (Fase 1)

---

## Problema Original
Criar um site "cartão de visita" (one page) para a padaria artesanal "Delícias da Vovó Idalcy®" com estilo rústico/caseiro, inspirado em padaria de sítio, apresentando produtos, história da fundadora e canais de contato.

---

## Arquitetura Técnica
### Stack
- **Frontend:** React 19, TailwindCSS, Lucide Icons
- **Fontes:** Pacifico (handwritten), Poppins (body)
- **Backend:** FastAPI + MongoDB (não implementado ainda)
- **Assets:** Unsplash/Pexels para imagens de produtos

### Paleta de Cores
- Fundo claro: `#F7F3F5`
- Creme/amanteigado: `#FBE0C3`
- Pêssego/salmão: `#FFBB98`
- Marrom escuro: `#403234`

---

## User Personas
1. **Clientes Locais:** Pessoas da comunidade que buscam produtos artesanais frescos e caseiros
2. **Interessados em Produtos Naturais:** Público que valoriza ingredientes selecionados e preparo artesanal
3. **Nostálgicos:** Pessoas que buscam sabor de comida de vovó e memórias afetivas

---

## Features Implementadas (Fase 1 - Frontend)

### ✅ Navbar Sticky
- Links de navegação suaves (Home, Menu, Quem Somos, Contatos)
- Logo com ícone de trigo
- Hover effects animados
- Responsivo

### ✅ Hero Section
- Background com imagem de pães artesanais
- Título principal com fonte handwritten
- Subtextos com emojis (🥖 🥰)
- 2 CTAs: "Ver Menu" e "Falar no WhatsApp"
- Indicador de scroll animado
- Elementos decorativos flutuantes

### ✅ Carrossel de Produtos (Menu)
- 12 produtos divididos em categorias (Pães, Bolos, Biscoitos)
- Autoplay com pausa ao hover
- Navegação por setas
- Indicadores de posição
- Responsivo: 1 card (mobile), 2 cards (tablet), 3 cards (desktop)
- Cards com:
  - Imagem do produto
  - Nome e preço
  - Descrição
  - Ingredientes
  - Tags (Mais Pedido, Novo, Caseiro)

### ✅ Seção Quem Somos
- Avatar da Vovó Idalcy (emoji 👵)
- História em 4 parágrafos
- 3 valores da empresa:
  - Feito com Amor (ícone Heart)
  - Ingredientes Selecionados (ícone Star)
  - Sabor de Casa (ícone Sparkles)
- Citação decorativa
- Layout em 2 colunas (responsivo)

### ✅ Footer/Contatos
- Informações de contato:
  - WhatsApp: +55 77 998195609
  - Instagram: @deliciasdavovoidalcy
  - Email: lizianemoitinhocontato@gmail.com
- Links clicáveis funcionais
- CTA "Pedir Agora" abre WhatsApp
- Copyright e "Feito com Amor"
- Dark theme com gradiente

### ✅ Animações e Microinterações
- Fade-in nas seções
- Hover effects em cards e botões
- Float animation em elementos decorativos
- Scroll suave entre seções
- Transitions em todos os elementos interativos
- Pulse animation em ícones especiais

### ✅ Responsividade
- Mobile-first design
- Breakpoints: sm (640px), lg (1024px)
- Grid adaptativo no carrossel
- Tipografia escalável
- Espaçamento responsivo

### ✅ Seção de Depoimentos (NOVO)
- 6 depoimentos autênticos de clientes
- Cards com:
  - Avatar do cliente (emoji)
  - Nome e localização
  - Avaliação 5 estrelas
  - Texto do depoimento
  - Data do depoimento
- Navegação por setas entre grupos de depoimentos
- Layout responsivo: 1 card (mobile), 2 cards (tablet), 3 cards (desktop)
- CTA final "Fazer Meu Pedido" integrado
- Ícone de aspas decorativo
- Hover effects nos cards

### ✅ Responsividade Completa (NOVO - 05/02/2026)
**Mobile-First Design Implementation:**
- Menu hamburguer funcional para mobile (< 768px)
- Breakpoints otimizados:
  - Mobile: 320px - 640px (single column)
  - Tablet: 641px - 1023px (2 columns)
  - Desktop: 1024px+ (3 columns)
- **Meta viewport** configurada no HTML
- **Flexbox & Grid** para layouts adaptativos
- **Media Queries** personalizadas para ajustes finos
- **Imagens responsivas:** max-width: 100%, height: auto

**Otimizações por Componente:**
- **Navbar:** Menu hamburguer animado, overlay mobile, navegação suave
- **Hero:** Títulos escaláveis (3xl → 7xl), botões full-width mobile, avatar decorativo oculto em mobile
- **Products:** Carrossel adaptativo (1/2/3 cards), imagens responsivas, navegação por setas
- **About:** Avatar redimensionável (40px → 64px), layout single-column mobile
- **Testimonials:** Grid adaptativo, cards empilhados mobile
- **Footer:** Layout vertical mobile, texto centralizado, espaçamento otimizado

**Testes Realizados:**
- ✅ Mobile 375px (iPhone SE)
- ✅ Tablet 768px (iPad)
- ✅ Desktop 1920px (Full HD)
- ✅ Menu hamburguer funcional
- ✅ Todos os elementos clicáveis acessíveis
- ✅ Textos legíveis em todas as resoluções

---

## Produtos no Menu (Mock Data)

### Pães
1. Pão Caseiro - R$ 8,00
2. Pão de Milho - R$ 7,50
3. Pão Integral - R$ 9,00
4. Pão de Queijo - R$ 12,00/kg

### Bolos
5. Bolo de Fubá - R$ 25,00
6. Bolo de Cenoura com Chocolate - R$ 30,00
7. Bolo de Laranja - R$ 28,00
8. Bolo Mesclado - R$ 32,00

### Biscoitos
9. Biscoito de Polvilho - R$ 15,00/kg
10. Sequilhos - R$ 18,00/kg
11. Biscoito Amanteigado - R$ 20,00/kg
12. Broinha - R$ 16,00/kg

---

## Backlog Priorizado

### P0 - Essencial (Não Implementado)
- [ ] Nenhum item P0 pendente na fase frontend

### P1 - Importante (Futuras Fases)
- [ ] **Backend:** API para gerenciar produtos dinamicamente
- [ ] **Backend:** Sistema de pedidos via formulário
- [ ] **Backend:** Admin panel para atualizar produtos e preços
- [ ] **Feature:** Botão de compartilhamento social
- [ ] **Feature:** Galeria de fotos dos produtos
- [ ] **SEO:** Meta tags otimizadas
- [ ] **Analytics:** Integração Google Analytics

### P2 - Melhorias (Nice to Have)
- [ ] Modo escuro/claro toggle
- [ ] Seção de depoimentos de clientes
- [ ] Blog/receitas
- [ ] Integração com delivery (iFood, etc.)
- [ ] Calendário de disponibilidade de produtos sazonais
- [ ] Newsletter signup

---

## Próximos Passos

1. ✅ **MVP Frontend Concluído** - Site funcional com mock data
2. ✅ **Seção de Depoimentos Adicionada** - Prova social para aumentar conversão
3. ✅ **Responsividade Completa Implementada** - Mobile-first, menu hamburguer, breakpoints otimizados
4. **Fase 2 - Backend (Aguardando aprovação do usuário):**
   - Criar modelos MongoDB para produtos, categorias
   - Endpoints CRUD para produtos
   - Integração frontend-backend
   - Remover mock data
3. **Fase 3 - Melhorias:**
   - SEO otimization
   - Performance optimization
   - Testes cross-browser
   - Ajustes conforme feedback do cliente

---

## Notas Técnicas
- **Babel Plugin Issue:** Resolvido evitando array.map() com arrow functions aninhadas no About.jsx e ProductCarousel.jsx
- **Imagens:** URLs diretas do Unsplash/Pexels (15 imagens selecionadas)
- **Fontes:** Google Fonts (Pacifico + Poppins)
- **Ícones:** Lucide React (evitando emojis AI)

---

## Contatos Reais do Cliente
- WhatsApp: +55 77 998195609
- Instagram: @deliciasdavovoidalcy  
- Email: lizianemoitinhocontato@gmail.com

