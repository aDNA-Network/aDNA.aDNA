---
type: session
session_id: session_stanley_20260630T064455Z_skills_inventory_sync
created: 2026-06-29
status: completed
tier: 2
last_edited_by: agent_rosetta
tags: [session, governance, drift-sync, skills]
updated: 2026-06-29
---

# Session — Skills-inventory governance sync

## Intent

Direct sequel to `session_stanley_20260630T051401Z_template_count_sync`. "Continue the campaign" → Operation Keystone is converged (no un-gated Rosetta work). Operator picked the one un-gated, self-contained thread that session surfaced: the **skills-count drift**.

Goal: bring every stated skills count to ground truth, rebuild the CLAUDE.md inventory to all 45 actual skills, and (recommended add-on) close the gap that let it drift silently — skills were never validated.

## Verified ground truth (read-only, deterministic)

- **45** `skill_*.md` in `how/skills/` (validator `os.listdir`+`startswith`).
- **45 = 21 base + 24 project-specific**, by set-intersection of vault basenames with `.adna/how/skills/` (26 base in template; this vault carries 21 of them + 24 Rosetta-authored). `comm -12` → 21; `comm -23` → 24.
- `Type` discriminator is the `skill_type:` frontmatter field (agent/process), NOT `type:` (all 45 are `type: skill`). Distribution: 36 agent / 9 process.
- **4 existing CLAUDE.md rows had Type disagreeing with frontmatter** — `skill_context_graduation`, `skill_upstream_contribution`, `skill_version_migration` (table=process → fm=agent); `skill_vault_review` (table=agent → fm=process).

## Scope declaration (Tier 2 — shared governance edits)

Files: `CLAUDE.md`, `MANIFEST.md`, `AGENTS.md`, `what/glossary/glossary_skill.md`, `what/lattices/tools/adna_validate.py`, `CHANGELOG.md`, + this session file. No cross-vault writes. No push (held-commit discipline — repo already carries `98bb488` + `5a3eb71` + `c5b553a` unpushed).

- A. **CLAUDE.md inventory rebuilt** to all 45, as two **row-count-auditable** groups (Base 21 / Project-specific 24) — the breakdown is now verifiable by counting rows. `Type` regenerated from `skill_type:` frontmatter (fixes the 4 stale rows); non-active status noted inline (2 draft · 1 sketch · 1 proposed · 1 legacy · 1 deprecated · 2 eventual-home→RemoteControl.aDNA). CLAUDE.md kept **count-free** (the number lives in MANIFEST/AGENTS/glossary; CLAUDE carries the enumeration).
- B. **Count statements** → `45 skills (21 base + 24 project-specific)`: MANIFEST.md:43, AGENTS.md:44, glossary_skill.md:25; MANIFEST `### Skills (17)`→`(45)` + breakdown `13 base + 4`→`21 base + 24` + relabel the 4-row sample with a pointer to the CLAUDE.md canonical inventory (avoids two divergent 45-row tables); MANIFEST inherited-infra row `13 base skills`→`21`.
- C. **Validator guard** — added a skills-count check to `adna_validate.py --governance` mirroring the template-count check (counts `skill_*.md`; scans MANIFEST/CLAUDE/README/AGENTS for `(\d+)\s*skills|Skills?\s*\((\d+)\)`). Proven to fire on `15 skills`/`Skills (17)` and to ignore the `21 base skills` breakdown phrasing.
- D. Frontmatter: `glossary_skill` bumped (2026-04-14→2026-06-29, agent_stanley→agent_rosetta); MANIFEST/CLAUDE/AGENTS already at 2026-06-29/agent_rosetta. CHANGELOG `[Unreleased] → ### Changed` entry (no version bump — a correction).

## Activity log

- 3× Explore (Step-0 recon) → confirmed campaign state + enumerated 45 skills + located every count/list site + confirmed validator had no skills check.
- Deterministic recount (45 = 21+24); pulled `skill_type`/`status`/`trigger`/`category` for all 45; caught the 4 Type mismatches.
- Rebuilt CLAUDE.md table; fixed 5 count statements across 3 files (incl. the MANIFEST L166 inherited-infra row the first sweep missed → caught by a second sweep); added + proved the validator guard.

