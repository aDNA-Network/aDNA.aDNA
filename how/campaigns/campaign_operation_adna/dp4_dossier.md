---
type: artifact
artifact_id: operation_adna_dp4_dossier
title: "Operation aDNA — DP4 program-close dossier + Track D terminal assessment"
campaign_id: campaign_operation_adna
mission_id: mission_champollion_m6_2_dp4_dossier
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta_builder
status: active
tags: [artifact, operation_adna, program, dp4, track_d, commons, terminal_assessment, champollion, m6_2, keystone]
---

# Operation aDNA — DP4 program-close dossier

> **What this is.** The evidence package the operator needs to fire **DP4** (program close) on
> [[campaign_operation_adna]]. Assembled at Champollion **M6.2** (owner Rosetta, coordinates Venus).
> It does **not** advance the gate and does **not** edit the program doc — it *prepares* the fill so
> firing is one paste (§6). DP4 remains the operator's decision (§7).
>
> **Boundary facts** are pre-pinned from the program doc [[campaign_operation_adna]] + [[coordination_ledger]]
> (both read this session) and cited inline. Track D's verdict (§2) is this dossier's own assessment.

## §1 — Per-track terminal summary

| Track | Terminal state | Terminal gate / date | Evidence citation |
|-------|----------------|----------------------|-------------------|
| **A — Prove it real** (WEBSITE.aDNA) | **CLOSED** | Decision 6 CLOSE GO · 2026-06-21 | [[campaign_operation_adna]] Track Map row A (P0–P4 closed; all 4 decades GO; 281/281 gates; A11y/SEO 100 site-wide). Records: [[RECONCILIATION.aDNA]] + [[FINDINGS.aDNA]] + [[CAMPAIGN-REPORT]]. |
| **B — Make it real** (Hearthstone) | **COMPLETED** | Decision 5 · 2026-06-19 | [[campaign_operation_adna]] Track Map row B (`adr_035` accepted; ontology **14→16** / standard **v2.3**; v8.0 shipped `aDNA-Network/aDNA` @ `adae20c`, 13/13 smoke GREEN). F1→v8.1 (`32b3793`, tag `v8.1`) shipped 2026-06-23 ([[coordination_ledger]] skill_template_release row + [[adr_038_combined_v81_release]]). |
| **C — The engine** (STR) | **TERMINAL** | reopen-reconciliation closeout · 2026-07-01 | [[campaign_operation_adna]] Track Map row C (v8.0 **achieved-via-sibling** [Hearthstone→v8.3]; 5/6 scopes delivered; P4 installer **spun out** → Lighthouse/Terminal/Harness; Completion Summary + Campaign AAR filed). Successor `campaign_adna_v3_ecosystem_compliance` = `planned` stub. |
| **D — The commons** (lens; axis-K + `/commons` + subnetwork showcase) | **TERMINAL** — three named components shipped + live-verified; residual is a Venus-gated horizon, routed | this assessment · 2026-07-03 (Champollion M6.2) | §2 below. Deployed at DP2 launch 2026-06-24 (`/commons` 200; 4/4 subnetwork vault pages 200). |

## §2 — Track D terminal assessment (the evidence walk + verdict)

**Charter (what Track D actually promised).** Track D is *"a lens, not a fifth campaign"* — the
public-good soul **shown** via three components executed inside Track A's axis K and the `/commons`
surface: **real attribution · visible governance · honest federation · mission-aligned subnetworks**
(WGA · Context Commons · WilhelmAI · Rare Archive). The **full social/federation layer** (profiles,
follows, feeds, membership model) was **always scoped as a Venus-gated horizon the site *builds toward*,
not a program deliverable** ([[campaign_operation_adna]] Track Map row D + the "Track D is a lens" note;
[[coordination_ledger]] Network/W-NET row: *"the site builds toward it, does not ship it before the
substrate exists"*). Assessing readiness against that charter — not against a full social network that
was never promised.

### (a) `/commons` — SHIPPED + LIVE
- **Source ships it:** `site/src/pages/commons.astro` — a 4-band surface: **#featured** (curated
  subnetwork grid, `SubnetworkCard.astro`), **#connect** (three real paths — follow / federate a
  wrapper / contribute; every link resolves today, no sign-up implied), **#today** (the first social
  surface — a registry-driven ledger computed **only** from what `subnetworks.json` + `vaults.json`
  record: stewards, attribution, license, governance anchors, declared edges, sync dates), **#join**
  (ClosingCTA carrying the ethos line).
