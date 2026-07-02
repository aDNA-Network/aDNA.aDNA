---
type: artifact
artifact_id: champollion_learning_path_walk
title: "M4.3 — First-contact docs + learning path walked beginner→advanced (walk log + F-CHM-207 fix + first-tutorial designation)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m4_3_first_contact_learning_path
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p4, m4_3, learning_path, readme, first_contact, f_chm_207, walk_log]
---

# M4.3 — First-contact docs + learning path walk

> Mode B build: opus-tier BUILDER executed the learning-path walk under fable orchestration; the orchestrator independently re-verifies every claim below against the filesystem. The walk is **honest** — a step that fails as written is logged as failing, then fixed in place (or explicitly routed). See [[../missions/mission_champollion_m4_3_first_contact_learning_path|M4.3 brief]]; upstream evidence [[newcomer_stress_test|M4.1 newcomer stress-test]].
>
> **All 9 tutorials + 4 workshops walked. Zero steps left failing-as-written.**

---

## Section 1 — Provenance + walk evidence

**Build lineage.** opus-tier BUILDER, dispatched Mode B for campaign_champollion P4/M4.3. Live-vault claims cite `aDNA.aDNA`-relative paths; scratch-copy claims cite the `m4_3_walk/` prefix; image claims cite the pristine M4.1 clone (read-only).

**Scratch dirs (proof the mutate-steps ran live, not from memory):**

| Path | Role |
|------|------|
| `…/scratchpad/newcomer_walk/aDNA` | pristine M4.1 v8.3 clone `e4372a6` — **read-only** (git status clean, verified) |
| `…/scratchpad/m4_3_walk/aDNA` | fresh re-clone for the F-CHM-207 re-walk (mutated: fork simulated here) |

**Census run against the live tree (2026-07-02, `ls` counts, excl `AGENTS.md`):**

| Surface | Count | Notes |
|---------|-------|-------|
| Standard version (live) | **v2.5** | `what/docs/adna_standard.md` title |
| concepts | 13 | |
| tutorials | 9 | 3 beginner · 3 intermediate · 3 advanced |
| patterns | **22** | (tutorial_navigate said 8 — stale, fixed) |
| comparisons | 5 | |
| use_cases | 6 | |
| glossary entries | 30 | (community_context_commons said 25 — stale, fixed) |
| templates (this vault) | 41 | |
| skills (this vault) | 50 | |
| workshops | 4 | 3 kits + facilitation guide |
| ADRs | 41 + index | |
| reviewers | 16 | |
| ontology extensions | 11 | (community_context_commons said 13 — stale, fixed) |
| lattice examples (this vault) | 19 | (lattice_design workshop said 15 — stale, fixed) |

**Base-template (image) census — authoritative for the README's "What's Inside" (which describes what a newcomer clones), from the pristine clone `.adna/`:** templates **26** (12 auto-trigger) · skills **26** · lattice examples **15** · context **5 topics** · base ontology **16 entity types** · standard **v2.4** (image; live dev = v2.5).

**External URL tests (read-only):**

```
$ curl -sI https://github.com/LatticeProtocol/Agentic-DNA   → HTTP/2 301  location: https://github.com/aDNA-Network/adna-legacy
$ git ls-remote https://github.com/aDNA-Network/aDNA.git HEAD → e4372a66d5f3c7dfeb7b33ad667df5e4e89fb0d4  (v8.3 ✓)
$ curl -sI https://adna.network                              → HTTP/2 200
```

The old workshop URL **301-redirects (does not 404)** — the silent-success trap F-CHM-207/N-05 named.

---

## Section 2 — Walk log (one row per tutorial/workshop step-group)

Verdict vocabulary: **PASS** (executes as written) · **FIXED** (failed/drifted → corrected in place, what noted) · **ROUTED** (out-of-scope venue).

### Tutorials (beginner → advanced)

