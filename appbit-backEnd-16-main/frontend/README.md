# 🖥️ Frontend — App BiT (B2G)

## Stack

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | 18.x | Interfaces reativas e modulares |
| **Vite** | 6.x | Build ultrarrápido com HMR |
| **TypeScript** | 5.x | Tipagem estática forte |
| **Leaflet + React-Leaflet** | — | Mapas interativos geoespaciais |
| **Lucide React** | — | Ícones minimalistas e modernos |

## Setup

```bash
# Instalar dependências
npm install

# Rodar em dev
npm run dev

# Build para produção
npm run build
```

## Estrutura (planejada)

```
frontend/
├── public/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Telas (Dashboard, Consulta IA, Mapa)
│   ├── services/       # Chamadas à API (api.ts)
│   ├── hooks/          # Custom hooks
│   ├── types/          # Tipos TypeScript
│   ├── assets/         # Imagens, ícones
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Telas MVP

1. **Dashboard** — Visão geral com indicadores e gráficos
2. **Consulta IA** — Input de linguagem natural + resposta
3. **Mapa Interativo** — Leaflet com markers/heatmap
