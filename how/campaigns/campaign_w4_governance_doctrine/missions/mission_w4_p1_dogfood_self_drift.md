---
type: mission
created: 2026-07-05
updated: 2026-07-05
status: completed
last_edited_by: agent_rosetta
campaign: campaign_w4_governance_doctrine
phase: P1
wave: "— (dogfood prerequisite; not a fleet wave)"
mission_class: implementation
executor_tier: opus   # first vault mission to carry the v8.4 field — self-referential dogfood (SO-8)
token_budget_estimated: 60   # kT; 50-80 band (Standing Rule 11) — governance authoring, single session
token_budget_actual: 68   # kT (rough) — shared session with P0 charter; +13% vs est, well under the 2x retro trigger
tags: [mission, w4, governance_doctrine, dogfood, f7, self_drift, implementation]
---

# Mission — W4 P1: dogfood the v8.4 doctrine into aDNA.aDNA's own governance (close F7)

The **BLOCKING prerequisite** of Operation Concord (`campaign_w4_governance_doctrine`). aDNA.aDNA is the standard's own
dev vault, yet its `CLAUDE.md` runs governance **v6.0** while the standard ships **v8.5** — the dogfooding gap (finding
**F7**). No adoption recipe is handed to a consumer vault until it's proven here. This mission adopts the v8.4
consumer-facing doctrine in aDNA.aDNA's own `CLAUDE.md`, and in doing so **discovers the applicability model** that makes
the Tier-A rollout (P2) correct.

## Goal

aDNA.aDNA's `CLAUDE.md` declares `version: "8.4"` and carries the project-vault subset of the v8.4 consumer-facing
doctrine (per [[v8_4_adoption_checklist]]). F7 is closed. The applicability model (which items apply at project vs node vs
router altitude) is documented as the reusable finding.

## Context

Deferred from Fleet Re-Seed at its P0 gate (split-depth: cheap conformance W1–W3 vs. judgment-heavy governance-doctrine
W4). F7 disposition in `../campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md`. The v8.4 set: `.adna/CHANGELOG.md`.
Presence-check (pre-mission) found aDNA.aDNA missing §7.7 ratification, a formal credential-routing section, AskUserQuestion
discipline, and single-writer-lease; `executor_tier` existed in the mission template but had no CLAUDE.md doctrine note.

## Objectives (the dogfood edits — target: `aDNA.aDNA/CLAUDE.md`)

| # | Objective | Concrete change | Status |
|---|-----------|-----------------|--------|
| 1 | Version bump | frontmatter `version: "6.0"` → `"8.4"`; refresh `updated`; both `<!-- v6.0 … -->` HTML markers → v8.4 | done |
| 2 | §7.7 ratification discipline | Add a `## Decision Ratification (§7.7)` section — agents author / operators ratify; 4-field block; cite `template_ratification_record.md` | done |
| 3 | Credential-routing snippet | Add a standalone `### Credential routing (broker = Home.aDNA)` section (names-only; env-var/URI; tokens never in-conversation) — the consumer-side of Rule 6 | done |
| 4 | AskUserQuestion discipline | Add a rule to the Agent Protocol: surface load-bearing operator decisions (default-with-escape; record resolution) | done |
| 5 | single-writer-lease | Add a rule to File Safety / Collision Prevention (one writer per shared config; mandatory for inventory/credentials/identity) | done |
| 6 | `executor_tier` doctrine | Extend Standing Order 11 with a one-line `executor_tier` note; cite `pattern_model_tiered_campaign_execution` | done |
| 7 | Standing Rules 5–7 applicability ruling | Document the ruling: adopt credential-routing (#3) at project level; *reference* agentic-sudo (`skill_agentic_sudo`); **router-row discipline is router-only → n/a here**. This is the reusable finding → feeds [[v8_4_adoption_checklist]]. | done |
| 8 | Scorecard F7 closure | Append (do not rewrite) a dated closure annotation to the F7 row of `fleet_reseed_scorecard.md`: "CLOSED at Concord P1 2026-07-05". | done |

## Verification

- `grep '^version:' CLAUDE.md` → `"8.4"`; no residual `v6.0` markers.
- Each of the 5 added doctrine sections is present (grep the section headers).
- `adna_validate --governance` (python3.13) runs clean.
- The edited `CLAUDE.md` still passes the vault's own dual-audience (SO-7) + self-reference (SO-8) tests — the new
  sections cite concrete vault instruments (`skill_agentic_sudo`, `template_ratification_record`, Home.aDNA broker).
- F7 row in the scorecard shows the Concord-P1 closure annotation.

## Completion Summary

### Deliverables
- **aDNA.aDNA `CLAUDE.md`** — gov `version: "6.0"` → `"8.4"`; new consolidated `## Governance Doctrine (v8.4)` section (§7.7 ratification · credential-routing broker=Home.aDNA · AskUserQuestion discipline · single-writer-lease · model-tiered `executor_tier`) + SO-11 `executor_tier` clause + both HTML version markers updated.
- **[[v8_4_adoption_checklist]]** — the reusable per-vault instrument (checklist + applicability model project/node/router); the P2 recipe.
- **Scorecard F7** annotated `→ CLOSED at W4 Concord P1` (append-only; frozen P0 roster snapshot left intact).

### Descoped
- None — all 8 objectives done.

### Key Findings
- **Applicability model (the load-bearing finding):** at a *project vault* adopt five items (ratification · credential-routing · AskUserQuestion · single-writer-lease · executor_tier); *reference* node-level agentic-sudo; **drop router-row discipline** (workspace-router-only). This is what makes the P2 Tier-A rollout correct.
- **`template_ratification_record` is missing locally** (it ships in the v8.4 set in `.adna/`) — a real residual drift; tracked as a follow-up.

### Scope Changes
- None.

## AAR

- **Worked**: dogfood-first surfaced the applicability model that makes P2 correct; consolidating the five doctrine items into one self-documenting `## Governance Doctrine (v8.4)` section kept the edit coherent (and is the model P2 replicates).
- **Didn't**: the STATE.md banner insertion mis-fired — `⏭ QUEUED` occurs inside the giant line-4 frontmatter narration, so a substring `next()` matched it and inserted the banner *inside* the YAML frontmatter; caught and fixed by a verify-after-write pass (YAML re-parsed clean).
- **Finding**: not every v8.4 item belongs at every altitude — router-row discipline is router-only; the checklist needs the applicability column, not a flat list.
- **Change**: when line-matching a marker in a file with a giant running-narration frontmatter (STATE.md), anchor on a line-start header (`l.startswith("## ⏭ QUEUED")`), never a substring the narration can also contain.
- **Follow-up**: [[campaign_w4_governance_doctrine]] P2 (Tier-A, operator-gated + DP1 execution model); author a local `template_ratification_record`.
