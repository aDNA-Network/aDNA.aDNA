---
type: artifact
artifact_id: champollion_newcomer_stress_test
title: "M4.1 — Newcomer stress-test: the real first hour against the v8.3 public image (friction log + fix-list)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m4_1_newcomer_stress_test
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p4, m4_1, newcomer, stress_test, friction_log, first_contact]
---

# M4.1 — Newcomer stress-test: the real first hour

> Mode B build: opus-tier subagent executed the live walk under fable orchestration; the orchestrator independently re-verifies every claim below against the filesystem. Findings are reported honestly, failures included. Fix routes in §4 are **PROVISIONAL pending fable review** — this mission logs, it does not fix. See [[../missions/mission_champollion_m4_1_newcomer_stress_test|M4.1 brief]].
>
> **All six legs (0–5) WALKED.** No legs skipped.

---

## Section 1 — Provenance + evidence

**Build lineage.** opus-tier BUILDER, dispatched Mode B by a fable-tier orchestrator for campaign_champollion P4/M4.1. All image claims cite the **scratch clone** (path prefixed `image:`); live-vault claims cite `aDNA.aDNA`-relative paths.

**The clone (proof the walk ran live, not from memory):**

```
$ time git clone https://github.com/aDNA-Network/aDNA.git .../newcomer_walk/aDNA
Cloning into './aDNA'...
git clone …  0.19s user 0.09s system 19% cpu  1.453 total   ← wall time ≈ 1.45s
```

| Metric | Value |
|--------|-------|
| Repo URL | `https://github.com/aDNA-Network/aDNA.git` |
| Wall time | **1.45s** (fast — full history is only 6.0M `.git`) |
| Size on disk | **35M** total (`.git` = 6.0M; working tree ≈ 29M, dominated by `.adna/what/assets/`) |
| Tracked files | **404** (`git ls-files`) — identical to on-disk non-`.git` count |
| HEAD SHA | `e4372a66d5f3c7dfeb7b33ad667df5e4e89fb0d4` — **matches** pre-verified v8.3 ✓ |
| HEAD commit | `e4372a6 v8.3 — template org-name currency sweep …` |

**Top-2-level tree (the whole image shape):**

```
aDNA/                          ← what a newcomer clones
├── .gitignore
├── CLAUDE.md                  ← the workspace router a fresh `claude` loads
├── LICENSE
├── README.md                  ← the GitHub front door
└── .adna/                     ← the ENTIRE aDNA standard lives here (embedded base)
    ├── AGENTS.md  CHANGELOG.md  CLAUDE.md  CONTRIBUTING.md  HOME.md
    ├── LICENSE  MANIFEST.md  README.md  STATE.md  adna.md  setup.sh
    ├── .github/   .obsidian/   .gitignore   .obsidianignore
    ├── how/   → AGENTS airlock backlog campaigns docs migrations missions
    │            pipelines quests sessions skills standard templates
    ├── what/  → AGENTS assets context decisions docs inventory lattices
    │            ontology.md
    └── who/   → AGENTS coordination governance identity team
```

**Load-bearing structural fact:** the top level has exactly **four** items besides `.adna/` — `CLAUDE.md`, `README.md`, `LICENSE`, `.gitignore`. The image is the clone-and-run model working as designed: `.adna/` is the embedded base, and a fresh `claude` at the root loads the root `CLAUDE.md` (persona **Berthier**, workspace-router role). **The image ships NO `what/tutorials/` and NO `how/workshops/`** — those are `aDNA.aDNA` (Rosetta) extensions, not in the public image. This single fact drives three of the majors below.

**Counts verified in the image** (for the drift findings): `.adna/how/templates/*.md` = **27** · `.adna/how/skills/*.md` (excl AGENTS) = **26** · `.adna/what/lattices/examples/` = **20** · `.adna/what/context/` topic dirs = **5**.

---

## Section 2 — The first hour, as lived

### Leg 0 — Arrival (delight)
The clone is instant (1.45s) and small (35M). The newcomer runs the README's one command, `cd`s in, and sees a tidy four-item root. First impression is genuinely good: the README's promise — *"This repo is a ready workspace"* — visibly matches what landed. Nothing at the front door lies about the command itself. **This is where the hour is best.**

