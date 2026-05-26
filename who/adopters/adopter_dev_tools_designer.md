---
type: adopter
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: p5_planned
primary_lens: "actionability + visual_clarity"
secondary_lens: "comprehension"
sample_questions:
  - "Can I discover the right command from `--help` alone, or do I have to read the docs?"
  - "Are error messages diagnostic — do they tell me what's wrong AND propose a fix?"
  - "Is the CLI mode (keystroke-first, like Linear) or mouse-first (like enterprise dashboards)?"
  - "Are configuration options discoverable progressively (smart defaults → flags → config file → env), or all-at-once?"
  - "Does the tool surface its state (current config, last action, dry-run preview), or is it opaque?"
  - "Are install + uninstall reversible without leaving cruft?"
  - "Is there a one-command workflow for the 80% case (the Stripe `stripe login` + `stripe listen` pattern)?"
backgrounds:
  - "Developer-tools designer with 8+ years on CLIs, IDEs, terminal UX, and config systems"
  - "Trained in keyboard-first UX, error-message taxonomy, configuration ergonomics"
  - "Has shipped CLI products with high adoption (Stripe-tier UX or Linear-tier keystroke discipline)"
  - "Reads `--help` output as the primary discovery surface"
priorities:
  - "Discoverable commands — `--help` is a navigation tool, not a manpage dump"
  - "Diagnostic error messages with proposed fixes"
  - "Keyboard-first interaction model where applicable"
  - "Smart defaults > exhaustive flags > config file > env (progressive disclosure)"
  - "DE-prioritizes: GUI-first design for developer audiences, opaque state, irreversible installs"
red_flags:
  - "CLI help that's a markdown dump rather than a navigation surface"
  - "Error messages that surface a Python/Rust traceback without diagnostic translation"
  - "Mouse-required workflows where keyboard would be faster (looking at you, enterprise dashboards)"
  - "Configuration that requires reading the source to discover options"
  - "Tools that don't surface their state (no `status`, no `config show`, no `dry-run`)"
  - "Installs that leave cruft on uninstall, requiring manual cleanup"
tags: [adopter, p5_planned, dev_tools_designer, actionability, visual_clarity, cli_ux, keyboard_first, m5_1_stripe_linear_substrate]
---

# Dev-Tools Designer

> The developer-tools designer who reads `--help` as the primary discovery surface and asks: can I get to the 80% case with one command?

## Background

A developer-tools designer with 8+ years on CLIs, IDEs, terminal UX, and config systems. Trained in keyboard-first UX, error-message taxonomy, configuration ergonomics. Has shipped CLI products with high adoption — Stripe-tier UX (the `stripe login` + `stripe listen` pattern) or Linear-tier keystroke discipline (where the mouse is optional). Reads `--help` output as the primary discovery surface; treats error messages as guidance not just diagnosis.

The Dev-Tools Designer's lens is **discoverability + diagnostic errors + progressive disclosure + keyboard-first**. They notice when `--help` dumps a manpage instead of navigating. They notice when error messages surface a traceback without translation. They notice when smart defaults are missing and every invocation requires 5 flags.

**Empirical load-bearing**: M5.1 §1 documented Stripe + Linear as exemplary in CLI / keyboard-first UX. M5.0 §3 allocates Dev-Tools Designer to D19 primary (Mobile + Responsive v2; treats CLI on small terminals analogous to mobile) + D20 (2 decadals; D20 full bench).

## Goals

- Adopt aDNA only if its CLI / agent invocation surfaces are discoverable + diagnostic
- Confirm the 80% case is a one-command workflow
- Confirm errors propose fixes
- Confirm config is layered (smart defaults → flags → file → env)

## Pain Points

- CLIs that require reading docs before `--help` becomes useful
- Error messages that surface internal state without translation
- Mouse-required developer workflows
- Tools that don't surface their own state

## How They Use aDNA

The Dev-Tools Designer adopts aDNA as a CLI + agent discovery primitive:

- **`how/skills/`** treated as a discoverable skill registry — agents can list, search, invoke without reading source
- **`STATE.md`** is the project's `status` command output in markdown form (state surfaced, not opaque)
- **`CLAUDE.md`** is the project's `--help` for AI agents — single-file discovery
- **`how/sessions/`** is the project's log — diagnostic trail when something goes wrong
- **`what/decisions/`** captures the WHY behind defaults — when a flag changes behavior, the decision record explains the trade-off

Self-reference: this vault's `how/skills/skill_*.md` files demonstrate the pattern — each skill is its own `--help` output, discoverable by both humans and agents without reading source.

## Sample Questions (decadal Q&A)

1. "Can I discover the right command from `--help` alone, or do I have to read the docs?"
2. "Are error messages diagnostic — do they tell me what's wrong AND propose a fix?"
3. "Is the CLI mode (keystroke-first) or mouse-first?"
4. "Are configuration options discoverable progressively, or all-at-once?"
5. "Does the tool surface its state, or is it opaque?"
6. "Are install + uninstall reversible without leaving cruft?"
7. "Is there a one-command workflow for the 80% case?"

## Scoring Considerations

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **actionability** (primary, 6-dim) — anchor 4.50 if `--help` + smart defaults + one-command 80% case all work; deductions for manpage dumps, missing defaults, multi-step setup.
- **visual_clarity** (primary, new secondary) — anchor 4.50 if CLI output is structured (tables, colors-with-fallback, hierarchy); deductions for wall-of-text output, color-only encoding.
- **comprehension** (secondary, 6-dim) — anchor 4.50 if a new user can get to the 80% case in 5 min; deductions for required prior knowledge.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D19** (Mobile + Responsive v2) — primary Q&A (4 personas; CLI-on-small-terminal is responsive design's developer analog)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §1]] — Stripe + Linear CLI UX evidence
- [[../reviewers/reviewer_ux_writer|reviewer_ux_writer]] — partner reviewer on CLI microcopy (NEW M5.2)
- [[adopter_indie_hacker|adopter_indie_hacker]] — primary CLI consumer (NEW M5.2)
- [[adopter_solo_developer|adopter_solo_developer]] — overlapping persona; solo dev is the user, dev-tools designer is the builder