- **Honest-MVP discipline (load-bearing):** the page renders **who-not-how-many** — no contributor
  counts, no stars, no feeds — and a "The horizon" callout states plainly that *"profiles, follows,
  feeds, and shared governance surfaces are **not built yet** … the network builds toward that horizon
  rather than implying it arrived."* The public-good surface is defensible because it does not overclaim.
- **Data:** `site/src/data/subnetworks.json` (`generated_at: 2026-06-24`, `subnetwork_count: 4`) +
  `subnetworks.yaml` (source overlay).
- **Live check:** `https://adna.network/commons` → **200** (verified this session; was 404 pre-launch,
  cleared at DP2 per [[campaign_operation_adna]] §Decision Points DP2).

### (b) Subnetwork showcase — SHIPPED + LIVE (4/4)
- Four mission-aligned subnetworks in `subnetworks.json`: **World Genome Academy** (`ready`),
  **Context Commons** (`ready`), **Wilhelm AI for the Undiagnosed** (Hygieia), **Rare Archive**
  (Mnemosyne). Also surfaced on the homepage (`index.astro` §5 hand-off) + `NetworkDiagram.astro`.
- **ADR-010 embargo — MET then SUPERSEDED.** The Wilhelm pair (WilhelmAI + Rare Archive) carried the
  ADR-010 publishing-contract embargo. It was **not** auto-cleared: the operator **explicitly cleared
  the WF pair for the commons feature on 2026-06-07** (AskUserQuestion, ADR-010-window override) —
  `publish_status: operator_cleared_2026_06_07` in `subnetworks.json`/`.yaml`; `SubnetworkCard.astro`
  header notes the same. The E5 close green-light + the DP2 launch (2026-06-24) then **deployed** the
  full 4-subnetwork showcase. So the embargo class is behind us, cleared by operator action recorded on
  the surface itself.
- **Live check:** `/vaults/wga.aDNA/` · `/vaults/ContextCommons.aDNA/` · `/vaults/WilhelmAI.aDNA/` ·
  `/vaults/RareArchive.aDNA/` → **200 / 200 / 200 / 200** (verified this session).

### (c) Axis-K / ethos layer — FORMALIZED (operator-ratified, live)
- **M5.7 dial ratification:** the public-good ethos (*language + DNA as shared civilizational heritage;
  shared context as a democratic public good; subtle-but-front-of-mind; dial ~55/45*) was
  **operator-ratified 2026-06-03** at the M5.7 gate. Cite: `campaign_adna_serious_tool_readiness.md`
  amendments row "M5.7 RATIFIED …"; `m57_eseries_ecosystem_theme_set.md` §Ratification; the ethos
  doctrine `what/design/narrative_ethos_public_good.md`; memory `project_adna_network_ethos`.
- **T1 "context democracy" cleared-FORMAL:** the framing is operator-ratified ethos, **live in
  production, re-verified 2026-07-02**. Cite: [[../campaign_champollion/artifacts/t1_context_democracy_clearance|t1_context_democracy_clearance]]
  (live on the landing page since DP2 `7dfe20c`; Champollion M4.4 product-story pass re-checked with
  **zero edits**).

