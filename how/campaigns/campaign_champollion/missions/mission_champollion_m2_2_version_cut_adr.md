---
plan_id: mission_champollion_m2_2_version_cut_adr
type: plan
title: "M2.2 — Version-cut ADR (v2.4 → v2.5/v3.0; ratifies at G2)"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 2
campaign_mission_number: 2
mission_class: integration
executor_tier: fable
token_budget_estimated: "30 kT"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p2, standard, version_cut, adr, m2_2]
---

# Mission M2.2 — Version-cut ADR

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: fable** (does-not-downtier — a load-bearing standard-version judgment; run as a fable subagent under opus orchestration per the M1.2 shape) · **Ring 1**. Consumes [[mission_champollion_m2_1_standard_currency_audit|M2.1]]'s divergence ledger. **Ratifies at G2** — this mission *authors*, the operator *ratifies*.

## Objective

Author **ADR-046** (next after ADR-045) proposing the standard version cut **v2.4 → v2.5 or v3.0**, consolidating the P1/P2 governance changes into a coherent increment. Set `status: proposed` — **agents set `proposed` only** (M1.2's ratification-record discipline); the version and the ratification land at **G2**.

## Work

1. Consume M2.1's `standard_currency_audit.md` — the divergences that warrant a version increment.
2. Scope the cut (charter M2.2 row): **ADR-044 §7.2/§5.5 fold** · ratification-record discipline (M1.2 spec) · wrapper placement / ADR-045 · model-tier mission fields *if graduated* (`idea_upstream_model_tier_mission_fields`).
3. Draft `what/decisions/adr_046_standard_version_cut_v2_5.md` (rename the slug if the cut resolves to v3.0 at G2) with a **semver rationale**: v2.5 (additive / backward-compatible) vs v3.0 (breaking). **Recommend one** with reasoning; present both arms for the G2 operator decision.
4. `status: proposed`; cite **G2** as the ratification point in the Status block (ratifier/gate/date to be filled at G2).
5. Update `adr_index.md` to add ADR-046 (proposed) — the tally line goes `proposed: 1` until G2.

## Acceptance criteria

- [ ] ADR-046 authored; `status: proposed`; clear **v2.5-vs-v3.0 recommendation + rationale**; both arms stated for G2.
- [ ] Every scope item (ADR-044 fold · ratification-record · placement/ADR-045 · model-tier fields) addressed or explicitly deferred with reason.
- [ ] `adr_index.md` reflects ADR-046; tally correct.
- [ ] `adna_validate` FULL PASS + `--governance` zero drift; single explicit-path commit.

## Guardrails

**Agents set `status: proposed` ONLY** — do NOT self-ratify (the exact defect ADR-045 carried; M1.2 installed the discipline) · no standard-text edits until G2 ratifies the cut · no `.adna/` writes (the standard fold ships via `skill_template_release` at a later operator gate) · no push.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py . --governance` (must show zero ADRs improperly `accepted`; ADR-046 correctly `proposed` with no ratifier); `adr_index` tally cross-check.

## Escalation triggers

- Audit implies a **breaking change (v3.0)** with fleet-wide impact → surface for the operator at G2 explicitly; do **not** default to v2.5 to dodge the hard call.
- A scope item needs a decision beyond ADR-046's remit → separate ADR / gate input.
- Budget > 45 kT → halt and report.
