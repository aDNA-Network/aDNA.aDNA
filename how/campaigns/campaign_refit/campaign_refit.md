---
campaign_id: campaign_refit
type: campaign
title: "Operation Refit — post-launch consolidation: true the estate, settle the docket, chart vNext"
owner: stanley
persona: rosetta
status: proposed          # → active only at G1 (§7.7 operator ratification; DP packet = artifacts/ratification_record_refit_g1.md)
opens_at: 2026-07-21
phase_count: 6
mission_count: 6
estimated_sessions: "6-9"
calibrated_sessions: "6-9"
estimation_class: "governance-broad"
executor_tier: opus       # campaign-level; per-mission overrides (M2 = sonnet) in each mission spec
priority: high            # deadline-bound: the B1 answer is due 2026-07-31 (Operations tracker 20260521090500, re-checks 07-25)
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [campaign, refit, consolidation, data_currency, disposition_sweep, vnext_roadmap, dev_readiness, launch_readiness]
---

# Campaign: Operation Refit — true the estate · settle the docket · chart vNext

```
╭─ campaign_refit · rosetta ─────────────────────────── 🧬 aDNA / Rosetta OPENING ─╮
│  opened 2026-07-21    (top-level campaign)
├──────────────────────────────────────────────────────────────────────────────────┤
│  INTENT   true every live surface, settle the inbound docket, chart vNext
│           ↳ north-star: standard/site/graph/repos/docs at launch + development quality
│
│  MISSION TREE
│    🔲 M1 mission_refit_1_disposition_sweep   (planned · P1 · opus  ·  80 kT · DUE 07-31)
│    🔲 M2 mission_refit_2_data_currency       (planned · P1 · sonnet ·  50 kT)
│    🔲 M3 mission_refit_3_site_truth          (planned · P2 · opus  ·  70 kT)
│    🔲 M4 mission_refit_4_evidence_policy     (planned · P2 · opus  ·  60 kT)
│    🔲 M5 mission_refit_5_vnext_triage        (planned · P3 · opus  · 120 kT)
│    🔲 M6 mission_refit_6_dev_readiness       (planned · P4 · opus  · 80+40 kT)
│
│  PLAN     phases P0→P5 · 6-9 sessions · ~460-500 kT est (content-load) · 8 hard constraints
├──────────────────────────────────────────────────────────────────────────────────┤
│  GATES    phase gates are human gates · begin at G1 (ratify DP1–DP8) → M1
╰──────────────────────────────────────────────────────────────────────────────────╯
```

