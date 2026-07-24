---
type: ratification_record
campaign_id: campaign_v8_9_release
title: "P2 Ratification packet — the v8.9 governance batch (Operation Palimpsest)"
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
status: awaiting_operator_ratification
gate: "P2 (§7.7 decision ratification — operator signs)"
prepared_by: agent_rosetta
tags: [ratification_record, v8_9, palimpsest, p2, operator_gate, governance]
---

# P2 Ratification packet — v8.9 governance batch (Operation Palimpsest)

> **For the operator.** P1 Author is complete: both P1 missions (M1 anchor + M2 convention/machinery) authored the
> full v8.9 ship-set **dev-side in this vault**, verifications green, **nothing shipped to `.adna/`**. This packet is
> the **P2 ratification gate** (§7.7): agents authored; you ratify. On your signature the batch is `accepted` and P3
> (the `skill_template_release` fire — *the push IS the release*) opens on a **separate** operator GO.

## What ratification approves

The **v8.9 governance batch** — **governance `8.8 → 8.9`, standard `v2.5` held (no normative change)**, per the
v8.6/8.7/8.8 lineage. The batch's *contents* were ratified at Refit G2/DP9 (2026-07-24,
`../campaign_refit/artifacts/ratification_record_refit_g2.md`); this gate ratifies the **authored implementation**.

## Ship-set — 7 items · where each landed · verification

| # | Item | Landed (dev-side, this vault) | Ships to image at P3 | Verified |
|---|------|-------------------------------|----------------------|----------|
| 1 | STATE.md graduation *(anchor, M1)* | `skill_state_graduation` (new skill) + `template_STATE_history` (new template) + frontmatter-as-graduation doctrine | both new files + the `>100 KB` tripwire rider → `.adna` (image skill **32→33**) | gov zero-drift (M1) |
| 2 | STATE-convention family | new `what/doctrine/doctrine_state_conventions.md`; trio self-adopted on this STATE.md; doctrine index updated | doctrine file + `.adna/STATE.md` `mission:`-key rider | gov zero-drift |
| 3 | Path-convention doctrine | `CLAUDE.md` → Working with Content → **Path references** | doctrine line → `.adna/CLAUDE.md` | — |
| 4 | Fork-kit AGENTS enforcement | `skill_project_fork.md` — AGENTS in Step 4 stamping + new **Step 4.6** kit gate + genesis carve-out + census hook | folds into `.adna/how/skills/skill_project_fork.md` | — |
| 5 | Codename-collision note | `template_campaign.md` (`# Campaign:` heading) | folds into `.adna/how/templates/template_campaign.md` | — |
| 6 | Release-process leak hardening | `skill_template_release.md` — new **Step (b.1)** DE-LINK hard gate | **project-specific — stays dev-side** (it hardens P3's own tool) | — |
| 7 | `compliance_checker.py` hardening | `what/lattices/tools/compliance_checker.py` + `.gitignore` | folds into `.adna/what/lattices/tools/` | **3-point test PASS** |

**Verifications (M2).** `adna_validate --governance` = **Zero drift** — no skill/template count change (the +1 skill / +1
template were M1's; items 2–7 add no counted entity). `compliance_checker.py` **3-point acceptance test PASS**:
(1) default run leaves the tree clean (output → git-ignored `.compliance_out/`); (2) a pre-3.13 interpreter prints
`requires python3.13 (yaml dep)` and exits non-zero — no opaque traceback; (3) a `concept` file reports
`unsupported type — not scored` and is excluded from the aggregate (no false 0.0%). **7 source ideas** flipped
`proposed → resolved` with dated `## Adopted — v8.9 M2` (and M1) stamps.

## Staged for P3 (image-only edits — fold at the fire)
- `artifacts/image_side_state_graduation_tripwire.md` — the `>100 KB` STATE/CHANGELOG tripwire into
  `.adna/how/skills/skill_node_health_check.md` (item 1c; staged at M1).
- `artifacts/image_side_state_mission_key.md` — the `mission:` key into the `.adna/STATE.md` seed (item 2a; staged at M2).

## Not carried (charted, not in v8.9)
The v2.6 candidates — the `task` entity + the `surface_composition_graph` Platform subtype (both need a standard
version move) — plus node-manifest fork-emission (Home-ADR-gated) and the Storyweave in-person items. **No normative
surface ships.**

## The ratification decision (§7.7)

| Field | Value |
|-------|-------|
| **Decision** | Ratify the authored v8.9 governance batch (items 1–7, dev-side) as ready to ship to `aDNA-Network/aDNA` at P3 |
| **Ratified-by** | _(operator signature — pending)_ |
| **Date** | _(pending)_ |
| **Status** | **proposed** → awaiting operator ratification |

**On ratification:** P1 → closed; the batch is `accepted`; **P3 Fire** opens on a *separate* operator GO — the
`skill_template_release` run (5 version surfaces, the new DE-LINK **Step (b.1)**, dry-run-then-pause, tags-only
`v8.9`, fresh-clone smoke) folds the M1 + M2 deltas + both P3 riders into a fresh `.adna` clone; image skill count
**32→33**; governance **8.8→8.9**.

**If changes are wanted:** name them per item — the authoring is dev-side and revisable before any push. **Nothing has
shipped.**

---

*Clock note: the system date reads `2026-07-23`; the campaign record (P0 / M1 / M2 / STATE) is dated `2026-07-24` for
arc coherence (M2 continues a 2026-07-24 mission). Flagged for operator reconcile — it does not affect batch content.*
