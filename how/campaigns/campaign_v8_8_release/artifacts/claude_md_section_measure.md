---
type: artifact
artifact_class: measurement
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign_id: campaign_v8_8_release
mission_id: mission_v8_8_p1_prune_and_iii
objective: 1
status: complete
tags: [artifact, v8_8_release, distillery, measurement, claude_md_prune, m01]
---

# Obj 1 — `.adna/CLAUDE.md` Section Measurement (M01 measure-first)

**Target**: `~/aDNA/.adna/CLAUDE.md` (the base template governance layer — loaded first in every session of every
aDNA vault). **Method**: Python segmentation on `##` (top-level) + `###` (sub-block) headings; actual char counts
(M01 rule #1 — never project from line counts). Scripts: `scratchpad/measure_claude_md.py` + `measure_subblocks.py`.

## Whole-file

| Metric | Value |
|--------|-------|
| Lines | **447** |
| Chars | **30,378** |
| Tokens (calibrated) | **~7,720** (ratio **3.93 chars/tok** — table/code-dense) |
| Frontmatter `token_estimate` | **`~3000` — STALE by ~2.5×** (a fix candidate; the real weight is ~7.7K) |

> The `3.93 chars/tok` ratio is anchored to the campaign's ~7,720-tok whole-file figure. Per-section token columns
> below use that same ratio, so they sum to the whole. Chars is the hard metric; tokens are the derived estimate.

## Per-section (file order)

| Section (L range) | lines | chars | ~tok | % file | disposition |
|---|--:|--:|--:|--:|---|
| Preamble — frontmatter + title + header changelog (L1–16) | 16 | 2,528 | 642 | 8.3% | conservative (trim old header comments; fix stale `token_estimate`) |
| Identity & Personality (L17–35) | 19 | 1,078 | 274 | 3.5% | keep; Personality-Customization block → possible extract |
| First-Run Detection (L36–50) | 15 | 873 | 222 | 2.9% | keep (load-bearing) |
| Project Map (L51–83) | 33 | 1,783 | 453 | 5.9% | keep (load-bearing orientation) |
| Safety Rules (L84–131) | 48 | 2,091 | 531 | 6.9% | conservative dedupe (see sub-analysis) |
| Standing Orders (L132–142) | 11 | 989 | 251 | 3.3% | keep (load-bearing rules) |
| Git Coordination (L143–154) | 12 | 757 | 192 | 2.5% | keep (load-bearing) |
| **Agent Protocol (L155–278)** | **124** | **9,371** | **2,381** | **30.8%** | **aggressive-extract targets inside** |
| **Domain Knowledge (L279–374)** | **96** | **5,955** | **1,513** | **19.6%** | **aggressive — whole section is reference** |
| **Working with Content (L375–447)** | **73** | **4,953** | **1,259** | **16.3%** | **aggressive-extract targets inside** |

**Top 3 sections = 20,279 chars = 66.7% of the file** (Agent Protocol + Domain Knowledge + Working with Content).
This is exactly where extraction headroom lives.

## Sub-block breakdown (the detachable units)

### Agent Protocol (2,381 tok) — mixed: load-bearing routing + detachable reference
| Sub-block (L) | ~tok | classification |
|---|--:|---|
| Skills + inventory table (L249–278) | **599** | **DETACHABLE** — the 20-row table duplicates `how/skills/AGENTS.md`'s own index |
| Credential routing / broker (L182–192) | 323 | borderline — behavioral snippet; extract-or-keep is a DP2 call |
| Operator-Decision-Surfacing / AskUserQuestion (L222–230) | 295 | borderline — behavioral doctrine; extract-or-keep DP2 |
| Execution Hierarchy (L231–244) | 250 | keep (defines Campaign→Mission→Objective) — can compress |
| Cross-project routing hook (L170–181) | 239 | keep (load-bearing routing); drop stale `(NEW v7.0)` stamp |
| Session Closure / SITREP (L208–221) | 190 | keep (load-bearing) |
| Startup Checklist (L157–169) | 183 | keep (load-bearing) |
| Session Greeting (L193–198) | 131 | keep |
| Session Tracking (L199–207) | 102 | keep |
| Context Recipes (L245–248) | 64 | keep (pointer already) |

### Domain Knowledge (1,513 tok) — near-pure reference; the single cleanest extraction
Registry Awareness 320 · Object Standards 258 · Convergence Model 253 · Base Ontology 214 · Compute Tiers 177 ·
Lattice Types 139 · FAIR Metadata 79 · Execution Modes 66. **Every sub-block is reference material, not routing
identity** → extract the section body to a `what/docs/` reference doc, keep a ~3–4-line pointer + the entity-triad
one-liner.

### Working with Content (1,259 tok) — conventions (keep) + detachable reference
| Sub-block (L) | ~tok | classification |
|---|--:|---|
| Visual inspection (headless-first) (L432–447) | **589** | **DETACHABLE** doctrine (folded in at v8.7) — DP2: extract vs churn-risk |
| Compliance Dimensions (L399–415) | 201 | **DETACHABLE** — 10-dimension reference list → pointer |
| Upstream Contribution Awareness (L420–427) | 173 | keep (active agent behavior); can compress |
| Side-Quest Awareness (L428–431) | 112 | keep |
| Migration Version (L395–398) | 84 | keep |
| Metadata (L381–394) | 50 | keep (load-bearing frontmatter spec) |
| Naming (L377–380) | 22 | keep |
| Linking (L416–419) | 22 | keep |

## Extraction-destination reality check (image tree `.adna/`, NOT the dev vault)

| M01 pattern dest | in `.adna/`? | actual home to use |
|---|---|---|
| `what/specs/` | **MISSING** | use **`what/docs/`** (exists, 25 entries — the established reference home: `adna_standard.md`, `standard_governance.md`, `ontology_unification.md` …) |
| `how/governance/` | **MISSING** | use `what/docs/standard_governance.md` neighborhood, or keep inline |
| `how/templates/example_personalities.md` | dir **EXISTS** | valid destination |
| pointer → `how/skills/AGENTS.md` | **EXISTS** | valid |

**Decision recorded**: avoid creating new top-level dirs in the image (heavier structural churn for a template-quality
release); target the existing `what/docs/` + `how/templates/`. This deviates from M01's literal `what/specs/` /
`how/governance/` — those were *dev-vault* conventions; the image tree canonicalizes reference docs under `what/docs/`.

**ADR-collision check** (`ls .adna/what/decisions/`): only `adr_001`, `adr_002`, `adr_003` present. The campaign's
governing ADRs (034 release, 035 …) live in the **dev vault**, not the image. A gov-only documentation refactor needs
**no new image-tree ADR** — recommend none (flag for operator at DP2; do not mint blind).

## Projected savings (evidence for DP1 — operator rules per-section at P2)

| Path | mechanism | projected |
|---|---|--:|
| **Conservative** | trim old header comments · fix stale `token_estimate` · dedupe Collision-Prevention vs File-Safety · drop `(NEW v7.0)` + orphan `<!-- v6.0 -->` · tighten dense parentheticals | **~300–550 tok** |
| **Aggressive** (adds extraction) | Domain Knowledge → `what/docs/` (~1,390 net) + Skills table → pointer (~400) + Visual-inspection → doc (~550) + Compliance Dimensions → pointer (~160) + Personality → template (~90); optional Credential/AskUserQuestion (~600) | **~2,000–2,600 tok** (up to ~3,100 with the optional borderline blocks) |

Aggressive lands in M01's projected 1.5–3k band (upper half — consistent with the "verbose-by-design template, not
recently pruned" prior). **Actual post-prune re-measure happens in Obj 5** and is recorded in the staging ledger
(M01 measure-first loop closed against real diffs, not this projection).

## M01 compliance
- **#1 measure-first** ✓ (this artifact, actual char counts).
- **#2 read-the-real-file-first** ✓ (full 447-line read pre-authoring; sub-blocks classified against real content).
- **#3 both diffs** → Obj 2 (conservative) + Obj 3 (aggressive).
- **#4 ADR-collision check** ✓ (above; none needed).
- **#5 operator rules depth at P2 (DP1)** — this artifact is evidence, not a depth commitment.
