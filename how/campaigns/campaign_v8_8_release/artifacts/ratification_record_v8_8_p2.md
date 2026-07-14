---
type: ratification_record
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign_id: campaign_v8_8_release
campaign_phase: 2
status: ratified
tags: [ratification, v8_8_release, distillery, p2, dp1, dp2, dp3, governance_7_7]
---

# v8.8 P2 Ratification Record (§7.7)

Agents author; operators ratify. The P1 diffs are the evidence; the rulings below are the operator's.

| Field | Value |
|-------|-------|
| **Decision** | v8.8 (Operation Distillery) prune depth + extraction destinations + README/hygiene scope |
| **Ratified-by** | stanley (operator), conversational P2 gate |
| **Date** | 2026-07-13 |
| **Status** | **ratified** — ship-set frozen; P3 fire pending a separate operator GO |

## DP1 — prune depth per-section → **Aggressive-minus-E3**
| Section | Ruling | Ships |
|---|---|---|
| Conservative baseline (C1–C9: token_estimate fix · orphan/`(NEW v7.0)` drops · collision-example dedupe · 4 parenthetical tightenings · v8.2–8.4 header trim) | **ACCEPT** | in the ratified file |
| E1 Domain Knowledge tables | **EXTRACT** → `what/docs/adna_reference.md` | ✅ |
| E2 Skills inventory table | **EXTRACT** → pointer to `how/skills/AGENTS.md` | ✅ |
| **E3 Visual inspection** | **KEEP INLINE** — do not reverse the deliberate v8.7 fold | restored inline |
| E4 Compliance Dimensions | **EXTRACT** → `what/docs/adna_reference.md` | ✅ |
| E5 Personality Customization | **EXTRACT** → `how/templates/example_personalities.md` | ✅ |
| Header changelog (aggressive trim, keep only v8.7) | **ACCEPT** | in the ratified file |

**Ratified file**: `staged_claude_md_ratified.md` — 322 ln / **~5,335 tok** (was ~7,720 → **−2,395 tok / 31.0%** off the
always-loaded governance layer). Verified: diff vs the aggressive endpoint = only the E3 restoration; rule-count 42→32
= exactly the extracted 10 Compliance Dimensions (no governance rule lost); 0 wikilinks / 0 md-links.

## DP2 — extraction destinations → **ACCEPTED (as recommended)**
Existing `what/docs/` + `how/templates/`; **no** new `what/specs/` / `how/governance/` dirs; **no new ADR**
(documentation refactor, standard stays v2.5).

## DP3 — README scope + gitleaks rider → **Inner III + root badge + gitleaks**
- Ship the inner-README first-contact III (`staged_inner_readme.md`, 157→155 ln).
- Bump **both** README badges v8.7 → v8.8 at P3 (surfaces 4 + 5).
- Include the `.gitleaks.toml` `.obsidian/plugins` allowlist **if** its 8 pre-existing minified-JS false-positives
  still fire at P3 (else defer).

## Frozen ship-set (P3 folds exactly this)
| Ships → image path | source artifact |
|---|---|
| `.adna/CLAUDE.md` | `staged_claude_md_ratified.md` |
| `.adna/what/docs/adna_reference.md` (NEW) | `staged_extracted_adna_reference.md` |
| `.adna/how/templates/example_personalities.md` (NEW) | `staged_extracted_example_personalities.md` |
| `.adna/README.md` (body) | `staged_inner_readme.md` |
| root `README.md` | `staged_root_readme.md` (verbatim; badge bump only) |
| `.gitleaks.toml` | rider (conditional on P3 FP confirmation) |

**NOT shipped** (E3 kept inline): `staged_extracted_doctrine_visual_inspection.md` — retained as P1 evidence only.

**Counts unchanged**: the 2 new shipped files are `what/docs/adna_reference.md` + `how/templates/example_personalities.md`
— neither matches `template_*.md`/`skill_*.md`, so **30 templates / 32 skills** hold (P3 `adna_validate --governance`
zero-drift).

## Next: P3 fire (separate operator gate)
`skill_template_release` v8.8 per `release_staging_ledger.md`: assemble into a fresh `aDNA-Network/aDNA` clone, bump the
5 version surfaces, dry-run leak-scan + `adna_validate --governance` zero-drift, **pause for operator GO**, then
path-scoped commit + annotated tag `v8.8` + push (tags-only), Step (e) local sync, 7-row smoke, close+AAR. **The push
is the release — it needs its own explicit operator GO.**

---

## P3 Fire — Supplementary Ruling (§7.7, 2026-07-14)

At P3 fire-time re-verification (the ledger mandates re-checking every ship-set row against disk), one row failed:
the **E2** extraction replaced the inline skills table with a pointer to `how/skills/AGENTS.md` asserting it was
*"the full catalogue — every skill, its type, and its trigger."* That file is a `type: directory_index` **protocol
guide** (it names ~18 illustrative skills, several of which don't exist as files) — **not** a catalogue. The claim
was false, and the aggressive prune would have removed the real inline table to point at it.

| Field | Value |
|-------|-------|
| **Decision** | Resolve the E2 defect before the irreversible push |
| **Ratified-by** | stanley (operator), conversational P3 fire gate |
| **Date** | 2026-07-14 |
| **Ruling** | **Revert E2 — keep the 19-skill table inline** (parallels the E3 keep-inline decision; honest, lowest-risk, no fire-gate authoring) |
| **Effect** | Final ship-set = **aggressive-minus-E3-minus-E2**. `.adna/CLAUDE.md` ~7,720 → ~5,820 tok (**−24%**; was −31% projected). E1/E4/E5 extractions shipped unchanged (`adna_reference.md` + `example_personalities.md`); E3 + Skills table + 16-entity triad kept inline. |

E1/E4/E5 pointer targets were each verified to genuinely deliver their promised content (only E2 was dishonest).
**Shipped** as `v8.8` — commit `a32724b` + annotated tag `v8.8` on `aDNA-Network/aDNA`; 7/7 smoke green;
`adna_validate --governance` Zero drift. See `aar_v8_8_p3_fire.md`.
