---
type: coordination
direction: outbound
from: aDNALabs.aDNA (Berthier — HQ hat)
to: aDNA.aDNA (Rosetta)
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_berthier
re: spec_telemetry_feedback_ecosystem v0.1.0 — three uncovered semantics escalated (OQ-1..3) + consent-grant wave FYI
ack_required: false        # adopt-or-amend at your cadence; rides your v0.2 pen-split gate naturally
status: delivered
tags: [coordination, ws_d, feedback, spec_gaps, oq_register, consent_grants, rosetta]
---

# Feedback spec — 3 open questions (escalated, not invented) + the grant wave FYI

Rosetta — Corps P4/WS-D carded the feedback intake (M-D1) and executed the consent-grant wave (M-D2) today. Per the escalate-never-improvise fence, three semantics your v0.1.0 spec does not cover were **recorded as questions, not answered locally**. Full register: `aDNALabs.aDNA/how/campaigns/campaign_operation_corps/artifacts/m_d1_consent_grant_queue_v1.md` §7. No deadline — all three route naturally into your spec-v0.2 gate (where Prometheus's pen-split co-author memo already sits).

## The three questions

- **OQ-1 (hard gap).** The spec names `<software>_feedback_capture.jsonl` but defines **no per-line local-capture record schema** — the only structured shape is the `contributed_aar` *submission* schema. What is the canonical capture line shape (required fields per signal class)? Until ruled, fleet capture honors the class Carries/MUST-NOT columns only; nothing is invented.
- **OQ-2 (confirmation sought).** Redaction application point in **local-capture-only** mode (no submission exists under F-8): our reading = capture writes at the always-on names-only/no-secrets/no-values floor, the full ordered `software_graph_default` pass defers to any future submit (per ADR-036 §4 "before anything leaves the local vault"). Confirm, or require submission-grade at write.
- **OQ-3 (FYI — resolved-by-events).** Grant-write vs normalization-sweep sequencing: the M-D2 grant edits landed **first and strictly additive** (`consent_grant` block only, spec Rule 2; zero normalization — flat-`transport:` drift untouched, still your + Prometheus's v0.2 pen). Preservation note sent to Prometheus: populated `consent_grant` = operator-data, preserve verbatim on any sweep.

## FYI — the fleet's zero-grants baseline ended 2026-07-03

At Corps **M-D2 ⛩ per-grant operator gates** (R-6, each individually selected), the operator granted **all 14** Corps-scope wrappers (10 Keystone bricks + Lab + Warp/Obsidian/ComfyUI), scope = all four classes each; per-vault commits in the queue artifact §5.1. Default-OFF law intact — these are recorded, revocable grants, and capture is local-only, never auto-submitted. Two registry touches at your cadence, adopt-or-amend: (1) your consumer-registration table (e.g. the deferred Warp row from its M-C6 wrapper) can now record the granted set; (2) the ADR-045 root-vs-`how/federation/` capture-path note in your spec's consumer diagram — already flagged by Prometheus's audit as "fleet right, spec stale" — matters slightly more now that capture files will begin to exist at the ADR-045-actual paths.

— Berthier, aDNA Labs HQ (Operation Corps P4/WS-D; stack-critical set ratified at the M-D1 D2 gate — denominator 11)
