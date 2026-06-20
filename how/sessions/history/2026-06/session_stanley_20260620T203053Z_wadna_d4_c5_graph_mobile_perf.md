---
type: session
session_id: session_stanley_20260620T203053Z_wadna_d4_c5_graph_mobile_perf
campaign: campaign_website_adna
mission: mission_wadna_p3_iterate
decade: D4
cycle: C5
persona: Rosetta
created: 2026-06-20
updated: 2026-06-20
status: completed
last_edited_by: agent_stanley
tier: 2
token_budget_estimated: 70
tags: [session, website, d4, h9, h11, g1, responsive, perf, iii_cycle]
---

# Session — WEBSITE D4 C5: `/vaults/graph` mobile legibility (H-9) + perf budget gate (H-11)

**Intent:** Execute D4 cycle C5 per the approved plan. The operator delegated the architecture ("you choose").
Decision (informed by measurement): **do NOT SSR-prerender** — the perf goal is already met — so (H-9) make the
graph legible on phones via the spec's "node-list primary on small screens", and (H-11) confirm perf + wire the
**G1** Lighthouse-budget gate to lock it in.

## The H-11 reconciliation (why no SSR)
Stored + fresh Lighthouse both show `/vaults/graph` deep in the CWV Good band: fresh desktop run (LH 13.4.0,
post-H-9) = **LCP 446ms · CLS 0.0001 · Perf 100**. Mermaid is a ~45KB code-split dynamic import, below the fold
(the hero image is LCP). SSR-prerender would add a headless-browser build dependency for zero perf gain —
rejected as over-engineering (restraint doctrine). The no-JS/agentic story is already covered (the `<noscript>`
source + the focusable node-twin, probes 277/278). So H-11 = confirm-and-gate, not rebuild.

## Scope (Tier 2)
- `site/src/pages/vaults/graph.astro` — H-9 (sole substantive change)
- `site/tests/gates/gate-19-lighthouse-budget.spec.ts` — new gate **G1**
- `site/tests/gates/fixtures/lighthouse_d4c5_graph.json` — new committed slim budget fixture
- `site/evidence/lighthouse_d4c5_graph.json` — full raw LH run, **LOCAL-ONLY** (`evidence/` is gitignored)

## What shipped
**H-9 — mobile-legible graph.** The existing keyboard node-twin (`.graph-node-list`, already in the a11y tree
via `clip`, not `display:none`) is **promoted to the primary view at ≤640px** (one DOM node, two CSS states — no
second list, no SR double-listing); the cramped 40-node SVG is hidden page-scoped
(`.vaults-graph :global(.mermaid-figure){display:none}`). The list is now **class-grouped** (group labels are
`<p>`, not `<h3>`, so the heading outline stays stable), with orphans pooled under "Not yet linked" (mirrors the
graph's own subgraph). The `?focus=<slug>` round-trip highlights + scrolls the **list row** on mobile (the SVG
poller early-outs at ≤640px). Desktop unchanged (the SVG renders; the list stays the keyboard-only
`:focus-within` twin). Tip copy reworded width-agnostic.

**H-11 — G1 budget gate.** New `gate-19-lighthouse-budget.spec.ts` (required, **not** `@audit`): a pure fixture
read asserting `/vaults/graph` **LCP < 2.5s · CLS < 0.1 · Perf ≥ 90** from a **committed slim fixture**
(`tests/gates/fixtures/lighthouse_d4c5_graph.json` — real numbers + provenance); the full 461KB raw run stays
local in the gitignored `evidence/`. Locks the good perf as a regression invariant.

## Verification
- `npx astro build` clean (163 pages); `vaults.json`/`install_truth.json` untouched.
- Full blocking suite **280/280** green (279 + gate-19): gate-4 a11y **both modes**, gate-9 (320/375 no
  overflow), probes **277** (desktop node-twin focusable) + **278** (no-JS degrades) stay green, gate-19 **G1**.
- Eyeballed `/vaults/graph` at 390px (dark + light) — legible class-grouped list, cramped SVG gone; `?focus=`
  highlights the list row; desktop unchanged.
- Persona panel (fresh eyes) — all **PASS**:
  - **Newcomer** axis H **4.5/5** — "night-and-day improvement; H-9 bar comfortably cleared."
  - **Accessibility Auditor** axes G+H **5/5 + 5/5** — single list confirmed, sound heading outline, honest
    no-JS path, AA focus ring (cyan ~9.5:1 dark / ~5.2:1 light). "Textbook." No findings.
  - **Design Critic** axes C **4/5** + H **5/5** — "deliberate mobile view, not a fallback; desktop untouched."
- **III micro-iteration (the loop worked):** two personas independently flagged the SAME Medium — the legend
  census ("Platform · 10", all vaults) vs the list-group chip ("PLATFORM · 5", connected-only) showed
  contradicting counts. Fixed by dropping the redundant group-label count chip (the census already carries
  per-class counts); rebuilt + re-ran 280/280. Converged wrinkle resolved.

## Surfaced (sub-threshold, logged)
- Mobile `?focus=` cue (cyan ring) is quieter than the desktop glow — acceptable, restraint-driven (no third
  accent); the Accessibility Auditor rated the ring + `aria-current` 5/5. (Design Critic.)
- The phone never shows the visual diagram (title is "the network, drawn") — Newcomer optional note; the hero
  pixel-art remains and the list is the honest mobile representation. Left as-is.

## D4 status after C5
D4 now has **C1–C5 closed** (badge tokens · edge contrast · graph-colour restraint · `/vaults/[slug]` hierarchy
· graph mobile+perf). Remaining before the decade-gate: **M-7** (concept-template CLS — a deploy-layer fix) →
**decadal AAR** (`skill_decadal_aar`, 5-persona × 6-dim, reset baseline) → **human decade-gate** → P3→P4.

**Tracking discipline (M35):** no campaign-master / mission-backbone / STATE.md batch edit at this cycle close;
per-cycle record = the commit + this SITREP. The D4 master row batches at the decade-close.

**Next Session Prompt:** WEBSITE.aDNA D4 has C1–C5 closed. Only **M-7** (concept-template CLS — likely a
deploy-layer/template fix; check the concept template hero/image dimensions for the 0.156 CLS) remains, then run
`skill_decadal_aar` (5-persona × 6-dim ranker, reset baseline) across the D4 units and present the **human
decade-gate** (GO/NO-GO → P3→P4). Build `npx astro build` (never `npm run build`); gates `npm run test:gates`
(must be 280+/all green); the G1 gate (gate-19) reads a committed fixture — regenerate it (preview → lighthouse
desktop `/vaults/graph` → both the local evidence + the committed slim fixture) if the graph page changes.
Commit-only on `main`, no deploy mid-P3; honor M35.
