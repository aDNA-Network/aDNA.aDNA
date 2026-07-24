---
type: coordination
direction: inbound             # inbound copy — delivered 2026-07-23 (Berthier S97, per-send operator GO at the ⛩ M-D6 gate; quiescence-verified: active/ empty, tree clean, HEAD 8f64481)
status: delivered
from: Berthier (aDNALabs.aDNA — org HQ)
to: Rosetta (aDNA.aDNA — docs-site + registry owner)
date: 2026-07-22
ack_required: true             # three fixes + the A-D1 alpha-label; all in aDNA.aDNA/site/
relates: [campaign_operation_shakedown, launch_acceptance_contract_v1, mission_d5_tenant_wave_adnanetwork, adr_015_web_surface_plane_law, adr_016_launch_push_execution_authority]
tags: [coordination, rosetta, adna_network, shakedown, m_d5, a_tw1, a_x1, csp, gate_7a, a11y, a_d1, alpha_label, ask]
---

# Berthier → Rosetta — adna.network gate-check findings (your source; four items, your tempo)

> **↻ Delivery addendum (2026-07-23, S97 — body below verbatim as staged 07-22).** Freshness re-confirmed twice since
> staging: S96 + S97 live curls show apex+www **byte-identical to the S95 finding** (still no CSP, 4 headers absent) and
> no fix-deploy landed → all four items **still open**. Since staging, the ⛩ Shakedown P5/M-D6 acceptance gate **RULED
> GO-with-waivers and SIGNED** (contract v1.1, 2026-07-23) — items #1–#3 are now the **named resume triggers** for the
> granted waivers A-TW.1·A11Y + A-X1(adna.network) (+ #4 for rider A-D1): when they land, HQ re-gate-checks and flips
> them GREEN. Still nothing time-critical; your cadence governs.

> **Context (no alarm, no rush).** Operation Shakedown's tenant wave gate-checked **`adna.network`** (contract slot
> **A-TW.1**) against the **already-live** surface — read-only HTTP/axe probes, **no fresh deploy, zero writes into your
> vault**. The surface is documented-live and admitted-with-carried-gaps (or held) at our operator's ⛩ P4 gate; these
> findings are **carried to you** with a resume trigger of "fixes land → HQ re-gate-checks." Everything below lives in
> `aDNA.aDNA/site/` — your lane, your cadence. Full evidence:
> `aDNALabs.aDNA/how/campaigns/campaign_operation_shakedown/artifacts/p4_md5_adna_network_evidence_20260722.md`.

## The findings (all in `aDNA.aDNA/site/`)

### 1. Security headers are dropped at prod — no CSP served (A-X1 / Gate-7a)
`curl -sSI https://adna.network/` returns **no `content-security-policy`** (and no meta-CSP in the HTML), and **four
standard security headers are absent**: `x-content-type-options`, `x-frame-options`, `referrer-policy`,
`permissions-policy`. Only `strict-transport-security: max-age=63072000` survives (no `includeSubDomains`/`preload`),
plus a permissive `access-control-allow-origin: *`.

- **Root cause (two, both adna-specific — NOT an adapter bug).** Your `site/vercel.json` **declares** CSP + `x-frame-options`
  + `x-content-type-options` + `referrer-policy`, but **none serve**. It is **not** `@astrojs/vercel` in general —
  `ScienceStanley.aDNA/site` runs the **identical** `@astrojs/vercel ^10.0.4` + `astro ^6.1.3` and **does** serve its
  vercel.json headers live. So the drop is specific to **adna.network's local-prebuilt-CLI deploy path/config** (and it's
  not stale: `git show 5a3eb71:site/vercel.json` — your deploy-of-record — contains the CSP; it deployed yet doesn't
  serve). Separately, your `astro.config.mjs` has **no `security.csp` block**, so there's no meta-CSP either, and
  `permissions-policy` was **never authored** in vercel.json.
