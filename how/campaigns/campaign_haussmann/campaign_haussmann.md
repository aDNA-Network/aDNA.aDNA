---
campaign_id: campaign_haussmann
type: campaign
title: "Operation HAUSSMANN — the adna.network rebuild: credible, legible, beautiful, agent-navigable at launch"
owner: stanley
persona: rosetta
status: active          # RATIFIED at Gate C 2026-08-16 (operator, via AskUserQuestion in the genesis session) — see the §7.7 block
phase_count: 6          # P0–P5 on the decade backbone
mission_count: 27       # 5+4+6+5+5+2; P0–P2 = Decade 1 (committed), P3–P5 = Decade 2 (provisional, recalibrated at P2.6)
estimated_sessions: "37-50"   # derived: sum of the per-phase tables below (7–9 + 6–8 + 8–11 + 7–9 + 6–9 + 3–4) — never a typed count (KW-14)
calibrated_sessions: ""   # calibrate at the P2.6 mid-campaign re-score
estimation_class: content-novel
executor_tier_default: fable   # charter-altitude fallback (aDNA.aDNA ADR-025 §2 resolution chain — NOT aDNALabs ADR-025, the community ruling); judgment missions fable/opus, mechanical sweeps sonnet — per-mission fields override
priority: high
target_site: "https://adna.network (source: aDNA.aDNA/site/, Astro 6 static → Vercel adna-docs) + community.adna.network (Fluxer instance — integration surface, human-only per aDNALabs ADR-025)"
predecessor_campaigns:
  - campaign_storyweave              # completed 2026-07-13; open wave items ABSORBED here (P1) — do not relitigate its analysis
  - campaign_website_adna            # completed 2026-06-21; its 371-gate suite + A–K discipline inherited
  - campaign_looking_glass           # completed 2026-06-28; mirror-currency lesson inherited
  - campaign_adna_network_audit      # completed 2026-06-10; audit-of-record baseline
governing_instrument: directives/OPERATION_VITRUVIUS_review_instrument.md   # D1–D12, S1–S4, [D]/[I]/[R]/[A], B×E weights
baseline_score: "51.6/100 (2026-08-16, two-reviewer reconciled; MCP ≈83, Mastra ≈65)"
evidence_pack: [d58ea13, df3827c]
created: 2026-08-16
updated: 2026-08-19   # ⛩ FOUR RULINGS: variant A (tier-first) · 740 mechanism DEFERRED (10× recorded UNMET) · DP-16 shape-A-conditioned · outward-acts GO. P2.4 COMPLETE O0–O3, suite 460→472 zero xfail, 13→0 non-canonical vault links (one was hiding a live silent drop on /commons); ADR-052 accepted. UNDEPLOYED. Next DP = DP6 at P2.6.
last_edited_by: agent_rosetta
tags: [campaign, haussmann, site, adna_network, rebuild, vitruvius, community, agentic]
---

# Campaign: Operation HAUSSMANN

> **Ratification (§7.7).** **Decision:** charter Operation HAUSSMANN — a 6-phase, 27-mission rebuild of
> adna.network (+ community integration) to the VITRUVIUS standard, absorbing the open Storyweave wave;
> Decade-1 (P0–P2) committed, Decade-2 provisional at DP6; ADR stubs 048–057 held at `proposed` pending
> their DPs; the ADR-057 measurement regime adopted with the charter.
> **Ratified-by:** Stanley, Founding Architect (operator). **Date:** 2026-08-16.
> **Status:** **accepted** — ratified at **Gate C** via `AskUserQuestion` in the genesis session
> (`session_stanley_20260816_094350_haussmann_genesis`; genesis commits `dc1bb35..30a9c3b`; both staged
> outward acts — origin push + 4-memo delivery — GO'd in the same gate). *(Authored by agent_rosetta;
> ratified by the operator.)*