### Open-item scan (program dir + coordination_ledger)
Python scan of `campaign_operation_adna/` for OPEN commons/axis-K/Track-D rows returned **one genuine
Track-D seam**: the **Network / W-NET federation** row — status **`deferred` (Venus-gated; PT P5.5 /
Network P6)** — which is the *horizon by design* (§2 charter), not an unshipped deliverable. (Two other
matches were "tracked" false-positives — the Hestia-owned doctrine-relocation carve-out and vault-card
public-fields seams; the ledger's own post-launch note confirms **neither gates DP4**.)

### VERDICT — **READY** (Track D terminal)
All three named Track-D components **shipped at DP2 (2026-06-24) and are live-verified** this session
(`/commons` 200; 4/4 subnetwork vault pages 200; ethos formalized + live). **No commons deliverable
promised as program work is unshipped.** The single residual — the full social/federation layer — was
scoped from the outset as a **Venus-gated horizon the site builds toward**, and the surface says so
honestly on its face. Residual is **routed** (§5), not blocking. Track D has reached its terminal gate.

## §3 — Program outcomes vs the keystone

The program's one synchronization point was the **keystone = the coordinated public launch** (the three
must land *together* so the site's "clone and inspect" pitch is true the day it ships). It **FIRED
2026-06-24** ([[campaign_operation_adna]] §Program gates "LAUNCHED 2026-06-24 ✅" + §Decision Points DP2).
What the program actually synchronized — the three keystone conditions, all green joined-up:

1. **WEBSITE.aDNA credibility-fixes shipped** — the 4 Criticals cleared + deployed; **all 7 C-1
   proof-links live-200-unauth** against `aDNA-Network/aDNA`; C-1 stage-2 + the 14→16 / v2.3 entity-count
   currency + the Tier-2 spec-mirror v2.3 port all deployed. ([[coordination_ledger]] C-1 row +
   improved-site-deploy row, both **CLOSED**.)
2. **Hearthstone v8.0 base image released** — `skill_template_release` push to `aDNA-Network/aDNA` @
   `adae20c`, 13/13 smoke GREEN (F1→v8.1 `32b3793` 2026-06-23). ([[coordination_ledger]]
   skill_template_release row = **GREEN/closed**.)
3. **pt19 vault-data regen landed** — 2026-06-23 (`d00c401`→`6d584c2`); regen clean at **54 vaults**,
   keeper-set names; **0/12 pre-rename slugs** live at launch. ([[coordination_ledger]] pt19 row = **CLOSED**.)

Deploy of record: `vercel --prebuilt --prod` → `dpl_AYKPbywF`, aliased **https://adna.network**;
`/commons` 200 (was 404); on-live **Lighthouse Perf 98 · A11y 100 · BP 100 · SEO 100**; `origin/main`
pushed + standing-watch CI active. **The north-star keystone — the joined-up "it's all true now" moment
— fired as designed.**

## §4 — What DP4 firing MEANS and does NOT close

**Firing DP4 =** (a) fill the program doc's **Completion Summary** (Deliverables + Key Findings/Scope
Changes/Follow-Up) and **Program AAR** (5 lines) — draft text in §6; (b) set `status: completed` on
[[campaign_operation_adna]]. Per DP4's own definition, *"children persist as their own records."*

**DP4 does NOT close (all continue under their own owners):**
- **Operation Champollion** — the ACTIVE pre-launch campaign is at **P6**; **G6 (the v8.4 release gate)
  is pending** and **P7 remains**. Program-close ≠ Champollion-close. Champollion continues the
  standard's release cadence beyond this program.
- **The live site + standing-watch CI** — `adna.network` stays live; `.github/workflows/gates.yml`
  keeps running. Program close is not site retirement.
- **Per-vault campaigns** — every child's own records persist (WEBSITE/Hearthstone/STR are terminal as
  *their own* closed records; STR's successor `campaign_adna_v3_ecosystem_compliance` is a `planned` stub).
- **The Venus / Network.aDNA thread** — informational only; the full social/federation layer is
  co-designed with Network (Operation First Light) on its own gate. No cross-direction dependency
  (Network STATE head 2026-07-02 carries zero "commons"/"Track D" mentions — the coordination is a
  courtesy note, §5).

## §5 — Open threads routed (every non-terminal thread → owner + venue)

| Thread | Nature | Owner | Venue |
|--------|--------|-------|-------|
| Full social/federation layer (profiles · follows · feeds · membership/federation model) | Venus-gated **horizon** — the site builds toward it; MVP shipped now | **Venus / Network.aDNA** | Network First Light (PT P5.5 / Network P6); co-design per [[narrative_ethos_public_good]] §5. Informational memo: [[coord_2026_07_03_rosetta_to_venus_track_d_terminal_dp4]]. |
| Site-surface / commons currency (subnetwork rows, vault-name correctness) | standing site maintenance | **Rosetta (standing)** | `aDNA.aDNA/site/`; rides normal deploy cadence + standing-watch CI. |
| doctrine-relocation carve-out (`Context.aDNA` `adr_010` repoint) | cross-vault currency; **non-blocking**, does NOT gate DP4 | **Hestia / Home.aDNA** (Prometheus/Context to quiesce) | [[coordination_ledger]] doctrine-relocation row. |
| vault-card public-fields (Harness display split; per-vault public `tagline`) | cross-vault registry currency; **non-blocking**, does NOT gate DP4 | **Hestia / Home.aDNA** | [[coordination_ledger]] vault-card row; fold into pt19-class regen handshake. |
| Registry regen after inventory edits | standing regen | **Hestia / ADR-023 registry-generator lane** | Home.aDNA inventory → `build_vaults_data.mjs` on the site. |
| Community programs (Context Commons enablement) | subnetwork's own roadmap | **ContextCommons.aDNA** | its own campaign; the showcase links its public face. |

