---
campaign_id: campaign_operation_adna
type: campaign
subtype: program        # umbrella — orchestrates child campaigns; re-implements none
title: "Operation aDNA — make aDNA real, adoptable, and credible to the public"
owner: stanley
persona: rosetta        # program steward; Berthier-coordinated (chief-of-staff)
status: active
phase_count: 0          # the program holds no phases of its own; children carry phases + gates
mission_count: 0        # the program authors no missions; children own their mission trees
created: 2026-06-18
updated: 2026-06-19
last_edited_by: agent_rosetta
orchestrates:
  - campaign_website_adna                  # Track A — Prove it real (P0✅/P1✅ → P2 design active)
  - campaign_hearthstone                   # Track B — Make it real (P0✅/P1✅ → P2 ready → P5 release)
  - campaign_adna_serious_tool_readiness   # Track C — The engine (STR v8.0; referenced, NOT absorbed)
tags: [campaign, program, umbrella, operation_adna, orchestration, north_star, public_good, credibility_integrity]
---

# Operation aDNA — the program umbrella

> Governance: [[CLAUDE]] (this directory) is the program promoter. This file is the program plan.
> **This campaign orchestrates; it does not re-implement.** Every child campaign keeps its own
> directory, its own `CLAUDE.md`, and its own human phase gates. The program *tracks, synchronizes,
> coordinates the cross-vault seams, and AARs across tracks* — it never authors a child's missions.
> If you came here to do site work, go to [[campaign_website_adna]]; to ship the base image, go to
> [[campaign_hearthstone]]; to evolve the standard, go to STR ([[campaign_adna_serious_tool_readiness]]).

## North-star

**The aDNA network — running on the Lattice Protocol substrate — as a democratic public good: an
easy and fluid way to build · operate · utilize context graphs, credibly real rather than marketed.**

That one sentence fuses the three operator north-stars this vault has carried separately:

- the **brand pivot** — *aDNA is the forward-facing network/community/lab; the Lattice Protocol is the
  substrate it builds context on. Never collapse the two into "aDNA Protocol."* ([[project_adnalabs_brand_pivot]])
- the **UX goal** — *aDNA must be an easy and fluid way to build, operate, and utilize context graphs.*
  Friction is a load-bearing cost, not ergonomic polish. ([[project_adna_lattice_ux_goal]])
- the **public-good ethos** — *language and DNA are shared heritage held in trust; context is heir to
  that inheritance; AI is scarcity-destroying; confident co-creation produces abundance for everyone.*
  Subtle but front of mind — felt in what we show, never preached. ([[project_adna_network_ethos]];
  brief [[narrative_ethos_public_good]]; vision [[VISION]])

The program exists because those north-stars are not served by any one campaign. They are served by
two campaigns reinforcing each other on top of a third that keeps the ground truth honest.

## Integration thesis

> **Hearthstone makes aDNA real. WEBSITE.aDNA proves it's real.**

- **Hearthstone** ships the *clone-and-run base image* — a fresh `git clone … && claude` that detects
  the absent node vault, offers to bootstrap it, and produces a complete, **polished** Hestia
  `Home.aDNA/` out of the box at standard **v8.0**. That is aDNA made tangible: a real thing a real
  person can clone and inspect.
- **WEBSITE.aDNA** is the site that *demonstrates* aDNA to that person before they clone — concise,
  beautiful, compelling, **and credibly real** to a skeptical frontier engineer.

The two interlock at the credibility seam. WEBSITE.aDNA's **#1 finding** (the credibility-integrity
systemic pattern — see [[FINDINGS.aDNA]] §Systemic-patterns #1) is that the site's defining move,
*"this IS a real, inspectable vault,"* was staked on **dead proof-links** (`C-1`: 5 deep-links to a
404 repo) and a **fabricated marquee demo** (`C-2`: invented `CLAUDE.md` / `mission_schema` files that
exist nowhere in the vault). The site claimed realness it could not back. **Hearthstone resolves that
class of finding at the root:** when the polished base image actually ships, the site has a real,
canonical, inspectable thing to link to and demonstrate — the claim becomes true rather than asserted.
And it stays true continuously: **every new user who clones a quality base validates the site's thesis
daily.** Realness, not marketing copy, becomes the load-bearing asset.

## Integration Review & Findings Synthesis

A tight synthesis of where the children stand and how they bind to the north-star. (Not a re-dump —
each artifact is canonical in its own campaign; this is the program-level read.)

