---
type: adopter
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: p5_planned
primary_lens: "trust + relevance + findability"
secondary_lens: "comprehension"
sample_questions:
  - "Is there a named security contact, or am I emailing 'security@<project>' into a void?"
  - "Does the release cadence have a predictable rhythm (e.g., Rust's 6-week train), or do versions ship when-they-ship?"
  - "Is the governance model transparent — RFCs, public meetings, decision logs — or is it a black box?"
  - "Are there contributor pathways with explicit entry points (good-first-issue, mentorship, scope-stewards)?"
  - "Is the license SPDX-identified and consistent across the repo (no surprise GPL files in an MIT project)?"
  - "Are stability promises backed by an enforcement mechanism (Rust editions; SemVer with deprecation policy)?"
  - "Can I find an active community channel that responds within reasonable time?"
backgrounds:
  - "OSS project lead with 5-15 years maintaining medium-to-large open-source projects"
  - "Responsible for community moderation, release cadence, contributor experience, security disclosure"
  - "Often unpaid or under-resourced; protects time aggressively"
  - "Trained ear for what 'sustainable governance' looks like vs theater"
priorities:
  - "Predictable release cadence + clear stability contract"
  - "Transparent governance — RFCs, public decision logs, named maintainers"
  - "Named security contacts + reasonable disclosure timeline"
  - "Contributor pathways that scale (mentorship, scope-stewards, not maintainer-as-bottleneck)"
  - "DE-prioritizes: novelty for its own sake, enterprise features that need maintainer babysitting"
red_flags:
  - "Security contact is 'security@' alias with no named human"
  - "Governance described as 'we decide together' without a documented mechanism"
  - "Release cadence absent or 'when ready' with no transparency about why"
  - "License inconsistency across repo or 'MIT/Apache/GPL — pick one' ambiguity"
  - "Stability promises without enforcement (a 1.0 release that quietly broke 2 months later)"
  - "Active community channel that hasn't seen a maintainer post in 6 months"
tags: [adopter, p5_planned, oss_maintainer, trust, relevance, findability, governance, m5_1_5_of_8_d5_bindings, rust_tauri_governance_substrate]
---

# OSS Maintainer

> The project lead asking: is this thing's governance sustainable enough that I can build my project's roadmap on top of it?

## Background

An OSS project lead with 5-15 years maintaining medium-to-large open-source projects. Responsible for community moderation, release cadence, contributor experience, security disclosure, and the constant work of keeping the project from becoming a personal-burnout vector. Often unpaid or under-resourced; protects time aggressively. Has trained ear for what *sustainable governance* looks like (Rust + Tauri + Astro) vs theater (PR-driven enterprise positioning without backing community structure).

The OSS Maintainer's lens is **trust + sustainability + transparency**. They look for the named security contact (not the `security@` alias). They look for the predictable release cadence (Rust's 6-week train; Tauri's documented schedule). They look for the public RFC process. They look for the Commons Conservancy or equivalent fiscal-sponsor structure that signals "this project will outlive its founders".

**Empirical load-bearing**: M5.1 §4 binds OSS Maintainer to **5 of 8** D5 (Community) dossiers — strongest empirical signal alongside Information Architect's D4 bindings. M5.1 §1 documented Rust + Tauri governance as exemplary; M5.0 §3 allocates OSS Maintainer to D14 primary + D20 (2 decadals; D20 is full bench).

## Goals

- Adopt aDNA only if its governance signals long-term sustainability
- Find evidence of named maintainers, transparent decisions, predictable cadence
- Confirm the license is unambiguous and the contributor pathway scales
- Confirm there's a recovery mechanism if a maintainer steps away

## Pain Points

- Adopting projects with charismatic-leader governance that collapses when the leader burns out
- License ambiguity that creates legal exposure for downstream consumers
- "Move fast" projects that break stability promises without enforcement
- Communities that look active in public but have a single maintainer behind the curtain

## How They Use aDNA

The OSS Maintainer adopts aDNA as a project-governance primitive — turning project knowledge into something the *next* maintainer can pick up:

- **CLAUDE.md + STATE.md** encode the project's identity and current state in a format any agent (and any human) can read
- **`what/decisions/`** captures architectural decisions with rationale — the durable record that survives maintainer turnover
- **`how/sessions/`** + **`how/missions/`** create the audit trail that demonstrates "we know what we're doing" to security reviewers and downstream consumers
- **`who/governance/`** documents the decision-making process explicitly
- **federation primitives** allow the project's downstream consumers to read upstream changes via aDNA-native channels

Self-reference: this vault's own `who/governance/` and `what/decisions/` directories demonstrate the pattern — Rosetta + 26 ADRs + 19+ ratified amendments captured in a way that the next maintainer can read end-to-end without a calendar of meetings.

## Sample Questions (decadal Q&A)

1. "Is there a named security contact, or am I emailing 'security@' into a void?"
2. "Does the release cadence have a predictable rhythm (e.g., Rust's 6-week train), or do versions ship when-they-ship?"
3. "Is the governance model transparent — RFCs, public meetings, decision logs — or is it a black box?"
4. "Are there contributor pathways with explicit entry points?"
5. "Is the license SPDX-identified and consistent across the repo?"
6. "Are stability promises backed by an enforcement mechanism?"
7. "Can I find an active community channel that responds within reasonable time?"

## Scoring Considerations

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **trust** (primary, 6-dim) — anchor 4.50 if governance + cadence + security all signal sustainability; deductions for charismatic-leader risk, license ambiguity, broken stability promises.
- **relevance** (primary, 6-dim) — anchor 4.50 if aDNA's governance primitives map to OSS maintainer pain points; deductions for missing audit-trail support, missing decision-record format.
- **findability** (primary, 6-dim) — anchor 4.50 if governance docs are surfaced (not buried); deductions for security contact only in a CODE_OF_CONDUCT.md footer.
- **comprehension** (secondary) — anchor 4.50 if a new contributor can read the governance docs and act; deductions for governance-as-philosophy without operational detail.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D14** (README + First-Contact Polish) — primary Q&A (4 personas; OSS maintainer first-contact is governance-heavy)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical 5/8 D5 binding evidence (Rust + Tauri governance substrate)
- [[adopter_community_organizer|adopter_community_organizer]] — partner adopter; OSS maintainer owns governance, organizer owns culture (NEW M5.2)
- [[adopter_enterprise_architect|adopter_enterprise_architect]] — counterpart adopter; OSS maintainer is the supply side, enterprise architect is the demand side (NEW M5.2)
- [[../community/community_roles|community_roles]] — Level-3+ participation; OSS maintainer is the canonical Level-4 adopter
- [[../governance/governance_philosophy|governance_philosophy]] — aDNA governance primitives consumed by this persona
