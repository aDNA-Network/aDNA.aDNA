---
type: session
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_rosetta
tags: [session, operation_adna, campaign_website_adna, decision_4, p3, d1, credibility_integrity, tier2]
session_id: session_stanley_20260619T230627Z_wadna_d4_open_p3_d1
user: stanley
started: 2026-06-19T23:06:27Z
status: active
tier: 2   # touches shared site/ configs (canonical source, seo.ts, branding.json, gates)
intent: "Operation aDNA — operator picked WEBSITE Decision 4 → open P3 (D1 credibility-first); C-1 = repoint-to-public-image (not publish aDNA.aDNA). Part A: enact Decision 4 (close P2, open P3, sweep masters/ledger/STATE/memory). Part B: execute D1 credibility-integrity decade — SP-1 canonical source → C-3/C-1/C-2/C-4 + wire gates G4/G5/G6/G7 → per-unit done-definition + decadal AAR. Constraints: Honor pt19 (no sync:vaults / vaults.json edits; C-4 names = verify-after-pt19); no .adna writes (Hearthstone P5); commit-only/no deploy; npx astro build (not npm run build); site stays v2.2/14-types (released standard)."
plan: "~/.claude/plans/please-read-the-claude-md-robust-barto.md"
scope:
  - how/campaigns/campaign_website_adna/**         # P2 close, P3 open, master sweep
  - how/campaigns/campaign_operation_adna/coordination_ledger.md  # C-1 seam resolution
  - STATE.md
  - site/src/**                                     # D1 site fixes (canonical source, seo, home, diagram, proof-links)
  - site/branding.json
  - site/tests/gates/**                             # G4/G5/G6/G7
conflict_scan: "none — how/sessions/active/ empty at start; git clean @ 2400b72"
files_created: []
files_modified: []
---

## Activity Log

- 23:06 — Session started. Operator answered the Operation aDNA next-arc gate (AskUserQuestion): **(1) WEBSITE Decision 4 → open P3** (D1 credibility-first); **(2) C-1 = repoint-to-public-image** (point proofs at resolving `aDNA-Network/aDNA` paths; do NOT publish `aDNA.aDNA`; stage-2 = Hearthstone base at keystone). Plan approved (`please-read-the-claude-md-robust-barto.md`).
- 23:06 — `git pull` clean (HEAD `2400b72`); no conflicting active sessions. Read P2/P3 missions, IMPROVEMENT-SPECS / DECADAL-PLAN, campaign master, coordination ledger; verified SP-1 canonical source exists (`install_truth.json.canonical_repo_https` + `verified_paths`) and the C-1 prose-reconcile need on `what-is-adna.astro`.

## SITREP
*(filled at close)*

## Next Session Prompt
*(filled at close)*
