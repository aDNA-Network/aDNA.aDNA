---
type: session
session_id: session_stanley_20260620T073615Z_wadna_d4_c4_slug_hierarchy
campaign: campaign_website_adna
mission: mission_wadna_p3_iterate
decade: D4
cycle: C4
persona: Rosetta
created: 2026-06-20
updated: 2026-06-20
status: completed
last_edited_by: agent_stanley
tier: 2
token_budget_estimated: 70
tags: [session, website, d4, sp4, h7, m5, visual_craft, composition, iii_cycle]
---

# Session — WEBSITE D4 C4: `/vaults/[slug]` visual hierarchy (H-7 / SP-4)

**Intent:** Execute D4 cycle C4. Redesign the per-vault detail page (`src/pages/vaults/[slug].astro`, 41
routes) per **SP-4 / H-7**: it is a single 80ch column of flat left-aligned `<section>`/`<h2>` blocks that
"reads as raw markdown," with >40% empty viewport on the (common) sparse vaults. Fix = **definition-list/card
grid; separate metadata from prose; give the relationship block primacy** — reuse the established design
language (SubnetworkCard `.subnet-meta` `<dl>`, the C1 `--color-badge-*` status tokens, `tokens.css` spacing).
Graph-traceable `vaults.json` fields only; tokens only; ≤2 accent hues; axe both modes; no overflow at 320px.
≥3 fresh personas validate. **PAUSE before H-9/H-11** (graph mobile + Mermaid→SSR perf — operator option decision).

## Data reality (drives the design)
- Reliable spine (≥90%): `display_name` · `class` · `status` · `canonical_governance` · `last_synced` · `note`.
- Frequent (~70%): `persona`. Medium (~30–40%): `federation_refs` · `companion_vaults`.
- Sparse (≤15%): `tagline` · `current_phase` · `headline_mission` · `headline_adrs` · `recent_closed` ·
  `github_url` · `docs_site_url` · `umbrella_pillar` · `supersedes` · `superseded_by`.
- Range: **zeta.aDNA** (class/status/gov/last_synced only) → **Harness/WilhelmAI** (+persona/note/edges).
  The layout must look intentional at BOTH ends.

## Scope declaration (Tier 2)
- `site/src/pages/vaults/[slug].astro` (the redesign — markup + scoped CSS)
- (reuse only, no edit expected) `SubnetworkCard.astro` `.subnet-meta` pattern · `VaultRelationshipBlock.astro`
  · `tokens.css` (`--color-badge-*`, spacing scale)

## Constraints honored
- `npx astro build` only (never `npm run build` → pt19 `vaults.json` regen).
- Graph-traceable fields only — no invented facts (Standing Orders 1/2).
- Tokens only; ≤2 accent hues + the blessed badge pastels; axe clean both modes; no overflow ≤320px.
- Commit-only (no deploy) — mid-P3. Do not touch Track B.

## Progress
- [x] VIEW baseline (Harness/WilhelmAI/zeta — light+dark + mobile) captured
- [x] Spec-sheet `<dl>` (Class·Status pill·Persona·Phase·Governance·Last synced) — SubnetworkCard idiom
- [x] Relationship block elevated to primacy (reused as-is, incl. its honest empty-state)
- [x] Two-column ≥900px (main: relationships+optional · aside: spec-sheet+links); 1-col ≤768px spec-first
- [x] Graceful sparsity — honest templated lede for no-note vaults; zeta reads intentional at realistic viewport
- [x] `npx astro build` clean (41 routes) + eyeballed the samples both modes + mobile
- [x] gates green **279/279** (G4 both modes + G9 6vp + @audit + brand + links)
- [x] ≥3 persona pass — after **one III re-iteration** (Design Critic 3→4 · IA 5 · Newcomer 4 — all PASS)
- [x] commit + push + session→history

## SITREP

**Completed**
- Redesigned `site/src/pages/vaults/[slug].astro` (41 routes) per **H-7 / SP-4**: identity metadata pulled
  OUT of the prose into a bordered **spec-sheet `<dl>`** (Class · Status pill · Persona · Phase · Governance ·
  Last synced — the `SubnetworkCard .subnet-meta` idiom); `note` → **lede** under a now-dominant H1 + a mono
  canonical name; **`VaultRelationshipBlock` elevated to primacy** (reused as-is, incl. its honest empty-state);
  **two-column ≥900px** (reading column · spec-sheet aside) → one column ≤768px with the spec-sheet first.
  Dropped the redundant `persona_archetype` section; moved governance from quick-links into the spec-sheet.