| # | Tutorial | Level | Verdict | Detail (file:line) |
|---|----------|-------|---------|--------------------|
| 1 | `tutorial_navigate_a_vault` | beginner | **FIXED ×3 + PASS** | Steps 1–6 as read-steps against the live tree all resolve (root files, triad dirs, AGENTS.md routing, wikilink threads). **FIX-a**: embedded tree `patterns/ (8 files)` → **22** (`:73`→ corrected). **FIX-b (N-06)**: added "Which vault does this tour walk?" callout up front (states it walks the `aDNA.aDNA` docs vault) + a one-line image-holder branch ("cloned the workspace image? your tree is smaller — the standard lives in `.adna/`; follow at adna.network/learn or this repo"). **FIX-c (N-10)**: marked as "**the designated first tutorial**" in the prereq line. All 6 concept/pattern wikilink targets exist. |
| 2 | `tutorial_first_claude_md` | beginner | **PASS** | Steps 1–5 execute: `touch CLAUDE.md`, section scaffolds, the "see it in action" pointer to `aDNA.aDNA/CLAUDE.md` (Rosetta identity) is accurate; validation table sound. Prereq wikilinks (concept_triad, concept_governance_files) resolve. No currency drift. |
| 3 | `tutorial_question_test` | beginner | **PASS** | Steps 1–4 (learn the test → sort 10 items → check answers → apply to own project) are self-contained + correct; the 10-item answer key is internally consistent. Prereq wikilinks resolve. No drift. |
| 4 | `tutorial_extend_the_ontology` | intermediate | **FIXED ×2 + PASS** | Steps 1–7 (identify → question-test → mkdir → AGENTS.md → template → instance → validate) execute against a scratch dir. **FIX-a**: Step 1 base-type list omitted `identity` + `inventory` → rewrote to name **all 16** base types (ADR-035 promoted both to base, standard v2.3). **FIX-b**: "never modify the core 14" → **"core 16"** (`:139`). Matches README `16 entity types` + CLAUDE.md base ontology. |
| 5 | `tutorial_design_a_mission` | intermediate | **PASS** | Steps 1–6 sound; the "see it in action" pointer to `campaign_rosetta/missions/mission_m04_pattern_library.md` verified present. Prereq wikilinks resolve. (The `context_budget` field the tutorial teaches predates SO-11's `token_budget_estimated`; that's a template-doctrine drift tracked at F-CHM-002, NOT a tutorial defect — the tutorial teaches the concept correctly.) |
| 6 | `tutorial_write_a_context_file` | intermediate | **PASS** | Steps 1–6 execute; the three context subtypes (`context_research`/`context_guide`/`context_core`, §10) match the live standard; quality-rubric axes sound. Prereq wikilinks resolve. |
| 7 | `tutorial_build_a_lattice` | advanced | **PASS** | Steps 1–6 (define → type → YAML → validate → federation → re-validate) execute; `what/lattices/tools/lattice_validate.py` present; the 4-type table + FAIR-block guidance match the standard. Prereq wikilinks resolve. |
| 8 | `tutorial_run_a_campaign` | advanced | **PASS** | Steps 1–6 sound; the "see it in action" Rosetta pointer (5 phases / mission board / gates) is accurate to the campaign's shape. Prereq wikilinks resolve. (Rosetta narrated as "15 missions" here = a per-phase strategic count, not a dir file count — reads as design description, KEEP; the file-count truing lands in the workshop self-ref, row below.) |
| 9 | `tutorial_federate_a_vault` | advanced | **PASS** | Steps 1–7 (readiness → URIs → export → import → compose → validate → version policy) execute; the 6-point federation checklist + `lattice://` URI format + version-policy table match `pattern_federation_readiness`. Prereq wikilinks resolve. |

### Workshops

