---
type: skill
skill_type: process
created: 2026-06-10
updated: 2026-06-10
status: active
category: release
trigger: Operator opens a template-release gate — ratified dev-graph changes are ready to ship to the public face `aDNA-Network/aDNA`
last_edited_by: agent_stanley
tags: [skill, release, template, public_face, adna_network, workspace_image, v7_1, adr_034]

requirements:
  tools: [git, gh, rsync, bash]
  context:
    - what/decisions/adr_034_public_face_repo_release_architecture.md
    - what/decisions/adr_011_aDNA_semver_discipline.md
    - CHANGELOG.md (§Version Policy — two-track)
  permissions:
    - push access to github.com/aDNA-Network/aDNA (the public face)
    - write access to the local node's ~/aDNA/.adna
---

# Skill: Template Release (dev graph → `aDNA-Network/aDNA`)

## Overview

Cuts a **manual, gate-fired release** of the aDNA standard from this vault (the private dev graph,
`aDNA-Network/aDNA.aDNA`) to the public face **`aDNA-Network/aDNA`** — the clone-and-run **workspace
image** (pre-instantiated router CLAUDE.md at root + the full standard tree embedded at `.adna/` + the
1-command install flow). Architecture of record: ADR-034. **There is no auto-sync** — every release is an
operator-gated governance event (Standing Order #1).

This skill is `process`-type: an agent executes the mechanics, but the release gate, the version-bump
decision, and the final push are operator decisions.

Inaugural release: **`v7.1` @ `e0fbb4c`** (2026-06-10, executed by Berthier/aDNALabs pre-codification;
this skill codifies that procedure for every release after it).

## Trigger

Invoke when:
- The operator **opens a release gate** — a batch of dev-graph changes to the standard (templates,
  skills, docs, governance, router) is ratified and ready to go public.
- A propagation-cadence point fires (P6-style: the dev graph reaches a phase close whose deliverables
  include standard changes).

Do **NOT** invoke:
- For site deploys (that is the Vercel prebuilt flow, `site/`).
- For vault-side-only changes (campaign artifacts, sessions, site content) — those never ship to the face.
- To "fix something quickly" on the public repo outside a gate — that is the exact pattern ADR-034
  §Consequences retires.

## Parameters

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `version` | string | Yes | — | The release tag `vX.Y` (continues the template line: v7.0 → v7.1 → …; two-track policy governs what bumps) |
| `release_notes` | string | Yes | — | Operator-ratified summary for the tag annotation + GitHub release |
| `root_surfaces_changed` | bool | No | false | Whether this release changes the image's ROOT surfaces (router CLAUDE.md / README / .gitignore / LICENSE) — root updates only when the release changes them |
| `dry_run` | bool | No | false | Assemble + diff, stop before commit/tag/push |

## Implementation

### Step (a) — Preconditions (hard gate)

1. **Release gate open** — explicit operator approval for THIS release (Standing Order #1; a lapsed
   intention is not a gate).
2. **Dev changes ratified** — every standard-touching change in the batch traces to an accepted
   ADR/mission close in this vault; nothing ships from open WIP.
3. Working tree clean in this vault (`git status --porcelain` → empty); the batch is committed.

### Step (b) — Assemble the standard tree

Build the release tree from this vault's canonical sources (the dev graph is the source of truth for the
standard's content; the assembly map lives with the release run):

```bash
ASSEMBLY=$(mktemp -d)/standard_tree
# Canonical sources → release tree. The exact source map is release-run-specific;
# record it in the release session file. Baseline: the prior released tree + the
# ratified deltas of this batch.
```

> The v7.1 baseline = `adna-legacy@74cb761` content. Subsequent releases start from the **current
> released tree** (fresh clone, step c) and apply the ratified deltas — never reconstruct from scratch.

### Step (c) — Sync a fresh clone of the release repo

```bash
WORK=$(mktemp -d)
git clone https://github.com/aDNA-Network/aDNA.git "$WORK/aDNA"
```

1. **Update `.adna/` content** with the assembled standard tree (rsync `--delete` inside
   `"$WORK/aDNA/.adna/"`, excluding `.git`).
2. **Apply the embed-note transform on `.adna/README.md`** — the standard tree's README (which in
   `adna-legacy` carries the deprecation banner) is swapped for the **embed note** ("this is the standard
   tree embedded in the workspace image; canonical home = this repo; dev graph = aDNA.aDNA") — a
   **mandatory release-skill step** (ADR-034 §3): the embedded copy must never present itself as the
   archived legacy repo nor as a standalone clone target.
3. **Update root surfaces** (router `CLAUDE.md`, `README.md`, `.gitignore`, `LICENSE`) **only when the
   release changes them** (`root_surfaces_changed`). The root router's source of truth is the template's
   `how/templates/template_workspace_claude.md` — pre-instantiate (copy + any release-noted
   adjustments), never hand-fork the two.

> ⚠️ **Recorded gotcha — `.gitignore` case-sensitivity**: the naive `*.aDNA/` pattern
> **case-insensitively matches `.adna/` on macOS**, silently dropping the embedded standard from the
> image (caught at the v7.1 build). The canonical form is `/?*.aDNA/` + `!/.adna/`. If this release
> touches `.gitignore`, preserve the re-include and re-verify on a case-insensitive filesystem
> (`git check-ignore -v .adna/CLAUDE.md` must return the `!/.adna/` rule or nothing — never `*.aDNA/`).

### Step (d) — Version bump + commit + tag + push

1. Bump versions per the **two-track CHANGELOG policy** (CHANGELOG.md §Version Policy + ADR-011):
   governance track (`CLAUDE.md` frontmatter `version`) and/or standard track (`adna_standard.md` title)
   as the batch warrants; the image tag `vX.Y` continues the template tag line.
2. `git add` (path-scoped — never `-A`), commit with the release summary, **annotated tag `vX.Y`**, push
   branch + tag. Operator confirms the push (the push IS the release).
3. Optionally publish a GitHub release from the tag with `release_notes`.

### Step (e) — Sync the local node's `~/aDNA/.adna`

The local checkout's origin points at the **ARCHIVED** `adna-legacy` — frozen; `git -C .adna pull` is a
permanent no-op after 2026-06-10. **This skill is what maintains the node's `.adna` post-release:**

```bash
rsync -a --delete --exclude '.git' "$WORK/aDNA/.adna/" ~/aDNA/.adna/
git -C ~/aDNA/.adna add -A && git -C ~/aDNA/.adna commit -m "release sync: <vX.Y> from aDNA-Network/aDNA (origin frozen at adna-legacy@74cb761; maintained by skill_template_release step e per ADR-034)"
```

The local commit diverges from the frozen origin by design — the origin is an archive, not an upstream.
Then regenerate the vault's install-truth fixture (`cd site && npm run sync:install`) and commit the sha
bump if it moved.

### Step (f) — Verification checklist (fresh-clone smoke test)

Run against a THROWAWAY clone of the just-pushed release (`git clone … $(mktemp -d)/smoke`):

| # | Check | Pass condition |
|---|---|---|
| 1 | Workspace router present | root `CLAUDE.md` exists and is the pre-instantiated router (not the template-with-`{{VARS}}`) |
| 2 | `role: template` intact | `.adna/MANIFEST.md` frontmatter carries `role: template` (first-run detection depends on it) |
| 3 | Key skills resolve | `.adna/how/skills/skill_project_fork.md` + `skill_onboarding.md` + `how/templates/template_workspace_claude.md` exist |
| 4 | Dummy `*.aDNA/` ignored | `mkdir Test.aDNA && touch Test.aDNA/x && git status --porcelain` → empty; AND `.adna/` itself still tracked (`git check-ignore .adna/CLAUDE.md` → no match) |
| 5 | Embed note present | `.adna/README.md` carries the embed note, NOT the adna-legacy deprecation banner |
| 6 | Old-URL redirect integrity | `https://github.com/LatticeProtocol/aDNA` still resolves → `aDNA-Network/adna-legacy` (HTTP < 400; redirects track repo-id — verified at v7.1, re-verify each release) |
| 7 | Tag + 1-command flow | `git clone <face> ~/tmp-ws && cd ~/tmp-ws && test -f CLAUDE.md && test -d .adna` green; tag `vX.Y` visible on the remote |

Record the checklist result in the release session file; a red row REVERTS the release decision to the
operator (never auto-remediate a pushed tag — a fix is a new gate).

## Outputs

| Output | Type | Description |
|---|---|---|
| Release commit + annotated tag `vX.Y` | git | On `aDNA-Network/aDNA` |
| Embed-note `.adna/README.md` | file transform | Mandatory per-release transform (step c.2) |
| Local node `.adna` sync commit | git (local) | Step (e); origin stays frozen |
| Regenerated `install_truth.json` | fixture | If template sha moved (step e) |
| Smoke-test record | session file | Step (f) checklist, 7 rows |

## Error Handling

| Error | Cause | Resolution |
|---|---|---|
| `.adna/` missing from fresh clone | `.gitignore` case-insensitivity regression | Step (c) gotcha — restore `/?*.aDNA/` + `!/.adna/`; the release is NO-GO until check 4 greens |
| Old-URL redirect broken | A same-named repo capturing or shadowing redirects (repo-id semantics changed) | Stop; escalate to operator — redirect integrity is a published guarantee (ADR-034 §2) |
| Push rejected | Branch protection / auth | Resolve via `gh auth`; never force-push the face |
| Local `.adna` sync conflicts | Operator-local modifications to `.adna/` (violates Workspace Standing Rule 1) | Surface the diff to the operator before overwriting; never silently clobber |

## Self-reference (Standing Order #8)

This skill is itself the pattern it ships: the standard teaches gate-fired propagation
(campaign phase gates, Standing Order #1), and the standard's own publication now runs through exactly
such a gate. The file lives at `how/skills/` in the dev graph and ships inside the very `.adna/` tree it
releases — the release procedure travels with the standard it releases.

## Related

- **`what/decisions/adr_034_public_face_repo_release_architecture.md`** — the architecture this skill executes.
- **`scripts/build_install_truth.mjs`** — vault-side fixture regenerated at step (e).
- **`how/skills/skill_workspace_upgrade.md`** (template-side) — the operator-facing upgrade path for pre-2026-06 installs.
- **`what/decisions/adr_011_aDNA_semver_discipline.md`** + `CHANGELOG.md` §Version Policy — the two-track versioning this skill bumps.
