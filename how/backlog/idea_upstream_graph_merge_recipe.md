---
type: backlog_idea
status: proposed
priority: high
created: 2026-06-23
updated: 2026-06-23
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/campaigns/campaign_production_tidy/pt08b_merge_playbook.md (promoted at P8 close)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, merge, absorb, supersession, federation, merge_archive, recipe, production_tidy]
---

# Idea: `skill_graph_merge` — a canonical recipe for merging one `<Name>.aDNA` graph into another

## Problem

Consolidating two graphs (absorb content + code + consumer wrappers, then archive the drained source) has no canonical flow. It compounds the rename hazards with **cross-vault write authority** (who commits in the absorber?), **content-folding** (preserve vs rewrite), **federation re-anchoring** (consumers must repoint to the absorber), and **source archival**. Each merge re-invents it.

## Evidence — 3 merges validated one playbook (Operation Production Tidy pt09–pt11, 2026-06-16/22)

LPWhitepaper→LatticeProtocol (the clean **proof** merge: 0 wrappers, 0 code) · CanvasForge→Canvas (first code-coupled: 3 engine pkgs + 7 consumer wrappers; reversed a prior split) · LatticeLabs→aDNALabs (first intra-persona + partial-by-mandate, war/federation deferred). All used `pt08b_merge_playbook.md` + manifests and produced 0 broken live pointers + a registered **merge-archive** shim.

## Proposed recipe (as practiced)

1. **Absorber-capacity pre-check** — confirm the absorber's own ratified governance accepts the content (re-verify CLAUDE.md + ADRs; the charter may predate them — see `idea_upstream_recon_at_execution_discipline`).
2. **Cross-vault write authority** — the receiving persona acks/owns the absorber commit; the executing persona (here Hestia) acts under that authorization, not unilaterally.
3. **Content-folding, preserve-don't-rewrite** — move content into the absorber's `what/`/`how/`; keep history; don't paraphrase the source away.
4. **Source archival + supersession banner** — drain the source, banner it, move under the Archive holder (→ `skill_project_archive`).
5. **Federation re-anchoring** — repoint every consumer `<wrapper>/` + `federation_ref` from source → absorber (full per-vault pass, per the rename recipe).
6. **Code-as-WHAT** — relocated code lands as a WHAT-object in the absorber (`<absorber>/what/<code>/`), never a sibling repo.
7. **Merge-archive shim** — register the `Source.aDNA → Archive.aDNA/Source.aDNA` shim (a distinct class from rename shims; tracks the redirect through the grace window).

## Why upstream

Merges follow naturally from category churn (split-then-recombine, predecessor→successor consolidation). The 3-event convergence — opened by a deliberate *proof* merge before the risky ones — is a reusable safety pattern. Natural home: `how/skills/skill_graph_merge.md`, sibling to `skill_graph_rename` + `skill_project_archive`.
