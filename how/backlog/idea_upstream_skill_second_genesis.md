---
type: backlog_idea
status: proposed
priority: high
created: 2026-06-10
updated: 2026-06-10
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/skills/skill_second_genesis.md (v0.1.0, installed Spring Clean SC-8; designed at SC-2)
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/aDNA
tags: [backlog, upstream, skill_second_genesis, stale_vault, re_genesis, fork, dossier, operator_brief, hestia]
---

# Idea: `skill_second_genesis` — re-genesize a stale vault to the current standard (reference implementation installed)

## Problem

Vaults go stale: template generations move on, STATE claims `active` while months pass, goals shift
under the graph. The standard offers fork (birth) and version-migration (in-place upgrade), but nothing
for the common middle case — **a vault worth re-founding, not deleting and not blindly reviving**.
Treating stale vaults as archive-candidates loses live value (the Spring Clean triage found all six
"stale" vaults were *paused-mid-campaign*, three on HUMAN gates — none were husks).

## Proposal

Adopt the **Second Genesis** skill: a structured intake of the old graph (9-section dossier) + a fresh
operator brief (Q1–Q7) feeding a per-vault re-genesis campaign — archive-old-first → fork at the
canonical name from the **current** template → P0 design mission consuming dossier+brief → selective
improve-then-carry migration → close with breakage-map sweep + fleet-delta regen.

**Reference implementation** (working, ratified, first cohort queued):
`Home.aDNA/how/skills/skill_second_genesis.md` v0.1.0 — dossier schema (identity · census · open work ·
decisions · cross-refs/breakage map · standard drift · salvage shortlist · operator brief · recommendation),
the P0–P5 flow, guardrails (old-graph read-only; archive-never-delete; name-collision → archive-first;
forge wrapper-contract safety; sensitive-engagement structure-only dossiers; one re-genesis at a time).

## Evidence the criteria discriminate

Six intake dossiers were authored in one mission (SC-2, 3 parallel extraction agents) and gated in one
operator pass (SC-4): four re-fork verdicts (ComfyForge · VAASLattice · LAVentureGraph · zeta→Zeta) and
**two deviation flags where the fork criteria correctly FAILED** — CakeHealth (v6.0 fork, zero drift,
paused on client gates → upgrade-in-place, exited the queue) and LPWhitepaper (minimal drift, live iii
wrapper → operator amended to an integrate-into-LatticeProtocol track). A skill whose qualifying tests
push back on its own use is doing real work. Merge-into-X candidates were investigated and rejected
*with evidence* (paper≠code lifecycle; verification-orthogonality), keeping the verdict honest.

## Why upstream

Stale-vault re-genesis is universal across nodes; the dossier/brief/flow shape is template-ready.
Natural home: `how/skills/skill_second_genesis.md` in the template + the dossier schema as a
`how/templates/template_second_genesis_dossier.md`. Depends on `skill_project_archive` (P1) — filed in
the same batch.
