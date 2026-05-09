---
type: adr
adr_number: 006
title: "GitHub repo rename Agentic-DNA → adna (URL-slug only; display name unchanged)"
status: accepted
created: 2026-05-08
updated: 2026-05-08
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 2
decision_letter: A  # mission §Obj 2 §Decision A
ratification_phase: P1  # ratified at P0 → P1 phase-gate review session 2026-05-08 (early relative to original M03-start target)
ratified: 2026-05-08
ratified_session: session_stanley_20260509_013646_adna_v2_p0_p1_gate_review
tags: [adr, decision, campaign_adna_v2_infrastructure, github, repo_rename, url, governance, naming]
---

# ADR-006: GitHub repo rename `Agentic-DNA` → `adna` (URL-slug only)

## Status

**Accepted** at the P0 → P1 phase-gate review session 2026-05-08 (`session_stanley_20260509_013646_adna_v2_p0_p1_gate_review`). Drafted Stage 2 Session 1 of `campaign_adna_v2_infrastructure` 2026-05-08 by Rosetta as M01 Obj 2 deliverable; reviewed without amendment across S2 S2-S6; ratified at the P0 → P1 gate (early relative to the original M03-start target — operator chose to remove the uncertainty before M02 ecosystem-matrix execution opens). M03 consumes the rename mechanic (GitHub UI rename + redirect-confirmation + optional `git remote set-url` propagation).

## Context

The aDNA template repository is currently published at `github.com/LatticeProtocol/Agentic-DNA`. The display-name rename `adna` → `Agentic-DNA` was performed in v6.0 (per `adna/.adna/CHANGELOG.md` v6.0 entry, line 34: *"Identity rename: Display name `adna` → `Agentic-DNA` across all governance files, docs, and context. GitHub repo renamed to `LatticeProtocol/Agentic-DNA`."*). The v6.0 entry also codified the **naming convention** (line 35):

> `Agentic-DNA` = display name, headings, repo name; `aDNA` = abbreviation in running text; `adna` lowercase preserved in protocol URIs, directory names, tags, and frontmatter topics.

Two facts surfaced during M01 Stage 2 Session 1 (2026-05-08; see [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj1_current_state.md|m01_obj1_current_state.md]]):

1. **The clone command is awkward**. Per `CHANGELOG.md` v6.0 entry line 37, the canonical clone is `git clone https://github.com/LatticeProtocol/Agentic-DNA.git adna` — a hyphenated-CamelCase URL, immediately renamed to lowercase `adna` on disk. Every operator types the destination renaming because the destination *should* be lowercase per the v6.0 convention.
2. **GitHub URLs are protocol URIs**, not display names. The v6.0 convention places URIs in the `adna` lowercase track. The repo URL is currently in the `Agentic-DNA` display-name track, contradicting its own rule.

The M03 repo-flatten work (this campaign) is the first time since v6.0 that the workspace setup-flow is being touched in a way that lets us correct the URL-slug without churn.

The campaign's M01 mission file ([[../../how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] §Obj 2 §Decision A) recommends rename to `adna`.

## Decision

**Rename the GitHub repository slug from `LatticeProtocol/Agentic-DNA` to `LatticeProtocol/adna`.**

The rename is **URL-slug-only**:
- **Display name in `Repository description`** stays `Agentic-DNA` (or becomes `Agentic-DNA (aDNA)` if useful for SEO).
- **All headings, prose references, and abbreviation usage** in governance files and docs stay on the v6.0 convention (`Agentic-DNA` for display, `aDNA` in running text).
- **Frontmatter `tags:`, directory names, and protocol URIs** continue using the `adna` lowercase form per v6.0 — and the GitHub URL now joins them.

This **aligns the GitHub URL with the v6.0 lowercase URI convention** that the convention itself prescribes. ADR-006 is **not a reversal of the v6.0 display-name rename**; it is a corrective alignment of one piece (the URL slug) with a rule v6.0 already established.

**Migration mechanics** (executed by M03):

1. **Operator action via GitHub UI**: rename repo `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` (Settings → General → Repository name → Save).
2. **GitHub URL forwarding**: GitHub automatically preserves the old URL (`github.com/LatticeProtocol/Agentic-DNA`) as a redirect to the new URL (`github.com/LatticeProtocol/adna`) **indefinitely** — as long as no new repository is created at the old name (canonical reference: GitHub Docs *"Renaming a repository"*). Existing `git clone …Agentic-DNA.git` commands and existing `origin` remotes continue to work without any operator intervention.
3. **Operator-optional remote URL update**: operators who want the new URL on their existing clone run **one command**:
   ```sh
   git -C ~/lattice/.adna remote set-url origin https://github.com/LatticeProtocol/adna.git
   ```
   This is optional — the redirect keeps the old URL working — but recommended for cleanliness.