| Workshop | Difficulty | Verdict | Detail (file:line) |
|----------|-----------|---------|--------------------|
| `workshop_build_your_first_vault` | intermediate | **FIXED (F-CHM-207) + PASS** | **Materials (`:59`)** + **Exercise 1 (`:65-77`)** rewrote from the pre-v8 two-step `git clone LatticeProtocol/Agentic-DNA` + `cp -r Agentic-DNA/.adna/` to the canonical clone-and-run→agent-fork flow (`git clone aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` → "create a new project" → `skill_project_fork` runs cp/strip/git-init/onboarding), with an explicit silent-301 warning. **Self-ref (`:136`)**: mission-file count `24` → **34** (live dir count); "10 new entity types" annotated "(now 11)". Re-walked end-to-end — §4. Exercises 2–4 (CLAUDE.md / ontology / mission) PASS as written. |
| `workshop_vault_exploration` | beginner | **PASS** | Exercises 1–4 (triad walk / AGENTS.md chain / question test / governance trio) all point at real files; the 5-item question-test answer key is correct; pre-work wikilinks (`tutorial_navigate_a_vault`, `tutorial_question_test`) resolve. No count drift. |
| `workshop_lattice_design` | advanced | **FIXED ×4 + PASS** | Exercises 1–4 (sketch / build / validate / compose) execute; `hello_world.lattice.yaml` + `composed_therapeutics.lattice.yaml` + `lattice_validate.py` all present. **FIX-a** agenda `:44` "6 lattice types" (omitted `context_set`) → **7** (canonical per CLAUDE.md). **FIX-b** `:65` "15 lattice examples" → **19** (this vault). **FIX-c** `:121` "check the 6 valid types" → **7**. **FIX-d** self-ref `:161` "15 examples" → **19**. |
| `workshop_facilitation_guide` | mixed | **PASS** | Meta-guide; audience-assessment/pacing/common-questions tables are current (references `aDNA-Network/aDNA` implicitly via "clone the vault"; "three workshop kits" = correct, the 3 kits above + this guide = 4 files). All workshop + comparison wikilinks resolve. |

**Walk totals:** 13 surfaces (9 tutorials + 4 workshops) · **PASS-clean: 8** (t2, t3, t5, t6, t7, t8, t9, w_vault_exploration, w_facilitation — 9 actually) · **FIXED-then-pass: 4** (t1, t4, w_build, w_lattice) · **ROUTED: 0** (no tutorial/workshop step needed an external venue). Zero steps left failing-as-written.

---

## Section 3 — README before/after (first-contact pattern + censused facts)