## SITREP

**Completed** — Skills-count governance drift resolved. `adna_validate.py --governance` reports **GOVERNANCE SYNC: Zero drift**, and now actually *checks* skills (previously unvalidated). Trued **45 = 21 base + 24 project-specific** across:
- **CLAUDE.md** — `### Skills` inventory rebuilt to all 45 in Base (21) / Project-specific (24) groups; `Type` regenerated from `skill_type:` frontmatter (4 rows corrected); status noted inline.
- **MANIFEST.md** — L43 headline; `### Skills` header (17→45) + breakdown (13+4→21+24) + sample relabeled with pointer to CLAUDE.md; L166 inherited-infra row (13→21).
- **AGENTS.md** — L44 headline.
- **what/glossary/glossary_skill.md** — usage example + frontmatter bump.
- **what/lattices/tools/adna_validate.py** — new skills-count guard in `check_governance_sync`.
- **CHANGELOG.md** — `[Unreleased] → ### Changed` entry (no version bump).

**Verification** — `ls skill_*.md` = 45; CLAUDE.md inventory rows = 45 (Base 21 / Project 24); `python3.13 adna_validate.py . --governance` → Zero drift, EXIT 0; precise sweep → 0 live stale hits for `15 skills`/`13 base skills`/`Skills (17)`/`+ 2 project-specific`/`+ 4 project-specific` (historical occurrences in sessions/migrations/campaigns/artifacts KEPT as provenance); validator full run still executes (my edit is isolated to the governance-sync fn). Working tree = 6 files + this record.

**In progress** — none.

**Next up** — Commit locally by explicit path; **HOLD the push** (repo already carries unpushed `98bb488` + `5a3eb71` + `c5b553a` under the operator's standing "don't push"). Operator decides when to push the now-4-commit stack (`git fetch` + verify fast-forward first — shared `main` takes concurrent peer commits).

**Blockers** — none.

**Discovered-adjacent (flagged, NOT fixed):**
- **4 pre-existing full-conformance errors** (unrelated to this work): missing/unparseable frontmatter `status` in `who/team/AGENTS.md`, `who/governance/AGENTS.md`, `who/community/AGENTS.md`, `who/governance/VISION.md`. Candidate WHO-frontmatter hygiene thread.
- The M07 "skills inventory **comprehensive** review" item (STATE.md L383, operator-discretionary) is only **partially** discharged here — the count/type/inventory-listing portion is done; a quality/dedup/graduation-status pass over the 45 skills remains. STATE.md left untouched (no #needs-human flag existed for skills; progress recorded in CHANGELOG + here).

**Files touched** — CLAUDE.md, MANIFEST.md, AGENTS.md, what/glossary/glossary_skill.md, what/lattices/tools/adna_validate.py, CHANGELOG.md, + this session file.

## Next Session Prompt

Skills-count governance drift is **RESOLVED** (15/17/20 → 45 = 21 base + 24 project-specific; CLAUDE.md inventory rebuilt to all 45 in row-count-auditable Base/Project groups with Type sourced from `skill_type:` frontmatter [4 rows corrected]; a skills-count guard added to `adna_validate.py --governance`; `--governance` zero-drift; commit held-not-pushed atop `c5b553a`). Operation Keystone remains **converged** (no un-gated Rosetta work). Both governance-hygiene threads the validator now covers (templates + skills) are clean. Next un-gated in-vault candidates: the **4 WHO-file frontmatter errors** (`who/{team,governance,community}/AGENTS.md` + `who/governance/VISION.md` missing `status`), or the remaining **quality/dedup/graduation** half of the M07 skills review. Otherwise the live frontier is operator/cross-vault gated (ADR-043 ratify + co-sign; the six §C retrofits; Lighthouse P0; staged memos to Argus/Hestia/Oration). To push the held 4-commit stack (`98bb488` + `5a3eb71` + `c5b553a` + this skills-sync), get explicit operator GO first (`git fetch` + verify fast-forward before any push).
