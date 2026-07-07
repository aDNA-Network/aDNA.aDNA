---
type: reference
title: "v8.6 Release Staging Ledger — the P3 assembly manifest + P2 open decisions"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
campaign: campaign_v8_6_release
tags: [reference, v8_6_release, ouroboros, staging, assembly_manifest, p2_gate, p3_assembly]
---

# v8.6 Release Staging Ledger

> The **assembly manifest** for the v8.6 template release. It records — for every ship-set item — the
> **dev-graph source** (authored in `aDNA.aDNA/` at P1) and the **`.adna/` target** the P3
> `skill_template_release` run folds it into. It is also the **P2 gate packet**: §D lists the open decisions
> the operator ratifies before P3 fires. Governance bumps **8.5 → 8.6**; the **standard stays v2.5** (no
> normative surface touched). Authoritative ship-set: `../campaign_meridian/artifacts/v8_6_release_candidate.md` §4.

## §A — Batch A: lifecycle skills + templates (fold dev → `.adna/`)

| # | Dev-graph source (authored P1) | `.adna/` target | Notes |
|---|--------------------------------|-----------------|-------|
| 1 | `how/skills/skill_project_archive.md` | `.adna/how/skills/` | leaf primitive (agent) |
| 2 | `how/skills/skill_second_genesis.md` | `.adna/how/skills/` | process; calls archive + fork |
| 3 | `how/skills/skill_graph_merge.md` | `.adna/how/skills/` | agent; calls archive |
| 4 | `how/skills/skill_graph_rename.md` | `.adna/how/skills/` | agent; delegates to `skill_project_rename` |
| 5 | `how/skills/skill_workspace_spring_clean.md` | `.adna/how/skills/` | process; orchestrator |
| 6 | `how/templates/template_second_genesis_dossier.md` | `.adna/how/templates/` | second-genesis dossier |
| 7 | `how/templates/template_disposition_ledger.md` | `.adna/how/templates/` | §A–H houseclean ledger |

**Count effect on the `.adna/` image:** base skills +5, operational templates +2. The image's own governance
count-surfaces (CLAUDE/MANIFEST/AGENTS/README) must be re-trued at assembly (the dev-graph counts — 55 skills /
44 templates — are the *dev* vault's; the image carries base-only, so its numbers differ and are computed by
`skill_template_release`).

## §B — Non-skill deltas (fold dev → `.adna/`)

| Delta | Dev-graph source | `.adna/` target |
|-------|------------------|-----------------|
| **§6 Reopen clause** | `how/campaigns/AGENTS.md` §6 Reopen (Abandonment → §7) | `.adna/how/campaigns/AGENTS.md` |
| **Webforge fork scaffold** | `how/skills/skill_project_fork.md` Step 4.5(4) (optional `how/federation/webforge/` wrapper) | `.adna/how/skills/skill_project_fork.md` |
| **Checklist fork-base fold** *(ADR-047 D1)* | `how/campaigns/campaign_w4_governance_doctrine/artifacts/v8_4_adoption_checklist.md` | `.adna/what/docs/` **or** `.adna/how/templates/` — **see §D-1** |

**Checklist integration decision (recorded for P3):** ADR-047 D1 makes the adoption checklist *"the fork-time
instrument — every future `<name>.aDNA` inherits the doctrine via the checklist."* The doctrine itself already
ships baked into `.adna/CLAUDE.md` (a fresh fork gets the items); the checklist folds to `.adna/` as the
**verification + retrofit** instrument. At assembly, `skill_project_fork` gains a one-line reference to it
(deferred to P3 so the dev-graph fork skill carries no dangling ref to a file not yet in `.adna/`). Target
location + generic-vs-`v8_4` filename = **operator call, §D-1**.

## §C — Batch G: doc-currency + dev-vault-name leak sweep *(`.adna/`-side; `proposed` — gated on §D-2)*

| Item | Target | Disposition |
|------|--------|-------------|
| Validator-docstring currency | `adna_validate.py` + `compliance_checker.py` headers | **VERIFIED CURRENT (P1)** — both dev-source headers cite "aDNA Universal Standard **v2.5**" (= current) with §5.5/§13.2 refs intact; **no change needed**. Assembly folds the current dev tools as-is. |
| `skill_iii_setup.md` genericize | `.adna/how/skills/skill_iii_setup.md` | ~15 real vault names + the 5-row census table (mission IDs / SHAs) → **DP4 default: replace census with a generic note** (§D-3) |
| Broader dev-vault-name sweep | `.adna/how/skills/skill_git_remote_setup.md` · `.adna/how/docs/upgrade_v6_to_v7.md` · an example session | genericize live example prose; **preserve** historical CHANGELOG/STATE |

## §D — Open decisions for the P2 operator gate

| # | Decision | Recommendation |
|---|----------|----------------|
| **D-1** | Checklist `.adna/` target + filename | Fold to `.adna/what/docs/governance_doctrine_adoption_checklist.md` (drop the `v8_4` from the *filename* per ADR-047 D2 items-not-number; keep the v8.4 content); `skill_project_fork` references it at assembly. |
| **D-2** | Ship Batch G this cycle? (`proposed`) | **Accept** — it is the F-CHM-217 release-cut-leak close; low-risk, `.adna/`-side, no normative surface. |
| **D-3** | `skill_iii_setup.md` census-table disposition | **Replace with a generic note** — row-by-row genericizing (real mission IDs + SHAs) loses the value the table had. |
| **D-4** | 2 Hestia `proposed` addenda (node_manifest interview emission · STATE phase/campaigns keys) | **See the triage** (`triage_proposed_items.md`) — recommend node_manifest = **accept** (Batch A-adjacent), STATE-keys = **accept** (optional, no schema break). |
| **D-5** | Mirror `template_ratification_record.md` into aDNA.aDNA? *(ADR-047 §Consequences; self-drift — the dev vault ships it in `.adna/` but lacks a local copy; its own §7.7 doctrine + the checklist item 1 both cite it)* | **Accept** — mirror `.adna/how/templates/template_ratification_record.md` → `aDNA.aDNA/how/templates/` (closes the self-drift; +1 template). Small, clean; can ride this cycle or the next. |

## §E — Governance version

- `.adna/CHANGELOG.md` gains a **v8.6** entry (gov 8.5 → 8.6); the aDNA Universal Standard **stays v2.5**
  (ADR-046's lane, untouched). v8.6 is a **skills-and-currency** release.
- **HOLD** (out of this cycle, per the RC): Batch B → v8.7 · Batch C → v2.6 standard window · Batch D →
  Obsidian-T3 IF-gate.

## §F — Fire sequence (P3, operator gate — do NOT run without ratification)

`skill_template_release`: dry-run → operator confirm → assemble (fold §A/§B/§C into `.adna/`, re-true image
counts, write the v8.6 CHANGELOG entry) → tag `v8.6` → push `aDNA-Network/aDNA` → local `~/aDNA/.adna` sync →
7-row smoke → close + AAR.