```
╭─ campaign_haussmann · rosetta ─────────────────────── 🧬 aDNA.aDNA OPENING ─╮
│  opened 2026-08-16 (ratified §7.7 same day)          (top-level campaign)    │
├──────────────────────────────────────────────────────────────────────────────┤
│  INTENT   rebuild adna.network to the VITRUVIUS standard — credible,         │
│           legible, beautiful, agent-navigable; honesty is the aesthetic      │
│           ↳ north-star: zero FALSE claims · self-conformance proven &        │
│             stated · baseline 51.6 → per-dimension gains · capstone ≥4.95    │
│                                                                              │
│  MISSION TREE                                    (2026-08-18, P1 CLOSED)     │
│    P0 preconditions   ✅ P0.1 positioning(DP2) ✅ P0.2 deploy               │
│                       ✅ P0.3 webforge  ✅ P0.5 edit-gate                   │
│                       🟡 P0.4 flux-recon (awaits Aspasia ack — her lane)    │
│    P1 credibility ✅  ✅ 1.1 claim-purge   ✅ 1.2 state-of-network          │
│      (Decade 1) 4/4   ✅ 1.3 registry-truth(DP4) ✅ 1.4 mobile-S1s          │
│    P2 structure 🟢    ✔ 2.1 urls  ✔ 2.2 ia(DP5✔)  ✔ 2.3 docs-freshness      │
│      (Decade 1) OPEN  ✔ 2.4 registry↑       ▫ 2.5 onboard  ▫ 2.6 ⛩DP6      │
│                          ↑ ⛩ P1→P2 GATE SIGNED 2026-08-18 (D6/D7 deferred)  │
│    P3 agentic+community  ▫ md-twins ▫ registry-json ▫ mcp-server            │
│      (Decade 2·prov.)    ▫ flux(⛩DP7) ▫ proposals            [gated: DP6]   │
│    P4 craft+hardening ▫ tokens/voice(⛩DP8) ▫ craft-floor ▫ a11y-manual      │
│      (Decade 2·prov.) ▫ ci-hardening ▫ voice-rewrite-LAST    [gated: DP6]   │
│    P5 launch          ▫ human-evidence ▫ re-score+capstone ⛩DP9 [gated:DP6] │
│                                                                              │
│  PLAN     phase P2/6 OPEN · 37–50 sessions (derived) · fable default ·      │
│           prod HARDENED (4/4 headers) · suite 472 zero xf · 0 FALSE claims  │
├──────────────────────────────────────────────────────────────────────────────┤
│  GATES    phase gates are human gates · next: ⛩ DP6 at 2.6 (re-plan)      │
│           arc AAR: artifacts/aar_p0_wave.md (this splash augments, never    │
│           replaces it)                                                       │
╰──────────────────────────────────────────────────────────────────────────────╯
```

## Goal

At launch, adna.network is **the most credible, most legible, most beautiful property in its category** — a senior engineer, a rare-disease clinician, a foundation program officer, and an autonomous agent each find it immediately navigable, and **none of them can catch it overstating itself**. Two laws govern everything (directive §1): **honesty is the aesthetic** (the site's refusal of vanity metrics is its strongest asset — extend it to every surface), and **self-conformance is the proof** (a standard for agent-navigable context whose own site is not agent-navigable has refuted itself — machine legibility is a first-class design surface).

Measured end state: VITRUVIUS composite improvement demonstrated per dimension from the 51.6 baseline (directional target: close most of the ~31-point gap to the MCP reference); **zero S1 findings**; zero FALSE claims in the register; every binary gate green with field evidence; capstone ranker ≥ 4.95.

## Context

The genesis assessment (Gate B dossier, `artifacts/gate_b_dossier.md`) found a **bimodal site**: substrate at 3/5 across the board (IA reachability perfect, real Diátaxis shape, real design system, perf 97–100, curated llms.txt) — and the **trust stratum at 2/5** (D6/D7/D8/D9 = 42 of 100 weight points): 8 FALSE claims, an advertised question path that 404s twice, 78% of registry pages leaking internal language, undisclosed operator-federation, dead changelog. The campaign is therefore **credibility-first**: the biggest score lever is truth-reconciliation and channel-liveness, not visual redesign. The visual system is already good; it gets systematized (slot-contained Ghibli-pixel program), not replaced.

**Reconciliation with HQ (Berthier, `coord_2026_08_11_berthier_to_rosetta_site_build_wave.md`).** HQ ruled "the review already exists… what is missing is a wave." The operator's 2026-08-16 directive postdates that ruling and charters the campaign — but this charter *absorbs* the wave rather than relitigating it: deploy hardening is a P0 precondition (Berthier's own sequencing); the two invisible-diagram items + hero proof-of-life land in P1.4/P1.2; design-system debt in P4.2; jargon **last** (P4.5, per the memo); and Phase B *re-tested* the wave's top item — "/vaults/graph nearly illegible" did **not reproduce** on desktop (the rework landed; what remains is data currency 68≠74 + count collisions, now P1.3). A courtesy memo to Berthier is staged.

