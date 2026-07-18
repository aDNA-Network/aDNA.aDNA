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
