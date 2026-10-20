---
type: backlog_idea
status: proposed
priority: medium
routes_to_campaign: unassigned
source: "Home.aDNA Sitting 58 (2026-10-19), Anduril readiness review; operator ruling 'Windows.aDNA idea' (AskUserQuestion, plan mode)"
from_persona: Hestia
from_vault: Home.aDNA
created: 2026-10-19
updated: 2026-10-19
last_edited_by: agent_hestia
tags: [backlog, upstream, windows, base_graph, osx_sibling, anduril, telchar, software_element_context_graph, proposed]
---

# A Windows base graph, the sibling of `OSX.aDNA`

## The gap, narrowly

`OSX.aDNA` is the portable base graph for setting up, configuring, operating, maintaining and troubleshooting **any
macOS computer**. Its ontology, app kits, machine profiles and playbooks are control-plane. The facts of one machine
live in that machine's own graph (`Dyrnwyn.aDNA`). **No graph does this for Windows.**

The fleet now has a Windows machine that is worked on daily: Anduril (`science_stanley_l1`). It is a Razer laptop
with an RTX 3090 in a Thunderbolt eGPU enclosure, running Windows 11 26H2. Its node graph, `anduril.aDNA` (Telchar,
Operation Reforge, on the box), has had to build from scratch the Windows half of what `OSX.aDNA` holds for macOS:

- **crash triage:** unclean-end readdown, a WHEA decoder, LiveKernelReports handling, dump copy by hash;
- **counters and preflight:** unexpected shutdowns, bugchecks, GPU driver resets, low-memory events, disk floor;
- **power and paging:** no standby on AC, a fixed page file, button behaviour;
- **storage:** junction rules (never follow reparse points; undo = `rmdir` the link and copy back), disk-wipe and
  reformat gates, a backup skill;
- **an ADR on crash-safe writes** (check for NUL bytes after a crash).

None of it can be reused, because it lives in one machine's graph, beside that machine's facts.

## What is already covered, so this is not that

- **Venus (`Network.aDNA`):** `skill_windows_l2_partner_onboarding` + `recipe_windows_l2_substrate`. Scope: a Windows
  GPU rig as an **L2 resource node** (mesh enrolment, substrate).
- **This vault:** `idea_windows_member_workstation_claude_cli_recipe.md` (accepted 2026-09-11). Scope: the Claude CLI
  on a Windows **member workstation**.
- **`Hardware.aDNA` (Babbage):** hardware vocabulary. It never holds a machine's facts.

The proposed graph is the **operate / maintain / troubleshoot** leg for any Windows machine: the `OSX.aDNA` shape,
with no machine facts. Venus's recipe would stay the enrolment leg, and the CLI recipe the workstation leg.

## Shape, if accepted (nothing is authored here)

- `Windows.aDNA`, Platform · SDG (`software_deployment_graph`), sibling of `OSX.aDNA`. It would be forked by
  `skill_project_fork` on an operator act, with persona and P0 at its genesis.
- **The quarry is Telchar's tooling, by its owner's consent.** Generalized patterns come up into the base graph; the
  machine's facts stay in `anduril.aDNA`. The direction is the same as `OSX.aDNA` ← `Dyrnwyn.aDNA`.
- Consumers would federate through a `how/federation/windows/` wrapper (ADR-045 placement).
- **Open question for the standard:** the bootstrap and inventory skills (`skill_inventory_refresh`, the node health
  check) assume macOS and bash. A Windows node's own `Home.aDNA` (none exists; the operator ruled none for Anduril at
  Reforge gate 0b #8) would need PowerShell or cross-platform versions. The base graph would be their home.

## What discharges it

An operator ruling: **accept** (route to a campaign; the fork is a separate act), **defer**, or **decline**. On
accept, Telchar is asked before any of its tooling is quarried.

— Hestia (Home.aDNA), for Rosetta
