---
type: idea
idea_id: idea_upstream_path_convention_doctrine
created: 2026-07-18
updated: 2026-07-18
status: proposed
origin: "Home.aDNA campaign_context_health (Operation Clear Hearth) Wave F / W6 — filed by Hestia per skill_upstream_contribution"
persona_filed_by: hestia
tags: [idea, upstream, path_convention, doctrine, clear_hearth_w6, hestia]
---

# Upstream idea — workspace path-convention doctrine (`~/aDNA/` in docs · absolute in execution contexts)

## The convention (proposed as a standard doctrine line)

> **Docs and prose use `~/aDNA/...`; execution contexts use the absolute path.** Any human- or agent-read
> reference (CLAUDE/AGENTS/README/MANIFEST/STATE prose, coordination memos, ADRs, context files) writes
> workspace paths as `~/aDNA/...`. The absolute form (`/Users/<operator>/aDNA/...`) is reserved for contexts
> where `~` does not expand or must not be trusted to: **scripts, CI, launchd plists, cron, structured data
> fields consumed by machines** (e.g. `federation_envelope_path:`), and rows whose *content is the datum
> itself* (e.g. a MANIFEST "Workspace root" identity row that defines where `~aDNA` lives on this node).

## Evidence

- **P0 audit (Clear Hearth, 2026-07-17):** fleet md docs carried 2,917 absolute vs 13,021 tilde refs (~18%
  nonconforming) — absolute paths break the moment a vault is read from another node, a different operator
  account, or a transplanted clone; tilde paths survive all three.
- **W6 execution (2026-07-18):** the live-governance tier (356 root governance files) was normalized — 45
  prose occurrences converted across 13 files (7 vault commits); the survivors are enumerable as deliberate
  (structured data fields · commands · root-identity datum rows · held vaults). The sweep also surfaced that
  absolute prose paths *hide dangling refs*: 6+ dead absolute pointers (retired root clones, rehomed
  workspace-root files, case-wrong vault names) sat unnoticed precisely because nothing exercises an absolute
  path until it breaks.

## Proposed standard touch

1. A doctrine line (above) in the base template's CLAUDE.md guidance (linking/naming section) at the next
   template release.
2. Optional: a health-check probe (S-series) counting absolute workspace paths in a vault's root governance
   files; >0 non-annotated = advisory flag.
3. Fork-kit: `skill_project_fork` writes tilde-form paths in everything it generates (most already do).

## Disposition

Rosetta's call at intake; no urgency. The live-gov tier is already conforming as of W6; the docs-frame tail
(~2,900 refs, mostly closed records which stay verbatim) needs no sweep — the doctrine only governs *new*
writing plus live surfaces.

## Disposition — Refit M5 vNext triage (2026-07-24) · **ADOPT → v8.9 governance** *(proposed; ratifies at G2/DP9)*

**Proposed: ADOPT into the v8.9 governance batch — a doctrine line, low urgency.** The convention is proven and
low-risk: Clear Hearth's P0 audit measured ~18% nonconforming (2,917 absolute vs 13,021 tilde refs), and the W6
sweep showed absolute prose paths actively *hide dangling refs* (6+ dead absolute pointers sat unnoticed). It governs
**new writing + live surfaces only** — the closed-record tail (~2,900 refs) stays verbatim (SO-6), so there is no
back-sweep cost.

**Ships as (v8.9 governance — doctrine/guidance, no normative schema change):**
1. A doctrine line in the base template `.adna/CLAUDE.md` linking/naming section: *"Docs and prose use `~/aDNA/...`;
   execution contexts (scripts, CI, launchd, cron, machine-consumed data fields, root-identity datum rows) use the
   absolute path."*
2. Optional S-series health probe: count non-annotated absolute workspace paths in a vault's root governance files;
   `>0 = advisory flag`.
3. `skill_project_fork` writes tilde-form in everything it generates (most already do) — pairs cleanly with the
   [[idea_upstream_fork_kit_agents_enforcement]] fork-skill hardening.

No count bump. Governance-layer only. Roadmap: [[vnext_roadmap]] §v8.9.
