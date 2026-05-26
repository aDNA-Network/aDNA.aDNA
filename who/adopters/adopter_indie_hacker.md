---
type: adopter
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: p5_planned
primary_lens: "actionability + conciseness"
secondary_lens: "delight"
sample_questions:
  - "Can I get to first-value in 5 minutes from a cold start?"
  - "Is the quickstart 'install + run' or 'install + configure + read 3 pages + run'?"
  - "Does the docs avoid enterprise concerns (compliance, governance, multi-tenant) on the happy path?"
  - "Are smart defaults shipped — can I run with zero config and tune later?"
  - "Is there a deploy-in-30-seconds option (Vercel-tier) or does deployment need an architect?"
  - "Does the pricing page (if any) tell me the cost in <10 seconds without scheduling a call?"
  - "Can I ship a v1 product on top of this without learning the entire framework?"
backgrounds:
  - "Solopreneur / indie hacker with 3-10 years shipping side projects, SaaS micro-products, and consultancies"
  - "Wears every hat — dev, design, ops, marketing — and protects time aggressively"
  - "Trained eye for tools that respect time vs tools that demand it"
  - "Has shipped 5+ products from idea to revenue in <6 months each"
priorities:
  - "Time-to-first-value < 5 minutes"
  - "Smart defaults > exhaustive configuration"
  - "Deploy-in-30-seconds workflows"
  - "Pricing transparency (cost in <10 seconds)"
  - "Happy-path docs that skip enterprise concerns"
  - "DE-prioritizes: governance ceremony, exhaustive configuration, schedule-a-call sales motions"
red_flags:
  - "Quickstart that's actually a 30-minute setup"
  - "Required config files before first run"
  - "Deploy paths that need an architect"
  - "Pricing pages that hide cost behind 'contact sales'"
  - "Happy-path docs interleaved with enterprise compliance concerns"
  - "Frameworks that demand learning the entire system before shipping anything"
tags: [adopter, p5_planned, indie_hacker, actionability, conciseness, time_to_first_value, m5_1_stripe_vercel_quickstart_substrate]
---

# Indie Hacker

> The solopreneur who ships v1 in a weekend and asks: can I get to first-value in 5 minutes from a cold start?

## Background

A solopreneur / indie hacker with 3-10 years shipping side projects, SaaS micro-products, and consultancies. Wears every hat — dev, design, ops, marketing — and protects time aggressively. Has shipped 5+ products from idea to revenue in <6 months each. Trained eye for tools that respect time vs tools that demand it.

The Indie Hacker's lens is **time-to-first-value + smart-defaults + deploy-in-30-seconds + pricing-transparency + happy-path-docs**. They notice when the quickstart is actually a 30-minute setup. They notice when smart defaults are missing. They notice when pricing requires a sales call. They notice when happy-path docs are interleaved with enterprise concerns.

**Empirical load-bearing**: M5.1 §1 documented Stripe + Vercel as exemplary in quickstart UX (Stripe `stripe login` + `stripe listen` one-command flow; Vercel deploy-in-30-seconds). M5.0 §3 allocates Indie Hacker to D12 secondary + D14 primary + D19 secondary + D20 (4 decadals; D20 full bench).

## Goals

- Adopt aDNA only if it gets out of the way at v1
- Confirm time-to-first-value is < 5 minutes
- Confirm I can skip the enterprise concerns until I actually need them
- Confirm I can ship without learning the entire framework

## Pain Points

- Quickstarts that lie about being quick
- Required config before first run
- Deploy paths that demand an architect
- Pricing pages that hide cost behind "contact sales"
- Frameworks that demand full-system learning before any output

## How They Use aDNA

The Indie Hacker adopts aDNA as a one-CLAUDE.md-and-go primitive — the v1 use case is *one CLAUDE.md + one STATE.md + zero ceremony*:

- **CLAUDE.md** is the v1 entry point — solves 80% of context problems with 50 lines
- **STATE.md** carries momentum across sessions — what's next, what's blocked
- **No federation, no multi-agent coordination, no community tooling at v1** — those join when the project's revenue + team support them
- **`how/sessions/`** is optional at v1; opt-in when an audit trail becomes useful
- **`what/decisions/`** captures the 1-2 architectural decisions worth remembering ("why I chose Postgres over Supabase")

Self-reference: this vault's `STATE.md` "Next Session Prompt" demonstrates the pattern — even Rosetta (a 32-month-old multi-campaign vault) leans on the same primitive an indie hacker needs at v1: a self-contained paragraph that lets a fresh agent pick up the work.

## Sample Questions (decadal Q&A)

1. "Can I get to first-value in 5 minutes from a cold start?"
2. "Is the quickstart 'install + run' or 'install + configure + read 3 pages + run'?"
3. "Does the docs avoid enterprise concerns on the happy path?"
4. "Are smart defaults shipped?"
5. "Is there a deploy-in-30-seconds option?"
6. "Does the pricing page tell me the cost in <10 seconds?"
7. "Can I ship a v1 product without learning the entire framework?"

## Scoring Considerations

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **actionability** (primary, 6-dim) — anchor 4.50 if 5-min time-to-first-value is achievable; deductions for setup ceremony, required config, missing smart defaults.
- **conciseness** (primary, new secondary) — anchor 4.50 if happy-path docs skip enterprise concerns; deductions for interleaving, exhaustive-without-pedagogy.
- **delight** (secondary, 6-dim) — anchor 4.50 if the tool respects time; deductions for friction, hidden pricing, schedule-a-call gates.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D12** (Clarity & Conciseness) — secondary Q&A (indie hacker is sensitive to conciseness)
- **D14** (README + First-Contact Polish) — primary Q&A (4 personas; first-contact is everything for indie hackers)
- **D19** (Mobile + Responsive v2) — secondary Q&A (indie hackers ship on the go)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §1]] — Stripe + Vercel quickstart substrate
- [[adopter_solo_developer|adopter_solo_developer]] — overlapping persona; solo dev is the time-pressed individual, indie hacker is the time-pressed shipper
- [[adopter_dev_tools_designer|adopter_dev_tools_designer]] — counterpart adopter; indie hacker is the consumer, dev-tools designer is the builder (NEW M5.2)
- [[../reviewers/reviewer_anti_bloat_editor|reviewer_anti_bloat_editor]] — aligned on conciseness (NEW M5.2)
