# aDNA Documentation Site

Documentation website for the [aDNA (Agentic DNA)](https://github.com/LatticeProtocol/Agentic-DNA) knowledge architecture standard.

Built with [Astro 6](https://astro.build) using the SiteForge documentation archetype.

## Setup

**Prerequisites**: Node.js 20+

```bash
npm install
npm run dev       # Start dev server at localhost:4321
```

## Content Editing

Content lives in `src/content/` across 4 collections:

| Collection | Format | Directory | Purpose |
|------------|--------|-----------|---------|
| `docs` | MDX | `src/content/docs/` | Concepts, patterns, comparisons, use cases |
| `guides` | MDX | `src/content/guides/` | Step-by-step tutorials |
| `reference` | MDX | `src/content/reference/` | Upstream specification documents |
| `changelog` | MD | `src/content/changelog/` | Version history |

Each file requires YAML frontmatter matching the collection schema defined in `src/content.config.ts`.

## Deployment

```bash
npm run build     # Build static site to dist/
npm run preview   # Preview production build locally
```

Deploy to Vercel:

```bash
npx vercel
```

Environment variables:
- `SITE_URL` — canonical site URL (default: `https://adna.dev`)
