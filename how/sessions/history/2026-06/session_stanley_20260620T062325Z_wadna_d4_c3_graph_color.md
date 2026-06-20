---
type: session
session_id: session_stanley_20260620T062325Z_wadna_d4_c3_graph_color
campaign: campaign_website_adna
mission: mission_wadna_p3_iterate
decade: D4
cycle: C3
persona: Rosetta
created: 2026-06-19
updated: 2026-06-20
status: completed
last_edited_by: agent_stanley
tier: 2
token_budget_estimated: 60
tags: [session, website, d4, sp5, h5, sp7, gate_g9, visual_craft, iii_cycle]
---

# Session — WEBSITE D4 C3: graph-colour restraint (SP-5/H-5) + touch targets (SP-7)

**Intent:** Execute D4 cycle C3 per the approved plan. Collapse the `/vaults/graph` 15-hue
categorical rainbow to Option A restraint (operator decision: one neutral fill + ≤2 brand accents —
aDNA.aDNA standard = cyan, superseded = muted grey), reframe the colour legend, author gate **G9**
(≤2 saturated accent hues), and bring header touch targets to 44px (SP-7). ≥3 rotated personas validate.

## Scope declaration (Tier 2)
- `scripts/build_vaults_data.mjs` (`classColors` map — generator source of truth)
- `site/src/data/vaults_graph.mmd` (classDef fills — **colours-only** mirror; node/edge/name lines untouched)
- `site/src/pages/vaults/graph.astro` (node-colour legend reframe)
- `site/tests/gates/gate-18-categorical-color.spec.ts` (new — gate G9)
- `site/src/components/islands/DarkModeToggle.astro`, `site/src/components/common/Header.astro` (SP-7 44px)

## Conflict scan
- HEAD `131ffcd` (Hearthstone P5 / Track B — touched `.adna/` + `campaign_hearthstone`, not `site/`). No overlap.
- No other active session files. Tree clean at start.

