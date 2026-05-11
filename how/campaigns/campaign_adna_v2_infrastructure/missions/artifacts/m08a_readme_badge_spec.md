---
type: artifact
artifact_type: readme_badge_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 3
target_missions:
  - M06  # applies this diff to README.md at v7.0 tag time
  - M03  # may absorb some of the path/URL fixes earlier (the flatten); M06 verifies post-flatten
created: 2026-05-11
updated: 2026-05-11
status: draft
last_edited_by: agent_stanley
target_repo: LatticeProtocol/adna  # post-rename per ADR-006
target_file: README.md
tags: [artifact, mission_deliverable, m08a, obj3, readme_badge_spec, v7_0, github_release, draft, m06_input, m03_partial_input]
related_artifacts:
  - m08a_github_release_notes_v7.md  # sibling deliverable
  - m08a_social_comms_post_draft.md  # sibling deliverable
  - m01_obj5_github_minimalism_audit.md  # source: minimalism audit findings
  - m01_obj6_version_bump_checklist.md   # source: §2 frontmatter flip + general M06 edits
  - m02_obj5_ecosystem_baseline_locked.md  # source: §4 public-announcement workstream items
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  - adr_009_aDNA_naming_convention.md
---

# M08a Obj 3b — README Badge Spec (v7.0)

> **Deliverable 3b of M08a** (per [[../mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|mission spec]] §Deliverables row 3b). The README.md diff catalog M06 applies at the v7.0 tag-time pass. Two categories of edits: (a) **badge additions** (new shields.io badges at the top of the README signaling Governance v7.0 + the docs site), (b) **string fixes** for the post-rename + post-flatten state. M03 may absorb some string fixes earlier (the flatten + the GitHub repo rename); M06 verifies and absorbs the rest at tag time.
>
> **Status**: `draft`. M06 applies; this spec is the catalog.

---

## §0 M06 application notes

The current `README.md` (pre-v7.0) was authored under v6.0 conventions: the H1 is `# Agentic-DNA`, several internal references use `Agentic-DNA/` as the workspace-clone directory name, and the clone instructions reference `github.com/LatticeProtocol/Agentic-DNA.git`. v7.0 fixes these to the post-rename + post-flatten state.

The README continues to be the **human-facing entry point** (Quick Start, FAQ, Working with AI Agents). The v7.0 changes are minimal — they update names and paths without restructuring sections. Badge additions land at the top of the file (between H1 and the lead paragraph), following standard GitHub convention.

**Pre-tag verification** (M06 runs before the v7.0 release announcement):

```bash
cd ~/lattice/.adna
grep -c "Agentic-DNA" README.md    # expect: 0 post-fix (was 5)
grep -c "agentic-dna" README.md    # expect: 0 (case-insensitive — covers any lowercase variant)
grep -c "\\.adna" README.md         # expect: ≥3 (the new directory pattern appears multiple times post-flatten)
```

---

## §1 Badge additions (new — top of README)

Insert immediately after the H1, before the lead paragraph. The badge row goes on a single line for compact display:

```markdown
# aDNA — Agentic DNA

[![Governance v7.0](https://img.shields.io/badge/governance-v7.0-663399.svg)](https://github.com/LatticeProtocol/adna/releases/tag/v7.0) [![Standard v2.2](https://img.shields.io/badge/standard-v2.2-blue.svg)](https://github.com/LatticeProtocol/adna/blob/main/what/docs/adna_standard.md) [![Docs](https://img.shields.io/badge/docs-adna--docs.vercel.app-44cc11.svg)](https://adna-docs.vercel.app/) [![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

**Give your project a knowledge architecture that both humans and AI agents can navigate.**
```

**Rationale per badge**:

