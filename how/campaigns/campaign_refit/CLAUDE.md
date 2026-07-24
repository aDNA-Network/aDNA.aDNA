# CLAUDE.md — Campaign: Operation Refit (post-launch consolidation)

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_refit` |
| Owner | stanley · Persona: Rosetta |
| Status | **active** — G1 SIGNED 2026-07-21 (same-session as charter; all 8 DPs accepted as recommended; "Ratify + fire quick wins"). Record: `artifacts/ratification_record_refit_g1.md`. |
| Current Phase | **G2 SIGNED (2026-07-24) → P4 Ready** — DP9 ratified "all as recommended" ([[ratification_record_refit_g2]]): v8.9 governance batch = the accepted successor release queue; `surface_composition_graph` = v2.6-candidate (charted, not built); **`campaign_v8_9_release` materialized at `status: planned`**. `vnext_roadmap.md` → `accepted`. **Next = P4 Ready** (M6 dev-readiness — E1 in scope, E2 stretch per DP8; `idea_upstream_vault_card_edge_population` feeds E2) → P5 Close → G3. P3 Chart: M5 vNext triage COMPLETE (32 ideas dispositioned). P2: M3+M4. P1: M2 + M1. No normative surface shipped (v2.5/8.8 hold). |
| Executor tier | opus (campaign); M2 = sonnet (mechanical regen). Every mission carries SO-11 `token_budget_estimated`. |
| Deadline | **2026-07-31** — the B1 vNext `task`-slot answer to Operations (tracker `20260521090500` re-checks 07-25). Hard constraint 8: if G1 slips past 07-24, fire the DP2 micro-ratification standalone. |

## Quick Start

1. Read this file (auto-loaded)
2. Read `campaign_refit.md` — master charter (goal, phases/gates, missions, DP1–DP10, hard constraints)
3. Read `artifacts/sitrep_2026_07_21_state_of_the_estate.md` — the evidence base (state of the estate, all A–E work-inventory rows)
4. Check the gate: if G1 is unsigned, the only permissible work is P0 refinement or presenting G1; if signed, read `artifacts/ratification_record_refit_g1.md` for the rulings, then claim the next mission (M1 first — deadline-bound)
5. Create a session file in `how/sessions/active/` and begin

## Key Files

| File | Purpose |
|------|---------|
| `campaign_refit.md` | Master charter — scope, phases, missions, DPs, risks, hard constraints |
| `missions/mission_refit_1..6_*.md` | The 6 mission specs (objectives mapped to A–E inventory IDs) |
| `artifacts/sitrep_2026_07_21_state_of_the_estate.md` | Comprehensive SITREP/AAR — the P0 evidence base |
| `artifacts/ratification_record_refit_g1.md` | The G1 DP packet (DP1–DP8; §7.7 ceremony record, `status: proposed`) |
| `artifacts/draft_coord_rosetta_to_berthier_vnext_task_slot_and_adr022.md` | Staged B1+B2 outbound answer — finalized + committed at M1 post-G1 |
| `who/coordination/coord_2026_07_21_hestia_to_rosetta_inventory_refresh_and_tagline_finding.md` | The Hestia inbound that drives M2 (A1–A4) |

## Standing Orders

- **Phase gates are human gates.** G1/G2/G3 are operator decisions; agents author + stage, the operator rules
  and signs. Never auto-advance; never self-ratify (the ADR-045 failure mode).
- **Never re-open Storyweave or Distillery.** Both are `completed` + "DO NOT re-open." Reconciling their record
  = dated annotations in Refit's own artifacts (or appended notes), never re-opened work.
- **Never solo-build the in-person deferred items** — hero-letterbox re-cut + R1 demo screencast (M5.1b). They
  are operator-held dev-rel work; landing both re-ranks the Storyweave capstone ≥4.95.
- **No normative surface ships.** Standard stays v2.5; governance stays 8.8. Adopted patterns/concepts land
  dev-vault-side; they reach the template only when the successor release campaign fires
  (`skill_template_release`).
- **Image-side work: stage, don't edit.** Anything destined for `.adna/` or the public repos is authored as
  DE-LINKed staged artifacts in `artifacts/` (Distillery SR1 discipline).
- **Commit-no-push.** Surgical path-scoped commits (never `git add -A`); push is a G3 operator election. Every
  outbound coord memo's frontmatter names its delivery dependency (the ADR-022 lesson — silence must be
  impossible to miss).
- **Headless-first visuals** — T0 `scripts/visual_capture.mjs` (+`--axe`), light theme first in `themes[]`
  (the axe harness analyzes only `themes[0]`); never assume Chrome.
- **STATE.md discipline** — anchor-insert via python; single-writer lease (re-read `updated` before write,
  stamp on write); one STATE edit batch per session.
- **Site changes ride the gates** — `npm run test:gates` + `npx astro build` before any ship-claim; deploys
  (if any) via `vercel --prebuilt --prod` with `VERCEL_TOKEN=$SS_VERCEL_TOKEN` and `${VAR:+SET}`-style
  redaction only (a `${VAR:-…}` fallback leaked the token once).

## Delegation Notes

Picking this up fresh: the charter is complete and every mission is pre-specced with objectives mapped to the
A–E work-inventory IDs (defined in the charter §Scope + the SITREP). **Sequence is deadline-driven**: M1 first
(the B1 answer must transmit ≤07-24, hard-due 07-31), M2 second (mechanical, green-tested — `npm run
sync:vaults` then commit `site/src/data/vaults.json` alone), then M3/M4 in either order (M3+M4 pair well in one
session), M5 (the big triage — split at the 5-deep/25-light seam if hot), M6 last. The single biggest traps:
(1) ruling something at mission-level that G1/G2 reserved for the operator — check the ratification record
before treating any DP as settled; (2) gitignoring evidence a committed doc still cites — M4's fixed order is
commit-slim-set → ignore → fix-refs → dangle-check; (3) letting an outbound memo sit local and unannounced —
frontmatter delivery-dependency + the G3 undelivered-items list.
