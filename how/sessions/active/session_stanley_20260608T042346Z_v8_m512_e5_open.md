---
type: session
session_id: session_stanley_20260608T042346Z_v8_m512_e5_open
created: 2026-06-07
persona: rosetta
tier: 1
campaign: campaign_adna_serious_tool_readiness
phase: 5
missions:
  - mission_adna_str_p5_m512_e5_public_good_commons
status: in_progress
last_edited_by: agent_stanley
tags: [session, v8, p5, m5_12, e5, public_good_commons, subnetwork_federation, mission_open, design_spec, stage_0_gate]
---

# Session — M5.12 / E5 OPEN: Public-Good Commons & Subnetwork Federation (Stages 0–4 design)

## Intent

Open **E5** — the next E-series build mover after E4's close (operator-directed; E4 deployed live
2026-06-07). E5 is Track G of the [[m57_eseries_ecosystem_theme_set|M5.7 charter]]: the **ethos-bearing**
decadal that makes the [[narrative_ethos_public_good|public-good ethos]] concrete by featuring four real
mission-aligned subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive), a "connect to a
subnetwork" affordance, and the first social surface (contributors/attribution/activity). Showcase
**do-now**; full social layer = **Venus-gated horizon**. E5 **is** an RLP decadal (D17·E1·E3·E5·E6) + an
extra RLP per MAX-III; new dims **Trust/Provenance** + **Participation Scent**.

This session = **Phase A of the plan** (`~/.claude/plans/please-read-the-claude-md-bubbly-creek.md`):
author the planning artifacts and bring E5 to its **Stage-0 operator ratification gate**. **No `site/`
code** this session (Stage-0 is a human gate, mirroring E1's hero ratification).

## Scope declaration (Tier 1 — planning/governance artifacts only)

- **Write surface (aDNA.aDNA only):** the E5 mission spec (NEW) · the E5 design spec (NEW) · this session ·
  `STATE.md` (active-mission + Next Session Prompt) · campaign master amendments line.
- **No writes to:** `site/` code, the data layer, the generator, engine skills, `Home.aDNA`, `.adna`,
  any cross-vault. Rename nothing.

## Completed this session

- **Confirmed** E4 closed + deployed (cycles 150–159, GREEN mean 4.38); Phase 5 stays open; operator chose
  **E5** as the next mover (AskUserQuestion).
- **Confirmed** M5.12 / E5 is the next free mission number (E1=5.10, E4=5.11).
- **Authored** [[mission_adna_str_p5_m512_e5_public_good_commons]] — RLP decadal; crux = data-before-design
  (the 4 subnetworks are `vaults.json` **registry stubs**: status:pending, empty headline_mission, bare
  display names — so E5 curates cited narrative data first); O1–O5; hard constraints; featured-set table;
  E4 Gap-Register consumption.
- **Authored** [[m512_e5_public_good_commons_design_spec]] — Stages 0–4 + `subnetworks.yaml` adaptation
  seam (candidate **ADR-034**, sibling to ADR-033) + per-cycle plan (160–169) + full-30-persona RLP routing
  (Community Lead · Conversion/Growth · Newcomer · Design Critic · Content Strategist · Movement Skeptic;
  gate ≥4.95/no-dim<4.80, soft-gate the 2 new dims) + 3 hero directions + the **5 Stage-0 decisions**.

## In progress / next

- **Stage-0 gate (operator):** ratify (1) page name `/commons` vs `/subnetworks`; (2) featured set + "curated
  not exhaustive"; (3) first-social-surface MVP scope vs Venus-gated horizon line; (4) data approach
  (`subnetworks.yaml` overlay vs extend `vaults.json`); (5) hero direction A/B/C. **On ratify → Phase B**:
  build cycles 160–169 per `skill_iii_cycle`, commit-only through the decadal, deploy at the close.

## SITREP

- **Completed:** E5 opened — mission spec + design spec authored; Stage-0 decisions framed.
- **Next up:** operator Stage-0 ratification → cycle 160 (data foundation: `subnetworks.yaml` + generator).
- **Blockers:** none (Stage-0 gate is the intended stop, not a blocker).
- **Files touched:** mission spec, design spec, this session, STATE.md, campaign master (amendments line).

## Next Session Prompt

E5 (Public-Good Commons & Subnetwork Federation) is **opened** (M5.12; mission `in_progress`) with its
mission spec + Stages 0–4 design spec authored and awaiting the **Stage-0 operator gate** (5 decisions:
page name, featured set, social-surface MVP scope, data approach, hero direction). On ratification, begin
**cycle 160** = the data foundation: author `site/src/data/subnetworks.yaml` (4 cited subnetworks, each
from its CLAUDE.md/STATE/coord memo — fills the registry-stub gap honestly), merge/project it in
`scripts/build_vaults_data.mjs` (ADR-023 idempotent; candidate ADR-034 adaptation seam), regenerate, and
scaffold the `/commons` route. Then cycles 161–169 per the per-cycle plan in
[[m512_e5_public_good_commons_design_spec]], closing on the full 30-persona Reviewer Lens Pass + Movement
Skeptic. Commit-only through the decadal; deploy at the close (E4 rhythm). Carry the E4 Gap Register
(headline = mobile `/vaults/graph` legibility) onto any commons surface that embeds the graph/registry,
and "score the seams, not the surfaces" in the RLP. Plan:
`~/.claude/plans/please-read-the-claude-md-bubbly-creek.md`.
