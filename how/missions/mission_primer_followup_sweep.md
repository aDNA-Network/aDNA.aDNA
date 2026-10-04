---
mission_id: mission_primer_followup_sweep
type: plan
title: "Primer follow-up sweep — discharge the 17 source inconsistencies the primer exposed (I-01 … I-17), each at its object, never in the primer"
created: 2026-10-04
updated: 2026-10-04   # executed (h); owed: Noether send GO
status: in_progress   # O1 · O3 · O4 DONE, O2 one send owed (Noether) → stays in_progress until that GO; OPENED 2026-10-04 (h) — operator selected lane D at the plan gate (session_stanley_20261004_045208_garnier_h_sync_vaults_send_channel_proof_primer_sweep). ⚠ Declared executor_tier opus; EXECUTED ON FABLE at the operator's selection — recorded, not hidden. Was: queued (stub authored at Primer O5, 2026-10-04); the three standard-level items (I-15 · I-16 · I-17) are errata candidates for the standard v2.6 window and need their own §7.7
last_edited_by: agent_rosetta
executor_tier: opus            # mechanical-to-mid-judgment: each row names its object and its fix; the three standard errata escalate to fable at the gate
executor_runtime: claude
executor_lane: oauth
token_budget_estimated: "≈60 ± 20 kT content-load, one session (14 vault-local rows ≈ 2–4 kT each; the three standard rows are read-and-draft only)"
token_budget_actual: "≈55 kT content-load (rough: object checks 15 · O1 fixes 12 · O2 memos 12 · O3 drafts 10 · register + close 6); inside 60 ± 20; executed on fable (declared opus) — one sitting, 2026-10-04 (h)"
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

## Execution record — 2026-10-04 (h), one sitting

| # | Status | Record |
|---|---|---|
| O1 | ✅ done | I-01 · I-03 · I-04 · I-11 (moved here from O3 — vault-local citation) · I-12 fixed at the object; I-09 linked; I-16 → upstream row (template-identical file); **I-05 NOT REPRODUCED** (sample frontmatter in code blocks, not the files' own). `adna_validate --governance` zero drift. |
| O2 | ◐ one send owed | I-14 **delivered** (Berthier + Hestia, grep-verified at the send); **I-02 NOT REPRODUCED** (no match at Network's file); I-06 memo to Noether **staged `outbound_ready` — send GO owed**. |
| O3 | ✅ drafts | `errata_v2_6_drafts.md` E-1 (I-15) + E-2 (I-17); **ADR-063 `proposed`** with one §7.7 line per erratum (v2.6 window); `adr_index` 57 → 58. Nothing normative changed. I-11 withdrawn from errata (see O1). |
| O4 | ✅ verified | I-08 · I-09 · I-10 rows exist and carry the finding; I-07 → `idea_upstream_adna_overview_successor` (the "sweep decides" became a gate question); I-13 none. |

Dispositions table: `source_inconsistencies.md` §Sweep dispositions (17/17: 7 ✅ · 2 📨 · 4 📋 · 2 ⛔ · 4 ✔).

## Not in scope

Any change to `what/docs/adna_primer_for_data_engineers.md` (v1.0 is released; a v1.1 would be its own ruling) · any edit to the standard's normative text · peer-vault edits.

## Ratification (§7.7)

- **Decision:** open the sweep (lane D) · **Ratified-by:** Stanley (operator, plan-time AskUserQuestion) · **Date:** 2026-10-03 PDT (UTC 2026-10-04) · **Status:** ruled — the sweep itself; O3's two errata keep their own §7.7 lines in ADR-063 (v2.6 window). *(Was: pending — the mission opens on an operator summons.)*

## AAR

*(5-line AAR written at the O1/O3/O4 close; the mission flips to `completed` on the Noether delivery, which adds nothing to these lines.)*

- **Worked:** verifying each register row at its object before acting — it turned two "defects" into non-defects (I-02, I-05) and one "standard erratum" into a one-line local fix (I-11) before any wrong edit was made.
- **Didn't:** the register itself was trusted once at authoring (10-03) and two of its 17 rows were misreadings of the same class the sweep exists to catch (a sample read as the file; a peer claim carried from a SITREP). The register's own frontmatter did not say which rows were first-hand.
- **Finding:** rows marked `[R]` (reported, not re-run) were exactly the ones that failed to reproduce — the marker was right and nobody acted on it at authoring.
- **Change:** in `source_inconsistencies.md`-class registers, an `[R]` row is a *question*, not a finding, until re-run; the sweep table now says ⛔ for both and keeps the original rows so the misreading is visible.
- **Follow-up:** Noether send GO (I-06) · ADR-063 §7.7 ×2 at the v2.6 window · v8.13 gate carries I-07 · I-16 · I-09 · I-08 rows · Hestia/Berthier may answer I-14 or not (closes either way).

*Mandatory before `status: completed`. `how/templates/template_aar_lightweight.md`.*
