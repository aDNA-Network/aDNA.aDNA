---
type: session
created: 2026-09-11
updated: 2026-09-11
last_edited_by: agent_rosetta
tags: [session, haussmann, claim_register, reconciliation, publishing_docs]
session_id: session_stanley_20260911_110421_haussmann_queue_reconcile
user: stanley
started: 2026-09-11T11:04:21Z
status: active
tier: 2
intent: "Reconcile the operator-gate queue at the object (it is stale in ≥5 places, two of them decisions already taken), repair the publishing-docs claim cluster on the live site, register the class, and deploy before the P5.1 recruitment freeze closes the window."
executor_tier: opus
campaign: campaign_haussmann
scope_declaration:
  - "site/src/content/docs/content-mapping.mdx"
  - "site/src/content/docs/vault-to-site.mdx"
  - "site/src/content/docs/lattice-content-pipeline.mdx"
  - "site/src/data/canonical.ts (comment only)"
  - "how/campaigns/campaign_haussmann/evidence/claims/claim_register.md"
  - "how/campaigns/campaign_haussmann/artifacts/p2_6/p2_replan.md"
  - "how/backlog/idea_upstream_membership_vocabulary_pre_admission_tier.md"
  - "how/backlog/idea_gate_self_negating_route_claim.md (new)"
  - "STATE.md"
conflict_scan: "how/sessions/active/ empty at open [D] 2026-09-11T11:04:21Z. No peer session. Working tree clean of site/ changes; main in sync with origin/main."
files_modified: []
files_created: []
completed:
---

## Why this session exists

The user asked three questions — continue the campaign, rule on the outstanding human ADRs/gates, and how close
is adna.network to fully live. Answering them together surfaced one finding that reframes all three.

**The site is done. The queue is not — and the queue is stale.**

Prod serves `681c814` = `HEAD~1`; the only delta to `HEAD` is the deploy-log line recording that deploy. The
binding constraint is `P5.1`, which needs five recruited humans and nothing else.

But the lists that tell an operator what is owed have drifted from the objects they describe. Verified at the
object before this session opened:

| Record says | Actually | Evidence |
|---|---|---|
| `STATE.md` `phase:` — "five increments BUILT AND UNSEEN… no deploy has been GO'd" | all deployed | deploy_log 09-04/05/07/08/11 |
| `STATE.md` `phase:` — "remainder **B3**" for P4.4b | B3 **and** B2b closed 2026-09-02 | mission frontmatter `status: completed` |
| `STATE.md` owed list — "`sweep/jsonld_census.md`'s missing instrument" | instrument exists | `scripts/jsonld_census.mjs` + `_redtest.mjs`, `7956b97` |
| `p2_replan.md` ⊳ D-D — docs-repo license `#needs-human` | MIT `LICENSE` live | `8e0efa4`, on `origin/main`, raw 200 |
| `idea_upstream_membership_vocabulary_pre_admission_tier.md` `status: open` | ruled + delivered 09-11 | `coord_2026_09_11_rosetta_to_venus_…` |

⭐ **Two of those are decisions the operator has already taken or that are already done, still sitting in the
queue asking to be taken again.** That is this campaign's own `index-vs-artifact` class, arriving in the
instrument that decides what an operator does next — the most expensive place for it to land, because a stale
owed-row does not merely misinform, it *spends operator attention on a closed question*.

And the same class is **live on the public site**. `/how/publishing/content-mapping` — served — carries a section
titled "Current Gaps" asserting *"The HOW triad leg … is not yet published to the site. This content — including
the document you are reading — exists in the vault but has no site pathway."* There are **15 built `/how/` pages**,
and that page's own "Related" list links to three of them.

## Activity Log

- 11:04 — Session started. Deploy window verified OPEN (`evidence/p5_1/` absent). `main` in sync with `origin/main`.

## SITREP

**Completed**:
**In progress**:
**Next up**:
**Blockers**:
**Files touched**:

## Next Session Prompt