### Track A — WEBSITE.aDNA: what P0+P1 established
- **RECONCILIATION ([[RECONCILIATION.aDNA]]) introduced a two-class owner tag** that the whole program
  inherits: **`website-owned`** (the site fixes it, in-campaign) vs **`pt19-owned`** (vault
  rename/merge/count/edge currency owned by Operation Production Tidy's coordinated **pt19** regen —
  *flagged, never hand-fixed*). 6 website-owned currency rows (2 Crit JSON-LD URLs, down from a much
  larger pre-seed); 5 pt19-owned rows held for verify-after-pt19.
- **FINDINGS ([[FINDINGS.aDNA]]) = 4 Critical / 11 High / + Medium/Low, over 10 systemic patterns.**
  The 4 Criticals are *all credibility-integrity*: `C-1` dead proof-links, `C-2` fabricated marquee
  artifacts, `C-3` JSON-LD publisher drift (`Lattice Protocol`/`github.com/LatticeProtocol`),
  `C-4` a NetworkDiagram that *claims* "data-driven from `vaults.json`" but hardcodes its labels.
  **Systemic pattern #1 names the root:** *claims not verified against the real graph.* That — not
  aesthetics — is the gap to frontier-grade.
- **Honesty held where it was already lived:** partner/embargo surfaces clean (Dell/NVIDIA/Mayo/
  Stanford/CZI/Genentech all **refuted** — none present); banned-vocab scan clean; `/get-started`
  install flow honest + fixture-gated; `/commons` is the strongest public-good surface.
- **One fear refuted:** *"`/vaults/graph` is invisible to agents"* — false. The page ships a real
  keyboard/agent node-twin + `<noscript>` Mermaid fallback + prose census. Preserve, don't rebuild.
- **Per-flagship A–K baseline** is captured ([[FINDINGS.aDNA]] §Baseline-scorecard): highest-leverage
  units are `/community` (K+G), `/learn/what-is-adna` (E+G), `/` (D/E/K), `/vaults/graph` (C/H/F).

### Track B — Hearthstone: the charter + what feeds it
- Cross-vault genesis: **chartered by Hestia from `Home.aDNA`** after the operator chose *"full polished
  base"*, handed to Rosetta for the substantive build ([[coord_2026_06_18_hestia_to_rosetta_hearthstone_charter_handoff]]).
- **6 feeding ideas** (all `accepted` 2026-06-18 at P0, `how/backlog/`): `idea_upstream_inventory_entity_type`,
  `idea_upstream_identity_entity_type`, `idea_upstream_node_exemplar_template`,
  `idea_upstream_project_fork_exemplar_invocation`, `idea_upstream_home_claude_template`,
  `idea_upstream_router_node_vault_detection`.
- The work is **standard-evolution**: promote `inventory` (WHAT) + `identity` (WHO) to **base** entity
  types at v8.0, ship a genericized Hestia governance `CLAUDE.md` template, add the Step-0
  "offer to bootstrap Home" router flow, upstream the exemplar bundle (fixing the **CanvasForge→Canvas**
  drift), and **release via `skill_template_release`** to `.adna/` + the public `aDNA-Network/aDNA` image.

### The cross-vault context (the seams the program owns)
The children depend on work owned by *other vaults* — Home/Hestia (pt19, vault-cards, doctrine-relocation),
aDNALabs/Berthier (`skill_template_release`), Lab/Galileo (the ADR-006 bootstrap-offer), Canvas/Mondrian
(the CanvasForge repoint), Network/Venus (federation). Those seams are the program's primary object;
they live in [[coordination_ledger]] and are summarized in §Integration Map below.

### The through-line
Track A proves it, Track B makes it, Track C keeps it honest, Track D shows it's a commons — and all
four are in service of the single north-star: *credibly real, easy and fluid, a public good.*

## Track Map

The program orchestrates four tracks. **Children keep their directories, their `CLAUDE.md`s, and their
gates.** The program adds no phases; it synchronizes the tracks toward the keystone (below).

