---
type: session
created: 2026-06-22
updated: 2026-06-22
last_edited_by: agent_stanley
tags: [session, release, skill_template_release, v8_1, cornerstone, f1_catchup, combined, cross_vault]
session_id: session_stanley_20260623T021840Z_v81_combined_release
user: stanley
started: 2026-06-23T02:18:40Z
status: active
intent: "Execute a COMBINED v8.1 public-image release — Operation Cornerstone Obsidian parity bundle + fork-reseed fix (Obsidian.aDNA M07) AND the F1 §5 body-completion (ADR-035 materialization) — via skill_template_release. Assemble + verify in a throwaway clone, ratify (adr_038), hold at the operator push gate (the push IS the release)."
machine: l1_local
tier: 2
scope:
  directories:
    - aDNA.aDNA/what/decisions/
    - aDNA.aDNA/how/sessions/active/
    - "(release-time, throwaway) a fresh clone of aDNA-Network/aDNA"
    - "~/aDNA/.adna/ (step-e local mirror sync, post-push only)"
  files:
    - aDNA.aDNA/what/decisions/adr_038_combined_v81_release.md
    - "aDNA-Network/aDNA @ v8.1 (operator-gated public push)"
heartbeat: 2026-06-23T02:18:40Z
files_modified: []
files_created:
  - aDNA.aDNA/what/decisions/adr_038_combined_v81_release.md
completed:
---

## Activity Log

- 02:18 — Session started. Pre-flight in aDNA.aDNA (Rosetta lane): working tree clean; donor binaries present (terminal 3.25.0 · NN 2.6.6 · Tokyo Night); `gh` authenticated (repo scope; clone needs no auth, push is the gated step). Public `.adna` baseline = governance v8.0, standard title v2.3 (body still 14 — the F1 gap), CHANGELOG Keep-a-Changelog.
- Operator decisions this session: **(1) combine** Cornerstone + F1 into one v8.1; **(2) drive to the push gate**.

## SITREP

**Completed**:
- Pre-flight recon (donor / auth / baseline) + ratification ADR-038 (combined v8.1 release).

**In progress**:
- Assemble v8.1 in a throwaway clone (Cornerstone bundle + F1 §5 delta + embed-note), verify HC1–HC9 green + F1 greps, then cut commit + annotated tag and **hold for the operator push**.

**Next up**:
- Operator confirms the public push → step-(e) local `.adna` sync → step-(f) combined smoke (7 rows + F1 row 8 + Cornerstone first-open on clone AND fork) = M07 P4 → close-out (AARs, STATE, coordination_ledger, Seshat→Rosetta reply).

**Blockers**:
- The public push is the operator gate (held by design). Hestia `how/Home.md` deletion deferred (non-blocking; homepage repoint ships).

**Files touched**:
- Created: `what/decisions/adr_038_combined_v81_release.md`, this session file.

## Next Session Prompt

A COMBINED **v8.1** public-image release is mid-flight in `aDNA.aDNA` (Rosetta lane): it carries **both** the Operation Cornerstone Obsidian parity bundle + fork-reseed fix (`Obsidian.aDNA/what/obsidian/base_template_parity_bundle/`, M07) **and** the F1 §5 body-completion (the 4-line `inventory/`+`identity/` delta from `f1_catchup_release_prep.md`, ADR-035). Ratified by **adr_038**. To continue: run `skill_template_release` — fresh-clone `aDNA-Network/aDNA`, run `base_template_parity_bundle/apply_to_template.sh <clone>/.adna --donor ~/aDNA/Home.aDNA`, hand-apply the two doc deltas (`setup.sh.delta.md` 15→14, `skill_project_fork.delta.md` drop `rm -f setup.sh`), copy the dev `what/docs/adna_standard.md` forward and dry-diff to confirm only the 4+3 F1 lines move, apply the embed-note transform, then `health_check.py <clone>/.adna` → HC1–HC9 green + the four F1 greps → 1. Bump governance 8.0→8.1, CHANGELOG `[Unreleased]→[v8.1]`, commit path-scoped, annotated tag `v8.1`, **operator confirms the push**. Then step-(e) `~/aDNA/.adna` rsync + commit, step-(f) combined smoke on a fresh clone AND a fresh fork (= M07 P4). Mind the `.gitignore` case gotcha (`/?*.aDNA/`+`!/.adna/`). Defer the Hestia `how/Home.md` deletion (pending ack).
