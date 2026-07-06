---
type: backlog_idea
idea_id: idea_upstream_state_md_read_hint
title: "Add Heavy-File Read Convention to v8.0+ AGENTS.md template"
category: doctrine
status: resolved
priority: medium
effort: tiny  # < 0.5 session — single-section insert in upstream AGENTS.md template
proposed_by: agent_stanley
proposed_date: 2026-05-19
updated: 2026-07-06
upstream: true
target_version: "v8.0"
last_edited_by: agent_rosetta
tags: [backlog, upstream, doctrine, agents_md, heavy_file_read, offset_limit_convention, context_budget]
created: 2026-05-19
fold_batch: champollion_m6_1_rc
---

# Upstream Contribution — Heavy-File Read Convention in `.adna/AGENTS.md`

## Problem

Accumulator-shape files in aDNA vaults (vault-level `STATE.md`, campaign masters, large mission files, AAR aggregates) cross the Claude Code Read-tool 256 KB limit when audit history accumulates. Agents loading these files at cold-start pay full content-load cost without realizing — and once the file exceeds 256 KB, full-file Reads simply fail with `File content exceeds maximum allowed size`. The router-vs-archive split (M2.1 Op 1; STATE.md → STATE.md + STATE_archive.md) addresses this for any given file, but the upstream `.adna/AGENTS.md` template carries no general convention guiding agents to use `offset` + `limit` Read defaults on heavy files. Each vault that inherits from `.adna/` re-discovers the lesson.

## Proposed solution

Add a `## Heavy-File Read Convention` section to the upstream `.adna/AGENTS.md` template (between `## Safety Rules` and `## Priority Hierarchy` by current `aDNA.aDNA/AGENTS.md` precedent). Verbatim text (≤ 7 lines net):

```markdown
## Heavy-File Read Convention

For any file ≥ ~ 50 kT content-load OR ≥ 200 KB byte size, default to `offset` + `limit` parameters on Read. Typical heavy files: vault-level `STATE.md`, campaign masters, mission files at S3 close, large AAR aggregates. The router-vs-archive pattern (split heavy files into a live router + an audit archive) is the canonical mitigation; even the router benefits from partial Reads when only the top bullet is needed.

**Rule of thumb**: if Read returns `File content exceeds maximum`, that's a router-vs-archive split candidate — flag for backlog if not already split.
```

## Reasoning

- **Direct empirical evidence (M2.1 S2)**: pre-split `aDNA.aDNA/STATE.md` was 351 KB / ~88 kT and failed full Read on M2.1 S2 entry (`File content (343.5KB) exceeds maximum allowed size (256KB)`). Post-split router 42 KB / ~10 kT reads cleanly.
- **M1.3 + M1.4 measurements**: convergence-model Mid-magnitude verdict + API-billing companion thesis (per `node.aDNA/what/context/token_baselines.md` v0.1.1 §2.1 + §3) confirm cache_creation tax of ~300–500 kT per session entry, scaling with per-file content-load. STATE.md is the dominant pattern (α-rank 25; top of α/β/γ/δ).
- **Cross-vault evidence**: M1.3 Type A baseline (25 vaults) found 6 of 25 (24%) carry > 30 kT STATE.md tokens — `aDNA.aDNA` highest at 75.8 kT; others (lattice-labs, LatticeLabs.aDNA, LatticeNetwork.aDNA, RareHarness.aDNA, CanvasForge.aDNA, etc.) approaching threshold. Single-vault hint at M2.1 doesn't cover ecosystem; upstream propagation does.
- **Additive, not breaking**: pure doctrine addition; no existing AGENTS.md template content changes. Vaults can adopt the router-vs-archive split per their own discretion (no forced split mandate).

## Compatibility

- **Upstream `.adna/AGENTS.md`**: 7-line additive section; no removal or rewrite of existing rules.
- **Forks inheriting the template**: receive the hint on next clone of `.adna/`. Existing forks continue working without change.
- **Skill compatibility**: the convention pairs naturally with the future `skill_campaign_close_archive.md` (Op 3 graduation candidate per `m21_obj4_archive_convention_design.md`) but is independent of it.
- **No `.claude/settings.json` impact**: hint is advisory not configuration. If Claude Code changes Read defaults to support large files natively, the hint becomes redundant — no regression.

## Acceptance test

After merge:
1. Clone a fresh `.adna/` template: `git clone https://github.com/LatticeProtocol/aDNA.git .adna_test`.
2. Confirm `.adna_test/AGENTS.md` carries `## Heavy-File Read Convention` section between `## Safety Rules` and `## Priority Hierarchy`.
3. Confirm the section text matches the proposed text (above).
4. Fork a new project from the template via `skill_project_fork.md`; confirm the new project's `AGENTS.md` inherits the convention.
5. Cold-start an agent session in the new project; observe that the agent reads the convention before encountering any STATE.md > 50 kT file.

## Cross-references

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split.md|M2.1 mission file]] §Objective 6 (Op 2 destructive execution — local hint landed at `aDNA.aDNA/AGENTS.md`)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj3_agents_md_hint_design.md|m21_obj3_agents_md_hint_design.md]] §4 (this backlog placeholder's design origin)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj2_state_split_design.md|m21_obj2_state_split_design.md]] (Op 1 sibling — router+archive split canonical instance)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md|m21_obj4_archive_convention_design.md]] (Op 3 sibling — auto-archive convention; skill graduation candidate)
- `node.aDNA/what/context/token_baselines.md` v0.1.1 — measured costs (Mid-magnitude verdict + α-rank 25 dominance)
- Campaign Standing Order #14 — ADR ratification gated at phase entries; upstream propagation gates at v8 P6 close per ADR-005 rule 3

## Promotion path

- **At v8 P6 (campaign close + v8.0 tag)**: this backlog placeholder is consumed by a v8 P6 mission that lands the hint in `.adna/AGENTS.md` upstream. Single-commit additive change pattern (4th instance after ADR-008 + `e3b3bcc` + `8673383`).
- **Promotion criteria**: at v8 P6, confirm (a) the hint at `aDNA.aDNA/AGENTS.md` survived ≥ 3 sessions of cold-start use without negative feedback; (b) the M2.1 S3 AAR didn't surface contraindications; (c) no operator override requested. If all (a)(b)(c) pass, the v8 P6 mission lands the upstream commit.
- **Anti-promotion gate**: if M2.1 S3 surfaces a contraindication (e.g., the hint causes agents to skip Reads they should make, or the offset+limit defaults are too aggressive), defer to v8.1+ or revise the hint text before upstream propagation.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

**Resolved 2026-07-06 (Meridian M6):** shipped in the v8.4 image (Champollion RC IN-set); status-flip was the missing post-ship close-out.
