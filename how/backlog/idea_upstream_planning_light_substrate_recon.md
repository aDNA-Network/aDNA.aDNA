---
type: backlog_idea
idea_id: idea_upstream_planning_light_substrate_recon
title: "Add a 'pre-flight substrate recon' step to planning-light campaign meta-planning (v8.0+)"
category: doctrine
status: accepted
priority: medium
effort: tiny  # < 0.5 session — single-section insert in upstream charter template + 1 short skill note
proposed_by: agent_stanley
proposed_date: 2026-05-26
updated: 2026-07-02
upstream: true
target_version: "v8.0"
filed_from: node.aDNA/how/campaigns/campaign_node_credentials/missions/mission_node_creds_m06_documentation_sweep.md
filing_authorization: skill_upstream_contribution
last_edited_by: agent_rosetta
tags: [backlog, upstream, doctrine, planning_light, meta_planning, substrate_recon, charter_template, m00_protocol, stub_session_estimates, load_bearing_assertions]
created: 2026-05-26
fold_batch: champollion_m6_1_rc
---

# Upstream Contribution — Pre-flight substrate recon for planning-light campaigns (v8.0+)

## Problem

Planning-light campaigns (`campaign_class: governance-tight` or `planning-light`) use M00 as the only meta-planning mission and produce stub files (M01..MN) with pre-locked session estimates at M00 close. The stubs' exit gates often **assert substrate existence**: a particular file, env-var, system mechanism, plan tier, or shell hook that the implementing missions will exercise.

When those substrate assertions turn out to be wrong, the cost lands at the first implementing mission's entry-gate, after the stub estimate has been signed off and the operator has gated the work:

- **`campaign_node_credentials` M02 G1 (2026-05-25)**: M00 stubs assumed 1Password **Business**-tier service accounts. The substrate-recon would have run `op account get`, surfaced `Type: INDIVIDUAL`, and **caught the missing capability before M00 close**. Instead, the mismatch landed at M02 G1; the entire M02 mechanism pivoted to Keychain+ACL substrate; ADR-002 §G2.1 was amended; `plan_service_account_adoption.md` flipped to `superseded_by_keychain_pivot`. Net cost: ~0.5 session of mid-execution replanning.
- **`campaign_node_credentials` M05 O1 F9 (2026-05-25)**: M00 + M05 stubs referenced `~/.lattice/load_secrets.sh` as a scope-override mechanism. The file **never existed on disk**; the real mechanism is `~/.zsh/conf.d/05-credentials.zsh` (modular zsh config). M05's `LATTICE_SECRETS_SCOPE=ll` exit-gate was doubly dead. M05 O1's workspace-wide audit caught it five steps deep into the implementation phase; doctrine reconciliation cost ran across two sessions (`mossy-badger` + `expressive-sunset`).

**Both failures shared a structural pattern**: a 5-minute "does the substrate actually exist on this node?" recon at meta-planning time would have caught the assertion before it locked into stub exit-gates. Neither failure was a deep design issue — they were operationally trivial substrate-existence misreads that the M00 process did not gate against.

## Proposed solution

Add a **mandatory `## Pre-flight Substrate Recon` section** to the planning-light campaign-charter template (`.adna/how/templates/template_campaign_charter_planning_light.md` or the equivalent in the v8.0 template family). For each load-bearing substrate assertion in any stub's exit gate, the M00 mission must:

1. **Name the assertion** in the charter's pre-flight section (e.g. "M02 G1 assumes 1P Business-tier service accounts available")
2. **Provide a verification command** (e.g. `op account get | grep -i type`)
3. **Run the verification command at M00** before stubs get session estimates
4. **Record the result** in the charter's Risk Register or a dedicated `## Substrate Recon Results` subsection
5. **If a verification fails**: re-plan the affected stub(s) at M00 rather than booking the failure into mid-execution

The template section (verbatim, ~12 lines):