| Track | Campaign | Owner | Current state | What it delivers to the north-star |
|-------|----------|-------|---------------|------------------------------------|
| **A — Prove it real** | [[campaign_website_adna]] | Berthier (plan) · Rosetta (resident site agent) | **P0 ✅ / P1 ✅** ([[RECONCILIATION.aDNA]] + [[FINDINGS.aDNA]] filed) → **P2 design active 2026-06-19** (credibility-first; → Decision 4 gate) → P3 iterate | The site that *demonstrates* — frontier-grade, credibly real; resolves the credibility-integrity gap on the surface a newcomer meets first. |
| **B — Make it real** | [[campaign_hearthstone]] | Hestia (chartered) · Rosetta (build) | **P0 ✅ / P1 ✅ 2026-06-19** (`adr_035` accepted; `inventory`+`identity` → base, ontology 14→16 in dev graph) → **P2 ready** (not activated) → P5 release | The clone-and-run **base image** — the real, inspectable thing the site links to and the easy/fluid first-touch of the UX goal. |
| **C — The engine** | STR ([[campaign_adna_serious_tool_readiness]]) | Rosetta | **active** (v8.0 target; P0 open; successor `campaign_adna_v3_ecosystem_compliance` opens at P6 close) | The standard + governance **v8.0** and per-vault ecosystem compliance — the ground truth Tracks A/B render and ship. *Referenced, not absorbed.* |
| **D — The commons** | *(axis-K + `/commons` + subnetwork showcase; no separate campaign)* | Rosetta · coordinates with Venus (Network) | **in-flight inside Track A** (WEBSITE axis-K; `/commons` strongest K/E surface; subnetwork showcase live) | The public-good soul *shown* — real attribution, visible governance, honest federation, mission-aligned subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive). The "Facebook, for good" MVP layer. |

> **Track D is a lens, not a fifth campaign.** The commons/public-good work is executed inside Track A's
> axis K (Community & Collaboration Legibility) and the `/commons` surface, and reaches toward the full
> social layer co-designed with **Network/Venus** (Venus-gated; see [[narrative_ethos_public_good]] §5).
> The program names it as a track so the ethos stays front of mind across the others.

## Program gates / keystone

The program holds **no phases of its own** and **does not auto-advance any child** — every phase gate is
a human gate inside its child campaign. The program's single synchronization point is the **keystone**.

> **Keystone gate = the coordinated public launch.** The three must land *together* so the site's
> "clone and inspect" pitch is true the day it ships:
> 1. **WEBSITE.aDNA credibility-fixes shipped** — the 4 Criticals (`C-1`–`C-4`) cleared and deployed;
>    proof-links resolve to real paths under `aDNA-Network/aDNA`.
> 2. **Hearthstone v8.0 base image released** — `skill_template_release` push to `aDNA-Network/aDNA`
>    approved; a fresh clone *offers* a polished Hestia Home.
> 3. **pt19 vault-data regen landed** — Production Tidy's coordinated regen done, so the site's
>    `/vaults` · `/network` · `/vaults/graph` show keeper-set names, not pre-migration drift.
>
> Until all three are green, the program does not declare launch. A child may ship its own deploys at
> its own deploy gates before then (commit-only default); the **keystone is the joined-up moment**,
> not a blocker on independent progress.

## Decision Points (program-level)

| # | When | Decision | Status |
|---|------|----------|--------|
| DP1 | Program charter (now) | Approve the program name **"Operation aDNA"**, the umbrella `subtype: program` posture, the four-track map, and the orchestrate-don't-reimplement contract | **✅ approved 2026-06-18** — name blessed; posture + 4-track map + orchestrate-don't-reimplement contract approved. *(Same gate: ADR-035 ratified → Track B P0 closed; WEBSITE Decision 3 approved → Track A P1 closed.)* |
| DP2 | Keystone readiness | Confirm all three keystone conditions green (WEBSITE Criticals shipped + Hearthstone v8.0 released + pt19 landed) and approve the **coordinated public launch** | pending |
| DP3 | Cross-vault seam disputes | When a seam in [[coordination_ledger]] blocks a child (e.g. pt19 slips, `skill_template_release` contract changes), the program surfaces it to the operator rather than a child resolving cross-vault unilaterally | as-needed |
| DP4 | Program close | When all tracks reach their terminal gates, AAR the program and set `status: completed` (children persist as their own records) | pending |

