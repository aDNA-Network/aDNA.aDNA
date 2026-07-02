---
type: idea
idea_id: idea_campaign_reopen_reconciliation_protocol
title: "Reopen-reconciliation protocol — diff a dormant campaign's terminal target vs the release CHANGELOG before resuming"
status: accepted
priority: medium
effort: plan
created: 2026-07-01
updated: 2026-07-02
last_edited_by: agent_rosetta
campaign_id: campaign_adna_serious_tool_readiness
upstream_target: aDNA.aDNA how/campaigns/AGENTS.md (candidate standard touch — a reopen step, sibling to §5 Completion)
tags: [idea, campaign, reopen, reconciliation, dormant_campaign, changelog, upstream_candidate, str]
champollion_mission: M3.2
---

# Idea — Reopen-reconciliation protocol for dormant campaigns

**The lesson (graduated from STR).** When STR (`campaign_adna_serious_tool_readiness`) was reopened 2026-06-30 after ~5 weeks dormant, its frontmatter read "P0 open" — but the truth was P0–P3 done, P4 paused on a contract built on two archived vaults, and **its terminal target `v8.0` had already shipped under a sibling's banner** (Hearthstone 2026-06-19 → v8.3 via `skill_template_release`). A blind resume would have executed a stale installer plan and re-done delivered work. A one-session *re-orientation* instead revealed the campaign was already at its finish line, turning a nominal 60–80-session resume into a ~2-session honest closeout.

**Self-reference (the structure is the lesson):** this idea was itself produced by the reconciliation it describes — see `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/str_resume_reconciliation_ledger.md`.

## Proposed protocol — before resuming ANY dormant campaign, run a re-orientation pass

1. **Diff the terminal target against the release CHANGELOG.** If the campaign's `tag_target_at_close` / terminal milestone already appears in `.adna/CHANGELOG.md` (or the relevant release log), the campaign may already be *terminal* — closeout, not resumption.
2. **Diff each open phase/mission against sibling closures.** In a busy fleet, a big campaign's scope is delivered piecemeal by sibling tracks; mark each unit delivered-elsewhere / superseded / still-open.
3. **Re-validate the plan's external dependencies.** Contracts naming other vaults/personas may reference archived or renamed entities (STR's Phase-4 contract named two vaults archived 2026-06-07).
4. **Trust the mission files + closures + CHANGELOG over the campaign frontmatter** — a dormant campaign's `status`/`phase` fields drift.
5. **Produce a decision-ready reconciliation ledger + an operator gate** before executing any remaining work.

## Dual audience

- *Developer:* a checklist that prevents wasted execution against a stale plan; pairs with `how/campaigns/AGENTS.md` §5 Completion as a new "§reopen" step.
- *Newcomer:* "before restarting an old project, check what's already been done elsewhere — you might be finished."

## Graduation target

Candidate standard touch: a **reopen** clause in `how/campaigns/AGENTS.md` (sibling to the §5 close protocol), or a small `skill_campaign_reopen_reconciliation`. Related: [[idea_iii_campaign_pattern]] (review→improve at scale). Decide at the next campaign-methodology review.


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M3.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).
