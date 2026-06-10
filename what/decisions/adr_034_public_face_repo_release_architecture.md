---
type: decision
adr_id: adr_034
adr_number: 034
title: "Public face repo + release architecture — aDNA-Network/aDNA workspace image (embedded .adna/, pre-instantiated router, 1-command install); LatticeProtocol/aDNA archived as aDNA-Network/adna-legacy; aDNA.aDNA = private dev graph with manual gate-fired releases"
status: accepted
created: 2026-06-10
updated: 2026-06-10
ratified: 2026-06-10
last_edited_by: agent_stanley
supersedes: none
superseded_by: none
revises: "adr_006 (canonical-URL clause only — the mixed-case `LatticeProtocol/aDNA` slug is no longer the canonical home; the slug-casing decision itself stands as history)"
related:
  - how/skills/skill_template_release.md
  - scripts/build_install_truth.mjs
  - site/src/data/install_truth.json
  - site/tests/gates/gate-12-install-truth.spec.ts
  - what/decisions/adr_011_aDNA_semver_discipline.md
  - what/decisions/adr_023_registry_data_projection_contract.md
  - how/backlog/idea_upstream_onboarding_workspace_default_adna.md
  - who/coordination/coord_2026_06_10_rosetta_to_berthier_public_face_repo_ack.md
tags: [adr, decision, public_face, release_architecture, adna_network, adna_legacy, workspace_image, install_truth, versioning, v7_1]
---

# ADR-034: Public face repo + release architecture

## Status

**accepted** — **ratified 2026-06-10** by operator decision of record (the 2026-06-10 public-face plan,
approved at the operator gate and executed by Berthier/aDNALabs in
`session_stanley_20260610_public_face_repo`; this ADR is the vault-side record). Not a campaign-phase
artifact — the decisions below were operator-decided and already executed when this ADR was filed; it
records them and binds the vault's forward behavior (release skill, install truth, citation surfaces).

## Context

Until 2026-06-10 the aDNA standard's public home was **`LatticeProtocol/aDNA`** (mixed-case slug per
ADR-006 amendment; v7.0 tag, ADR-011 two-track versioning). The install flow it supported was
4 commands: make `~/aDNA`, clone the template into hidden `.adna/`, `cp` the workspace router from
`how/templates/template_workspace_claude.md`, launch `claude`. Two upstream PRs were in flight from this
vault: **PR #7** (`~/lattice → ~/aDNA` workspace-default flip, 5 onboarding surfaces — merged the morning
of 2026-06-10) and **PR #8** (this vault's `docs/install-root-flip` duplicate-in-part, filed at the audit
P2 close).

Three friction points drove a restructure: (1) the 4-command flow had a real failure mode (audit gap #16:
clone-as-my-project lands in the template's refused state) and a copy-the-router step that every new user
had to get right; (2) the org migration (23 repos → `aDNA-Network`) left the standard's face in the old
org; (3) the standard's dev work happens in this vault (private), with no defined dev→release seam — the
template repo was edited directly under operator-override exceptions.

## Decision

Operator-decided 2026-06-10, executed by Berthier; recorded here:

### 1. `aDNA-Network/aDNA` is the canonical public face — a clone-and-run workspace image

**LIVE + PUBLIC**, tag **`v7.1`**, commit **`e0fbb4c`**. Shape:

- **Root = a pre-instantiated workspace**: the workspace router `CLAUDE.md` ships ready (no
  `cp template_workspace_claude.md` step), plus `README.md`, `LICENSE`, and a `.gitignore` that keeps
  user projects untracked by design (`/?*.aDNA/` + `!/.adna/` — see Gotcha, §Consequences).
- **The full standard tree is embedded at `.adna/`** — content parity with `adna-legacy@74cb761`, with
  one transform: the embedded `.adna/README.md` deprecation banner is swapped for an **embed note**
  (a release-skill step, §3).
- **New-user flow is 1 command**:
  `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`.
  The clone IS the workspace; updates arrive by `git pull` at the workspace root (user `*.aDNA/`
  projects are untracked, so pulls stay clean).
- Smoke-tested at stand-up: 7/7 checks green, including old-URL redirect integrity.

### 2. `LatticeProtocol/aDNA` is archived as `aDNA-Network/adna-legacy`

- Transferred → `aDNA-Network/adna-legacy`, given a deprecation-banner README (commit **`74cb761`**),
  then **GitHub-ARCHIVED** (read-only).
- **Redirect semantics (verified)**: GitHub repo redirects track the **repo-id**, so the old
  `LatticeProtocol/aDNA` URLs follow the transferred repo → **`adna-legacy`**. Creating the new
  same-named repo (`aDNA-Network/aDNA`) did **not** capture the old-org redirects — old URLs land on the
  archived legacy repo (deprecation banner pointing forward), never silently on the new face. Existing
  `.adna/` clones therefore keep resolving — frozen at `74cb761`.
- This node's `~/aDNA/.adna` checkout: origin already points at `adna-legacy`; at `74cb761` (frozen
  final). Post-archive it is maintained by the release skill (§3 step e), not by `git pull` — the origin
  is frozen, so pulls are permanent no-ops after this release.