> Phase gates *inside* children remain that child's Decision Points (WEBSITE Decisions 2–6; Hearthstone
> Decisions 1–5; STR's own gates). The program never substitutes for a child's gate.

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Governance bloat** — an umbrella that re-implements its children, duplicating state and creating two sources of truth | High | **Thin orchestration only.** No phases, no missions, no re-implementation here. Children keep authority over their own dirs/gates/missions. The program holds *only* the track map, the keystone, the seams, and cross-track AARs. Row discipline: this file stays scannable (~150–220 lines). |
| **Cross-vault drift** — Home/aDNALabs/Lab/Canvas/Network work moves and a child silently goes stale | High | The [[coordination_ledger]] is the single registry of cross-vault seams (owner · what it gates · status · handshake). Each seam names the persona/vault that owns it and the handshake that closes it. pt19 is registered via [[coord_2026_06_18_wadna_pt19_dependency]]. |
| **STR-overlap** — the program tries to absorb or restructure the standard/governance engine | Medium | **STR is Track C — referenced, not absorbed.** Its framing is unchanged; `orchestrates:` lists it but the program edits no STR file. v8.0 is delivered *by* STR (and Hearthstone's v8.0 ADR coordinates with it), surfaced *by* Tracks A/B — never re-owned here. |
| **Keystone deadlock** — waiting for all three to land freezes independent progress | Medium | The keystone gates *the joined launch*, not each child's internal cadence. Children ship their own deploys at their own gates; only the public "it's all true now" moment waits. |
| **Credibility leakage at the joined launch** — a fix ships on one track that the other contradicts | High (the program quality bar) | Credibility-integrity is the program quality bar (WEBSITE FINDINGS systemic #1). Before the keystone, re-run the claims-traceable pass across *both* surfaces: the site's proof-links must resolve to what Hearthstone actually shipped. |

## Integration Map (cross-track + cross-vault, at a glance)

```
                         NORTH-STAR
        credibly-real · easy/fluid · public good
        (aDNA on the Lattice Protocol substrate)
                             │
   ┌──────────────┬──────────┴──────────┬──────────────┐
   │ Track A      │ Track B             │ Track C       │ Track D
   │ WEBSITE.aDNA │ Hearthstone         │ STR (v8.0)    │ Commons / axis-K
   │ prove it     │ make it             │ the engine    │ show the public good
   │ (P0✅/P1✅)   │ (P0 → P5)           │ (referenced)  │ (in Track A + Venus)
   └──────┬───────┴──────────┬──────────┴───────┬───────┴───────┬──────┘
          │   the credibility seam:             │               │
          │   site's "real, inspectable" claim  │               │
          │   ← resolved by → Hearthstone's     │               │
          │   real polished base image          │               │
          └─────────────────────────────────────┘               │
                             │                                   │
                       KEYSTONE GATE (DP2)                        │
        WEBSITE Criticals shipped + Hearthstone v8.0 released     │
        + pt19 vault-data regen landed  →  coordinated launch     │
                             │                                    │
        cross-vault seams (see coordination_ledger): ────────────┘
        pt19 (Hestia) · skill_template_release (Berthier) ·
        Lab ADR-006 bootstrap-offer (Galileo) · CanvasForge→Canvas (Mondrian) ·
        Network/W-NET federation (Venus) · doctrine-relocation (Hestia) ·
        vault-card public-fields (Rosetta→Hestia)
```

Seam detail, owners, status, and the handshake each one needs: **[[coordination_ledger]]**.

## Notes

- **Both children stay active concurrently** (per `how/campaigns/AGENTS.md` — multiple campaigns may be
  active; the operator gates phase advancement). The program coordinates; it does not serialize them.
- **Commit-only posture** inherits from the children. The program declares no deploy of its own; the
  keystone is a *synchronization* of the children's deploy gates.
- **Honor pt19, sequence** is the program-wide deconfliction posture with Operation Production Tidy:
  the site's vault-data currency is Production-Tidy-owned (regenerated in the coordinated pt19 pass);
  Track A flags + verifies-after, never hand-fixes. See [[coordination_ledger]] (pt19 row) +
  [[coord_2026_06_18_wadna_pt19_dependency]].

## Completion Summary
*Fill out when setting `status: completed` (after DP4).*

### Deliverables
- *(pending)* — the coordinated public launch (keystone); cross-track AAR; the seams closed in [[coordination_ledger]].

### Key Findings / Scope Changes / Follow-Up
- *(pending)*

## Program AAR
*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*
- **Worked**: *(pending)*
- **Didn't**: *(pending)*
- **Finding**: *(pending)*
- **Change**: *(pending)*
- **Follow-up**: *(pending)*