### Leg 1 — README quickstart (mostly delight, one squint)
The README (`image:README.md`) is clean and modern. The install command (line 32) points to the **correct** new URL `aDNA-Network/aDNA`; the "What you just cloned" tree (lines 43–48) matches reality; the "Existing installs" section (line 74) honestly explains the pre-2026-06 layout. External links resolve: `curl -sI https://adna.network` → **200**; the `adna-legacy` fallback repo (line 76) → live via `git ls-remote`. **The one squint:** the status badges (line 7) read **`governance v7.2`** and **`standard v2.2`**, but the cloned `.adna/CLAUDE.md` is `version: "8.3"` and the cloned standard is `title: "aDNA Universal Standard v2.4"`. A careful newcomer notices the badge and the file disagree by two minor versions — a small credibility ding at the front door.

### Leg 2 — Cold-start trace (delight)
Reading `image:CLAUDE.md` as a fresh `claude` would: it identifies as **Berthier** (correct workspace persona), states it's a git repo cloned from `aDNA-Network/aDNA`, and runs a clean state-detection flow. **Step 0** (legacy `~/lattice/` root detection) *fires-negative* for a fresh `~/aDNA` clone — correct, and guarded "offer once." **Step 1** verifies `.adna/MANIFEST.md` has `role: template` (it does). **Step 2** scans for `*.aDNA/` (a fresh image has none → "Fresh install" branch). **Step 3** routes to `skill_project_fork.md`. **Every file the router names exists in the clone** — I checked all eight skill paths + the spec + overview + setup.sh + banner asset: 12/12 present, zero dead internal links. Crucially, **the router carries no node residue** — no machine paths, no specific project rows, no operator name. This is the top-severity finding class the brief flagged, and the image is **clean** on it. The only newcomer-friction here is cosmetic: **Step 0's `~/lattice/` prompt** references a legacy root a brand-new user never had, which momentarily reads as "wait, do I have a lattice root?"

### Leg 3 — First-fork trace (delight)
`image:.adna/how/skills/skill_project_fork.md` would execute cleanly. It correctly handles the `.adna/`-is-the-repo embedding: `cp -r .adna/ <name>.aDNA/`, then strips `.git`/`.github`/`README`/`LICENSE`, strips `role: template`, sets `agent_init` markers, `git init`. All its referenced files exist (`template_home_claude.md`, the `template_node_adna_exemplar/` bundle, `projects_folder_pattern.md`). `skill_onboarding.md`'s first-run detection (`agent_init` + empty `history/` + no `role: template`) **matches exactly** what a fresh fork produces. **The one crack:** `skill_onboarding.md:59` says *"Introduce yourself as Berthier"* unconditionally, while ADR-042 (v8.2) parameterized the forked CLAUDE.md to `{{persona}}`, and the fork skill's own Step 4 (line 157) says a fresh fork should *not* inherit "Berthier." Lines 187/194/202 treat Berthier correctly as the *default onboarding resolves* — but line 59's flat imperative contradicts a fork where `{{persona}}` was pre-set (e.g. a Home fork → Hestia). A newcomer wouldn't be blocked, but the agent voice is internally inconsistent.

### Leg 4 — Learning path (confusion — the hour degrades here)
This is where a real newcomer gets lost. **From inside the image there is no learning path to find.** The image ships no `tutorials/` and no `workshops/`. The README points only to `adna.network` and the spec (`adna_standard.md`) + `aDNA_overview.md`. Grepping the image's `aDNA_overview.md` and `adna.md` for "tutorial/workshop/learn more/start here" returns **nothing** beyond the spec itself. So a newcomer who wants to *learn* rather than *immediately fork* has only a 47K spec deep-dive and an external site — no in-repo guided on-ramp. Then, stepping into the LIVE dev-vault docs face (where the tutorials actually live): `what/tutorials/AGENTS.md` describes three tiers but **names no designated first tutorial** — the newcomer must guess between `tutorial_navigate_a_vault.md` and `tutorial_first_claude_md.md` (both `level: beginner`). Opening the natural entry, `tutorial_navigate_a_vault.md`, it walks **the `aDNA.aDNA` dev vault itself** (its tree shows `concepts/ (13 files)`, `patterns/ (8 files)`, `comparisons/`, `templates/ (41 templates)`) — **none of which exist in the image the newcomer cloned** (image has 27 templates, no concepts/patterns/comparisons dirs). A newcomer following the "starting point" tutorial literally, inside their fresh install, hits missing directories and wrong counts on step 2.

