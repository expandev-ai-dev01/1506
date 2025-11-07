# Catálogo de Bolos

Um catálogo digital para confeitaria com lista de produtos, filtros, detalhes dos bolos e funcionalidade de carrinho de compras.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8
- Tailwind CSS 3.4.14

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── pages/                # Páginas da aplicação
    └── layouts/          # Layouts compartilhados
```

## Funcionalidades

- Exibição de catálogo de produtos
- Filtros de produtos
- Visualização detalhada de produto
- Sistema de avaliações
- Carrinho de compras
- Simulação de dados mockados