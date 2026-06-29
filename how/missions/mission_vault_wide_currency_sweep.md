---
plan_id: mission_vault_wide_currency_sweep
type: plan
title: "Vault-wide currency sweep — out-of-slice drift beyond Looking Glass"
owner: stanley
status: completed
mission_class: implementation
mission_kind: vault_maintenance
source: campaign_looking_glass (M4 discovery; idea_vault_wide_currency_sweep)
token_budget_estimated: "~45 kT (<50 tier): denominator-honest grep + bounded mechanical sweep (subagent) + 3 REVIEW files (main loop) + re-measure + records"
created: 2026-06-29
updated: 2026-06-29
last_edited_by: agent_stanley
tags: [plan, currency, vault_maintenance, what_ground_truth, looking_glass]
---

# Mission: Vault-wide currency sweep

**Origin**: [[how/backlog/idea_vault_wide_currency_sweep|idea_vault_wide_currency_sweep]] — out-of-slice drift discovered during [[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]] M4 and deliberately flagged-not-fixed (Subject-B bounding). Run as a single `vault_maintenance` III cycle reusing [[how/skills/skill_iii_cycle|skill_iii_cycle]] + the M4 subagent-sweep-then-main-loop-verify pattern + the `representation_coherence` RC-CURR traps.

## Goal

Bring every in-scope `aDNA.aDNA` content file current to the canonical standard — **v2.3 / 16 entity types / base ontology v3.1 / `aDNA-Network/aDNA` / flat `.adna/`** — with zero site-gate regression (304/304 held) and an honest audit trail. The site-backing slice (Subject B) was already swept at M4; this sweep covers the **out-of-slice** remainder (agent context library, docs guides, example READMEs).

## Canonical target state

| Drift class | Stale | Current |
|---|---|---|
| Standard version stamp | `v2.1` / `v2.2` | `v2.3` |
| Base entity-type count | `14` | `16` |
| Base ontology version | `v3.0` | `v3.1` |
| Base-template repo | `Agentic-DNA` / `LatticeProtocol/Agentic-DNA` | `aDNA-Network/aDNA` |
| Template wrapper path | outer `adna/...` | flat `.adna/...` |
| Other-vault repo refs | `LatticeProtocol/<Vault>.aDNA` | classify per-ref (some remotes "unchanged" → KEEP) |

> **Honesty rule (RC-CURR-01).** Never bump a version stamp without verifying the file body is consistent with v2.3. The only material v2.2→v2.3 content delta is **ADR-035** (inventory+identity promoted to base → 14→16 types, base ontology v3.0→v3.1). Per file: fix entity-count/base-list drift first, *then* bump the stamp. If a file's v2.3-consistency is ambiguous beyond the ADR-035 delta, flag for main-loop review rather than blind-bump.

## Exit Gate

FIX set swept + frontmatter bumped; REVIEW set classified + resolved (fix or operator-flag); `rg 'v2\.1|v2\.2|Agentic-DNA'` residual **0** across the FIX set; `git diff --name-only` contains no do-not-touch path; `npx astro build` 0 errors (≥178 pages); `npm run test:gates` **304/304**; mission AAR filed; idea closed; STATE.md updated.

## Tasks

### 1. Measure — drift inventory (denominator-honest)
- **Status**: done (2026-06-29)
- **Session**: session_stanley_20260629_005705_currency_sweep
- **Description**: Full grep sweep; classify every hit FIX / REVIEW / KEEP; record counts. Cross-check FIX set against [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|site_backing_slice]] (exclude in-slice — M4 done).
- **Files**: this mission; session file.
- **Depends on**: none.

### 2. Orient + Select — lock FIX set
- **Status**: done (2026-06-29) — see Measure result below.
- **Description**: Load do-not-touch list + ADR-035 delta; confirm targets out-of-slice; lock FIX set, queue REVIEW set.
- **Depends on**: 1.

### 3. Implement — subagent FIX sweep + main-loop REVIEW
- **Status**: done (2026-06-29) — 29 FIX-set files swept (subagent + main-loop body-residual second pass); REVIEW set = 6 flags, 0 edits (broader-than-currency → [[how/backlog/idea_currency_sweep_flagged_followons|flagged follow-ons]]).
- **Description**: (a) subagent runs FIX set per-file (verify v2.3 consistency → fix 14→16 etc → bump stamp + `updated`/`last_edited_by`); (b) main loop resolves the REVIEW files with explicit per-line reasoning.
- **Files**: `what/context/**` (18), `what/docs/**` guides (8) + examples (3).
- **Depends on**: 2.

