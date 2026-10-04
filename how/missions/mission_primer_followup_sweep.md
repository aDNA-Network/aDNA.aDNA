---
mission_id: mission_primer_followup_sweep
type: plan
title: "Primer follow-up sweep — discharge the 17 source inconsistencies the primer exposed (I-01 … I-17), each at its object, never in the primer"
created: 2026-10-04
updated: 2026-10-04
status: in_progress   # OPENED 2026-10-04 (h) — operator selected lane D at the plan gate (session_stanley_20261004_045208_garnier_h_sync_vaults_send_channel_proof_primer_sweep). ⚠ Declared executor_tier opus; EXECUTED ON FABLE at the operator's selection — recorded, not hidden. Was: queued (stub authored at Primer O5, 2026-10-04); the three standard-level items (I-15 · I-16 · I-17) are errata candidates for the standard v2.6 window and need their own §7.7
last_edited_by: agent_rosetta
executor_tier: opus            # mechanical-to-mid-judgment: each row names its object and its fix; the three standard errata escalate to fable at the gate
executor_runtime: claude
executor_lane: oauth
token_budget_estimated: "≈60 ± 20 kT content-load, one session (14 vault-local rows ≈ 2–4 kT each; the three standard rows are read-and-draft only)"
token_budget_actual: "<kT, filled at close>"
depends_on: [mission_primer_adna_for_data_engineers]
parent: mission_primer_adna_for_data_engineers
source: how/missions/artifacts/primer/source_inconsistencies.md
tags: [mission, primer, followup, sweep, inconsistencies, standard_errata, queued]
---

# Primer follow-up sweep

**Why this exists.** Writing a document *about* the standard for an outside reader forced every claim to be re-read at its object. Seventeen inconsistencies surfaced and were registered in `how/missions/artifacts/primer/source_inconsistencies.md` — **none was fixed in the primer** (the mission's constraint: the document is about the standard; it must not amend it). This mission discharges them where they live.

## Objectives

| # | Objective | Rows | Method | Acceptance |
|---|---|---|---|---|
| **O1** | Vault-local fixes, one commit each | I-01 (derive `entity_count`) · I-03 (Autonomous → Agentic) · I-04 (derive the line count) · I-05 (two tutorial titles) · I-09 (template tier fields — already a v8.13 backlog row; link, don't duplicate) · I-12 (federation docs predate the topology — refresh or retire; decide at the row) · I-16 (`frontmatter_schema.json` per-class `status`) | fix at the object; every count derived (KW-14) | each row's "fix" column executed or re-dispositioned with reason; `adna_validate --governance` zero drift |
| **O2** | Peer-vault rows → memos, never edits | I-02 (Network "14 entity types") · I-06 (LatticeProtocol's second copy of the standard) · I-14 (model-tier inversion at Home / Operations — verify whether theirs moved) | one memo per peer, ADR-061 fields, pin re-read; delivery is its own GO | memos `outbound_ready` or delivered per ruling |
| **O3** | Standard errata — draft only | I-15 (§4.1 four MUST vs §5.5 Starter three) · I-17 (§6.5 cites a §15 rule that is not there) · I-11 (Rule 10 cited, router lists 9) | draft the erratum text + an ADR stub at `status: proposed`; **no edit to `adna_standard.md`** before the operator's §7.7 at the standard v2.6 window | three erratum drafts; ADR stub; nothing normative changed |
| **O4** | Already-dispositioned rows — verify, don't redo | I-07 (`aDNA_overview.md` successor question) · I-08 (campaign layer — `idea_upstream_standard_codify_campaign_layer`, v8.13) · I-10 (airlock overload — `idea_a2a_communication_overview`) · I-13 (none) | confirm the named backlog row exists and carries the finding | links verified |

## Not in scope

Any change to `what/docs/adna_primer_for_data_engineers.md` (v1.0 is released; a v1.1 would be its own ruling) · any edit to the standard's normative text · peer-vault edits.

## Ratification (§7.7)

- **Decision:** — · **Ratified-by:** — · **Date:** — · **Status:** pending *(the mission opens on an operator summons; O3's errata need their own signatures)*.

## AAR

*Mandatory before `status: completed`. `how/templates/template_aar_lightweight.md`.*
