---
type: design_spec
artifact_id: m21_obj2_state_split_design
mission: mission_adna_str_p2_m21_context_audit_split
campaign: campaign_adna_serious_tool_readiness
phase: 2
session: 1
created: 2026-05-19
updated: 2026-05-19
status: complete  # S1 design artifact; S2 executes verbatim
last_edited_by: agent_stanley
tags: [design_spec, m21, op_1, state_md_split, router_archive_pattern, cut_points, forward_reference_preservation]
---

# M2.1 Obj 2 — Op 1 STATE.md Split Design

> **Specifies the exact split shape executed at S2.** Three concrete decisions: where to cut (line ranges), what to keep (router shape), what to preserve (forward references). Plus a rollback path that costs <1 min.
>
> **Self-reference**: This design reads the very `aDNA.aDNA/STATE.md` it will split. M1.3 measured the file (75.8 kT content-load); M1.4 confirmed the queue; M2.1 S1 designs the cut; M2.1 S2 executes. The design pays the splitting tax one last time.

## §1 — Pre-split baseline (measured 2026-05-19T19:33Z)

| Zone | Lines | Bytes | ~Tokens (÷4) | Disposition |
|---|---|---|---|---|
| **Live zone** (frontmatter + Current Phase + Active Campaigns + Phase 7 Progress + What's Working + Active Blockers + Next Steps + Pending Manual Actions + most-recent Last Session) | 1–333 | 151,815 | ~ 38 kT | **ROUTER** (most stays; aggressive trim on the most-recent Last Session prose; ≥ 1 cross-link to campaign master replaces verbose content) |
| **DEPRECATED-marker zone** (all `## Last Session DEPRECATED-marker` blocks + 1 `## Last Session (2026-05-17 ...)` block that is now superseded by the 2026-05-18 block) | 334–557 | 132,115 | ~ 33 kT | **ARCHIVE** (verbatim; no edits; anchors preserved) |
| **Next Session Prompt zone** (header at line 558 + historic-prompt accumulator) | 558–594 | 63,428 | ~ 16 kT | **SPLIT**: most-recent prompt → ROUTER; historic prompts → ARCHIVE |
| **TOTAL** | 594 | 347,358 | ~ 75.8 kT | (matches M1.3 §3 estimate) |

**Read-tool incident**: a no-offset `Read STATE.md` from this Rosetta session at 2026-05-19T19:33Z returned `File content (339.2KB) exceeds maximum allowed size (256KB)`. Direct empirical signal that the live router is currently un-readable in one tool call.

## §2 — Router shape (post-split target)

**Path**: `aDNA.aDNA/STATE.md` (overwrite-in-place)

**Target size**: ≤ 80,000 bytes (≤ 20 kT content-load) — represents ≥ 4× reduction from 347 KB.

**Sections preserved (verbatim from pre-split lines 1–333)**:

| Section | Pre-split lines | Action |
|---|---|---|
| Frontmatter | 1–15 | Verbatim; `updated:` field bumped to 2026-05-19; `last_edited_by: agent_stanley`; add `_state_router_version: "1.0"` |
| `## Current Phase` | 16–55 | Verbatim |
| `## Active Campaigns` (and 5 subsections) | 56–143 | Verbatim |
| `## Phase 7 Progress` (+ subsections) | 144–181 | Verbatim |
| `## What's Working` | 182–203 | Verbatim |
| `## Active Blockers` | 204–207 | Verbatim |
| `## Next Steps` (+ subsection) | 208–315 | Verbatim |
| `## Pending Manual Actions` | 316–327 | Verbatim |

**Sections trimmed**:

| Section | Pre-split lines | Action |
|---|---|---|
| `## Last Session (2026-05-18 — M1.3 S3 CLOSED ...)` | 328–333 | **Trim**: replace verbose line 330 (massive single-paragraph M1.3 close prose, ~10 kT) with: (a) a 3–5 line summary; (b) a cross-link to `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p1_m13_token_audit.md` for full detail; (c) the embedded Next Session Prompt at line 332 stays (one-line summary + cross-link to current pending mission) — at the time of S2 execution, this block needs to be re-aimed at M2.1 since M1.4 already closed |
| `## Next Session Prompt` (current global header at line 558) | 558–594 | **Keep header + most-recent prompt only**: the 2nd-most-recent and older prompts in lines 562–594 move to archive. Most-recent prompt should re-aim at M2.1 (or whatever is operator-active at S2 time) |

**Sections added (NEW at top of router)**:

```markdown
> **State router** (split from monolithic STATE.md at M2.1 S2 2026-05-19). For historical session prose + retired Next Session Prompts, see [[STATE_archive.md|STATE_archive.md]]. Most-recent live session block + most-recent Next Session Prompt stay here.
```

**Estimated router size post-split**: 60–80 kT pre-trim; with the line-330 verbose paragraph trimmed and the historic Next Session Prompts moved out, target ~ 18–22 kT. If the "Next Steps §v8 P1 entry checklist" (lines 212–315, ~ 104 lines) is also abridged at S2 (since v8 P1 → P2 already transitioned at this plan), router can hit ≤ 15 kT.

## §3 — Archive shape

**Path**: `aDNA.aDNA/STATE_archive.md` (NEW)

**Frontmatter** (new):

```yaml
---
type: state_archive
created: 2026-05-19
updated: 2026-05-19
status: append_only  # forward-only; new DEPRECATED-markers and retired Next Session Prompts land here
last_edited_by: agent_stanley
canonical_router: aDNA.aDNA/STATE.md
split_origin_mission: mission_adna_str_p2_m21_context_audit_split
split_origin_session: session_stanley_20260519T193344Z_v8_m21_s1  # S1 designs; S2 executes
tags: [state_archive, immortal_spine, historical_audit, deprecated_marker_accumulator]
---

# STATE Archive — `aDNA.aDNA/STATE.md` Historical Sessions

> Immortal-spine for `aDNA.aDNA` STATE.md history. Sections move here when superseded in the router. The router is `aDNA.aDNA/STATE.md`. This file is **append-only by convention**: new sections land at the top under a date header; existing sections never get edited (per project Standing Order #6 — archive, never delete).

```

**Sections moved (verbatim from pre-split file)**:

| Section | Pre-split lines | Notes |
|---|---|---|
| All `## Last Session DEPRECATED-marker` blocks (19 distinct top-level sections + their inner `### ` subsections) | 334–373, 378–410, 414–488, 491–558 | Verbatim move; anchors preserved (`#last-session-deprecated-marker-...`) |
| `## Last Session (2026-05-17 — campaign_adna_serious_tool_readiness P0 OPENED ...)` | 374–377 | Superseded by 2026-05-18 block but NOT marked DEPRECATED in pre-split file; mark DEPRECATED on move + add header note "(legacy — superseded by M1.3 S3 close 2026-05-18)" |
| Historic Next Session Prompts (2nd-most-recent + older) | 562–594 | Move; insert a separator and a 1-line provenance note `<!-- Historic prompts retired at M2.1 S2 split 2026-05-19 -->` |

**Estimated archive size post-split**: ~ 33 + 16 = ~ 49 kT content-load (≤ 200,000 bytes). Stays well under the 256 KB Read-tool limit; quarterly rotation candidate triggers when archive exceeds ~200 KB. The Op 4 auto-archive convention (sibling artifact) documents the rotation skill candidate.

## §4 — Cut-point execution sequence (S2)

S2 runs in 4 phases, each a separate `git commit` for rollback granularity:

| Phase | Action | Commit message |
|---|---|---|
| **A. Archive create** | `Write STATE_archive.md` with frontmatter + all DEPRECATED-marker sections (lines 334–557) + historic Next Session Prompts (lines 562–594) verbatim. Verify: `wc -c STATE_archive.md` ≤ 200,000 bytes; `grep -c "^## Last Session DEPRECATED-marker" STATE_archive.md` ≥ 19. | `M2.1 S2 phase A: STATE_archive.md created — 19+1 DEPRECATED + historic Next Session Prompts moved verbatim` |
| **B. Router rewrite** | Rewrite `STATE.md` keeping lines 1–333 + a trimmed line-330 paragraph + a re-aimed most-recent Next Session Prompt + a cross-link to archive at the top + the v8 P1 entry checklist abridged. Verify: `wc -c STATE.md` ≤ 80,000 bytes; Read tool succeeds without offset/limit; 5-wikilink resolution test passes. | `M2.1 S2 phase B: STATE.md trimmed to router shape — ≤ 20 kT; archive cross-link top` |
| **C. Cross-link audit** | Grep across `aDNA.aDNA/` for `STATE.md#` and `STATE.md ` and confirm no broken wikilinks. Sample 5 specific incoming links from mission AARs / campaign masters / coord memos and verify resolution. | `M2.1 S2 phase C: 5-wikilink resolution sample passes — archive anchors resolve` |
| **D. Verification snapshot** | `wc -c` + `tokenizer-count` before/after; AGENTS.md hint live (Op 2 — sibling deliverable Obj 6); record numbers for S3 validation output. | `M2.1 S2 phase D: split verification — before 347 KB / after <80 KB / <80 KB archive` |

**Each phase a separate commit** → rollback is `git reset --hard <pre-phase-sha>`. Phases A and B can be reverted independently (archive-only or router-only rollback).

## §5 — Forward-reference preservation

Existing files in `aDNA.aDNA/` reference STATE.md via three patterns:

| Pattern | Example | Post-split behavior |
|---|---|---|
| Plain link to STATE.md | `[[STATE.md]]` in `MANIFEST.md`, `README.md`, AGENTS.md | Still resolves to the router (file path unchanged) |
| Anchor link to a live section | `[[STATE.md#current-phase]]` | Still resolves (section in router) |
| Anchor link to a DEPRECATED-marker section | `[[STATE.md#last-session-deprecated-marker-m05-s2-...]]` | **Breaks** unless re-pointed. Mitigation: at S2 phase C, replace `STATE.md#<deprecated-anchor>` with `STATE_archive.md#<deprecated-anchor>` across the vault. The grep + sed substitution is mechanical (anchor names survive the move verbatim). |
| Anchor link to a historic Next Session Prompt | none observed in pre-split inventory | (out of scope; not observed) |

**5-wikilink resolution sample** (run at S2 phase C; specific files identified now to remove judgment calls at execution time):

1. `MANIFEST.md` → STATE.md (plain link) → expect resolves
2. `README.md` → STATE.md (plain link) → expect resolves
3. `AGENTS.md` → STATE.md (plain link in Quick Orientation table) → expect resolves
4. `how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` → STATE.md (Context Loading table) → expect resolves
5. Any mission AAR — pick one with an anchor link → e.g. `aar_m14_latticescope_schema.md` cross-references — expect resolves

(If none of these has an anchor link to a DEPRECATED section, the anchor-update grep at phase C is a no-op — *good*; means the split is safer than the worst case.)

## §6 — Rollback plan (recovery <1 min)

**At any S2 phase failure or operator abort**:

```bash
cd ~/lattice/aDNA.aDNA
git log --oneline -10                                    # find pre-split SHA
git reset --hard <pre-split-sha>                         # restores pre-split STATE.md
rm STATE_archive.md                                      # remove orphan archive (if created)
git status                                               # confirm clean
```

**Per-phase granular rollback** (preferred when only one phase failed):

```bash
git reset --hard HEAD~1                                  # revert latest commit only
# repeat as needed to roll back phase B (router rewrite) while keeping phase A (archive create)
```

**Validation pre-rollback**: confirm the pre-split SHA before resetting; pre-S2 SHA documented in S2 session file under `### Pre-split SHA: <sha>`.

## §7 — Verification (run at S3)

| Check | Method | Pass condition |
|---|---|---|
| Router size | `wc -c aDNA.aDNA/STATE.md` | ≤ 80,000 bytes |
| Router token count | tokenizer or `wc -c | bc → /4 estimate` | ≤ 20 kT |
| Read tool full-file succeeds | Read with no offset/limit | Success (no `File content exceeds maximum` error) |
| Archive size | `wc -c aDNA.aDNA/STATE_archive.md` | ≤ 200,000 bytes (well under 256 KB Read limit) |
| 5-wikilink resolution | Manual sample test (§5 above) | 5/5 resolve |
| `## Last Session DEPRECATED-marker` count | `grep -c` on archive | ≥ 19 (preserved verbatim) |
| `## Last Session (2026-05-18 ...)` count | `grep -c` on router | 1 (most-recent live block stays in router) |
| `## Next Session Prompt` count | `grep -c` on router | 1 (one most-recent only) |
| Git history clean | `git log --oneline STATE.md STATE_archive.md` | 4 commits visible from S2 phases A-D |
| Cross-link audit clean | grep across vault for broken anchors | 0 broken links |

## §8 — Cross-references

- [[../mission_adna_str_p2_m21_context_audit_split.md|mission_adna_str_p2_m21_context_audit_split.md]] §Objective 2 — this artifact discharges Obj 2
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — top-3 M2.1 queue (Op 1 originates here)
- [[m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §7 — queue confirmation under API-billing data
- `aDNA.aDNA/STATE.md` — pre-split target (the file being split)
- `aDNA.aDNA/STATE_archive.md` — post-split archive (NEW at S2)
- [[m21_obj3_agents_md_hint_design.md|m21_obj3_agents_md_hint_design.md]] — Op 2 sibling (offset+limit AGENTS.md hint applies after split)
- [[m21_obj4_archive_convention_design.md|m21_obj4_archive_convention_design.md]] — Op 3 sibling (auto-archive convention; first canonical instance is STATE.md itself)

## §9 — Notes for S2 execution agent

- This design is fully deterministic — no judgment calls at S2 except the line-330 trim shape (replace verbose paragraph with 3–5 line summary + cross-link to campaign master + mission file).
- **Idempotency**: if S2 is partially complete and resumes, check `STATE_archive.md` exists first (phase A done?) before starting phase B. Phase B is also idempotent (rewrite same router shape regardless of pre-state).
- **Atomicity**: each phase is a single commit; never partially commit a phase. If phase B requires multiple Write tool calls, batch them; commit once at end.
- **Most-recent Last Session block in router**: at S2 time the most-recent block in the router will be the M1.4 S3 close OR the M2.1 S1 OPEN (depending on whether STATE.md got updated at S1). Re-aim the embedded Next Session Prompt at whatever is current at S2 execution time.
- **Anchor preservation**: section header text dictates anchor name. Moving `## Last Session DEPRECATED-marker — M03 S1 ...` to archive preserves the anchor `#last-session-deprecated-marker-m03-s1-...`. No anchor renaming during the move.
