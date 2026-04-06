# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Birmingham Towing Website (`artifacts/towing-birmingham`)
- **Type**: React + Vite (presentation-first, no backend)
- **URL**: `/` (root)
- **Purpose**: High-converting, mobile-first towing and roadside assistance website for Birmingham (Rank & Rent model)
- **Features**:
  - Homepage with hero, trust signals, services (7 cards), why choose us, service areas, testimonials, pricing, final CTA
  - 3 SEO sub-pages: `/towing-service-birmingham`, `/emergency-towing-birmingham`, `/roadside-assistance-birmingham`
  - Click-to-call buttons, WhatsApp integration, Google Maps embed
  - Local Business JSON-LD schema markup
  - Sticky mobile call bar (fixed at bottom on small screens)
  - SEO meta tags, Open Graph tags on all pages
  - Black/yellow/white colour scheme (bold, Uber-style)
  - 30+ Birmingham service areas listed for local SEO

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
