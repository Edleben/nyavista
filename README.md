# NyaVista

NyaVista is a United States-founded, global AI-powered news intelligence and multimedia platform owned by E-DEAL EXPRESS LLC. Its Eʋe-inspired name is brand heritage, not regional positioning.

This repository currently contains a first-pass demo application and the product's governing specifications. The interface uses fictional planning data and does not connect to live news, AI, ingestion, authentication, persistence, or publishing providers.

## Local development

Use Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm build
```

## Delivery records

- `PRODUCT_TRACKER.md` is the delivery source of truth.
- `CLAUDE_HANDOFF.md` is the living cross-agent implementation ledger.
- `STABLE_FRAMEWORK.md` governs every implementation lifecycle.
- `docs/design/nyavista-ui-mockup-light-dark.png` is the approved UI reference.
