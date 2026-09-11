---
type: session
created: 2026-09-11
updated: 2026-09-11
last_edited_by: agent_rosetta
tags: [session, haussmann, claim_register, reconciliation, publishing_docs]
session_id: session_stanley_20260911_110421_haussmann_queue_reconcile
user: stanley
started: 2026-09-11T11:04:21Z
status: completed
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
files_modified:
  - how/publishing/publishing_content_mapping.md
  - how/publishing/publishing_vault_to_site.md
  - site/src/content/docs/content-mapping.mdx
  - site/src/content/docs/vault-to-site.mdx
  - site/src/content/docs/lattice-content-pipeline.mdx
  - what/lattices/examples/content_pipeline.lattice.yaml
  - what/lattices/examples/AGENTS.md
  - how/campaigns/campaign_haussmann/evidence/claims/claim_register.md
  - how/campaigns/campaign_haussmann/artifacts/p2_6/p2_replan.md
  - how/campaigns/campaign_haussmann/missions/session_prompts_haussmann.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_3_false_red.md
  - how/backlog/idea_upstream_membership_vocabulary_pre_admission_tier.md
  - who/coordination/inbox/coord_2026_09_04_berthier_to_rosetta_windows_claude_cli_member_workstation_gap_routed.md
  - STATE.md
files_created:
  - how/campaigns/campaign_haussmann/artifacts/operator_queue_reconciled_20260911.md
  - how/backlog/idea_gate_self_negating_route_claim.md
completed: 2026-09-11T19:23:02Z
token_budget_actual: "~200 kT (content-load); single session"
deploy_record: "2026-09-11T19:23:02Z mode=prod tree=eda4cbf"
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
- 11:2x — Publishing-docs cluster measured. ⚠ **The plan's "stale counts" were WRONG** — Pathway-1 counts match
  `transform-content.mjs` exactly (13/8/5/6/9/8). They had been derived against `dist/` and vault dirs, two wrong
  denominators. *The table's own sentence names its source; reading it first would have saved the error.*
- 11:3x — Real defects isolated: 6 mapping tables claimed vs **8** · 48-entry wikilink map vs **60** ·
  `adna-docs.vercel.app` ×5 · the "Current Gaps" falsehood · `R-177`'s vault-only phantom route.
- 11:4x — Both trees repaired; zero-survivor control asserted.
- 12:0x — Claim register §26 (R-171…R-177) + §26.1 scope finding. Counts re-derived by the register's own script.
- 12:1x — Operator queue re-derived at the object; six stale records struck (SO-6).
- 12:18 — Build 229 pages; gates **698 passed / 1 skipped / 0 failed** (baseline); `adna_validate --governance` green.
- 12:2x — ⛩ Push GO → `ee87021..eda4cbf`. ⚠ **HEAD moved between commit and push** — two Venus commits landed
  concurrently. Diffed before proceeding: one inbound memo, **zero `site/` bytes**.
- 12:23 — ⛩ Deploy GO → `deploy_record: 2026-09-11T19:23:02Z mode=prod tree=eda4cbf`. Live headers 4/4.
- 12:2x — Post-deploy probe **12 PASS / 0 FAIL**. ⚠ One probe assertion was wrong before its subject
  (`grep -c` counts lines; expected 1, got 11) — re-asserted structurally against the parsed table: **8 rows,
  counts matching the script exactly**. *The thirteenth instance of my own instrument being wrong first.*

## SITREP

**Completed**:
- The publishing-docs claim cluster repaired **in both trees** and **deployed** — 7 claims, `R-171`…`R-177`.
- Claim register §26: **189 → 196 rows**, `R-11…R-177`, 0 gaps, derived by the register's own script.
- §26.1 scope finding recorded: the register censused the **persuasion surface**; the **docs corpus was never
  in scope** and 229 pages remain unread against it.
- Operator queue re-derived at the object → `artifacts/operator_queue_reconciled_20260911.md`. **Six stale
  records struck**, two of them decisions already taken *and shipped*.
- `idea_gate_self_negating_route_claim.md` filed at `proposed` — **not built** (standing rule).
- Deployed `eda4cbf`; gates at baseline **698/1skip/0fail**; probe **12/0**.

**In progress**: none.

**Next up**: `P5.1` — entirely human (AC-1 recruit five · AC-2 non-builder on a fresh macOS account, labelled
for `P2.6 O0b` too · AC-3 operator-as-outsider). Before scheduling: **check the Speed-Insights dashboard** —
`P5.2` needs field data and may be blocked independently of `P5.1`.

**Blockers**: none agent-reachable. ⛩ Five operator gates, enumerated in the reconciliation artifact.
⛩ `adr_023:73` flagged and deliberately **not** edited — ratified text is not an agent's to rewrite.

**Files touched**: see frontmatter (14 modified, 2 created).

## AAR (SO#5 — lightweight)

- **Worked**: probing every inherited claim at its object. Two queue items were already discharged, the plan's
  "stale counts" were not stale, and a comment the plan called false was correct. **Nothing inherited survived
  contact intact.**
- **Didn't**: my first derivation used two wrong denominators (`dist/`, vault dirs) for a table that **names its
  own source in its first sentence**; and `"230 pages"` counted `404.html` — the wrong-denominator error
  committed *while repairing a wrong-denominator defect*.
- **Finding**: ***a stale owed-row spends operator attention on a closed question.*** A queue is the one
  artifact whose staleness costs the reader directly rather than merely misinforming them.
- **Change**: repairs applied to **both** trees with a zero-survivor control, because the generated artifact was
  the *correct* one in `R-177` — the case that silently un-fixes itself.
- **Follow-up**: sweep 229 docs pages against the register; then shape the filed gate to what the sweep finds,
  **not** to this single instance.

## Next Session Prompt

You are Rosetta in ~/aDNA/aDNA.aDNA. HAUSSMANN's site is fully deployed and current — prod serves `eda4cbf`
(`deploy_record: 2026-09-11T19:23:02Z`), gates 698/1skip/0fail, register at 196 rows (`R-11…R-177`). **There is
no agent-reachable work on the P-backbone**: `P5.1` needs five recruited humans, a fresh macOS account, and the
operator as outsider, and agents must not recruit. Read
`how/campaigns/campaign_haussmann/artifacts/operator_queue_reconciled_20260911.md` first — it is the re-derived
operator queue and it supersedes any owed-list you find narrated elsewhere in `STATE.md`; **six rows were struck
as already-done on 2026-09-11, so do not re-present them.** If the operator wants agent work before recruitment,
the live candidate is the **docs-corpus sweep** named at `claim_register.md` §26.1: 229 built pages have never
been read against the claim register, and the three repaired on 09-11 were found by a targeted grep, not a
sweep. ⛔ **Do not build `idea_gate_self_negating_route_claim` before that sweep** — a gate shaped by one
instance is shaped by a sample of one, and the filed idea records why (SO-6 corrections keep the false sentence
as a quotation, so a naive matcher reds on the fix). ⛔ **A deploy hold goes live the moment `evidence/p5_1/` is
non-empty**; re-derive the panel build stamp from `/.well-known/adna-build.json` rather than quoting `eda4cbf`.