> **Codename note**: "Refit" — after two back-to-back voyages (Storyweave shipped the site 07-13; Distillery
> shipped v8.8 on 07-14), the vessel comes in for refit: hull inspection below the waterline (QA findings,
> status truth), re-provisioning (registry/data currency), settling the harbor ledger (the inbound docket),
> and drawing the charts for the next voyage (vNext roadmap + seeded successor release stub). Operator-renameable
> at G1. *("Drydock" fit better but is taken — aDNALabs' lattice-labs archival op, M05 2026-06-27.)*

## Goal

Bring every live surface of the aDNA estate — the adna.network site, the vault registry/graph data, the
governance record, and the coordination ledger — back to **verified truth**; settle the **inbound docket**
(including the one deadline-bearing item: Operations' vNext `task`-slot answer, **due 2026-07-31**); convert
the ~30-idea upstream backlog into a **ratified vNext roadmap** (v8.9 governance batch vs v2.6 standard window)
with a **seeded successor release-campaign stub**; and close the **contributor-readiness** gaps — so the
standard, website, graph, repos, and docs sit at launch + development quality. **No normative change ships in
this campaign** (standard stays v2.5, governance stays 8.8): Refit trues the estate and *charters* the next
release rather than firing one.

## Context

Storyweave graduated 2026-07-13 (capstone ranker 4.89; adna.network live, 371 gates green, Lighthouse 100s);
Distillery shipped v8.8 on 2026-07-14. Since then the vault has been a **quiescent intake window** — every
commit is inbound from other personas (Clear Hearth housekeeping, Hearthlight imagery, upstream ideas, coord
memos). Nothing is broken — the QA sweep of 2026-07-21 found **zero launch-blocking defects** — but truth has
drifted from the record in four streams: **(A)** data currency (registry 68 vs 73 canonical; fixtures pinned at
54), **(B)** an un-dispositioned inbound docket (one item deadline-bound), **(C)** ~30 `proposed` upstream ideas
with no roadmap, and **(D)** QA findings (an indexable orphan page, a stale guide, ~114 MB of referenced-but-
untracked evidence, status-label lag). The full evidence base is the campaign SITREP:
[[sitrep_2026_07_21_state_of_the_estate]].

**Why a campaign, not loose sessions**: the streams cross-couple (the schema ruling feeds the regen; the triage
feeds the release stub; the deadline forces sequencing), several items are §7.7 operator decisions that deserve
one coherent ratification packet rather than drip-fed asks, and the work spans 6–9 sessions — exactly the
campaign shape (mirrors the Meridian consolidation precedent).

## Scope

### In scope

- **A. Data currency (Rosetta's lane, mechanism green-tested)**: A1 registry regen `vaults.json` 68→73 · A2 the
  `tagline` vs `headline_mission` schema ruling + Home backfill authorization (~46 cards, 3 stale, zeta note) ·
  A3 G20 claim-trace fixture 54→73 · A4 `verified_paths` REQUIRED_PATHS re-check + close.
- **B. Inbound docket**: B1 vNext `task`-slot answer (**due 07-31**) · B2 ADR-022 co-sign **re-delivery** (the
  2026-07-03 co-sign reply exists; the row is a delivery failure, not an open decision) · B3 the D-DP2 six-item
  process-adoption worklist (per-item adopt/amend/decline at G1) · B4 `pattern_launch_acceptance_contract`
  adoption · B5 coord-memo intake (✅ done at session-0) · B6 park-notes for the Exchange + Vitruvius memos.
- **C. vNext charting**: C1–C5 deep triage of the 5 hot July ideas · C6 light sweep of ~25 older `proposed`
  ideas · the **vNext roadmap** (v8.9 vs v2.6 split) · a seeded successor release-campaign stub (`status:
  planned`) ratified at G2.
- **D. QA fixes**: D1 `/org-context-graphs` retirement (per DP4) + dated AAR-claim reconciliation · D2
  `navigate-a-vault.mdx` refresh · D3 the three-class evidence-artifact policy + dangle-safe application · D4
  status hygiene (✅ done at session-0) · D5 the dev-vault `version: "8.4"` clarifying comment · D6 the 2
  missing hermes light-mode captures.
- **E. Dev-readiness**: E1 contributor-pathway audit + gap fill (CONTRIBUTING, issue templates, change-proposal
  process; site community/get-started surfaces) · E2 *stretch*: vault-graph edge enrichment from
  `federation_ref` blocks (14 edges / 73 vaults is thin).

### Out of scope (hard)

- **Re-opening `campaign_storyweave` or `campaign_v8_8_release`** — both closed, both "DO NOT re-open." AAR-claim
  reconciliation happens as *dated annotations*, never as re-opened work.
- **The 2 operator-deferred in-person items** — hero-letterbox full-bleed re-cut + the R1 demo screencast
  (M5.1b). Held for in-person dev-rel; landing both re-ranks the capstone ≥4.95. **Do not build solo.**
- **Firing a release** — the successor release campaign is *seeded* here (G2) and fired later via
  `skill_template_release` as its own campaign (the v8.6/8.7/8.8 lineage).
- **Hearthlight P5 fork-time template touch** — gated on Home opening P5; horizon only.
- **The §Pending Manual Actions list** (GitHub social preview · Vercel Git integration · site verification ·
  scratch-repo deletion · ADR-010 co-sign) — operator-only; re-surfaced at G3.
- **Push to remotes** — operator election only (G3); local surgical commits throughout.

## Phases & gates

```
P0 Charter (2026-07-21)  →  G1 RATIFY (operator; DP1–DP8; target ≤07-24)  →  P1 Settle (M1, M2)
→  P2 True-up (M3, M4)  →  P3 Chart (M5)  →  G2 RATIFY ROADMAP (operator; DP9)
→  P4 Ready (M6; may start pre-G2 — independent of the roadmap ruling)  →  P5 Close  →  G3 CLOSE (operator; DP10)
```

| Phase | Content | Exit gate |
|-------|---------|-----------|
| **P0 Charter** | SITREP/AAR artifact · campaign scaffold (this doc + CLAUDE + 6 missions + DP packet + staged B1 draft + open splash) · session-0 hygiene (status truth ✅ · coord intake ✅) | Scaffold complete; G1 presented |
| **G1 RATIFY** | Operator rules DP1–DP8, signs the 4-field block → charter `proposed → active` | Signed record; **target ≤07-24** so M1's transmission beats the 07-25 tracker re-check |
| **P1 Settle** | M1 disposition sweep (deadline first) · M2 data currency | B1 memo committed for delivery + all B-rows dispositioned + `vaults.json`@73 with gates green |
| **P2 True-up** | M3 site truth · M4 evidence policy | `npm run test:gates` + build green; dangle-check clean both sides of the gitignore |
| **P3 Chart** | M5 vNext triage → roadmap + stub | Every idea dispositioned; roadmap authored; stub staged |
| **G2 RATIFY ROADMAP** | Operator rules DP9 (v8.9-vs-v2.6 split · stub name/scope · escalated per-idea rulings) | Signed; stub dir created at `status: planned` |
| **P4 Ready** | M6 dev-readiness (E1; E2 stretch) | Contributor pathway complete or gap-listed; image-side work staged DE-LINKed |
| **P5 Close → G3** | Campaign SITREP + AAR + close splash · Pending-Manual-Actions re-surface · push election (DP10) | Operator accepts close |

## Missions

| # | Mission | Phase | Budget (kT) | Tier | Sessions | Covers |
|---|---------|-------|-------------|------|----------|--------|
| M1 | [[mission_refit_1_disposition_sweep]] | P1 | 80 | opus | 1–2 | B1 (due 07-31) · B2 · B3 · B4 · B6 |
| M2 | [[mission_refit_2_data_currency]] | P1 | 50 | sonnet | 1 | A1 · A2 · A3 · A4 |
| M3 | [[mission_refit_3_site_truth]] | P2 | 70 | opus | 1 | D1 · D2 · D6 |
| M4 | [[mission_refit_4_evidence_policy]] | P2 | 60 | opus | 1 | D3 · D5 |
| M5 | [[mission_refit_5_vnext_triage]] | P3 | 120 | opus | 1–2 | C1–C6 · roadmap · stub |
| M6 | [[mission_refit_6_dev_readiness]] | P4 | 80 (+40 stretch) | opus | 1–2 | E1 · E2 |

Session math: P0=1 · M1=1–2 · M2=1 · M3=1 · M4=1 · M5=1–2 · M6=1–2 (close rides the final session) → **6–9**
(floor 6 if M3+M4 pair and M1/M5/M6 land as singles). Campaign estimate ~460–500 kT content-load (SO-11);
per-mission actuals logged in each AAR.

## Decision points (the G1/G2/G3 packet — full text in [[ratification_record_refit_g1]])

| DP | Gate | Decision | Recommendation |
|----|------|----------|----------------|
| DP1 | G1 | Registry canonical field + card backfill | **`card.tagline` canonical** (wired; fallback `note`); retire/alias `headline_mission` in prose; authorize Home backfill ~46 cards + clean 3 stale + zeta note |
| DP2 | G1 | B1 `task`-entity one-liner (due 07-31) | **"Candidate for the v2.6 standard window (evaluated in M5's roadmap, G2-ratified); NOT in motion for v8.9 or any near-term governance batch — re-card M44."** Transmit ≤07-24 |
| DP3 | G1 | ADR-022 row | Re-affirm the existing 2026-07-03 co-sign; re-deliver the pointer (bundled with the B1 memo) |
| DP4 | G1 | `/org-context-graphs` | **Retire** — redirect → `/vaults`, remove the page; dated annotation reconciling the Storyweave "zero orphan surfaces" claim |
| DP5 | G1 | Evidence-artifact policy | **Three classes**: cited-slim → committed · bulk-regenerable → gitignored + committed synthesis · external corpora → ignored (precedent `1616ae4`) |
| DP6 | G1 | D-DP2 six-item worklist | **Adopt 1** (integrity-verified STATE roll) · **Adopt 2** (§2.6 adversary-born-PENDING + resume-not-respawn; *rider: ratify our own §2.7, `proposed` since 07-14, at the same gate*) · **Adopt 3** (process-layer concept cross-links) · **Adopt-as-consolidation 4** (Plan-Approve-Execute onto existing surfaces, no new pattern — Berthier's own framing) · **Amend 5** (promote single-writer general form within doctrine §8 + pair with `idea_upstream_single_writer_lease_for_inventory`; standalone pattern deferred to M5 triage) · **Adopt 6** (`pattern_decision_queue`; request Berthier's reference implementation as instance seed) |
| DP7 | G1 | Launch-acceptance-contract | **Adopt** as `what/patterns/pattern_launch_acceptance_contract.md`; request Berthier's A#-row instance seed |
| DP8 | G1 | Dev-readiness scope | **E1 in; E2 stretch-only** (first cut on overrun) |
| DP9 | G2 | vNext split + successor stub | Ratify M5's roadmap (v8.9 governance vs v2.6 standard window); seed the stub at `status: planned` |
| DP10 | G3 | Close + push election | Accept close; review §Pending Manual Actions; elect/defer push of accumulated local commits (incl. outbound memos — the ADR-022 lesson) |

## Hard constraints (8)

1. **Never re-open Storyweave/Distillery** — annotations only, dated, in Refit's own artifacts.
2. **Never solo-build the 2 in-person deferred items** (hero re-cut · R1 demo).
3. **No normative surface ships** — standard v2.5 + governance 8.8 hold; adopted patterns/concepts are
   dev-vault-side only until the next release campaign fires.
4. **Commit-no-push** — local surgical path-scoped commits; push is a G3 operator election (SO-9 lineage).
5. **Image-side work is staged DE-LINKed** in `artifacts/`, shipping only via `skill_template_release`
   (the Distillery SR1 discipline). Direct `.adna/` / public-repo edits prohibited.
6. **Headless-first visuals** — T0 `scripts/visual_capture.mjs` (+`--axe`); never assume Chrome
   ([[doctrine_visual_inspection]]).
7. **STATE.md = anchor-insert + single-writer lease** — re-read `updated` before write; stamp on write; one
   STATE edit batch per session.
8. **The B1 answer transmits before 07-31** (target ≤07-24). If G1 slips, the DP2 micro-ratification fires
   standalone — the deadline item never waits on the full packet.

## Risks & mitigations

| # | Risk | Mitigation |
|---|------|------------|
| 1 | Regen on a dirty tree sweeps unrelated files | Single-file staging (`git add site/src/data/vaults.json`); evidence dirs untouched until M4's policy lands |
| 2 | STATE.md heavy-file corruption | Hard constraint 7 |
| 3 | Concurrent Hestia sessions collide | Session lock in `how/sessions/active/`; Hestia explicitly deferred the regen to Rosetta (no `vaults.json` contention); Home-side backfill touches Home files only |
| 4 | Shim Wave 5 (~07-21/22) retires workspace symlinks mid-campaign | Resolve canonical paths at run time; never hardcode retired names (e.g. `DataRoom.aDNA`) |
| 5 | G1 slips past 07-24 | Hard constraint 8 (DP2 micro-ratification path) |
| 6 | Gitignoring evidence that committed docs cite | M4's fixed order: commit slim cited set + synthesis notes → ignore → fix refs → dangle-check both sides |
| 7 | M5 triage overrun (30 ideas / 120 kT) | Two-pass seam (5 deep / 25 light) is a sanctioned split point; defer-with-trigger is a first-class disposition |
| 8 | Outbound memos silently staying local (the ADR-022 failure mode) | Every outbound memo's frontmatter names its delivery dependency; G3 lists undelivered outbound items |
| 9 | Scope creep re-opening closed campaigns | Hard constraint 1; campaign CLAUDE.md standing order |

## Verification

- **Every mission**: session file before edits · 5-line AAR before `status: completed` (SO-5) ·
  `token_budget_actual` + estimate-vs-actual in the AAR (SO-11) · surgical commits, no push.
- **Governance-touching (M1, M4, M5)**: `python3.13 what/lattices/tools/adna_validate.py . --governance` →
  zero drift · dual-audience (SO-7) + self-reference (SO-8) + ≥2 wikilinks (SO-10) on every new
  pattern/roadmap/policy doc.
- **Site-touching (M2, M3, M6)**: `npm run test:gates` (full) + `npx astro build` in `site/` · gate-21 count
  check immediately post-regen · gate-20 claim-trace against the refreshed fixture · gate-6 meta + gate-13 nav
  after the D1 retirement · gate-22 graph-SSR for E2.
- **Campaign close**: full gate suite green + zero-drift + the close SITREP reconciling **every A–E row** to a
  disposition (done / deferred-with-owner / declined-with-reason) — no claim without a checkable trace (the
  lesson D1 taught).

## Evidence base

- [[sitrep_2026_07_21_state_of_the_estate]] — the comprehensive SITREP/AAR (P0 artifact; the operator-requested
  state-of-the-estate).
- Inbound: [[coord_2026_07_21_hestia_to_rosetta_inventory_refresh_and_tagline_finding]] ·
  [[coord_2026_07_16_berthier_to_rosetta_vnext_cosign_v88_nudge]] ·
  [[coord_2026_07_16_berthier_to_rosetta_ddp2_docs_propagation]] ·
  [[coord_2026_07_17_berthier_to_rosetta_launch_acceptance_contract_graduation]].
- Backlog (hot): [[idea_upstream_state_history_graduation]] · [[idea_upstream_path_convention_doctrine]] ·
  [[idea_upstream_mission_frontmatter_key]] · [[idea_upstream_fork_kit_agents_enforcement]] ·
  [[idea_upstream_state_frontmatter_phase_campaign_keys]].

## Session-0 record (2026-07-21)

Hygiene executed pre-G1 as operational maintenance (truth-restoration of already-decided facts, never build):
status truth (`0ceb617` — v8.8 charter `active→completed` · mission_p5_1 `active→deferred` ·
template_ratification_record provenance v8.4→v8.5 · STATE §Active-Campaigns trued + Refit entry) + the 8-memo
coordination intake commit. Everything else waits for G1.

## Ratification

Charter `status: proposed`. The G1 instrument is [[ratification_record_refit_g1]] (Entry Point B ceremony,
DP1–DP8). Only the named operator advances it — and this charter — to `accepted`/`active` (§7.7).
