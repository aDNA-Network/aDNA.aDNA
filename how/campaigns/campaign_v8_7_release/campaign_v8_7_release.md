---
campaign_id: campaign_v8_7_release
type: campaign
title: "Operation Cleanroom — the v8.7 template release (currency + inheritable defaults)"
owner: stanley
status: completed
phase_count: 4
mission_count: 1
estimated_sessions: "2-3"
calibrated_sessions: "2-3"
estimation_class: "governance-broad"
executor_tier: opus
priority: medium
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
tags: [campaign, v8_7_release, cleanroom, template_release, currency, doc_hygiene]
---

# Campaign: Operation Cleanroom — the v8.7 template release

> **Codename note**: "Cleanroom" is a proposed codename (operator-adjustable) — a cleanroom both *strips
> contaminants* (the fleet-name leak, the stale index) and is where you *assemble a precision seed* (the
> inheritable STATE convention + visual-inspection doctrine). Every rider makes the base image a cleaner,
> more complete seed for the next fork. Rename or drop the codename freely.

## Goal

Ship **v8.7** of the aDNA standard to the public face `aDNA-Network/aDNA` — a **currency-and-inheritable-defaults
release** (governance `8.6 → 8.7`; **standard stays v2.5**, no normative surface touched). Four low-risk riders,
each independently authored + self-reviewed, that make the base image cleaner and more complete for every new
fork: strip the last fleet-specific leak, complete the stale template index, and fold two inheritable defaults
(a STATE frontmatter convention + the headless-visual-inspection doctrine) so fresh vaults get them at
fork-time. When the campaign closes, the clone-and-run image carries no fleet contamination and teaches
visual-inspection + machine-readable state out of the box.

## Context

**Operation Ouroboros** (the v8.6 release, `campaign_v8_6_release`) closed 2026-07-06, shipping the 5
graph-lifecycle skills and explicitly **routing a set of deferred items to v8.7** (Completion Summary §Descoped
+ §Follow-Up; `p2_ratification_record.md` D-4). **Operation Storyweave** (the adna.network site campaign)
then ran and **graduated 2026-07-13** at capstone ranker 4.89 — leaving the vault with no active campaign.

"Continue the campaign" resolved to the highest-leverage solo-agentic thread: **the v8.7 release queue**. The
operator ratified the **direction** (v8.7 queue, over the two in-person-deferred Storyweave slivers) and the
**scope** (**all 4 low-risk riders**; the 2 heavier gated items held for their own work) at the planning gate
this session. Plan: `/Users/stanley/.claude/plans/please-read-teh-claude-md-playful-valiant.md`.

**Why a campaign, not a lone mission**: like every template release, the work carries **two distinct operator
gates** (P2 ratify, P3 fire) — matching the Ouroboros / Meridian / Concord precedent. It is lighter than v8.6
(4 small riders vs. 5 unbuilt lifecycle skills), hence 2-3 sessions, not 4-6.

**The v8.7 queue is scattered** (no dedicated queue file) — best single enumeration:
`how/backlog/idea_upstream_visual_inspection_doctrine.md:23`. Sources per rider are in §Notes.

Prior release precedent (execution gotchas): [[reference_skill_template_release_execution]] (memory) · v8.6
shipped 2026-07-06 (`32d4dd5`, tag `v8.6`) · the RC/precedent pattern at `campaign_v8_6_release/`.

## Scope

### In Scope — the 4 low-risk riders (no ADR gate; ride the standard P2 ratify)