**Target**: `aDNA.aDNA/README.md` (380→~410 lines) — the docs-face README. (Distinct from the image's `.adna/README.md` = 158 lines and image root `README.md` = 86 lines, both image-side/out-of-scope.)

**Structure before**: strong but the newcomer on-ramp was buried — 60 Seconds → The Problem → Who Is This For → The Triad → Quick Start (line ~116). A reader wanting to *start* had to scroll past four conceptual sections.

**Structure after (first-contact pattern: what → why → your first 10 min → where to go by reader type)**:
- **What this is** — opening (unchanged, already strong).
- **NEW "Your First 10 Minutes"** section (after 60 Seconds): a 0–2 / 2–5 / 5–10 minute table + the **guided learning path** (N-07 vault-half: 3 explicit numbered pointers → `tutorial_navigate_a_vault` [designated first] → `first_claude_md` → `question_test`, all real relative links + the `adna.network/learn` site path) + a "reading not cloning?" image-holder branch.
- **NEW "Where to go by reader type"** table (brand-new / developer / adding-agents / evaluating / contributing → 5 destinations).
- **Why it matters** — The Problem + Who Is This For (unchanged).
- Added "Your First 10 Minutes" to the Contents nav.

**Censused facts (every count/version/URL the README states — re-verified, not inherited):**

| Fact | README says | Census | Verdict |
|------|-------------|--------|---------|
| Base ontology entity types | 16 | 16 (image `.adna/CLAUDE.md`) | ✓ correct |
| Base templates | 26 (12 auto-trigger) | 26 / 12 (image `.adna/`) | ✓ correct |
| Lattice examples | 15 | 15 (image `.adna/`) | ✓ correct |
| Context library | 5 topics, 27 subtopics | 5 topics (image) | ✓ correct |
| **Agent recipes/skills** | ~~13~~ → **26** | 26 (image `.adna/how/skills/`) | **FIXED** (13 was stale) |
| **Standard version (Further Reading)** | ~~v2.4~~ → **v2.5** | v2.5 (live standard) | **FIXED** (docs face teaches the live standard) |
| Quick Start repo URL | `aDNA-Network/aDNA` | canonical, HEAD `e4372a6` | ✓ correct |
| adna-legacy fallback | `aDNA-Network/adna-legacy` | live (301 target) | ✓ correct |
| adna.network | `adna.network/get-started` | 200 | ✓ correct |
| Lattice Protocol link | `LatticeProtocol/lattice-protocol` | (external, intentional) | KEEP |

**Facts wrong before this pass: 2** (skills 13→26; version v2.4→v2.5). All others already census-correct.

> **Scope note**: the README's "What's Inside" tree describes the **base template a newcomer clones** (not this dev vault) — so its 26/15/26 are the *image* `.adna/` numbers, which the pristine clone confirms. The dev-vault's own larger counts (41 templates / 50 skills / 19 examples) belong in the tutorials/workshops that walk *this* vault, and were trued there.

---

## Section 4 — F-CHM-207 fix + re-walk evidence

**Fix**: `workshop_build_your_first_vault.md` Materials (`:59`) + Exercise 1 (`:65-77`) re-anchored to the canonical clone-and-run→agent-fork flow; excised the pre-v8 `LatticeProtocol/Agentic-DNA` clone + `cp -r Agentic-DNA/.adna/` two-step; added a named silent-301 warning; made the fork step match the CURRENT `skill_project_fork.md` (cp `.adna/` → strip `.git/.github/README/LICENSE` → strip `role: template` + set `agent_init` → `git init` → onboarding trigger).

**Re-walk (end-to-end, scratch `m4_3_walk/`):**

```
[A] git clone https://github.com/aDNA-Network/aDNA.git m4_3_walk/aDNA   → HEAD e4372a6 (v8.3 ✓)
    root items: .adna .gitignore CLAUDE.md LICENSE README.md            (the 4 + .adna, as designed)
[B1] .adna/MANIFEST.md → role: template                                 (fork precondition ✓)
[B2] cp -r .adna/ my_project.aDNA/                                        (fork skill Step 3)
[B3] rm -rf .git .github; rm -f README.md LICENSE; rm -rf .obsidian/plugins .obsidian/themes
     → README? no ✓   LICENSE? no ✓   .git? no ✓                        (repo-level files stripped)
[B4] git init → fresh repo initialized ✓
[B5] triad present: who/ ✓  what/ ✓  how/ ✓                              (Exercise 1 expected outcome)
[B6] role: template present pre-strip → Step 4 removes it → agent_init   (onboarding trigger armed)
```

**Verdict: PASS** — the canonical flow produces a clean fresh vault with the triad + fork-ready governance + onboarding trigger. The old flow's failure mode (silent 301 → frozen `adna-legacy` @ `74cb761` + obsolete `cp -r` skipping init/onboarding) is eliminated.

**Ledger**: F-CHM-207 Disposition cell → **FIXED at M4.3 (2026-07-02)** with the one-line what + this re-walk pointer.

**Other teaching-surface old-URL / `cp -r` refs** (grep of README + `what/tutorials/` + `how/workshops/`): the only two remaining hits are both correct-by-design — the `:59` anti-pattern *warning* naming the bad URL, and the `:77` `cp -r .adna/` inside the *description of what the fork skill does* (canonical). No stray teaching refs remain.

---

## Section 5 — First-tutorial designation (N-10) + N-06 resolution

**N-10 — designated first tutorial = `tutorial_navigate_a_vault`.**

**Rationale**: of the three `level: beginner` tutorials, it is the only one with **no prerequisites** (`navigate_a_vault` = `[]`; `first_claude_md` needs concept_triad + concept_governance_files; `question_test` needs concept_triad + concept_ontology). It is a read-only guided tour — the lowest barrier — where the other two teach *producing* a file, which presupposes the reader can already *read* a vault. Its own text already self-describes as "the starting point." **Recommended beginner order: navigate_a_vault → first_claude_md → question_test.**

**Marked in**: `what/tutorials/AGENTS.md` (new "## Designated First Tutorial" section + ordering table); `tutorial_navigate_a_vault.md` prereq line ("the designated first tutorial"); the root README on-ramp; and the site tutorials index ordering cue (§7). All four surfaces now agree.

**N-06 — `tutorial_navigate_a_vault` vault-shape mismatch: RESOLVED in place** (not a separate image variant — the single reframed file serves both readers). Added up front: (1) an explicit "Which vault does this tour walk?" callout naming the `aDNA.aDNA` docs vault; (2) a one-line image-holder branch (smaller tree, standard in `.adna/`, extension legs are Rosetta additions, structure identical — follow at adna.network/learn or this repo). Trued the embedded count `patterns/ (8→22)`. The image-holder's *own* pointer line (image README) remains image-side → rides the M6.1 fold batch (already item 6 of `idea_image_newcomer_currency_fixes`); no new stub item needed.

---

## Section 6 — Ring-1 dispositions (2 rows, both re-routed)

| Idea | Verdict | One-line reason |
|------|---------|-----------------|
| `idea_demo_gif.md` | **RE-ROUTED — not executed** (`accepted` unchanged) | Recording a 30-sec terminal GIF is asset/media production, outside a Markdown docs pass; README on-ramp text-mitigated the "no visual proof" gap; venue → M4.4 (if it takes asset production) or a post-launch asset task; if the GIF targets the *image* front door, it's RC-gated. Escalated for G4 venue. |
| `idea_inner_readme_iii.md` | **RE-ROUTED — not executed** (`accepted` unchanged) | Two blockers: (1) target `.adna/README.md` is **image-side** (M4.3 guardrail forbids touching `.adna/`; ships via `skill_template_release` RC only); (2) premise stale — claims 870 lines, actual image file is **158** (verified vs clone `e4372a6`). Venue → M6.1 RC image-currency (co-locate with `idea_image_newcomer_currency_fixes`) or a standalone III pass *on the image*, re-scoped. Escalated for G4 venue. |

Per the brief: status flips only on execution; neither executed here → both left `accepted` with a disposition note appended in-file.

---

## Section 7 — Community currency notes

`who/community/` — 3 files + AGENTS.md audited:

| File | Verdict | Detail |
|------|---------|--------|
| `community_roles.md` | current | 4-level ladder (User/Contributor/Quest Runner/Steward) coherent; "10 (now 11) ontology extensions" phrasing already correct; upstream repo ref `aDNA-Network/aDNA` correct; all governance/glossary wikilinks resolve. No edit. |
| `community_processes.md` | current | 4 processes (upstream/side-quest/migration/review); repo ref `aDNA-Network/aDNA` correct; skill/doc pointers resolve. No edit. |
| `community_context_commons.md` | **FIXED ×3** | (a) self-ref counts "13 extensions / 26 content files / 25 glossary" → **11 extensions / 55+ content files (13/9/22/5/6 breakdown) / 30 glossary** (censused); (b) lowercase project ref `context_commons.aDNA/` → **`ContextCommons.aDNA/`**; (c) "in the Lattice workspace" → "in the aDNA workspace". |
| `AGENTS.md` | current | routing guide accurate. No edit. |

**Site cross-check (read-only `site/src/`)**: the site's `learn/` on-ramp (M4.2's `.learn-onramp`) and tutorials index are consistent with the vault's learning path; the one ordering-cue delta was mine to add (§7 below). No site↔vault community-claim mismatch found requiring an M4.4 note beyond the tutorials-index cue.