## Scope

**In**: everything on adna.network (copy, IA, registry projection, machine surfaces, design system, CI gates); the site-side of community.adna.network integration; the claim register as a living instrument; WebForge federation intake; deploy-pipeline hardening; the ADR set (048–057); patterns authored back to WebForge.
**Out (routed)**: Fluxer instance administration (Aspasia's lane — we stage asks, never operate the instance); registry *data* regeneration (Hestia's lane — honor pt19; we fix the projection *code* and stage data asks); Lattice Protocol publishing (counsel-gated D-8 — copy must fit inside the embargo); Vercel/DNS infrastructure beyond this site (Vitruvius/ADR-031 lanes); the `.adna/` template (Standing Rule 1).
**Subsumes**: the open Storyweave wave items; `idea_vaults_graph_ssr` (as re-scoped by evidence); the undocumented `idea_docs_deploy_hardening` (P0.2 becomes its record).

## North-star & measurable success criteria

1. **Zero FALSE claims** in the claim register, continuously (editorial gate in CI). 2. **State-of-the-network disclosure** live — a hostile reader cannot find an unacknowledged overstatement. 3. **TTFS < 10 min** measured on a clean machine + a zero-install evaluation path. 4. **Machine legibility at anchor 5**: .md twins, registry JSON, MCP server over the corpus, llms.txt linked, self-conformance demonstrated *and stated*. 5. **Working contribution funnel**: a stranger reaches a merged first PR; question path live. 6. **Community integration** per ADR-025 without a single overclaim. 7. **WCAG 2.2 AA incl. manual passes; CWV green with field evidence; zero internal 404s — all in CI.** 8. **Capstone ranker ≥ 4.95** + full VITRUVIUS re-score with per-dimension improvement.

## Decade framing (ship-and-measure)

> **Decade 1 (P0–P2) is committed** at Gate C: preconditions → credibility → structure. **Decade 2
> (P3–P5) is provisional**: all mission files are authored now (directive C.3) but P2.6's mid-campaign
> re-score recalibrates their scope, order, and budgets before Decade 2 opens. Sequencing law
> (directive §5.C.1): positioning resolves before IA; IA before visual craft. Any violation needs
> written justification at a gate.

## Phases & Missions

### P0 — Positioning & preconditions (Decade 1; 5 missions, ~7–9 sessions)

| Mission | Title | Sessions | Tier | Deps |
|---|---|---|---|---|
| P0.1 | Positioning resolution + embargo language + name-collision handling → ADR-048; **human cold-reader panel ≥5** | 2–3 | fable | — |
| P0.2 | Deploy hardening: header drift, deploy path (ADR-050), token hygiene, live-header CI check | 1–2 | opus | — |
| P0.3 | WebForge federation intake: wrapper + contract §3 + craft-floor graduation ruling | 1 | sonnet | — |
| P0.4 | Fluxer STATE reconciliation + community prerequisites (deliver the Aspasia memo; 10 questions) | 1 | opus | — |
| P0.5 | Editorial gate: gate-16 → claim/tense/leak gate; claim register wired as living CI fixture | 1–2 | opus | — |

**Exit gate (operator):** ADR-048 ratified after the panel passes (**≥80% of a panel of ≥5** — i.e. 4 of 5 at minimum size — state what it is / who for / one thing it is not, ≤30 s unaided); deploys reproducible with headers live; WebForge register row exists; Fluxer STATE reconciled; editorial gate red-tested. *(P0.1's panel is the directive's Phase-0 gate.)*

### P1 — Credibility remediation (Decade 1; 4 missions, ~6–8 sessions)

