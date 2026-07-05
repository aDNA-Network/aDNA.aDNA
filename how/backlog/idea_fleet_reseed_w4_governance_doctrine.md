---
type: idea
created: 2026-07-05
updated: 2026-07-05
status: promoted
last_edited_by: agent_rosetta
tags: [idea, fleet_reseed, w4, governance_doctrine, successor, deferred_gate, f1, f7, promoted]
---

# Idea — Fleet Re-Seed W4: governance-doctrine adoption (the deferred gate)

> **PROMOTED 2026-07-05 → `campaign_w4_governance_doctrine` (Operation Concord).** Opened at full scope by operator
> decision (AskUserQuestion); P0 (charter) + P1 (dogfood — aDNA.aDNA gov v6.0→8.4, **F7 CLOSED**) executed the same day.
> This stub is retained as the readiness record (Standing Order 6 — archive, never delete). Live campaign:
> [[campaign_w4_governance_doctrine]].

**Successor to `campaign_fleet_reseed`** (closed at P5 2026-07-05). The P0 gate split the fleet-compliance work
**split-depth**: cheap conformance (W1–W3, delivered) vs. **W4 governance-doctrine adoption** — deferred to *its own
separate operator-gated gate* because it needs migration tooling + per-vault judgment. This stub captures W4 readiness
so the gate isn't lost. **Not reopenable Fleet-Re-Seed work — a fresh charter when the operator opens it.**

## Why it was deferred (not done in Fleet Re-Seed)
- Closes **F1** (governance-version fragmentation; **no v6→v8 migration scripts** exist — only v5→v6) and **F7**
  (aDNA.aDNA self-drift: its own gov is v6.0 while it ships v8.5 — the dogfooding gap).
- "Expensive, judgment-heavy" vs. W1–W3's "cheap, mechanical." A version-number migration would need tooling that
  doesn't exist; the chosen shape is a **doctrine checklist**, not a version bump.

## Scope (as scoped at the Fleet Re-Seed P0 gate)
- **Prerequisite (BLOCKING): fix aDNA.aDNA's own self-drift FIRST as the dogfood proof** (F7) — adopt the v8.4
  consumer-facing set in the standard's own dev vault before touching any consumer.
- **Then Tier-A first (~39 mature-active vaults)**; Tier-B genesis stubs stay light-touch until graduation.
- **Adopt the v8.4 consumer-facing *doctrine* as a per-vault checklist** (not a version-number migration). Checklist
  items (from the scorecard's recommended shape, F1 row):
  - §7.7 ratification discipline
  - Standing Rules 5–7 (agentic sudo · credential broker · router-row discipline)
  - the credential-broker snippet (`### Credential routing (broker = Home.aDNA)`)
  - AskUserQuestion discipline
  - single-writer-lease
  - `executor_tier` fields
- **Build (or decide against) the v6→v8 migration tooling**, and rule on whether project-local-versioned vaults adopt
  aDNA gov-versioning at all.

## Owner / gate
**Rosetta** (baseline) + host personas per-vault (guest visits). **Operator-gated** — a fresh charter/campaign, not a
reopening of Fleet Re-Seed. Est. ~3–5 sessions.

## Inputs
- `how/campaigns/campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md` (F1/F7/F8 dispositions + recommended W4 shape)
- `how/campaigns/campaign_fleet_reseed/artifacts/aar_fleet_reseed.md` (campaign lessons)
- `.adna/CHANGELOG.md` (the v8.4 consumer-facing set) + `.adna/CLAUDE.md`
