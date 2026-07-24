---
type: ratification_record
title: "Ratification Ceremony — Refit G2 (DP9: vNext roadmap + successor release stub)"
status: accepted   # SIGNED 2026-07-24 — operator ratified the M5 vNext roadmap + DP9 per recommendation; surface_composition_graph slotted v2.6-candidate
gate: "Refit G2 (P3 → P4)"
ratifier: "Stanley, Founding Architect"
ratified_date: 2026-07-24
ratifying_session: session_stanley_20260724T001439Z_refit_m5_vnext_triage
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [ratification_record, decision, ceremony, refit, g2, dp9, vnext_roadmap]
---

# Ratification Ceremony — Refit G2

> Entry Point B (ceremony record) per [[template_ratification_record]], adapted to the single G2 decision point
> (DP9). Agent-authored at `proposed`; **only the named operator advances the row — and the roadmap — to
> accepted** (§7.7). Sibling: [[ratification_record_refit_g1]] (G1, DP1–DP8).

## 1. Ceremony header

| Field | Value |
|-------|-------|
| **Gate** | Refit G2 — ratifies [[vnext_roadmap]] (`proposed → accepted`) + DP9 |
| **Ratifier** | Stanley, Founding Architect (agent Rosetta = author/steward, never ratifier) |
| **Gate / reference** | Two AskUserQuestion lanes in `session_stanley_20260724T001439Z_refit_m5_vnext_triage`; approved plan `please-read-teh-claude-md-virtual-piglet.md` |
| **Ratification date** | **2026-07-24** (in-session, same day as M5 close) |
| **Scope of authority** | The M5 vNext roadmap + DP9 only. **No normative standard/governance surface is authorized** — v8.9 is a *queued* release, fired later via `skill_template_release`; the v2.6 candidates stay charted-not-opened. |

## 2. DP roster

| # | DP | Decision | Recommendation (author) | Ruling (operator, 2026-07-24) |
|---|----|----------|-------------------------|-------------------------------|
| 9a | DP9 | Ratify the vNext roadmap (v8.9 governance batch as successor release queue; v2.6 items stay candidates) | Ratify all as recommended | **ACCEPTED as recommended** (lane 1) — "Ratify all as recommended" |
| 9b | DP9 | `surface_composition_graph` Platform-subtype ADR slotting | v2.6 candidate (charted, not built); author dev-side when Dashboards.aDNA matures | **ACCEPTED — v2.6 candidate (charted, not built)** (lane 2) |
| 9c | DP9 | Materialize the successor release stub | Create `how/campaigns/campaign_v8_9_release/` at `status: planned` | **APPROVED** (bundled in lane 1 "Ratify all") |

## 3. What the sign authorizes

1. [[vnext_roadmap]] advances `proposed → accepted`. The **v8.9 governance batch** (7 items, +1 skill
   `skill_state_graduation`) is the ratified successor-release queue.
2. `how/campaigns/campaign_v8_9_release/` is **materialized at `status: planned`** from
   [[stub_campaign_v8_9_release]]. It is a *planned* campaign — it **fires later** (post-Refit) via
   `skill_template_release`, per the v8.6/8.7/8.8 lineage. Governance bump 8.8 → 8.9; standard v2.5 held.
3. The two **v2.6 candidates** (`task` entity · `surface_composition_graph` subtype) remain **charted, not
   opened** — a future standard window, consistent with G1/DP2's fixed "v2.6 candidate, not in motion." No
   v2.6 window opens in Operation Refit.

## 4. No-contradiction invariants

- DP9b does not contradict G1/DP2: both keep the standard-window items as *candidates*. The B1 memo already
  transmitted "v2.6 candidate, not in motion" to Operations; this ceremony refines nothing that memo said.
- Materializing `campaign_v8_9_release` at `status: planned` ships **nothing** — hard-constraint 3 (no normative
  surface) holds; the release only fires when its own campaign opens and `skill_template_release` runs.

## 5. Constitutional carry-forward

- On sign: roadmap `accepted`; stub → live campaign dir at `status: planned`; Refit advances **P3 → P4** (M6
  dev-readiness; E1 in scope, E2 stretch per DP8 — note `idea_upstream_vault_card_edge_population` feeds E2).
- DP10 (close + push election) ratifies at **G3** — the accumulated local commits (now incl. this sign) and the
  5 `staged_for_delivery` memos ride that election (the ADR-022 lesson).

## 6. Persona ratification status

- Rosetta — survives; charting the standard's own next release is squarely the persona's mandate. No
  falsification event at G2.