### 4. Re-Measure + Validate
- **Status**: done (2026-06-29) — FIX-set residual 0; `npx astro build` 179 pages/0 err; `npm run test:gates` **304/304**; `git diff` = 29 FIX files, no do-not-touch path; 95/95 symmetric.
- **Description**: re-grep residual (0 in FIX set); `git diff --name-only` review (no KEEP path); `npx astro build` (0 err, ≥178 pages); `npm run test:gates` → 304/304. On regression: fix or revert + record blocked.
- **Depends on**: 3.

### 5. Record — AAR, close idea, STATE.md, commit + push
- **Status**: in_progress
- **Description**: 5-line AAR + token delta (SO11); close idea (status completed); STATE.md via python3 patch (60K-token gotcha); commit by explicit path + push (precursor Looking Glass M2–M5 folded in, on operator go, after git fetch + ff-verify + gitleaks).
- **Depends on**: 4.

## Do-NOT-touch guardrails (per idea file)

- `what/decisions/adr_*.md` — record history (esp. adr_006 repo-rename; adr_035 legitimately states "14" in its before-state).
- `what/measurement/iii_results/*.json`, `who/coordination/coord_*.md` — dated point-in-time records.
- `who/governance/VISION.md`, `governance_code_of_conduct.md` — "Contributor Covenant v2.1" (external standard, not aDNA spec).
- `what/docs/standard_governance.md`, `what/docs/adna_standard.md:1107` — v2.0→v2.1 as semver examples.
- `who/reviewers/reviewer_standard_archivist.md:24,48` — deliberately cite stale URLs as audit examples.

## Measure result (locked 2026-06-29)

**Key finding:** `what/context/adna_core/` **bodies are already v2.3-consistent** (`entity_definitions.md` titled "16 Base Types"; inventory(15)/identity(16) defined; ADR-035 cited) — only the `sources:` **stamps** lag. So the context sweep is a clean, honest stamp bump (RC-CURR-01 satisfied). Verified: docs stamp-bump bodies carry no present-tense "14 base" claim; no genuine outer-`adna/` path drift exists; `14` hits in `entity_definitions`/`AGENTS` are list indices.

**FIX set — 29 files (subagent, mechanical, verified-safe):**
- **Context library stamp bump** (`sources:` v2.1/v2.2→v2.3 + `updated`/`last_edited_by`), bodies already current — 17 files: `adna_core/{AGENTS,campaign_dispatch,context_engineering,convergence_model,entity_definitions,lattice_design,ontology_design,ontology_unification,paradigm_overview}` + `claude_code/{config_cascade,vault_architecture}` + `lattice_basics/{AGENTS,core_concepts,vault_architecture}` + `object_standards/{AGENTS,overview}` + `prompt_engineering/convergence_model` (also URL+version on L173).
- **Context URL-only** — `prompt_engineering/federation_composability` (L169 URL + v2.0→v2.3).
- **Docs stamp bump** — `AGENTS.md:20`, `adna_bridge_patterns.md:13`, `adna_design.md:13`, `start_kit_prd.md:379`.
- **Docs URL fix** (`LatticeProtocol/Agentic-DNA`→`aDNA-Network/aDNA`) — `agent_first_guide.md:85` (clone→canonical), `migration_guide.md:333`, `side_quest_guide.md:51,104`, `tutorial_lattice_publishing.md:7`.
- **Example URL fix** (L7) — `example-enterprise-pipeline/README.md`, `example-biotech-lab/README.md`, `.base/README.md.template`.

**REVIEW set — 5 files (main loop, judgment):**
- `adna_standard.md:185,206` (normative `Agentic-DNA/` base-template repo; SO9).
- `spec_forge_ecosystem.md` (`LatticeProtocol/SiteForge.aDNA`) + `spec_org_pattern_ecosystem.md` (`LatticeProtocol/{SuperLeague,CakeHealth}.aDNA`) — classify moved-vs-unchanged remote.
- `docs/ontology_unification.md` (v2.1 link L806 + Agentic-DNA URL + entity-count 14→16 surgery decision — design doc, careful).
- `context/adna_core/ontology_workshop.md` (historical "14 base + 12 ext" Lattice-Protocol-vault example; no stamp — judge historical-vs-current).

**KEEP (do-not-touch):** `standard_governance.md:47,57,81` + `adna_standard.md:1107` (semver examples); all `adr_*`; `iii_results/*`; `coord_*`; `VISION.md`/`code_of_conduct` (Contributor Covenant v2.1 = external); `reviewer_standard_archivist.md:24,48` (deliberate audit examples); `projects_folder_pattern.md` (already `.adna/`); `entity_definitions`/`AGENTS` list-index `14`s.

