---
type: backlog_idea
status: resolved
priority: medium
created: 2026-05-24
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, doctrine, agent_protocol, askuserquestion, contextcompass_origin]
updated: 2026-07-06
fold_batch: champollion_m6_1_rc
---

# Idea — Upstream Doctrinal Pattern: AskUserQuestion as Operator-Resolution Discipline

## Problem / Opportunity

Per ContextCompass strategic-review artifact §1.2 gap call-out 6 (2026-05-24): *"AskUserQuestion as operator-resolution discipline is a load-bearing planning-campaign pattern that hasn't been codified at the workspace level."*

Three instances of the pattern surfaced during the ContextCompass genesis planning campaign (P0–P5):

1. **P0 E1** (2026-05-21) — operator decision at ADR-000 §Consequences emergence (target-vs-self / asymmetric burden of proof / text-in-text-out distinctions).
2. **P5 Session 12** (2026-05-23) — 4-of-5 Open Items resolved at AskUserQuestion at Obj 2 staging gate (E4 consumer pick / E5 platform scope / E5+E6 ordering / III memo timing).
3. **P5 Session 13** (2026-05-24) — Q5 CHANGELOG location resolved at AskUserQuestion.
4. **(S16 added)** — strategic-review artifact gate ceremony: all 5 §6 questions + R-item triage + gate decision via 2 AskUserQuestion batches.

The discipline: **planning agents surface operator-decisions via AskUserQuestion, not unilateral resolution, even when the agent has a confident default**. Defaults exist (the artifact's `default_if_undecided:` fields are explicit defaults), but the agent surfaces the question so the operator records the decision — turning what would otherwise be silent agent unilateral resolution into an operator-attested governance event.

## Proposed Solution

Codify the pattern at the aDNA standard level. Possible homes:

- A short doctrinal section in `aDNA.aDNA/who/governance/governance_agent_protocol.md` (or equivalent) — "Operator-Decision-Surfacing Discipline."
- An entry in the aDNA standard's session-discipline doctrine (alongside Standing Order patterns).
- A worked-example reference for new Framework.aDNA / Platform.aDNA / Org-Vault.aDNA genesis-planning campaigns.

Key elements to codify:

1. **When to surface via AskUserQuestion** — load-bearing decisions whose subtle resolution would otherwise be a silent agent unilateral call; gate ceremonies; decisions whose record requires an operator-attestation timestamp.
2. **The `default_if_undecided:` discipline** — every question carries a recommended default + escape; the recommendation is the agent's confident position; the escape is the operator's authority to override or defer.
3. **Recording resolutions** — operator AskUserQuestion responses go into the relevant mission file or STATE.md `Recent Decisions` table at session close, NOT just into the live conversation context (which is ephemeral).
4. **Batching discipline** — when multiple decisions are needed at one gate, batch into 1–2 AskUserQuestion calls (4-question max per call); split if it improves operator review ergonomics.
5. **Non-applicability cases** — not every decision needs an AskUserQuestion; routine pacing decisions, formatting choices, and decisions clearly delegated to the agent by prior operator consent do NOT need surfacing.

## Discussion

- 2026-05-24 (agent_stanley): Filed at ContextCompass S16 ceremony (R10(b) promotion) per strategic-review artifact §5 R10 + §1.2 gap call-out 6. The pattern is genuinely cross-vault generalizable: any planning-campaign agent in any Framework.aDNA / Platform.aDNA / Org-Vault.aDNA campaign benefits from explicit operator-decision-surfacing discipline.
- Related to ContextCompass ADR-000 §Consequences C2 (asymmetric burden of proof) — the doctrinal pattern is the C2 analog at the **session-discipline** layer (vs. C2's heuristic-classification layer). Both share the meta-pattern: defaults exist, but recording the operator's attested choice elevates governance integrity.
- III.aDNA and other vaults likely have analogous AskUserQuestion moments captured in their session logs — surveying them would refine the doctrinal pattern before authoring.

## Cross-references

- ContextCompass `how/missions/artifacts/strategic_review_post_planning_2026_05_24.md` §1.2 gap 6 + §5 R10
- ContextCompass `STATE.md` Recent Decisions rows showing AskUserQuestion-recorded decisions across S15+S16 + P5 Sessions 12+13
- `aDNA.aDNA/who/governance/governance_agent_protocol.md` (likely destination for the doctrinal section, if it exists; or its equivalent in the .adna template)
- III.aDNA session-discipline patterns (cross-vault refinement input)

## Origin

ContextCompass post-planning strategic-review S16 ceremony 2026-05-24 — R10(b) promotion per artifact §5 + §1.2 gap call-out 6.

## When to integrate

Operator-discretionary; no execution-campaign dependency. Earliest natural opportunity: at the next aDNA-standard governance-doctrine review pass. Pairs well with R10(a) `idea_upstream_template_ratification_record.md` — both upstream items emerged from the same strategic-review §1.2 gap-call-out analysis and reflect doctrinal patterns the aDNA standard could absorb.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

**Resolved 2026-07-06 (Meridian M6):** shipped in the v8.4 image (Champollion RC IN-set); status-flip was the missing post-ship close-out.
