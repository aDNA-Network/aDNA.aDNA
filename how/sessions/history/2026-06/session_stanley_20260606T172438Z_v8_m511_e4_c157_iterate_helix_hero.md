---
type: session
session_id: session_stanley_20260606T172438Z_v8_m511_e4_c157_iterate_helix_hero
created: 2026-06-06
persona: rosetta
tier: 2
campaign: campaign_adna_serious_tool_readiness
phase: 5
missions:
  - mission_adna_str_p5_m511_e4_adnanetwork
status: completed
completed: 2026-06-06T18:05Z
last_edited_by: agent_stanley
tags: [session, v8, p5, m5_11, e4, adnanetwork, measure_iterate, responsive_mobile, copy_tightening, orphan_shelf, join_scent, homepage_helix_hero, image_gen, cycle_157]
updated: 2026-06-06
---

# Session — M5.11 / E4 cycle 157: Network-Legibility iterate + homepage DNA-helix hero

## Intent

The next E4 **measure/iterate** slot (design spec rows 155–158; rubric is GREEN after c156). Operator
scope (AskUserQuestion at the plan gate): **no confirming-lens Workflow this cycle** (save for c158/c159),
and **all four iterate threads + a fifth operator-added homepage-hero thread**:

- **A1 · Responsive/mobile pass** — /network · /vaults/graph (40-node Mermaid at ~375px = highest risk) ·
  /vaults/[slug]. (design-spec theme, un-done; nudges navigability)
- **A2 · Copy tightening** — /network hero lead (~60 words) + wordy band subtitles. (design-spec theme,
  un-done; nudges node_clarity 4.5)
- **A3 · Orphan-shelf polish** — the 19-vault "Not yet linked" wide shelf (c156 "didn't"). Light touch
  (accept-and-caption + CSS nudge), NOT a custom-component rebuild. Protect edge_honesty 5.
- **A4 · Join-scent lift** — band-4 "Run a node" outcome cue + sharper CTA (lowest item, 4 → 4.5+).
- **B · Homepage DNA-helix hero** — operator prefers the old banner (DNA helixes rising from computers;
  on disk `what/assets/banner.jpg`) over the current isometric map. III image **planning + versions**:
  clone the e1 hero runner → helix direction set (Tokyo-Night register), generate candidates, **operator
  picks** (decision gate), then swap the winner into the homepage hero.

III 7-step (measure → orient → select → implement → re-measure → validate → record).
Plan: `~/.claude/plans/please-read-the-claude-md-eager-pony.md`. **Commit-only** (E4 bundles its deploy later).
Refs: [[mission_adna_str_p5_m511_e4_adnanetwork]] · [[m511_e4_adnanetwork_design_spec]] (rubric + rows 155–158).

## Scope declaration (Tier 2 — site surfaces + image-gen runner + homepage brand swap)

- **Write surface (aDNA.aDNA):** `site/src/pages/network.astro` · `site/src/pages/vaults/graph.astro` ·
  `site/src/pages/vaults/[slug].astro` + `site/src/components/sections/VaultRelationshipBlock.astro` (responsive) ·
  `site/src/pages/index.astro` + `site/src/components/sections/HomeHero.astro` (hero swap) ·
  `site/src/assets/heroes/` (candidates + winner) · `how/campaigns/.../runners/e1_hero_helix_gen.py` (new) ·
  gate specs (gate-9 coverage / gate-11 alt assertion if needed) · c157 cascade artifacts (cycle JSON, this
  session, STATE, mission spec, campaign master).
- **Hard constraints:** Tokyo-Night dark-first · ≤2 fighting colors (cyan `--color-link` / purple
  `--color-primary`) · no new motion · no marketing adjectives · honest topology (no fabricated edges) ·
  generator byte-idempotent if touched · engine files (`skill_iii_cycle`, `skill_site_design_pipeline`,
  `skill_decadal_aar`) UNTOUCHED · **no Home.aDNA / cross-vault / .adna writes** this cycle · the homepage
  hero is E1(closed) territory — operator-directed exception, commit-only (live at next deploy).
- **Conflict scan:** no other active session. HEAD `cfdec25` (c156), up to date with origin/main. One
  pre-existing unrelated dirty file `how/backlog/idea_upstream_node_exemplar_template.md` (agent_hestia WIP) —
  **left untouched; explicit-path adds** keep it out of the c157 commit.

## Cycle log

**Cycle 157 — measure/iterate + homepage helix hero.** Cycle JSON:
`what/measurement/iii_results/2026-06/cycle_157_E4_iterate_helix_hero.json` (written at close).

- **Measure (baseline):** `git pull` already-up-to-date; build **162pp/0err**; gates green-by-inheritance
  from `cfdec25` (73/73, nothing changed since clean pull). Rubric GREEN after c156 (edge_honesty 5,
  local/shared 5, navigability 4.75, node_clarity 4.5, join_scent 4).

