---
type: campaign_artifact
campaign: campaign_meridian
title: "Meridian Commit Ledger — per-mission commits + push state"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
tags: [meridian, commits, ledger]
---

# Meridian Commit Ledger

Every campaign commit, by mission, with push state. Pushes are operator-gated (DP3 at close; Git-Ops
rule 3). Pre-campaign carry-over: `f0d3363` (Concord Home node-pass record) — unpushed at charter.

## aDNA.aDNA (this vault)

| Mission | Commit | Scope | Pushed? |
|---------|--------|-------|---------|
| M0 | `24e7d85` | Charter + scaffold + baseline + STATE banner + stale-session archive | HELD (DP3) |
| M1 | `d6e9179` | 2 Wilhelm memos + template_ratification_record (41→42, index synced) + idea closed | HELD (DP3) |
| M1 (register) | `3e9e66a` | Concord ledger: Wilhelm memos STAGED (exceptions 2/4 addressed) | HELD (DP3) |
| M3+M4+M5 | `eb82e57` | Findings ledger (A1–A7, B1–B10) + v8.6 RC + 3 mission AARs | HELD (DP3) |

## Sibling vaults (M2 count-drift; pushes HELD)

| Vault | Commit | Scope | Evidence (claimed → actual counts) | Pushed? |
|-------|--------|-------|-------------------------------------|---------|
| ContextCommons.aDNA | `37f0ae5` | MANIFEST + README | skills 13→14; templates 22→34 (×4 README sites; list extended w/ 12 CC names); validate 5→0 count errors | HELD (DP3) |
| Network.aDNA | `92cb7bf` | MANIFEST only | templates 22→23 (×2); skills 13→38; validate 3→0; README absent | HELD (DP3; SO-9 vault) |
| Oration.aDNA (branch `master`) | `e0e6293` | MANIFEST + CLAUDE | templates 25→23 (×3); skills 26→24 (×3); validate 5→0 count errors (2 pre-existing non-count errors remain = harness-injection, F-MER-A8) | HELD (DP3) |
| ZenZachary.aDNA | `78f7190` | MANIFEST + CLAUDE | templates 22→23 (×4 incl. table row + list entry added); skills 13→25; validate 4→0, no warnings | HELD (DP3) |

**M2 verdicts**: 4/4 proceeded (no concurrent lanes found); no vault was drift-free; 17 tool-flagged + 4 tool-missed-but-genuine claims fixed; explicit-path staging held (zero noise leakage); `adna_validate --governance` after-pass = authority (a manual 200-char-truncated scan missed one claim; the tool caught it).
