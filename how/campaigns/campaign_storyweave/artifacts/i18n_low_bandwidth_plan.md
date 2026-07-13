---
type: plan
title: "adna.network — i18n + low-bandwidth posture (PLAN ONLY)"
campaign: campaign_storyweave
mission: mission_p5_3_a11y_perf_reach
objective: O5
owner: stanley
status: proposed          # a forward plan — NOT implemented this mission (charter defers full i18n)
created: 2026-07-13
last_edited_by: agent_rosetta
tags: [plan, storyweave, p5, reach, i18n, low-bandwidth, deferred]
---

# adna.network — i18n + low-bandwidth posture (plan only)

> **What this is.** A forward plan the M5.3 reach scope calls for — **not** an implementation. The
> Storyweave charter explicitly **defers full i18n** (a horizon item, alongside the social layer),
> and the live measure showed the site's low-bandwidth posture is already excellent. This doc
> records the readiness so a future dedicated effort starts from a known base, and scopes what an
> i18n phase would actually entail. Nothing here ships in M5.3.

## 1. Low-bandwidth posture — already strong (what holds today)

adna.network is, by construction, a low-bandwidth-friendly site. The measured facts (M5.3 recon):

- **Static, pre-built HTML** (`output: 'static'`, Vercel adapter) — no server round-trips, no
  client-side data fetching to render a page.
- **Near-zero runtime JS** — the graph surfaces render as inline SSR SVG with **no `data-chart`**
  and degrade JS-off (gate-22); the hero constellation canvas is decorative + progressive.
- **Images are AVIF/WebP with `srcset`/`sizes`** (gate-10, gate-11); OG cards are 1200×630 (~96 KB).
- **Fonts are self-hosted** woff2 latin subsets, preloaded (no Google Fonts, no third-party
  request); JetBrains Mono is `font-display: optional`.
- **Zero third-party requests** — no analytics, no CDN scripts, no embeds (see `/privacy`).
- **Perf budget held** — home + `/vaults/graph` + `/learn/concepts/knowledge-graph` + `/get-started`
  + `/learn/what-is-adna` all Perf 100 / LCP < 0.5 s desktop (gate-19).

**Recommendation:** treat the current state as the low-bandwidth baseline and **hold it** (gate-19 +
gate-10 already do). A dedicated "low-bandwidth mode" is **not** warranted now. If ever pursued, the
cheap, high-value increments — in priority order — would be:

1. **Honor `Save-Data` + `prefers-reduced-data`** — skip the decorative hero canvas + any non-essential
   motion when the client signals data-saving (the SSR SVG already IS the floor, so this is a small
   guard, not a rebuild).
2. **Trim font payload further** — subset to the exact glyphs used; consider dropping one weight.
3. **A text-lean route variant** is explicitly **not** recommended — it forks content (a maintenance
   tax the charter's "no fork" discipline rejects); the base pages are already lean enough.

## 2. Internationalization — scope of a future phase (deferred)

The site is **English-only** today (one locale, no `hreflang`, `lang="en"` on `<html>`). Full i18n is
a **dedicated future phase**, not a capstone increment. When it is taken up, the shape is:

### 2a. Decide the translation surface (the real scoping question)
- **Tier A — UI chrome only** (nav, footer, CTAs, section labels, ~a few hundred strings). Low effort,
  high reach; makes the site *navigable* in another language while docs stay English. **Recommended
  first tier** if i18n is pursued.
- **Tier B — UI + curated landing/onboarding** (home, `/get-started`, `/network`, `/commons`, the
  "what is aDNA" explainer). Medium effort; the highest-leverage content for a newcomer.
- **Tier C — full documentation corpus** (concepts, tutorials, patterns, reference, glossary). Large,
  ongoing translation-maintenance cost; only justified with real demand + contributor capacity.

### 2b. Mechanism (Astro-native, no new dependency)
- Use **Astro's built-in i18n routing** (`i18n` config: `defaultLocale`, `locales`, prefix strategy —
  `/es/...`, keeping `en` un-prefixed as default) — no third-party i18n lib needed.
- **UI strings** → a per-locale message catalog (`src/i18n/<locale>.ts`), resolved by a small helper;
  **content** → per-locale content-collection entries (`src/content/**/<locale>/`), falling back to
  `en` when a translation is missing (never a broken page).
- Emit **`hreflang`** alternates + a per-page `lang` attribute; add a lightweight, keyboard-accessible
  **locale switcher** (mirror the existing dark-mode toggle's a11y pattern).
- **RTL:** if an RTL locale (ar/he) is ever added, audit the token/layout for logical properties
  (`margin-inline`, `padding-inline`) — the design already uses many; a pass would be needed.

### 2c. Guardrails the i18n phase must carry (from this campaign's doctrine)
- **Honesty:** never ship a machine-translated page as if human-reviewed; label translation status;
  fall back to English rather than present a broken/partial locale.
- **No fork:** locales are additive content + one shared layout — never a parallel site.
- **Gates:** extend gate-4 (axe) + gate-6 (meta incl. `hreflang`) + gate-9 (responsive, RTL if added)
  across locales; hold the gate-19 perf budget per locale.
- **Register + identity:** the SS-Ghibli / Tokyo-Night identity + warm-calm-honest voice must survive
  translation (translate meaning, not just words).

## 3. Recommendation (for the campaign close)

- **Low-bandwidth:** ✅ already excellent — **hold via existing gates**; no work now. The optional
  `Save-Data`/`prefers-reduced-data` guard is a small, well-scoped future nicety, not a gap.
- **i18n:** **defer** to a dedicated future phase (post-graduation), consistent with the charter.
  When taken up, start at **Tier A (UI-only)** via Astro-native i18n routing, English-fallback, with
  the guardrails above. This doc is the starting brief.
- **Not this mission:** no locale routing, no message catalogs, no translated content ship in M5.3.