- **A1 · Responsive/mobile** — `gate-9-responsive.spec.ts` now also guards `/vaults/graph` (the 40-node + orphan-shelf Mermaid) + `/vaults/Harness.aDNA` at 320/375/768/1024/1440 (+10 tests). All pass: the island's `overflow-x:auto` + `svg max-width:100%` contain the wide graph (small-but-whole on mobile; no viewport blowout). Validated, not redesigned.
- **A2 · Copy** — `/network` hero lead 75→~50 words (kept the c155 inline `vault` definition; dropped the trailing registry clause band-2 already covers).
- **A3 · Orphan-shelf** — `graph.astro` `:global(.mermaid-container .cluster rect)` muted dashed border → the "Not yet linked" cluster reads as a deliberately PARKED holding area (the layout + render-Perf fix pair for c159; generator untouched → vaults.json/.mmd byte-identical).
- **A4 · Join-scent** — band-4 `.run-meta` commitment/safety cue row (`About five minutes` · `Needs git + the Claude Code CLI` · `Local-first — nothing leaves until you choose`, cyan tick) front-loads the barrier-to-entry before the steps; trimmed the now-duplicated step-1 run-note (kept the Get-started link). NOTE: first `.run-meta` used a negative top margin that overlapped the multi-line subtitle (caught by eyeball, not gates) → fixed to positive margin + tighter `.net-run .section-subtitle`.
- **B · Homepage DNA-helix hero** — operator-added thread. New runner `e1_hero_helix_gen.py` (3 helix directions; `GHIBLI_TAIL` reused). Smoke H1 1/1 ($0.04); r1 fan-out 4/6 ($0.16; H1v1+H3v1 hit Imagen's empty-return, pair variants saved the round) → 5 candidates. **Operator picked `r1_H2_v1`** (a central helix rising from computers, branching into a node-graph — the helix→network bridge). Published as `hero_adna_helix.png`; `index.astro` import swap + explicit pixel-art `heroAlt`. gate-10/11 green; Perf-neutral; title legible over the scrim.

**Re-measure / validate:** build 162pp/0err · gates **86/86** (baseline 76 + 10 new gate-9) · axe **0 WCAG-AA both modes** (/network · /vaults/graph · /vaults/Harness.aDNA · homepage) · Lighthouse desktop **home 100/96/100/100** (Perf 100 = hero-swap perf-neutral; A11y 96 = pre-existing E1-baseline target-size, not a regression) · **/network 100/100/100/100** (up from 98) · **/vaults/graph 100/100/100/100** (desktop preset; the c156 ~89 was the throttled-method dagre cost — Mermaid renders post-paint; c159 prerender deferral stands). Image-gen **$0.20**.

**Self-score:** node_clarity **4.5→4.75** · edge_honesty 5 (held) · local/shared 5 (held) · navigability 4.75 (held) · join_scent **4→4.5**. No item < 4; mean lifted. Cycle JSON: `cycle_157_E4_iterate_helix_hero.json`.

## SITREP

**Completed**
- E4 cycle 157 — measure/iterate (the two undone design-spec themes: responsive/mobile coverage + copy tightening) + orphan-shelf subordination + join-scent lift + the operator-added homepage DNA-helix hero swap (pick `r1_H2_v1`).
- 86/86 gates; axe 0 AA both modes; Lighthouse all-100 (home A11y 96 pre-existing); commit-only.

**In progress** — none (cycle closed).

**Next up**
- **c158** — optional confirming lens Workflow (Diagram-Reviewer + Node-Operator + IA + Newcomer) to independently verify the c156/c157 self-scores before the close.
- **c159** — E4 decadal close (AAR + full Lighthouse + ADR-033 ratify + the `/vaults/graph` build-time prerender Perf fix + orphan-shelf layout).

**Blockers / #needs-human**
- Rotate `SS_VERCEL_TOKEN` (recurring CLI-stdout leak; carry-forward; not actioned here).
- `how/backlog/idea_upstream_node_exemplar_template.md` carries an uncommitted `agent_hestia` WIP edit — left untouched (explicit-path adds kept it out of the c157 commit); Hestia/operator to commit separately.

**Files touched**
- *aDNA.aDNA:* `site/src/pages/network.astro` · `site/src/pages/vaults/graph.astro` · `site/src/pages/index.astro` · `site/tests/gates/gate-9-responsive.spec.ts` · `site/src/assets/heroes/hero_adna_helix.png` (NEW) + `candidates/helix_*.png` · `how/campaigns/.../runners/e1_hero_helix_gen.py` (NEW) · `what/measurement/iii_results/2026-06/cycle_157_E4_iterate_helix_hero.json` + `cycle_157_e1_hero_helix.{smoke,r1}.image_gen_log.json` · this session · `STATE.md`.

**Next Session Prompt**
Continue E4 (aDNANetwork) on `campaign_adna_serious_tool_readiness` (v8 P5, M5.11). c150–157 done; per-cycle plan is 155–158 measure/iterate, 159 decadal close. **c157 (this session)** closed the two still-undone design-spec measure/iterate themes (responsive/mobile — gate-9 now guards `/vaults/graph` + vault detail at 320/375; copy — `/network` hero lead tightened), subordinated the orphan "Not yet linked" cluster (muted dashed border), lifted join-scent (band-4 commitment/safety cue row), and — operator-added — swapped the homepage hero back to the original aDNA DNA-helix concept rendered in Tokyo Night (operator pick `r1_H2_v1` helix→network; `hero_adna_helix.png`). 86/86 gates, axe 0 AA both modes, Lighthouse all-100 (home A11y 96 pre-existing), commit-only. Rubric GREEN (node_clarity 4.75, edge_honesty 5, local/shared 5, navigability 4.75, join_scent 4.5). **Open for c158:** the optional confirming lens Workflow (independent rubric re-score). **For c159 (close):** AAR + full Lighthouse + ADR-033 (network_edges.yaml seam) ratify + the `/vaults/graph` build-time prerender Perf fix (robustness under throttling) + the orphan-shelf layout (Mermaid won't grid; custom chip-grid or accept). The new homepage hero deploys with the E4 bundle. `#needs-human`: rotate `SS_VERCEL_TOKEN`. The Home.aDNA `LatticeNetwork.aDNA` credential/membership sweep stays Rosetta's separate pass.
