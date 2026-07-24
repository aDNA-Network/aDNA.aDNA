---
type: aar
created: 2026-07-24
campaign_id: campaign_v8_9_release
phase: 3
mission_id: p3_fire
status: complete
last_edited_by: agent_rosetta
tags: [aar, v8_9_release, palimpsest, p3, template_release]
---

# AAR — v8.9 Palimpsest P3 Fire

**Outcome**: **v8.9 SHIPPED + LIVE** on `aDNA-Network/aDNA` — path-scoped commit `c8e5427` + annotated tag `v8.9`
(main `a32724b..c8e5427`, tags-only; remote tag `0fdd4cd`). Governance **8.8 → 8.9**; standard stays **v2.5**;
**counts 30→31 templates / 32→33 skills** (the M1 anchor's +1/+1 realized at the image). Local `~/aDNA/.adna` synced
(`0364d85`); **6/6** fresh-clone smoke green; `adna_validate --governance` Zero drift; gitleaks clean; no governance
rule removed.

## 5-line AAR
- **Worked**: The two-agent fold-map recon paid for itself — it caught that `skill_project_fork` in the image is
  *richer* than dev (ADR-009/042/047), so the fold applied a **3-point delta** instead of a regressive wholesale copy;
  and that `.adna/what/doctrine/` doesn't exist, so the STATE-conventions doctrine folded as a **condensed CLAUDE.md
  subsection** (the v8.7 visual-inspection precedent) rather than a stray file.
- **Didn't**: The first `adna_validate --governance` failed — the *historical* v8.8 header comment still carried
  "(30 templates · 32 skills)", and the validator's `(\d+)\s*templates` regex can't tell historical from current.
  Fixed by dropping the stale count parenthetical (its detail lives in CHANGELOG [v8.8]).
- **Finding**: A **count-change** release (v8.9) touches more surfaces than a no-count one (v8.7/v8.8) — the count lives
  in `.adna/MANIFEST.md` (L38 + `Templates (N)` + inline list) and `how/templates/AGENTS.md` (total + `Operational (N)`
  + row), NOT in CLAUDE.md's curated skills table (no numeric total) nor a `.adna/what/glossary/` (doesn't exist). The
  validator regex is the backstop that catches a missed surface.
- **Change**: Ran the whole fire in a throwaway fresh clone with the full gate stack (DE-LINK grep · gitleaks ·
  adna_validate · section-header integrity · fresh-clone smoke) **before** the dry-run-then-pause — so the irreversible
  push was a mechanical last step after the operator's "cut & push v8.9" GO.
- **Follow-up**: (1) Dev-graph record-keeping commit is **local — push operator-elected** (SO-9). (2) Site
  install-truth fixture still records the v8.8 template sha → regenerate at the next site touch/deploy. (3) Pre-existing
  dev-name leaks in shipped `.adna/how/docs/upgrade_v6_to_v7.md` + the exemplar bundle are **out of scope for v8.9** (the
  leak-sweep hardening shipped *this* release governs future folds, not a retroactive clean) — a doc-currency pass could
  genericize them.

## Telemetry (rough)
- Executor tier: **opus** (release/integration — judgment-heavy fold + irreversible push). Effort: max.
- Shape: single session; **two operator gates honored** (P2 ratify → P3 dry-run-then-pause "cut & push v8.9"). The
  dry-run gate stack caught 1 real validator drift before the push — the pause is load-bearing, not ceremonial.
