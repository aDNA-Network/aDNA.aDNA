---
type: ratification_record
title: "Ratification Ceremony — Operation Cleanroom v8.7 P2: ship-set freeze + DP2/DP3"
status: accepted
gate: "P1 Author → P2 Ratify → P3 Fire authorized (dry-run-then-pause boundary)"
ratifier: "Stanley, operator"
ratified_date: 2026-07-13
ratifying_session: session_stanley_20260713T201840Z_v8_7_release_p2_ratify_p3_dryrun
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign: campaign_v8_7_release
tags: [ratification_record, decision, ceremony, v8_7_release, cleanroom, p2_gate]
---

# Ratification Ceremony — Operation Cleanroom v8.7 P2

> The §7.7 operator-ratification instrument for the v8.7 release ship-set. This ceremony ratifies the release-scope
> decisions in one operator motion, freezing the ship-set and authorizing P3 fire under the dry-run-then-pause
> boundary. Governance **8.6 → 8.7**; the aDNA Universal Standard **stays v2.5** (no normative surface touched).
> Agents authored; the operator ratified.

## 1. Ceremony header

| Field | Value |
|-------|-------|
| **Gate** | v8.7 P2 Ratify — ship-set freeze → P3 fire authorized |
| **Ratifier** | Stanley, operator — Rosetta (persona) appears only as author/steward, never ratifier |
| **Gate / reference** | AskUserQuestion (this session): Q1 "Which v8.7 ship-set?" = **All 4 riders**; Q2 "DP2 doctrine placement" = **`.adna/CLAUDE.md` subsection**; Q3 "DP3 residual staleness" = **Fold into v8.7**. Approved plan `please-read-teh-claude-md-playful-valiant.md` (P2/P3 execution steps 1–4; step 5 = separate fire-GO). Ratifying session `session_stanley_20260713T201840Z_v8_7_release_p2_ratify_p3_dryrun`. |
| **Ratification date** | 2026-07-13 |
| **Scope of authority** | The v8.7 template release ship-set (the 4 riders + DP3 fold) and the P3 fire **authorization** — bounded by dry-run-then-pause: no public push / `v8.7` tag / local sync without a **second** operator go on the assembled diff. Standard stays v2.5. |

## 2. Decision roster (dependency order)

Every decision this ceremony ratifies. `proposed → accepted` advances only here, at the gate. Source: the
staging ledger `artifacts/release_staging_ledger.md`.

| # | Decision | Prior status | Ratified status | Signed by | Notes |
|---|----------|--------------|-----------------|-----------|-------|
| 1 | **Ship-set = all 4 riders**: item 4 (`skill_git_remote_setup` fleet-name genericize, dev→image delta) · item 3 (image `how/templates/AGENTS.md` index 23→30, staged) · item 2 (optional STATE `phase:`/`campaigns:` frontmatter convention, staged) · item 5 (generic DE-LINKED visual-inspection doctrine, staged). | proposed | **accepted** | Stanley | All authored + self-reviewed at P1; `adna_validate --governance` Zero drift; no count bump. |
| 2 | **DP2 — item-5 doctrine placement = a `.adna/CLAUDE.md` subsection** (`### Visual inspection (headless-first)` under `## Working with Content`), NOT a standalone `.adna/what/doctrine/` file. | proposed | **accepted** | Stanley | `.adna/what/doctrine/` doesn't exist (a file adds a new dir); the idea offers "a CLAUDE.md pointer" as the governance-lean option-1 sub-choice; auto-loads on every fork. |
| 3 | **DP3 — fold the residual `M07`/`v7.0` milestone staleness in `skill_git_remote_setup` into v8.7** (the `v7_0` tag + three `M07` audit refs + one `v7.0` publish ref). | proposed | **accepted** | Stanley | 5 trivial genericizations in the same file already in the ship-set; ships a *fully* fleet-clean skill. **Applied at P1-close (this session)** — 0 residuals remain; dev↔image diff = clean item-4 + DP3 delta. |
| 4 | **Item 1 (`node_manifest`) + Batch B stay OUT** of v8.7. | proposed | **accepted (deferred)** | Stanley | node_manifest = unbuilt M-effort feature, ADR-015 Tier-3 gated + cross-persona (→ a Hestia-led mission); Batch B = L-effort, needs its own adversarial-review sub-campaign. |
| 5 | **Execution boundary — dry-run-then-pause**: assemble the ratified delta locally + dry-run + full leak scan + `adna_validate`, then STOP; the public push / `v8.7` tag / local sync / 7-row smoke / campaign close require a **second** operator go on the assembled diff. | proposed | **accepted** | Stanley | Directly answers the v8.5 21-link near-miss; matches the v8.6 boundary. |

## 3. No-contradiction invariants

- **Standard stays v2.5** — no normative surface is touched by any ratified item; v8.7 is a governance
  `8.6 → 8.7` currency-and-inheritable-defaults release. (Spans decisions 1–3.)
- **No count bump** — none of the 4 riders adds a skill or template (item 3 aligns the *index* to the
  already-existing 30 base templates); the validated image count surfaces (CLAUDE.md HTML comment + MANIFEST)
  are unchanged. (Bears on P3 version-surface work.)
- **3 of the 4 riders are image-curated** (`.adna/`-side, no clean dev source): item 3 (nested AGENTS.md),
  item 2 (the `.adna/STATE.md` seed), item 5 (the `.adna/CLAUDE.md` subsection) — folded at P3 assembly from
  their staged artifacts, never authored as dev edits. Only item 4 is a dev→image file delta.

## 4. Constitutional carry-forward (P3)

- **P3 fire assembles ONLY the ratified delta by diff** (dev-canonical vs released `.adna/`) — never a wholesale
  copy; Rosetta's own `CLAUDE.md`/`STATE.md`/guides must not ship. The fresh clone's `git status` must show
  **exactly** the ratified paths under `.adna/` (any extra = NO-GO). *(Item 4 lesson, hit live: the dev copy
  lagged the image — it was backported to the v8.6 image state first so the diff is a clean delta.)*
- **The full outbound-link leak scan is mandatory** before any artifact enters the image: grep the complete
  `](…)` markdown + `[[…]]` wikilink set of every folded rider; de-link/genericize any private dev-graph
  reference. *(Item 5's fold-body was authored DE-LINKED and verified — 0 wikilinks / 0 fleet / 0 path leaks.)*
- **The public push / `v8.7` tag / local sync / 7-row smoke / campaign close require a second operator go.**
  A red smoke row reverts the decision to the operator — never auto-remediate a pushed tag.

## 5. Persona ratification status

- **Rosetta** — survives. The release touches no persona surface; the acceptance test
  `grep -c Berthier .adna/CLAUDE.md` == 0 in a fresh fork must stay green through P3 (item 5's subsection adds
  no persona reference).

## Self-reference (Standing Order #8)

This record is itself the discipline it enforces: the standard teaches that decisions are operator-ratified
governance events (§7.7), and the ceremony that ratifies a batch of them is recorded in exactly this
operator-attested instrument — authored with the vault's own `template_ratification_record.md`. An agent
authored the draft; the operator's ratification at the gate (the P2 AskUserQuestion) is what makes it binding.
