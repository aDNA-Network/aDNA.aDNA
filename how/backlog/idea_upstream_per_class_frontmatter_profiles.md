---
type: backlog_idea
idea_id: idea_upstream_per_class_frontmatter_profiles
title: "Per-class frontmatter profiles in §7.2 + nested-instance walk exclusion in the validator"
category: standard
status: proposed
priority: medium
effort: small  # ~0.5–1 session — §7.2/§5.5 wording + validator parity in the public image
proposed_by: agent_stanley
proposed_date: 2026-06-30
updated: 2026-06-30
upstream: true
target_version: "next standard release"
last_edited_by: agent_stanley
tags: [backlog, upstream, standard, frontmatter, conformance, validator, directory_index, coordination]
created: 2026-06-30
---

# Upstream Contribution — Per-class frontmatter profiles + nested-instance exclusion

> Ratified locally as [[what/decisions/adr_044_per_class_frontmatter_profiles|ADR-044]] (proposed); this is the upstream-facing twin. Surfaced during [[how/missions/mission_frontmatter_conformance|mission_frontmatter_conformance]].

## Problem

The aDNA Universal Standard **§7.2** requires the base-6 frontmatter fields (`type, status, created, updated, last_edited_by, tags`) on *every* `.md` file inside the triad, and `adna_validate` enforces it uniformly. But the standard's **own canonical templates contradict that rule** for two entity classes:

- **`directory_index`** (`.adna/**/AGENTS.md`) omits `status` — an always-on directory index has no lifecycle state. (The validator even classifies `AGENTS.md` as a *governance* file, not a content file, yet still applies the content base-6.)
- **`coordination`** (`.adna` `template_coordination.md`) omits `status` — a coord memo is a point-in-time correspondence record (it carries `created/updated/author/urgency/expires` instead).

So every conformant fork is penalized for following its own base template: in this vault ~58 `AGENTS.md` + the coord memos were "non-conformant" purely for omitting a field their template never had. Separately, the validator **recurses into nested example/template instances** (`what/docs/examples/**`, `how/templates/template_node_adna_exemplar/**`) — standalone documentation sub-vaults — and folds their files into the parent instance's score.

## Proposed solution

Two refinements (full rationale + the brick/wall/ground framing in [[what/decisions/adr_044_per_class_frontmatter_profiles|ADR-044]]):

1. **§7.2 — per-class profile.** State that `status` is **required for content + session entities** and **optional for `type: directory_index` and `type: coordination`** (the other five base fields remain required for all). Reflect this in §5.5's conformance wording.

2. **Validator behaviour (public image `aDNA-Network/aDNA`).** Carry the reference implementation already in this vault's `what/lattices/tools/adna_validate.py`:
   - `STATUS_OPTIONAL_TYPES = ("directory_index", "coordination")` — drop `status` from the required set for these `type`s.
   - `NESTED_INSTANCE_DIRS = ("what/docs/examples", "how/templates/template_node_adna_exemplar")` — prune nested standalone instances from the triad walk.

## Impact

- Forks stop failing conformance for following the shipped templates; the validator validates the instance at `root`, not the samples it documents.
- Grounded in the standard's own templates — a clarification, not a loosening; no template is contradicted.
- Carry-route: fold at the next `skill_template_release` gate (the public-image validator + §7.2/§5.5 text move together).

## Out of scope

The non-`status` drift of historical session records + coord memos (missing `created/updated/last_edited_by/tags` that their templates DO specify) is genuine drift-from-template, tracked separately as a deferred backfill — not part of this proposal.
