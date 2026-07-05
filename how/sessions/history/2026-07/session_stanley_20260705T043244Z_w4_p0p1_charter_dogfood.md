---
type: session
session_id: session_stanley_20260705T043244Z_w4_p0p1_charter_dogfood
created: 2026-07-05
updated: 2026-07-05
status: completed
last_edited_by: agent_stanley
campaign: campaign_w4_governance_doctrine
mission: mission_w4_p1_dogfood_self_drift
tags: [session, w4, governance_doctrine, charter, dogfood, f7, tier2]
---

# Session — W4 P0 charter + P1 dogfood (aDNA.aDNA self-drift)

**Intent:** "continue the campaign" → Fleet Re-Seed is closed (P5, `completed` 2026-07-05); the operator opened its
documented successor, **W4 governance-doctrine adoption**, at full scope (AskUserQuestion, this session). Execute
**P0 (charter)** + **P1 (dogfood)** in one session: charter `campaign_w4_governance_doctrine`, then close **F7** by
adopting the v8.4 consumer-facing doctrine in aDNA.aDNA's *own* `CLAUDE.md`, and crystallize the reusable per-vault
adoption checklist (the instrument P2 rolls to Tier-A).

## Scope declaration (Tier 2 — shared-config edits)
- **Shared configs touched:** `CLAUDE.md` (own governance; version 6.0→8.4 + 5 doctrine adds), `STATE.md` (campaign banner).
- **New files:** campaign charter + campaign CLAUDE.md + P1 mission + `v8_4_adoption_checklist.md` artifact + AAR + this session.
- **Backlog:** `idea_fleet_reseed_w4_governance_doctrine.md` → `status: promoted`.
- **Out of scope:** P2 Tier-A rollout (38 vaults) + P3 close — separate operator gates. No cross-vault writes. No push (operator-gated).

## Conflict scan
- `how/sessions/active/` empty at start (no concurrent session). Working tree clean at HEAD `7452422`.

## Heartbeat
- Started 2026-07-05T04:32Z.

## Completed
- **P0 (charter):** opened `campaign_w4_governance_doctrine` (Operation Concord) — charter + campaign `CLAUDE.md` quick-start + the reusable **`v8_4_adoption_checklist.md`** instrument (per-vault checklist + applicability model project/node/router). Promoted the backlog stub `idea_fleet_reseed_w4_governance_doctrine` → `promoted`.
- **P1 (dogfood, BLOCKING):** adopted the v8.4 consumer-facing doctrine in aDNA.aDNA's **own** `CLAUDE.md` — gov `6.0→8.4`; new `## Governance Doctrine (v8.4)` section (§7.7 ratification · credential-routing broker=Home.aDNA · AskUserQuestion discipline · single-writer-lease · executor_tier) + SO-11 executor_tier clause + version markers + Standing-Rules-5–7 applicability ruling. **Finding F7 CLOSED** (scorecard annotated, append-only). Mission `mission_w4_p1_dogfood_self_drift` → `completed` + AAR (est 60 / actual ~68 kT).
- **STATE.md:** frontmatter narration log prepended + new top QUEUED banner (W4 OPENED); charter phase table M0/M1 → completed.

## SITREP
- **Completed:** P0 + P1 of Operation Concord in one session; F7 (aDNA.aDNA self-drift) closed; the reusable adoption instrument crystallized.
- **In progress:** none.
- **Next up:** **P2 (Tier-A rollout, 38 vaults)** — an OPERATOR PHASE-GATE (Standing Order 1), plus **DP1**: choose the cross-vault execution model (guest-visit / coord-memo / hybrid) before touching any other vault.
- **Blockers:** none. Non-blocking follow-up: a local `template_ratification_record` is missing (it ships in the v8.4 set in `.adna/`) — tracked in the P1 AAR.
- **Files touched:** (new) campaign charter + campaign CLAUDE.md + `mission_w4_p1_dogfood_self_drift` + `v8_4_adoption_checklist` + this session · (mod) `CLAUDE.md` · `STATE.md` · `idea_fleet_reseed_w4_governance_doctrine` · `fleet_reseed_scorecard` (F7 annotation). All **LOCAL — unpushed** (push operator-gated).

## Next Session Prompt
Operation Concord (`campaign_w4_governance_doctrine`, the Fleet Re-Seed W4 successor) is **active**; **P0 (charter) + P1 (dogfood) are complete** — aDNA.aDNA's own `CLAUDE.md` now runs v8.4 doctrine (F7 closed) and the reusable per-vault instrument is `campaign_w4_governance_doctrine/artifacts/v8_4_adoption_checklist.md`. The next phase is **P2 — Tier-A rollout** across the 38 remaining Tier-A vaults (roster: `campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md`), which is an **operator phase-gate** (do not auto-advance, SO#1) and needs **DP1** decided first: the cross-vault execution model — (a) guest-visit (Rosetta adopts host persona, edits + commits locally per vault), (b) coord-memo (stage adoption memos to each host persona), or (c) hybrid — because P2 writes into other vaults' `CLAUDE.md` (workspace Rule 10: no silent cross-vault writes). Apply the checklist per its applicability column; per-vault commits local, pushes operator-gated (SO-9). If this session's docs weren't pushed, that remains operator-gated. Also queued: author a local `template_ratification_record`.
