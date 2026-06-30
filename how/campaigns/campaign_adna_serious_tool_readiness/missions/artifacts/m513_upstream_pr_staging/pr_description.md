---
type: artifact
created: 2026-06-10
updated: 2026-06-10
status: completed
last_edited_by: agent_stanley
tags: [artifact, pr]
---

# PR — docs: flip the new-user workspace default `~/lattice` → `~/aDNA` (+ canonical repo slug)

> Staged 2026-06-10 at the aDNA.aDNA audit-campaign P2 (operator-authorized at the plan gate);
> follow-through owned by E6/M5.13 O4. Vehicle: [[../../../../backlog/idea_upstream_onboarding_workspace_default_adna]].
> Filed from a throwaway clone — the local `~/aDNA/.adna` checkout is never touched (Workspace Standing Rule 1).

## Title

`docs: flip new-user workspace default ~/lattice → ~/aDNA (+ canonical repo slug)`

## Body

Under the ratified brand split (**aDNA** = the forward-facing standard/network brand; **Lattice** = the
underlying protocol), the right default workspace root for a fresh install is **`~/aDNA/`**. This is a
**documentation-default flip, not a breaking change** — the workspace root is an operator convention; all
tooling detects `<workspace_root>` as "the directory containing `.adna/`" and never hardcodes the path
(per `CHANGELOG.md`: *"a strong recommendation, not mandatory — system works in any location"*).

**What changes (active onboarding surfaces only):**

| File | Change |
|---|---|
| `README.md` | Getting-Started commands + router path + flatten note + workspace tree + `git pull` location: `~/lattice` → `~/aDNA`; adds a one-line back-compat note for legacy operators |
| `how/templates/template_workspace_claude.md` | the two guide comments naming the router path |
| `how/quests/quest_l1_onboarding.md` | onboarding commands + example paths (lines 61/100/110/113) |
| `what/docs/projects_folder_pattern.md` | the pattern doc's workspace-root references + the stale lowercase `LatticeProtocol/adna.git` slug → `LatticeProtocol/aDNA.git` |
| `what/docs/aDNA_overview.md` | Getting-Started option A/B paths + the stale `LatticeProtocol/adna/generate` slug |

**What deliberately does NOT change (active-vs-historical discipline, per the R07 LatticeHome-rename precedent):**
`CHANGELOG.md`, `how/docs/upgrade_v6_to_v7.md`, `how/migrations/migrate_v5.2_to_v6.0.md` (historical narrative —
they describe past events accurately), and `what/docs/tutorial_lattice_publishing.md`'s illustrative example
repo paths. The "lattice is a graph of graphs" concept line in the README intro also stays — it names the
concept, not the path.

**Back-compat:** legacy operators on `~/lattice/` keep working indefinitely (nothing hardcodes the root). The
README gains: *"`~/aDNA/` is the recommended workspace root; any path works — the workspace root is detected,
never hardcoded. On a legacy `~/lattice/` root? A reversible `mv ~/lattice ~/aDNA && ln -s ~/aDNA ~/lattice`
moves you over while the symlink keeps every existing reference valid."*

**Cross-refs:** the same canonical flow is live at https://adna.network/get-started/ (single-sourced +
gate-verified site-side); a follow-up PR will propose the turnkey migration kit
(`skill_workspace_path_migration` + `migrate_workspace_root.sh`) as a separate concern.

## Verification

- `rg -n "~/lattice" README.md how/templates/template_workspace_claude.md how/quests/quest_l1_onboarding.md what/docs/projects_folder_pattern.md what/docs/aDNA_overview.md` → only the README back-compat note's intentional mention remains.
- `rg -n "LatticeProtocol/adna\b"` in the five files → 0.
- Historical files untouched: `git diff --stat` shows exactly the five files.