## Notes

- FIX set is out-of-slice → site build unaffected → gates 304/304 is a regression-safety confirmation, not the primary measure. Primary measure = grep-residual-to-zero.
- `adna_standard.md` is nominally in-slice but lines 185/206 are NOT site-traced claims, so they survived M4 — valid REVIEW targets, edited with SO9 care.

## Completion Summary

### Deliverables
- **29 content files brought current** (out-of-slice): 18 `what/context/` (frontmatter `sources:` stamp + body Reference sections v2.1/v2.2→v2.3; bodies already v2.3-consistent) + 8 `what/docs/` guides (4 stamp, 4 URL) + 3 example READMEs (URL). 95 insertions / 95 deletions — pure swaps.
- **Canonical org-repo URL swept** `LatticeProtocol/Agentic-DNA`→`aDNA-Network/aDNA` (incl. `agent_first_guide.md` clone command → canonical `~/aDNA` form). FIX-set residual **0**.
- **Validation**: `npx astro build` 179 pages / 0 errors; `npm run test:gates` **304/304** (zero regression vs M4 baseline); `git diff` scope = exactly the 29 FIX files, no do-not-touch path touched.
- **6 flagged follow-ons** recorded → [[how/backlog/idea_currency_sweep_flagged_followons|idea_currency_sweep_flagged_followons]] (broader-than-currency drift, flag-not-fix).

### Descoped (flag-not-fix — broader than currency remit)
- Normative `adna_standard.md` §3.5 `Agentic-DNA/`→`.adna/` convention (spec-owner/ADR, SO9).
- `spec_forge_ecosystem.md` vault-rename refresh (URL is valid unchanged remote).
- `spec_org_pattern_ecosystem.md` SuperLeague/CakeHealth remote verification (likely valid private/partner LP repos).
- `ontology_unification.md` coherent 14→16 + v3.0→v3.1 design-doc refresh.
- `ontology_workshop.md` historical "14 base" (KEEP-as-historical).
- `what/lattices/tools/` validator/schema v2.2 docstrings + `frontmatter_schema.json` abandoned `adna.dev` `$id` (tool behavior-verification, not a stamp swap).

### Key Findings
- The context-library **bodies were already migrated to v2.3/16 types** (e.g. `entity_definitions.md` titled "16 Base Types") — only the stamps lagged, so the bumps were honest (RC-CURR-01 satisfied), not blind.
- Several idea-file "currency targets" were on inspection **broader drift** (vault renames, valid private remotes, a normative convention, tool behavior) — correctly flagged, not force-swept.
- The **"mirror more current than its source"** marquee recurs at the **spec-convention** (§3.5) and **tooling** (validator/schema) layers → fed to the flagged-follow-ons note for Argus's `campaign_h`.

### Scope Changes
- Added a **body-Reference-section second pass** after the subagent's literal-scope read fixed only frontmatter `sources:` (would have left frontmatter v2.3 / body v2.1 — worse than start).
- Added `what/lattices/tools/` as a **new flagged surface** (not in the original idea inventory; found via denominator-honest residual grep).

## AAR

- **Worked**: denominator-honest grep classification (FIX/REVIEW/KEEP) + the M4 subagent-sweep-then-main-loop-verify split cleanly swept 29 files with 0 regression (304/304); bodies-already-v2.3 made every stamp bump honest.
- **Didn't**: the sweep subagent read "bump `sources:`" literally (frontmatter only), leaving 16 body Reference-section residuals — caught by main-loop grep, fixed in a scoped python pass; the REVIEW set yielded flags, not fixes (broader drift than the idea file assumed).
- **Finding**: the Looking-Glass "mirror > source" pattern is **layer-recurrent** — it reappears in the normative §3.5 convention and the v2.2 validator/schema docstrings, not just site prose.
- **Change**: when delegating a stamp sweep, say "frontmatter **and** body Reference/Sources sections" explicitly — a literal-scope agent will otherwise split a coupled field and create inconsistency.
- **Follow-up**: [[how/backlog/idea_currency_sweep_flagged_followons|idea_currency_sweep_flagged_followons]] (6 items); push (4 Looking Glass + this) operator-gated.

> **Token budget (SO11):** estimated ~45 kT (<50 tier). Actual content-load ran higher (~1.5× est) — driven by the REVIEW-set inspection depth + the subagent body-residual second pass + the new tool-surface finding. Within the 2× retrospective trigger; no retrospective. (Sweep subagent consumed ~221 kT of its own context, separate from main-loop content-load.)
