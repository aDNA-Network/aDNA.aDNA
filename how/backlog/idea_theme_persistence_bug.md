---
type: backlog_idea
status: resolved
priority: high
created: 2026-04-22
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, site, dark-mode, theme, fouc, ux-bug, d3-carry-forward, resolved]
---

# Idea: Fix Light/Dark Mode Flash + View-Transition Persistence

## Resolution

**Resolved 2026-04-22 — Phase 7 D3 cycle 26 (bundled with M27 O6 + homepage tagline).** All four proposed steps shipped in one edit to `site/src/layouts/BaseLayout.astro`: theme-apply IIFE moved to `<head>` (same `is:inline` pattern as the `no-js` remove script); rewritten with idempotent `document.documentElement.classList.toggle('dark', dark)` (both branches fire); `astro:page-load` listener added so `ClientRouter` navigation re-evaluates theme; `prefers-color-scheme` change listener added for live OS-theme tracking. Validation: `npm run build` 116 pages / 0 errors; `npm run test:gates` 30/30; Lighthouse 100/100/100/100 on all 5 sample pages; structural smoke-test via built `dist/index.html` confirms 4× `applyTheme` references in `<head>` (function def + initial call + `astro:page-load` listener + `prefers-color-scheme change` listener), 0× in `<body>`. See `iii_cycle_tracker.md` cycle 26 entry for full validation evidence.

## Problem

User reports: light/dark mode "isn't working / persisting across the site." Observed on production (`https://adna-docs.vercel.app`) 2026-04-22 during cycle-25 close review.

Two concrete issues identified in `site/src/layouts/BaseLayout.astro`:

**1. Theme-apply script is at end of `<body>` (line 69-76), not in `<head>`.** On every full page load, browsers paint light-mode styles first, then the script runs after all content has parsed and flips `.dark` onto `<html>`. Visible as a light-to-dark flash (FOUC — flash of unstyled content). The component `DarkModeToggle.astro` wires the toggle button correctly (Header.astro:46, persists to `localStorage.theme`), so the round-trip works — but the first-paint flash makes it feel broken.

**2. `ClientRouter` (Astro view transitions) is active (line 56) but the theme script never re-runs during client-side navigation.** With `<ClientRouter />` in `<head>`, navigation swaps `<body>` without reloading `<head>`. The `.dark` class on `<html>` survives a swap, so theme *usually* persists — BUT any edge case where the class is stripped (e.g., `document.documentElement.outerHTML` replacement, or a transition that rebuilds the root) will lose theme until the next full reload. Also: the `prefers-color-scheme` fallback branch runs once on initial load and never re-evaluates on navigation; if the user's OS theme changes mid-session, the site won't track it.

**3. Script only handles the add-dark case, never the remove-dark case.** `if (theme === 'dark' || prefers dark) add('dark')`. Benign on full reloads (class starts absent), but combined with ClientRouter's partial swaps, if the toggle writes `theme: 'light'` and then the user navigates, the script reads `'light'`, skips the if-branch, and **doesn't remove** any stale `.dark` class that carried over from a transition. Low-probability but worth closing.

## Proposed Solution

**Triage order** (cycle 26 or dedicated mini-cycle):

1. **Move theme-apply script to `<head>`**, before any stylesheet or content renders. Place it adjacent to the existing `no-js` remove script (BaseLayout.astro:52-54) — same `is:inline` pattern, same surface. This kills the FOUC on first paint.
2. **Make the script idempotent**: always set-or-clear both branches:
   ```js
   const theme = localStorage.getItem('theme');
   const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
   const dark = theme === 'dark' || (!theme && prefersDark);
   document.documentElement.classList.toggle('dark', dark);
   ```
3. **Re-run on `astro:page-load`** (Astro view transitions event) so client-side navigation re-evaluates theme from localStorage:
   ```js
   document.addEventListener('astro:page-load', applyTheme);
   ```
4. **Optional: listen to `prefers-color-scheme` change** so OS-level theme switches propagate while the user is on the site:
   ```js
   matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
   ```
5. **Validate**:
   - Manual: cold-load any page (no cached class) → no flash.
   - Manual: toggle dark, navigate 3 pages via `ClientRouter` → class persists.
   - Manual: toggle light after a dark session, navigate → class drops.
   - Lighthouse a11y still 100 on all 5 sample pages.
   - Playwright 30/30 green.

## Origin

Flagged by user (stanley) during cycle-25 close review, 2026-04-22. Carry-forward scoped as a D3 navigation/IA-adjacent polish item — fits cycle 26 (O6 tutorial tooltip rollout) as a co-shipped fix OR a dedicated mini-cycle between O6 and O7.

## Critical Files

- `site/src/layouts/BaseLayout.astro:52-76` — theme script placement + ClientRouter wiring
- `site/src/components/islands/DarkModeToggle.astro:23-29` — toggle click handler (writes localStorage correctly; no change needed)
- `site/src/components/common/Header.astro:46` — where the toggle mounts (no change needed)


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: shipped Phase-7 D3 cycle 26 (gates 30/30, Lighthouse 100). Status set to `resolved`; ratified at Champollion G0 (D2).
