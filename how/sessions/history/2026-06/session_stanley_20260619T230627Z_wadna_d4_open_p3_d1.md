---
type: session
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_rosetta
tags: [session, operation_adna, campaign_website_adna, decision_4, p3, d1, credibility_integrity, tier2]
session_id: session_stanley_20260619T230627Z_wadna_d4_open_p3_d1
user: stanley
started: 2026-06-19T23:06:27Z
status: completed
completed: 2026-06-19
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
files_created:
  - site/src/data/canonical.ts
  - site/tests/gates/gate-14-single-source.spec.ts
  - site/tests/gates/gate-15-credibility.spec.ts
  - site/tests/gates/gate-16-public-meta.spec.ts
  - how/campaigns/campaign_website_adna/missions/artifacts/aar_decadal_d1_credibility_integrity.md
files_modified:
  - STATE.md
  - how/campaigns/campaign_website_adna/missions/mission_wadna_p2_design.md
  - how/campaigns/campaign_website_adna/missions/mission_wadna_p3_iterate.md
  - how/campaigns/campaign_website_adna/campaign_website_adna.md
  - how/campaigns/campaign_website_adna/CLAUDE.md
  - how/campaigns/campaign_operation_adna/coordination_ledger.md
  - site/src/utils/seo.ts
  - site/src/components/common/Header.astro
  - site/src/components/common/Footer.astro
  - site/src/components/sections/NetworkDiagram.astro
  - site/src/content/docs/social-sharing.mdx
  - site/src/data/home.ts
  - site/src/pages/learn/what-is-adna.astro
  - site/branding.json
---

## Activity Log

- 23:06 — Session started. Operator answered the Operation aDNA next-arc gate (AskUserQuestion): **(1) WEBSITE Decision 4 → open P3** (D1 credibility-first); **(2) C-1 = repoint-to-public-image** (point proofs at resolving `aDNA-Network/aDNA` paths; do NOT publish `aDNA.aDNA`; stage-2 = Hearthstone base at keystone). Plan approved (`please-read-the-claude-md-robust-barto.md`).
- 23:06 — `git pull` clean (HEAD `2400b72`); no conflicting active sessions. Read P2/P3 missions, IMPROVEMENT-SPECS / DECADAL-PLAN, campaign master, coordination ledger; verified SP-1 canonical source exists (`install_truth.json.canonical_repo_https` + `verified_paths`) and the C-1 prose-reconcile need on `what-is-adna.astro`.
- 23:10 — **Part A (governance) DONE** + committed `045d661`: P2 mission `completed` (5 Decision-4 flags resolved) · P3 mission `in_progress` (4-decade backbone, D1 active) · WEBSITE master P2/P3 rows + Decision-4 row · promoter → Phase 3 · coordination_ledger C-1 seam → resolved stage-1 (repoint) · STATE.md.
- 23:25 — **Part B / D1 site work** committed `21789cb`: SP-1 `canonical.ts` → C-3 (3 seo.ts builders + Footer M-9 + branding.json + single-sourced Header/Footer github) → C-1 (7 occurrences repointed to public-image `.adna/` paths + honest prose) → C-2 (3 home.ts demos = real triad/CLAUDE.md/live-mission) → C-4 (NetworkDiagram data-driven from vaults.json). **GOTCHA caught: `install_truth.json.verified_paths` is wrong** — skills/templates live under `.adna/`, not root; 3 of 5 first-draft C-1 links 404'd → probed live, corrected to `.adna/` paths, all 5 now 200. Build 163pp clean; pt19 data files untouched.
- 23:35 — **Gates (G4/G5/G6/G7)** committed `6009003`: gate-14 single-source · gate-15 credibility (JSON-LD publisher + link integrity) · gate-16 public-meta. Baseline **140 → 159**, all green.
- 23:42 — **D1 decadal AAR** (independent 3-persona panel — rotation rule honored): Skeptic A4/D5 (approve) · Funder E4 (approve-w-changes) · Archivist J5 (approve). 1 **Medium** honesty finding (the `/learn` CLAUDE.md excerpt caption implied browsability of a private-vault file) **fixed in-decade** + homepage demo-03 heading aligned to the real file → committed `4704af3`. AAR filed: `aar_decadal_d1_credibility_integrity`. Build 163pp clean; 159/159 gates. P3 mission D1 row → GO-pending-gate; STATE updated.

## SITREP

