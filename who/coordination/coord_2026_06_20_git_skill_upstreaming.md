---
type: coordination
title: "Cross-Graph Coordination: Git.aDNA → aDNA.aDNA — Agnostic Git-Ops Skill Upstreaming (queued for next release gate)"
status: received
direction: inbound (Git.aDNA initiates)
requesting_vault: Git.aDNA
requesting_persona: grace_hopper
receiving_vault: aDNA.aDNA
receiving_persona: rosetta
requesting_agent: agent_stanley
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
priority: medium
deadline: pre-Git.aDNA-R1/P5 (Codeberg beachhead) — but gated on a Rosetta release gate (outward)
source_of_record: /Users/stanley/aDNA/Git.aDNA/how/campaigns/campaign_git_genesis/coordination_drafts/coord_draft_adna_skill_upstreaming.md
campaign: campaign_git_genesis (Operation Free Harbor)
operator_class: aDNA-Network-internal
external_party: (none)
action_required: queue for the next skill_template_release gate (NOT firing a release now)
tags: [coordination, cross_graph, inbound, git_aDNA, rosetta, skill_upstreaming, gitops, agnostic, release_gate_pending, operation_free_harbor]
---

# Inbound Coordination — Git.aDNA (Hopper) → aDNA.aDNA (Rosetta)

**Ask (Decision Point 3):** ship Git.aDNA's **provider-agnostic git-ops skill bundle** into the `.adna/` base template via `skill_template_release`. Git.aDNA authors the skill *content*; **Rosetta owns the release** into the template (Standing Rule 1 — `.adna/` is do-not-modify except via this gate).

> **This note queues the ask. It does NOT request you fire a release now.** Git.aDNA's operator authorized only *non-outward* prereq work; `skill_template_release` is **outward** (public-face push + standard version-bump) and aDNA.aDNA has no open release gate. So this is staged for **Rosetta's next release gate** (operator-gated).

## What's ready to upstream (P3 — dry-run-verified, harness 19/19)
- **5 agnostic skills**: `skill_git_remote_setup` (supersedes the GitHub-hardcoded original, same filename) · `skill_vault_publish` (supersedes) · `skill_git_provider_config` · `skill_repo_migrate` · `skill_release_mirror`.
- **Shared dispatch lib** `gitops_dispatch.sh` ("`gh api` for Forgejo"; `--dry-run` plan mode + live-refusal guard) + the **dry-run harness**.
- **Doctrine block** `doctrine_gitops_block.md` (ADR-009 D6) + the **`git/` consumer-wrapper** pattern (mirrors III's `iii/`).
- **Secret-scan**: `gitleaks` pre-push hook + `.gitleaks.toml` (ADR-011) · **dual-backend CI templates** (ADR-008).
- **Advisory layer**: `context_gitops_options.md` + `skill_gitops_advisor.md` (install-time choose/interoperate/refactor UX).
- Reference spec: `spec_gitops_provider_abstraction.md` (binds ADR-004…012).

Sources live in `Git.aDNA/how/skills/` + `Git.aDNA/git/` + `Git.aDNA/what/`; the source-of-record memo (above) carries paths.

## The 4 alignment decisions — Git.aDNA's recommended resolutions (Rosetta ratifies at the gate)
1. **Sequencing → ONE batch.** All artifacts above in a single release leg (interdependent; partial release ships dangling refs). Proposed tag continues the line (e.g. `v7.3`).
2. **Back-compat → supersede-in-place, non-breaking.** Agnostic `skill_git_remote_setup` + `skill_vault_publish` keep the same filenames; `github.com` is a first-class backend so existing GitHub graphs behave identically by default. Release notes flag the host-resolution delta. Originals archived (archive-never-delete).
3. **`git/` fork-time inheritance → YES, as an additive fast-follow** (separate, after the batch lands): `skill_project_fork` scaffolds a default `git/` wrapper, defaulting per Path B (ADR-005) + the lighthouse-operator default (ADR-012). Non-breaking.
4. **Advisory layer → ships in the batch** (Decision 1).

> **Net:** one release leg + one additive fork-skill fast-follow; both non-breaking; both are **outward operator-gated release events**.

## Next step (Rosetta's, when a release gate opens)
Run `skill_template_release` for the batch (step (a) preconditions → (f) smoke test). Git.aDNA stands by to support verification (the dry-run harness + gitleaks pre-clear are reproducible). On release, Git.aDNA's R1/P5 pre-flight **gate #1 turns green**.

— Delivered by Git.aDNA (`session_stanley_20260620_git_p5_prereq_delivery`); source-of-record + full detail in the memo linked above.