| Badge | Color | Links to | Why |
|---|---|---|---|
| **Governance v7.0** | `#663399` (Rebecca Purple — vault accent color per the SiteForge / Op Rosetta visual identity) | `https://github.com/LatticeProtocol/adna/releases/tag/v7.0` | Operator can see current Governance version at a glance + click through to the v7.0 release notes |
| **Standard v2.2** | Blue (semver-blue convention) | `https://github.com/LatticeProtocol/adna/blob/main/what/docs/adna_standard.md` | Two-track versioning is non-obvious from README alone; the badge makes Standard v2.2's stability legible |
| **Docs** | Green (badge-conventional "live / online") | `https://adna-docs.vercel.app/` | The docs site at `adna-docs.vercel.app` is the canonical human-facing surface; first-time visitors should know it exists |
| **License: MIT** | Yellow (badge-conventional for license badges) | `LICENSE` (repo-relative) | Standard repo discoverability practice |

**At M07** or a future Minor bump, additional badges may be considered: a release-status badge (e.g., "v7.0.0"), a Lighthouse score badge for the docs site, or a workflow status badge. None are required for v7.0.

---

## §2 H1 rename

| Line | Before | After |
|---|---|---|
| 1 | `# Agentic-DNA` | `# aDNA — Agentic DNA` |

**Rationale**: Per ADR-006 the GitHub repo URL slug is `adna` (lowercase), but the **display name** is unconstrained (per ADR-006 Alternatives table: "display name is unconstrained — running text uses 'aDNA'"). The H1 follows the repo display name + brand convention: short form first (`aDNA`), full form after (`— Agentic DNA`). This matches the body text of the README which already uses both forms (the H1 currently is the only place named "Agentic-DNA" with a hyphen).

---

## §3 Clone command + GitHub template URL fixes

Per ADR-006 + ADR-007 (repo rename + flatten). Edits at §"1. Get the vault" subsection:

| Line | Section | Before | After |
|---|---|---|---|
| ~270 | "Option A — Clone into `~/lattice/` (recommended)" code block | `git clone https://github.com/LatticeProtocol/Agentic-DNA.git adna` | `git clone https://github.com/LatticeProtocol/adna.git .adna` |
| ~270 (preceding context line) | (the line `cd ~/lattice` is unchanged) | — | — |
| ~270 (succeeding context line) | `cd adna` | `cd .adna` |
| ~273 | Prose after the code block | "The `adna/` directory is the base template — you'll fork it into project directories, keeping the template clean for updates." | "The `.adna/` directory is the base template — you'll fork it into project directories, keeping the template clean for updates." |
| ~277 | "Option B — Use as GitHub template" link | `[Use this template](https://github.com/LatticeProtocol/Agentic-DNA/generate)` | `[Use this template](https://github.com/LatticeProtocol/adna/generate)` |

---

## §4 Workspace layout diagram fix

At §"Multi-Project Workspaces" subsection (line ~363-373):

| Line | Section | Before | After |
|---|---|---|---|
| ~363 | Prose | "Each project is a fork of the Agentic-DNA template..." | "Each project is a fork of the aDNA template..." |
| ~368 (code block) | Workspace layout diagram | `├── Agentic-DNA/           # Base template (never modified — role: template, no .aDNA suffix)` | `├── .adna/                  # Base template (never modified — role: template, no .aDNA suffix; flattened in v7.0)` |

The full code-block context after the edit:

```
~/lattice/
├── CLAUDE.md              # Workspace governance (auto-created on first run)
├── .adna/                 # Base template (never modified — role: template, no .aDNA suffix; flattened in v7.0)
├── my_research_lab.aDNA/  # Project A (forked, customized)
├── client_acme.aDNA/      # Project B (forked)
├── latlab/                # (appears after L0→L1 upgrade)
└── lattice-protocol/      # (appears after L0→L1 upgrade)
```

---

## §5 "What's Inside" code-block header fix

At §"What's Inside" subsection (line ~206):

| Line | Section | Before | After |
|---|---|---|---|
| ~206 | "What's Inside" code-block header | `Agentic-DNA/` | `.adna/` (post-flatten — the cloned repo IS this directory) |