**Completed:**
- **WEBSITE Decision 4 enacted → P3 opened** (Part A): `mission_wadna_p2_design` `completed`; `mission_wadna_p3_iterate` `in_progress` with the 4-decade backbone; masters/ledger/promoter/STATE swept; C-1 seam resolved as **repoint-to-public-image** (operator declined publishing `aDNA.aDNA`).
- **D1 (credibility-integrity) decade — DELIVERABLES COMPLETE, GO** (Part B): the 4 Criticals cleared under SP-1 (single canonical source `site/src/data/canonical.ts`): **C-1** dead proof-links → resolving public-image paths + honest prose (5/5 live-200); **C-2** fabricated home code → real vault excerpts; **C-3/M-9** publisher drift → "aDNA Network" canonical (0 `LatticeProtocol` refs; 102 pages' JSON-LD); **C-4** false "data-driven" diagram → genuinely data-driven from `vaults.json`. **Gates G4/G5/G6/G7 wired** (baseline 140→159). Independent 3-persona panel **APPROVED** (A4/D5·E4·J5); 1 Medium fixed in-decade. Build 163pp clean; commit-only (4 commits).
- Guardrails held: **no `.adna/` writes**; **Honor pt19** (`vaults.json`/`install_truth.json` untouched; C-4 names = verify-after-pt19); **commit-only / no deploy**; site stays **v2.2 / 14 types** (released standard); `npx astro build` throughout.

**In progress:** none — D1 deliverables done + verified.

**Next up:** **operator decade-gate GO** on D1 → open **D2** (nav-serialization / docs structure; SP-2 → H-1/H-2; the single highest-leverage structural fix; gate G2 → blocking). Hearthstone P2 remains the ready Track-B arc for a later gate.

**Blockers:** none. Decade advance is a human gate (Standing Order #8) — D1 held GO-pending; D2 not opened.

**Files touched:** 6 created + 14 modified in-repo (see frontmatter) + 3 memory files (outside repo). Commits: `045d661` · `21789cb` · `6009003` · `4704af3`.

**Follow-ups (non-blocking, in the D1 AAR):** (1) install-truth generator bug — `verified_paths` records root paths for files that live under `.adna/` (benign for the site; flag to the install-truth owner). (2) Public-image `LICENSE` copyright holder is "Lat Labs" vs the footer "aDNA Network" — cross-vault (Berthier/aDNALabs). (3) C-1 **stage-2** at keystone → point proofs at Hearthstone's published base. (4) C-4 **verify-after-pt19** → confirm diagram labels = keeper-set names.

## Next Session Prompt

Operation aDNA (`campaign_operation_adna`) Track A = WEBSITE.aDNA (`campaign_website_adna`). **WEBSITE Decision 4 was approved 2026-06-19 → P3 is OPEN; Decade 1 (credibility-integrity) is DELIVERABLES-COMPLETE with a GO verdict, held at the decade-AAR human gate.** D1 cleared the 4 Criticals under a single canonical source (`site/src/data/canonical.ts`): C-1 dead proof-links → resolving public-image (`aDNA-Network/aDNA`, incl. `.adna/` standard tree) paths + honest prose (5/5 live-200; **operator chose repoint-to-public-image, NOT publishing the private `aDNA.aDNA`**); C-2 fabricated home code → real vault excerpts; C-3/M-9 publisher → "aDNA Network" canonical; C-4 diagram → genuinely data-driven from `vaults.json`. Gates G4/G5/G6/G7 wired (`tests/gates/gate-14/15/16`; baseline **159**). Independent 3-persona panel approved (A4/D5·E4·J5); AAR = `missions/artifacts/aar_decadal_d1_credibility_integrity.md`. Commit-only (`045d661`·`21789cb`·`6009003`·`4704af3`); **nothing deployed** (joined deploy waits for the program keystone DP2). **The decision now is the operator's: GO the D1 decade-gate → open D2** (nav-serialization / docs structure — SP-2 → H-1/H-2, the highest-leverage single DOM fix; gate G2 → blocking; spec in `IMPROVEMENT-SPECS.aDNA`/`DECADAL-PLAN.aDNA`), **or** switch to **Hearthstone P2** (`template_home_claude.md` + Step-0 router — the ready Track-B arc). HARD CONSTRAINTS (unchanged): no `.adna/` writes till Hearthstone P5 · Honor pt19 (no `sync:vaults`/`vaults.json` edits; C-4 names + H-10 = verify-after-pt19) · commit-only/no deploy until keystone · site stays **v2.2/14-types** (16/v2.3 is Hearthstone-P5-gated) · build with **`npx astro build`** (NOT `npm run build` — its prebuild regenerates vault data). GOTCHAs: `install_truth.json.verified_paths` lists root paths for files that actually live under `.adna/` (don't trust it — probe live); STATE.md is 60K-tokens (Read refuses it — use `mcp__filesystem__edit_file` or `sed`/`grep`). Plan: `~/.claude/plans/please-read-the-claude-md-robust-barto.md`.
