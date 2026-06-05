---
type: session
session_id: session_stanley_20260605T064822Z_v8_m511_e4_c152_run_a_node
created: 2026-06-05
persona: rosetta
tier: 1
campaign: campaign_adna_serious_tool_readiness
phase: 5
missions:
  - mission_adna_str_p5_m511_e4_adnanetwork
status: completed
completed: 2026-06-05T07:04Z
last_edited_by: agent_stanley
tags: [session, v8, p5, m5_11, e4, adnanetwork, network_page, node_onboarding, participation_cta, rlp_gap_1, cycle_152]
---

# Session — M5.11 / E4 cycle 152: run-a-node onboarding + participation CTA

## Intent

**Add the Dense "Run a node" band + the participation CTA to `/network`** (design-spec Stage 2,
per-cycle row 152). The `/network` surface (bands 1–3, cycle 151) explains *what* the network is but
never answers the visitor's "**how do I run a node and join?**" — the E1 RLP **Gap #1 (join scent)** and
the load-bearing item #5 of the E4 Network-Legibility rubric. This cycle adds a single new band after
band 3: three numbered onboarding steps in the `get-started` register (bootstrap the node → stays-local →
opt-into-federation, the band-2 boundary as its spine) + a participation CTA (primary → `/get-started/`,
secondary → `/reference/`; real existing routes, honest-topology). Band 5 "Govern & trust" is c153.
Plan: `~/.claude/plans/please-read-the-claude-md-misty-wind.md`. Refs:
[[m511_e4_adnanetwork_design_spec]] · [[front_page_doctrine]] · [[narrative_ethos_public_good]].

## Scope declaration (Tier 1)

- **Writes:** `site/src/pages/network.astro` (append band 4 + scoped style), `STATE.md`, mission file
  (`actual_sessions`), this session. (Optional: `what/measurement/iii_results/2026-06/cycle_152_*`.)
- **Reuse (no edit):** the existing `.section-inner` / `.section-title` / `.section-subtitle` scaffold +
  the `--color-bg-alt` alternating-band pattern already in `network.astro`; `get-started.astro` numbered-
  step + code register; `Callout.astro` (optional); the cyan `--color-link` / purple `--color-primary`
  signal pair (≤2 colors).
- **Constraints / gates:** no new route (`/network` already in gate-4/6/9 — same-route additions need no
  gate edits); Tokyo-Night dark-first; ≤2 fighting colors; no new motion (honor `prefers-reduced-motion`);
  no marketing adjectives (writing-guidelines AVOID; sentences ≤25 words, name the actor); honest-topology
  (CTA targets resolve to real routes, no invented `/run-a-node` page); dual-audience; `.dark` selector
  (never `:global(.dark)`) in plain CSS; ethos shown-not-preached. Engine/runner files UNEDITED;
  archive-never-delete; rename nothing.
- **Verify:** `npm run build` clean (~162pp); `npm run test:gates` → all green (65/65, same routes);
  ad-hoc light-mode axe probe on `/network` (gates dark-only); ad-hoc Lighthouse `/network` 100s;
  link-integrity on `/get-started/` + `/reference/`; visual spot-check (dark + light), band-4 reads
  Dense-but-scannable (one organizing principle = numbered steps).

## Conflict scan

- `git pull` clean (`0814dfe`, Already up to date). active/ empty; working tree clean on main. Trunk
  convention per all prior E-cycles.

## Heartbeat

- 06:48Z — session open; plan approved; git clean on main (`0814dfe`).
- ~06:52Z — built Band 4 in `network.astro` (3-step `.run-steps` + `.run-cta` reusing global `.btn-*`); scoped styles; `.net-run` added to band-padding + bg-alt + mobile groups.
- ~06:56Z — `npm run build` PASS (162pp). `npm run test:gates` **65/65** (same routes; `/network` re-passed a11y/meta/responsive×5). Ad-hoc light-mode axe probe **0** (throwaway spec, removed).
- ~07:00Z — Lighthouse `/network` **98/100/100/100** (LCP 2.1s). 98<100 looked like a regression → rebuilt the **pre-c152 committed page** and measured identically: **also 98/2.1s** → PROVEN perf-neutral; c151's "100/0.5s" was a different method. Reverted `vaults.json` date-only churn (topology byte-identical).
- ~07:04Z — cycle JSON authored; STATE (frontmatter + Current Phase) + mission (`actual_sessions` 2→3) cascade; session → history; commit.

## Cycle log

- **cycle 152 / E4-3 (run-a-node onboarding + participation CTA)** — added the Dense **"Run a node"** band to `/network` (design-spec Stage 2), closing the surface's missing **"how do I run a node and join?"** (E1 RLP **Gap #1** / Network-Legibility rubric item #5, "join scent"). Three numbered steps in the `get-started` register — **bootstrap the node** (clone + `claude` → the `Home.aDNA` node interview) → **everything stays local by default** (Standing Rule 4) → **opt into federation** (an explicit, reviewable act) — with the band-2 local/shared boundary as the spine. Closed by the **participation CTA**: primary "Run your first node" → `/get-started/`, secondary "Read the standard" → `/reference/` (real existing routes — honest-topology, **no invented `/run-a-node` page**). **Reuse-over-invention**: the global `.btn`/`.btn-primary`/`.btn-secondary` (AA-verified both modes) + the `.section-inner` scaffold + the `.net-*` alternating-band pattern (band on `--color-bg-alt`) + ≤2 colors (cyan link / purple primary); **zero new JS / motion / images**. Band 5 "Govern & trust" = c153. Build PASS **162pp**; **65/65 gates** (no gate edits — same routes); **axe 0 AA both modes**; Lighthouse `/network` **98/100/100/100** (LCP 2.1s, CLS 0, TBT 0), **proven perf-neutral**. NOT deployed (bundles later). Cycle JSON `cycle_152_E4_run_a_node.json`.

