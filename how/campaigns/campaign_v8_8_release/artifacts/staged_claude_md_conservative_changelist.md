---
type: artifact
artifact_class: change_list
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign_id: campaign_v8_8_release
mission_id: mission_v8_8_p1_prune_and_iii
objective: 2
status: complete
tags: [artifact, v8_8_release, distillery, claude_md_prune, conservative, changelist]
---

# Obj 2 — Conservative Prune Change-List

**Staged file**: `staged_claude_md_conservative.md` (built by copying the real `.adna/CLAUDE.md` byte-for-byte, then
applying only the surgical edits below — so a `diff` shows *exactly* these changes and nothing else).
**Result**: 447 → 438 lines · 30,881 → 29,614 bytes · **~319 tok saved (4.1%)**.
**Principle**: removes duplication + verbosity + stale metadata — **never a rule** (M01 conservative).

## Changes (each with adversarial-re-read verdict: "does this weaken governance / break a fork?")

| # | Location | Change | Tok | Weakens governance? |
|---|----------|--------|----:|---------------------|
| C1 | frontmatter `token_estimate` | `~3000` → `~7400` (the `~3000` was stale by ~2.5×; real weight ~7.7K) | 0 | **No** — metadata correctness. P3 finalizes to the assembled file's real value. |
| C2 | frontmatter `updated` | `2026-07-06` → `2026-07-13` | 0 | **No** — edit-date hygiene. |
| C3 | header comments L13–15 | drop the 3 **oldest** changelog comments (v8.2 · v8.3 · v8.4); keep the recent 3 (v8.5 · v8.6 · v8.7) | ~205 | **No** — pure provenance narration; CHANGELOG.md is canonical. *(Most opinionated conservative cut — operator-reversible at P2 if in-file deep history is wanted. Aggressive trims further.)* |
| C4 | Collision Prevention rule 3 | replace the duplicated 4-line `yaml` example with a pointer to Working with Content → Metadata (which carries the full block) | ~40 | **No** — the rule text is unchanged; only the redundant example is deduped. |
| C5 | `### Cross-project routing hook (NEW v7.0)` | drop the stale `(NEW v7.0)` stamp | ~5 | **No** — cosmetic version stamp; the hook itself is untouched. |
| C6 | Cross-project routing forward-reference (L180) | compress two sentences → one; same routing (standard-dev → `aDNA.aDNA/how/campaigns/`, ADR-004, not `Home.aDNA/`) | ~35 | **No** — routing semantics preserved verbatim, just tighter. |
| C7 | Credential-routing graceful-degradation aside | compress the "no `Home.aDNA/` peer → inert" parenthetical | ~15 | **No** — the degradation behavior (pointers inert without a broker peer) is preserved. |
| C8 | Domain Knowledge ADR-035 aside | compress "(were promoted from node-local extensions to base entity types in v2.3, per ADR-035)" → "(base entity types since v2.3, ADR-035)" | ~20 | **No** — provenance fact preserved. |
| C9 | trailing `<!-- v6.0 | 2026-04-03 -->` (L447) | drop the orphan version comment | ~15 | **No** — orphan; the header block carries live version provenance. |

## Verification
- **Rule-set integrity**: `diff` original↔staged touches only the 9 spots above — **no numbered rule, Standing Order,
  Safety-table row, or routing target removed** (only relocated/compressed narration). ✓
- **DE-LINK**: no `[[…]]`, no `](…)`; the one `aDNA.aDNA/how/campaigns/` reference (C6) is **pre-existing intentional
  live-routing** already shipping in the public image — not a new leak. ✓
- **Frontmatter + heading spine intact**: valid frontmatter; all `##`/`###` headings preserved (only `(NEW v7.0)`
  stamp removed from one heading). ✓

## P3 hand-off notes (not applied here — image-curated)
- The **v8.8 version-surface bump** (frontmatter `version: "8.7" → "8.8"` + new v8.8 header comment) is **NOT** in this
  staged content — P3 applies it per the 5-surface checklist in the staging ledger. This file intentionally still reads
  `version: "8.7"`.
- If the operator's DP1 ruling mixes conservative + aggressive per-section, P3 assembles from both staged files; this
  file is the **all-conservative endpoint** (the floor of the prune range).
