# ⚙️ Backend — App BiT (B2G)

## Stack

| Tecnologia | Finalidade |
|---|---|
| **Fastify** (Node.js) | Framework HTTP de alta performance |
| **Arquitetura Hexagonal** | Separação domínio/infra, testabilidade |
| **PostgreSQL + PostGIS** | Banco relacional com queries geoespaciais |
| **IA via RAG** | Retrieval-Augmented Generation para consultas confiáveis |
| **Gemini API** | LLM para processamento de linguagem natural |

## Contratos de API

### `POST /dados` — Consulta com IA

```json
// REQUEST:
{
  "consulta": "Onde existe baixa conectividade e alta concentração de pessoas?",
  "filtros": {
    "regiao": "SP",
    "indicador": "empregabilidade"
  },
  "idioma": "pt"
}

// RESPONSE:
{
  "resposta_ia": "Na região metropolitana de São Paulo, identificamos...",
  "dados": [
    {
      "regiao": "SP-ZonaSul",
      "indicador": "empregabilidade",
      "valor": 0.42,
      "concentracao_pessoas": 85000,
      "cobertura_rede": "4G",
      "fonte": "Vísent CDRView + IBGE"
    }
  ],
  "fontes": [
    { "nome": "Vísent CDRView", "url": "github.com/wongola-bit/appbit-hackathon" },
    { "nome": "IBGE", "url": "ibge.gov.br" }
  ],
  "timestamp": "2026-06-11T12:00:00Z"
}
```

### `GET /mapa` — Dados Geográficos

```json
// REQUEST: GET /mapa?regiao=SP&indicador=empregabilidade

// RESPONSE:
{
  "tipo": "FeatureCollection",
  "regioes": [
    {
      "regiao": "SP-ZonaSul",
      "lat": -23.65,
      "lng": -46.66,
      "concentracao_pessoas": 85000,
      "cobertura_rede": "4G",
      "indicadores": {
        "empregabilidade": 0.42,
        "saude_mental": 0.67
      }
    }
  ]
}
```

### `GET /indicadores` — Lista de Indicadores

```json
// RESPONSE:
{
  "indicadores": [
    { "id": "empregabilidade", "nome": "Empregabilidade", "descricao": "Taxa de emprego vs concentração de pessoas" },
    { "id": "saude_mental", "nome": "Saúde Mental", "descricao": "Indicadores de saúde vs cobertura de rede" }
  ],
  "regioes_disponiveis": ["SP", "RJ", "MG", "BA"]
}
```

### `GET /health` — Health Check

```json
// RESPONSE:
{ "status": "ok", "versao": "1.0.0" }
```

## Estrutura (planejada — Arquitetura Hexagonal)

```
backend/
├── src/
│   ├── domain/           # Entidades e regras de negócio
│   │   ├── entities/
│   │   └── ports/        # Interfaces (contratos)
│   ├── application/      # Casos de uso
│   ├── infrastructure/   # Adaptadores (banco, IA, HTTP)
│   │   ├── database/
│   │   ├── ai/
│   │   └── http/
│   └── server.ts         # Entry point Fastify
├── scripts/
│   └── seed.ts           # Ingestão do dataset Vísent
├── package.json
└── tsconfig.json
```

## Setup

```bash
# Instalar dependências
npm install

# Rodar em dev
npm run dev

# Rodar seeds (ingestão de dados)
npm run seed
```
