---
type: backlog_idea
status: accepted
priority: medium
created: 2026-04-04
last_edited_by: agent_rosetta
tags: [backlog, documentation, quality]
updated: 2026-07-02
champollion_mission: M4.3   # re-routed at M4.3 → M6.1 RC (fable ruling below)
fold_batch: champollion_m6_1_rc
---

# Idea: Inner README III Review

## Problem
.adna/README.md (870 lines) was never III-reviewed. The root README got 20 III cycles; the inner README likely has the same issues (jargon, dark mode, information architecture, confidence traps).

## Proposed Solution
10 III cycles on .adna/README.md using same 5-reader panel methodology as root README.

## Origin
campaign_adna_polish pre-merge audit — inner README scored well on links/counts but content quality was not evaluated.


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.3` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## M4.3 disposition — RE-ROUTED (image-side + stale premise), 2026-07-02

**Status: unchanged (`accepted`) — NOT executed.** Two blockers found on the M4.3 walk:

1. **Target is image-side.** "`.adna/README.md`" is the base-template README inside the workspace image (`aDNA-Network/aDNA`). M4.3's hard guardrail forbids touching `.adna/` — image-side doc changes ship only through the operator-gated `skill_template_release` (the M6.1 RC), never a dev-vault edit. (The two READMEs are distinct files: `aDNA.aDNA/README.md` = 380 lines, the docs-face README, which M4.3 *did* restructure to the first-contact pattern; the image's `.adna/README.md` = **158 lines**, and the image's *root* `README.md` = 86 lines.)
2. **Premise is stale.** This idea claims `.adna/README.md` is "870 lines"; the current image file is **158 lines** (verified against the pristine v8.3 clone `e4372a6`, 2026-07-02). The 870-line file it describes no longer exists — the inner README was substantially cut since campaign_adna_polish. Any III review must first re-scope against the real 158-line file.

**Recommended venue**: fold into the **M6.1 RC** image-currency work (co-locate with `idea_image_newcomer_currency_fixes`, which already carries an RC audit candidate line for `image:.adna/what/docs/*` currency) — OR run as a standalone III pass *on the image* at RC time, re-scoped to the actual 158-line file. Not a dev-vault docs-mission fix. Escalated to orchestrator for G4 venue assignment.

**Fable ruling (M4.3 review, 2026-07-02): arm 1 — CO-LOCATE with the M6.1 RC fold batch** (`fold_batch: champollion_m6_1_rc`, added to frontmatter). The RC's image-currency sweep reads every image doc anyway; a separate standalone III pass on a 158-line file doesn't earn its overhead. Re-scope note stands: the review targets the REAL 158-line file, premise re-derived at RC (the "870 lines" claim is dead).
