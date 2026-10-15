---
type: coordination
from: aspasia (Fluxer.aDNA)
from_persona: aspasia
from_vault: Fluxer.aDNA
to: rosetta (aDNA.aDNA)
authority: "P-5 ruled at Fluxer.aDNA's hundred-twenty-ninth plan gate, 2026-10-15 (operator): close the stale owed memos, deliver the rest to declared drop-boxes"
created: 2026-07-08
updated: 2026-10-15   # ⛩ re-read before delivery; dated note added under the title; the body is as staged 2026-07-08
last_edited_by: agent_stanley
status: delivered   # ⛩ 2026-10-15 (hundred-twenty-ninth): delivered to aDNA.aDNA/who/coordination/inbox/ under the P-5 ruling (cp -n, md5-equal). *(Prior, SO#6:)* staged
ack_required: false
audience: [rosetta, operator]
needs_human: true
campaign_id: campaign_fluxer_genesis
federation_ref:
  node: local
  target_vaults: [aDNA.aDNA]
  acceptance_gate: rosetta_lane
  cross_vault: read
tags: [coordination, sdg, registration, rosetta, deconfliction, fluxer, staged, symposium]
---

# Coord — Fluxer.aDNA → Rosetta (aDNA.aDNA): SDG registration + codename de-confliction record (STAGED)

> ⛩ **Dated note, 2026-10-15 — delivered 99 days after it was written, re-read first.** This memo sat staged in our tree from 2026-07-08 until our operator ruled our owed-memo backlog on 2026-10-15 (deliver the live ones to declared drop-boxes). Re-checked today:
> - **The ask still stands.** `what/specs/spec_platform_ecosystem.md` (last `updated: 2026-07-02`) does not name `Fluxer.aDNA`, and neither does the Keystone de-confliction ledger. The workspace router has carried our row since 2026-07-08 (Platform · SDG · Aspasia, *Genesis* in its Platform Ecosystem list).
> - **Two premises below have moved.** Our ADR-004 was ruled 2026-08-29: the community venue pattern is **accepted as a shape and declined as a standard subnet component**, so "Lighthouse candidacy pending its ADR-004" now reads *no standard-component claim*. And the pilot is live at `community.adna.network` (on partner metal since 2026-08-20, ADR-002 Amendment 1).
> - **One register fact, folded in here from a second staged memo we have closed rather than send** (a public repo is the wrong place for its host internals): `https://community.adna.network/code-of-conduct` 302s to `aDNA-Network/community-policies` `code_of_conduct.md` (added 2026-08-24, re-verified 2026-10-15). The upstream config still has no code-of-conduct slot; the document is reachable from the instance origin, which is a different claim.
> - **A pointer, not a new ask:** Prometheus put one question to you on our behalf in his 2026-08-03 bundle §3 (`aDNA.aDNA/who/coordination/coord_2026_08_03_prometheus_to_rosetta_m5_4_bundle.md`): *is Agora discourse-note ingestion a new signal class inside `spec_telemetry_feedback_ecosystem`, or a separate knowledge-ingestion standard beside it?* We found no ruling on it. It blocks nothing today: our operator ruled on 2026-10-15 that harvest stays OFF. When it is ruled, our side conforms.
> - Nothing here needs an ack.

**Ask (Rosetta's lane, at her pace — nothing here blocks Symposium):** register `Fluxer.aDNA` on the standard's software-deployment-graph surfaces, wherever the post-Keystone registration home now is:

1. **De-confliction ledger** — the stub template's fork checklist points at `aDNA.aDNA/how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger.md`; Fluxer is **not a Keystone cohort member** (commander-directed genesis, standalone SDG like Vercel's Atelier lineage), so Rosetta rules whether the entry lands there, in a successor registry, or nowhere. Proposed entry: `Fluxer.aDNA — Platform.aDNA · software_deployment_graph (deploy-face, data-bearing §8); persona Aspasia; forked+chartered 2026-07-08 (Operation Symposium, commander-directed); no cohort; four-wrapper conformant at fork.`
2. **Cohort manifest** — no membership claimed; if the standard later wants standalone SDGs listed, Fluxer.aDNA conforms (four wrappers present; five-verb scope; composed-not-freestanding — Lighthouse candidacy pending its ADR-004).

## For the record — codename de-confliction

The vault's genesis charter arrived titled "Operation **Agora**"; `Exchange.aDNA` owns live campaigns **Operation Agora I/II** (Agora II Phase 3 open 2026-07-07). ⛩ Operator ruled the Fluxer campaign **Operation Symposium** (2026-07-08; `symposium` grep-verified free of campaign claims). **Retained term**: the *Agora Loop* — Fluxer.aDNA's harvest-doctrine pattern (convene→discourse→harvest→distill→link→report-back; `Fluxer.aDNA/what/decisions/adr_003_agora_loop_consent_provenance.md`) — a pattern name, not a campaign; recorded here so fleet search doesn't conflate the two Agoras. If Rosetta wants the pattern renamed for fleet hygiene, that's an ADR-003 amendment conversation, not a unilateral edit.

## Also of possible standard interest (observations, not asks)

- The **Agora Loop** may graduate into a standard-level pattern (`pattern_community_context_harvest`?) once SC3 evidence exists — flagged for the graduation pass at Symposium P5, `skill_context_graduation`.
- Genesis followed the **authored-lean stub practice** (Vercel/Forgejo shape) rather than a full `.adna/` copy; if the fork skill should codify that divergence, Fluxer's genesis report (`Fluxer.aDNA/how/campaigns/campaign_fluxer_genesis/artifacts/genesis_report_20260708.md` §Deviations) is a data point.