| Mission | Title | Sessions | Tier | Deps |
|---|---|---|---|---|
| P1.1 | Claim purge: the 8 FALSE + 19 unsupported; ship or stop claiming the channels (Discussions, templates) | 2 | opus | P0.1, P0.5 |
| P1.2 | State-of-the-network surface + canonical-properties page + named humans (consented) + hero proof-of-life placement | 1–2 | fable | P0.1 |
| P1.3 | Registry truth: projection-generator fix (58-page leak), `tbd_at_p0` mapping, honest-absent affordances, graph data currency (68→74, count collisions), dead proof-link; **⛩ confidential-vault projection ruling (ADR-052 §admission)** | 2 | opus | P0.5 |
| P1.4 | Mobile integrity S1s: docs-column fix, /network clipping (D11 gate condition), home-diagram mobile collapse | 1 | sonnet | — |

**Exit gate (operator):** claim register shows **zero FALSE / zero unsupported-above-ceiling**; a hostile external read (fresh agent, adversarial prompt) finds no unacknowledged overstatement; S1 visual defects re-captured clean; D6/D7 re-scored.

#### ✅ P1 CLOSED — 4/4 missions, 2026-08-18 · exit-gate evidence

| Exit condition | Evidence | State |
|---|---|---|
| Zero FALSE / zero unsupported-above-ceiling | claim register **113 adjudicated rows, zero FALSE, zero unsupported** (P1.1 cleared all 8 FALSE; P1.2 §7.5 corrected 11 more; §7.6 added R-112/R-113) | **met** |
| Hostile external read finds no unacknowledged overstatement | two independent hostile cold-reads (P1.1: 18 findings, all dispositioned; P1.2: 24 findings → 11 claim corrections) + the P1.2-close re-rank, which found **2 further S2s** and had them fixed and gate-pinned | **met — and the last pass still found two, which is the honest caveat on "no unacknowledged overstatement"** |
| S1 visual defects re-captured clean | P1.4 F1/F2/F3/F12 fixed; gate-29 reflow guard red-proven; axe **0** across 4 surfaces × both themes | **met** |
| D6/D7 re-scored | **deferred to P2.6** (the mid-campaign re-score, ⛩ DP6) — the instrument's own cadence puts a full dimension re-score there, not at every phase boundary. P1.2's ranker (**4.22**) is the only in-phase measurement and is scoped to two surfaces, not to D6/D7 | **deferred, not met** |

**Standing at close:** suite **444 green, zero xfail** · prod `tree=84dd3bd` live-verified on the apex
· 4/4 security headers · registry leak baseline retired (86 rows → 0, hard-gated) · the deploy freeze
lifted and the sole-sanctioned path in force.

##### ⛩ P1→P2 phase gate — SIGNED (§7.7)

| Field | Value |
|---|---|
| **Decision** | Open P2. The P1 exit gate is accepted at **3 of 4 conditions met**, with the fourth — the D6/D7 re-score — **deferred to P2.6**, where the instrument's own cadence puts a full dimension re-score. The deferral is accepted as a deferral; it is **not** recorded as satisfied. |
| **Ratified by** | stanley (operator / FA), in-chat `AskUserQuestion` |
| **Date** | 2026-08-18 |
| **Status** | **accepted** — P2 open. P2.1 ✅ shipped + live-proven 2026-08-18 (162/0 probe; ADR-051 accepted). **P2.2 ✅ SHIPPED 2026-08-19T04:24Z** (`tree=301daef`) — DP5's Option A is live on adna.network: nav 7, 11 redirects proven in both slash forms, `/provenance-audit/` 200 where it was 404; deploy probe **121/0**. **P2.3 ✅ COMPLETE 2026-08-18** — zero internal 404s + a blocking link gate, spec paginated to a hub + 20 sections + full text (default URL 74,067 → 2,244 px), 113 pages carry a date and an edit link, changelog 1 → 4 entries with RSS, F11 fixed; suite **446 → 460**, axe 0. **Built + gated, NOT deployed** — a deploy ⛩ is per-action. Also closed a two-day CI outage nobody had noticed (gate-30 asserted a deploy-only injection step CI never ran). Next mission = **P2.4**; next substantive DP = **DP6 at P2.6**. |

> The honest reading, kept here so a later reader does not mistake the signature for a clean sweep:
> P1 closed 4/4 on *missions*, not 4/4 on *exit conditions*. The last hostile pass still found two
> S2s (R-112/R-113) — fixed and gate-pinned before the deploy, but found. D6/D7 remain unmeasured
> since the baseline. P2.6 is where that debt comes due, and it is tracked, not forgiven.

