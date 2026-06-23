---
type: artifact
artifact_class: release_prep
campaign_id: campaign_operation_adna
title: "F1 — Hearthstone catch-up release prep (one-authorization-ready)"
created: 2026-06-22
updated: 2026-06-22
status: active
last_edited_by: agent_rosetta
tags: [release_prep, f1, catch_up_release, skill_template_release, keystone, dp2, credibility_integrity, operation_adna, cross_vault]
---

# F1 — Hearthstone "catch-up release" prep package

> **What this is.** A turnkey, **one-authorization-ready** package for the F1 catch-up release: it
> materializes the v2.3 §5 *body* of the aDNA standard into the public `aDNA-Network/aDNA` image so the
> image stops contradicting its own v2.3 title (and the launched site). The delta is verified, the version
> decision is made, the `skill_template_release` parameters are filled, the smoke + rollback are written.
>
> **Who fires it.** Berthier / `aDNALabs.aDNA` runs [[skill_template_release]] (Standing Rule 1: never
> hand-edit `.adna/`). Rosetta coordinates; Hestia validates. Handoff memo:
> [[coord_2026_06_22_rosetta_to_berthier_f1_catchup_release]].
>
> **The gate.** Operator GO on the release (the push *is* the release — `skill_template_release` step (d)).
> Until then this is prepped-and-staged, not fired. **Commit-only** everywhere this package lives.
>
> **Posture vs the keystone.** F1 is *prepped now, before* the joined launch so it is ready to ride with
> it (see §10 timing decision). It is **not** a keystone *blocker* (the site already reads v2.3/16
> standalone); it is a credibility-integrity *completion* of the public image.

---

## §1 — Why (the credibility gap)

The public workspace image `aDNA-Network/aDNA` carries the standard at `.adna/what/docs/adna_standard.md`.
At the Hearthstone v8.0 release its **title/header was bumped to v2.3**, but its **§5 body was never
materialized** — it still enumerates the **14-type** base ontology. Meanwhile:

- **ADR-035** promoted `inventory` (WHAT, 4→5) and `identity` (WHO, 3→4) into the base ontology → **16
  types**, standard **v2.3**.
- The **dev standard** `aDNA.aDNA/what/docs/adna_standard.md` was completed to v2.3 at `d9b1dfe` (the §5
  rows were *authored* from ADR-035 — the finding was that the v2.3 §5 prose never existed to mirror).
- The **staged site** (`site/src/content/reference/specification.mdx` + prose) already reads **v2.3 / 16**
  and ships at the keystone.

