---
type: artifact
artifact_type: aar
mission_id: "mission_seed_cohort_m02"
campaign_id: "campaign_keystone"
created: 2026-06-22
updated: 2026-06-22
last_edited_by: agent_stanley
tags: [aar, artifact, keystone, seed, cohort, deployment_graph]
---

# AAR: Seed the Software-Deployment-Graph Cohort (net-new)

## Mission Identity

| Field | Value |
|-------|-------|
| Mission | mission_seed_cohort_m02 |
| Campaign | campaign_keystone |
| Status | completed (Objective 6 deferred → re-homed) |
| Sessions | 3 (2026-06-20 first wave · 2026-06-21 second + third waves · 2026-06-22 close) |
| Duration | 2026-06-20 — 2026-06-22 |

## Scorecard

| # | Objective | Status | Notes |
|---|-----------|--------|-------|
| 1 | Commit the P1-close bundle | completed | Ledger ratification note + 3 seam memos finalized + coord-stewardship instance #2 (`960cdf7`) |
| 2 | First wave — Nextcloud/Caddy/Bitwarden | completed | `142c113` / `04817c5` (Caddy-default, settles #3) / `09ca97c` (WS-B) |
| 3 | Store.aDNA (object storage) | completed | Plutus; verified-absent → seed; data-bearing §8 (`77d2e88`) |
| 4 | Groupware.aDNA (unified messaging) | completed | Pheme; Stalwart JMAP; verified-absent → seed; data-bearing §8 (`85b4531`) |
| 5 | Decision-gated trio — Container/Inference/FastAPI | completed | Pandora/Pythia/Atalanta; settles #1/#2/#4 in one operator GO (`5b248db`/`fcf747d`/`79bb176`) |
| 6 | Enrich Lab.aDNA as reference impl | deferred → re-homed | Gated on Lab M-L13.6 (a different campaign's gate); scoped out to the §C enrichment wave / `idea_keystone_existing_graph_retrofit` |

**Delivered**: 5/5 net-new-seeding objectives (8 graph stubs); 1 enrichment objective deferred-with-home.

## Cohort Manifest (8 stubs)

| Graph | Persona | Class | Commit |
|-------|---------|-------|--------|
| Nextcloud.aDNA | Atlas | data-bearing (§8) | `142c113` |
| Caddy.aDNA | Portunus | data-bearing (§8) | `04817c5` |
| Bitwarden.aDNA | Cerberus | secret store (§8) | `09ca97c` |
| Store.aDNA | Plutus | data-bearing (§8) | `77d2e88` |
| Groupware.aDNA | Pheme | data-bearing (§8) | `85b4531` |
| Container.aDNA | Pandora | control-plane | `5b248db` |
| Inference.aDNA | Pythia | control-plane | `fcf747d` |
| FastAPI.aDNA | Atalanta | control-plane | `79bb176` |

All: four wrappers (`git/`·`feedback/`·`iii/`+credential-routing), deployment-gated SOs, local `git init` / **no remote**, router row STAGED `#needs-human`, ADR-000 proposed, P0 charter mission active.

## Gap Register

| # | Gap | Severity | Source | Remediation |
|---|-----|----------|--------|-------------|
| 1 | Cohort fork-method divergence — Caddy (346 files) + Bitwarden (358) full-`skill_project_fork`ed vs the lean-6's `template_software_graph_stub` | low | vault file-count audit (this close) | Confirms M00 AAR TD#2; **document & reconcile at P4 cohort manifest** — not rework (both legitimately further along / WS-B) |
| 2 | FastAPI framework-vs-platform category provisional | low | ledger §A | First-class decision at FastAPI's own P0 (`category_status` in frontmatter); `Python.aDNA` parent noted-not-seeded |

## Technical Debt

| # | Debt | Impact | Priority | Tracking |
|---|------|--------|----------|----------|
| 1 | Lab.aDNA enrichment (Obj 6) gated indefinitely on Lab M-L13.6 | low | medium | `idea_keystone_existing_graph_retrofit` (Lab = reference impl); dedicated mission on gate-open |
| 2 | AWSBootstrap ↔ Lighthouse ↔ cohort scope overlap (open decision #5) | medium | medium | `idea_awsbootstrap_lighthouse_cohort_reconciliation` (its own ADR session) |

## Readiness Assessment

| Criterion | Status | Evidence |
|-----------|--------|----------|
| Template proven on clean net-new | GO | 6 lean stubs uniform; 2 full-fork outliers documented |
| No critical gaps | GO | 0 critical; 2 low gaps tracked |
| Dependencies met for next mission | GO | Proven template + staged seam memos → M3 authored (blocked, turnkey) |

**Overall**: **GO** to checkpoint — M2 closed; M3 (overlap graphs) authored and parked on the seam gate; P4 (cohort manifest) consumes the full seeded set.

## Recommendation

Proceed to P3 (M3) only on operator ratification of the 3 staged seam memos (Forgejo→Hopper, Nebula→Venus, recipe-quarry→Venus; ack-pending, expire 2026-09-20). Run the Lab-enrichment reference implementation as its own session when Lab M-L13.6 fires. Author the AWSBootstrap reconciliation ADR before the enrichment wave proliferates.

## Lessons Learned

- **Bundling a cross-campaign-gated objective into a delivery mission stalls the mission.** Obj 6 depended on Lab's M-L13.6 — a gate this campaign doesn't own — so M2 could never close on its own terms. The fix (scope it out to an enrichment wave) is the general pattern: a mission should own only objectives whose gates it can reach.
- **A uniform stub template keeps a fast-seeded cohort a fleet.** Eight forks across three waves stayed structurally identical because the template predated the seeding; the only divergence (Caddy/Bitwarden) traces to the *first* wave, before the lean template was the default — i.e. the template, once adopted, held.
- **Decision-gating the trio paid off.** Holding Container/Inference/FastAPI for a single operator GO (vs guessing) settled three ledger decisions cleanly and avoided rework on persona/category/runtime choices.
