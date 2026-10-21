---
type: backlog_idea
status: proposed
priority: medium
created: 2026-10-20
updated: 2026-10-21
last_edited_by: agent_rosetta
filed_from: who/coordination/inbox/coord_2026_10_19_aldus_to_rosetta_framework_spec_row.md (§Upstream candidates; Documents.aDNA Phase 0 read 08 finding (f), G0-2 (f))
filing_authorization: skill_upstream_contribution — operator approval at plan time, 2026-10-20 (AskUserQuestion "Inbox + spec row (Recommended)", plan approved), session_stanley_20261020_221216_garnier_inbox_framework_rows
upstream_target: aDNA-Network/aDNA (how/templates/ + how/skills/skill_new_entity_type.md)
disposition: "v8.14 template queue — sits beside ARCADE's 'one budget key' carry ([[aar_campaign_arcade]] §Carries); (b) and that carry touch the same template and should land in one diff."
tags: [backlog, upstream, templates, coordination, campaign_mission, campaign_claude, new_entity_type, v8_14, documents_adna, aldus]
release_window: v8.14   # ledger how/missions/artifacts/v8_14/v8_14_release_ledger.md rows Ga · Gb (with C13) · Gc · Gd, all written locally 2026-10-21; Documents extra fields = §4 Q1
---

# Idea: four template gaps a fresh genesis had to patch locally

## Why this is worth filing

Documents.aDNA (Aldus) was forked from `.adna/` on 2026-10-19. During its own genesis it had to add four things the
template did not give it. When a genesis vault patches the template the same way on day one, the gap usually belongs
to the template, not to that vault. Each gap below was checked against **both** this vault's `how/templates/` and
the image `~/aDNA/.adna/` on 2026-10-20 [D], so none of them has already been closed upstream.

Put simply: a new project should not have to invent the same missing fields again. If one new project had to, the
next one will too.

## The four gaps

| # | Where | Gap (checked 2026-10-20, both trees) | What Documents.aDNA added locally |
|---|---|---|---|
| a | `how/templates/template_coordination.md` | No `to:` field; no staged-not-sent state; no `reply_to:` | `to:` · `status: draft # STAGED, NOT SENT` · `reply_to:` |
| b | `how/templates/template_campaign_mission.md` | No `executor_tier`, although the v8.4 Governance Doctrine (this vault's `CLAUDE.md` §Model-Tiered Execution) says **every** mission declares one | `executor_tier` · `executor_lane` · `gate` · `unblocks` · `human_minutes` · `token_budget_estimated` |
| c | `how/templates/template_campaign_claude.md` | No rule capping the campaign CLAUDE's live pointer (Aldus uses ≤ 200 characters) | the ≤ 200-char live-pointer rule |
| d | `how/skills/skill_new_entity_type.md` Step 2 (:78, :89) | "Use the plural form for the directory name" has no exception for mass nouns. The base ontology already uses singular collectives (`what/context/`, `how/backlog/`, `who/governance/`), so a fork following the skill literally makes `crafts/` | a recorded deviation (`craft/`) in its `what/ontology.md` |

## Suggested shape (for the release sitting, not ruled here)

- **(a)** Gives the drop-box doctrine's delivery states a slot in the template that writes the memo. Today the state
  lives only in prose (`outbound_ready` is a convention, not a field).
- **(b)** One diff with the "one budget key" carry, so `token_budget_estimated` / `token_budget_actual` and
  `executor_tier` arrive together. Whether `executor_lane` · `gate` · `unblocks` · `human_minutes` are base fields or
  stay a Documents-local extension is a question for the release sitting.
- **(c)** Check against existing practice first: this vault's campaign CLAUDE files vary widely, so a cap needs a
  measured length, not one picked by hand.
- **(d)** Add one sentence: *mass nouns and collectives stay singular (`context`, `backlog`, `governance`, `craft`)*.
  Lowest cost of the four.

## Related

- [[aar_campaign_arcade]] §Carries: the v8.14 queue this joins.
- [[doctrine_coordination_dropbox]]: the delivery states that (a) would give a field.
- [[pattern_model_tiered_campaign_execution]]: the doctrine that (b) makes reachable from the template.
- [[spec_framework_ecosystem]]: the Documents row written in the same sitting.
