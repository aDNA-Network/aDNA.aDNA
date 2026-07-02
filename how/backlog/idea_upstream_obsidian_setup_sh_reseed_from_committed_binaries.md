---
type: backlog_idea
status: resolved
priority: low
finding_id: OBS-UP-8   # Obsidian.aDNA P1 synthesis §5 #8 · drift D9
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (setup.sh / reseed mechanism)
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea_upstream, obsidian, setup_sh, committed_binaries, offline_install, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_upstream_fork_obsidian_reseed.md
  - aDNA.aDNA/how/backlog/backlog_F_S2_2_config_binary_asymmetry.md
---

# idea_upstream — let the reseed prefer committed `plugins/*` binaries over GitHub re-download

**Filed by Obsidian.aDNA** (P1 synthesis §5 #8, drift **D9**; routed per ADR-007, operator-gated at M06). Lower priority.

## The proposal

Where a vault (or a donor vault) already **commits** plugin binaries, `setup.sh`/the reseed should use them as the install source instead of re-downloading GitHub releases — offline-capable, faster, version-pinned-by-construction.

## 2026-06-10 refresh — the pattern is now proven

`Obsidian.aDNA/what/code/reseed_runner.py` materializes binaries by **donor-copy** (from `Home.aDNA`, zero network) and ran identically across the 8-vault fleet (R10-verified, idempotent). The upstream ask is simply: adopt donor/committed-binaries-first with download-as-fallback. One caveat the fleet learned: per-vault **git posture is not uniform** (some vaults track binaries, some gitignore them — honor each vault's documented convention; `skill_obsidian_seed` R7).

## Trace

- Obsidian.aDNA `what/context/obsidian_template_delta.md` §8.3 (p1_03) · `reseed_runner.py` (donor-copy materialize) · synthesis §1 D9 + §5 #8

> **Triage 2026-06-23 (Cornerstone v8.1):** RESOLVED — folded into the bundle (binary materialization + retained installer). Shipped in the combined v8.1 release (held at push gate; [[adr_038_combined_v81_release]]). See [[coord_2026_06_23_rosetta_to_seshat_cornerstone_v81_landed]].


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: folded into the v8.1 bundle (binary materialization + retained installer). Status set to `resolved`; ratified at Champollion G0 (D2).
