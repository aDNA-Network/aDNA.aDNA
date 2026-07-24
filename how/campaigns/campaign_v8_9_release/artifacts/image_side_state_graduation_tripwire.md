---
type: release_rider
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
title: "STAGED (image-side) — v8.9 ship-set item 1c: the >100 KB STATE size tripwire for .adna/how/skills/skill_node_health_check.md"
staged_by: agent_rosetta
staged_at: 2026-07-24
campaign_id: campaign_v8_9_release
mission_id: mission_v8_9_1_anchor_state_graduation
folds_at: P3 (skill_template_release) — into aDNA-Network/aDNA @ .adna/how/skills/skill_node_health_check.md
status: staged
de_linked: true   # no [[wikilinks]] / private paths — safe to fold into the public image
tags: [release_rider, v8_9, palimpsest, state_graduation, tripwire, health_check, image_side, staged]
---

# STAGED image-side rider — the STATE size tripwire (ship-set item 1, part c)

> **Why staged, not edited.** The tripwire lands in the **base health-check skill**
> (`skill_node_health_check.md`), which lives in the `.adna/` template image and Home.aDNA — **not** in this dev
> vault's `how/skills/` (this Rosetta vault deliberately does not carry the node-operations skills). Per the
> campaign hard rule *"no `.adna/` edit before P3,"* the exact edit is authored here, DE-LINKed, and folded into a
> fresh image clone at **P3** by `skill_template_release`. Verified 2026-07-24: `.adna`'s `skill_node_health_check`
> currently has **Steps 1–12, no size tripwire**; Home already runs a node-local instance (its S16). This makes the
> doctrine portable to every forked node, not just this one.

## The edit (fold at P3)

**File:** `.adna/how/skills/skill_node_health_check.md`

**1. Insert a new step before the existing "Step 12: Optional STATE.md Update", and renumber that step to 13.**
New step text:

```markdown
### Step 12: STATE.md / CHANGELOG Size Tripwire

Check the byte size of `STATE.md` (and `CHANGELOG.md`, if present). If either exceeds **100 KB**, log a
GRADUATION-DUE warning (exit 0 — advisory, not a hard failure):

    ⚠ STATE.md is <size> KB (>100 KB) — graduation due. Remediation: run skill_state_graduation
      (append aged sections VERBATIM to STATE_history.md; archive, never delete — SO-6). Do NOT delete or
      summarize; compaction-without-graduation demonstrably re-bloats.

The tripwire only flags — it never edits STATE.md itself. The remediation is the STATE-graduation skill, whose
loss-gate guarantees the move is verbatim and lossless.
```

**2. Renumber the current "### Step 12: Optional STATE.md Update" → "### Step 13: Optional STATE.md Update"** (no
body change).

**3. Add one line to the success-output block (after the "Last-update freshness" line):**

```
✓ STATE.md size: <size> KB (<100 KB)          # or:  ⚠ STATE.md size: <size> KB — graduation due
```

## Fold checklist (P3)
- [ ] Insert Step 12 (tripwire) + renumber old Step 12 → Step 13 in the fresh `.adna` clone.
- [ ] Add the `✓ STATE.md size:` output line.
- [ ] DE-LINK grep clean (this rider intentionally uses no `[[wikilinks]]`; the folded skill text uses plain
      skill names, not vault-private paths).
- [ ] Governance bump rides the same release (8.8 → 8.9); no skill *count* change (this is an edit to an existing
      skill, not a new skill — the +1 skill is `skill_state_graduation`, folded separately).
