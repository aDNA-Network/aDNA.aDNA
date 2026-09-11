---
type: backlog_idea
status: accepted
priority: medium
routes_to_campaign: unassigned
source_coord: coord_2026_09_04_berthier_to_rosetta_windows_claude_cli_member_workstation_gap_routed
accepted_on: 2026-09-11
accepted_by: operator (Stanley), HAUSSMANN Increment 2
created: 2026-09-11
updated: 2026-09-11
last_edited_by: agent_rosetta
tags: [backlog, windows, claude_cli, member_workstation, skill, standard, adnalabs, berthier, adr_026, accepted_routing]
---

# Claude CLI on a native-Windows member workstation — an accepted ownership, not yet a surface

## The ask, as routed and accepted

**No fleet surface covers installing and running the Claude CLI on a native-Windows MEMBER
WORKSTATION.** Routed to this vault by operator ruling (2026-09-04, relayed by Berthier /
`aDNALabs.aDNA`), **accepted by operator ruling 2026-09-11**. The surface belongs beside
`how/skills/skill_lattice_home_install.md` and `how/skills/skill_onboarding.md` — the Claude CLI is
the fleet's primary instrument, so this is **substrate, not node plane**.

⛔ **Nothing is authored, drafted or sketched.** Berthier's memo §4 asked for none of it and carries
no draft by design; this file exists so the acceptance is **a row with a gate rather than a sentence
in a memo.**

## Why it is here and not at `Network.aDNA` (Venus)

The gap was first filed as *"no ratified Windows install recipe exists in the fleet."* **That was too
wide and pointed at the wrong desk.** Venus **does** hold a Windows surface —
`skill_windows_l2_partner_onboarding` + `recipe_windows_l2_substrate` — scoped on its own first line
to *"a Windows GPU rig as an **L2 resource node**"*, with `grep -i claude` returning **zero**. Her
surface is correct and is not the gap; the wide sentence would have drawn a true answer to a question
nobody meant to ask.

⇒ ⭐ ***A question narrow enough to be answered wrongly is the only kind worth sending.***

## What discharges it — and the clause this desk can never claim

Berthier's card carries three clauses:

1. an owner **named and accepting** — ✅ **met 2026-09-11**;
2. a ratified surface that installs and runs the Claude CLI on a native-Windows member workstation —
   ⛔ **not started**;
3. ***"it has been run on Teddy's box with the CLI reachable"*** — explicitly **not** *"a recipe was
   written."*

⛔⛔ **Clause 3 is not claimable from this node, ever.** It is a statement about a machine no agent
here can reach — the *"a GO on an act whose prerequisite does not exist on the performing tree"*
class, which this campaign has hit five times. The honest deliverable from this desk is **a surface
that can be run, plus a named and dated report from whoever runs it.** Written down now because the
alternative is discovering it at the moment someone tries to close the card.

## What it binds

`aDLabs-ADR-026` designates **Teddy as Product Leader** with no authority delegated; the CLI does not
run on his machine (`CommandNotFoundException`, measured on Venus's S453; `is_wsl: false`, so the
WSL-substrate idea misses from the opposite end). ⇒ the role is **ratifiable and not fully
exercisable**, and clause 2+3 is the single constraint between those states.

⚠ **Acceptance is not progress on that.** It moves the gap from *unowned* to *owned and unscheduled*.

## Not scheduled, and why that is stated rather than hidden

`campaign_haussmann`'s next two increments are the ⛩ v8.11 release and its deploy tail, both
operator-gated, followed by `P5.1`, which is entirely human. **This item has no date and no campaign.**
It is `priority: medium` because a person is blocked by clause 3, not by clause 2 — and clause 3 will
not move faster for our authoring sooner.

## Related

- [[coord_2026_09_04_berthier_to_rosetta_windows_claude_cli_member_workstation_gap_routed]] — the ask
- [[coord_2026_09_11_rosetta_to_berthier_routing_accepted_and_clause_3_is_not_ours_to_claim]] — the acceptance
- [[skill_onboarding]] · [[skill_lattice_home_install]] — the shelf neighbours the surface joins
