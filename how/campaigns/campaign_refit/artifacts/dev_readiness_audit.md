---
type: audit
title: "Refit M6 — contributor-pathway readiness audit (3 surfaces)"
owner: stanley
persona: rosetta
status: complete
campaign_id: campaign_refit
campaign_phase: 4
mission_id: mission_refit_6_dev_readiness
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [audit, dev_readiness, contributing, contributor_pathway, refit, m6]
---

# Contributor-pathway readiness audit

**One sentence:** a would-be contributor arriving at the aDNA repos or the website should find a clear answer to
"how do I report a bug / propose a change to the standard / contribute a vault or pattern?" — this audit checks
the three surfaces where they land, marks each **present / gap / filled**, and records the E2 stretch decision.

> **Dual-audience note (SO-7):** for a developer, this is the "ready for development" evidence row — what exists,
> what was broken, what M6 fixed. For a newcomer: aDNA is a standard *for* agentic context, and it is itself
> built the same open, agent-plus-human way it describes — so "can someone contribute to it, and do they know
> how?" is a real quality bar, not a formality. **Self-reference (SO-8):** the mechanism a contributor uses —
> `skill_upstream_contribution` → an `idea_upstream_` backlog file → a ratified release — is the exact loop this
> campaign ran (M5's roadmap is a pile of `idea_upstream_` files turned into a chartered release); M6 makes that
> loop legible to outsiders.

## Method

Read-only exploration of both public repos (`aDNA-Network/aDNA` image · `aDNA-Network/aDNA.aDNA` dev vault) and
the live site sources under `site/src/pages/`. Verdict per surface; fills applied dev-vault-side (live on the G3
push), image-side **staged** ([[image_side_dev_readiness_fills]]), honoring Refit hard-constraints 3/5
(no normative/image surface ships in-campaign).

## Surface 1 — `aDNA-Network/aDNA.aDNA` (the dev vault; GitHub-public)

**Verdict: PRESENT (complete apparatus) with 3 self-created defects → ALL FILLED.**

The pathway is genuinely complete: `CONTRIBUTING.md` (bug/improve/PR flow + Agent Contribution Mode),
`who/governance/VISION.md` (the participation ladder), `governance_contribution_standards.md`,
`who/community/community_processes.md`, an operational ADR process (`what/decisions/`, 41 ADRs), and the
`skill_upstream_contribution` recipe. But it made three promises it did not keep:

| # | Defect | Fix (dev-vault-side, live on G3 push) | Status |
|---|--------|----------------------------------------|--------|
| 1 | `CONTRIBUTING.md` + `VISION.md` promise a `CODE_OF_CONDUCT.md` that did not exist | Authored `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1) at the vault root | ✅ FILLED |
| 2 | `CONTRIBUTING.md` links a `bug_report.md` issue template; no `.github/ISSUE_TEMPLATE/` existed (404) | Added `.github/ISSUE_TEMPLATE/{bug_report.md, change_proposal.md, config.yml}` — the `change_proposal` template is the "propose a change to the standard" intake, mirroring the `skill_upstream_contribution` flow | ✅ FILLED |
| 3 | `skill_upstream_contribution.md` used the stale repo `LatticeProtocol/Agentic-DNA` (a gate-15 DEAD pattern) while CONTRIBUTING used the canonical `aDNA-Network/aDNA` | Fixed the skill's `upstream_target` + `gh issue create --repo` to `aDNA-Network/aDNA` | ✅ FILLED |

*Out of M6 scope (noted, not swept):* other stale `LatticeProtocol/Agentic-DNA` refs survive in ~9 historical/
quest/mission/CHANGELOG files — these are the province of the deferred [[idea_vault_wide_currency_sweep]] /
[[idea_currency_sweep_flagged_followons]], not the contributor pathway. gate-15 checks only the built site, which
is clean.

## Surface 2 — `aDNA-Network/aDNA` (the public clone-and-run image)

**Verdict: GAP (materially thinner than the dev vault) → STAGED for the next release.**

The image is what an outside contributor clones first, yet its shipped `CONTRIBUTING.md` (identical to the dev
vault's) points at a **missing** `skill_upstream_contribution.md`, a **missing** `.github/ISSUE_TEMPLATE/`, a
**missing** `CODE_OF_CONDUCT.md`, and governance/community docs (`who/community/`, most of `who/governance/`) that
were **never released into the image**. Its README barely mentions contributing (a badge + one bullet).

Because image-side edits are prohibited in-campaign (hard-constraint 5), the fills are **staged DE-LINKed** in
[[image_side_dev_readiness_fills]] as a 5-item ship-set (CoC · issue templates · the skill · a README Contributing
section · minimal ladder-referenced governance/community docs) — a **candidate rider for
[[campaign_v8_9_release]]** (or its own small release item). The release cautions (DE-LINK the private wikilinks
before folding; resolve the CoC reporting-contact `#needs-human`) are recorded there.

## Surface 3 — the site (`/get-started`, `/community`, `/commons`)

**Verdict: GAP (contributor dead-end at the primary entry point) → FILLED (dev-side; ships at G3 deploy).**

The concrete "how do I propose a change?" answer existed only one click deep, in
`community-contribution-standards.mdx`. The two surfaces a developer actually reaches were weak:

| Surface | Before | Fill | Status |
|---------|--------|------|--------|
| `get-started.astro` | **Hard dead-end** — finishes onboarding, points only at learn/registry links; nothing says "now here's how to contribute" | Added a "Ready to shape it" next-step linking `/community/community-contribution-standards/` | ✅ FILLED |
| `community/index.astro` | Closing CTA lead was generic ("issues, discussions … run through the public repository") | Sharpened to name the concrete flow now that issue templates exist ("report a bug or propose a change through the public repository's issue templates; questions start in Discussions") | ✅ FILLED |
| `commons.astro` | Already healthy — its *Contribute* path routes to `/community/` + the standards doc | (no change) | ✅ PRESENT |

**Honesty (Movement-Skeptic, hard-constraint 4):** both fills add only real, shippable process — no invented
community, no fabricated counts; the "what you won't find here: member counts…" honesty band on `/community` is
untouched. The copy passes gate-24 (clean excerpts), gate-15 (canonical `aDNA-Network/aDNA` link — never the
dev-vault repo), gate-13 (nav). Site rides `npm run build` + `npm run test:gates`; deploy is the G3 election.

## E2 (stretch, per DP8) — graph-edge enrichment: **CUT + ROUTED**

**Decision: cut this session (operator ruling), routed to [[idea_upstream_vault_card_edge_population]].**

E2 proposed enriching the vault graph (14 edges / 73 vaults) by fleet-walking `federation_ref` blocks. It is
*buildable* only because the sibling vaults are checked out locally (~87 `federation_wrapper` files; ~150+ edges
derivable — Git.aDNA 47 · III.aDNA 30 · WebForge 23 · …). It was cut because that fleet-walk would:
(1) **10× the graph density** into a mechanical hairball; (2) **bypass the deliberate honesty-curated
`network_edges.yaml` overlay** (ADR-033 — every edge maps to a governance statement); (3) **amplify the existing
slug-normalization inconsistency**; and (4) **not run in CI/Vercel** (siblings + Home absent there). The clean
path already exists as a deferred idea: migrate the curated relationships into **Home.aDNA vault-card fields**,
let `build_vaults_data.mjs` derive edges from real card data, and retire the overlay (ADR-033's stated end-state).
E2's evaluation + the fleet-walk-vs-curated-cards trade-off are recorded on that idea (owner Hestia/Home + Rosetta;
trigger = the Hearthstone lane). **A documented, deliberate non-choice — not an oversight.**

## Result

| Surface / objective | Verdict |
|---------------------|---------|
| Dev vault (Surface 1) | **FILLED** — 3 defects closed dev-side (CoC · issue templates · repo-name) |
| Public image (Surface 2) | **STAGED** — 5-item ship-set for the next release ([[image_side_dev_readiness_fills]]) |
| Site (Surface 3) | **FILLED** — get-started dead-end + community CTA; gates green; deploy = G3 |
| E2 graph edges | **CUT + ROUTED** — to [[idea_upstream_vault_card_edge_population]] with reasoning |

The "ready for development" bar is met dev-side and site-side; the image gap is the one carry-forward, and it is
chartered (not lost) as a release rider. Provenance: [[mission_refit_6_dev_readiness]] · [[campaign_refit]].