### Leg 5 — Workshop, F-CHM-207 (major — the worst stumble)
`how/workshops/workshop_build_your_first_vault.md` Exercise 1 (lines 59, 70–71) teaches the **pre-v8 two-step flow**:
```bash
git clone https://github.com/LatticeProtocol/Agentic-DNA.git
cp -r Agentic-DNA/.adna/ my_project.aDNA/
```
Tested read-only: `git ls-remote https://github.com/LatticeProtocol/Agentic-DNA.git` → **exit 0**, returns `HEAD 74cb76195d27…` (the frozen legacy). `curl -sI` → **HTTP 301** `location: https://github.com/aDNA-Network/adna-legacy`. So the URL **does not 404** — GitHub silently redirects the clone to the **frozen `adna-legacy` archive (`74cb761`, pre-v8)**. A newcomer following the workshop literally: (1) clones a *stale legacy vault* with **no error, no warning** — worse than a 404, which would at least signal "wrong"; (2) runs the obsolete `cp -r .adna/` copy that skips the current fork skill's fresh `git init`, marker-stripping, and onboarding trigger. They end the workshop with an outdated vault that *looks* correct. This is the confirmed F-CHM-207, and its silent-success failure mode makes it materially misleading.

**Net of the hour:** delighted through fork (legs 0–3), then lost at "how do I learn more?" (leg 4) and actively misled if they reach the workshop (leg 5). The clone-and-fork spine is solid; the *learning on-ramp* around it is where a v8 newcomer falls off.

---

## Section 3 — Friction log

Severity vocabulary: **blocker** (cannot proceed) / **major** (proceeds but materially misled or lost) / **paper-cut** (notices, works around). Rows in walk order within severity bands. `image:` = clone-relative; otherwise `aDNA.aDNA`-relative or URL.