**Carried into P2 with provenance** (not silently dropped): the Enterprise Architect routing gap
(`/compliance`, `/enterprise` unreachable from either disclosure surface; the one org-scale exit
points at a human-only channel) → **P2.2**; `/privacy` emits no JSON-LD → **P2** candidate;
`/install.html` is an orphan (reachable, no chrome, no sitemap entry) → decide, don't leave;
the P2 sweep of surfaces P1.2 never touched, for the two patterns both reviewers named.

**Still open outside P1:** P0.4 awaits Aspasia's ack (her lane; **more urgent since P1.1's override
shipped the /community link ahead of ADR-054's prerequisites**), `VERCEL_TOKEN_ADNA` is unbrokered
(Hestia), and the evidence-retention ruling is unmade.

### P2 — Structure (Decade 1; 6 missions, ~8–11 sessions)

| Mission | Title | Sessions | Tier | Deps |
|---|---|---|---|---|
| P2.1 | URL normalization: casing scheme (ADR-051), full redirect map (incl. Wayback CDX), gate specs same-diff | 1–2 | sonnet | — |
| P2.2 | IA consolidation: 3 audience branches → positioned set (ADR-049); **nav ≤7**; CTA 1+1; design-spike + ranker ≥4.0 | 2 | fable | P0.1 |
| P2.3 | Docs freshness: spec pagination, per-page dates, edit-this-page, 29 broken links + **link gate in CI**, glossary previews, changelog/RSS revival + cadence | 2 | sonnet | — |
| P2.4 | Registry redesign: admission standard + lifecycle tiers (ADR-052), facets, dual-clock signals, marketplace-archetype patterns | 2 | fable | P1.3 |
| P2.5 | Onboarding paths: zero-install evaluation path, "first success" defined + published, uninstall docs, trust-cost mitigation, **TTFS instrument + clean-machine run** | 2 | opus | P0.1 |
| P2.6 | **Mid-campaign re-score + Decade-2 recalibration** (2 reviewers; re-plan artifact) | 1 | fable | all P2 |

**Exit gate (operator):** TTFS < 10 min measured · zero internal 404s (gated) · ≤2 clicks preserved · re-score shows D1–D4 movement · Decade-2 re-plan ratified.

### P3 — Agentic surface + community (Decade 2, provisional; 5 missions, ~7–9 sessions)

