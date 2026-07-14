---
type: artifact
artifact_class: change_list
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign_id: campaign_v8_8_release
mission_id: mission_v8_8_p1_prune_and_iii
objective: 3
status: complete
tags: [artifact, v8_8_release, distillery, claude_md_prune, aggressive, extraction, changelist]
---

# Obj 3 — Aggressive Prune Change-List (extraction)

**Staged file**: `staged_claude_md_aggressive.md` = the conservative floor + the 5 extractions below (built by copying
the conservative staged file, then anchor-splicing each block — deterministic, one assertion per splice).
**Result**: 447 → 312 lines · ~7,720 → **~4,877 tok** · **~2,853 tok off the always-loaded governance layer (36.9%)**.
**Principle**: CLAUDE.md keeps the top-level rule + a one-line pointer; dense reference/duplicative bodies relocate to
their canonical homes. **No behavior removed — content relocated.**

## Header trim (aggressive)
Keep only the current **v8.7** header comment (the version surface); drop v8.5 + v8.6 too (conservative kept them).
Provenance dup of CHANGELOG.md. **~259 tok.** Weakens governance? **No.**

## Extractions

| # | Section → destination (P3) | mechanism | tok off CLAUDE.md | weakens governance? |
|---|---|---|--:|---|
| **E1** | Domain Knowledge reference tables → `what/docs/adna_reference.md` | keep the 16-entity triad table inline; move Lattice Types · Execution Modes · Object Standards · Registry · Compute Tiers · FAIR · Convergence Model to the reference doc + pointer | ~1,294 | **No** — pure reference; the load-bearing triad stays inline |
| **E2** | Agent Protocol → Skills-inventory table → pointer to `how/skills/AGENTS.md` | the 20-row table duplicated the skills dir's own index; replace with a pointer (keep the Skills intro) | ~546 | **No** — `how/skills/AGENTS.md` is the authoritative, always-current list; the table was a stale-prone duplicate |
| **E3** | Working w/ Content → Visual-inspection doctrine → `what/docs/doctrine_visual_inspection.md` | keep the one-line rule + tier names inline; move the full ladder + rules to a doctrine doc | ~582 | **No** — but **⚠ FLAG: this reverses a v8.7 fold** (v8.7 deliberately folded this INTO CLAUDE.md). Operator call at DP1 — extract vs. keep-recent-decision. |
| **E4** | Working w/ Content → Compliance Dimensions list → `what/docs/adna_reference.md` | replace the 10-item numbered list with a one-line enumeration + pointer | ~201 | **No** — reference list; the −10 numbered-bold items are *only* these (rule-count 42→32 fully accounted) |
| **E5** | Identity → Personality Customization → `how/templates/example_personalities.md` | keep the customization instruction inline; move worked persona examples to a template-example file | ~81 | **No** — the instruction stays; examples enrich a template file |

## Extracted files staged (P3 creates them in the image tree)
| Staged artifact | P3 destination | count impact |
|---|---|---|
| `staged_extracted_adna_reference.md` | `.adna/what/docs/adna_reference.md` | none (not `template_`/`skill_`) |
| `staged_extracted_doctrine_visual_inspection.md` | `.adna/what/docs/doctrine_visual_inspection.md` | none |
| `staged_extracted_example_personalities.md` | `.adna/how/templates/example_personalities.md` | none (`example_` prefix ≠ `template_*`) |

## DP2 recommendation (extraction destinations — operator rules at P2)
- Target the **existing** `what/docs/` (reference home) + `how/templates/` — **do not** create `what/specs/` or
  `how/governance/` (they don't exist in the image tree; adding top-level dirs is heavier churn than a gov-only
  release warrants). This is the recommended destination set.
- **No new ADR** for the extraction: it's a documentation refactor, standard stays v2.5, and the image's
  `what/decisions/` holds only adr_001–003 (the campaign's governing ADRs are dev-vault). Recommend minting none.

## Verification
- **Rule-set integrity**: heading spine intact (all `##`/`###` preserved; Domain Knowledge keeps `### Base Ontology`).
  Numbered-bold rules 42 → 32 — the −10 is **exactly** the Compliance Dimensions list (relocated, pointer left); **no
  Standing Order / Collision-Prevention / Priority-Hierarchy / AskUserQuestion / Startup-Checklist rule removed.** ✓
- **DE-LINK**: 0 wikilinks / 0 md-links across the aggressive CLAUDE.md + all 3 extracted files; no private dev-vault
  refs in the extracted files. ✓
- **Count safety**: none of the 3 new files match `template_*`/`skill_*` → **30 templates / 32 skills unchanged**
  (P3 `adna_validate --governance` should read zero-drift; hard-verify at P3). ✓

## P3 hand-off notes
- v8.8 version-surface bump NOT applied here (file still reads `version: "8.7"`); P3 owns it per the ledger.
- This is the **all-aggressive endpoint** (the ceiling of the prune range). Real shipped file = P2 per-section ruling,
  assembled at P3 from the conservative + aggressive endpoints. If the operator keeps E3 inline (v7.8 fold), assemble
  that section from the conservative file.