### 3. Release model: aDNA.aDNA (private) = the dev graph; releases are manual, gate-fired

- The standard's development happens in **this vault** (`aDNA-Network/aDNA.aDNA`, private). Releases to
  `aDNA-Network/aDNA` are **manual, operator-gate-fired** (P6-style propagation cadence) — **no
  auto-sync**. The release procedure is codified at
  [[../../how/skills/skill_template_release.md|skill_template_release]]: preconditions (gate open +
  ratified changes) → assemble standard tree → sync a fresh release-repo clone (`.adna/` content + the
  **embed-note README transform** + root surfaces only when changed) → two-track version bump → commit +
  tag `vX.Y` + push → sync the local node's `~/aDNA/.adna` (rsync released tree + local commit) →
  fresh-clone smoke-test checklist.
- Community contributions land as issues/PRs on the public face; accepted changes are folded into the
  dev graph and ship at the next gate-fired release.

### 4. PR #8 closure

**CLOSED-AS-SUPERSEDED** (not merged): its 5-file doc-flip was carried by PR #7; its residual stale-slug
fixes (lowercase `LatticeProtocol/adna` forms) are folded into this vault's same-day docs pass (this
ADR's session). The staging record (`m513_upstream_pr_staging/`) and the backlog vehicle
(`idea_upstream_onboarding_workspace_default_adna`) carry the disposition; E6/M5.13 O4's
"verify/merge PR #8" external is resolved by this closure.

### 5. Versioning

- The image tag **`v7.1`** continues the template's existing tag line (v7.0 → v7.1; same repo lineage in
  spirit, new repo-id in fact — the tag history before v7.1 lives in `adna-legacy`).
- The **two-track version policy continues unchanged** (ADR-011 + `CHANGELOG.md` §Version Policy):
  governance track (`CLAUDE.md` frontmatter `version`) and standard track (`adna_standard.md` title),
  Major.Minor, changelog organized by governance version. The release tag versions the **image**;
  it does not collapse the two tracks.

### 6. Install truth follows the image

`scripts/build_install_truth.mjs` + `site/src/data/install_truth.json` (schema 0.2) + gate-12 +
`/get-started` + `/network` flip to the 1-command flow and the new canonical repo; the gate's
legacy-form rejection extends to the old slug and the dead `cp`-router step. Existing installs
(pre-2026-06 layout) keep working via the redirect chain; the upgrade path is `skill_workspace_upgrade`.

## Consequences

- **New users**: 1 command, zero router-copy failure mode, workspace updates = `git pull`.
- **This vault**: gains the release seam it lacked — edits to the standard no longer require
  operator-override pushes to a live template; they batch into gate-fired releases via the skill.
- **Frozen origin**: `git -C .adna pull` (the historic update path, still named in workspace Standing
  Rule 1) is now a no-op; the release skill's step (e) supersedes it on this node. Flagged to
  Berthier/Hestia for the workspace-router wording (owner: workspace `CLAUDE.md`, not this vault).
- **Citation surfaces**: CLAUDE.md/MANIFEST/README/CONTRIBUTING/adna.md live references updated to the
  new face; historical narrative (CHANGELOG entries, session/mission records, STATE history) stays
  verbatim (archive-never-delete).
- **Gotcha for the record (.gitignore case-sensitivity)**: the naive `*.aDNA/` ignore pattern
  **case-insensitively matched `.adna/` on macOS** (default-case-insensitive filesystem), silently
  excluding the embedded standard from the image — a real bug caught at build. The shipped form is
  `/?*.aDNA/` + `!/.adna/` (explicit re-include). Any future edit to the image's `.gitignore` must
  preserve the re-include and re-verify on a case-insensitive filesystem (encoded in the release skill's
  smoke-test checklist).

## Alternatives considered

- **Keep `LatticeProtocol/aDNA` as the face** — rejected: leaves the standard outside the `aDNA-Network`
  org and keeps the 4-command flow's failure modes.
- **In-place transfer of the template repo to `aDNA-Network/aDNA` (no new repo)** — rejected: the face
  needed a different *shape* (workspace image vs bare template), and the transfer-then-archive preserves
  every old URL/clone via redirect while keeping history auditable in `adna-legacy`.
- **Auto-sync dev graph → release repo** — rejected: releases are governance events (phase-gate
  discipline, Standing Order #1); auto-sync would ship unratified dev state.
