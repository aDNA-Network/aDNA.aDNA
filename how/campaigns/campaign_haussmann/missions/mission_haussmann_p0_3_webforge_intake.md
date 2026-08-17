---
plan_id: mission_haussmann_p0_3_webforge_intake
type: plan
title: "P0.3 — WebForge federation intake: the site becomes a registered consumer, never a fork"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: active     # P0 wave opened 2026-08-16 (session haussmann_p0_wave; operator-ordered)
mission_class: integration
executor_tier: sonnet   # wrapper + pin + register mechanics; the graduation ruling is the one judgment point
token_budget_estimated: "~80–130 kT in 1 session: wrapper instantiation + vault-manifest pin + intake memo + craft-floor graduation ruling prep (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["webforge_pattern_register.md P1–P15 + §3 accelerators", "dependency_map (G1 straggler gap)", "WebForge provider contract v1.2.0 §3/§5"]
vitruvius_dimensions: [D5, D12]
decade_theme: craft
webforge_patterns: [P11, P1]
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p4_1_token_pipeline, mission_haussmann_p4_2_craft_floor]
acceptance_criteria:
  - "how/federation/webforge/ exists with CLAUDE.md + vault-manifest pin (source_vault/version/pinned_at_commit/pinned_at) per contract §5 (ADR-045 placement)"
  - "Intake ask staged to Vitruvius per contract §3 path 2 (requester + surface class + audience + data sources + deploy intent); §3-2a operator-live rider applies; single-build collision check honored"
  - "The offered craft-floor graduation (Tier 2) has a written Rosetta ruling (accept / accept-with-scope / defer + why)"
  - "branding.json + voice-mapping seeds staged from ADR-032 register (full adoption lands P4.1)"
verification_method: "wrapper files on disk + memo staged + WebForge register-row ask included; no site/ changes"
human_gate: false
tags: [plan, haussmann, p0, webforge, federation]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The directive's consumer-not-fork rule made structural.

## Why this mission exists

aDNA.aDNA is an **unregistered straggler**: the site consumes zero WebForge patterns and no `how/federation/webforge/` wrapper exists `[D dependency_map G1]` — the exact parallel-truth class WebForge flags at LatticeProtocol. Meanwhile WebForge has already **offered this vault the craft-floor graduation (Tier 2)** `[D pattern register §3.1]`, its `lock_coverage.yaml` carries a `site` surface row, and its `marketplace` reference tenant is literally "aDNA Registry". The intake unlocks P4 (tokens, craft floor) and legitimizes every pattern borrow.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Read contract §3/§5 + `template_webforge_consumer_wrapper.md` (in WebForge, read-only) | — | — |
| O1 | Instantiate `how/federation/webforge/` (CLAUDE.md + vault-manifest pin at current WebForge commit + branding.json/voice seeds from ADR-032) | wrapper | — |
| O2 | Stage the §3 ask memo to Vitruvius: surface class (bespoke 202-page site consuming patterns, not an archetype re-platform), audience, data sources (vaults.json projection), deploy intent (Vercel adna-docs); request register row + clarify whose `site` the lock-coverage row denotes | memo (joins the staged Vitruvius memo) | — |
| O3 | Rosetta ruling on the offered craft-floor graduation; record in wrapper CLAUDE.md | ruling | — |
| O4 | AAR | AAR | — |

## Constraints

ADR-045: wrapper under `how/federation/`, never graph-root. Contract §11 anti-patterns (no copied code, no wrapper-skipping). Extend-never-fork. No site/ changes this mission.

## Definition of done

The wrapper exists with a valid pin; the ask is staged; the graduation is ruled; P4 missions can cite pattern IDs through the wrapper.

## Session opening prompt

> Open this mission + campaign CLAUDE.md. Execute O0–O4 in one session. WebForge is read-only to you; everything you owe it goes in the staged memo.

## Progress

**2026-08-16 (session execution, agent_rosetta):**

