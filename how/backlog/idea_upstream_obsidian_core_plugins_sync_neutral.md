---
type: backlog_idea
status: resolved
priority: low   # smallest change; could fold into the seed-canonicalization move
finding_id: OBS-UP-9   # Obsidian.aDNA P1 synthesis §5 #9 · drift D6
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (.obsidian/core-plugins.json)
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea_upstream, obsidian, core_plugins, sync, neutral_seed, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_upstream_obsidian_seed_canonicalization.md   # natural carrier
---

# idea_upstream — set `sync:false` in the template `core-plugins.json` (a neutral seed shouldn't assert a paid feature)

**Filed by Obsidian.aDNA** (P1 synthesis §5 #9, drift **D6**; routed per ADR-007, operator-gated at M06). Smallest of the set.

## The proposal

The `.adna` template's `core-plugins.json` ships `sync: true` — asserting Obsidian Sync (a paid/account feature) in the persona-neutral seed. Flip the template default to `sync:false`; vaults that want Sync opt in per-device.

## 2026-06-10 refresh — live evidence raised the stakes

The M05 fleet audit found **Sync-on as undeclared drift on 6/8 rolled-out vaults**, including the clinical **CakeHealth** vault — flagged ACTION (verify Sync will not propagate clinical content). A neutral-off template default is the upstream root-fix; Obsidian.aDNA's seed already treats `core-plugins.json` as per-device never-clobber, so the template is the right (only) place to set the neutral default. The `health_check.py` HC8 pass now warn-flags undeclared Sync-on fleet-wide.

## Trace

- Obsidian.aDNA `what/context/obsidian_config_baseline.md` §4/§7 · `obsidian_template_delta.md` §5/§7/§8.4 (p1_03) · M05 audit S-row (Sync) · synthesis §1 D6 + §5 #9

> **Triage 2026-06-23 (Cornerstone v8.1):** RESOLVED — core-plugins.json sync-neutral applied. Shipped in the combined v8.1 release (held at push gate; [[adr_038_combined_v81_release]]). See [[coord_2026_06_23_rosetta_to_seshat_cornerstone_v81_landed]].


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: sync-neutral applied, shipped v8.1 (fixed the Sync-on clinical-data drift). Status set to `resolved`; ratified at Champollion G0 (D2).