**Note**: the "What's Inside" code block also names `13 agent recipes & procedures` (line ~228). Per the v7.0 skills inventory, the count is now **16** (added: `skill_workspace_upgrade.md` per Obj 1 §2 I-2; added `skill_vault_publish.md`, `skill_git_remote_setup.md`, `skill_deploy.md`, `skill_publish_tarball.md`). M07 may absorb this; M06 verifies and absorbs if M07 didn't.

| Line | Section | Before | After |
|---|---|---|---|
| ~228 | "What's Inside" skills-row description | `13 agent recipes & procedures` | `16 agent recipes & procedures` (post-v7.0) |

---

## §6 Sequencing — who applies which fixes when

Two missions touch the README:

- **M03 (repo flatten)** edits files that mention the workspace layout. README §"Multi-Project Workspaces" diagram (§4 above) and §"1. Get the vault" clone command (§3 above) are directly affected by the flatten and SHOULD be absorbed at M03's mass-update pass. ADR-006 GitHub rename also lands at M03 (via the GitHub UI side) per the campaign mission tree; the README URL fixes follow.
- **M06 (v7.0 tag)** verifies the §3 + §4 + §5 edits landed at M03 (re-running the §0 verification commands), and adds the §1 badge row + §2 H1 rename + §5 skills count fix. M06 is the only mission that should land the **Governance v7.0** badge (the badge points at the v7.0 release tag URL, which doesn't exist until M06 ships).

**Default M06 application order**:

1. Re-run §0 verification commands to confirm M03 absorbed §3 + §4 + §5 string fixes. If gaps remain, apply them.
2. Apply §2 H1 rename.
3. Apply §1 badge additions (the order they appear in the row is intentional: Governance → Standard → Docs → License).
4. Apply §5 skills count fix if not already absorbed.
5. Spot-check link targets — every badge URL should resolve to a live page.

---

## §7 Cross-references + status

**Inputs consumed**:

- `aDNA.aDNA/README.md` (current state) — source of pre-v7.0 text + line numbers.
- [[../../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] — repo rename authority.
- [[../../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — outer-wrapper retirement.
- [[m01_obj5_github_minimalism_audit.md|M01 Obj 5 minimalism audit]] — context for the M07 absorb-into-version-bump pattern.
- [[m01_obj6_version_bump_checklist.md|M01 Obj 6 version bump checklist]] — companion mission for M06 mechanics.

**Outputs consumed by**:

- M03 (forward) — absorbs §3 + §4 + §5 string fixes during the flatten + URL refresh.
- M06 (forward) — verifies M03's absorb; lands §1 badge row + §2 H1 rename + skills count fix at v7.0 tag time.
- M07 (forward, optional) — may absorb the skills count fix if M07 audit pass runs before M06.

**Status**: `draft`. Spec is final-form; application is operator-gated at M03 + M06 phase gates.

---

## §8 Self-reference + dual-audience (Standing Orders #2 + #7)

**Self-reference**: This spec IS the operator-facing surface (README) updated to reflect the campaign that produced the update. The badge row that this spec adds will, on the publication of v7.0, point at the v7.0 release tag — which the [[m08a_github_release_notes_v7.md|sibling release notes draft]] populates. The README operates as the human-facing entry that the docs site (via the new "Docs" badge) extends into the dual-audience triad of: GitHub README (developer onboarding) + docs site (newcomer + developer reference) + vault `CLAUDE.md` (agent orientation). v7.0's README updates lock that triad explicitly via badges.

**Dual-audience**:

- **Developer reads** §0 (verification commands), §3-§5 (line-numbered diff catalog), §6 (sequencing — who applies which fixes when). Direct, executable, auditable.
- **Newcomer reads** §1 (badge row with per-badge rationale table), §2 (H1 rename rationale), §7 (status + cross-references). Plain-language motivation for each change.

Both reads land at the same conclusion: **the README updates are mechanical (rename + flatten string fixes + badge additions); apply at M03 + M06; the badge row is the new visible-state surface signaling v7.0's adoption.**