| Mission | Title | Sessions | Tier | Deps |
|---|---|---|---|---|
| P3.1 | .md twins + content negotiation + llms.txt linked + real llms-full corpus (ADR-056; pattern → WebForge) | 2 | sonnet | P2.1 |
| P3.2 | Registry JSON endpoint + Organization/Dataset JSON-LD + sameAs (ADR-056) | 1 | sonnet | P2.4 |
| P3.3 | `adna-mcp-server` over docs+registry (npx, official TS SDK); **self-conformance demonstrated and stated on the page** | 2 | opus | P3.1, P3.2 |
| P3.4 | Community integration per ADR-054: prerequisites verified (policy floor + branding + aliveness), honest-state link from /community, ladder mapping, disclosure copy (SO#8) | 1–2 | opus | P0.4 |
| P3.5 | Numbered proposal process (ADR-055): states, archive, machine index, **first proposal filed** | 1–2 | fable | — |

**Exit gate (operator):** machine-legibility conformance report clean (D10 anchor-4+ verified) · first numbered proposal live · community link live only if prerequisites held.

### P4 — Craft & hardening (Decade 2, provisional; 5 missions, ~6–9 sessions)

| Mission | Title | Sessions | Tier | Deps |
|---|---|---|---|---|
| P4.1 | Token pipeline: WebForge DTCG adoption/pin + visual-voice systematization (ADR-053; slot-contained Ghibli-pixel program) + first aDNA VisualDNA bundle | 2 | fable | P0.3 |
| P4.2 | Craft-floor conformance (57 locks) + design-system debt + html-validate 5 classes + published diagram construction rules | 2 | sonnet | P0.3, P4.1 |
| P4.3 | A11y manual: keyboard + screen-reader passes (virtual-screen-reader lane + operator VoiceOver), F2 adjudication, a11y statement page | 1 | opus | P1.4 |
| P4.4 | CI hardening: visual-regression gate (container baselines), live-header check, Unlighthouse periodic, field-p75 instrument, CWV budgets | 1–2 | sonnet | P0.2 |
| P4.5 | **Voice rewrite LAST** (Berthier rule): FKGL targets, glossary-linked first-use, register transitions, dual-audience review | 2 | fable | P0.1, P2.2 |

**Exit gate (operator):** zero a11y criticals incl. manual · design-system conformance on 20 sampled components · CWV green field · every new pattern authored back to WebForge.

### P5 — Launch readiness (Decade 2, provisional; 2 missions, ~3–4 sessions)

| Mission | Title | Sessions | Tier | Deps |
|---|---|---|---|---|
| P5.1 | Real evidence: human cold-reader re-panel, clean-VM TTFS, outsider contribution run | 1–2 | opus | all P4 |
| P5.2 | Full VITRUVIUS re-score (agent×2 + human arbiter) + 16-persona capstone ranker ≥4.95 + launch checklist/rollback/monitoring + campaign AAR | 2 | fable | P5.1 |

**Exit gate (operator — campaign close):** composite improvement per dimension · every S1/S2 closed + verified · cold-reader re-test passed · launch checklist signed.

## Decision Points

| # | When | Decision | Status |
|---|---|---|---|
| DP1 | Gate C | Charter ratification (§7.7) + Decade-1 commitment | **✅ RATIFIED — operator (Stanley/FA), 2026-08-16** |
| DP2 | P0.1 close | ADR-048 positioning (incl. audience, name-collision handling, embargo language) | **✅ RATIFIED — operator, 2026-08-16** · candidate A (definition-as-hero); the O4 human panel was **waived** in-chat, deviation recorded in ADR-048 §Status, human validation deferred to **P5.1** |
| DP3 | P0.2 | ADR-050 deploy path (git-integration vs wrapped-manual vs hybrid) | **✅ RATIFIED (c) — operator, 2026-08-16** · `deploy_adna.sh` is the sole sanctioned path; deploy freeze lifted |
| DP4 | P1.3 | ADR-052 §admission — confidential-adjacent vaults in the public registry (aiLP-Dataroom, CakeHealth, PercySleep) | **✅ RULED — operator, 2026-08-16** · minimal-card ×3, suppression at the generator |
| DP5 | P2.2 | ADR-049 IA model (audience-branch disposition) | ✅ **RATIFIED — operator, 2026-08-18: Option A** (consolidate to `/use-cases/`; nav 7; 11 redirects). Both comps cleared ranker ≥4.0 and the instrument **declined to separate them** (A 4.03 · C 4.17), so the call was judgment: A is reversible and P2.6 is the named revisit point for C. **✅ IMPLEMENTED same-day at O2/O3** — 446/446 gates, 0 duplicate titles, 10/10 ≤2-click held; **undeployed** (separate ⛩). One correction on the record: the ADR's "zero content rewritten" was wrong on the facts — the retiring pages carried 13 unique ontology rows + ~1,690w of curated reading paths, all **folded into their destination before retiring** (ADR-049 §Status implementation note). |
| **DP-16** | P2.4 (out-of-band) | **Inference's control-plane classification**, with a live persisting surface attached (raised by Pythia 2026-08-07 + 08-18) | ✅ **RATIFIED — operator, 2026-08-19: shape A, conditioned.** Inference stays control-plane **for its serving lanes**, the manifest says so in those words, **and the human surface gets a declared §8 data-bearing row** — not a footnote. The condition is the load-bearing part: that instance ran four months unregistered *because* the graph's label said there was nothing to register, so adopting A without the declared row would leave the producing condition in place and now deliberately. Recorded at `how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest.md` §DP-16 |
| **DP-P2.4** | P2.4 O1 | Registry grouping (A tier-first / B class-first / C density) **and** the 740-scale mechanism — split into two by O1's own finding that no variant scales | ✅ **RULED — operator, 2026-08-19: (1) variant A** (tier-first: in use 7 · chartered 10 · planned 57) **and (2) explicitly defer the 740 mechanism**. The self-scored pre-screen tied A and C at 3.88 with neither clearing 4.0, so the grouping call was judgment: A's groups are visually equal and only the labels differ, so its layout claims nothing the self-declared data cannot support — where C's density gradient reads as a ranking. `scales at 10×` is recorded **UNMET** with the arithmetic as the reason; the three candidate mechanisms are named in **ADR-052 §tiers.7** with a revisit trigger. **ADR-052 ratified `accepted` at the same gate**; §tiers.6 (77-vs-74) deliberately not put, and stays *stated, not decided* |
| **P2.4 pick** | P2.4 O1 | Registry **grouping** (A tier-first / B class-first / C density) **and — separately — the 740 mechanism** (pagination / default-collapsed planned tier / virtualization / explicit defer) | ⛩ **AWAITING** — the 10× test found **none of the three variants scales** (all ~19,000 px at 740; C beats A by 5%), so the two questions came apart. Synthetic pre-screen is `[D-syn]`, conflict declared, and **declines to separate A and C**. Record: `artifacts/p2_4/spike_record.md` |
| DP6 | P2.6 | Decade-2 recalibration + re-plan ratification | pending (recurring shape) |
| DP7 | P3.4 | ADR-054 community-link GO/NO-GO on verified prerequisites | ⚠ **FIRED EARLY by operator override at P1.1 (2026-08-17)** — the /community link shipped with PR-1/2/3 unmet; deviation recorded in ADR-054 §Status, honest-state framing shipped and guarded by R-95/R-96. The DP itself is **still owed** on the verified prerequisites at P3.4 |
| DP8 | P4.1 | ADR-053 visual voice (slot-contained program vs accent-only fallback) | pending |
| DP9 | P5.2 | Launch GO + close | pending |

## Risk register

| Risk | Mitigation |
|---|---|
| Fixing copy by weakening honesty (rounding claims *up* to match) | Editorial gate direction is one-way: claims move DOWN to verifiability; the register is the arbiter |
| Route changes shatter hardcoded gate/audit specs | Same-diff law (ADR-057): any route change updates gate specs in the same commit |
| Registry projection fix collides with Hestia's regen ownership | Code-side fixes here; data asks staged as memos; honor pt19 absolutely |
| Counsel embargo drifts (protocol opens mid-campaign) | ADR-048 carries both language variants; swap is a copy change, not a re-design |
| Community prerequisites never land (Aspasia lane stalls) | P3.4 is contingent-by-design; the honest fallback (no link + honest state) is already the P1 posture |
| Decade-2 front-runs the re-score | P3–P5 missions carry `decade: 2` + `status: queued-provisional`; P2.6 re-plan is their activation gate |
| Live-data literals pinned in new tests (KW-8 class) | Snapshot-derivation law inherited from WebForge FR-K; stated in CLAUDE.md |
| Fresh evidence goes stale during long campaign | Deploy baseline + drift check at every phase open; claim register re-verified monthly |

## Verification strategy

**Per-mission**: acceptance criteria + named verification method in every mission file; AAR before `completed`. **Per-phase**: exit gates above (operator); T0 re-captures for visual work; re-score at P2.6. **Campaign**: the 4-instrument regime (ADR-057) — 371+ gate suite continuously · persona-ranker ≥4.0/surface · VITRUVIUS at 3 events (baseline done, P2.6, P5.2) · III cycle series continues at cycle 166; claim register monthly; TTFS on every quickstart-touching change.

## Timeline

Gate C → P0 opens on ratification. Decade 1 ≈ 21–28 sessions; P2.6 re-score; Decade 2 ≈ 16–22 sessions. No calendar commitment — phase gates are the clock (SO-1).

## Notes

- Assessment doctrine + evidence: `directives/` (verbatim operator directives) · [[gate_b_dossier]] · [[hypotheses_resolved]] · `evidence/` (pack commits `d58ea13`, `df3827c`). Orientation: [[WEBFORGE_ORIENTATION]] · [[webforge_pattern_register]] · [[dependency_map]] · [[instrument_ingestion]]. Graduated context: [[context_website_assessment]] · [[context_claim_register]] · [[context_webforge_patterns]] · [[context_reference_dossier]] · [[context_community_flux]].
- Campaign conventions: `CLAUDE.md` (this directory) — read before any mission.
- Mission files: `missions/mission_haussmann_p*.md` (27) + `missions/session_prompts_haussmann.md` (paste-ready index).
- ADR stubs 048–057 at `what/decisions/` (all `proposed`; ratified at their DPs, never by agents).

## Completion Summary

*(at close)*

## Campaign AAR

*(at close)*
