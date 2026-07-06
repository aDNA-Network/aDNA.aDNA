---
type: mission
mission_id: mission_meridian_m2_count_drift
campaign: campaign_meridian
status: completed
executor_tier: opus
token_budget_estimated: 70
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p1, concord_followup, hygiene, cross_vault]
---

# M2 — Count-drift hygiene ×4 sibling vaults

Concord P2 flagged pre-existing MANIFEST/README template/skills count drift in **ContextCommons.aDNA ·
Network.aDNA · Oration.aDNA · ZenZachary.aDNA** ("flag for each vault's own adna_validate-hygiene pass;
NOT fixed here" — [[../../campaign_w4_governance_doctrine/artifacts/p2_adoption_ledger|Concord ledger]]).
This mission executes that pass under **DP0 (resolved 2026-07-06): direct-by-default, memo fallback if
target mid-edit**; Concord surgical discipline.

## Objectives (per vault, serialized — one write-mission per vault)

1. Verify-first recon: git status; fresh session lanes → memo fallback, do not edit.
2. Python-enumerate actual counts (templates/skills/other headline counts) vs claimed in MANIFEST/README
   (+ CLAUDE/AGENTS if they carry counts).
3. Fix the count surfaces only (surgical; no other content).
4. Per-vault explicit-path commit; `adna_validate` zero-NEW-drift; **push HELD** (DP3).
5. Log evidence (claimed → actual) + commit SHA to [[../artifacts/meridian_commit_ledger|commit ledger]].

## AAR

- **Worked**: `adna_validate --governance` as a before/after gate cleared every count error across all 4 vaults (17 tool-flagged + 4 tool-missed-but-genuine claims); serial one-vault-at-a-time + explicit-path staging kept commits surgical (zero noise leakage).
- **Didn't**: The first Oration claim-scan truncated lines to 200 chars and hid a buried MANIFEST claim — needed a second edit+validate loop.
- **Finding**: Drift isn't purely numeric — ContextCommons' README is uncustomized boilerplate (F-MER-A9) and Oration's CLAUDE.md carries a committed harness-injection with operator PII (F-MER-A8); the validator regex also misses `(NN inherited…)`-style claims.
- **Change**: Never truncate claim scans; when bumping a header count, reconcile its own enumerated list/table in the same edit; gate on the validator's after-pass, not manual greps.
- **Follow-up**: F-MER-A8 tip-strip + history-scrub ruling → DP1; F-MER-A9 → CC-hygiene flag; F-MER-A10 version-mismatches → watch; 4 commits await DP3.

**Delivered 2026-07-06**: ContextCommons `37f0ae5` · Network `92cb7bf` · Oration `e0e6293` · ZenZachary `78f7190` (all local, pushes HELD) → [[../artifacts/meridian_commit_ledger|commit ledger]].
