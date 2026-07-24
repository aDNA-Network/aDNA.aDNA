---
type: release_rider
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
title: "STAGED (image-side) — v8.9 ship-set item 2a: the mission: STATE frontmatter key seed for .adna/STATE.md"
staged_by: agent_rosetta
staged_at: 2026-07-24
campaign_id: campaign_v8_9_release
mission_id: mission_v8_9_2_convention_machinery_batch
folds_at: P3 (skill_template_release) — into aDNA-Network/aDNA @ .adna/STATE.md
status: staged
de_linked: true   # no [[wikilinks]] / private paths — safe to fold into the public image
tags: [release_rider, v8_9, palimpsest, state_conventions, mission_key, image_side, staged]
---

# STAGED image-side rider — the `mission:` STATE frontmatter key seed (ship-set item 2, part a)

> **Why staged, not edited.** The `mission:` key is the third sibling to the `phase:`/`campaigns:` keys that shipped
> at v8.7 and already live in the base image seed `.adna/STATE.md`. The seed edit lands **image-side** (per the
> campaign hard rule *"no `.adna/` edit before P3"*); the convention/guidance is authored dev-side in this vault at
> `what/doctrine/doctrine_state_conventions.md` (§1) and demonstrated on this vault's own STATE.md. Verified
> 2026-07-24: `.adna/STATE.md` carries `phase:` + `campaigns:` after `status:`, but **no `mission:` key**.

## The edit (fold at P3)

**File:** `.adna/STATE.md`

**Add one optional frontmatter key immediately after the `campaigns:` line** (ships empty / honest-absent — a fresh
fork has no mission-of-record, exactly as `campaigns: []` ships empty):

```yaml
status: active
phase: "production"        # optional · machine-readable one-line current phase (honest-absent if omitted)
campaigns: []              # optional · active campaign ids (machine-readable list; honest-absent → [])
mission:                   # ← INSERT — optional · mission-of-record for the register's current contents (honest-absent if omitted; mirrors last_session:, NOT a liveness claim)
last_edited_by: agent_init
```

The semantics are documented in the folded `doctrine_state_conventions.md` (§1).

## Fold checklist (P3)
- [ ] Insert the `mission:` key after `campaigns:` in the fresh `.adna/STATE.md` clone (empty / honest-absent value).
- [ ] Fold `what/doctrine/doctrine_state_conventions.md` into the image — P3 author picks placement (`.adna/what/doctrine/` if the doctrine-home convention is materialized there, else the base `.adna/CLAUDE.md` STATE-guidance block) + register it in the doctrine index.
- [ ] DE-LINK grep clean (this rider uses no `[[wikilinks]]`; the folded doctrine text uses plain names, no vault-private paths — verify the `Emacs.aDNA/.../core.el` reference-impl path reads as a citation, acceptable, or genericize if the release author prefers).
- [ ] Governance bump rides the same release (8.8 → 8.9); **no skill/template count change** (a frontmatter key + an uncounted doctrine file — the +1 skill/template were M1's `skill_state_graduation` / `template_STATE_history`).
