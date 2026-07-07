---
type: ratification_record
title: "Ratification Ceremony — Operation Ouroboros v8.6 P2 (DP5): ship-set freeze + §D decisions"
status: accepted
gate: "P1 Author → P2 Ratify (DP5) → P3 Fire authorized (dry-run-then-pause boundary)"
ratifier: "Stanley, Founding Architect"
ratified_date: 2026-07-06
ratifying_session: session_stanley_20260707T024529Z_v8_6_p2_ratify_p3_assemble
ratifying_commit: "(this session's P2-ratify commit — see git log)"
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
campaign: campaign_v8_6_release
tags: [ratification_record, decision, ceremony, v8_6_release, ouroboros, p2_gate]
---

# Ratification Ceremony — Operation Ouroboros v8.6 P2 (DP5)

> The §7.7 operator-ratification instrument for the v8.6 release ship-set. This ceremony ratifies the **§D
> decision set** (release-scope decisions, not ADRs) in one operator motion, freezing the ship-set and
> authorizing P3 fire under the dry-run-then-pause boundary. Governance **8.5 → 8.6**; the aDNA Universal
> Standard **stays v2.5** (no normative surface touched). Agents authored; the operator ratified.

## 1. Ceremony header

| Field | Value |
|-------|-------|
| **Gate** | v8.6 P2 Ratify (DP5) — ship-set freeze → P3 fire authorized |
| **Ratifier** (named operator/authority) | Stanley, Founding Architect — Rosetta (persona) appears only as author/steward, never ratifier |
| **Gate / reference** | AskUserQuestion (this session): Q1 "Which v8.6 ship-set do you ratify?" = **Recommended cut**; Q2 "How far should I take P3?" = **Dry-run then pause**. Approved plan file `please-read-the-claude-md-playful-mist.md`. Ratifying session `session_stanley_20260707T024529Z_v8_6_p2_ratify_p3_assemble`. |
| **Ratification date** | 2026-07-06 |
| **Scope of authority** | The v8.6 template release ship-set (Batch A + §B deltas + D-1 checklist fold + §C Batch G) and the P3 fire **authorization** — bounded by the dry-run-then-pause rule: no public push / `v8.6` tag / local sync without a **second** operator go on the assembled diff. Standard stays v2.5. |

## 2. Decision roster (§D — dependency order)

Every decision this ceremony ratifies. `proposed → accepted` advances only here, at the gate. (The staging
ledger `artifacts/release_staging_ledger.md` §D is the source; the triage `artifacts/triage_proposed_items.md`
is the DP2 backing.)

| # | Decision | Prior status | Ratified status | Signed by | Notes |
|---|----------|--------------|-----------------|-----------|-------|
| 1 | **Ship-set = Recommended cut**: Batch A (5 lifecycle skills + 2 templates + §6 Reopen clause + webforge fork scaffold) + D-1 checklist fold + §C Batch G. | proposed | **accepted** | Stanley | The spine (Batch A) was already `accepted` at DP1; DP5 freezes the full cut. |
| 2 | **D-1** — checklist folds to `.adna/what/docs/governance_doctrine_adoption_checklist.md` (drop `v8_4` from the filename, keep v8.4 content); `skill_project_fork` gains a one-line ref at assembly. | proposed | **accepted** | Stanley | ADR-047 D2 items-not-number basis. |
| 3 | **D-2** — ship Batch G (name-leak sweep) this cycle. | proposed | **accepted** | Stanley | F-CHM-217 release-cut-leak close; `.adna/`-side, no normative surface. |
| 4 | **D-3** — `skill_iii_setup.md` census table → replace with a generic note. | proposed | **accepted** | Stanley | Row-by-row genericizing (real mission IDs/SHAs) loses the table's value. |
| 5 | **D-4** — the 2 Hestia `proposed` addenda → **defer both to v8.7**. | proposed | **accepted (deferred)** | Stanley | node_manifest interview emission = unbuilt M-effort feature (gated on ADR-015 Tier-3); STATE `phase:`/`campaigns:` keys = optional rider, deferred per the Recommended cut. Ideas accepted; builds not in v8.6. |
| 6 | **D-5** — mirror `template_ratification_record.md` into the dev vault. | proposed | **already-satisfied (no-op)** | Stanley | **Finding at ratification**: the mirror already happened at Operation Meridian M1 (`d6e9179`, "41→42; idea closed"). The dev vault carries the *richer* 159-line locally-adapted version (dual-audience explainer + per-ADR/ceremony split + usage table + self-referential example) — superior to the 78-line `.adna` stub. The ledger's "self-drift / +1→45" premise was **stale**. Template count stays **44**; no image change (D-5 was always dev-side only). |
| 7 | **Execution boundary** — dry-run-then-pause: assemble locally + dry-run + full leak scan, then STOP; the public push / `v8.6` tag / sync / smoke / close require a **second** operator go. | proposed | **accepted** | Stanley | Directly answers the v8.5 21-link near-miss. |

## 3. No-contradiction invariants discovered

- **Standard stays v2.5** — no normative surface is touched by any ratified item; v8.6 is a governance
  `8.5 → 8.6` skills-and-currency release. (Spans decisions 1–4.)
- **The image carries base-only counts**, distinct from the dev vault's 55 skills / 44 templates — the
  image's own count surfaces are **re-trued at assembly**, never copied from the dev vault. (Bears on P3.)
- **D-5's ledger premise was falsified at the gate** (already mirrored at Meridian M1). A ratification-time
  read of the live tree corrected a stale planning assumption before it could drive a wrong edit — the
  "verify each finding against the live tree" rule in practice.

## 4. Constitutional carry-forward

- **P3 fire assembles ONLY the ratified delta by diff** (dev-canonical vs released `.adna/`) — never a
  wholesale copy; Rosetta's own `CLAUDE.md`/`STATE.md`/guides must not ship.
- **The full outbound-link leak scan is mandatory** before any artifact enters the image: grep the complete
  `](…)` markdown + `[[…]]` wikilink set of every folded skill/template/checklist/Batch-G target; de-link or
  genericize any private dev-graph reference (campaign/mission/coord/idea/backlog paths, absolute
  `aDNA.aDNA/…` paths, real mission IDs/SHAs). The v8.5 near-miss (21 links) is the precedent.
- **The public push / `v8.6` tag / local sync / 7-row smoke / campaign close require a second operator go.**
  A red smoke row reverts the decision to the operator — never auto-remediate a pushed tag.

## 5. Persona ratification status

- **Rosetta** — survives. The release touches no persona surface; the fold uses the `{{persona}}` placeholder,
  and the acceptance test `grep -c Berthier .adna/CLAUDE.md` == 0 in a fresh fork must stay green through P3.

## Self-reference (Standing Order #8)

This record is itself the discipline it enforces: the standard teaches that decisions are operator-ratified
governance events (§7.7), and the ceremony that ratifies a batch of them is recorded in exactly this
operator-attested instrument — authored here with the vault's own `template_ratification_record.md` (the very
instrument decision #6 concerns). An agent authored the draft; the operator's signature at the gate is what
makes it binding.