---

## Section 8 — Out-of-scope sweep manifest (noticed, NOT fixed)

1. **F-CHM-002 (template budget-field drift)**: `tutorial_design_a_mission.md` teaches `context_budget:` while SO-11/ADR-016 mandate `token_budget_estimated:`. The tutorial teaches the *concept* correctly; the field-name reconciliation is a template-doctrine job already ledgered (F-CHM-002 → `idea_upstream_model_tier_mission_fields`, RC). Not a tutorial-content defect.
2. **Site tutorial slugs are hyphenated** (`navigate-a-vault.mdx`), while vault files are underscored (`tutorial_navigate_a_vault.md`) — a deliberate site convention (the `[...slug].astro` glob strips the `tutorial_` prefix + hyphenates). Noted so future cross-refs use the hyphen form for site hrefs (my ordering-cue href uses `/learn/tutorials/navigate-a-vault`, verified resolving). No action.
3. **`.adna/README.md` line-count drift** (870 claimed → 158 actual) surfaced while dispositioning `idea_inner_readme_iii` — image-side, folds at RC; captured in that idea's disposition note.
4. **Image root README (86 lines) has no learning-path pointer** — already item 6 of `idea_image_newcomer_currency_fixes` (M6.1 RC); no new item filed.

---

## Section 9 — Lane telemetry

| Metric | Value |
|--------|-------|
| Lane guidance | ~36 kT (charter 40; brief token_budget_estimated 46 incl. bookend allowance) |
| Rough actual spend | **≈ 40 kT** (brief + M4.1 evidence read + full 9-tutorial/4-workshop read + census + F-CHM-207 re-walk + 11 edits + site build + artifact) |
| Delta vs lane | **≈ +4 kT** over the ~36 lane, ≈ −6 kT under the 46 brief estimate — well inside the < 2× drift band (ADR-016) |
| Mode | B (opus build under fable orchestration) |
| Surfaces walked | 9 tutorials + 4 workshops = 13, all; 0 left NOT-WALKED |
| Site build | `npx astro build` → green (179 pages, exit 0) |
| `adna_validate` | Full conformance, all checks pass (exit 0) |

