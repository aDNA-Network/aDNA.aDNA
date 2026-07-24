---
type: backlog_idea
status: proposed
priority: high
created: 2026-07-17
updated: 2026-07-17
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/campaigns/campaign_context_health/ (W2; filed during Wave E)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, state_md, state_history, graduation, frontmatter_bloat, doc_health, clear_hearth]
---

# Idea: STATE.md graduation → standard (`STATE_history.md` convention + >100KB auto-graduate rule + frontmatter as a first-class graduation class)

## Problem

`STATE.md` is the first read of every session, and the standard gives it no lifecycle. Left alone it accretes monotonically: this node's fleet reached **6.3MB of STATE.md across 74 files** (worst: 683KB / 612KB / 400KB — several exceeding read-tooling limits), plus 2.7MB of CHANGELOG. Every session pays the read cost; cold starts mis-orient on fossil sections; and compaction **without a guard just re-bloats** (proven here: a 2026-06-15 light pass took Home's STATE to 73KB — it was back at 348KB by 2026-07-17).

## Evidence (Operation Clear Hearth, 2026-07-17 — one node, one day)

Wave A + B/C slices 1–4 graduated **19 files across 17 vaults, ~5.2MB → ~968KB live**, every move verbatim + byte-exact loss-checked (per-vault commits in `Home.aDNA/how/campaigns/campaign_context_health/campaign_context_health.md` §Wave progress). The pattern held across Platform/Forge/Framework/Org vaults and two file kinds (STATE + CHANGELOG).

**Frontmatter alone was roughly half the bloat, in five distinct faces:** (1) repeated-key PRIOR-chains (`updated:` carrying its whole history); (2) a single mega-`tags:` line (13KB); (3) frontmatter-as-changelog (347 accumulated keys / 55KB — ~6 permanent keys per closed mission); (4) one key holding an inline PRIOR-chain as a ~29.7KB single-line comment; (5) a frozen mega-`status:` breadcrumb self-marked stale by its own NOTE. **Fossil standing sections** (a stale `## Current Phase` / What's-Working / Next-Steps outliving its era) recurred in nearly every vault and actively mislead cold starts.

## Proposed shape (the graduation doctrine, as proven)

1. **`STATE_history.md` convention** — a sibling append-only file; aged content moves **verbatim** under dated `## Graduated` sections; the live file keeps a `state_history:` frontmatter pointer. Archive-never-delete (SO-7) preserved byte-for-byte.
2. **Keep-set rule** — live = door-state/posture frontmatter keys + the newest ~3 entries / live campaign arc + Resume-Here/QUEUED + armed registers/pins + reference sections a live campaign cites. **A vault's own era boundary (rename/pivot) outranks a raw day-count** for the cut line.
3. **">100KB auto-graduate" tripwire** — a health-check rule flags any STATE.md >100KB; the remediation is graduation, never deletion. (Shipped here as `skill_node_health_check` S16; compaction-without-guard demonstrably re-bloats.)
4. **Frontmatter is a first-class graduation class** — chains, accumulated keys, and mega-tags graduate exactly like body sections (all five faces above).
5. **Two supremacy caveats** (learned, load-bearing): a vault's **own sanctioned compaction convention outranks the default recipe** (e.g. Network's `skill_state_compaction` keep-window was left untouched); and **check for an existing archive convention before creating `STATE_history.md`** (aDNA.aDNA's own `STATE_archive.md` §Shifted spine was appended to, not forked).
6. **Loss-gate discipline** — every graduation verifies pre/post byte-exactly (each nonblank original line ∈ new ∪ history) before write; reference tooling can ship with the skill.

## Disposition

Rosetta's call — candidate for the `.adna` template as a `skill_state_graduation` + a template `STATE_history.md` + the S16-style tripwire in the base health check. The CHANGELOG variant (`CHANGELOG_archive.md`, recent-arc keep-window) is the same doctrine and can ride the same filing.

## Disposition — Refit M5 vNext triage (2026-07-24) · **ADOPT → v8.9 governance** *(proposed; ratifies at G2/DP9)*

**Proposed: ADOPT into the v8.9 governance batch — the roadmap's anchor item (priority HIGH).** Strongest evidence
base of the whole triage: Operation Clear Hearth graduated **19 files / 17 vaults, ~5.2 MB → ~968 KB**, byte-exact
loss-checked, across Platform/Forge/Framework/Org vaults and two file kinds (STATE + CHANGELOG). The failure mode is
proven load-bearing: STATE.md is every session's first read, compaction-without-a-guard demonstrably re-bloats
(Home 73 KB → 348 KB in a month), and this vault's own `STATE.md` refuses tooling Reads at ~60 KB (the heavy-file
convention exists precisely because of this).

**Ships as (v8.9 governance — no normative schema change, so NOT a v2.6 item):**
1. `skill_state_graduation` (new skill; +1 to the base-skill count) — the graduation recipe (keep-set rule ·
   era-boundary-outranks-day-count · verbatim move · loss-gate discipline · the two supremacy caveats:
   own-convention-outranks-default + check-for-existing-archive-first).
2. A template `STATE_history.md` seed + the `state_history:` frontmatter pointer convention.
3. An S-series **>100 KB auto-graduate tripwire** in the base health check (remediation = graduate, never delete; SO-6).
4. Frontmatter-as-a-graduation-class (the five faces: repeated-key chains · mega-`tags:` · frontmatter-as-changelog ·
   inline PRIOR-chain comments · frozen mega-`status:`) — documented in the skill, not a schema change.

The CHANGELOG variant (`CHANGELOG_archive.md`, recent-arc keep-window) is the same doctrine and rides the same filing.
**Self-referential (SO-8):** this vault already runs the pattern — `STATE_archive.md` §Shifted spine + the heavy-file
Read convention — so the skill codifies proven-here practice, not aspiration. Count impact: **+1 skill** (32→33). Roadmap: [[vnext_roadmap]] §v8.9.
