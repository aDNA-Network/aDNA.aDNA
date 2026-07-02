---
type: gate_output
gate_id: champollion_p0_gate
title: "Operation Champollion — G0 ratification record"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: ratified
ratified_by: operator (Stanley)
ratified_via: "in-chat — \"Ratify as Recommended.\" (2026-07-02; gate rendered copy-paste tier, ISS receiver down)"
tags: [gate_output, champollion, g0, ratification, record]
---

# G0 Ratification Record — Operation Champollion

> Operator: **"Ratify as Recommended."** — in-chat, 2026-07-02, against [[champollion_p0_gate|the G0 gate]] as committed at `9aa3506`. All nine decisions resolve to their recommendations. This record is the ratification block downstream work cites (e.g. M1.2's ADR-045 repair cites *this gate + this record*). Ratification-record discipline note: gate ref = `how/gates/champollion_p0_gate.md` · ratifier = operator (Stanley) · date = 2026-07-02 · scope = the nine decisions below, nothing broader.

| # | Decision | Resolution | Arms |
|---|----------|------------|------|
| D1 | Charter ratification | **GO** | `campaign_champollion` `planning → active`; P1 briefs materialized (M1.1–M1.5) this turn; P1 opens |
| D2 | Backlog dispositions (91 items + 3 stale ADRs) | **RATIFIED AS DRAFTED** | [[../campaigns/campaign_champollion/artifacts/backlog_adjudication_ledger|Adjudication ledger]] = decided law; M1.1 executes exactly it (27 discharged-flips · 31 fold-staged · 14 fix/mission · 17 defer · 2 decline); adr_003/012 ratify + adr_027 ratify-with-refresh via M1.2 |
| D3 | ADR-045 disposition | **(b) AMEND-THEN-RATIFY** | M1.2 repairs the ratification record (ratifier/gate-ref/date/scope), reconciles ~216-vs-~208 wrapper count, then marks properly `accepted` citing this gate; ratification-record discipline lands (agents set `proposed` only; validator check + `template_adr` fold proposal) |
| D4 | `98bb488` hold-override exposure | **CONFIRMED ACCEPTED (low)** | Incident closed as accepted-risk; systemic fix = D3's discipline; recorded in [[../campaigns/campaign_champollion/artifacts/governance_retro_package|the retro package]] |
| D5 | v3-ecosystem-compliance seed | **SUPERSEDE-AND-ABSORB** | v3-EC `planned → superseded` (banner; SO-6 file stays); this-vault slices → Champollion M3.3/M6.1; 19-vault fleet pass re-seeds post-launch (owner Rosetta+Hestia; trigger P7 close) |
| D6 | Push the held stack | **PUSH** | `origin main` pushed at this session's close (post-truth-check; gitleaks hook); range `d4be89d..HEAD` |
| D7 | Staged memos | **RELEASED** | Noether ([[../../who/coordination/coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment|alignment/countersign]]) + Prometheus ([[../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|pattern/corpus]]) `staged → filed`; visible on D6 push |
| D8 | `SS_VERCEL_TOKEN` posture | **RE-ACCEPT (standing call re-confirmed)** | No rotation; leak-class mitigation continues (env-var+redact doctrine · sanitizer = Ring-1 #1 in the ledger · M6.3 re-verify) — directive §2.4 question now answered once, not re-asked |
| D9 | Codename | **KEEP "CHAMPOLLION"** | No change |