- Honest **templated lede** for no-note vaults (`"A {class} vault — {status}."`) + **status-gloss tooltip** —
  answers "what is this" on sparse vaults without fabricating (restates real fields only).

**III iteration (the loop worked).** First persona pass: **Design Critic 3/5 FAIL** (H1 undersized · spec labels
wrapped mid-word "GOVERNANC/E" · sparse zeta read broken), IA 5/5, Newcomer 4/5 (sparse "what is this"
unanswered). Fixed all three → re-pass: **Design Critic 4/5 PASS** (3 HIGH all RESOLVED), IA 5/5, Newcomer
concern addressed by the lede. Root cause of the H1 bug: the global `h1,h2,h3,h4` rule sets **no font-size** —
only `.prose h1` does, and `.vault-detail` isn't `.prose`, so the title inherited body size.

**Verification**
- `npx astro build` clean (163 pages, 41 `[slug]` routes); `vaults.json`/`install_truth.json` untouched.
- Full blocking suite **279/279** green: G4 a11y both modes on `/vaults/Harness.aDNA/` + G9 6 viewports +
  `@audit` sweep on `/vaults/III.aDNA/` & `/vaults/adnalabs/` + brand + link-integrity.
- Eyeballed 4 representative vaults (dense Harness · umbrella WilhelmAI · sparse zeta · light+dark) + mobile +
  the realistic-viewport sparse experience.
- Persona panel: **Design Critic C 4/5 · IA B 5/5 · Newcomer B 4/5** — all PASS, no open Critical/High.

**Surfaced (sub-threshold, logged)**
- Long mono governance paths wrap mid-token in the 17rem aside ("zeta.aDNA/CLAUD"+"E.md") — intended
  `overflow-wrap:anywhere`; cosmetic, consistent, below the bar. (Design Critic.)
- "Persona: <name>" reads as internal lore to a newcomer (Newcomer MEDIUM) — honest data; left as-is.
- Spec card absent from the heading outline (IA MEDIUM) — mitigated by the aside's `aria-label`; left as-is.

**In progress** — none (cycle complete).

**Next up — PAUSE for operator (per the approved plan).**
- **H-9 / H-11 option decision** before the next graph cycle: `/vaults/graph` mobile legibility @390px (H-9) +
  graph performance (H-11 = Mermaid client-render → **SSR-prerender**, LCP < 2.5s). H-11 has real architectural
  options (build-time static-SVG prerender · alternate renderer · defer-hydration) — operator picks first.
- Then **M-7** (concept-template CLS) → **decadal AAR** (`skill_decadal_aar`, 5-persona × 6-dim, reset
  baseline) → **human decade-gate** → P3→P4.

**Blockers** — none.

**Files touched** — `site/src/pages/vaults/[slug].astro` (sole code change) + this session record (→ `history/2026-06/`).

**Tracking discipline (M35)** — cycle close: NO campaign-master / mission-backbone / STATE.md batch edit.
Per-cycle record = the commit + this SITREP. The D4 master row batches at the decade-close (after H-9/H-11 +
M-7 + the decadal AAR).

**Next Session Prompt:** WEBSITE.aDNA D4 has C1–C4 closed (badge tokens · edge contrast · graph-colour
restraint · `/vaults/[slug]` hierarchy). Remaining before the D4 decadal AAR + decade-gate: **H-9/H-11** (graph
mobile legibility + Mermaid→SSR perf — get the operator's option decision FIRST, exactly as the C3 palette was
operator-chosen) and **M-7** (concept-template CLS). Then run `skill_decadal_aar` (5-persona × 6-dim, reset
baseline) and present the D4 decade-gate (human). Build `npx astro build` (never `npm run build`); gates
`npm run test:gates` (must be 279+/all green); commit-only on `main`, no deploy mid-P3; honor M35 (master/STATE
batch only at decade-close).
