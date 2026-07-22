---
type: sitrep
title: "State of the Estate — comprehensive SITREP/AAR, post-Storyweave · post-v8.8 · pre-Refit"
campaign_id: campaign_refit
created: 2026-07-21
updated: 2026-07-21
status: active
last_edited_by: agent_rosetta
evidence_basis: "3-agent verified sweep 2026-07-21 (vault state · cross-vault migration · launch-surface QA) + direct file reads"
tags: [sitrep, aar, refit, launch_readiness, estate]
---

# State of the Estate — 2026-07-21

> **Plain-language version:** the site and the standard both shipped, and shipped well — nothing is broken.
> But a week of inbound traffic has piled up while no campaign was open, the live registry is five vaults
> behind the truth, one answer owed to another team has a real deadline (07-31), ~30 improvement proposals sit
> untriaged, and a fresh QA sweep found a handful of honest gaps. This SITREP is the evidence base for
> [[campaign_refit]], the campaign that settles all of it.

## Executive summary

Both flagship campaigns are **genuinely closed and verified**: Operation Storyweave graduated 2026-07-13
(adna.network live; capstone ranker 4.89; 371 gates green; Lighthouse 100s; axe-0 both themes) and Operation
Distillery shipped **governance v8.8** on 2026-07-14 (tag `v8.8`; template CLAUDE.md −24%; all 5 version
surfaces consistent; `adna_validate --governance` zero drift; 7/7 fresh-clone smoke). The standard holds at
**v2.5**. Since 07-14 the vault has been a **quiescent intake window** — every commit is inbound from other
personas. The QA sweep of 2026-07-21 found **zero launch-blocking defects**. What remains is *truth
maintenance and charting*: 4 data-currency items, a 6-element inbound docket (one deadline-bound), ~30
untriaged upstream ideas, 6 QA findings, and a contributor-readiness gap — all folded into
[[campaign_refit]] (P0 chartered today; G1 ratification pending).

## 1. What shipped (the arc since the last consolidated SITREP)

| Ship | Date | Evidence |
|------|------|----------|
| **Storyweave P3–P5** — registry actionability · docs IA · onboarding (M5.1a) · craft/design-system (M5.2) · a11y/perf/reach capstone (M5.3) | 07-11 → 07-13 | STATE ⏭ QUEUED banners; capstone ranker 4.89 ([[m5_3_capstone_ranker]]); deploy `dpl_HeNviXYNLo3EeX68HuAbnGop3FVo`; graduated → `completed` |
| **v8.7 "Cleanroom"** — 4 low-risk riders (STATE `phase:`/`campaigns:` keys · image templates index · fleet-name genericize · visual-inspection fold) | 07-13 | tag `v8.7` @ `1c30f3b`; governance 8.6→8.7 |
| **v8.8 "Distillery"** — template CLAUDE.md prune (aggressive-minus-E3-minus-E2, ~7,720→~5,820 tok, −24%) + inner/root README III + gitleaks rider | 07-14 | tag `v8.8` @ `a32724b`; `aar_v8_8_p3_fire.md`; counts 30 templates / 32 skills |
| **Live-surface health** (verified 2026-07-21) | — | CI green on `gates.yml` (371 gates; latest run SUCCESS); Lighthouse 100/100/100/100 on `/compliance` `/learn` `/reference`, home Perf 100/CLS 0/TBT 0; validator zero drift; 5 version surfaces all v8.8/v2.5 |

## 2. AAR of the arc (what the two campaigns + the intake week teach)

