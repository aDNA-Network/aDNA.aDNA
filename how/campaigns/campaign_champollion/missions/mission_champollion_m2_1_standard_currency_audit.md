---
plan_id: mission_champollion_m2_1_standard_currency_audit
type: plan
title: "M2.1 — Standard currency audit (v2.4 ↔ template v8.3 ↔ ratified ADR corpus)"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 2
campaign_mission_number: 1
mission_class: verification
executor_tier: opus
token_budget_estimated: "50 kT"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p2, standard, currency, audit, m2_1]
---

# Mission M2.1 — Standard currency audit

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus** (verification/judgment) · **Ring 1** (launch-critical spine). First P2 mission — feeds [[mission_champollion_m2_2_version_cut_adr|M2.2]] (version-cut ADR) and [[mission_champollion_m2_3_glossary_concepts_currency|M2.3]] (glossary/concepts).

## Objective

Audit the aDNA **Standard (v2.4)** for currency across three references — its own text, the public **template image (v8.3)**, and the **ratified ADR corpus** (40 ADRs, now indexed at [[../../../what/decisions/adr_index|adr_index]]) — and produce a divergence ledger. Separate **normative** claims (what the standard *defines*) from **demonstrative** claims (what this vault *illustrates*) so each divergence targets the right layer. Audit only — fixes ride M2.2 (version-cut ADR) + M2.3 (content).

## Work

1. Locate the standard's normative surface (`what/docs/adna_standard.md` + any spec docs) and confirm the version is **v2.4** live (verify-don't-inherit; the founding directive carried a v2.3 error — charter §0).
2. **Standard ↔ ADR corpus**: walk `adr_index.md`; for every `accepted` ADR that touches the standard, confirm it is reflected in the standard text. Flag unfolded ADRs — the known thread is **ADR-044 §7.2/§5.5** (queued for the next `skill_template_release` fold per the conformance-arc note).
3. **Standard ↔ template image v8.3**: reconcile what the standard says against what the shipped `aDNA-Network/aDNA` image embeds (the "other-repo KEEP axis" from `skill_template_release`).
4. **Normative-vs-demonstrative separation sweep**: classify each load-bearing claim; flag demonstrative content asserted as normative (or vice-versa) — the self-referential vault makes this easy to blur (SO-8).
5. Emit `artifacts/standard_currency_audit.md` — a severity-ranked divergence ledger (F-CHM-2xx ids · claim · reference · normative/demonstrative · owner · target mission). **Do NOT edit the standard here.**

## Acceptance criteria

- [ ] Every `accepted` ADR touching the standard is checked-off as folded-or-flagged (cross-referenced to `adr_index.md`).
- [ ] Each divergence carries severity + normative/demonstrative class + owner + target mission (M2.2 / M2.3 / defer).
- [ ] Version confirmed v2.4 live (all three references reconciled or divergence-logged).
- [ ] `adna_validate` FULL PASS; single explicit-path commit.

## Guardrails

Audit-only — **no standard-text edits** (those ride M2.2's version-cut ADR + M2.3) · no ADR edits · no `.adna/` writes · no push · verify-don't-inherit every version/count claim (charter Inviolable §7).

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` (+ `--governance`); the audit ledger cross-references `adr_index.md` row-for-row.

## Escalation triggers

- A divergence implying a **normative change beyond a version bump** (semantics, not wording) → escalate as a G2/ADR input; do not silently resolve.
- Template v8.3 vs standard v2.4 conflict that can't be classed as folded/pending → flag for M2.2 scope.
- Budget > 70 kT → scope is wrong; halt and report.