## SITREP

- **Completed**: **E4 cycle 152 — the `/network` "Run a node" band + participation CTA** (RLP Gap #1). Smallest E4 cycle yet — one band of copy + a two-button CTA on the established scaffold, with the global `.btn` classes carrying AA-both-modes for free. The local/shared boundary from band 2 is now the spine of a real onboarding flow, and the surface finally answers "how do I join?". Build PASS (**162pp**); **65/65 gates** (same routes, no gate edits); **axe 0 AA both modes** (dark gate + ad-hoc light probe, removed); Lighthouse `/network` **98/100/100/100** — **proven perf-neutral** (pre-c152 page scores the identical 98).
- **In progress / next**: **E4 cycle 153 — the "Govern & trust" anchor band** (RLP Gap #4 full): the governance/standard trust-anchor link + the ethos close (sparse). Then c154 = `/vaults/[slug]` relationship-block polish + vault↔graph round-trip cross-links. Network-Legibility rubric: items 1+3+5 now addressed; 4 partial → closed 154.
- **Blockers**: none hard. **#needs-human: rotate `SS_VERCEL_TOKEN`** (carry-forward; recurring CLI-stdout leak — not triggered this cycle, no deploy).
- **Findings**: (1) **Honest-topology was the one real judgment call** — the design spec says "reuse the get-started register," and the `Home.aDNA` node bootstrap is real in the workspace but **not a published site page**, so the CTA points at `/get-started/` + `/reference/` (real surfaces) rather than inventing a `/run-a-node` route; a dedicated node-onboarding guide is a candidate for c154+. (2) **Perf-neutrality method** — a 98 (vs c151's noted 100) looked like a regression; the rigorous check was to rebuild the prior committed page and measure under identical conditions — it also scored 98/LCP 2.1s, proving the band is perf-neutral and that the earlier "100/0.5s" was a measurement-method difference (gate/desktop/warm-cache vs default-throttled `npx lighthouse`), not a real prior state. (3) The gates are still **dark-only**; "axe both modes" remains a manual ad-hoc probe → candidate light-mode loop in gate-4 (carry-forward seed). (4) `vaults.json` regenerates a `generated_at` date stamp on every build — reverted here since the topology was byte-identical (`source_inventory_sha` unchanged); deploy regenerates it anyway.
- **Files touched**: `site/src/pages/network.astro` (Band 4 + scoped styles), `what/measurement/iii_results/2026-06/cycle_152_E4_run_a_node.json` (new), `STATE.md` (frontmatter cycle-log + Current Phase bullet), `…/missions/mission_adna_str_p5_m511_e4_adnanetwork.md` (`actual_sessions` 2→3), this session.

## Next Session Prompt

> **E4 cycle 153 — build the "Govern & trust" anchor band on `/network`** (the sparse close; RLP Gap #4 full). `/network` now carries bands 1–4 (hero + "A network of real relationships" + "What is an aDNA computer?" + "The topology at a glance" + **"Run a node"** onboarding with the participation CTA → `/get-started/` + `/reference/`) and is green (build 162pp; **65/65 gates**; axe 0 AA both modes; Lighthouse `/network` 98/100/100/100, proven perf-neutral). Add the **Sparse "Govern & trust"** band per `m511_e4_adnanetwork_design_spec` Stage 2: the governance/standard **trust-anchor** link (MIT · open spec · Lattice Protocol · GitHub — un-buried, placed visible-above-the-footer per `front_page_doctrine` §8 item 4) + the public-good **ethos close** (shown-not-preached). Keep the Sparse→Medium→Medium→Dense→**Sparse** density arc; the band should *land* the page, not add weight. Honor honest-topology + ≤2 colors + dark-first + writing-guidelines AVOID; reuse `.section-inner` + the global `.btn`/link styles; **no new route** (`/network` already in gate-4/6/9 — same-route additions need no gate edits) and **no deploy** (E4 bundles its deploy later). The edge overlay stays **authoritative until upstreamed** to `Home.aDNA` (Hestia coord, post-decadal); candidate **ADR-033** ratifies at the E4 phase-exit gate (campaign SO #14), **not** mid-phase. Carry-forward **#needs-human: rotate `SS_VERCEL_TOKEN`**. Consider the upstream-seed: a **light-mode axe loop in gate-4** (gates are dark-only today). Refs: [[mission_adna_str_p5_m511_e4_adnanetwork]] · [[m511_e4_adnanetwork_design_spec]] · `site/src/pages/network.astro` · `what/design/front_page_doctrine.md` §8.