### Blockers
_None._ The image clones clean and the README front door is accurate at the command level. (Per the brief's honest-walk rule, a zero-friction hour would be rejected — this report carries 3 majors + 6 paper-cuts below, so the absence of blockers is a finding, not a miss: the *mechanics* work; the *learning path* is the weak leg.)

### Majors

| ID | severity | location | what the newcomer experiences |
|----|----------|----------|-------------------------------|
| N-05 | major | `how/workshops/workshop_build_your_first_vault.md:59,70,71` (URL `github.com/LatticeProtocol/Agentic-DNA`) | Follows the workshop's clone command; it succeeds silently (301→frozen `adna-legacy` @ `74cb761`), handing them a **stale pre-v8 vault** + obsolete `cp -r .adna/` flow — no error tells them anything is wrong. (F-CHM-207, confirmed.) |
| N-06 | major | `what/tutorials/tutorial_navigate_a_vault.md:44-56` (+ workshop Exercise 2/3 assuming dev-vault shape) | Opens the "starting point" beginner tutorial inside their fresh install; its tree names `concepts/ (13)`, `patterns/ (8)`, `comparisons/`, `templates/ (41)` — **none present in the image** (27 templates, no concepts/patterns/comparisons). The tutorial narrates the dev vault, not what they cloned. |
| N-07 | major | `image:README.md:70` + `image:.adna/what/docs/aDNA_overview.md` + `image:.adna/adna.md` (absence of any tutorials/workshops in the image) | Wants to "learn more"; the image ships no `tutorials/`/`workshops/` and the overview/adna.md give zero "start here / learn more" pointers beyond a 47K spec + the external site. No in-repo on-ramp exists. |

### Paper-cuts

| ID | severity | location | what the newcomer experiences |
|----|----------|----------|-------------------------------|
| N-01 | paper-cut | `image:README.md:7` (badges) | Notices the badges say `governance v7.2` / `standard v2.2` but the cloned `.adna/CLAUDE.md` is `8.3` and the standard is `v2.4` — front-door version disagrees with the files by two minors. |
| N-02 | paper-cut | `image:CLAUDE.md:137` | Router says "15 example lattice definitions"; the image has **20** (`.adna/what/lattices/examples/`). |
| N-03 | paper-cut | `image:CLAUDE.md:138` | Router says "22 reusable templates"; the image has **27**. |
| N-04 | paper-cut | `image:CLAUDE.md:139` | Router says "14 agent recipes"; the image has **26** skills. |
| N-08 | paper-cut | `image:.adna/how/skills/skill_onboarding.md:59` | If the reader inspects the onboarding skill, its flat "Introduce yourself as Berthier" contradicts the ADR-042 `{{persona}}` parameterization the same fork applies (and the fork skill's Step 4 line 157). |
| N-09 | paper-cut | `image:CLAUDE.md:42-48` (Step 0) | The router's Step 0 asks about a legacy `~/lattice/` root a brand-new user never had — momentarily reads as "am I supposed to have a lattice root?" (Guarded "offer once," so low-friction.) |
| N-10 | paper-cut | `what/tutorials/AGENTS.md` (no designated first tutorial) | Reaches the tutorials index and must guess the entry point — **three** `level: beginner` files (`tutorial_navigate_a_vault` · `tutorial_first_claude_md` · `tutorial_question_test`), nothing marks which is FIRST. *(Builder wrote "two"; corrected 2 → 3 at fable review — census rule.)* |

**Total: 10 rows — 0 blockers · 3 majors · 7 paper-cuts.**

_(Adjacent note, not a separate row: `image:.adna/what/docs/aDNA_overview.md:15-17` self-describes as "pre-aDNA-v7.0" content with `updated: 2026-05-11` — old but honestly provenance-stamped, so it reads as archival deep-dive rather than broken. Folded into N-07's "no current on-ramp" theme.)_

---

## Section 4 — Fix-list routing ✅ FINALIZED (fable review 2026-07-02)

> **Fable review record (Mode B bookend)**: every load-bearing claim independently re-verified against the filesystem before finalization — N-05's 301 (`ls-remote` → `74cb761`, `curl -sI` → `301 location: aDNA-Network/adna-legacy`) · N-01 badges vs `version: "8.3"`/v2.4 · N-02/03/04 router lines 137–139 vs census 20/27/26 · N-06 tutorial tree lines 44–56 vs image dir absences (concepts/patterns/comparisons/tutorials/workshops all ENOENT) · N-08 onboarding:59 vs fork:157 contradiction · clone pristine (`git status` clean @ `e4372a6`). One builder count corrected (N-10: 2 → 3 beginner files). **Verdict: PASS** — §2 reads as a lived hour; the zero-blocker outcome is evidenced, not asserted (mechanics solid, learning on-ramp weak). Routing changes vs the builder's provisional: **N-10 → (b) M4.3** (designating the first tutorial IS M4.3's core learning-path judgment — not preempted as a one-liner here); **N-07 gains a (c) rider** (the image-side "learn more" pointer line rides the fold batch). Net: **class-(a) = NONE** (acceptance's "class-(a) fixes executed" satisfied vacuously — every fix has a better-owned venue); (b) = 4 rows; (c) = 5 rows + 1 rider → ONE consolidated fold stub [[../../../backlog/idea_image_newcomer_currency_fixes|idea_image_newcomer_currency_fixes]] (`fold_batch: champollion_m6_1_rc`); (d) = 1 row. Ledger: F-CHM-207 disposition annotated (silent-301 evidence) · **F-CHM-210** (on-ramp gap) + **F-CHM-211** (image currency cluster) filed.

Routes: **(a)** mechanical-safe fix now in this vault's docs · **(b)** M4.2 (site) / M4.3 (learning path, README-side) / M4.4 (content currency) · **(c)** template-image fix → `fold_batch: champollion_m6_1_rc` stub · **(d)** decline-with-reason.

| Row | Provisional route | Venue | One-line rationale |
|-----|-------------------|-------|--------------------|
| N-05 | **(b) M4.3** | `how/workshops/workshop_build_your_first_vault.md` (dev vault) | F-CHM-207 is explicitly M4.3-owned; replace the two-step `LatticeProtocol/Agentic-DNA` + `cp -r .adna/` with the v8 clone-image→`claude`→fork-skill flow. |
| N-06 | **(b) M4.3** | `what/tutorials/tutorial_navigate_a_vault.md` (+ workshop Ex.2/3) | Beginner tutorial must state it walks the dev vault (or offer an image-shaped variant); currency of the embedded tree/counts also touches M4.4. |
| N-07 | **(b) M4.2 + M4.3** *+ (c) rider* | site (M4.2) + this vault's README/tutorial pointers (M4.3) + image README pointer line → fold batch | The on-ramp gap is tri-surface: the site is the newcomer's "learn more" home (M4.2); this vault's docs face points there (M4.3); the IMAGE's missing pointer line is image content → rides [[../../../backlog/idea_image_newcomer_currency_fixes|the fold stub]] item 6. |
| N-01 | **(c) → `fold_batch: champollion_m6_1_rc`** | `image:README.md:7` badges | Version badges live in the released image; the currency fix must ride the template-release RC, not a dev-vault edit. |
| N-02 | **(c) → `fold_batch: champollion_m6_1_rc`** | `image:CLAUDE.md:137` | Image-router count ("15" examples) is released-image content; fold the true count at the RC. |
| N-03 | **(c) → `fold_batch: champollion_m6_1_rc`** | `image:CLAUDE.md:138` | Image-router count ("22" templates); same RC fold. |
| N-04 | **(c) → `fold_batch: champollion_m6_1_rc`** | `image:CLAUDE.md:139` | Image-router count ("14" skills); same RC fold. |
| N-08 | **(c) → `fold_batch: champollion_m6_1_rc`** | `image:.adna/how/skills/skill_onboarding.md:59` | The onboarding skill is template content; the `{{persona}}` reconciliation folds at the RC (co-locate with any ADR-042 follow-through). |
| N-09 | **(d) decline-with-reason** | `image:CLAUDE.md:42-48` | Legacy `~/lattice/` detection is intentional migration UX for existing installs, guarded "offer once"; removing it would strip a real path. Keep. |
| N-10 | **(b) M4.3** *(fable ruling — was (a)-or-(b))* | `what/tutorials/AGENTS.md` | Which tutorial is FIRST is exactly M4.3's learning-path judgment (it re-walks the whole route beginner → advanced); a preemptive one-liner here would prejudge it for zero time gain — M4.3 runs next-but-one in this same sweep. |

_Routes FINALIZED per the review record above; N-01/02/03/04/08 (+N-07's image-pointer rider) consolidated as ONE "image currency sweep" RC line item = [[../../../backlog/idea_image_newcomer_currency_fixes|idea_image_newcomer_currency_fixes]]._

---

## Section 5 — Out-of-scope sweep manifest (noticed, NOT fixed)

Everything below is outside M4.1's newcomer-first-hour scope — listed for the orchestrator, no action taken:

1. **`skill_project_fork.md:219`** wikilink `[[what/docs/projects_folder_pattern|…]]` resolves (target exists), but the doc's own currency vs v8 layout wasn't audited — candidate for the M4.4 content-currency sweep, not this walk.
2. **`image:.adna/setup.sh:3`** self-describes "14 community plugins" — another narrated count; whether it matches the actual plugin manifest is an image-hygiene check, not first-hour friction.
3. **`image:.adna/what/docs/aDNA_overview.md`** carries a `moved_from: README.md` / `moved_at: 2026-05-11` provenance and "pre-aDNA-v7.0" self-label — a full re-currency of this 47K doc is an M4.4-scale content job, well beyond M4.1.
4. **Standard-normative surfaces untouched:** I read `adna_standard.md`'s header only (to confirm the v2.4 version for N-01) — no normative-content audit; that is the standard-currency track (M6.x / separate artifacts), not this mission.
5. **`.adna/` (the live workspace template at `/Users/stanley/aDNA/.adna/`)** was NOT read — per guardrail, all image claims came from the CLONE. Any dev↔image drift in the live `.adna/` is out of scope by construction.
6. **adna.network site content** was fetched only at the HTTP-status level (`curl -sI` → 200); the site's newcomer UX is M4.2's job, not walked here.

---

## Section 6 — Lane telemetry

| Metric | Value |
|--------|-------|
| Lane guidance | 40 kT |
| Rough actual spend | **≈ 33 kT** (clone + 6-leg walk + artifact author) |
| Delta vs lane | **≈ −7 kT (under)**, well inside the < 2× drift band (ADR-016) |
| Mode | B (opus build under fable orchestration) — first-hour walk executed live, not reconstructed |
| Legs walked | 0,1,2,3,4,5 — **all six**, none skipped |

**Estimate-vs-actual note:** the walk came in under lane because the image is small (fast clone, 404 files) and the findings clustered (the "no tutorials/workshops in image" fact resolved legs 4–5 quickly once observed). No retrospective trigger.