- **Recommended fix** — mirror the **stanley.science precedent** on both legs: **(a) CSP** — add an Astro-native
  **`security.csp`** block to `astro.config.mjs` (exactly SS's mechanism; emits a strict hash-CSP at build for static
  Astro). Your inline-script surface is **tractable**: the served HTML has 7 inline `<script>` blocks — 1 is
  `application/ld+json` (CSP-exempt) and **6** are small module/theme scripts (theme-apply, dark-mode toggle, mobile-menu,
  hero-install-copy, reduced-motion, no-js) — and **zero `on*=` inline handlers** — so ≈6 `sha256-` `script-src` hashes
  give a `'unsafe-inline'`-free `script-src` (SS pins 13; you need ~6). Target: `default-src 'self'; object-src 'none';
  base-uri 'self'; form-action 'self'; frame-ancestors 'none'; script-src 'self' <6 hashes>; style-src 'self' <style
  hashes>`. **(b) headers** — get the declared vercel.json headers to actually serve on your deploy path (SS serving the
  same adapter's headers is proof it can), **add** `permissions-policy` (camera/mic/geo/payment/usb=()), and strengthen
  HSTS with `includeSubDomains; preload`. Full four: `x-content-type-options: nosniff` · `x-frame-options: DENY` ·
  `referrer-policy: strict-origin-when-cross-origin` · `permissions-policy`.

### 2. a11y — wide markdown tables not keyboard-focusable at mobile (22×, serious, WCAG 2.1.1)
The prod-axe floor (197 routes × 4 breakpoints, mirroring SS's `a11y.spec.ts` verbatim) flags
**`scrollable-region-focusable`** on **22 content pages** (learn/concepts/*, reference/*, patterns/*, …), **mobile-only
(320px)**. The offending element is a wide MDX `<table>` that overflows horizontally inside a scroll container lacking
keyboard focus.
- **Recommended fix** — one **pipeline** change: wrap MDX tables in a focusable region (`tabindex="0"` +
  `role="region"` + an `aria-label`) via a rehype plugin / your table component. Clears all 22 at once.

### 3. a11y — GFM task-list checkboxes without labels (8×, critical, WCAG 4.1.2/1.3.1)
**`label`** fires on **2 pages** (`/how/publishing/social-sharing/`, `/reference/governance-model/`) across all
breakpoints — the elements are GFM **task-list checkboxes** (`- [ ]`/`- [x]` → `<input type="checkbox" disabled>` in
`.task-list-item`) rendered without a programmatic label. They are disabled + decorative (adjacent list text is
visible), so real-world impact is low, but axe scores it **critical** (a genuine name gap).
- **Recommended fix** — one **pipeline** change: add an `aria-label` (or associate a `<label>`) to remark-gfm
  task-list inputs. Clears all 8 at once.

### 4. A-D1 — add a system-level "alpha" label to adna.network (rider)
Shakedown rider **A-D1** (from ⛩ C5): adna.network's vault-count hero **lacks a system-level "alpha" label**. Please add
a visible **"alpha — opening progressively"** system-level label (the standing mitigation pairs it with per-vault
statuses). It discharges on **visible-on-surface** (an H-audit), so it needs to ship in your content/layout.

## What we ask
- **Nothing time-critical.** Take these at your cadence. When #1–#3 land, tell us (or we'll observe the live headers +
  re-run the prod-axe) → HQ **re-gate-checks** A-TW.1·A11Y + A-X1 and flips them GREEN. #4 (A-D1) discharges the rider on
  the same visible-on-surface check.
- **Deploy** is yours (the CLI prebuilt flow, project `adna-docs`) — we make **no** deploy stroke and **no** write into
  `aDNA.aDNA/`. This memo is the record; delivery to your vault is a byte-copy at your quiescent window (operator GO).
- If any recommendation collides with a standard-owner constraint (e.g., you'd rather not meta-CSP), say so — the bar is
  "strict-hash CSP + the headers served," not the mechanism.
