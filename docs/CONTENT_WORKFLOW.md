# Content workflow (post-launch)

## Current approach: **Git + JSON** (implemented)

- **Single source of truth**: [`content/portfolio.json`](../content/portfolio.json) — site metadata, nav, hero, work section labels, quote, games, footer.
- **Images**: add or replace files under [`public/`](../public) and reference paths in JSON (e.g. `/games/my-game.png`).
- **Ship changes**: commit → push → Vercel (or your host) rebuilds. Use **preview deployments** on branches/PRs to review before production.

This matches **Option 1** in the portfolio plan: fastest, no extra services.

## When to add something else

| Need | Consider |
|------|----------|
| Non-devs editing copy in a **web UI** that still uses Git | **Decap CMS** (or similar Git-backed CMS) — commits JSON/Markdown, same redeploy flow. |
| Editorial workflow, drafts, non-Git users | **Headless CMS** (Sanity, Contentful, etc.) — Next fetches at build time or ISR; more setup. |
| Full custom admin + DB | **Payload / Directus** — usually overkill for a brochure portfolio. |

**Practical default:** stay on JSON until editing friction is real; then add **Decap** or **one** headless CMS and map fields to the same shapes you already use in `portfolio.json`.

## Optional ESLint

`npm run lint` runs **TypeScript** (`tsc --noEmit`). After a healthy `npm ci`, you can run **`npm run lint:eslint`** for ESLint with `eslint-config-next`.
