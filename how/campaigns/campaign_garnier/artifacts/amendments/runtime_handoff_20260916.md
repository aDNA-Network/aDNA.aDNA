---
type: decisions
artifact_class: ratification_record
campaign_id: campaign_garnier
title: Runtime handoff — Codex retires, Claude (Rosetta) executes GARNIER
created: 2026-09-16
updated: 2026-09-16
status: accepted
last_edited_by: agent_rosetta
tags: [garnier, handoff, ratification, executor_runtime]
---

# Runtime handoff — Codex → Claude (Rosetta), 2026-09-16

## Ratification (§7.7)

- **Decision:** GARNIER's `executor_runtime` changes from `codex` to `claude`. Codex retires from this campaign entirely; it is not retained as an optional execution lane. All completed Codex work (genesis, P0, DP1/DP2 machinery, P1.1/P1.2, the three homepage increments and their evidence) stays credited unchanged under `agent_codex` authorship — nothing is re-attributed. The single-writer lease on the open session and its declared files transfers to `agent_rosetta`.
- **Ratified-by:** Stanley Bishop, Founding Architect.
- **Date:** 2026-09-16.
- **Status:** accepted.
- **Gate / session reference:** operator ruling in the Claude Code session of 2026-09-16 (four-question decision gate: executor / in-flight work / restructure depth / CLAUDE.md compression — all four answered on the recommended options). Recorded in [[session_stanley_20260916_065915_garnier_homepage_gateway]].
- **Scope of authority:** runtime identity, structural adaptation of the charter and campaign CLAUDE.md (form only — content preserved, archive-never-delete), and completion of the in-flight homepage-gateway increment under the session's already-declared scope. Phase gates, budgets, outward acts and human-evidence requirements are unchanged by this handoff.
- **Pending co-signs:** none — this is an internal stewardship change. HAUSSMANN P5.1/P5.2/GR-7 ownership, H1/G4 and counsel holds are untouched.

## What the handoff covers

1. **Executor identity.** `executor_runtime: claude` in the charter and in the open session file. `executor_tier` keeps its enum and semantics (judgment class); the D-7 rationale for the additive `executor_runtime` field is unchanged — only its value moves. The `opus / codex` tier column entries in the charter's phase tables become `opus / claude` (and `sonnet / claude`) for queued missions; completed missions keep their historical runtime in their own mission files.
2. **Mid-flight session transfer.** `session_stanley_20260916_065915_garnier_homepage_gateway` transfers open rather than closing: its declared scope, frozen-stimulus constraints (P1 `b1cf040` / port 4465 untouched), isolated-checkout boundary (`~/.cache/garnier-homepage-20260916`) and 110±40 kT forecast are inherited intact. The takeover point is recorded in the session body. This is one session with two runtimes, disclosed — not two sessions.
3. **Structural adaptation (operator-ruled, full conform + sweep).** The charter is restructured to the vault campaign template: Status column restored to phase tables; Decision Points, Verification Strategy, Timeline and Subsumes converted back to tables; the seven scattered dated blocks consolidated verbatim into one chronological Execution Log. The campaign CLAUDE.md compresses the twenty inherited HAUSSMANN conventions to pointer + delta. All Codex content is preserved; this is form and stewardship, not a redesign.
4. **What is deliberately kept from the Codex design** (named so the adaptation is not read as a repudiation): the verification recipes (R-SITE/R-CAPTURE/R-VISUAL/R-VOICE/R-SOURCE/R-TOKENS/R-PERF/R-MACHINE/R-CLOSE, with stated blindnesses and red controls), the evidence and hash-manifest discipline, honest calibration nulls, the amendment/ratification machinery, provenance tags, [[budget_basis]], the quality-research brief, and the twelve-tranche docs-review decomposition.

## Divergence dispositions (recorded, not churned)

- **Mission AARs stay in-campaign** (`artifacts/pN/...`) rather than at `how/missions/artifacts/{campaign}_{mission}_aar.md` per campaigns AGENTS.md §4.3. Accepted local convention: evidence is colocated with its phase. This is a deliberate, recorded divergence.
- **`_mission_template_garnier.md` and `directives/`** are retained as-is. The archived Codex commissioning directive is historical provenance and does not govern future sittings; this record and the adapted CLAUDE.md do.
- **`.codex/hooks.json`** (untracked) is left in place, per the Cassiodorus memo of 2026-09-13 — it is Codex-side measurement plumbing, inert for Claude sessions, and deleting it is not this campaign's call.
- **VITRINE stays `proposed`** with history retained (not flipped to `subsumed`), per the charter's original documented choice.

## Instrument follow-up — same-day, found by the instrument itself

[D] `verify_amendments.py` pinned the CLAUDE.md conventions section byte-immutable against the
archived proposal; the compression this record authorizes changed that section, and the
verifier correctly went red at the next run (the compression sitting ran it *before* the
CLAUDE.md edit — a sequencing miss, recorded). Repair, same-diff with this note: the archived
section was verified byte-identical to its source (`campaign_haussmann/CLAUDE.md` §Standing
conventions), and the check now asserts immutability **at the source** plus the compressed
file's pointer to it — the protected text stays protected where it lives. Both new limbs
red-proven by mutation (source edit → `inherited section changed`; pointer removal →
`pointer lost`); 38 missions / 0 errors / selftest 1+12 after.

Related: [[campaign_garnier]] · [[charter_ratification_20260915]] · [[dp2_ratification_20260915]] · [[verification_recipes]].
