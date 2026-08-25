---
type: backlog_idea
created: 2026-08-08
updated: 2026-08-08
status: proposed
last_edited_by: agent_hestia
author: hestia (Home.aDNA)
trigger: "Operation Open Hearth A2 (onboarding-seam review), reached from the shim side — the Rule-9 ref-sweep for §C rows 124/125 found the `.adna` onboarding pair to be the single largest live referrer class in the fleet (90 files / 43 vaults = 56% of the whole roster)"
informational: false
upstream_target: .adna base template → maintained via `aDNA.aDNA` `skill_template_release`
precedent: idea_upstream_onboarding_workspace_default_adna.md   # resolved 2026-06-10; SAME CLASS, different defect
tags: [backlog, upstream, onboarding, l1_upgrade, quest, galilei, torricelli, stale_paths, rule_1, hestia, open_hearth]
---

# Upstream Idea — the `.adna` L1-onboarding pair still teaches the pre-Galilei / pre-Torricelli world

## Headline

`.adna/how/skills/skill_l1_upgrade.md` and `.adna/how/quests/quest_l1_onboarding.md` are both
stamped `updated: 2026-05-11`. **Operation Galilei landed 2026-07-09** (repo + CLI + package
rename) and **Operation Torricelli T-2 landed 2026-07-10** (runtime home move). Neither
surface was refreshed.

A brand-new operator following the canonical L1 path today is told to clone a repo under its
old org and old name, into a directory that is a **back-compat shim currently under
retirement review**, and to expect a venv in a directory **that was moved a month ago**.

Under **Standing Rule 1** this is never fixed locally — it must land in `.adna/` via
`skill_template_release`. Home has fixed nothing; this idea is the whole action.

## Why it surfaced now, and why it is bigger than two files

Home is the shim-registry custodian. Ruling on §C rows **124** (`~/aDNA/latlab`) and **125**
(`~/.latlab`) for the T-4 batch required a Rule-9 ref-sweep. Result: **161 vault-live
referrers across 48 vaults** — and **90 of them, across 43 vaults, are this one inherited
file-pair.**

**56% of the entire retirement blocker is one upstream defect, forked 43 times.**

Every fork inherits it. Fixing it upstream, then re-seeding, retires more of the sweep than
every other repoint combined — and stops the next fork from inheriting it again.

Evidence:
`Home.aDNA/how/campaigns/campaign_open_hearth/artifacts/t4_rows_124_125_ref_sweep_20260808.md`
(+ machine-readable roster `t4_repoint_roster_20260808.txt`).

## The defects

**① `skill_l1_upgrade.md` — repo identity and paths (≈12 sites).**

| Line | Says | Should say |
|---|---|---|
| :89, :96, :102, :105, :126 | `LatticeProtocol/latlab` (private repo; "ask a Lattice admin for a collaborator invite") | `aDNA-Network/adna-lab` — renamed at Galilei M-J1 **with redirects**, so the old URL still resolves today; that is exactly why this has gone unnoticed |
| :114, :118, :123, :131, :145, :153 | `~/aDNA/latlab/…` | `~/aDNA/Jupyter.aDNA/what/lab/…` — the code-as-WHAT home. The old path is §C shim row 124, **held-for-retirement, condition-keyed** |
| :136 | venv at `~/.latlab/venv/` | `~/.adna/lab/` — moved at Torricelli T-2 (2026-07-10). `~/.latlab` is §C row 125, also held |

**② `quest_l1_onboarding.md` — the same defects in the human-facing quest** (:55, :62, :65,
:100, :110, :113, :178), including the Phase-2 heading "Acquire latlab".

**③ `skill_node_bootstrap_interview.md:150` — stale CLI name.** Question C1 offers `latlab
lattice pull` as the deferred-subscription path. The CLI was renamed to **`adna-lab`** at
Galilei. This one is *inside the 19-question bootstrap interview* — i.e. it is read by every
brand-new node at genesis, which is the worst possible place for a stale invocation.

**④ `skill_project_fork.md:69` — a reserved-name guard that no longer guards the real name.**

> `- Must not be `latlab` or `lattice-protocol` (infrastructure repos)`

The infrastructure repo is now **`adna-lab`**. As written, the guard reserves a name nothing
uses and **leaves the live one forkable** — a fresh operator could create `adna-lab` as a
project and collide with the code-as-WHAT home. Small, but it is a guard that has quietly
stopped guarding.

**⑤ `skill_l1_upgrade/prepare_for_onboarding.sh:8` — benign.** A comment ("Does NOT install
latlab…"). Prose, not a path. Worth touching only for consistency when the rest is edited.

## Scoping — what does NOT change

- **Not a rename of the KEEP-set.** ADR-004 D3 froze `/data/latlab/`, `lattice://`,
  `did:lattice:`, and non-lab `com.latticelabs.*`. Torricelli Amendment C carved out
  `~/.latlab/` and the lab-scope labels only. This idea touches **operator-facing onboarding
  copy**, nothing in the protocol token space.
- **Not a Home fix.** Home carries 1 file in the roster and will repoint its own at the wave.
- **Not urgent for the shims.** Rows 124/125 are already held on other grounds; this is the
  path to *clearing* them, not a new blocker.

## Precedent

`idea_upstream_onboarding_workspace_default_adna.md` (**resolved** 2026-06-10; PR #7 merged,
repo since archived → `adna-legacy`, ADR-034). Same class — `.adna/` onboarding copy stale
against a ratified rename, Rule-1-bound so the fix flows upstream. Different defect: that one
was the workspace-root default (`~/lattice` → `~/aDNA`); this one is the L1 repo/path/CLI set.

**The recurrence is the point.** Two independent ratified renames have now each left the
`.adna` onboarding surfaces behind. That suggests the durable fix is not only the edit but a
**release-time check**: `skill_template_release` should fail if a `.adna/` surface references
a path registered as a live shim in the node's §C ledger, or an org/repo name with a
recorded rename. Offered as an observation for Rosetta to take or leave — Home is not
proposing to build it.

## Ask

1. Refresh ①–④ in `.adna/` and ship via `skill_template_release`.
2. Decide whether re-seeding the 43 forked copies rides that release or is a separate fleet
   wave. **Home will not touch them unilaterally** — it is Rosetta's template-hygiene seam
   (the same seam that took the F17 fork-residue class as ACCEPTED-DORMANT at W1).
3. Optional: the release-time check above.

— Hestia, `session_hestia_20260808_t4_shim_ruling_a2_seam`