- **O0** — read `WebForge.aDNA/what/artifacts/spec_webforge_provider_contract.md` (v1.2.0, §3/§5) and
  `template_webforge_consumer_wrapper.md` (WebForge, read-only); cross-read `adr_032_brand_register_pivot.md`,
  `webforge_pattern_register.md`, `context_webforge_patterns.md`, the delivered intake memo, ADR-048,
  `front_page_doctrine.md`, `mission_haussmann_p4_2_craft_floor.md`, `mission_haussmann_p0_2_deploy_hardening.md`,
  and `mission_graduation_sweep.md` (for the Tier-2 RLHF-graduation definition, disambiguated from ADR-015's
  Tier A/B surface classes).
- **O1** — instantiated `how/federation/webforge/`:
  - `CLAUDE.md` — identity, standing orders, patterns-consumed (P13, P11) + patterns-to-author (A1–A6) tables,
    a "Pending with Vitruvius" section, and a pointer to the graduation ruling.
  - `what/context/branding.json` — canonical copy per contract §11 anti-pattern #2. Seeded from the live
    `site/branding.json` (found already present, ADR-032-accurate, cross-verified against
    `site/src/styles/branding.css` + `tokens.css` — no conflicts). Finding: `site/branding.json` predates
    this wrapper — exactly the "site/-only branding" anti-pattern this file now structurally fixes;
    reconciling `site/` to consume the wrapper copy is unstarted (candidate: P4.1), and out of scope here
    (no `site/` changes this mission).
  - `what/context/adna_voice_mapping.yaml` — structural seed (global register/dial/reading-level
    baseline-vs-target/anti-slop keywords, all grounded in this vault's own `writing-guidelines.mdx` +
    `front_page_doctrine.md` §4), four representative page rows marked `honest-absent` pending P0.1/P4.5
    content. Both `branding.json` and the voice-mapping YAML validated (json.tool / yaml.safe_load) clean.
  - Federation pin (vault-manifest form): `source_vault: WebForge.aDNA` · `version: 0.1.0-genesis` ·
    `pinned_at_commit: 6096157ab5d79d95a54e6def3dfd1091bc07facc` · `pinned_at: 2026-08-16`. Verified against
    WebForge's live `MANIFEST.md` (`version`) and `git -C ~/aDNA/WebForge.aDNA rev-parse HEAD` (exact match —
    WebForge's HEAD at read time, commit `kw13_e6_scoped_widen C6+C7 CLOSE`).
- **O2** — confirmed already satisfied going into this session: the §3 path-2 ask memo was delivered
  2026-08-16 (`who/coordination/coord_2026_08_16_rosetta_to_vitruvius_haussmann_intake_deploy_patterns.md`,
  `status: dispatched`) — carries requester/surface-class/audience/data-source/deploy-intent, the `site`-row
  clarification, and the graduation-formalization ask. No new memo authored this session; the wrapper
  `CLAUDE.md` "Pending with Vitruvius" section now tracks its open items (classification reply + register
  row + the two clarifications, still unanswered as of this entry).
- **O3** — drafted the graduation ruling at `../artifacts/p0_3/graduation_ruling_draft.md`: **ACCEPT
  Tier-2, with-scope** — adopt `doctrine_web_surface_craft_floor.md` as this vault's craft floor by
  reference now; defer the concrete 57-lock coverage declaration to mission P4.2. Six acceptance
  conditions recorded (reference-not-copy, no gate weakening, the `site`-row ambiguity resolves before
  P4.2, honest gap-dispositioning, ratchet-only inheritance, Momus-independence carries). **Left unsigned**
  per instruction — the orchestrator/operator signs.
- **Not done**: O4 (AAR) — this Progress entry is not a mission close; mission `status:` line untouched
  (still `active`, P0 wave). No `site/` files touched; no WebForge.aDNA files touched (read-only honored).

**What remains**: Vitruvius's classification reply + consumer-register row; the two clarifications
(`site`-row identity; graduation formalization needs); the ruling's operator/orchestrator signature; full
voice-mapping + branding content adoption at P4.1; the P4.2 coverage declaration itself.

## AAR (SO#5)

*(before completed)*
