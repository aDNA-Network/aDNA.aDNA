---
campaign_id: campaign_w4_governance_doctrine
type: campaign
title: "W4 — Governance-Doctrine Adoption (Operation Concord)"
owner: rosetta
status: active
phase_count: 4
mission_count: 4
estimated_sessions: "3-5"
calibrated_sessions: "3-5"
estimation_class: governance-broad
priority: high
created: 2026-07-05
updated: 2026-07-05
last_edited_by: agent_rosetta
tags: [campaign, w4, governance_doctrine, fleet_reseed_successor, f1, f7, concord]
---

# Campaign: W4 — Governance-Doctrine Adoption (Operation Concord)

> **OPENED 2026-07-05.** Documented successor to `campaign_fleet_reseed` (closed at P5 2026-07-05). Joint **Rosetta**
> (aDNA.aDNA — baseline/standard) + **Hestia** (Home.aDNA — node/inventory). Opened at **full scope** by operator
> decision (AskUserQuestion, 2026-07-05). Executed **dogfood-first**: close aDNA.aDNA's own self-drift (F7) before
> asking any consumer vault to adopt the checklist.

## Goal

Every mature-active (Tier-A) vault in the fleet carries the **v8.4 consumer-facing governance doctrine** — not as a
version-number migration (the v6→v8 tooling doesn't exist), but as a **per-vault checklist** of concrete doctrine items
(ratification discipline, credential-broker routing, AskUserQuestion discipline, single-writer-lease, `executor_tier`
budgeting). The standard's own dev vault (aDNA.aDNA) leads by example — it stops shipping v8.5 while running v6.0
governance. When Concord completes, the fleet's governance *posture* is coherent even where version *numbers* differ, and
there is a canonical, reusable checklist instrument for every future vault fork.

## Context

The Fleet Re-Seed campaign (`campaign_fleet_reseed`, closed P5 2026-07-05) split the post-launch fleet-compliance work at
its P0 gate: **cheap, mechanical conformance** (W1–W3 — router/inventory currency, wrapper-rename residue, git-remote &
push hygiene; findings **F2–F6 closed**) versus **expensive, judgment-heavy governance-doctrine adoption** (deferred to a
separate operator-gated gate: **W4**). Three findings carried forward:

- **F1** — governance-version fragmentation; **no v6→v8 migration scripts exist** (only v5→v6). A version bump would need
  tooling that doesn't exist; the chosen shape is a doctrine **checklist**, not a bump.
- **F7** — aDNA.aDNA self-drift: the standard's own dev vault runs governance **v6.0** while shipping **v8.5** — the
  dogfooding gap. **This is the blocking prerequisite**: no recipe is handed to consumers before it's proven here.
- **F8** (subset) — Berthier's template-rooted defect classes; the rename-residue class closed at Fleet Re-Seed W2, the
  template-clutter / harness-leak classes stay on Rosetta's upstream **release lane** (not a per-vault touch).

Readiness for this campaign was filed as `how/backlog/idea_fleet_reseed_w4_governance_doctrine.md` (now `promoted`). This
charter opens it as a fresh campaign — **not a reopening of Fleet Re-Seed**.

## Scope

### In Scope

- **Close F7** — adopt the v8.4 consumer-facing doctrine in aDNA.aDNA's own `CLAUDE.md` (the dogfood proof).
- **The canonical instrument** — `artifacts/v8_4_adoption_checklist.md`: the per-vault checklist with an **applicability
  model** (which items apply at project-vault vs node-vault vs workspace-router level).
- **Tier-A rollout** — adopt the checklist across the **38 remaining Tier-A vaults** (roster: `campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md`), batched into cohorts.
- **Rule on F1** — build the v6→v8 migration tooling, or formally decide against it (checklist-only), and rule on whether
  project-local-versioned vaults adopt aDNA gov-versioning at all.

### Out of Scope

- **Tier-B genesis stubs (~29)** — stay light-touch (router + inventory registration only) until they graduate. Not touched here.
- **Tier-C (17)** — symlinks / archive / quarry; skipped by definition.
- **F8 template-clutter / harness-leak** — Rosetta's upstream release lane (`skill_template_release`), not a per-vault re-seed touch.
- **`.adna/` base template** — never modified (Standing Rule 1); doctrine already lives there at v8.5.

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| [[idea_fleet_reseed_w4_governance_doctrine]] | proposed (readiness stub) | This charter (promoted → campaign) |

## Phases & Missions

### Phase 0: Charter & Instrument

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 0 | Charter (this doc) + ratify the v8.4 adoption checklist + applicability model | 0.5 | — | completed |

**Phase exit gate**: charter + `v8_4_adoption_checklist.md` exist; applicability model (project/node/router) is explicit.

### Phase 1: Dogfood — aDNA.aDNA self-drift (F7)  *(BLOCKING)*

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 1 | [[mission_w4_p1_dogfood_self_drift]] — adopt v8.4 doctrine in aDNA.aDNA's own CLAUDE.md | 0.5 | M0 | completed |

**Phase exit gate**: aDNA.aDNA `CLAUDE.md` declares `version: "8.4"`; all 6 checklist items present or explicitly ruled
n/a-at-this-level; the edit passes the vault's own dual-audience + self-reference standing orders; F7 marked closed in the
scorecard. **Operator gate before P2.**

### Phase 2: Tier-A rollout (38 vaults)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 2 | Tier-A cohort adoption (batched; per-vault checklist application) | 2-3 | M1 | planned |

**Phase exit gate**: every Tier-A vault has the checklist applied or a documented exception; per-vault commits local
(pushes operator-gated, SO-9). **Operator gate before P3.** Cross-vault execution model decided at the P1→P2 gate (DP1).

### Phase 3: Close

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 3 | v6→v8 tooling ruling (F1) + final audit + campaign AAR | 0.5-1 | M2 | planned |

**Phase exit gate**: F1 ruled (tooling built or checklist-only decided + recorded as an ADR/decision); scorecard shows F1
+ F7 closed; campaign AAR filed; `status: completed`.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | P1→P2 gate | Approve the dogfood proof **and** choose the P2 cross-vault execution model: (a) guest-visit (Rosetta adopts host persona, edits + commits locally in each vault), (b) coord-memo (stage adoption memos to each host persona), (c) hybrid. | pending |
| 2 | P2→P3 gate | Approve Tier-A rollout complete (all applied or documented-exception). | pending |
| 3 | During P3 | Rule on F1: build v6→v8 migration tooling, or checklist-only. Rule on gov-versioning for project-local-versioned vaults. | pending |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Cross-vault silent writes (P2) violate workspace Rule 10 | High | No cross-vault writes until DP1 decides the execution model; guest-visit or coord-memo, never silent |
| Wrong doctrine item applied at the wrong vault level (project vs node vs router) | Medium | The checklist's **applicability column** + the dogfood proof are the guard; the applicability ruling is the key P1 finding |
| Persona-owned vaults resist a guest edit | Medium | Coord-memo fallback (option b) for persona-sensitive vaults; Rosetta owns only the standard baseline |
| Push posture (most Tier-A are "Local no push" / SO-9) | Medium | Local commits only; every push operator-gated per-vault |
| Project-local-versioned vaults (e.g. `1.6`, `0.4`) have no aDNA gov-version to bump | Medium | Adopt doctrine *items*, not a number; DP3 rules on whether they ever take gov-versioning |
| Scope creep into Tier-B / Tier-C | Low | Explicit scope guard; Tier-B light-touch, Tier-C skipped |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure protocol | Yes |
| AAR produced | 5-line AAR (Standing Order 5) | Yes |
| Deliverables validated | Checklist items present / ruled n/a per vault | Yes |
| Files committed | Git status clean (local) | Yes |

### Per-Phase

| Check | Method | Gate? |
|-------|--------|-------|
| Mission AARs GO | Review AAR readiness | Yes |
| Phase exit criteria met | This doc's phase exit gates | Yes — operator approval |
| Scorecard updated | F1/F7 dispositions in `fleet_reseed_scorecard.md` | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| F7 closed | aDNA.aDNA `CLAUDE.md` version 8.4 + 6 doctrine items present; `adna_validate --governance` (python3.13) clean |
| Instrument usable | `v8_4_adoption_checklist.md` applies mechanically to a Tier-A vault |
| F1 ruled | Decision recorded (tooling built or checklist-only) |
| STATE.md updated | Campaign status reflected in operational state |

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Charter & Instrument | 0 | 0.5 (shared w/ P1) |
| P1 Dogfood (F7) | 1 | 0.5 (shared w/ P0) |
| P2 Tier-A rollout | 2 | 2-3 |
| P3 Close | 3 | 0.5-1 |
| **Total** | **4 missions** | **3-5 sessions** |

## Notes

- **Dogfood-first is doctrine, not sequencing convenience.** aDNA.aDNA is the standard's own dev vault; a recipe unproven
  on itself has no authority over consumers. P1 both closes F7 *and* discovers the applicability model that makes P2 correct.
- **"Adopt the doctrine, not the number."** Many Tier-A vaults carry project-local version lines (`1.6`, `0.4`) or none;
  the checklist targets governance *posture* (the concrete items), which is orthogonal to any version string. DP3 rules on
  the number question separately.
- **Self-reference (Standing Order 8):** this campaign dogfoods the very `executor_tier` / `token_budget` mission fields it
  is helping the fleet adopt — the P1 mission spec is itself the first worked example of the instrument.

## Completion Summary

*Fill out when setting `status: completed`.*

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*