So the public image is **internally self-contradictory** (v2.3 title, 14-type body) **and** contradicts
the site. When the joined launch goes live, the site's "real, inspectable" proof-links point at this
public image; a reader who opens its standard sees "14" against the site's "16". That is exactly the
**D1 credibility-integrity class** ([[campaign_operation_adna]] program quality bar #5 — *"Realness is
the asset; never spend it for a nicer sentence."*). F1 closes it.

---

## §2 — The exact delta (verified evidence)

Captured 2026-06-22 (UTC 2026-06-23T01:09Z), commit-base `8babbfd`:

```
$ diff aDNA.aDNA/what/docs/adna_standard.md .adna/what/docs/adna_standard.md
5c5
< updated: 2026-06-22
---
> updated: 2026-03-20
7c7
< last_edited_by: agent_rosetta
---
> last_edited_by: agent_init
13c13
< <!-- v2.3 | 2026-06-22 | inventory+identity promoted to base (ADR-035) -->
---
> <!-- v2.3 | 2026-06-19 | inventory+identity promoted to base (ADR-035) -->
366d365
< | `inventory/` | Installed/configured state — vaults, system, memberships. Base WHAT type since v2.3 (ADR-035); markdown + paired `.yaml` companion. |
388d386
<     what ||--o{ inventory : contains
398d395
<     who ||--o{ identity : contains
424d420
< | `identity/` | Stable identity records validated against external reality — node / network / deployment (hostname, operator, persistent UUID, peer-id). Base WHO type since v2.3 (ADR-035); markdown + paired `.yaml` companion. |
```

**4 content lines** (the substantive catch-up) + **3 housekeeping lines** (frontmatter `updated` /
`last_edited_by` + header-comment date; synced automatically by the release rsync):

| # | §  | Line (in dev source) | Content |
|---|----|----------------------|---------|
| 1 | 5.1 table | `| \`inventory/\` | Installed/configured state — vaults, system, memberships. Base WHAT type since v2.3 (ADR-035); markdown + paired \`.yaml\` companion. |` |
| 2 | 5.1 ERD   | `    what ||--o{ inventory : contains` |
| 3 | 5.2 ERD   | `    who ||--o{ identity : contains` |
| 4 | 5.2 table | `| \`identity/\` | Stable identity records validated against external reality — node / network / deployment (hostname, operator, persistent UUID, peer-id). Base WHO type since v2.3 (ADR-035); markdown + paired \`.yaml\` companion. |` |

**Staging source is complete:** the dev standard `aDNA.aDNA/what/docs/adna_standard.md` contains all four
lines (§5.1 line 366 + ERD line 388; §5.2 line 424 + ERD line 398). The release applies the dev → image
delta — nothing new to author.

> Re-verify at fire time with the same `diff` (the public `.adna/` mirrors the last release; if a peer
> release lands first, re-diff against the fresh clone in `skill_template_release` step (c)).

---

## §3 — Scope

**Recommended: SCOPE-C minimum** — the §5 body-completion delta above, *only*. It is the on-thesis
credibility close, low-risk (a 4-line additive docs delta, no structural/governance change), and matches
the **Hearthstone Decision-6 precedent** (selective delta-extract + per-file verify, not wholesale
replacement).

**Optional batch candidates** (inventoried, *not* bundled by default — operator/Berthier decide whether to
fold any in): the broader out-of-batch drift Hearthstone Decision 6 deferred to "a catch-up release" —
AGENTS top-12, doc streamlines, the v7.0 publish-skill family, ADR-034 public-face docs, the pre-existing
broken `adr_009` links + stale fork mechanics in `skill_project_fork`. **Recommendation: keep F1 to the §5
minimum** for a clean, fast credibility close; spin the broader drift as its own later release if it has not
otherwise drained — folding it in here widens the diff, the smoke surface, and the review.

---

## §4 — Version decision

Two-track semver (ADR-011); the release targets the **public image**, not the dev graph:

| Track | Current (public image) | This release | Rationale |
|-------|------------------------|--------------|-----------|
| **Standard** (`adna_standard.md` title) | v2.3 | **v2.3 (unchanged)** | The title already promises v2.3; this completes the body it promised. No bump. |
| **Governance** (`CLAUDE.md` `version:`) | 8.0 | **8.1** | Additive/correction (a docs-body completion) → minor, per ADR-011 (no patch level). |
| **Image tag** | v8.0 | **v8.1** | Continues the `vX.Y` template tag line. |

Final call is the operator's/Berthier's at the gate (e.g. if broader scope is folded in, still a minor
unless something breaking is included).

---

## §5 — Execution (`skill_template_release` parameters)

Skill: `aDNA.aDNA/how/skills/skill_template_release.md` (process; steps (a)–(f)). The §5 delta lands via
**step (c)** — the `rsync --delete --exclude .git` of the assembled standard tree into the fresh clone's
`.adna/`, which carries `what/docs/adna_standard.md` forward.

```yaml
# skill_template_release parameters
version: "v8.1"
release_notes: "<see §6>"
root_surfaces_changed: false      # docs-body only — no router/README/.gitignore/LICENSE change
dry_run: true                     # FIRST PASS — assemble + diff, STOP before commit/tag/push
```

**Fire procedure:**
1. **Preconditions (step a):** release gate open (operator GO) · dev change ratified (ADR-035, accepted) ·
   working tree clean.
2. **`dry_run: true` first** — step (b) assemble + step (c) into a throwaway clone, then **diff and confirm
   ONLY the §2 lines move** (4 content + 3 housekeeping). If anything else appears, stop and reconcile
   (scope creep / peer drift).
3. **Flip `dry_run: false`** — step (d) bump governance 8.0→8.1, commit (path-scoped, never `-A`), annotated
   tag `v8.1`, **operator confirms the push** (the push *is* the release).
4. **Step (e):** local `~/aDNA/.adna` rsync + commit (origin frozen) + `cd site && npm run sync:install` if
   the install-truth sha moved.
5. **Step (f):** the §8 smoke on a throwaway fresh clone.

---

## §6 — `release_notes` draft (operator-ratifiable)

> **aDNA standard image v8.1 — v2.3 §5 body-completion (Hearthstone catch-up).**
> Completes the v2.3 base ontology in the published standard: materializes the §5 `inventory/` (WHAT) and
> `identity/` (WHO) entity-type rows and their ER-diagram edges, promoted to base by ADR-035. The v8.0
> image carried the v2.3 *title* with a 14-type *body*; v8.1 closes that gap so the published standard
> matches the dev standard and the aDNA.network site (16 base types, v2.3). Docs-only; no governance
> structure, schema, or root-surface change. Standard track stays v2.3 (body-completion); governance track
> 8.0→8.1.

---

## §7 — Files touched (expected)

| File (in the release clone) | Change |
|------------------------------|--------|
| `.adna/what/docs/adna_standard.md` | the §2 delta (4 content + 3 housekeeping lines) |
| `.adna/CLAUDE.md` (frontmatter `version:`) | 8.0 → 8.1 |
| `.adna/CHANGELOG.md` | promote `[Unreleased]` → `[v8.1]` with date + the §6 note |
| **NOT** root surfaces | `root_surfaces_changed: false` — router/README/.gitignore/LICENSE untouched |

(Mirror changes land in `~/aDNA/.adna/` at step (e). The dev-graph `aDNA.aDNA` standard is already at v2.3 —
**not** edited by this release.)

---

## §8 — Smoke checklist (post-push, throwaway fresh clone)

The skill's standard **7-row fresh-clone smoke** (step f) — router present · `role: template` intact · key
skills resolve · dummy `*.aDNA/` ignored AND `.adna/` still tracked · embed-note present (not the
adna-legacy banner) · old-URL 301 redirect · tag + 1-command flow — **plus one F1-specific row**:

8. **§5 body materialized.** In the freshly-cloned `.adna/what/docs/adna_standard.md`:
   ```bash
   grep -c "Base WHAT type since v2.3" .adna/what/docs/adna_standard.md   # → 1 (inventory row)
   grep -c "Base WHO type since v2.3"  .adna/what/docs/adna_standard.md   # → 1 (identity row)
   grep -c "inventory : contains"      .adna/what/docs/adna_standard.md   # → 1 (WHAT ERD edge)
   grep -c "identity : contains"       .adna/what/docs/adna_standard.md   # → 1 (WHO ERD edge)
   ```
   All four → `1`. A `0` on any row REVERTS the release (per the skill: never auto-remediate a pushed tag —
   a fix is a new gate).

---

## §9 — Rollback

- **Tag/commit:** nothing is force-pushed; the pre-release HEAD of `aDNA-Network/aDNA` is recoverable. A
  bad release is corrected by a *new* gated release (v8.2), not by rewriting v8.1.
- **Local `.adna`:** step (e) is a local commit on a frozen origin — revert locally if step (f) red-rows.
- **Blast radius is minimal:** docs-body-only, `root_surfaces_changed: false`; no consumer vault, fork
  flow, or gitignore behavior changes.

---

## §10 — Timing decision (surfaced to the operator — DP3)

The current runbook ([[dp2_keystone_launch_runbook]] §12) sequences F1 as **post-keystone, "not a launch
blocker."** Now that it is prepped, a cleaner option opens:

- **Recommended — launch-coupled:** fire F1 (operator GO) **just before / with** the joined launch, so the
  published standard body reads 16/v2.3 the moment the site that points at it goes live. This makes the
  keystone's credibility-integrity claim *complete on day one* and aligns with program quality bar #5.
- **Alternative — post-keystone (current default):** ship the site at DP2, fire F1 shortly after. Acceptable
  (the site reads v2.3 standalone; the gap is in the *image*, surfaced only by following a proof-link into
  the standard doc), but it leaves a brief window where the public image contradicts the live site.

**This package makes either choice a single authorization.** The default is left unchanged pending the
operator's call (program does not re-sequence a child/launch unilaterally — Standing Order 3/8). Recorded as
a runbook §12 decision note + the handoff memo.

---

## Sources
- [[skill_template_release]] — the release procedure (steps a–f; `dry_run`; two-track semver)
- [[keystone_credibility_traceability_20260622]] §Tier-2 — where the v2.3 §5 prose was authored + the carry
- [[coordination_ledger]] — ★ standard-currency seam (the F1 carry) + ★ skill_template_release/aDNALabs seam
- [[dp2_keystone_launch_runbook]] §12 — F1 schedule + the launch-coupling decision note
- [[coord_2026_06_22_rosetta_to_berthier_f1_catchup_release]] — the handoff to Berthier/aDNALabs
- `what/decisions/adr_035_inventory_identity_base_entity_types.md` — the promotion (14→16, v2.3)
- ADR-011 (semver discipline) · ADR-034 (public-face release architecture)