## Constraints honored
- `npx astro build` only (never `npm run build` → would regen pt19's `vaults.json`).
- Colours-only `.mmd` diff; `vaults.json` left clean (verify `git status` before commit).
- Commit-only (no deploy) — mid-P3.
- Do not touch Track B (`.adna/`, `campaign_hearthstone`, the release).

## Palette (Option A)
- neutral (all classes): `#d3d5db`
- standard_dev (aDNA.aDNA): `#7dcfff` (Tokyo Night cyan — the one accent hue)
- superseded (retired): `#9ea3ad` (muted grey — desaturated, not a hue)
- Distinct saturated hues = 1 (cyan) → G9 (≤2) PASS.

## Progress
- [x] Generator `classColors` collapsed (15 hues → 3 constants: NEUTRAL/STANDARD/RETIRED)
- [x] `.mmd` classDef mirrored (colours-only)
- [x] Legend reframed (≤2-accent key + text class census; drift-free swatch parse)
- [x] Gate G9 authored (`gate-18-categorical-color.spec.ts` — HSL ≤2-accent-hue static lint)
- [x] SP-7 44px targets (`.github-link` + dark-mode toggle + 480px overflow-reclaim)
- [x] **Coherence follow-through** — the unmapped genesis-stub class `tbd_at_p0` was falling through to
      Mermaid's default (dark) fill on `WorldGenome.aDNA`, contradicting the new legend's "every box shares
      one fill" claim. Generator now emits a NEUTRAL classDef for any node-used class absent from the palette
      (robust to future unmapped classes); `.mmd` mirrored (`classtbdatp0`); census label prettified
      (`tbd_at_p0` → "Genesis stub"). Same 3 in-scope files; no scope expansion in file count.
- [x] `npx astro build` clean (163pp) + rendered both modes (uniform neutral + lone cyan; WorldGenome now neutral; legend reads correctly)
- [x] gates green incl. G9 + axe both modes — **full blocking suite 279/279** (`npm run test:gates`; baseline 278→279)
- [x] ≥3 persona pass recorded (Design Critic C 4.5 · Accessibility Auditor G/H 5/5 · Newcomer B 4 — all PASS)
- [x] commit + push + session→history (mission/campaign batch deferred to decade-close per M35)

## SITREP

**Completed**
- **SP-5/H-5** — `/vaults/graph` 15-hue rainbow → Option A restraint: one neutral `#d3d5db` fill for every
  vault, cyan `#7dcfff` reserved for the standard (`aDNA.aDNA`), grey `#9ea3ad` for superseded (conditionally
  shown). Legend reframed — colour no longer encodes class ("the lines carry the story"); class read as box
  label + a text "Vault classes in view" census. Swatch colours parsed from the `.mmd` classDefs (drift-free).
- **SP-7/M-5** — header GitHub link + dark-mode toggle to 44×44px; `@media (max-width:480px)` reclaim so the
  actions row clears 320–390px with no overflow.
- **Gate G9** (`gate-18-categorical-color.spec.ts`) — HSL static lint of `.mmd` classDef fills; asserts ≤2
  saturated accent hues (currently 1: cyan). Documented escape hatch.
- **Coherence fix** (same 3 files) — unmapped `tbd_at_p0` → neutral (generator fallback + `.mmd` `classtbdatp0`
  + census label "Genesis stub"); closes the gap between the legend's universal claim and the render.

**Verification**
- `npx astro build` clean (163 pages); `vaults.json` + `install_truth.json` untouched (no prebuild regen).
- Full blocking gate suite **279/279** green: G9 ✓; axe `gate-4` both modes ✓; `@audit` sweep (42 routes × 2
  modes axe + overflow + Mermaid keyboard-twin + no-JS degrade) ✓; responsive 6 viewports ✓; brand ✓.
- Eyeballed `/vaults/graph` + header in light + dark (screenshots).
- Persona panel (fresh eyes, not the implementer) — all **PASS**:
  - **Design Critic** axis C **4.5/5** — "deliberate Linear/Stripe seriousness; the cyan accent earns its salience." No Crit/High.
  - **Accessibility Auditor** axes G+H **5/5 + 5/5** — black-on-chip contrast 14.31 / 8.30 / 12.24 : 1; 44px targets real (meet AAA 2.5.5); no keyboard/focus/landmark regression. No findings.
  - **Newcomer Stress-Tester** axis B **4/5** — "removing per-class colour helps on net; single cyan box explained; plain-text census beats colour-matching." No Crit/High.

**Surfaced findings** (NOT C3 regressions — logged for triage; do not block this cycle)
- *[known · verify-after-pt19]* `.mmd` still renders pre-rename slugs (SiteForge/MoleculeForge/VAASLattice/
  TaskForge/ComfyForge/aDNAScope/TappInterface/LatticeLabs…) + a hardcoded "21 vaults" subgraph label. Owned
  by the pt19 regen; not a visual-craft defect. (Design Critic Medium.)
- *[confirms H-9/H-11]* At 40 nodes in a wide row, rendered Mermaid edges are thin/hard to trace — the legend's
  "lines carry the story" promise outruns the figure's legibility. Validates the queued H-9 (mobile legibility)
  + H-11 (perf/density) D4 items. (Newcomer Medium.)
- *[NEW · graph unit]* Two visuals compete for "the network, drawn": the decorative pixel-art hero vs. the real
  Mermaid graph lower down — a newcomer is briefly unsure which carries meaning. Candidate finding for the graph
  unit's H-9 cycle. (Newcomer Medium.)
- *[NEW · low]* Census terms "Genesis stub / Framework (candidate) / Network" appear without a gloss (the
  line-style key glosses every term; the class census does not). Optional polish. (Newcomer Low.)

**In progress** — none (cycle complete).

**Next up**
- Open **C4 (H-7)** — `/vaults/[slug]` visual hierarchy (SP-4 definition-list/card grid + relationship
  primacy). New session.
- Then **PAUSE** for the operator's **H-9/H-11 option decision** (graph mobile legibility + Mermaid→SSR perf);
  the two Newcomer Mediums above feed it.

**Blockers** — none.

**Files touched**
- `scripts/build_vaults_data.mjs` · `site/src/data/vaults_graph.mmd` · `site/src/pages/vaults/graph.astro` ·
  `site/src/components/common/Header.astro` · `site/src/components/islands/DarkModeToggle.astro` ·
  `site/tests/gates/gate-18-categorical-color.spec.ts` (new) · this session record (→ `history/2026-06/`).

**Tracking discipline (M35):** per the mission's "cycle-tracker discipline at decadal close, not cycle level,"
NO campaign-master / mission-backbone / STATE.md edits at this cycle close. Per-cycle record = this commit +
SITREP. The D4 master row batches at the decade-close (after H-7 + H-9/H-11 + M-7 + the decadal AAR).

**Next Session Prompt:** Continue WEBSITE.aDNA D4. C3 (graph-colour restraint + 44px targets + G9) is CLOSED
and committed/pushed. Open **C4 = H-7**: redesign `/vaults/[slug]` (41 routes) per SP-4 — definition-list/card
grid, separate metadata from prose, give `VaultRelationshipBlock` primacy; reuse `SubnetworkCard`'s `.subnet-meta`
`<dl>` pattern + the C1 `--color-badge-*` tokens; two-column at ≥900px collapsing to one ≤768px; graph-traceable
`vaults.json` fields only; tokens only. Build with `npx astro build`; verify `npm run test:gates` (G4 both modes
+ G9 6 viewports on `/vaults/Harness.aDNA/` + `@audit` + brand) green; eyeball a dense/sparse/superseded/umbrella
sample both modes; ≥3 fresh personas (Design Critic · Information Architect · Newcomer); commit-only on `main`.
Then PAUSE for the operator's H-9/H-11 option decision before the next graph cycle.
