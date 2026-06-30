---
type: governance
subtype: campaign_claude
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [governance, campaign, keystone]
status: active
---

# CLAUDE.md — Campaign: Operation Keystone

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_keystone` |
| Owner | stanley |
| Status | planning |
| Current Phase | Phase 0: Author the Paradigm |
| Persona | Rosetta (this vault authors the paradigm; each seeded graph gets its own persona at its P0) |

## Quick Start

1. Read this file (auto-loaded).
2. Read [[campaign_keystone|campaign_keystone.md]] — master.
3. Read [[what/patterns/pattern_software_deployment_graph|the pattern]] + [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] + [[how/templates/template_software_graph_stub|the stub template]].
4. Read [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|the de-confliction ledger]] before forking ANYTHING.
5. Claim next mission; create a session file; begin.

## Key Files

| File | Purpose |
|------|---------|
| `campaign_keystone.md` | Master — phases, missions, scope, risk |
| `what/patterns/pattern_software_deployment_graph.md` | The paradigm |
| `what/specs/spec_platform_ecosystem.md` (§subtype) | Category placement (Platform.aDNA software/deployment-graph) |
| `how/templates/template_software_graph_stub.md` | The uniform cohort skeleton |
| `artifacts/keystone_deconfliction_ledger.md` | Implied-stack roster + per-software disposition |
| `what/decisions/adr_037_software_deployment_graph_subtype.md` | Subtype + four-wrapper conformance + recipe-quarry reconciliation |

## Standing Orders (campaign-specific)

1. **Ground truth before fork.** Before any graph is created/scoped, re-read the owning vault's STATE/CLAUDE (Network/Lab/Git/Lighthouse/Home). Never rule from memory (P1 doctrine).
2. **Federate, never duplicate.** Each graph FEDERATES `git/` (Git.aDNA), `feedback/` (WS-A), `iii/` (III.aDNA), and Home.aDNA credential routing. It does not re-author what an owning persona governs.
3. **Recipes = quarry, graph = home.** The `Network.aDNA` recipe library is source-quarry; the `<Software>.aDNA` graph is canonical home (ADR-037). Coord-memo Venus; never write into her tree.
4. **Stubs only.** P2/P3 produce genesis-planning stubs — no install, no deploy, no service start, no infra. Live work is per-graph P-gated.
5. **Data-bearing → ADR-016 §8.** Any graph governing data-bearing software carries the control-plane-vs-data-plane discipline; placement co-designed with Venus.
6. **Prove on clean net-new first.** Nextcloud / FastAPI / nginx before the overlapping graphs (Forgejo, Nebula) and before enriching Store/Groupware.
7. **Router rows STAGED `#needs-human`.** Production Tidy freeze — never insert.

## Context Loading

| File | When |
|------|------|
| [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|Operation Feedback Loop]] | Always (the `feedback/` wrapper dependency) |
| `Lab.aDNA/CLAUDE.md` | M0 (credential-routing + git-ops boilerplate source) · M2 (reference-impl enrichment) |
| `Lighthouse.aDNA/{CLAUDE,STATE}.md` | M4 (composition interlock — read-only; do not lift its gate) |
| `Network.aDNA/STATE.md` | M1, M3 (Nebula seam + recipe reconciliation) |
| `Git.aDNA/CLAUDE.md` | M1, M3 (Forgejo seam + `git/` wrapper shape) |

## Delegation Notes

P0 authored 2026-06-20. Category ruling (Platform.aDNA software/deployment-graph subtype) and the recipe-quarry reconciliation are settled and recorded in ADR-037. The de-confliction ledger is **drafted from recon** (Store + Groupware verified ABSENT → seed-net-new; Forgejo/Nebula = scope-don't-duplicate) and awaits operator ratification at the P1 gate before any fork. Cohort scope is **wide** per operator ratification — the ledger enumerates the full implied stack, not just the order's named set.
