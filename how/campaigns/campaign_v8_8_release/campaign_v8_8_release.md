---
campaign_id: campaign_v8_8_release
type: campaign
title: "Operation Distillery — the v8.8 template release (CLAUDE.md prune + inner-README III)"
owner: stanley
status: active
phase_count: 4
mission_count: 1
estimated_sessions: "3-5"
calibrated_sessions: "3-5"
estimation_class: "governance-broad"
executor_tier: opus
priority: medium
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
tags: [campaign, v8_8_release, distillery, batch_b, claude_md_prune, readme_iii, template_quality]
---

# Campaign: Operation Distillery — the v8.8 template release

> **Codename note**: "Distillery" is a proposed codename (operator-adjustable) — the campaign *distills* the base
> template's governance layer down to its essence (prune the CLAUDE.md, sharpen the READMEs) without losing
> potency. Rename or drop freely.

## Goal

Ship **v8.8** of the aDNA standard to the public face `aDNA-Network/aDNA` — a **template-quality release**
(governance `8.7 → 8.8`; **standard stays v2.5**, no normative surface). Its spine is **Batch B** — the
"campaign-shaped, needs its own review + adversarial pass" work that v8.6 (Ouroboros) and v8.7 (Cleanroom)
both deferred: **prune the base `.adna/CLAUDE.md`** (the governance layer that loads into every session of every
aDNA vault — currently **~7,720 tokens / 447 lines**) and **III-review the base READMEs** (inner
`.adna/README.md` 157 lines + root `README.md` 88 lines). When it closes, the file every fork inherits and loads
first is measurably leaner and clearer, with no loss of governance.

## Context

**Batch B** was routed out of Operation Ouroboros (v8.6) explicitly as out-of-scope: *"campaign-shaped (each L,
needs its own review + adversarial pass) → v8.7 / own cycle"* — then held again through v8.7 (Cleanroom).
Its two components are `accepted` backlog ideas: `how/backlog/idea_upstream_claude_md_prune.md` (CLAUDE.md prune,
with **M01 lessons-learned baked in**) + `how/backlog/idea_inner_readme_iii.md` (README III, **premise re-scoped**
— the "870 lines" claim is dead; the real inner README is 157 lines).

"Continue" after v8.7 shipped (2026-07-13) → the operator chose **Start Batch B** (AskUserQuestion). Both
components are **image-side (`.adna/`) → they ship only through `skill_template_release`** (the same operator-gated
release path v8.7 used), so this is a full release campaign, not a lone mission.

**Why a campaign, not a lone mission**: the prune is judgment-heavy (what to cut vs. extract vs. keep, without
weakening governance) and the README III is a review pass — each "needs its own review + adversarial pass" per
the Ouroboros ruling; and the release carries the **two operator gates** (P2 ratify, P3 fire). Mirrors the
Ouroboros / Cleanroom precedent.

Prior release precedent: [[reference_skill_template_release_execution]] (memory) · v8.7 shipped 2026-07-13
(`1c30f3b`, tag `v8.7`); its **key carry-forward**: the governance version-surface set is **5** (CLAUDE.md
frontmatter + header comment + CHANGELOG + **both README badges**).

## Scope

### In Scope — Batch B (the spine)

- **Component A — `.adna/CLAUDE.md` prune.** Slim the ~7.7K-token / 447-line template governance layer.
  **Methodology (M01 lessons, non-negotiable — `idea_upstream_claude_md_prune.md` §M01):** (1) **measure actual
  section char counts BEFORE projecting** savings (line-count projections over/under-shoot); (2) **read the real
  file first**, identify extractable sections post-read (never author the diff blind); (3) **produce BOTH a
  conservative diff** (tighten parentheticals · dedupe cross-refs · compress self-evident examples; ~250-500 tok)
  **AND an aggressive diff** (extract dense sections — e.g. Agent Protocol [124 ln] / Domain Knowledge [96 ln] —
  to spec/governance files + link; ~1.5-3k tok); (4) the operator **rules depth per-section at P2** with the real
  diffs in hand. Three extraction patterns to expect: ecosystem-detail → `what/specs/`; governance-content →
  `how/governance/`; a possible template "Personality Customization" → `how/templates/example_personalities.md`.
  **ADR-collision check** before any new ADR (`ls what/decisions/ | grep adr_`).