```markdown
## Pre-flight Substrate Recon

Planning-light campaigns enumerate load-bearing substrate assertions in stub exit-gates and verify each at M00 time, before stubs lock session estimates.

For each substrate assertion (a file expected to exist, an env-var expected to be set, a plan tier expected to be available, a shell hook expected to fire, a system capability expected to be installed), the M00 mission MUST:

1. Run a verification command that confirms or denies the assertion
2. Record the result here
3. If the assertion fails, re-plan the affected stub(s) at M00 — do not book the failure into mid-execution

| Stub | Assertion | Verification command | Result | Outcome |
|---|---|---|---|---|
| (e.g. M02 G1) | (e.g. 1P Business service accounts available) | (e.g. `op account get \| grep -i type`) | (PASS/FAIL + observed value) | (proceeds as planned / replan) |
```

The skill `.adna/how/skills/skill_campaign_planning_light_meta_planning.md` (if it exists; or whichever skill governs M00 of planning-light campaigns) gets a one-paragraph addition pointing at this template section and listing the verification cadence: substrate-existence recon at M00; substrate-functioning recon (smoke test) at each implementing-mission entry-gate.

## Reasoning

- **Two direct empirical incidents on this node** (2026-05-25, same campaign, same week) — convergent signal that the gap is real, not a one-off.
- **Asymmetric cost** — substrate-recon is ~5 min at M00; substrate-failure mid-execution costs hours of replanning + ADR amendments + doctrine rewrites + STATE.md backflow + AAR-finding overhead.
- **No deep-design tradeoff** — the proposal is a 5-min recon step, not a methodology shift. Planning-light campaigns remain planning-light; the M00 mission gains one more enumerable artifact.
- **Composable with existing AAR Findings carry-forward**: M05 + M02 AAR Findings already flagged this pattern in their own follow-up sections; this backlog formalizes the carry-forward at the template level.
- **Same shape as other defensive disciplines**: file pre-read before write (already in template); session-active scan before campaign-mutation (proposed in `idea_upstream_single_writer_lease_for_inventory.md`); substrate-recon before stub-estimation (this proposal). All three are cheap pre-flight checks that close known failure modes.

## Compatibility

- **Upstream campaign-charter template (planning-light variant)**: ~12-line additive section under `## Phases & Missions` or wherever Risk Register lives.
- **Skill addition**: ~1 paragraph in the M00 meta-planning skill (if it exists; otherwise filed at vault level).
- **Existing campaigns**: rule applies prospectively — no retrofit required. Existing in-flight campaigns can add the recon section opportunistically at their next charter-amendment.
- **Heavy-planning campaigns** (`campaign_class: deliberative`): rule is OPTIONAL for these; M01+M02+M03 design missions already provide many natural recon checkpoints. Recommendation: heavy campaigns adopt the discipline at operator discretion.
- **No `.claude/settings.json` impact**: pure template doctrine.

## Acceptance test

1. A new planning-light campaign chartered via the v8.0 template includes a populated `## Pre-flight Substrate Recon` section at M00 close.
2. At least one assertion verification command runs and records a PASS/FAIL result before stubs lock session estimates.
3. A FAIL result correctly triggers stub re-planning at M00 rather than mid-execution failure.

## Related

- `node.aDNA/how/campaigns/campaign_node_credentials/missions/mission_node_creds_m02_ss_service_account.md` — M02 G1 pivot incident; `closing_disposition: pivoted_at_g1`
- `node.aDNA/how/campaigns/campaign_node_credentials/missions/mission_node_creds_m05_o1_workspace_audit.md` — F9 `load_secrets.sh`-never-was finding
- `node.aDNA/how/campaigns/campaign_node_credentials/campaign_node_credentials.md` §Notes — pre-flight-substrate-recon learning carry-forward to M06
- `node.aDNA/how/campaigns/campaign_node_credentials/aar_campaign.md` — campaign-level rollup citing this as load-bearing
- `idea_upstream_credential_broker_template_inheritance.md` — sibling M06 carry-forward (filed same date)
- `idea_upstream_single_writer_lease_for_inventory.md` — sibling M06 carry-forward (filed same date)
- `node.aDNA/what/decisions/adr_002_credential_broker_pattern.md` §G2.1 — the amended ADR that documents the M02 pivot


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).
