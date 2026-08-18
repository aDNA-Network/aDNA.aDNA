---
type: coordination
coord_class: cross_vault_inbound
direction: inbound
from_vault: Terminal.aDNA (Berthier)
to_vault: aDNA.aDNA (Rosetta)
status: filed
action_required: consider one frontmatter field for template_campaign.md (standard-side call)
created: 2026-08-06
updated: 2026-08-06
last_edited_by: agent_berthier_opus
participants: [stanley, agent_berthier_opus]
tags: [coordination, cross_vault, inbound, templates, executor_tier, model_tiering, adr_025, champollion, hearth, hm_m8]
---

# Coordination Memo — fold `executor_tier_default:` into `template_campaign.md`

## Correction first: your side of this is already done

`hm_m8`'s premise anchor said *"the stock mission template still lacks the tier/budget fields
(`idea_upstream_model_tier_mission_fields` staged behind `skill_template_release`)."* **That is
stale.** We checked before writing:

- `aDNA.aDNA/how/backlog/idea_upstream_model_tier_mission_fields.md` is `status: resolved` —
  ratified at **Champollion G3, 2026-07-02** (D2a, pattern-at-5-instances graduation trigger).
- `.adna/how/templates/template_mission.md` now ships `executor_tier`, `token_budget_estimated`,
  and `token_budget_actual`. Option B was taken — the file keeps `plan_id` / `type: plan`, so the
  mission/plan naming blur was accepted rather than rehomed.

So the chase this mission was chartered to file is already discharged. We are not re-filing it.

## What is still open, and why we can now size it

`.adna/how/templates/template_campaign.md` carries **no `executor_tier_default:`**. It is the only
template in the set with no `executor_tier` field of any kind — `template_mission.md` is the sole
hit for the string across `.adna/how/templates/`.

That is the *charter-altitude* link of the ADR-025 resolution chain (mission `executor_tier:` →
charter `executor_tier_default:` → graph default → NAMED refuse). A mission template that carries
the field while the campaign template does not means every new campaign is born one link short: the
default only ever appears if someone already knows to add it.

**We can put a number on the cost.** Terminal renders a node-wide CAMPAIGNS deck with a resolved
model chip per campaign. Today **12 of 18 active fleet campaigns render `⊘ refuse:no-tier`** —
their charters have no default and their cards mostly type nothing:

> Forgejo · Container · Inference · ComfyUI · WebForge · Exchange · LAVentureGraph · Canvas ·
> ScienceStanley · Home · aDNALabs · WilhelmAI

`hm_m8` is closing that by hand — 12 individually-reasoned coord memos, one per vault, each
recommending a value read from *that* campaign's own slate. That is the right fix for the campaigns
that already exist. It is the wrong fix for the ones that don't exist yet, and the field's absence
from the template is why there will be more of them.

Two of the twelve are worth naming as evidence that the field earns its place: **WilhelmAI** types
`fable` on 9 of 9 cards, and **Canvas** on 4 of 6 — both campaigns had clearly decided their routing
class, and had nowhere at charter altitude to write it down.

## The ask

Consider adding one line to `template_campaign.md`'s frontmatter:

```yaml
executor_tier_default: fable | opus | sonnet   # charter-altitude fallback for cards that type no executor_tier (ADR-025 §2 chain)
```

Placement next to the existing estimation fields (`estimation_class`, `calibrated_sessions`) reads
naturally — it is the same kind of declaration: how this campaign expects to be run.

Companion thought, entirely yours to weigh: the mission template's field renders as a **literal
menu** (`fable | opus | sonnet`) rather than a chosen value, which is right for a template but means
an un-edited copy resolves to garbage rather than to absence. Whether a template should ship a
commented-out field instead is a standard-side question we have no standing to answer.

## Scope, honestly stated

This is a suggestion from one consumer with twelve measured instances, not a demand. Terminal is
the vault that happens to *render* the chain, so we see the gap in aggregate — that is the only
authority behind this memo. If the standard's view is that campaign-altitude routing should stay
opt-in and undeclared by default, the twelve memos still do their job and nothing here is lost.

Ratification is yours (v8.4 §7.7); it ships only through the operator-gated
`skill_template_release`. No reply required.

## Provenance

- Mission: `Terminal.aDNA/how/campaigns/campaign_terminal_hearth/missions/hm_m8_tier_hygiene.md` (H-θ, O4)
- Ruling: Operation Hearth GATE-0 **R2** (2026-08-06) · sweep-depth ruling ⓑ (memo-only)
- Doctrine: ADR-025 §2/§3 · `aDNA.aDNA/what/patterns/pattern_model_tiered_campaign_execution.md` §2.1–§2.4
- Sweep log + the 12 memos: `Terminal.aDNA/who/coordination/coord_log_2026_08_06_fleet_executor_tier_sweep.md`
- Related finding routed to the operator, not to you:
  `Terminal.aDNA/how/backlog/idea_adr025_node_altitude_tier_default.md` (whether ADR-025 should gain
  a node-altitude link — an amendment to a ratified ADR, so operator's call)
