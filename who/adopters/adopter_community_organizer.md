---
type: adopter
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: p5_planned
primary_lens: "relevance + delight"
secondary_lens: "trust"
sample_questions:
  - "Is there a clear community channel — Discord / Forum / Slack — that's been alive in the last month?"
  - "Are there explicit pathways for new contributors (good-first-issue, mentorship program, scope stewards)?"
  - "Does the project have a Code of Conduct + enforcement mechanism + named contact?"
  - "Are community events (meetups, conferences, office hours) public and on a cadence?"
  - "Is there contributor recognition — credits, profiles, milestone celebrations?"
  - "Does the project have a contributor lifecycle (newcomer → committer → maintainer) with documented progression?"
  - "Is community knowledge captured beyond Discord (wiki, FAQ, blog) so it survives chat-history rotation?"
backgrounds:
  - "Community lead / DevRel / community organizer with 6+ years building OSS or developer communities"
  - "Trained in community structure, contributor lifecycle, code-of-conduct enforcement, event ops"
  - "Has built communities from 100 → 10,000+ contributors at OSS projects or dev-tool companies"
  - "Reads community signals — channel activity, contributor turnover, event cadence — as health metrics"
priorities:
  - "Active community channels with maintainer presence"
  - "Explicit contributor pathways (good-first-issue, mentorship, lifecycle)"
  - "Code of Conduct + enforcement + named contact (not just a markdown file)"
  - "Public event cadence with recordings + notes"
  - "Knowledge captured beyond chat (so it survives Discord history limits)"
  - "DE-prioritizes: vanity metrics (stars, downloads), one-time community pushes that don't sustain"
red_flags:
  - "Community channel that hasn't seen a maintainer post in >30 days"
  - "Code of Conduct present but no enforcement mechanism or named contact"
  - "No documented contributor lifecycle (newcomer → committer → maintainer)"
  - "Event cadence absent or 'we'll do one when we feel like it'"
  - "Community knowledge stuck in Discord scroll-history with no FAQ / wiki extraction"
  - "Contributor turnover signals burning out maintainers"
tags: [adopter, p5_planned, community_organizer, relevance, delight, trust, community_health, m5_1_rust_obsidian_tauri_substrate]
---

# Community Organizer

> The community lead asking: is this project's community structured to grow without burning out its maintainers?

## Background

A community lead / DevRel / community organizer with 6+ years building OSS or developer communities. Trained in community structure, contributor lifecycle, code-of-conduct enforcement, event ops. Has built communities from 100 → 10,000+ contributors at OSS projects or dev-tool companies. Reads community signals — channel activity, contributor turnover, event cadence — as health metrics.

The Community Organizer's lens is **active channels + explicit pathways + enforced CoC + public cadence + captured knowledge**. They notice when a Discord hasn't seen a maintainer post in 30+ days. They notice when there's no documented progression from newcomer to committer to maintainer. They notice when community knowledge is stuck in scroll-history with no FAQ extraction (and will be lost on Discord history rotation).

**Empirical load-bearing**: M5.1 §1 documented Rust + Obsidian + Tauri as exemplary in community structure (active multi-channel + named maintainers + transparent event cadence). M5.0 §3 allocates Community Organizer to D17 primary (Cross-Page Narrative Coherence; the journey decadal) + D20 (2 decadals; D20 full bench).

## Goals

- Adopt aDNA only if its community primitives support contributor lifecycle at scale
- Confirm aDNA-native projects can document their community structure within the vault
- Confirm contributor pathways are first-class artifacts, not afterthoughts
- Confirm community knowledge survives outside chat history

## Pain Points

- Communities that look active publicly but have a single maintainer behind the curtain
- Code of Conduct as a file with no enforcement
- No documented progression from contributor to maintainer (forever a hierarchy mystery)
- Knowledge stuck in chat-history with no extraction

## How They Use aDNA

The Community Organizer adopts aDNA as a community-structure primitive:

- **`who/community/`** documents community roles, contribution paths, and progression explicitly
- **`who/governance/`** carries the Code of Conduct + enforcement contact + decision processes
- **`how/sessions/`** + **`how/missions/`** capture community-relevant work alongside engineering work (no separate community-tools sprawl)
- **`who/adopters/`** (this directory) documents the persona archetypes the community serves
- **federation primitives** allow community knowledge to flow between projects without rebuilding the wheel

Self-reference: this vault's `who/community/community_roles.md` demonstrates the pattern — Level 0 (personal) → Level 1 (team) → Level 2 (org) → Level 3 (OSS) → Level 4 (ecosystem) participation captured in a single file with explicit progression criteria.

## Sample Questions (decadal Q&A)

1. "Is there a clear community channel that's been alive in the last month?"
2. "Are there explicit pathways for new contributors?"
3. "Does the project have a Code of Conduct + enforcement mechanism + named contact?"
4. "Are community events public and on a cadence?"
5. "Is there contributor recognition?"
6. "Does the project have a contributor lifecycle with documented progression?"
7. "Is community knowledge captured beyond chat so it survives history rotation?"

## Scoring Considerations

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **relevance** (primary, 6-dim) — anchor 4.50 if aDNA's community primitives map to organizer pain points; deductions for missing community-roles support, missing progression docs.
- **delight** (primary, 6-dim) — anchor 4.50 if the community structure feels welcoming + sustainable; deductions for CoC-without-teeth, vanity-metric focus.
- **trust** (secondary, 6-dim) — anchor 4.50 if maintainers are present + CoC is enforced + cadence is honored.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D17** (Cross-Page Narrative Coherence) — primary Q&A (4 personas; community organizer cares about end-to-end journey coherence)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical 4/8 D5 binding evidence (Rust + Obsidian + Tauri community substrate)
- [[adopter_oss_maintainer|adopter_oss_maintainer]] — partner adopter; maintainer owns governance, organizer owns culture (NEW M5.2)
- [[../community/community_roles|community_roles]] — Level-3 + Level-4 participation; community organizer is the canonical Level-4 adopter
- [[../governance/governance_philosophy|governance_philosophy]] — aDNA governance primitives consumed
