---
type: adr
adr_number: "044"
title: "Per-class frontmatter profiles — `status` optional for directory_index + coordination; nested-instance walk exclusion"
status: accepted
created: 2026-06-30
updated: 2026-06-30
last_edited_by: agent_stanley
campaign_id:
supersedes:
superseded_by:
tags: [adr, decision, conformance, frontmatter, validator, directory_index, coordination, governance]
---

# ADR-044: Per-class frontmatter profiles + nested-instance walk exclusion

## Status

**Accepted — 2026-06-30** (ratified by the operator; authored by Rosetta / `aDNA.aDNA` during [[how/missions/mission_frontmatter_conformance|mission_frontmatter_conformance]], the frontmatter leg of the `adna_validate` governance-hygiene thread). The reference implementation already landed in this vault's validator. **Upstream adoption remains pending** — the refinement folds into the public image (`aDNA-Network/aDNA`, §7.2/§5.5) at the next `skill_template_release` via [[how/backlog/idea_upstream_per_class_frontmatter_profiles|idea_upstream_per_class_frontmatter_profiles]]. Touches the aDNA Universal Standard §7.2 (Frontmatter) and §5.5 (Conformance) — normative, hence the upstream proposal rather than a unilateral local edit (Standing Order 9); until that folds, the reference instance leads the written standard on these two refinements (as designed).

## Context

`adna_validate.py` enforces §5.5/§7.2: every `.md` inside the triad (`what/ how/ who/`) MUST carry the base-6 frontmatter fields (`type, created, updated, status, last_edited_by, tags`). At this mission's open the validator **FAILED Starter conformance with 502 frontmatter errors across 339 files** — the largest finding class after the recently-resolved governance-count drifts.

Auditing the corpus against the vault's **own canonical templates** surfaced two structural mismatches — cases where the validator's blanket base-6 rule is stricter than the standard's own materials:

1. **`status` on index + correspondence entities.** The canonical `directory_index` template (`.adna/**/AGENTS.md`) and `coordination` template ([[how/templates/template_coordination|template_coordination]]) **omit `status` by design** — they carry `type/created/updated/last_edited_by/tags` (+ `author/urgency/expires` for coordination) but no lifecycle `status`. An always-on directory index has no lifecycle state; a coord memo is a point-in-time correspondence record. ~58 `AGENTS.md` files were "non-conformant" purely for following their own base template; the 8 that *did* carry `status` were the deviations. The validator's own taxonomy already classifies `AGENTS.md` as a **governance** file (`STANDARD_GOV_FILES`), not a content file — yet it applied the content base-6 to it. (By contrast `template_session` *does* carry `status`, so sessions stay in-profile.)

2. **Nested example/template instances.** The walk recursed into `what/docs/examples/**` (two embedded sample sub-vaults: `example-biotech-lab`, `example-enterprise-pipeline`) and `how/templates/template_node_adna_exemplar/**` (a node-vault template scaffold). These are **standalone instances** — documentation and scaffolds, each validated on its own — not part of THIS instance's governed content. 28 files were flagged that belong to other (nested) instances.

These are exactly the self-referential lessons the vault teaches: the validator should validate **this** instance's governed content, applying the **right per-class schema** — see [[what/patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]] on composing the correct contract per object.

## Decision

### 1. `status` is OPTIONAL for `directory_index` and `coordination` entities

§7.2's base-6 requirement is refined: `status` is **required for content + session entities** (which carry it in their templates) and **optional for `type: directory_index` and `type: coordination`** (whose canonical templates omit it — an index / correspondence record has no lifecycle state). The other five base fields remain required for all classes.

### 2. Nested example/template INSTANCE trees are excluded from the conformance walk

A conformance run validates the instance at `root`; it does **not** recurse into embedded standalone instances. Excluded prefixes: `what/docs/examples/` and `how/templates/template_node_adna_exemplar/`. Each such instance is validated standalone if desired.

## Reference implementation

`what/lattices/tools/adna_validate.py` (this vault, the standard's reference instance):
- `STATUS_OPTIONAL_TYPES = ("directory_index", "coordination")` — the frontmatter loop drops `status` from the required set for these `type`s.
- `NESTED_INSTANCE_DIRS = ("what/docs/examples", "how/templates/template_node_adna_exemplar")` — `_find_md_files` prunes these subtrees from the walk.

Result this session: **502 → 293** frontmatter errors; **in-scope residual = 0** (every genuine content + index file conformant). `--governance` mode unchanged (Zero drift). The validator still flags the non-status drift of 117 historical session records + ~36 coord memos (220 + 73 lines) — see Consequences.

## Consequences

- **Positive.** The validator stops penalizing files for conforming to their own canonical templates, and stops importing nested instances' files into this instance's score. The fix is grounded in the standard's materials, not leniency-to-pass — it never contradicts a template.
- **Upstream.** §7.2 + §5.5 of the standard, and the public-image validator (`aDNA-Network/aDNA`), should carry the same two refinements. Staged: [[how/backlog/idea_upstream_per_class_frontmatter_profiles|idea_upstream_per_class_frontmatter_profiles]]. Until ratified, the local validator is ahead of the written standard on these two points (the reference instance leading the spec, as designed).
- **Out of scope (separate, deferred).** The residual ~293 errors are historical **session** records + **coord** memos missing the *non-status* base fields (`created/updated/last_edited_by/tags`). Those fields ARE in the session/coordination templates — so this is genuine drift-from-template, not a profile question. Backfilling 150+ closed/correspondence records is deferred as audit-trail churn (operator decision this session), tracked for a later pass — NOT resolved by this ADR.

## Alternatives considered

- **Backfill `status` into the ~58 index files** (diverge them from the `.adna` base template) — rejected: makes the reference instance contradict the upstream template; pushes drift onto every fork.
- **Leave the validator blanket-strict, mass-backfill everything** — rejected: forces a lifecycle `status` onto indexes/correspondence where it is semantically meaningless, and churns 150+ historical records.
- **Validator-only change, no ADR** — rejected: §7.2 is normative; silently diverging the validator from the written standard violates Standing Order 9. The ADR + upstream proposal keep the change legible and ratifiable.

## References

- aDNA Universal Standard §7.2 (Frontmatter), §5.5 (Conformance) — [[what/docs/adna_standard|adna_standard]]
- Templates: [[how/templates/template_coordination|template_coordination]], `.adna/**/AGENTS.md` (directory_index), [[how/templates/template_session|template_session]] (carries `status`)
- Pattern: [[what/patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]]
- Mission: [[how/missions/mission_frontmatter_conformance|mission_frontmatter_conformance]]
- Upstream: [[how/backlog/idea_upstream_per_class_frontmatter_profiles|idea_upstream_per_class_frontmatter_profiles]]
