# Vertopal Clone — MVP Scaffold

This is a minimal monorepo scaffold for the Vertopal clone MVP.

Structure:
- frontend/  -> React + Vite (basic upload UI)
- backend/   -> Fastify + TypeScript (presign URL, job endpoints)
- worker/    -> BullMQ worker (simulated conversion)
- ai-service -> Fastify stub (OCR & format suggestion)
- infra/     -> docker-compose for local dev (Postgres, Redis, MinIO)
- .github/workflows/ci.yml -> CI skeleton

Run locally (development)
1. Copy `.env.example` into `.env` and set values.
2. `docker compose up --build`
3. Apps will be available at:
   - Frontend: http://localhost:5173
   - Backend:  http://localhost:4000
   - AI service: http://localhost:4100

To push to GitHub:
```bash
git init
git remote add origin https://github.com/venkateshkoppuravuri/something.git
git checkout -b mvp-scaffold
git add .
git commit -m "mvp scaffold"
git push -u origin mvp-scaffold
```

