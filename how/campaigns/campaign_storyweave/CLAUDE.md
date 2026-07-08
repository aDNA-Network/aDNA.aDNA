---
type: campaign_governance
campaign_id: campaign_storyweave
persona: rosetta
status: proposed
created: 2026-07-07
updated: 2026-07-07
last_edited_by: agent_rosetta
tags: [campaign, storyweave, governance]
---

# Campaign governance — Operation Storyweave

**Charter:** [[campaign_storyweave]] (`status: proposed` — awaits **O8 operator ratification** → `active`; do not begin build missions until ratified). **Persona:** Rosetta.

**What this is.** The build campaign that executes the adna.network best-in-class refresh, chartered by the planning mission [[mission_site_story_review_charter]]. Goal: raise the site to a best-in-class visual/professional/credible bar + tell the aDNA story so a stranger *gets it and wants it* — **without breaking the SS-Ghibli identity or the radical-honesty voice.**

## Evidence base (read before any mission)
The full review corpus lives in `how/missions/artifacts/storyweave_review/`:
- `o6_synthesis_backlog.md` — the prioritized backlog (B1–B13) → the phases.
- `o4_redteam_matrix.md` — the ranker matrix + 2 skeptics + themes **T1–T8**.
- `o5_story_audit.md` — narrative levers (reframe · hero-artifact · proof-of-life).
- `governance_and_mission_resolution.md` — progressive **decentralization** + **humanization** (bake into P1).
- `reference/storytelling_doctrine_deltas.md` — storytelling doctrine S1–S7.
- `findings_o3.md` + `scope_note.md` + `screens/` (66, reproducible via `scripts/visual_capture.mjs`).

## Standing conventions
1. **Instrument = headless.** All visual inspection via the **T0 harness** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse) per [[doctrine_visual_inspection]] — **never assume Chrome**. Every visual finding cites a screenshot.
2. **Persona gate every phase.** `skill_decadal_aar` Reviewer-Lens-Pass + adopter ranker; adopter ranker = the hard gate (**≥4.0** → capstone **≥4.95**). The Movement-Skeptic gates every copy change (honesty guardrail).
3. **Register guardrail.** Warm · calm · **honest** (~55/45 dial). The remedy is always *more proof + more honesty* — never hype, invented people, or inflated community.
4. **Planning→build boundary.** `site/` edits happen **only inside ratified missions**; each phase ends at an operator ship-gate + the `site/` gate-suite (`npm run test:gates`) + a Lighthouse budget.
5. **Scope boundaries.** Route data-currency → Hestia (Home.aDNA); deploy-perf → Vitruvius (WebForge.aDNA); defer full i18n + the social layer.
6. **Git-Ops.** Local-first; explicit-path staging; push operator-gated; gitleaks pre-push. Follow `aDNA.aDNA/CLAUDE.md` §Git-Ops.

## Missions
`missions/` (authored per phase, `template_campaign_mission`). Phases P0–P5 / 11 missions per the charter's Phases & Missions table.