- **Item 4 — genericize `skill_git_remote_setup` fleet repo names.** Replace the 4 hardcoded grandfathered
  real repo names (`GRANDFATHERED=(…)` ~:98 + §Special-cases prose ~:254) with a generic placeholder + note;
  keep the ADR-009 mechanism. Dev-source edit; folds to `.adna/` at P3. *(Public-image hygiene — the last
  fleet leak v8.6's Batch G left for v8.7.)*
- **Item 3 — complete the image `how/templates/AGENTS.md` index.** The base-image index enumerates ~24
  templates but the dir holds **30** (missing `template_disposition_ledger` + `template_second_genesis_dossier`,
  both shipped in v8.6, + 5 more; header over-counts). Reconcile to the 30 base templates (dev copy is the
  structural source; genericize — drop the 11 dev-only extension rows). **Image-curated file → folded at P3
  assembly** (like v8.6's `skill_iii_setup` census fix), not a P1 dev edit. ⚠ `adna_validate` skips nested
  AGENTS.md → hand-verify.
- **Item 2 — STATE `phase:`/`campaigns:` frontmatter convention** (Hestia addendum #2). Add two *optional*,
  honest-absent machine-readable keys to the base STATE seed / `template_state` convention (Home ADR-007 origin).
  Additive, no schema break. Author in the dev graph; fold to `.adna/` at P3.
- **Item 5 — fold the visual-inspection doctrine** (added post-Ouroboros, 2026-07-07). Fold a short,
  governance-lean `doctrine_visual_inspection` pointer into `.adna/` so new vaults inherit headless-Playwright-
  as-default at fork-time (today `.adna/CLAUDE.md` has zero visual-tooling guidance). **Policy/doctrine only**
  ("option 1" scope). **Full-link-set DE-LINK pass mandatory** (v8.5 D-1 lesson).
- **The release fire** (P3): `skill_template_release` — dry-run → operator gate → assemble the ratified delta
  into a fresh `aDNA-Network/aDNA` clone's `.adna/` → tag `v8.7` → push → local `~/aDNA/.adna` sync → 7-row smoke.

### Out of Scope

- **Item 1 — `node_manifest` interview emission** (Hestia addendum #1). An **unbuilt M-effort feature** carrying
  a **hard ADR gate** (aDNALabs ADR-015 §B3 Tier-3 + Home ADR-006) and cross-persona into Hestia's altitude.
  Triage: ACCEPT idea, DEFER build → a **Hestia-led mission**, not a release rider. Idea:
  `how/backlog/idea_upstream_node_manifest_interview_emission.md`.
- **Batch B** (CLAUDE.md governance prune + inner-README III batch) — campaign-shaped (each L-effort, "needs its
  own review + adversarial pass") → **its own sub-campaign**. Ideas: `idea_upstream_claude_md_prune.md`,
  `idea_inner_readme_iii.md`.
- Firing the release without the ratify gate; touching any normative standard surface (that's a v2.6 window).

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| v8.7 queue (scattered idea files + Ouroboros §Follow-Up) | routed, not executed | This campaign (P1–P3) |

## Phases & Missions

### Phase 0: Charter *(this session)*

Create the campaign scaffold + author the P1 mission + open the campaign in STATE. **Done when** the campaign
dir, charter, CLAUDE.md, and `mission_v8_7_p1_rider_authoring.md` exist and STATE reflects the open campaign.

### Phase 1: Author

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P1 | Rider authoring (4 riders + DE-LINK + validate) | 1-2 | — | ⏳ in progress |

**Author order** (riders are *independent* — no composition graph like v8.6; order by containment):
item 4 (contained dev edit) → item 3 (image index, staged) → item 2 (STATE convention) → item 5 (doctrine
fold, most design/DE-LINK). Each rider self-reviewed (`skill_dual_audience_review`; `skill_self_reference_check`
where it applies).

**Phase exit gate**: every rider authored + self-reviewed; any `proposed`-source residue triaged for P2;
count surfaces confirmed unchanged (no new skills/templates) + `adna_validate --governance` zero-drift; P1 AAR filed.

### Phase 2: Ratify *(OPERATOR GATE)*

Operator reviews the authored batch and **signs** it (§7.7) — with an explicit accept/hold per rider.
**Phase exit gate**: operator ratification recorded (`template_ratification_record`); the final v8.7 ship-set frozen.

### Phase 3: Fire *(OPERATOR GATE)*

Run `skill_template_release` (version `v8.7`): `dry_run` first → operator confirms → fold the ratified delta
(incl. the item-3 AGENTS.md reconciliation + the 3 version surfaces) into a fresh clone's `.adna/` → gitleaks +
full-link-set scan + `adna_validate --governance` zero-drift → **pause for second operator GO** → annotated tag
`v8.7` + push `main` (**tags-only**) → sync local `~/aDNA/.adna` → 7-row fresh-clone smoke → campaign close +
AAR. **Phase exit gate**: tag `v8.7` live on `aDNA-Network/aDNA`; 7/7 smoke green; local `.adna` synced;
STATE + memory updated.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| DP0 | (pre-campaign) | Direction — pick up the v8.7 release queue? | ✅ resolved — yes (operator, this session) |
| DP1 | (pre-campaign) | Scope — which ship-set? | ✅ resolved — **all 4 riders** (items 2,3,4,5); items 1 + 6 held (operator, this session) |
| DP2 | P1 (item 5) | Visual-inspection doctrine placement — `.adna/CLAUDE.md` subsection vs. standalone `.adna/what/doctrine/` file | ⏳ open (P1; low-stakes) |
| DP3 | P1 close | Triage any `proposed`-source residue for the P2 gate | ⏳ open (P1) |
| DP4 | P2 | Ratify the authored batch (§7.7) + freeze the ship-set | ⏳ open (operator gate) |
| DP5 | P3 | Fire the release (post dry-run) | ⏳ open (operator gate) |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| A leaked private wikilink/path ships into the public image (v8.5 near-miss: 21 links) | High | Grep the FULL outbound link set (`](…)` + `[[…]]`) of every folded artifact before assembly (esp. item 5 doctrine + item 2); diff-based copy of the ratified delta only |
| Item 5's doctrine folds a dev-vault-specific pointer (paths/personas) into the generic image | Medium | Author the `.adna/` version generic/policy-only from the start; DE-LINK; do NOT wholesale-copy the dev `doctrine_visual_inspection` |
| Item 3 AGENTS.md drifts again (linter skips nested AGENTS.md) | Medium | Hand-count `template_*.md` in `.adna/how/templates/`; reconcile the index + its header tallies to match; record the count in the staging ledger |
| Diff-based fold regresses an image file older-in-dev (v8.6 `skill_project_fork` lesson) | Medium | Fresh public clone's `git status` must show exactly the ratified N paths under `.adna/`; any extra = NO-GO |
| Two-tally confusion (image counts ≠ dev counts) | Low | No new skills/templates this release → validated count surfaces (image CLAUDE.md comment + MANIFEST) are **unchanged**; only the nested index (item 3) moves |
| `.adna` case-insensitive `.gitignore` regression drops the standard tree | Medium | `skill_template_release` step (c) gotcha + smoke check 4 |

## Verification Strategy

Per-mission: SITREP + 5-step AAR + deliverables self-reviewed + git clean (path-scoped commits, no push until
operator elects). Per-rider: `skill_dual_audience_review`; DE-LINK grep on every foldable artifact. Release
(P3): the 7-row fresh-clone smoke from `skill_template_release` step (f) — a red row reverts the decision to the
operator (never auto-remediate a pushed tag).

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Charter | — | 0 (rides P1 session 1) |
| P1 Author | P1 | 1-2 |
| P2 Ratify | (gate) | 0 (operator) |
| P3 Fire | (release) | 1 |
| **Total** | **1 mission + 2 gates** | **2-3 sessions** |

## Notes

- **Author into the dev graph** `how/skills/`, `how/templates/`, the STATE-seed convention — dev-canonical;
  `skill_template_release` (P3) folds the ratified delta into `.adna/`. **Never edit `.adna/` directly** (SR1).
- **Two `.adna/`-side / assembly-time items**: item 3 (nested `how/templates/AGENTS.md`, image-curated) and the
  physical fold of items 2/4/5 happen at **P3 assembly**, staged in `artifacts/` at P1.
- **No count bump** — none of the 4 riders adds a skill or template (item 3 aligns the *index* to the already-
  existing 30 templates). Validated count surfaces stay put; confirm `adna_validate --governance` zero-drift.
- **Governance `8.6 → 8.7`; standard stays `v2.5`.** The bump touches only 3 template surfaces:
  `.adna/CLAUDE.md:3` `version`, `.adna/CLAUDE.md:10` header comment, `.adna/CHANGELOG.md` new entry. The dev
  vault's own `## Governance Doctrine (v8.4)` header + `version: "8.4"` are **untouched** (deliberate self-drift).
- **Tags-only** — push annotated tag + `main`; do NOT `gh release create` (every run v8.2→v8.6 shipped tags-only).
- Source ideas (per rider): item 2 = `idea_upstream_state_frontmatter_phase_campaign_keys.md` · item 4 = queue
  note (no separate idea) · item 5 = `idea_upstream_visual_inspection_doctrine.md` (`upstream_target: v8.7`) ·
  item 3 = Ouroboros §Follow-Up + `p2_ratification_record.md`. Canonical dev doctrine for item 5:
  `what/doctrine/doctrine_visual_inspection.md` (landed at Storyweave; do NOT wholesale-copy — author a generic
  `.adna/` pointer).

## Completion Summary

**SHIPPED 2026-07-13** — **v8.7 live on `aDNA-Network/aDNA`**: commit `1c30f3b` + annotated tag **`v8.7`** (main
`32d4dd5..1c30f3b`), tags-only. Governance **8.6 → 8.7**; standard **stays v2.5**; **no count bump**. Local
`~/aDNA/.adna` synced (`14a1d43`); 7-row fresh-clone smoke green; `adna_validate --governance` Zero drift on the
pushed image. Executed P0→P3 in 2 sessions (P0+P1 authoring; P2 ratify + P3 dry-run→fire).

### Deliverables (the 4 riders)
- **Item 4** — `skill_git_remote_setup.md` fully fleet-cleaned: 4 grandfathered repo names → 0 (`GRANDFATHERED`
  empty-by-default + populate-guidance; mechanism + pedagogy preserved) + DP3 `M07`/`v7.0` milestone genericize.
- **Item 3** — image `how/templates/AGENTS.md` index reconciled **23→30** (12 auto + 13 manual + 5 operational);
  fixed a 7-template undercount (incl. the 2 v8.6-shipped operational templates); hand-verified 30/30.
- **Item 2** — optional STATE `phase:`/`campaigns:` frontmatter convention added to the `.adna/STATE.md` seed
  (permissive schema, no change; honest-absent).
- **Item 5** — a generic, DE-LINKED visual-inspection doctrine folded as a `### Visual inspection` subsection in
  `.adna/CLAUDE.md` (DP2 = subsection; headless-first policy, no harness code).
- **Version surfaces** — `.adna/CLAUDE.md` version 8.6→8.7 + header comment · `.adna/CHANGELOG.md` v8.7 entry.
- **Badge completion patch** (post-smoke finding) — governance badge `v8.5→v8.7` in BOTH image READMEs
  (`30f6862`, follow-up commit, tag unmoved); local `.adna/README` synced (`cc6d51c`).

### Key Findings
- **Dev-copy-older-than-image** (v8.6 Batch G genericized `skill_git_remote_setup` image-side; the dev source
  lagged). Fix = backport image→dev, THEN apply the delta → `diff .adna/ dev/` = clean. A naive dev-copy edit
  would have re-leaked what v8.6 fixed. **`diff dev .adna/` FIRST** for any rider on a file v8.6 touched.
- **3 of 4 riders are image-curated** (nested AGENTS.md · STATE seed · CLAUDE.md subsection — no clean dev
  source) → authored as complete staged artifacts, applied at P3 assembly, not P1 dev edits.
- **The dry-run caught a real bug**: item-5's fold-body extraction split on the heading text that also appears
  (backticked) in the staged DP2 prose → duplicate heading + leaked prose. Fixed the anchor + guard asserts.
- **The governance badge in BOTH READMEs is a version surface** the v8.6 *and* v8.7 enumerations missed
  (stale at v8.5). Patched + added to the release-surface checklist (memory).

### Follow-ups (not blocking; noted)
- `.obsidian/plugins/*/main.js` gitleaks false positives (8, minified JS) → a `.gitleaks.toml` allowlist.
- Item 1 (`node_manifest`, ADR-gated → Hestia mission) + Batch B (own sub-campaign) remain the v8.7-adjacent queue.

## Campaign AAR

- **Worked**: mirroring the Ouroboros 4-phase / 2-gate structure; the staging ledger doubling as P2 packet + P3
  manifest; the backport-then-delta discipline keeping item 4's fold clean; the dry-run-then-pause catching the
  item-5 bug + the stale badge *before* they became a bad release.
- **Didn't**: my version-surface enumeration (3 surfaces) missed the README badges — caught only at the
  post-fire smoke (a 4th/5th surface); the item-5 extraction bug slipped my P1 self-review (the staged
  artifact's own prose contained the split anchor).
- **Finding**: the "governance version surface" set is **5**, not 3 — CLAUDE.md frontmatter + header comment +
  CHANGELOG + **root README badge + `.adna/README` badge**. Codify in the release checklist.
- **Change**: staged the 3 image-curated riders as complete turnkey artifacts (not prose instructions) → a clean
  `cp`-at-P3 assembly; added guard assertions to the item-5 extraction after the double-heading bug.
- **Follow-up**: the gitleaks allowlist + the two held items (node_manifest, Batch B); next release = v8.8 queue.
