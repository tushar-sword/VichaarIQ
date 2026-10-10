# VichaarIQ

AI-powered business intelligence: ask questions in plain English and receive validated, read-only analytics from SQL databases and MongoDB.

## Phase 1 scope

This repository is the initial architecture scaffold. It includes:
- `apps/web`: Next.js user interface
- `services/api`: Fastify API and health endpoint
- `packages/shared`: shared Zod schemas and contracts
- `packages/database`: database adapter contracts (no arbitrary query execution yet)
- `packages/agents`: agent workflow boundary (OpenAI Agents SDK integration comes in Phase 2)
- PostgreSQL for VichaarIQ's own application metadata, separate from user-connected data sources

## Requirements

- Node.js 20+
- npm 10+
- Docker Desktop or Docker Engine (optional, for local application PostgreSQL)

## Setup

1. Install dependencies from the repository root:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

3. Start the development servers:

   ```bash
   npm run dev
   ```

   - Web: http://localhost:3000
   - API health: http://127.0.0.1:4000/health

4. Optional: start the application database:

   ```bash
   docker compose up -d app-postgres
   ```

The development command builds the local shared packages before starting the API and web app. Re-run `npm run build:packages` after changing shared package code if you are running a service directly.

## Useful commands

```bash
npm run typecheck
npm run build
npm test
```

## Architecture guardrails

- Never execute an LLM-generated query directly.
- Validate SQL and MongoDB operations separately before execution.
- Use read-only database credentials for connected customer data sources.
- Apply statement timeouts, row/result limits, and request timeouts.
- Keep application metadata storage separate from customer data sources.
- Never log database passwords, API keys, or raw sensitive query results.
- Schema metadata sent to an LLM must be minimized and must not include secrets.
- Do not promise support for every database at once: connectors are implemented and tested individually.

## Planned pipeline

Question -> Planner -> Schema context -> Query generation -> Validation gate -> Read-only execution -> Visualization config -> Data-grounded explanation.

Phase 1 only creates the project foundation. The actual agent pipeline and query execution are intentionally not implemented yet.