The **DP4-readiness note** ([[campaign_operation_adna]] line 129, 2026-07-01) names only **Track D** as
DP4's remaining gate — this dossier discharges it. It introduces no further threads of its own.

## §6 — DRAFT text for the operator to paste at DP4 firing

> Paste into [[campaign_operation_adna]] §Completion Summary + §Program AAR, then set
> `status: completed` + bump `updated:`. Program-honest, not celebratory.

### Completion Summary (draft)

**Deliverables**
- **The coordinated public launch (keystone) — LAUNCHED 2026-06-24.** `adna.network` live with the full
  improved site landed joined-up with the shipped Hearthstone v8.0 base; the site's "real, inspectable
  vault" claim is backed by a real published base (the credibility seam held). On-live green:
  `/commons` 200, 7/7 C-1 proof-links live-200-unauth, Lighthouse Perf 98 · A11y 100 · BP 100 · SEO 100.
- **All keystone-precondition seams closed** in [[coordination_ledger]]: pt19 · skill_template_release ·
  Lab ADR-006 bootstrap-offer · CanvasForge→Canvas repoint · C-1 public inspectability ·
  improved-site-deploy · standard-currency/spec-mirror v2.3.
- **Cross-track AAR** (below) — the program-level read of the track *interactions*.
- **Track D terminal assessment** ([[dp4_dossier]] §2) — the public-good commons *shown* and live:
  `/commons` (4 bands, registry-driven, honest-MVP), the 4-subnetwork showcase (Wilhelm pair
  operator-cleared 2026-06-07), and the formalized ethos/axis-K layer (M5.7 dial + T1 context-democracy).

**Key Findings / Scope Changes / Follow-Up**
- **Finding:** the program reduced to a single question — *"is the thing the site points at actually
  real?"* Credibility-integrity (claims verified against the real graph), not aesthetics, was the
  load-bearing bar; Hearthstone's real base is what made the site's claim true rather than asserted.
- **Scope change:** Track D's owner row drifted (mis-marked as in-flight-inside-closed-Track-A);
  **corrected 2026-07-02** to *Rosetta · coordinates with Venus*, and its residual discharged here at
  Champollion M6.2 rather than as a separate campaign.
- **Follow-up:** the full social/federation layer is a **Venus-gated horizon** (Network First Light) —
  the site honestly builds toward it. Two Hestia currency seams (doctrine carve-out, vault-card fields)
  stay open + non-blocking. **Operation Champollion (G6/P7) continues the standard's release beyond this
  program's close.** Children persist as their own records.

### Program AAR (draft)

- **Worked:** thin orchestration held — the program held only the track map, keystone, seams, and
  cross-track AAR, never re-implementing a child. The **keystone landed joined-up** (2026-06-24) and the
  credibility seam closed exactly as the integration thesis predicted (7/7 proof-links live).
- **Didn't:** **pt19** was the headline gate and slipped ~1 week behind pt17/Network P6, forcing the
  keystone payload to be verified-and-parked **twice** (2026-06-22 ×2) before it landed 2026-06-23. The
  Track-D owner row also drifted until corrected 2026-07-02.
- **Finding:** the **honest-MVP discipline** (commons shows who-not-how-many; names the un-built horizon
  on its own face) is what made the public-good surface defensible — overclaiming would have spent the
  realness the whole program was built to earn.
- **Change:** make the **two-class owner tag** standing program doctrine — *flag cross-vault currency
  (pt19-class), verify-after, never hand-fix*; it kept Track A honest against a moving substrate.
- **Follow-up:** hand the social/federation horizon to **Venus/Network First Light**; let **Champollion**
  carry the standard's release cadence (G6/P7); Hestia's two currency seams close on her cadence,
  non-blocking.

## §7 — The line

**DP4 firing is the operator's decision; this dossier prepares it and advances nothing.**