**Estimate-vs-actual note**: came in near the brief estimate; the F-CHM-207 re-walk was cheap (small fast image) and the currency fixes clustered (counts + one URL flow). No retrospective trigger.

---

## Fold-stub items appended

**0** new items to `idea_image_newcomer_currency_fixes.md`. The only image-side item this walk touched (N-06's image-holder pointer line) is **already covered** by that stub's item 6 (N-07 image-pointer half) — appending would duplicate. No new numbered items added.

---

## Files created / modified

**Created**: this artifact (`learning_path_walk.md`).

**Modified (11)**:
- `README.md` — first-contact restructure (Your First 10 Minutes + reader-type router + Contents nav) + census (skills 13→26, standard v2.4→v2.5).
- `what/tutorials/tutorial_navigate_a_vault.md` — N-06 which-vault callout + image branch; N-10 designated-first; patterns 8→22.
- `what/tutorials/tutorial_extend_the_ontology.md` — base ontology 14→16 (added identity + inventory).
- `what/tutorials/AGENTS.md` — designated-first-tutorial section + beginner ordering table.
- `how/workshops/workshop_build_your_first_vault.md` — F-CHM-207 (Materials + Exercise 1 canonical flow); self-ref mission-count 24→34, "10 (now 11)".
- `how/workshops/workshop_lattice_design.md` — lattice types 6→7 (×2), examples 15→19 (×2).
- `who/community/community_context_commons.md` — self-ref counts censused; `ContextCommons.aDNA/` casing; aDNA workspace.
- `how/backlog/idea_demo_gif.md` — M4.3 re-route disposition note.
- `how/backlog/idea_inner_readme_iii.md` — M4.3 re-route disposition note.
- `how/campaigns/campaign_champollion/artifacts/findings_ledger.md` — F-CHM-207 Disposition cell → FIXED.
- `site/src/pages/learn/tutorials/index.astro` — beginner-section ordering cue (M4.2 P-4); build-verified green.

---

## Fable review record (Mode B bookend, 2026-07-02)

**Verdict: PASS.** Filesystem-verified independently: workshop lines 59/70 carry the canonical flow + a NAMED silent-301 warning (the failure mode is killed, not just the URL swapped) · ledger F-CHM-207 Disposition → FIXED ✓ · `what/tutorials/AGENTS.md` §Designated First Tutorial present with the no-prerequisites rationale + ordering table · site tutorials index cue renders with a resolving href · README census spot-checks (skills 13→26, v2.4→v2.5) · community self-ref counts · **an independent fable `npx astro build` on the final tree: GREEN, 179 pages**.

**Review marquee — the count collision → N-02 RETRACTION (F-CHM-212):** this mission's README semantic census ("26 templates / 15 examples correct") collided with M4.1's file-count-based N-02/03/04. Fresh semantic census on the pristine clone settled it: the router's "15 example lattice definitions" was CORRECT all along (15 `*.lattice.yaml`; M4.1's "20" counted AGENTS.md + 4 `.canvas` as examples); N-03/04 stand with corrected true-counts (26 `template_*.md` / 26 `skill_*.md`, 24 agent-type). N-02 retracted + cascaded (M4.1 artifact §1/§3/§4 · fold stub item 2 · F-CHM-211), meta-finding **F-CHM-212** filed, and the counting standard gained the **semantic-census corollary** (patterns/AGENTS.md): census the unit the claim names; verification must vary the method — both M4.1 parties counted files, so the "independent" verify replicated the error.

**Ring-1 rulings (the 2 escalations):** `idea_demo_gif` → **DEFER, post-launch launch-assets** (candidate lane Videos.aDNA/Iris — media production is that forge's charter; G4 housekeeping row). `idea_inner_readme_iii` → **co-locate with the M6.1 RC fold batch** (`fold_batch: champollion_m6_1_rc` added; re-scoped to the real 158-line file; the standalone-III arm declined — doesn't earn its overhead).