**Worked**
- **Measure-before-re-plan gates** (Storyweave's charter discipline) repeatedly redirected effort to the real
  gap (P4 turned out to be comprehension, not perf; P5 de-risked to onboarding).
- **Operator gates held** — every ship rode a ratified plan or an explicit GO; the one fire-time reversal
  (v8.8 E2 revert) happened *because* the operator re-verified at the gate. The pointer-target lesson
  ("a pointer must deliver what it claims") came out of that same gate.
- **Single-sourcing + gates as fences** — vault-count, standard version, install one-liner all render from
  single sources; the 68→73 regen is consequently gate-safe (gate-21 reads the JSON, no hardcoded coupling).
- **The release lineage pattern** (one campaign per release; `skill_template_release`; tags-only) is now
  smooth at three consecutive executions (v8.6/8.7/8.8).

**Didn't**
- **Status labels lagged reality** — the v8.8 charter frontmatter stayed `active` a week after shipping; STATE
  §Active Campaigns still showed "awaiting P3 fire"; a graduated campaign carried an `active` mission. *(Fixed
  at Refit session-0, commit `0ceb617`.)*
- **Evidence went untracked while docs cited it** — ~114 MB of captures/Lighthouse/measure artifacts that
  committed files reference; a fresh clone dangles. No policy existed. *(→ Refit M4 / DP5.)*
- **Outbound replies stalled silently** — the ADR-022 co-sign was authored 07-03 but never *delivered*;
  Operations still lists the row as open silence. Delivery is operator-gated by design, but nothing surfaced
  the undelivered state. *(→ Refit M1/DP3 + the frontmatter delivery-dependency rule + G3 undelivered list.)*
- **Data currency routed but not consumed** — the registry missed two consecutive inventory refreshes (68→71→73)
  because "route to Hestia" had no return-leg owner until her 07-21 memo put it back in our lane. *(→ Refit M2.)*
- **Intake without disposition** — 8 coord memos and ~30 backlog ideas accumulated with no triage cadence
  during the quiescent window. *(→ Refit M1/M5; the vNext roadmap gives ideas a standing destination.)*

**Key findings**
1. A closed campaign's *claims* need a maintenance owner: "zero orphan surfaces" was true at nav-level and
   silently false at route-level within a week (D1). Claims without checkable traces rot.
2. The quiescent-window failure mode is real and specific: **inbound keeps flowing when no campaign is open**,
   and nothing owns it. A standing decision-queue instrument (Berthier's DP6-item-6 proposal) is the right
   structural answer — adopt it.
3. Deadline-bearing asks must be pulled forward at charter time (B1's 07-31 shaped Refit's whole phase order).

## 3. Estate truth map (Refit work-inventory IDs; verified evidence per row)

### A. Data currency — Rosetta's lane, mechanism ready
| ID | Item | Evidence |
|----|------|----------|
| A1 | `site/src/data/vaults.json` at **68** (generated 2026-07-06) vs canonical **73** (`Home.aDNA/what/inventory/inventory_vaults.yaml`, updated 07-21). Regen green-tested by Hestia (exit 0, 73/14 edges) then reverted — our commit. | Hestia memo §1 |
| A2 | Schema ruling owed: consumer reads `card.tagline` (fallback `note`); `headline_mission` 0/68 + unwired, prose-only. 0/27 cards carry `tagline`; ~46/73 vaults card-less; 3 cards stale; `zeta.aDNA` note missing. | Hestia memo §2 (return leg of our 07-11 thread) |
| A3 | G20 claim-trace fixture pins `vault_count: 54`. | Hestia memo §3 |
| A4 | `verified_paths` REQUIRED_PATHS re-check vs v8.8 image (2 post-freeze paths suspected); install-truth fixture still reflects a v8.7 SHA (standing watch item). | Hestia memo §4; STATE 07-14 banner |

### B. Inbound docket
| ID | Item | Status |
|----|------|--------|
| B1 | vNext `task`-entity slot answer — Operations M44 gated on it; tracker `20260521090500` re-checks **07-25**, due **07-31** | Open; draft staged; DP2 |
| B2 | ADR-022 co-sign row — our co-sign reply EXISTS (`coord_2026_07_03_rosetta_to_berthier_adr022_cosign_reply.md`) but never delivered | Re-delivery; DP3 |
| B3 | D-DP2 six-item token-optimized-process worklist (2 pattern refinements · concept cross-link · consolidation · single-writer extension · new `pattern_decision_queue`) | Per-item ruling; DP6 |
| B4 | Launch-acceptance-contract pattern graduation proposal | DP7 |
| B5 | 8 coord memos untracked since 07-06..16 | ✅ committed at session-0 |
| B6 | Parked: Exchange conformance-spec placement (draft reply operator-held) · Vitruvius ISS-repoint fleet memo | Park-notes at M1 |

### C. Backlog pressure (~30 `proposed` upstream ideas)
Hot five (July): [[idea_upstream_state_history_graduation]] (**priority: high**) ·
[[idea_upstream_path_convention_doctrine]] · [[idea_upstream_mission_frontmatter_key]] ·
[[idea_upstream_fork_kit_agents_enforcement]] · [[idea_upstream_state_frontmatter_phase_campaign_keys]]
(verify-shipped-first). Plus ~25 older (07-06..08 cluster). None triaged; no vNext roadmap exists. → M5.

### D. QA findings (fresh sweep 2026-07-21; none launch-blocking)
| ID | Pri | Finding | Fix lane |
|----|-----|---------|----------|
| D1 | P1 | `/org-context-graphs` live + indexable orphan (no nav links, no noindex/redirect; copy: "waiting to be built") — contradicts the Storyweave "zero orphan surfaces" scorecard claim | M3 / DP4 |
| D2 | P1 | `navigate-a-vault.mdx`: stale "(coming soon)" on 5 shipped sections (glossary = 31 live files); drift-prone hardcoded counts | M3 |
| D3 | P2 | ~114 MB referenced-but-untracked evidence (6 onboarding captures · m42/lighthouse · p5 measure/capstone · `visual_capture_out/`) → fresh-clone dangles | M4 / DP5 |
| D4 | P2 | Status-label lag (v8.8 charter `active`; STATE banner; mission_p5_1; ratification-template provenance v8.4-vs-v8.5) | ✅ session-0 (`0ceb617`) |
| D5 | P2 | Dev-vault `version: "8.4"` reads as drift (it is the doctrine-adoption level, intentional) | M4 (one comment) |
| D6 | P2 | hermes capture set missing 2 light-mode PNGs | M3 |

### E. Dev-readiness gap
No verified contributor pathway across the two public repos + site (CONTRIBUTING / issue templates /
change-proposal process unaudited; the vault-side [[skill_upstream_contribution]] is not surfaced publicly).
Graph thinness: 14 edges / 73 vaults. → M6 (E2 stretch).

## 4. Horizon & held (explicitly NOT Refit work)

- **In-person dev-rel** (operator-deferred, do not build solo): hero-letterbox full-bleed re-cut (4 doc-heroes)
  + R1 demo screencast (M5.1b, turnkey brief ready) → landing both re-ranks the Storyweave capstone ≥4.95.
- **§Pending Manual Actions** (operator-only; re-surface at G3): GitHub social-preview upload (`aDNABanner.png`)
  · Vercel Git auto-deploy integration · Google/Bing site verification · delete `ScienceStanley/m05-test` ·
  ADR-010 Wilhelm co-sign (gates `/commons` un-embargo).
- **Hearthlight P5** fork-time template touch (`template_node_adna_exemplar` home-boot) — gated on Home opening P5.
- **Fleet context**: Clear Hearth CLOSED 07-18 (this vault already re-dieted + trued); shim-registry **Wave 5
  retirement fires ~07-21/22** (old symlink paths may stop resolving — resolve canonical paths at run time);
  WI-16 node-backup SPOF `#needs-human` (whole-tree single-disk risk — relevant to push elections).
- **13+ unpushed local commits by design** (operator-gated push; election at G3).
- **Strategic (FA-owned)**: making `lattice-protocol` + whitepaper public remains the biggest external-credibility
  unlock (EV1 lineage).

## 5. The response

**[[campaign_refit]]** (chartered today, `status: proposed`): P0 Charter ✅ → **G1 ratify (DP1–DP8, target
≤07-24)** → P1 Settle (M1 docket · M2 data) → P2 True-up (M3 site · M4 evidence) → P3 Chart (M5 → vNext
roadmap) → G2 → P4 Ready (M6) → P5 Close → G3 (close + push election). Six missions, 6–9 sessions, no
normative change ships — Refit trues the estate and charters the next release. The full decision packet is
[[ratification_record_refit_g1]].

*Self-reference (SO-8): this SITREP is itself the P0 instrument the campaign pattern prescribes — the evidence
base a charter cites, living in the campaign's `artifacts/`, written before the gate that authorizes the work
it maps.*
