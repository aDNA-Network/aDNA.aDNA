---
plan_id: mission_champollion_m3_2_pattern_harvest_ii
type: plan
title: "M3.2 — Pattern harvest II (credential-broker · shim-registry · coord/countersign · ISS gates · campaign-splash) + graduation-seed checks"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 3
campaign_mission_number: 2
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT"
token_budget_actual: "~56 kT (opus subagent build ~46 self-reported + fable bookends ~10 verify/census/amendments; +40% over est — census-driven review amendments, see AAR)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p3, pattern_harvest, credential_broker, shim_registry, countersign, iss, splash, m3_2]
---

# Mission M3.2 — Pattern harvest II

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** (G2 role model) · **Ring 2** (compressible — converts to accepted-carry at the **G3 ring cut** if the launch window tightens; if compression hits mid-mission, finish started files cleanly and halt).

> **DONE 2026-07-02** (`session_stanley_20260702T161839Z_champollion_p3_sweep`, fable-orchestrated · opus subagent at-tier, Mode B). Five patterns live (broker/shim split into two): [[../../../what/patterns/pattern_credential_broker|credential_broker]] · [[../../../what/patterns/pattern_shim_registry|shim_registry]] · [[../../../what/patterns/pattern_coordination_countersign|coordination_countersign]] · [[../../../what/patterns/pattern_iss_operator_gate|iss_operator_gate]] · [[../../../what/patterns/pattern_campaign_splash|campaign_splash]] — all `draft`, NAMES-ONLY verified (independent grep). Graduation seeds re-derived from primary evidence: **both already 3/3 (graduated 2026-05-27; OoB counts were stale)** — backlog filed + OoB §2 annotated → **G3 ratification flags**. Fable-review census found adoption outran documentation: **ISS = 10 vault adoptions** (not "3 live"; Rule 8 row stale) + **broker = 3** (BusinessIntelligence carries the snippet) → both patterns **threshold-met, G3 flags**. AAR: [[../../../how/missions/artifacts/campaign_champollion_mission_m3_2_aar|m3_2 AAR]].

## Objective

Harvest the second pattern batch from live fleet mechanisms into `what/patterns/` (same dual-audience + instance-evidence contract as [[mission_champollion_m3_1_pattern_harvest_i|M3.1]]): (1) the **Home credential-broker** (Hestia's Keychain-primary + 1P-backup, per-credential ACL grant, names-only-in-conversation — workspace Rule 6) **+ shim-registry** (Rule 9's shim ledger: class/window/retire-condition/owner; these two may be one pattern or two — executor judges by whether they share a lesson), (2) the **coordination memo + countersign** discipline (staged memos, `ack_required`, countersign asks — the Noether/Prometheus instances), (3) **ISS operator gates** (Rule 8 / ADR-028/029 — when to render a web decision surface vs inline), (4) the **campaign splash** (the 5-block ASCII recap at campaign open/close — `skill_campaign_sitrep_splash` is the skill; the pattern is the operator-recap discipline). Plus: **graduation-seed checks** — verify the two skill seeds tracked in [[../artifacts/order_of_battle|Order of Battle]] §2 (one at 2/3 instances, one at 1/3) for current instance counts; update their trackers if moved.

## Work

1. Enumerate + study live instances (Home.aDNA broker artifacts by NAME only — credentials never transit; the shim ledger §C; the staged-memo corpus in `who/coordination/`; ISS ADRs + the 3 live consumer wrappers; splash instances in this campaign + Home).
2. Author the pattern files (3–5 depending on the broker/shim split call), each: plain-language first · mechanism · ≥2 instances by path · adoption notes · graduation status.
3. Graduation-seed check: re-derive the two seeds' instance counts from the live tree; annotate the OoB §2 trackers (annotation only — graduation itself ratifies at a gate).
4. Cross-link (≥2 wikilinks each) + index surface; standing sweep clause (out-of-scope hits → manifest).

## Acceptance criteria

- [ ] Pattern batch live (3–5 files), dual-audience, instance-cited, graduation-status'd.
- [ ] Credential content is NAMES-ONLY throughout (no values, no Keychain items quoted) — hard requirement.
- [ ] Graduation seeds re-derived + OoB §2 annotated.
- [ ] Fable review passed; `adna_validate` FULL PASS; explicit-path commit.

## Guardrails

**Names-only for anything credential-adjacent** (doctrine_credential_handling; a pattern about the broker never exhibits a credential) · instance evidence over invention · no `.adna/` writes · no push · Ring-2 discipline (halt-and-convert on G3 compression or budget breach) · out-of-scope findings → manifest, not fixes.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .`; names-only grep over the new patterns (no `KEYCHAIN`/token-value shapes); instance-path spot-check (fable bookend).

## Escalation triggers

- Any ambiguity about whether a broker detail is safe to document → escalate to fable/operator; never resolve toward disclosure.
- A seed's instance count implies graduation NOW → flag for G3 (ratification is gate work).
- Budget > 55 kT → halt and report (Ring-2).