4. **Documentation updates** (M03 grep+update sweep):
   - `adna/.adna/CHANGELOG.md` — v7.0 entry notes the rename + redirect mechanics + operator-optional command.
   - `adna/.adna/README.md` — clone command updated: `git clone https://github.com/LatticeProtocol/adna.git .adna` (new flat-clone form per M03; old form `… .git adna` superseded).
   - `adna/.adna/how/skills/skill_workspace_upgrade.md` — references to the URL updated.
   - `adna/.adna/how/skills/skill_project_fork.md` — no URL references in current content (verified Obj 1); no change needed.
   - `adna/.adna/how/skills/skill_onboarding.md` — no URL references in current content; no change needed.
   - `adna/.adna/MANIFEST.md` — if it carries a URL reference, update.
   - Workspace-level: `lattice/CLAUDE.md` if any references exist (verify during M03).
   - Site: `adna-docs.vercel.app` clone-instruction pages.
5. **Reservation against re-use**: do not create a new repository at `LatticeProtocol/Agentic-DNA` after the rename — that would invalidate the redirect. Recommend documenting this prohibition in `who/governance/` (M07 audit task).

## Consequences

### Positive

- **Self-consistency restored**: the v6.0 naming convention (URIs lowercase) now applies to the most-trafficked URI in the project — the GitHub repo URL.
- **Cleaner onboarding**: new clone command is `git clone …/adna.git .adna` (post-M03 flat clone) — direct, no rename-on-disk-step needed.
- **No breaking change for existing operators**: GitHub redirect keeps existing clones working indefinitely. The remote-URL-update command is optional.
- **Discoverability improvement**: search engines and link-shorteners often prefer all-lowercase URLs; `adna` is shorter + easier to type/share than `Agentic-DNA`.
- **Stars / issues / PRs / watchers / releases / actions / wiki**: all carry over automatically with the GitHub rename.

### Negative

- **One-time operator coordination**: external operators (Wilhelm Foundation × 2 vaults, TAPP joint venture, Super League engagement, ScienceStanley personal account) need a heads-up via M08a coordination memos so their tooling-side bookmarks/scripts get updated. Mitigation: M08a memo includes the redirect-still-works fact prominently; the URL update is optional.
- **Documentation hunt**: any link to `github.com/LatticeProtocol/Agentic-DNA` in external docs, blog posts, or `adopters` profiles that LatticeProtocol does not control will rely on GitHub's redirect. Mitigation: monitor; the redirect is durable.
- **Reversal cost**: if the rename is later undone (back to `Agentic-DNA`), the redirect chain becomes `Agentic-DNA → adna → Agentic-DNA` — still works but adds a cosmetic concern. We do not anticipate reversal; flagged for completeness.

### Neutral

- **No content changes to v6.0 rules**: the v6.0 display-name rename and naming convention are unchanged. ADR-006 is a URL-slug-only patch.
- **The `aDNA.aDNA/` vault repo is unaffected** — that repo is `LatticeProtocol/aDNA.aDNA`, separate from the template repo. ADR-006 applies only to the template repo (`Agentic-DNA` → `adna`).
- **The `adna/` directory name on disk** is also unaffected — that's the *cloned* directory name, which post-M03 becomes `.adna/` (per the flatten). The v6.0 convention is satisfied either way.

## Alternatives considered

| Alternative | Rationale to reject |
|---|---|
| **Keep `Agentic-DNA`** | Self-inconsistent with v6.0 convention (URIs are lowercase). The clone command's destination-rename step is friction every new operator hits. Inertia is the only argument for keeping it. |
| **Rename to `.adna`** | GitHub does not allow leading-dot repository names. (Rejected by mission §Obj 2 §Decision A; confirmed.) |
| **Rename to `aDNA`** | Mixed-case is ambiguous (`aDNA` vs `Adna` vs `ADNA`); search engines and shells handle all-lowercase better. The v6.0 convention reserves `aDNA` for running-text abbreviation, not URIs. |
| **Rename to `agentic-dna`** | Lowercase but still hyphenated and verbose; loses the v6.0 abbreviation discipline (`adna` is already the canonical lowercase form). |

## Forward-references

- **M03** consumes this ADR: M03 mission file's prerequisite-checks section will reference ADR-006 (status: accepted by then) before the GitHub UI rename.
- **M06 v7.0 release notes** will surface the rename + redirect mechanics in user-visible release prose.
- **M08a coordination memos** (one per external partner, per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §3) reference ADR-006 for the rename + the optional `git remote set-url` command.
- **Workspace `lattice/CLAUDE.md`** workspace router gets URL updates as part of M03 (per Obj 1 Issue I-13's broader workspace-CLAUDE-md update sweep).

## Companion

- [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]] (Decision B) — outer `adna/CLAUDE.md` disposition. Both ADRs are M01 Obj 2 deliverables; both move from `proposed` to `accepted` at the M03 phase gate.
