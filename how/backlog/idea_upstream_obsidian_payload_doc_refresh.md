---
type: backlog_idea
status: accepted
priority: high
finding_id: OBS-UP-2   # Obsidian.aDNA P1 synthesis §5 #2 · drifts D2 + D3
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (.obsidian/README.md + OBSIDIAN_CLAUDE.md + adr_001_obsidian_as_knowledge_platform.md)
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea_upstream, obsidian, doc_drift, readme, obsidian_claude_md, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_upstream_obsidian_seed_canonicalization.md  # if the template adopts the rich seed, this sweep rides that change
fold_batch: champollion_m6_1_rc
---

# idea_upstream — one doc-sweep over the `.adna` Obsidian payload docs (the only real upstream config drift)

**Filed by Obsidian.aDNA** (Operation Athenaeum P1 discovery, drifts **D2 + D3**; routed per ADR-007, operator-gated at M06). P1's template-comparison verdict: the `.adna` `.obsidian/` **config** is *cleaner than the live fleet* — the docs describing it are the only true upstream drift.

## The drift

- **`.adna/.obsidian/README.md` (D3)** — lists **phantom plugins** (`omnisearch` / `terminal` / `folder-notes` — not in the roster); **misses real ones** (BRAT, termy-era ids); wrong count. An M3.1 AAR claimed this fixed; the README is still stale.
- **`.adna/.obsidian/OBSIDIAN_CLAUDE.md` (D2)** — stale plugin count; cites the **orphan `advanced-canvas` id** (should be `obsidian-advanced-canvas`); stale snippet line-counts.
- **`adr_001_obsidian_as_knowledge_platform.md`** — references Folder-Notes/Git-plugin enablers no longer in the posture.

## Proposed fix

One sweep bringing all three into agreement with the actual shipped payload (whatever roster the template carries at sweep time — see the canonicalization proposal for the bigger move).

## ⚠ 2026-06-10 refresh — the original ask is PARTIALLY INVERTED

The P1-era text said "add `settings-search`; count→15." **Do not add `settings-search`**: it was **retired from the Obsidian.aDNA rich-canonical roster 2026-06-10** (M06 UX-1 — fails to load on Obsidian ≥1.13, *"not compatible with Obsidian v1.13.1"* live toast; Obsidian 1.13's native settings search supersedes it; ADR-006 Amendment 2). The current rich-canonical roster is **14 ids** (`Obsidian.aDNA/what/obsidian/seed/community-plugins.json` is the source of truth). Whichever roster the template documents, the sweep should document the roster **as shipped**, and note retired ids (`termy`, `settings-search`, the orphan `advanced-canvas`) as never-re-seeded.

## Trace

- Obsidian.aDNA `what/context/obsidian_template_delta.md` §6 (p1_03 §8.1) · `obsidian_operation_playbooks.md` drift #1–2 (p1_07 §9.1–2) · synthesis §1 D2/D3 + §5 #2
- Roster state: `spec_plugin_tier_roster` Amendments 1–2 · `adr_006_plugin_tier_policy` Amendments 1–2

> **Triage 2026-06-23 (Cornerstone v8.1):** REFRAMED — follow-up: refresh .obsidian/README.md + OBSIDIAN_CLAUDE.md to the canonical 14 (do NOT re-add settings-search). Not in v8.1. ([[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]] reconciliation; [[adr_038_combined_v81_release]]).


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).
