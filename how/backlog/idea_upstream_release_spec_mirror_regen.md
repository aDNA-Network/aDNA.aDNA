---
type: backlog_idea
status: proposed
priority: high
created: 2026-10-20
updated: 2026-10-21
last_edited_by: agent_rosetta
filed_from: how/campaigns/campaign_arcade/artifacts/p5/aar_campaign_arcade.md (Gap 1 · Technical Debt 1); finding first measured at ARCADE A5.1 (live fetch, 2026-10-20)
filing_authorization: ARCADE A5.2 graduation (R66, operator plan-time AskUserQuestion 2026-10-20); the sync itself was ruled carried by R63, not executed
upstream_target: this vault's how/skills/skill_template_release.md (dev-graph skill; folds to the image only if the skill ships there)
disposition: "v8.14 lane — first row of the queue; the only ARCADE carry with a live public symptom. The sync's deploy is its own GO (GARNIER P2.2 release fidelity owns the site side)."
tags: [backlog, upstream, release, spec_mirror, site, v8_14, arcade]
release_window: v8.14   # ledger how/missions/artifacts/v8_14/v8_14_release_ledger.md rows Q1 (site sync, owed) + Q2 (skill step (g), written 2026-10-21)
---

# Idea: the release skill must regenerate the site's spec mirror

## Problem

`[D]` On 2026-10-20 template v8.13 shipped standard **v2.6** (image `223ecc1`, md5 `86385da8`). The same hour, adna.network's `/reference/specification/` still rendered **v2.5**: the A5.1 live fetch found "Graph Exchange" 0 times. The deploy tail had run (prod `c7d152a1`: trust page, changelog, AEP-3, AEP-4), yet the spec mirror was not part of it.

`[D]` The mirror is a **generated face** of `what/docs/adna_standard.md`. `site/scripts/transform-content.mjs` builds it, `site/scripts/split_specification.mjs` splits it, and `site/tests/gates/gate-32-spec-split.spec.ts` checks the split's integrity. `how/skills/skill_template_release.md` mentions none of the three: a grep for "spec mirror", `transform-content` and `split_specification` returns 0.

**Plain version.** The website keeps its own copy of the standard, built from the real one. Nobody told the release checklist to rebuild that copy, so the release went out and the website kept showing last version's text.

## Proposal

Add one step to `skill_template_release`'s post-fire site work, directly beside the trust-page and changelog steps:

1. Re-run `transform-content.mjs`, then `split_specification.mjs`, on the deploy tree.
2. Run gate-32 and a drift check: the rendered version string equals the released standard's version.
3. Deploy only on that deploy's own GO. Alias-probe the version string on `/reference/specification/`.

## Why it generalises

Any vault that publishes a generated face of a versioned source has the same failure class. A release can be complete at its source and stale at its faces. The fix is a named regeneration step per face, listed in the release skill, not in anyone's memory. This is the AAR lesson "a release can be whole in the image and partial on the site in the same hour".

## Related

[[skill_template_release]] · [[aar_campaign_arcade]] · [[arcade_amendment_dp3_item_i]] (§5 carry 6) · [[pattern_channel_proof]] (a deploy is proven at the consuming surface, not by the command's exit code)