- **Component B — README III.** Re-scoped III pass on the **actual** `.adna/README.md` (157 lines) + the root
  `README.md` (88 lines) — the same reader-panel lens the root README got, but **right-sized** (the "10 cycles /
  870 lines" premise is dead; a 157-line file earns a focused pass, not 10 cycles). Fix jargon, dark-mode/IA,
  confidence traps; preserve the embed note (ADR-034 §3) + the (now-correct) badges.

### In Scope — cheap rider (conditional)

- **`.gitleaks.toml` `.obsidian/plugins` allowlist** — suppress the 8 pre-existing minified-JS false positives a
  full-tree gitleaks scan flags on the image (surfaced at v8.7's smoke). Rider IF the prune/III touches the
  release anyway; else defer. Low priority (the diff-based pre-push is already clean; only a full-tree/host-move
  scan hits them).

### Out of Scope

- **`node_manifest` interview emission** — cross-persona (Hestia's altitude) + ADR-015 Tier-3 gated → a
  **Hestia-led mission** in Home.aDNA, not this campaign.
- Aggressive extraction shipped **without** the P2 per-section ruling; touching any normative standard surface
  (that's a v2.6 window); the dev-vault's own CLAUDE.md (Rosetta's, diverged — not the template).

## Phases & Missions

### Phase 0: Charter *(this session)*
Create the campaign scaffold + author the P1 mission; open the campaign in STATE. **Done when** the dir, charter,
CLAUDE.md, and `mission_v8_8_p1_prune_and_iii.md` exist and STATE reflects the open campaign.

### Phase 1: Author *(recommended: a FRESH session — L-effort, judgment-heavy, benefits from fresh context)*

| Mission | Title | Sessions | Status |
|---------|-------|----------|--------|
| P1 | CLAUDE.md prune (both diffs) + README III | 2-3 | ⏳ pending |

**Author order**: (1) measure `.adna/CLAUDE.md` section char counts → produce the conservative + aggressive diffs
(staged artifacts; do NOT edit `.adna/` — image-curated, apply at P3); (2) III-review the inner + root READMEs →
staged improved versions. **Phase exit gate**: both prune diffs + the README-III staged artifacts authored +
self-reviewed (an adversarial re-read of each — "does any cut weaken governance / break a fork?"); a P1 AAR filed.

### Phase 2: Ratify *(OPERATOR GATE)*
Operator reviews the real diffs and **rules the prune depth per-section** (conservative/aggressive/keep) + signs
the README-III changes (§7.7). **Phase exit gate**: `template_ratification_record` recorded; the v8.8 ship-set frozen.

### Phase 3: Fire *(OPERATOR GATE)*
`skill_template_release` v8.8: dry-run → operator confirm → fold the ratified prune + READMEs + any extracted
spec files + the **5 version surfaces** (CLAUDE.md frontmatter + header comment + CHANGELOG + **both README
badges** — the v8.7 carry-forward) into a fresh clone's `.adna/` → gitleaks + full-link-set scan + `adna_validate
--governance` zero-drift → **pause for second GO** → tag `v8.8` + push (tags-only) → sync `~/aDNA/.adna` → 7-row
smoke → close + AAR. **Phase exit gate**: tag `v8.8` live; 7/7 smoke green; local `.adna` synced.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| DP0 | (pre-campaign) | Start Batch B? | ✅ resolved — yes (operator, 2026-07-13) |
| DP1 | P2 | **CLAUDE.md prune depth per-section** (conservative / aggressive-extract / keep) — ruled with real diffs | ⏳ open (the pivotal gate) |
| DP2 | P1 | Extraction destinations for any aggressive cuts (`what/specs/` vs `how/governance/` vs a new `example_personalities.md`) | ⏳ open (P1, per M01 patterns) |
| DP3 | P1 close | README-III scope confirm (inner-only vs inner+root) + gitleaks-rider include/defer | ⏳ open |
| DP4 | P2 | Ratify the batch + freeze | ⏳ open (operator gate) |
| DP5 | P3 | Fire the release | ⏳ open (operator gate) |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| A prune cut silently weakens governance (removes a load-bearing rule) | High | Adversarial re-read at P1 ("does this cut change behavior?"); operator per-section ruling at P2; prune removes duplication/verbosity, never rules |
| Aggressive extraction fragments the template (agents now must load N files) | Medium | Extract only genuinely-detachable spec/example detail; CLAUDE.md keeps the top-level rule + a link; conservative is the safe default per-section |
| A leaked private wikilink/path ships into an extracted spec file | High | DE-LINK every staged artifact (`](…)` + `[[…]]`); diff-based delta-only fold (v8.5/v8.7 discipline) |
| Version-surface miss (the v8.7 badge lesson) | Medium | The 5-surface checklist is in the ratification record + reference memory — hard-check all 5 at P3 |
| Re-measuring shows little headroom (already-lean) | Low | The file GREW to 7.7K tokens (was 5.5K in May) → ample headroom; conservative alone clears ~250-500 tok |

## Verification Strategy

Per-mission: SITREP + 5-step AAR + staged artifacts self-reviewed (+ an adversarial governance re-read of every
prune cut). Release (P3): the 7-row fresh-clone smoke + the **5-surface** version check + full-link-set leak scan
+ `adna_validate --governance` zero-drift.

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Charter | — | 0 (this session) |
| P1 Author | P1 | 2-3 (fresh session recommended) |
| P2 Ratify | (gate) | 0 (operator) |
| P3 Fire | (release) | 1 |
| **Total** | **1 mission + 2 gates** | **3-5 sessions** |

## Notes

- **Image-curated work.** `.adna/CLAUDE.md` + `.adna/README.md` + root `README.md` have **no clean dev-graph
  source** (the dev vault's are Rosetta's own, diverged) → author the prune/III as **complete staged artifacts**
  in `artifacts/`, applied at P3 assembly (the v8.7 items-2/3/5 pattern), never as `.adna/` edits (SR1).
- **Standard stays v2.5.** Governance `8.7 → 8.8` only.
- **Tags-only** + **never move a pushed tag** (v8.7's badge fix rode a follow-up commit, not a tag move).
- Source ideas: `how/backlog/idea_upstream_claude_md_prune.md` (M01 methodology) · `idea_inner_readme_iii.md`
  (re-scoped premise). Precedent to mirror: `campaign_v8_7_release/` (Cleanroom).
- **Recommended: run P1 in a fresh session** — the prune is judgment-heavy and the current session already shipped
  v8.7 end-to-end; the adversarial governance re-read of every cut deserves fresh context (the "plan
  comprehensively / build after ratification" discipline).
